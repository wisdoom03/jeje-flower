import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  images?: any;
  data?: Pick<IQuery, "fetchBoard">;
  onClickLike: () => void;
  onClickDislike: () => void;
  onClickDelete: () => void;
}
