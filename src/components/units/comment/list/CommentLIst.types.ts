import { MouseEvent, MouseEventHandler, ChangeEvent } from "react";
export interface ICommentListUIProps {
  // isEdit: boolean;
  isOpen: boolean;
  data: any;
  onClickModalForDelete: MouseEventHandler<HTMLButtonElement>;
  onClickDelete: (event: MouseEvent<HTMLElement>) => void;
  onClickCancel: (event: MouseEvent<HTMLElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onLoadMore: (page: number) => void;
  // onClickEdit: (event: MouseEvent<HTMLElement>) => void;
}
