import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  // writer?: any;
  // createdAt: string;
  // title?: string;
  // contents?: string;
  // likeCount?: number;
  // dislikeCount?: number;
  // youtubeUrl?: any;
  images?: any;
  // address?: string;
  // zipcode?: string;
  data?: Pick<IQuery, "fetchBoard">;
  onClickLike: (event: MouseEvent) => void;
  onClickDislike: (event: MouseEvent) => void;

  // onClickEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
}
