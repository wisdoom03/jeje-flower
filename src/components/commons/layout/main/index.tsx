import styled from "@emotion/styled";
import * as S from "./side/side.styles";
import * as B from "./banner/banner.styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Weather from "../../../units/weather";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #80f3f3; */
`;

const MainWrapper = styled.div`
  width: 85vw;
  height: auto;
  display: flex;
  flex-direction: row;
  /* background-color: black; */
`;

export default function LayoutMain() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };
  return (
    <Wrapper>
      <MainWrapper>
        <B.Wrapper>
          {/* <B.BannerWrapper> */}
          <Slider {...settings}>
            <B.BannerImage>
              <img src="/img/layout/banner/01.jpeg"></img>
            </B.BannerImage>
            <B.BannerImage>
              <img src="/img/layout/banner/02.jpeg"></img>
            </B.BannerImage>
            <B.BannerImage>
              <img src="/img/layout/banner/03.jpeg"></img>
            </B.BannerImage>
            <B.BannerImage>
              <img src="/img/layout/banner/04.jpeg"></img>
            </B.BannerImage>
            <B.BannerImage>
              <img src="/img/layout/banner/05.jpeg"></img>
            </B.BannerImage>
            <B.BannerImage>
              <img src="/img/layout/banner/06.jpeg"></img>
            </B.BannerImage>
          </Slider>
          {/* </B.BannerWrapper> */}
        </B.Wrapper>
        <S.Wrapper>
          <S.SideWrapper>
            <S.SideMenu>
              <Weather />
            </S.SideMenu>
            <S.SideMenu></S.SideMenu>
            <S.SideMenu></S.SideMenu>
          </S.SideWrapper>
        </S.Wrapper>
      </MainWrapper>
    </Wrapper>
  );
}
