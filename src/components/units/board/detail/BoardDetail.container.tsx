import React from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import BoardDetailPresenter from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  // console.log(data?.fetchBoard.images);

  const onClickDelete = async () => {
    await deleteBoard({
      variables: { boardId: String(router.query.boardId) },
    });
    router.push(`/boards`);
    Modal.info({ content: "게시글이 삭제되었습니다" });
  };

  function onClickLike() {
    likeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardId) },
        },
      ],
    });
  }

  function onClickDislike() {
    dislikeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.boardId) },
        },
      ],
    });
  }

  return (
    <BoardDetailPresenter
      // writer={data?.fetchBoard.writer}
      // createdAt={data?.fetchBoard.createdAt}
      // title={data?.fetchBoard.title}
      // contents={data?.fetchBoard.contents}
      // likeCount={data?.fetchBoard.likeCount}
      // dislikeCount={data?.fetchBoard.dislikeCount}
      // youtubeUrl={data?.fetchBoard.youtubeUrl}
      images={data?.fetchBoard.images}
      data={data}
      // zipcode={data?.fetchBoard.boardAddress?.zipcode}
      // address={data?.fetchBoard.boardAddress?.address}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
      // onClickList={onClickList}
      // onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
    />
  );
}
