// firebase 연습하기
import { useState } from "react";
import * as F from "./styles";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";
import { firebaseApp } from "../_app";

export default function FireBasePage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer: writer,
      title: title,
      contents: contents,
    });
  };

  const onClickFetch = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const docs = result.docs.map((el) => el.data());
    console.log(docs);
  };

  return (
    <F.Wrapper>
      <F.BoardWrapper>
        <F.InputWrapper>
          작성자: <F.Writer type="text" onChange={onChangeWriter}></F.Writer>
          제목: <F.Title type="text" onChange={onChangeTitle}></F.Title>
          내용:{" "}
          <F.Contents type="text" onChange={onChangeContents}></F.Contents>
        </F.InputWrapper>
        <F.ButtonWrapper>
          <F.SubmitButton onClick={onClickSubmit}>등록하기</F.SubmitButton>
          <F.SubmitButton onClick={onClickFetch}>조회하기</F.SubmitButton>
        </F.ButtonWrapper>
      </F.BoardWrapper>
      <F.FetchWrapper>
        작성자: <F.FetchWriter></F.FetchWriter>
        제목: <F.FetchTitle></F.FetchTitle>
        내용: <F.FetchContents></F.FetchContents>
      </F.FetchWrapper>
    </F.Wrapper>
  );
}
