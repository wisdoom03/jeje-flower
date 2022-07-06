import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import * as L from "../../../src/components/units/member/login/Login.styles";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [createUser] = useMutation(CREATE_USER);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onClickRegister = async () => {
    if (!/^\w+@\w+\.+com$/.test(email)) {
      Modal.error({ content: "이메일 형식을 지켜주세요" });
      return;
    }
    if (password.length < 4 || password.length > 12) {
      Modal.error({ content: "비밀번호는 최소 4자리 최대 12자리입니다" });
      return;
    }
    if (!name || name.length > 5) {
      Modal.error({ content: "닉네임은 5자리가 최대입니다" });
      return;
    }
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email,
            password,
            name,
          },
        },
      });
      console.log(result.data?.createUser);
      Modal.info({
        title: "가입이 완료되었습니다",
        content: `${result.data?.createUser?.name}님 환영합니다. 로그인페이지로 이동합니다`,
      });
      router.push("/member/login");
    } catch (error) {
      Modal.error(error.message);
    }
  };

  return (
    <L.Wrapper>
      <L.LoginWrapper>
        <h1>회원 가입</h1>
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
        <L.InputWrapper>
          <L.InputLabel>사용자명</L.InputLabel>
          <L.InputField
            type="text"
            placeholder="닉네임 입력"
            onChange={onChangeName}
          ></L.InputField>
        </L.InputWrapper>
        <L.LoginButton onClick={onClickRegister}>가입하기</L.LoginButton>
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
