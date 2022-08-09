import * as M from "../MypageMain.styles";

interface IMyPageCategoryProps {
  onClickCharge: () => void;
}
export default function MyPageCategory(props: IMyPageCategoryProps) {
  return (
    <M.Category>
      {/* <h1>마이페이지</h1> */}
      <M.CategoryUl>
        <M.CategoryLi>
          <M.CategoryLiA
            // href="https://www.cubeme.co.kr/my/my_order_list.do"
            title="주문 및 배송"
          >
            주문 및 배송
          </M.CategoryLiA>
        </M.CategoryLi>
        <M.CategoryLi>
          <M.CategoryLiA
            // href="https://www.cubeme.co.kr/my/my_order_list.do"
            title="배송지 관리"
          >
            배송지 관리
          </M.CategoryLiA>
        </M.CategoryLi>
        <M.CategoryLi>
          <M.CategoryLiA onClick={props.onClickCharge} title="적립금 충전">
            적립금 충전
          </M.CategoryLiA>
        </M.CategoryLi>
        <M.CategoryLi>
          <M.CategoryLiA
            // href="https://www.cubeme.co.kr/my/my_order_list.do"
            title="1:1 문의"
          >
            1:1 문의
          </M.CategoryLiA>
        </M.CategoryLi>
      </M.CategoryUl>
    </M.Category>
  );
}
