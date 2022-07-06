import styled from "@emotion/styled/";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LandingUI = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const LandingImage = styled.div`
  background-image: url("/img/layout/banner/02.jpeg");
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    transform: scale(1.2);
    transition: 4s;
  }
`;

const HomeWrapper = styled.div`
  font-size: 3em;
  font-weight: 400;
  color: white;
  :hover {
    cursor: pointer;
  }
  font-family: "Courier New", Courier, monospace;
  text-shadow: 1px 1px 4px black;
`;
export default function LandingPage() {
  const router = useRouter();

  const onClickHome = () => {
    router.push("/home");
  };

  useEffect(() => {
    // window.scrollTo(0, 80);
    window.scroll({
      top: 60,
      left: 0,
      behavior: "smooth",
      // behavior: "auto",
    });
  }, []);

  return (
    <>
      <LandingUI>
        <LandingImage>
          <HomeWrapper onClick={onClickHome}>Find Your Flower</HomeWrapper>
        </LandingImage>
      </LandingUI>
    </>
  );
}
