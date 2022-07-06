import { useState, MouseEvent, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_COMMENTS, DELETE_COMMENT } from "./CommentList.queries";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import CommentListUI from "./CommentList.presenter";
import { Modal } from "antd";

export default function CommentList() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [commentPassword, setCommentPassword] = useState("");
  const [commentId, setCommentId] = useState("");

  const [deleteComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_COMMENT);

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_COMMENTS, {
    variables: { boardId: String(router.query.boardId), page: 1 },
  });

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments) {
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  //댓글 삭제하러가기 버튼
  function onClickModalForDelete(event: MouseEvent<HTMLElement>) {
    setIsOpen((prev) => !prev);
    setCommentId(event.currentTarget.id);
  }

  // 진짜 댓글 삭제 버튼
  const onClickDelete = async (event: MouseEvent<HTMLElement>) => {
    setCommentId(event.currentTarget.id);
    try {
      await deleteComment({
        variables: {
          password: commentPassword,
          boardCommentId: commentId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: router.query.boardId, page: 1 },
          },
        ],
      });
      setIsOpen((prev) => !prev);
      Modal.info({ title: "댓글이 삭제되었습니다" });
    } catch (error) {
      Modal.error({ content: "에러입니다" });
    }
  };
  function onClickCancel() {
    setIsOpen((prev) => !prev);
  }

  const onChangeCommentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentPassword(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div>
      <CommentListUI
        data={data}
        onClickModalForDelete={onClickModalForDelete}
        isOpen={isOpen}
        // isEdit={isEdit}
        onClickDelete={onClickDelete}
        onClickCancel={onClickCancel}
        onChangeCommentPassword={onChangeCommentPassword}
        onLoadMore={onLoadMore}
        // onClickEdit={onClickEdit}
      />
    </div>
  );
}
