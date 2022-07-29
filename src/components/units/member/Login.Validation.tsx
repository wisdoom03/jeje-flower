import { Modal } from "antd";

export function LoginValidation(email: string, password: string) {
  if (!/^\w+@\w+\.+com$/.test(email)) {
    Modal.error({ content: "이메일 형식을 지켜주세요" });
    return false;
  }
  if (password.length < 4 || password.length > 12) {
    Modal.error({ content: "비밀번호는 최소 4자리 최대 12자리입니다" });
    return false;
  }
  return true;
}
