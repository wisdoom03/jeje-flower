import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { IQuery } from "../../../../commons/types/generated/types";
import styled from "@emotion/styled";
import { FontFamily, FontSize } from "../../../../commons/styles/FontStyles";
import { Color } from "../../../../commons/styles/ColorStyles";

interface IMyPageHeaderProps {
  pointData?: Pick<IQuery, "fetchPointTransactions">;
}

export default function MyPageHeader(props: IMyPageHeaderProps) {
  const { userInfo } = useContext(GlobalContext);

  return (
    <Wrap>
      <HeaderTitle>
        <span>{userInfo?.name}</span>님, 안녕하세요!
        <span>&#xE001;</span>
      </HeaderTitle>
      <HeaderBoard>
        <BoardSummary>
          <SummaryItem>
            <SummaryItemLabel>
              {props.pointData
                ? props.pointData?.fetchPointTransactions[0].balance
                : 0}
              원
            </SummaryItemLabel>
            <SummaryItemBody>보유 적립금</SummaryItemBody>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemLabel>0건</SummaryItemLabel>
            <SummaryItemBody>장바구니</SummaryItemBody>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemLabel>0건</SummaryItemLabel>
            <SummaryItemBody>찜한 상품</SummaryItemBody>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemLabel>0건</SummaryItemLabel>
            <SummaryItemBody>등록 내역</SummaryItemBody>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemLabel>0건</SummaryItemLabel>
            <SummaryItemBody>구매 내역</SummaryItemBody>
          </SummaryItem>
        </BoardSummary>
      </HeaderBoard>
    </Wrap>
  );
}

export const Wrap = styled.div`
  padding: 50px 0;
  border-bottom: 1px solid #e8e8e8;
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: ${FontSize.LARGE_C};
  color: ${Color.BLACK_1};
  font-family: ${FontFamily.SEMILIGHT};
  span:nth-of-type(1) {
    font-family: ${FontFamily.SEMIBOLD};
  }
  span:nth-of-type(2) {
    margin-left: 10px;
    font-size: ${FontSize.MEDIUM_C};
    color: ${Color.GRAY_1};
  }
`;

export const HeaderBoard = styled.div`
  display: flex;
  user-select: none;
  align-items: center;
`;

export const BoardSummary = styled.div`
  display: flex;
  flex: 1 1;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  padding: 23px 0 16px;
  /* margin-right: 13px; */
`;

export const SummaryItem = styled.div`
  :not(:last-child) {
    border-right: 1px solid #e8e8e8;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
`;

export const SummaryItemLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 21.6px;
  font-weight: 700;
  color: #333;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const SummaryItemBody = styled.div`
  font-size: 12px;
  line-height: 14.4px;
  font-weight: 400;
  color: #bbb;
`;
