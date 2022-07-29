import { ChangeEvent } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface CommentWriteUIProps {
  onClickSubmit: () => void;
  rating: number;
  writer: string;
  password: string;
  contents: string;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChange: (event: number) => void;
  el?: IBoardComment;
  isEdit?: boolean;
}
