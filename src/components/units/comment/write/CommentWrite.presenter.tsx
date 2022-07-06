import * as E from "./CommentWrite.styles";

import { ChangeEvent } from "react";

interface CommentWriteUI {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChange: (event: number) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  rating: number;
  writer: string;
  password: string;
  contents: string;
}
export default function CommentWriteUI(props: CommentWriteUI) {
  return (
    <E.CommentsUI>
      <E.Comments>
        <E.RowWrapper>
          <E.WrapperLeft>
            <E.LeftHead>
              <E.Rating
                onChange={props.handleChange}
                value={props.rating}
              ></E.Rating>
              <E.Writer
                type="text"
                onChange={props.onChangeWriter}
                placeholder="작성자"
                value={props.writer}
              ></E.Writer>
              <E.Password
                type="password"
                onChange={props.onChangePassword}
                placeholder="비밀번호"
                value={props.password}
              ></E.Password>
            </E.LeftHead>
            <E.Contents
              type="text"
              onChange={props.onChangeContents}
              placeholder="개인정보 어쩌구"
              maxLength={100}
              value={props.contents}
            ></E.Contents>
          </E.WrapperLeft>
          <E.WrapperRight>
            <E.CommentLimit>{props.contents.length}/100</E.CommentLimit>
            <E.Button type="button" onClick={props.onClickSubmit}>
              등록하기
            </E.Button>
          </E.WrapperRight>
        </E.RowWrapper>
      </E.Comments>
    </E.CommentsUI>
  );
}
