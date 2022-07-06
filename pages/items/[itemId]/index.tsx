import ItemDetailPage from "../../../src/components/units/items/detail/ItemDetail.container";
import ItemsQuestionListContainer from "../../../src/components/units/itemsComment/list/itemsQuestionList.container";
import ItemsQuestionWriteContainer from "../../../src/components/units/itemsComment/write/itemsQuestionWrite.container";

export default function ItemDeail() {
  return (
    <div>
      <ItemDetailPage />
      <ItemsQuestionWriteContainer />
      <ItemsQuestionListContainer />
    </div>
  );
}
