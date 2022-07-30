import { ChangeEvent, Dispatch, SetStateAction, MouseEvent } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface CommentWriteUIProps {
  onClickSubmit?: () => void;
  onClickEditSubmit?: (event: MouseEvent<HTMLButtonElement>) => void;
  rating: number;
  writer: string;
  password: string;
  contents: string;
  value?: string;
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChange: (event: number) => void;
  el?: IBoardComment;
  isEdit: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
}
