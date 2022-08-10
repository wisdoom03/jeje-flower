import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal, Select } from "antd";
import Head from "next/head";
import router, { useRouter } from "next/router";
import { useContext, useState, MouseEvent, useEffect, Fragment } from "react";
import MyPagePage from "../../../../pages/mypage";
import { GlobalContext } from "../../../../pages/_app";
import { Color } from "../../../commons/styles/ColorStyles";
import { FontFamily, FontSize } from "../../../commons/styles/FontStyles";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from "../../../commons/types/generated/types";
import Line01 from "../../commons/line/line01";
import MyPageHeader from "./header/MyPageHeader.container";
import { MENU } from "./MyPage.data";
import { CHARGE_POINT, FETCH_POINT_TRANSACTIONS } from "./MyPage.queries";
import SideMenu from "./sideMenu/SideMenu";
import { v4 as uuidv4 } from "uuid";

declare global {
  interface Window {
    IMP: any;
  }
}

export interface IMyPageProps {
  data: {
    title: string;
    page: string;
    list: {
      name: string;
      content: JSX.Element;
      index: number;
    }[];
    index: number;
  };
}

export function MyPage(props: IMyPageProps) {
  const router = useRouter();
  const { userInfo } = useContext(GlobalContext);

  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [createPointTransactionOfLoading] = useMutation(CHARGE_POINT);

  const { data: pointData } = useQuery<
    Pick<IQuery, "fetchPointTransactions">,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT_TRANSACTIONS, {
    variables: { page: 1, search: "" },
  });

  const onClickCharge = () => {
    console.log(userInfo);
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
    if (amount) {
      payment();
    }
  };

  const handelCancel = () => {
    setIsOpen(false);
  };
  const { Option } = Select;

  function handleChange(value: number) {
    setAmount(value);
    console.log(`selected ${value}`);
  }

  const payment = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "Jeje Flower",
        amount: amount,
        buyer_email: userInfo?.email,
        buyer_name: userInfo?.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 중구 신당동",
        buyer_postcode: "01181",
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp.imp_uid);
          try {
            const result = await createPointTransactionOfLoading({
              variables: { impUid: rsp.imp_uid },
            });
            router.push("/mypage");
            // console.log(result?.data?.createPointTransactionOfLoading);
          } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message });
          }
        } else {
          // 결제 실패 시 로직,
          Modal.error({
            content: "결제에 실패했습니다. 잠시 후 이용부탁드립니다",
          });
        }
      }
    );
  };
  const [nowTab, setNowTab] = useState({
    title: props.data.list[0].name,
    content: props.data.list[0].content,
    index: props.data.list[0].index,
  });
  const onClickTab = (index: number) => (event: MouseEvent<HTMLLIElement>) => {
    setNowTab({
      title: event.currentTarget.id,
      content: props.data.list[index].content,
      index: props.data.list[index].index,
    });
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      {isOpen && (
        <Modal
          title="적립금 충전하기"
          visible={true}
          onOk={handleOk}
          onCancel={handelCancel}
        >
          충전금액{"  "}
          <Select
            placeholder="충전 금액을 선택해주세요"
            style={{ width: 200 }}
            onChange={handleChange}
          >
            <Option value={100}>100원</Option>
            <Option value={1000}>1000원</Option>
            <Option value={2000}>2000원</Option>
            <Option value={5000}>5000원</Option>
            <Option value={10000}>10,000원</Option>
          </Select>
        </Modal>
      )}

      <Wrapper>
        <MyPageHeader pointData={pointData} />
        <Line01 color={Color.GRAY_3} />
        <MyPageBody>
          <SideMenu
            MENU={MENU}
            //  setNowMenu={setNowMenu}
          />
          <Content>
            <h1>{props.data.title}</h1>
            <ul>
              {props.data.list.map((el, index) => (
                <li
                  key={uuidv4()}
                  onClick={onClickTab(index)}
                  id={String(index)}
                  className={nowTab.index === index ? "nowTab" : ""}
                >
                  {el.name}
                </li>
              ))}
            </ul>
            <div>{nowTab.content}</div>
          </Content>
        </MyPageBody>
      </Wrapper>
    </>
  );
}

// export default withAuth(mypagePage);
export default MyPagePage;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1024px;
  margin-bottom: 100px;
`;

export const MyPageBody = styled.main`
  padding: 50px 0;
  display: flex;
  width: 100%;
  grid-gap: 50px;
`;

export const Content = styled.section`
  width: 100%;
  h1 {
    font-family: ${FontFamily.SEMIBOLD};
    font-size: ${FontSize.LARGE_C};
  }
  ul {
    display: flex;
    position: relative;
    width: 100%;
    ::after {
      position: absolute;
      left: 0;
      width: 100%;
      background-color: ${Color.GRAY_3};
      content: "";
      height: 1px;
      bottom: 1px;
    }
    /* border-bottom: 1px solid ${Color.GRAY_3}; */
    li {
      margin-right: 50px;
      position: relative;
    }
    li.nowTab::after {
      position: absolute;
      left: 0;
      width: 100%;
      background-color: ${Color.GREEN_MAIN};
      content: "";
      height: 2px;
      bottom: 1px;
      z-index: 2;
    }
  }
`;
