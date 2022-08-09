import styled from "@emotion/styled";
import { Color } from "../../../../commons/styles/ColorStyles";
import { FontFamily } from "../../../../commons/styles/FontStyles";
export default function SideMenu() {
  const MENU = [
    {
      title: "🛒 상품 내역",
      page: "item",
      list: ["찜한 상품", "구매한 상품", "올린 상품"],
      content: <h1>상품 내용</h1>,
    },
    {
      title: "   💳 적립금",
      page: "point",
      list: ["적립금 내역", "적립금 충전"],
      content: <h1>적립금 내용</h1>,
    },
    {
      title: "🖋 활동 내역",
      page: "board",
      list: ["올린 게시물"],
      content: <h1>게시물 내용</h1>,
    },
    {
      title: "🛠 내 정보관리",
      page: "edit",
      list: ["정보 수정", "주소지 변경"],
      content: <h1>게시물 내용</h1>,
    },
  ];

  return (
    <Wrap>
      {MENU.map((el) => (
        <div key={el.title}>
          <ul>
            {el.title}제목
            {el.list.map((list) => (
              <li key={list}>{list} 리스트</li>
            ))}
          </ul>
        </div>
      ))}
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 250px;
  border: 1px solid ${Color.GRAY_3};
  border-radius: 8px;
  div {
    padding: 15px 20px;
  }
  div:not(:last-of-type) {
    border-bottom: 1px solid ${Color.GRAY_4};
  }
  ul {
    font-family: ${FontFamily.SEMIBOLD};
  }
  li {
    text-indent: 18px;
    font-family: ${FontFamily.SEMILIGHT};
    cursor: pointer;
    margin-top: 12px;
  }
`;
