import styled from "@emotion/styled";
import BannerPage from "../../src/components/commons/layout/main/banner/banner.container";
import SidePage from "./side/side.container";

const Wrap = styled.div`
  max-width: 1024px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainWrapper = styled.div`
  width: 85vw;
  height: auto;
  display: flex;
  flex-direction: row;
  /* background-color: black; */
`;

export default function HomePage() {
  return (
    <Wrap>
      <MainWrapper>
        <BannerPage />
        <SidePage />
      </MainWrapper>
    </Wrap>
  );
}
