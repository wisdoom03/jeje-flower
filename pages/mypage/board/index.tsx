import { MyPage } from "../../../src/components/units/mypage/MyPage";
import { MENU } from "../../../src/components/units/mypage/MyPage.data";

export default function MyBoardPage() {
  return <MyPage data={MENU[2]} />;
}
