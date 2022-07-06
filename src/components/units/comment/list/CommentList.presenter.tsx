import * as D from "./CommentList.styles";
import { Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import { ICommentListUIProps } from "./CommentLIst.types";
import CommentListUIItem from "./CommentList.presenter.item";

export default function CommentListUI(props: ICommentListUIProps) {
  return (
    <D.CommentsUI>
      {props.isOpen && (
        <Modal
          title="댓글을 삭제하시겠습니까?"
          visible={true}
          onOk={props.onClickDelete}
          onCancel={props.onClickCancel}
        >
          <span>비밀번호 입력: </span>
          <D.CommentPassword
            type="password"
            onChange={props.onChangeCommentPassword}
          ></D.CommentPassword>
        </Modal>
      )}
      <D.Comments>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchBoardComments.map((el) => (
            <CommentListUIItem
              key={el._id}
              el={el}
              onClickModalForDelete={props.onClickModalForDelete}
            />
          ))}
        </InfiniteScroll>
      </D.Comments>
    </D.CommentsUI>
  );
}
