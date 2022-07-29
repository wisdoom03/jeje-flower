import { gql, useApolloClient, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";
import { LoginValidation } from "./Login.Validation";
import * as L from "./Member.styles";

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

export default function MemberLogin() {
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const router = useRouter();
  const client = useApolloClient();

  const [loginUser] = useMutation(LOGIN_USER);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const onClickLogin = async () => {
    if (LoginValidation(inputs.email, inputs.password)) {
      try {
        // 로그인 하기
        const result = await loginUser({
          variables: {
            password: inputs.password,
            email: inputs.email,
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
        <L.InputWrapper>
          <L.InputLabel>이메일 주소</L.InputLabel>
          <L.InputField
            id="email"
            type="text"
            placeholder="jeje@flower.com"
            onChange={onChangeInputs}
          ></L.InputField>
        </L.InputWrapper>
        <L.InputWrapper>
          <L.InputLabel>비밀번호</L.InputLabel>
          <L.InputField
            id="password"
            type="password"
            placeholder="비밀번호 입력"
            onChange={onChangeInputs}
          ></L.InputField>
        </L.InputWrapper>
        <L.LoginButton onClick={onClickLogin}>로그인</L.LoginButton>
      </L.LoginWrapper>
      <L.SubWrapper>
        <L.Join>
          회원이 아니신가요?
          <p
            onClick={() => {
              router.push("/member/join");
            }}
          >
            가입하기
          </p>
        </L.Join>
      </L.SubWrapper>
    </L.Wrapper>
  );
}
