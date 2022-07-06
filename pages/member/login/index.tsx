import { gql, useApolloClient, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import * as L from "../../../src/components/units/member/login/Login.styles";
import LoginValidation from "../../../src/components/units/member/login/Login.Validation";
import { GlobalContext } from "../../_app";

// const LOGIN_EXAMPLE = gql`
//   mutation loginUserExample($password: String!, $email: String!) {
//     loginUserExample(password: $password, email: $email) {
//       accessToken
//     }
//   }
// `;

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const router = useRouter();
  const client = useApolloClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser] = useMutation(LOGIN_USER);
  // const [loginUserExample] = useMutation(LOGIN_EXAMPLE);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // const onClickLogin = async () => {
  //   if (LoginValidation(email, password)) {
  //     try {
  //       // 로그인 하기
  //       const result = await loginUser({
  //         variables: {
  //           password: password,
  //           email: email,
  //         },
  //       });
  //       const accessToken = result?.data?.loginUser.accessToken;

  //       const resultUserInfo = await client.query({
  //         query: FETCH_USER_LOGGED_IN,
  //         context: {
  //           headers: { Authorization: `Bearer ${accessToken}` },
  //         },
  //       });
  //       const userInfo = resultUserInfo.data.fetchUserLoggedIn;

  //       if (!setAccessToken) {
  //         Modal.error({ content: "로그인을 먼저 해주세요" });
  //         router.push("/member/login");
  //       }

  //       if (setAccessToken) setAccessToken(accessToken);
  //       if (setUserInfo) setUserInfo(userInfo);

  //       // localStorage.setItem("accessToken", accessToken);
  //       // localStorage.setItem("userInfo", JSON.stringify(userInfo));

  //       // console.log(result?.data?.loginUser.accessToken);
  //       // // 잘 들어가 있는지 확인하기, 문자열 다시 객체로 바꾸기
  //       // console.log("======================");
  //       // console.log(localStorage.getItem("accessToken"));
  //       // console.log(JSON.parse(localStorage.getItem("userInfo") || "{}"));

  //       // console.log("======================");

  //       router.push("/home"); // 이전 페이지 기억해서 넘어가기
  //     } catch (error) {
  //       if (error instanceof Error) Modal.error({ content: error.message });
  //     }
  //   }
  // };

  const onClickLogin = async () => {
    if (LoginValidation(email, password)) {
      try {
        // 로그인 하기
        const result = await loginUser({
          variables: {
            password: password,
            email: email,
          },
        });

        const accessToken = result?.data?.loginUser.accessToken;

        if (!setAccessToken) {
          Modal.error({ content: "로그인을 먼저 해주세요" });
          router.push("/member/login");
        }

        // accessToken을 글로벌 스테이트에 저장하기
        if (setAccessToken) {
          setAccessToken(accessToken);

          //userInfo
          const resultUserInfo = await client.query({
            query: FETCH_USER_LOGGED_IN,
            context: {
              headers: { Authorization: `Bearer ${accessToken}` },
            },
          });
          const userInfo = resultUserInfo.data.fetchUserLoggedIn;

          if (setUserInfo) {
            setUserInfo(userInfo);
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            // console.log(userInfo);

            router.push("/home"); // 이전 페이지 기억해서 넘어가기
          }
        }
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };

  return (
    <L.Wrapper>
      <L.LoginWrapper>
        <h1>환영합니다</h1>
        <L.SubTitle>입력해주세요</L.SubTitle>
        <L.InputWrapper>
          <L.InputLabel>이메일 주소</L.InputLabel>
          <L.InputField
            type="text"
            placeholder="jeje@flower.com"
            onChange={onChangeEmail}
          ></L.InputField>
        </L.InputWrapper>
        <L.InputWrapper>
          <L.InputLabel>비밀번호</L.InputLabel>
          <L.InputField
            type="password"
            placeholder="비밀번호 입력"
            onChange={onChangePassword}
          ></L.InputField>
        </L.InputWrapper>
        <L.LoginButton onClick={onClickLogin}>로그인</L.LoginButton>
      </L.LoginWrapper>
      {/* <ul className="subMenu">
          <li>회원가입</li>
          <li>비밀번호 찾기</li>
        </ul> */}
      <L.SubWrapper>
        <L.Join>회원가입</L.Join>
        <L.FindPassword>비밀번호 찾기</L.FindPassword>
      </L.SubWrapper>
    </L.Wrapper>
  );
}
