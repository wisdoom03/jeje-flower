import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { getMyDateDot } from "../../../../commons/libraries/utils";
import { Color } from "../../../../commons/styles/ColorStyles";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_POINT_TRANSACTIONS } from "../MyPage.queries";

export default function MyPoint() {
  const { data: pointData } = useQuery<
    Pick<IQuery, "fetchPointTransactions">,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT_TRANSACTIONS, {
    variables: { page: 1, search: "" },
  });

  const data = pointData?.fetchPointTransactions[0];

  console.log(data);

  return (
    <MyPageContent>
      {/* <table>
        <tr>
          <th>주문일</th>
          <th>상품명</th>
          <th>주문번호</th>
          <th>충전금액</th>
          <th>처리현황</th>
        </tr>
        <tr>
          <td>{getMyDateDot(data?.createdAt)}</td>
          <td>첫 로그인</td>
          <td>{data?._id.slice(0, 15)}</td>
          <td>{data?.amount}P</td>
          <td>{data?.statusDetail}</td>
        </tr>
      </table> */}
      {/* <TitleUl>
        <TitleLi>
          <Titledl>
            <Titledd>주문일</Titledd>
            <Titledd>상품명</Titledd>
            <Titledd>주문번호</Titledd>
            <Titledd>충전금액</Titledd>
            <Titledd>처리현황</Titledd>
          </Titledl>
        </TitleLi>
        {pointData?.fetchPointTransactions.map((el) => (
          <ContentsLi key={el._id}>
            <ContentsLidl>
              <ContentsLidd>{el.createdAt}</ContentsLidd>
              <ContentsLidd>첫 로그인</ContentsLidd>
              <ContentsLidd>{el._id}</ContentsLidd>
              <ContentsLidd>{el.amount}P</ContentsLidd>
              <ContentsLidd>{el.statusDetail}</ContentsLidd>
            </ContentsLidl>
          </ContentsLi>
        ))}
      </TitleUl> */}
      <table>
        <colgroup>
          <col width="100" />
          <col width="100" />
          <col width="200" />
          <col width="100" />
          <col width="100" />
        </colgroup>
        <thead>
          <tr>
            <th>주문일</th>
            <th>상품명</th>
            <th>주문번호</th>
            <th>충전금액</th>
            <th>처리현황</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{getMyDateDot(data?.createdAt)}</td>
            <td>첫 로그인</td>
            <td>{data?._id.slice(0, 15)}</td>
            <td>{data?.amount}P</td>
            <td>{data?.statusDetail}</td>
          </tr>
        </tbody>
      </table>
    </MyPageContent>
  );
}

export const MyPageContent = styled.section`
  width: 100%;
  height: auto;
  margin-top: 20px;
  table {
    width: 100%;
    /* border-top: 1px solid ${Color.BLACK_1}; */
    tr {
      text-align: center;
    }
  }
`;

export const TitleUl = styled.ul`
  width: 100%;
  border-bottom: 0px solid #dddddd;
  margin-bottom: 80px;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TitleLi = styled.li`
  border-top: 2px solid #999999;
  border-bottom: 1px solid #dddddd;
  position: relative;
  color: #000000;
  list-style: none;
  padding: 0;
  margin: 0;
  display: list-item;
`;

export const Titledl = styled.dl`
  display: table;
  table-layout: fixed;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Titledd = styled.dd`
  display: table-cell;
  vertical-align: middle;
  height: 45px;
  padding: 13px 10px;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  text-align: center;
`;

export const ContentsLi = styled.li`
  position: relative;
  border-bottom: 1px solid #dddddd;
  color: #333333;
  list-style: none;
  padding: 0;
  margin: 0;
  display: list-item;
`;

export const ContentsLidl = styled.dl`
  display: table;
  table-layout: fixed;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ContentsLidd = styled.dd`
  display: table-cell;
  text-align: center;
  height: auto;
  padding: 13px 10px;
  font-size: 14px;
  background: #ffffff;
  word-break: break-all;
`;
