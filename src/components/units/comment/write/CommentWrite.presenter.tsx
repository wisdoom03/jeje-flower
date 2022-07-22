import * as E from "./CommentWrite.styles";
import Input01 from "../../../commons/text/input/input01";
import { Rate } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { CommentWriteUIProps } from "./CommentWrite.types";

export default function CommentWriteUI(props: CommentWriteUIProps) {
  return (
    <E.CommentsUI>
      <E.Rating onChange={props.handleChange} value={props.rating}></E.Rating>
      <Input01
        maxLength={50}
        placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다. (50자 이하)"
      />
      <E.E>
        별점
        <Rate character={<HeartOutlined />} />
      </E.E>
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
                onChange={props.onChangeInputs}
                placeholder="작성자"
                value={props.writer}
              ></E.Writer>
              <E.Password
                type="password"
                onChange={props.onChangeInputs}
                placeholder="비밀번호"
                value={props.password}
              ></E.Password>
            </E.LeftHead>
            <E.Contents
              type="text"
              onChange={props.onChangeInputs}
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
