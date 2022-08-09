// import { gql, useMutation, useQuery } from "@apollo/client";
// import { Modal, Select } from "antd";
// import Head from "next/head";
// import router from "next/router";
// import { useContext, useState, MouseEvent, useEffect } from "react";
// import { Color } from "../../src/commons/styles/ColorStyles";
// import {
//   IQuery,
//   IQueryFetchPointTransactionsArgs,
//   // IQueryFetchPointTransactionsOfLoadingArgs,
// } from "../../src/commons/types/generated/types";
// import withAuth from "../../src/components/commons/hoc/withAuth";
// import Line01 from "../../src/components/commons/line/line01";
// import MyPageCategory from "../../src/components/units/mypage/category/MyPageCategory.container";
// import MyPageHeader from "../../src/components/units/mypage/header/MyPageHeader.container";
// import * as M from "../../src/components/units/mypage/MypageMain.styles";
// import SideMenu from "../../src/components/units/mypage/sideMenu/SideMenu";
// import { GlobalContext } from "../_app";

import { MyPage } from "../../src/components/units/mypage/MyPage";

// declare global {
//   interface Window {
//     IMP: any;
//   }
// }
// const CHARGE_POINT = gql`
//   mutation createPointTransactionOfLoading($impUid: ID!) {
//     createPointTransactionOfLoading(impUid: $impUid) {
//       _id
//       impUid
//       amount
//     }
//   }
// `;

// // const FETCH_CHARGE_POINT_HISTORY = gql`
// //   query fetchPointTransactionsOfLoading($search: String, $page: Int) {
// //     fetchPointTransactionsOfLoading(search: $search, page: $page) {
// //       _id
// //       amount
// //       balance
// //       createdAt
// //       status
// //       statusDetail
// //     }
// //   }
// // `;

// const FETCH_POINT_TRANSACTIONS = gql`
//   query fetchPointTransactions($search: String, $page: Int) {
//     fetchPointTransactions(search: $search, page: $page) {
//       _id
//       amount
//       balance
//       statusDetail
//       createdAt
//     }
//   }
// `;

// // const FETCH_POINT_COUNT = gql`
// //   query fetchPointTransactionsCountOfLoading {
// //     fetchPointTransactionsCountOfLoading
// //   }
// // `;

// export function MyPagePage() {
//   const { userInfo } = useContext(GlobalContext);
//   // console.log(userInfo);

//   const [isOpen, setIsOpen] = useState(false);
//   const [amount, setAmount] = useState(0);
//   const [createPointTransactionOfLoading] = useMutation(CHARGE_POINT);
//   // const { data } = useQuery(FETCH_CHARGE_POINT_HISTORY, {
//   //   variables: {
//   //     page: 1,
//   //   },
//   // });

//   const { data: pointData } = useQuery<
//     Pick<IQuery, "fetchPointTransactions">,
//     IQueryFetchPointTransactionsArgs
//   >(FETCH_POINT_TRANSACTIONS, {
//     variables: { page: 1, search: "" },
//   });

//   // const { data: countData } = useQuery<
//   //   Pick<IQuery, "fetchPointTransactionsCountOfLoading">,
//   //   IQueryFetchPointTransactionsOfLoadingArgs
//   // >(FETCH_POINT_COUNT);

//   // console.log(countData);
//   // console.log(pointData);
//   // console.log(data?.fetchPointTransactionsOfLoading);

//   const onClickCharge = () => {
//     console.log(userInfo);
//     setIsOpen(true);
//   };

//   const handleOk = () => {
//     setIsOpen(false);
//     if (amount) {
//       payment();
//     }
//   };

//   const handelCancel = () => {
//     setIsOpen(false);
//   };
//   const { Option } = Select;

//   function handleChange(value: number) {
//     setAmount(value);
//     console.log(`selected ${value}`);
//   }

//   const payment = () => {
//     const IMP = window.IMP;
//     IMP.init("imp49910675");

