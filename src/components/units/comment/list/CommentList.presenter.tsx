import * as D from "./CommentList.styles";
import { ICommentListUIProps } from "./CommentLIst.types";
import CommentListUIItem from "./CommentList.presenter.item";
export default function CommentListUI(props: ICommentListUIProps) {
  return (
    <D.CommentsUI>
      <D.Comments>
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
      </D.Comments>
    </D.CommentsUI>
  );
}
