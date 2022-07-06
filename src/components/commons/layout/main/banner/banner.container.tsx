import * as B from "../banner/banner.styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function BannerPage() {
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
  );
}
