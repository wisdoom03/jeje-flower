// import "../styles/globals.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { Global } from "@emotion/react";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc1iEoPFVnYTvlxreTgZ14PWwsN4t9BJs",
  authDomain: "jeje-db.firebaseapp.com",
  projectId: "jeje-db",
  storageBucket: "jeje-db.appspot.com",
  messagingSenderId: "150326135645",
  appId: "1:150326135645:web:84d369f897398e056476b4",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  userInfo?: {
    name?: string;
    email?: string;
    picture?: string;
  };
  setUserInfo?: Dispatch<SetStateAction<string>>;
}
export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const value = {
    accessToken,
    setAccessToken,
    userInfo,
    setUserInfo,
  };
  // shortHand property : 원래 accessToken: accessToken 이렇게 작성

  useEffect(() => {
    // 페이지를 새로고침하면 토큰이 날아가기 때문에 localStorage에 저장했다가 불러오기

    if (localStorage.getItem("userInfo")) {
      setUserInfo(JSON.parse(localStorage.getItem("userInfo") || ""));
    }

    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러 캐치
    if (graphQLErrors) {
      // for, map, forEach등 원하는대로 작성!
      for (const err of graphQLErrors) {
        // 2. 해당 에러가 토큰만료 에러인지 체크 (UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 3. refreshToken으로 accessToken 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 4. 재발급받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // 5. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            operation.setContext({
              headers: {
                ...operation.getContext().headers, // 원래 내용 가져오고, accessToken만 바꿔주기
                Authorization: `Bearer ${newAccessToken}`,
              },
            }); // 설정변경 (accessToken 바꿔치기. 기존내용 냅두고 토큰만! 바꿔치기)
            return forward(operation); // 변경된 operation 재요청하기
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    // uri: "https://backend05.codebootcamp.co.kr/graphql/09",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    // chahe ; 임시저장 -> InMemoryCahe import하기
    connectToDevTools: true,
  });

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
