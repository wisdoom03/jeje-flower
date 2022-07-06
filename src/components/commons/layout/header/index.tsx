import styled from "@emotion/styled";
import UseMoveToPage from "../../hooks/useMoveToPage";
import { GlobalContext } from "../../../../../pages/_app";
import { Fragment, useContext } from "react";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";

const Wrap = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  box-shadow: 0 4px 4px rgb(0 0 0 / 4%);
  nav {
    max-width: 1024px;
    width: 100%;
    display: flex;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  /* width: 85vw; */
  font-size: 13px;
`;

const HeaderButton = styled.div`
  width: 50px;
  margin: 8px;
  /* background-color: blue; */
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;
const UserInfo = styled.div`
  width: 150px;
`;

const Logout = styled.div`
  width: 100px;
`;

const MyPage = styled.div`
  width: 100px;
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

const Home = styled.div`
  /* background-color: black; */
  & img {
    width: 200px;
    height: auto;
  }
  :hover {
    cursor: pointer;
  }
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-left: 4%;
  /* background-color: chocolate; */
  @media screen and (max-width: 700px) {
    display: none;
  }
  :hover {
    cursor: pointer;
  }
`;

export default function Header() {
  const { moveToPage } = UseMoveToPage();
  const { userInfo } = useContext(GlobalContext);
  // console.log(userInfo);
  const [logoutUser] = useMutation(LOGOUT_USER);

  const onClickLogout = () => {
    try {
      logoutUser();
      localStorage.setItem("userInfo", JSON.stringify(""));
      window.location.replace("/home");
    } catch (error) {
      Modal.error({ content: error.message });
    }
    Modal.info({ content: "로그아웃 되었습니다" });
  };

  return (
    <Wrap>
      <nav>
        <Home onClick={moveToPage("/")}>
          <img src="/img/layout/Logo.png"></img>
        </Home>
        <Product onClick={moveToPage("/items")}>모든 상품</Product>
        <Product>매장 찾기</Product>
        <Product>브랜드 소개</Product>
        <Product onClick={moveToPage("/boards")}>고객센터</Product>
      </nav>
      <HeaderWrapper>
        {userInfo && (
          <>
            <UserInfo>{userInfo.name}님 안녕하세요</UserInfo>
            <Logout onClick={onClickLogout}>로그아웃</Logout>
            <MyPage onClick={moveToPage("/mypage")}>마이페이지</MyPage>
          </>
        )}
        {!userInfo && (
          <Fragment>
            <HeaderButton onClick={moveToPage("/member/join")}>
              회원가입
            </HeaderButton>
            <HeaderButton onClick={moveToPage("/member/login")}>
              로그인
            </HeaderButton>
          </Fragment>
        )}
        <HeaderButton>고객센터</HeaderButton>
      </HeaderWrapper>
    </Wrap>
  );
}