//     // IMP.request_pay(param, callback) 결제창 호출
//     IMP.request_pay(
//       {
//         // param
//         pg: "html5_inicis",
//         pay_method: "card",
//         name: "Jeje Flower",
//         amount: amount,
//         buyer_email: userInfo?.email, //"potao@p.com"
//         buyer_name: userInfo?.name, //"지혜"
//         buyer_tel: "010-4242-4242",
//         buyer_addr: "서울특별시 중구 신당동",
//         buyer_postcode: "01181",
//       },
//       async (rsp: any) => {
//         // callback
//         if (rsp.success) {
//           // 결제 성공 시 로직,
//           console.log(rsp.imp_uid);
//           try {
//             const result = await createPointTransactionOfLoading({
//               variables: { impUid: rsp.imp_uid },
//             });
//             router.push("/mypage");
//             // console.log(result?.data?.createPointTransactionOfLoading);
//           } catch (error) {
//             if (error instanceof Error) Modal.error({ content: error.message });
//           }
//         } else {
//           // 결제 실패 시 로직,
//           Modal.error({
//             content: "결제에 실패했습니다. 잠시 후 이용부탁드립니다",
//           });
//         }
//       }
//     );
//   };
//   const [nowTab, setNowTab] = useState("");
//   const onClickTab = (event: MouseEvent<HTMLLIElement>) => {
//     setNowTab(event.currentTarget.id);
//   };
//   return (
//     <>
//       <Head>
//         <script
//           type="text/javascript"
//           src="https://code.jquery.com/jquery-1.12.4.min.js"
//         ></script>

//         <script
//           type="text/javascript"
//           src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
//         ></script>
//       </Head>
//       {isOpen && (
//         <Modal
//           title="적립금 충전하기"
//           visible={true}
//           onOk={handleOk}
//           onCancel={handelCancel}
//         >
//           충전금액{"  "}
//           <Select
//             placeholder="충전 금액을 선택해주세요"
//             style={{ width: 200 }}
//             onChange={handleChange}
//           >
//             <Option value={100}>100원</Option>
//             <Option value={1000}>1000원</Option>
//             <Option value={2000}>2000원</Option>
//             <Option value={5000}>5000원</Option>
//             <Option value={10000}>10,000원</Option>
//           </Select>
//         </Modal>
//       )}

//       <M.Wrapper>
//         <MyPageHeader pointData={pointData} />
//         <Line01 color={Color.GRAY_3} />
//         <M.MyPageBody>
//           {/* <MyPageCategory onClickCharge={onClickCharge} /> */}
//           <SideMenu />
//           <M.Content>
//             <h1>현재 메뉴</h1>
//             <ul>
//               <li
//                 onClick={onClickTab}
//                 id="탭 1"
//                 className={nowTab === "탭 1" ? "nowTab" : ""}
//               >
//                 탭 1
//               </li>
//               <li
//                 onClick={onClickTab}
//                 id="탭 2"
//                 className={nowTab === "탭 2" ? "nowTab" : ""}
//               >
//                 탭 2
//               </li>
//               <li
//                 onClick={onClickTab}
//                 id="탭 3"
//                 className={nowTab === "탭 3" ? "nowTab" : ""}
//               >
//                 탭 3
//               </li>
//             </ul>
//           </M.Content>
//         </M.MyPageBody>
//         {/* <M.MyPageContent>
//           <MyPageCategory onClickCharge={onClickCharge} />
//           <M.RecentOrder>
//             <M.Headerdl>
//               <M.Headerdt>적립금 사용내역</M.Headerdt>
//               <M.Headerdd>최근 3개월 간의 사용 내역이 노출됩니다.</M.Headerdd>
//               <M.HeaderA href="">더보기</M.HeaderA>
//             </M.Headerdl>
//             <M.TitleUl>
//               <M.TitleLi>
//                 <M.Titledl>
//                   <M.Titledd>주문일</M.Titledd>
//                   <M.Titledd>상품명</M.Titledd>
//                   <M.Titledd>주문번호</M.Titledd>
//                   <M.Titledd>충전금액</M.Titledd>
//                   <M.Titledd>처리현황</M.Titledd>
//                 </M.Titledl>
//               </M.TitleLi>
//               {pointData?.fetchPointTransactions.map((el) => (
//                 <M.ContentsLi key={el._id}>
//                   <M.ContentsLidl>
//                     <M.ContentsLidd>{el.createdAt}</M.ContentsLidd>
//                     <M.ContentsLidd>첫 로그인</M.ContentsLidd>
//                     <M.ContentsLidd>{el._id}</M.ContentsLidd>
//                     <M.ContentsLidd>{el.amount}P</M.ContentsLidd>
//                     <M.ContentsLidd>{el.statusDetail}</M.ContentsLidd>
//                   </M.ContentsLidl>
//                 </M.ContentsLi>
//               ))}
//             </M.TitleUl>
//           </M.RecentOrder>
//         </M.MyPageContent> */}
//       </M.Wrapper>
//     </>
//   );
// }

// // export default withAuth(mypagePage);
// export default MyPagePage;

export default function MyPagePage() {
  return <MyPage />;
}
