import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import { IUseditemQuestionAnswer } from "../../../../../commons/types/generated/types";
import AnswerWriteUI from "../write/AnswerCreate.container";
import * as A from "./AnswerList.styles";

const DELETE_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;

interface IAnswerListProps {
  answersEl: IUseditemQuestionAnswer;
  refetch?: any;
}

export default function AnswerList(props: IAnswerListProps) {
  const [deleteUseditemQuestionAnswer] = useMutation(DELETE_ANSWER);
  const [isAnswerEdit, setIsAnswerEdit] = useState(false);

  const onClickMoveToEdit = () => {
    setIsAnswerEdit(true);
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: String(props.answersEl._id),
        },
      });
      Modal.info({ content: "대댓글이 삭제되었습니다." });
      props.refetch();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: `${error.message}` });
    }
  };

  return (
    <A.Wrapper key={props.answersEl._id}>
      {isAnswerEdit === false && (
        <>
          <A.Division>▶️</A.Division>
          <A.RowWrapper>
            <A.WrapperLeft>
              <A.LeftHead>
                <A.Rating>별점</A.Rating>
                <A.Writer>{props.answersEl?.user?.name}</A.Writer>
              </A.LeftHead>
              <A.Contents>{props.answersEl?.contents}</A.Contents>
            </A.WrapperLeft>
            <A.WrapperRight>
              <A.ButtonWrapper>
                <A.Edit onClick={onClickMoveToEdit}></A.Edit>
                <A.Delete onClick={onClickDelete}></A.Delete>
              </A.ButtonWrapper>
            </A.WrapperRight>
          </A.RowWrapper>
        </>
      )}
      {isAnswerEdit === true && (
        <AnswerWriteUI
          isAnswerEdit={true}
          setIsAnswerEdit={setIsAnswerEdit}
          answersEl={props.answersEl}
        />
      )}
    </A.Wrapper>
  );
}
