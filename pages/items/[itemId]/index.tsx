import ItemDetail from "../../../src/components/units/items/detail/ItemDetail.container";
import ItemsQuestionList from "../../../src/components/units/itemsComment/list/itemsQuestionList.container";
import ItemsQuestionWrite from "../../../src/components/units/itemsComment/write/itemsQuestionWrite.container";

export default function ItemDetailPage() {
  return (
    <div>
      <ItemDetail />
      <ItemsQuestionWrite />
      <ItemsQuestionList />
    </div>
  );
}
