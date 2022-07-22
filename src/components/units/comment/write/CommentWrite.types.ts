import { ChangeEvent } from "react";

export interface CommentWriteUIProps {
  onClickSubmit: () => void;
  rating: number;
  writer: string;
  password: string;
  contents: string;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChange: (event: number) => void;
}
