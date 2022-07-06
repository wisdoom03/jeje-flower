import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import withAuth from "../../../../src/components/commons/hoc/withAuth";
import ItemsWritePage from "../../../../src/components/units/items/write/ItemsWrite.container";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      pickedCount
      createdAt
      seller {
        name
      }
      useditemAddress {
        zipcode
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

export function ItemsEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.itemId) },
  });

  return <ItemsWritePage isEdit={true} data={data} />;
}
export default withAuth(ItemsEditPage);
