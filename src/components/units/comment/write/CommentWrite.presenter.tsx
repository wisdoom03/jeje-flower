import * as E from "./CommentWrite.styles";
import Input01 from "../../../commons/text/input/input01";
import { CommentWriteUIProps } from "./CommentWrite.types";
import Input02 from "../../../commons/text/input/input02";

export default function CommentWriteUI(props: CommentWriteUIProps) {
  const toggleEdit = () => {
    if (props.setIsEdit) props.setIsEdit(false);
  };

  return (
    <E.CommentsUI>
      <div>
        <E.Rating
          onChange={props.handleChange}
          defaultValue={props.isEdit ? props.el?.rating : props.rating}
        />
        <E.User>
          <Input02
            placeholder="작성자"
            type="text"
            id="writer"
            onChange={props.onChangeInputs}
            defaultValue={
              props.isEdit ? String(props.el?.writer) : props.writer
            }
            readOnly={props.isEdit}
          />
          <Input02
            placeholder="비밀번호"
            type="password"
            id="password"
            onChange={props.onChangeInputs}
          />
        </E.User>
        {props.isEdit && <button onClick={toggleEdit}>취소</button>}
      </div>
      <Input01
        maxLength={80}
        id="contents"
        commentId={props.el?._id}
        type="text"
        placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다. (80자 이하)"
        onChange={props.onChangeInputs}
        onClick={props.isEdit ? props.onClickEditSubmit : props.onClickSubmit}
        defaultValue={props.el?.contents || ""}
      />
    </E.CommentsUI>
  );
}
