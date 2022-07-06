import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import styled from "@emotion/styled";
const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 450px;
`;

const BannerImage = styled.div`
  width: 100%;
  height: 450px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function Slide01() {
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
      <Slider {...settings}>
        <BannerImage>
          <img src="/img/layout/banner/01.jpeg"></img>
        </BannerImage>
        <BannerImage>
          <img src="/img/layout/banner/02.jpeg"></img>
        </BannerImage>
        <BannerImage>
          <img src="/img/layout/banner/03.jpeg"></img>
        </BannerImage>
        <BannerImage>
          <img src="/img/layout/banner/04.jpeg"></img>
        </BannerImage>
        <BannerImage>
          <img src="/img/layout/banner/05.jpeg"></img>
        </BannerImage>
        <BannerImage>
          <img src="/img/layout/banner/06.jpeg"></img>
        </BannerImage>
      </Slider>
    </Wrapper>
  );
}
