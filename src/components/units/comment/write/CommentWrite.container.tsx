import { useMutation } from "@apollo/client";
import { CREATE_COMMENT, FETCH_COMMENTS } from "./CommentWrite.queries";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { Modal } from "antd";
import CommentWriteUI from "./CommentWrite.presenter";

export default function CommentWrite() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(3);

  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_COMMENT);
  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onChangeContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }

  function handleChange(event: number) {
    setRating(event);
  }

  const onClickSubmit = async () => {
    if (!writer || !password || !contents) {
      Modal.warning({ title: "작성자, 비밀번호, 내용 모두 입력해야합니다" });
      return;
    }
    try {
      await createBoardComment({
        variables: {
          boardId: String(router.query.boardId),
          createBoardCommentInput: {
            writer: writer,
            password: password,
            contents: contents,
            rating: rating,
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
      setWriter("");
      setPassword("");
      setContents("");
      setRating(3);
    } catch (error) {
      Modal.warning({ title: "죄송합니다. 잠시 후에 이용 부탁드립니다" });
    }
  };

  return (
    <CommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      handleChange={handleChange}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      rating={rating}
      writer={writer}
      password={password}
      contents={contents}
    />
  );
}
