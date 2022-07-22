import { useEffect, useState } from "react";
import { IUseditem } from "../../src/commons/types/generated/types";

export default function MyRecentShopping() {
  const [todayItems, setTodayItems] = useState([]);

  useEffect(() => {
    const todayItems = JSON.parse(localStorage.getItem("todayItems") || "[]");

    setTodayItems(todayItems);
  }, []);

  return (
    <div>
      <div>
        <h1>비회원 최근 본 상품 🛍</h1>
        {todayItems.map((el: IUseditem) => (
          <div key={el._id}>
            <div>상품 이름 :{el.name}</div>
            <div>상품 가격 :{el.price}</div>
            <span>==================</span>
          </div>
        ))}
      </div>
    </div>
  );
}
