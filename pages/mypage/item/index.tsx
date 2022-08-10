import { MyPage } from "../../../src/components/units/mypage/MyPage";
import { MENU } from "../../../src/components/units/mypage/MyPage.data";

export default function MyItemPage() {
  return <MyPage data={MENU[0]} />;
}
