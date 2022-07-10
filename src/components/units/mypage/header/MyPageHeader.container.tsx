import * as M from "../MypageMain.styles";

export default function MyPageHeader(props) {
  return (
    <M.MyPageHeader>
      <M.HeaderTitle>{props.userInfo?.name}님, 안녕하세요!</M.HeaderTitle>
      <M.HeaderBoard>
        <M.BoardSummary>
          <M.SummaryItem>
            <M.SummaryItemLabel>
              {props.pointData ? props.pointData.fetchPointTransactions[0] : 0}
              원
            </M.SummaryItemLabel>
            <M.SummaryItemBody>적립금</M.SummaryItemBody>
          </M.SummaryItem>
          <M.SummaryItem>
            <M.SummaryItemLabel>0건</M.SummaryItemLabel>
            <M.SummaryItemBody>장바구니</M.SummaryItemBody>
          </M.SummaryItem>
          <M.SummaryItem>
            <M.SummaryItemLabel>0건</M.SummaryItemLabel>
            <M.SummaryItemBody>찜한 상품</M.SummaryItemBody>
          </M.SummaryItem>
          <M.SummaryItem>
            <M.SummaryItemLabel>0건</M.SummaryItemLabel>
            <M.SummaryItemBody>등록 내역</M.SummaryItemBody>
          </M.SummaryItem>
          <M.SummaryItem>
            <M.SummaryItemLabel>0건</M.SummaryItemLabel>
            <M.SummaryItemBody>구매 내역</M.SummaryItemBody>
          </M.SummaryItem>
        </M.BoardSummary>
      </M.HeaderBoard>
    </M.MyPageHeader>
  );
}
