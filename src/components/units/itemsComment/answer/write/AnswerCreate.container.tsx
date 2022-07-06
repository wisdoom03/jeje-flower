import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import * as A from "./AnswerCreate.styles";

const CREATE_ANSWER = gql`
  mutation createUseditemQuestionAnswer(
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
    $useditemQuestionId: ID!
  ) {
    createUseditemQuestionAnswer(
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        name
      }
      createdAt
    }
  }
`;

const UPDATE_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
    $useditemQuestionAnswerId: ID!
  ) {
    updateUseditemQuestionAnswer(
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    ) {
      _id
      contents
      user {
        name
      }
      updatedAt
    }
  }
`;

export default function AnswerWriteUI(props) {
  const [createUseditemQuestionAnswer] = useMutation(CREATE_ANSWER);
  const [updateUseditemQuestionAnswer] = useMutation(UPDATE_ANSWER);
  const [contents, setContents] = useState("");

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  const onClickAnswerSubmit = async () => {
    try {
      const resultCreate = await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: String(props.questionId),
          createUseditemQuestionAnswerInput: {
            contents: contents,
          },
        },
      });

      // console.log(resultCreate?.data);
      props.setIsAnswer(false);
      props.refetch();

      // console.log(String(props.questionId));
    } catch (error) {
      Modal.error({ content: `${error.message}` });
    }
  };

  const onClickAnswerEditSubmit = async () => {
    try {
      const resultUpdate = await updateUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: String(props.AnswersEl?._id),
          updateUseditemQuestionAnswerInput: {
            contents: contents,
          },
        },
      });

      console.log(resultUpdate);
      props.setIsAnswerEdit(false);
    } catch (error) {
      Modal.error({ content: `${error.message}` });
    }
  };

  return (
    <A.CommentsUI>
      <A.Comments>
        <A.RowWrapper>
          <A.WrapperLeft>
            <A.Contents
              type="text"
              placeholder="대댓글 달아주세호 🦋"
              onChange={onChangeContents}
              defaultValue={props.isAnswerEdit ? props.AnswersEl?.contents : ""}
            />
          </A.WrapperLeft>
          <A.WrapperRight>
            <A.CommentLimit></A.CommentLimit>
            <A.Button
              type="button"
              onClick={
                props.isAnswerEdit
                  ? onClickAnswerEditSubmit
                  : onClickAnswerSubmit
              }
            >
              {props.isAnswerEdit ? "수정하기" : "등록하기"}
            </A.Button>
          </A.WrapperRight>
        </A.RowWrapper>
      </A.Comments>
    </A.CommentsUI>
  );
}
