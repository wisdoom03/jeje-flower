import * as D from "./CommentList.styles";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import CommentWrite from "../write/CommentWrite.container";
import { calcTimeDiff } from "../../../../commons/libraries/utils";
import DivisionDot from "../../../commons/text/division/divisionDot";
import HighLight02 from "../../../commons/text/highlight/highlight02";
import { Modal, Rate } from "antd";
import { useMutation } from "@apollo/client";
import router from "next/router";
import { DELETE_COMMENT, FETCH_COMMENTS } from "./CommentList.queries";
import { MouseEvent } from "react";
import { ICommentListUIItemProps } from "./CommentLIst.types";
import Input02 from "../../../commons/text/input/input02";

export default function CommentListUIItem(props: ICommentListUIItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [commentPassword, setCommentPassword] = useState("");
  const [commentId, setCommentId] = useState("");

  const [deleteComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_COMMENT);

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

  const toggleDeleteModal = (event: MouseEvent<HTMLButtonElement>) => {
    setIsOpen((prev) => !prev);
    setCommentId(event.currentTarget.id);
  };

  const onChangeCommentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentPassword(event.target.value);
  };

  return (
    <D.CommentItem key={props.el._id} id={props.el._id}>
      {isOpen && (
        <Modal
          title="댓글을 삭제하시겠습니까?"
          visible={true}
          onOk={onClickDelete}
          onCancel={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <span>비밀번호 입력 : </span>
          <Input02
            placeholder="비밀번호"
            type="password"
            id="password"
            onChange={onChangeCommentPassword}
          />
        </Modal>
      )}
      {isEdit === false && (
        <D.Wrap>
          <D.WrapHeader>
            <Rate value={props.el.rating} disabled={true} />
            <p>{props.el.writer}</p>
            <HighLight02 content={calcTimeDiff(props.el.createdAt)} />
          </D.WrapHeader>
          <D.WrapBody>
            <p>{props.el.contents}</p>
            <div>
              <button
                onClick={() => {
                  setIsEdit(true);
                }}
              >
                수정
              </button>
              <DivisionDot />
              <button id={props.el._id} onClick={toggleDeleteModal}>
                삭제
              </button>
            </div>
          </D.WrapBody>
        </D.Wrap>
      )}
      {isEdit === true && (
        <D.Edit>
          <CommentWrite el={props.el} isEdit={isEdit} setIsEdit={setIsEdit} />
        </D.Edit>
      )}
    </D.CommentItem>
  );
}
