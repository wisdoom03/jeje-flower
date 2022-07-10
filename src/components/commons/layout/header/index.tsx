import styled from "@emotion/styled";
import UseMoveToPage from "../../hooks/useMoveToPage";
import { GlobalContext } from "../../../../../pages/_app";
import { useContext } from "react";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { FontFamily, FontSize } from "../../../../commons/styles/FontStyles";
import { breakPoints } from "../../../../commons/styles/Media";
import Dropdown01 from "../../dropdown/dropdown01/Dropdown01";

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function Header() {
  const { moveToPage } = UseMoveToPage();
  const { userInfo } = useContext(GlobalContext);
  const [logoutUser] = useMutation(LOGOUT_USER);

  const onClickLogout = () => {
    try {
      logoutUser();
      localStorage.setItem("userInfo", JSON.stringify(""));
      window.location.replace("/home");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
    Modal.info({ content: "로그아웃 되었습니다" });
  };

  const LIST = [
    {
      title: "사진 올리기",
      content: "우리집의 공간과 나의 일상을 기록해보세요",
      link: "/boards/new",
    },
    {
      title: "상품 등록하기",
      content: "집에 관한 이야기를 글로 작성해보세요",
      link: "/items/new",
    },
    {
      title: "상품 리뷰 쓰기",
      content: "상품 리뷰를 작성하고 포인트도 받아보세요",
      link: "/mypage",
    },
  ];

  return (
    <Wrap>
      <div>
        <nav>
          <Home onClick={moveToPage("/home")}>
            <img src="/img/layout/Logo.png"></img>
          </Home>
          <Navigation onClick={moveToPage("/items")}>전체 상품</Navigation>
          <Navigation>매장 찾기</Navigation>
          <Navigation>브랜드 소개</Navigation>
          <Navigation onClick={moveToPage("/boards")}>고객센터</Navigation>
        </nav>
        <User>
          {userInfo && (
            <>
              <span>{userInfo.name}님 안녕하세요</span>
              <span onClick={onClickLogout}>로그아웃</span>
              <span onClick={moveToPage("/mypage")}>마이페이지</span>
              <Dropdown01 LIST={LIST} />
            </>
          )}
          {!userInfo && (
            <>
              <span onClick={moveToPage("/member/join")}>회원가입</span>
              <span onClick={moveToPage("/member/login")}>로그인</span>
            </>
          )}
        </User>
      </div>
    </Wrap>
  );
}

const Wrap = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  box-shadow: 0 4px 4px rgb(0 0 0 / 4%);
  background-color: white;
  padding: 0px 50px;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  nav {
    display: flex;
    grid-gap: 30px;
  }
`;

const Home = styled.div`
  & img {
    width: 200px;
    height: auto;
  }
  cursor: pointer;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  font-size: ${FontSize.MEDIUM_C};
  font-family: ${FontFamily.SEMIBOLD};
  cursor: pointer;
  @media ${breakPoints.tablet} {
    display: none;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  font-family: ${FontFamily.MEDIUM};
  grid-gap: 10px;
  span {
    cursor: pointer;
  }
`;
