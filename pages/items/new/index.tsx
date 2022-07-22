import withAuth from "../../../src/components/commons/hoc/withAuth";
import ItemsWrite from "../../../src/components/units/items/write/ItemsWrite.container";

export function ItemsNewPage() {
  return <ItemsWrite isEdit={false} />;
}
export default withAuth(ItemsNewPage);
