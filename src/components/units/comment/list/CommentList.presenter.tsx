import * as D from "./CommentList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { ICommentListUIProps } from "./CommentLIst.types";
import CommentListUIItem from "./CommentList.presenter.item";

export default function CommentListUI(props: ICommentListUIProps) {
  return (
    <D.CommentsUI>
      <D.Comments>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          // useWindow={true}
        >
          {props.data?.fetchBoardComments.map((el) => (
            <div key={el._id}>
              <CommentListUIItem
                key={el._id}
                el={el}
                commentId={props.commentId}
                onClickModalForDelete={props.onClickModalForDelete}
              />
            </div>
          ))}
        </InfiniteScroll>
      </D.Comments>
    </D.CommentsUI>
  );
}
