import * as D from "./CommentList.styles";
import * as E from "../edit/CommentEdit.styles";
import { ChangeEvent, MouseEvent, MouseEventHandler, useState } from "react";

import { FETCH_COMMENTS, UPDATE_COMMENT } from "../write/CommentWrite.queries";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";

interface ICommentListUIItemProps {
  el: any;
  onClickModalForDelete: MouseEventHandler<HTMLButtonElement>;
}

export default function CommentListUIItem(props: ICommentListUIItemProps) {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);

  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(3);

  const [updateBoardComment] = useMutation(UPDATE_COMMENT);

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onChangeContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }

  function handleChange(event: number) {
    setRating(event);
  }

  //댓글 수정하러가기 버튼
  const onClickEdit = () => {
    setIsEdit(true);
  };

  // 최종 수정버튼
  const onClickEditSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    if (!contents && !rating) {
      Modal.warning({ title: "수정된 내용이 없습니다" });
      return;
    }
    if (!password) {
      Modal.warning({ title: "비밀번호를 입력해주세요" });
      return;
    }

    const myUpdateCommentInput = { contents, rating };
    if (contents) myUpdateCommentInput.contents = contents;
    if (rating) myUpdateCommentInput.rating = rating;
    try {
      await updateBoardComment({
        variables: {
          password: password,
          boardCommentId: event.currentTarget.id,
          updateBoardCommentInput: myUpdateCommentInput,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: String(router.query.boardId), page: 1 },
          },
        ],
      });

      Modal.info({ title: "댓글이 수정되었습니다 🌷" });
      setIsEdit(false);
    } catch (error) {
      Modal.warning({ title: "죄송합니다. 잠시 후에 이용 부탁드립니다" });
    }
  };

  return (
    <D.Wrapper key={props.el._id}>
      {isEdit === false && (
        <div>
          <D.RowWrapper>
            <D.WrapperLeft>
              <D.LeftHead>
                <D.Rating value={props.el.rating}></D.Rating>
                <D.Writer>{props.el.writer}</D.Writer>
              </D.LeftHead>
              <D.Contents>{props.el.contents}</D.Contents>
            </D.WrapperLeft>
            <D.WrapperRight>
              <D.ButtonWrapper>
                <D.Edit id={props.el._id} onClick={onClickEdit}></D.Edit>
                <D.Delete
                  id={props.el._id}
                  onClick={props.onClickModalForDelete}
                ></D.Delete>
              </D.ButtonWrapper>
            </D.WrapperRight>
          </D.RowWrapper>
        </div>
      )}
      {isEdit === true && (
        <div>
          <E.RowWrapper>
            <E.WrapperLeft>
              <E.LeftHead>
                <E.Rating
                  defaultValue={props.el.rating}
                  onChange={handleChange}
                ></E.Rating>
                <E.Writer>{props.el.writer}</E.Writer>
                <E.Password
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  onChange={onChangePassword}
                ></E.Password>
              </E.LeftHead>
              <E.Contents
                type="text"
                defaultValue={props.el.contents}
                onChange={onChangeContents}
              ></E.Contents>
            </E.WrapperLeft>
            <E.WrapperRight>
              <E.ButtonWrapper>
                <E.Edit id={props.el._id} onClick={onClickEdit}></E.Edit>
                <E.Delete
                  id={props.el._id}
                  onClick={props.onClickModalForDelete}
                ></E.Delete>
              </E.ButtonWrapper>
              <E.Button
                id={props.el._id}
                type="button"
                onClick={onClickEditSubmit}
              >
                수정하기
              </E.Button>
            </E.WrapperRight>
          </E.RowWrapper>
        </div>
      )}
    </D.Wrapper>
  );
}
