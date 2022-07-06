import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
import ItemsQuestionListUI from "./itemsQuestionList.presenter";

const FETCH_QUESTIONS = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      contents
      createdAt
      user {
        name
      }
    }
  }
`;

export default function ItemsQuestionListContainer() {
  const router = useRouter();

  const { data, fetchMore, refetch } = useQuery(FETCH_QUESTIONS, {
    variables: {
      page: 1,
      useditemId: String(router.query.itemId),
    },
  });

  const LoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions) {
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        }
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  // console.log(data?.fetchUseditemQuestions);

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={LoadMore}
        hasMore={true}
        useWindow={true}
      >
        {data?.fetchUseditemQuestions.map((el) => (
          <ItemsQuestionListUI key={el._id} el={el} refetch={refetch} />
        ))}
      </InfiniteScroll>
    </>
  );
}
