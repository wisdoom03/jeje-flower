import withAuth from "../../../src/components/commons/hoc/withAuth";
import ItemsWritePage from "../../../src/components/units/items/write/ItemsWrite.container";

export function ItemsNewPage() {
  return <ItemsWritePage isEdit={false} />;
}
export default withAuth(ItemsNewPage);
