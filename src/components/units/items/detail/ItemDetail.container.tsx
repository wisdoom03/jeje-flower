import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  CREATE_POINT_PAYMENT,
} from "./ItemaDetail.queries";
import ItemDetailUIPage from "./ItemDetail.presenter";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function ItemDetailPage() {
  const router = useRouter();

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.itemId) },
  });

  const [createPointTransactionOfBuyingAndSelling] =
    useMutation(CREATE_POINT_PAYMENT);

  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    // 여기서 직접 다운로드 받고, 다 받을 때까지 기다렸다가 그려주기!!

    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=63a3050f580c97f4332f6cd4df8bec49&libraries=services&autoload=false"; //키밸류 2개 이상일 때 &로 연결
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          String(data?.fetchUseditem?.useditemAddress?.address),
          function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">거래 위치</div>',
              });
              infowindow.open(map, marker);
            }
          }
        );
      });
    };
  }, [data]);

  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: String(router.query.itemId) },
      });
      router.push("/items");
      Modal.info({ content: "게시물이 삭제되었습니다" });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickBasket = () => {
    // console.log(el);

    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");

    const temp = baskets.filter(
      (basketEl) => basketEl._id === router.query.itemId
    );

    if (temp.length === 1) {
      Modal.error({ content: "이미 담은 상품입니다" });
      return;
    }
    const { __typename, ...newEl } = el;

    baskets.push(newEl);

    localStorage.setItem("basket", JSON.stringify(baskets));
  };

  // useEffect(() => {
  //   const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
  //   setBasketItems(baskets);
  // });

  const onClickBuying = async () => {
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: String(router.query.itemId) },
      });
      Modal.info({ content: "상품 구매가 완료되었습니다" });
      console.log(result?.data?.createPointTransactionOfBuyingAndSelling);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  // console.log(data?.fetchUseditem);

  return (
    <ItemDetailUIPage
      data={data}
      onClickDelete={onClickDelete}
      onClickBasket={onClickBasket}
      onClickBuying={onClickBuying}
    />
  );
}
