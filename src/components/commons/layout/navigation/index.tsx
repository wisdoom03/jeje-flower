import styled from "@emotion/styled";
import UseMoveToPage from "../../hooks/useMoveToPage";

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: blueviolet; */
  /* margin-bottom: 10px; */
  box-shadow: 0 4px 4px rgb(0 0 0 / 4%);
`;

const NavigationWrapper = styled.div`
  height: auto;
  width: 85vw;
  /* background-color: #baacc7; */
  display: flex;
  flex-direction: row;
  justify-content: start;
  @media screen and (max-width: 700px) {
    height: auto;
    width: 85vw;
    display: flex;
    flex-direction: row;
    justify-content: start;

    /* height: 100%;
    width: 50%;
    display: flex;
    justify-content: start;
    padding-left: 5%; */
    /* background-color: black; */
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

export default function LayoutNavigation() {
  const { moveToPage } = UseMoveToPage();

  return (
    <Wrapper>
      <NavigationWrapper>
        <Home onClick={moveToPage("/")}>
          <img src="/img/layout/Logo.png"></img>
        </Home>
        <Product onClick={moveToPage("/items")}>모든 상품</Product>
        <Product>매장 찾기</Product>
        <Product>브랜드 소개</Product>
        <Product onClick={moveToPage("/boards")}>고객센터</Product>
      </NavigationWrapper>
    </Wrapper>
  );
}
