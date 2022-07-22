import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
  IUseditemQuestion,
} from "../../../../commons/types/generated/types";
import AnswerList from "../answer/list/AnswerList.container";
import AnswerWriteUI from "../answer/write/AnswerCreate.container";
import ItemsQuestionWrite from "../write/itemsQuestionWrite.container";
import * as Q from "./itemsQuestionList.styles";

const DELETE_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

const FETCH_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
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

interface IItemsQuestionListUIProps {
  el: IUseditemQuestion;
  refetch: any;
}

export default function ItemsQuestionListUI(props: IItemsQuestionListUIProps) {
  const [deleteUseditemQuestion] = useMutation(DELETE_QUESTION);
  const [isEdit, setIsEdit] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_ANSWERS, {
    variables: {
      page: 1,
      useditemQuestionId: String(props.el._id),
    },
  });

  const onClickMoveToEdit = () => {
    setIsEdit(true);
    //  alert(props.el._id);
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: String(props.el._id),
        },
      });
      Modal.info({ content: "댓글이 삭제되었습니다." });
      props.refetch();
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  const onClickAnswer = () => {
    setIsAnswer(true);
  };

  return (
    <Q.Wrapper key={props.el._id}>
      {isEdit === false && (
        <>
          <Q.RowWrapper>
            <Q.WrapperLeft>
              <Q.LeftHead>
                <Q.Rating>별점</Q.Rating>
                <Q.Writer>{props.el.user?.name}</Q.Writer>
              </Q.LeftHead>
              <Q.Contents>{props.el.contents}</Q.Contents>
            </Q.WrapperLeft>
            <Q.WrapperRight>
              <Q.ButtonWrapper>
                <Q.Answer onClick={onClickAnswer}></Q.Answer>
                <Q.Edit onClick={onClickMoveToEdit} />
                <Q.Delete onClick={onClickDelete} />
              </Q.ButtonWrapper>
            </Q.WrapperRight>
          </Q.RowWrapper>
          {data?.fetchUseditemQuestionAnswers.map((el) => (
            <AnswerList key={props.el._id} answersEl={el} refetch={refetch} />
          ))}
          {isAnswer ? (
            <AnswerWriteUI
              questionId={props.el._id}
              isAnswer={false}
              setIsAnswer={setIsAnswer}
              refetch={refetch}
            />
          ) : (
            <></>
          )}
        </>
      )}
      {isEdit === true && (
        <ItemsQuestionWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </Q.Wrapper>
  );
}
