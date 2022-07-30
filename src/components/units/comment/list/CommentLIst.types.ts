import { MouseEvent, MouseEventHandler, ChangeEvent } from "react";
import {
  IBoardComment,
  IQuery,
} from "../../../../commons/types/generated/types";
export interface ICommentListUIProps {
  // isEdit: boolean;
  commentId: string;
  isOpen: boolean;
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickModalForDelete: MouseEventHandler<HTMLButtonElement>;
  onClickDelete: (event: MouseEvent<HTMLElement>) => void;
  onClickCancel: (event: MouseEvent<HTMLElement>) => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onLoadMore: () => void;
}

export interface ICommentListUIItemProps {
  el: IBoardComment;
  onClickModalForDelete: MouseEventHandler<HTMLButtonElement>;
  commentId: string;
}
