import MyPoint from "./myPoint/MyPoint";

export const MENU = [
  {
    title: "🛒 상품 내역",
    page: "item",
    list: [
      { index: 0, name: "찜한 상품", content: <h1>찜한 상품 내용</h1> },
      { index: 1, name: "구매한 상품", content: <h1>구매한 상품 내용</h1> },
      { index: 2, name: "올린 상품", content: <h1>올린 상품 내용</h1> },
    ],

    index: 0,
  },
  {
    title: "💳 적립금",
    page: "point",

    list: [
      { index: 0, name: "적립금 내역", content: <MyPoint /> },
      { index: 1, name: "적립금 충전", content: <h1>적립금 충전 내용</h1> },
    ],
    index: 1,
  },
  {
    title: "🖋 활동 내역",
    page: "board",

    list: [
      { index: 0, name: "올린 게시물", content: <h1>올린 게시물 내용</h1> },
    ],
    index: 2,
  },
  {
    title: "🛠 내 정보관리",
    page: "edit",

    list: [
      { index: 0, name: "정보 수정", content: <h1>정보 수정내용</h1> },
      { index: 1, name: "주소지 변경", content: <h1>주소지 변경 내용</h1> },
    ],
    index: 3,
  },
];
