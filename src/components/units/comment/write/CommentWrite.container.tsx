import { useMutation } from "@apollo/client";
import { CREATE_COMMENT, FETCH_COMMENTS } from "./CommentWrite.queries";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { Modal } from "antd";
import CommentWriteUI from "./CommentWrite.presenter";

export default function CommentWrite() {
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    contents: "",
  });
  const [rating, setRating] = useState(3);

  const router = useRouter();

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

  return (
    <CommentWriteUI
      onClickSubmit={onClickSubmit}
      rating={rating}
      writer={inputs.writer}
      password={inputs.password}
      contents={inputs.contents}
      onChangeInputs={onChangeInputs}
      handleChange={handleChange}
    />
  );
}
