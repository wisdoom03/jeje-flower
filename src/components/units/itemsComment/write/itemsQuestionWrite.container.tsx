import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import * as Q from "./itemsQuestionWrite.styles";
import { CREATE_QUESTION, UPDATE_QUESTION } from "./itemsQuestionWrite.queries";

export default function ItemsQuestionWriteContainer(props) {
  const router = useRouter();

  const [createUseditemQuestion] = useMutation(CREATE_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_QUESTION);

  const [contents, setContents] = useState("");

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    try {
      const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: { contents: contents },
          useditemId: String(router.query.itemId),
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev) => {
                return [data.createUseditemQuestion, ...prev];
              },
            },
          });
        },
      });
      // console.log(result?.data?.createUseditemQuestion);
      setContents("");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickEditSubmit = async () => {
    try {
      const resultUpdate = await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: contents,
          },
          useditemQuestionId: String(props.el?._id),
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev) => {
                return [data.createUseditemQuestion, ...prev];
              },
            },
          });
        },
      });
      props.setIsEdit(false);
      // console.log(resultUpdate);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <Q.CommentsUI>
      <Q.Comments>
        <Q.RowWrapper>
          <Q.WrapperLeft>
            <Q.Contents
              type="text"
              onChange={onChangeContents}
              placeholder="댓글 달아주세호 🦋"
              defaultValue={props.isEdit ? props.el?.contents : contents}
            />
          </Q.WrapperLeft>
          <Q.WrapperRight>
            <Q.CommentLimit></Q.CommentLimit>
            <Q.Button
              type="button"
              onClick={props.isEdit ? onClickEditSubmit : onClickSubmit}
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </Q.Button>
          </Q.WrapperRight>
        </Q.RowWrapper>
      </Q.Comments>
    </Q.CommentsUI>
  );
}
