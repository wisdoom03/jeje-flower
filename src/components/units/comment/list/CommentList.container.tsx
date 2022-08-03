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
import ContainedButton01 from "../../../commons/button/contained/contained01/ContainedButton01";
import styled from "@emotion/styled";
import OutlinedButton01 from "../../../commons/button/outlined/outlined01/OutlinedButton01";

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

  function onClickModalForDelete(event: MouseEvent<HTMLElement>) {
    setIsOpen((prev) => !prev);
    setCommentId(event.currentTarget.id);
  }

  const onClickDelete = async () => {
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
  };

  return (
    <>
      <CommentListUI
        data={data}
        onClickModalForDelete={onClickModalForDelete}
        isOpen={isOpen}
        commentId={commentId}
        onClickDelete={onClickDelete}
        onClickCancel={onClickCancel}
        onChangeCommentPassword={onChangeCommentPassword}
      />
      <ButtonWrap>
        <OutlinedButton01 title="더보기" onClick={onLoadMore} square={false} />
      </ButtonWrap>
    </>
  );
}

const ButtonWrap = styled.div`
  width: 120px;
  margin-top: 40px;
`;
