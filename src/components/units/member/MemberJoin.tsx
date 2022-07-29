import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import * as L from "./Member.styles";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;

export default function MemberJoin() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const onClickRegister = async () => {
    if (!/^\w+@\w+\.+com$/.test(inputs.email)) {
      Modal.error({ content: "이메일 형식을 지켜주세요" });
      return;
    }
    if (inputs.password.length < 4 || inputs.password.length > 12) {
      Modal.error({ content: "비밀번호는 최소 4자리 최대 12자리입니다" });
      return;
    }
    if (!inputs.name || inputs.name.length > 5) {
      Modal.error({ content: "닉네임은 5자리가 최대입니다" });
      return;
    }
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: inputs.email,
            password: inputs.password,
            name: inputs.name,
          },
        },
      });
      // console.log(result.data?.createUser);
      Modal.info({
        title: "가입이 완료되었습니다",
        content: `${result.data?.createUser?.name}님 환영합니다. 로그인페이지로 이동합니다`,
      });
      router.push("/member/login");
    } catch (error) {
      if (error instanceof Error) Modal.error({ title: error.message });
    }
  };

  return (
    <L.Wrapper>
      <L.LoginWrapper>
        <h1>회원 가입</h1>
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
        <L.InputWrapper>
          <L.InputLabel>사용자명</L.InputLabel>
          <L.InputField
            id="name"
            type="text"
            placeholder="닉네임 입력"
            onChange={onChangeInputs}
          ></L.InputField>
        </L.InputWrapper>
        <L.LoginButton onClick={onClickRegister}>가입하기</L.LoginButton>
      </L.LoginWrapper>
    </L.Wrapper>
  );
}
