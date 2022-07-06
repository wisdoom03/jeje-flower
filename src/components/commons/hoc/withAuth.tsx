import { Modal } from "antd";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken, setAccessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!accessToken) {
      Modal.error({
        title: "사용자 인증이 필요한 페이지입니다",
        content: "로그인을 먼저 해주세요",
      });
      router.push("/member/login");
    }
  }, []);
  return <Component {...props} />;
};
export default withAuth;
