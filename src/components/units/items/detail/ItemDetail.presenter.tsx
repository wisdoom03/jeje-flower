import * as I from "../detail/ItemDetail.styles";
import Slider from "react-slick";
import Dompurify from "dompurify";

export default function ItemDetailUIPage(props) {
  const settings = {
    dots: true,
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
    <I.ItemDetail>
      <I.DetailLeft>
        <I.SlideWrapper>
          <Slider {...settings}>
            {props.data?.fetchUseditem.images
              ?.filter((el) => el)
              .map((el) => (
                <I.SliderImage
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                ></I.SliderImage>
              ))}
          </Slider>
        </I.SlideWrapper>
        <I.Divider></I.Divider>
        <I.ContentsWrapper>
          {process.browser && (
            <I.Contents
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(
                  String(props.data?.fetchUseditem.contents)
                ),
              }}
            />
          )}
        </I.ContentsWrapper>
        <I.DetailMapWrapper>
          <I.DetailMap id="map" style={{ width: 300, height: 300 }} />
        </I.DetailMapWrapper>
      </I.DetailLeft>
      <I.DetailRight>
        <button onClick={props.onClickDelete}>삭제</button>
        <I.TitleWrapper>
          <I.Name>{props.data?.fetchUseditem.name}</I.Name>
          <I.PriceWrapper>
            <I.Price>{props.data?.fetchUseditem.price}원</I.Price>
            <I.SalePrice>
              {" "}
              24% {props.data?.fetchUseditem.price * 0.76}원
            </I.SalePrice>
          </I.PriceWrapper>
        </I.TitleWrapper>
        <I.ImageWrapper>
          <I.Label>컬러 선택</I.Label>
          <I.Image>첨부 사진 리스트</I.Image>
        </I.ImageWrapper>
        <I.SizeWrapper>
          <I.Label>사이즈 선택</I.Label>
        </I.SizeWrapper>
        <I.RemarksWrapper>{props.data?.fetchUseditem.remarks}</I.RemarksWrapper>
        <I.PickedWrapper>
          {props.data?.fetchUseditem.pickedCount}
        </I.PickedWrapper>
        <I.ButtonWrapper>
          <I.ButtonABasket onClick={props.onClickBasket}>
            장바구니
          </I.ButtonABasket>
          <I.ButtonABuying onClick={props.onClickBuying}>
            구매하기
          </I.ButtonABuying>
        </I.ButtonWrapper>
      </I.DetailRight>
    </I.ItemDetail>
  );
}
