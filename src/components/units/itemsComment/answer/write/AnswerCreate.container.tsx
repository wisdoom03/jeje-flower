import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { IUseditemQuestionAnswer } from "../../../../../commons/types/generated/types";
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

interface IAnswerWriteUIProps {
  questionId?: string;
  setIsAnswer?: Dispatch<SetStateAction<boolean>>;
  setIsAnswerEdit?: Dispatch<SetStateAction<boolean>>;
  answersEl?: IUseditemQuestionAnswer;
  refetch?: any;
  isAnswer?: boolean;
  isAnswerEdit?: boolean;
}

export default function AnswerWriteUI(props: IAnswerWriteUIProps) {
  const [createUseditemQuestionAnswer] = useMutation(CREATE_ANSWER);
  const [updateUseditemQuestionAnswer] = useMutation(UPDATE_ANSWER);
  const [contents, setContents] = useState("");

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
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
      if (props.setIsAnswer) props.setIsAnswer(false);
      props.refetch();

      // console.log(String(props.questionId));
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: `${error.message}` });
    }
  };

  const onClickAnswerEditSubmit = async () => {
    try {
      const resultUpdate = await updateUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: String(props.answersEl?._id),
          updateUseditemQuestionAnswerInput: {
            contents: contents,
          },
        },
      });

      console.log(resultUpdate);
      if (props.setIsAnswerEdit) props.setIsAnswerEdit(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: `${error.message}` });
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
              defaultValue={props.isAnswerEdit ? props.answersEl?.contents : ""}
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
