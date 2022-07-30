import { useMutation } from "@apollo/client";
import {
  CREATE_COMMENT,
  FETCH_COMMENTS,
  UPDATE_COMMENT,
} from "./CommentWrite.queries";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
  MouseEvent,
} from "react";
import { useRouter } from "next/router";
import { Modal } from "antd";
import CommentWriteUI from "./CommentWrite.presenter";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface ICommentWriteProps {
  el?: IBoardComment;
  isEdit: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  onClickEditSubmit?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function CommentWrite(props: ICommentWriteProps) {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    contents: "",
  });
  const [rating, setRating] = useState(props.el?.rating || 3);
  const [createBoardComment] = useMutation(CREATE_COMMENT);

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const handleChange = (event: number) => {
    setRating(event);
  };

  const onClickSubmit = async () => {
    if (!inputs.writer || !inputs.password || !inputs.contents) {
      Modal.warning({ title: "작성자, 비밀번호, 내용 모두 입력해야합니다" });
      return;
    }
    try {
      await createBoardComment({
        variables: {
          boardId: String(router.query.boardId),
          createBoardCommentInput: {
            ...inputs,
            rating,
          },
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: String(router.query.boardId), page: 1 },
          },
        ],
      });
      Modal.info({ title: "소중한 댓글이 등록되었습니다 🌷" });
      setInputs({
        writer: "",
        password: "",
        contents: "",
      });
      setRating(3);
    } catch (error) {
      Modal.warning({ title: "죄송합니다. 잠시 후에 이용 부탁드립니다" });
    }
  };

  const [updateBoardComment] = useMutation(UPDATE_COMMENT);
  // 최종 수정버튼
  const onClickEditSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    if (!inputs.contents && !rating) {
      Modal.warning({ title: "수정된 내용이 없습니다" });
      return;
    }
    if (!inputs.password) {
      Modal.warning({ title: "비밀번호를 입력해주세요" });
      return;
    }

    const myUpdateCommentInput = {
      contents: props.el?.contents,
      rating: props.el?.rating,
    };
    if (inputs.contents) myUpdateCommentInput.contents = inputs.contents;
    if (rating) myUpdateCommentInput.rating = rating;
    try {
      await updateBoardComment({
        variables: {
          password: inputs.password,
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
      if (props.setIsEdit) props.setIsEdit(false);
    } catch (error) {
      Modal.warning({ title: "죄송합니다. 잠시 후에 이용 부탁드립니다" });
    }
  };

  return (
    <CommentWriteUI
      onClickSubmit={onClickSubmit}
      onClickEditSubmit={onClickEditSubmit}
      rating={rating}
      writer={inputs.writer}
      password={inputs.password}
      contents={inputs.contents}
      onChangeInputs={onChangeInputs}
      handleChange={handleChange}
      el={props.el}
      isEdit={props.isEdit}
      setIsEdit={props.setIsEdit}
    />
  );
}
