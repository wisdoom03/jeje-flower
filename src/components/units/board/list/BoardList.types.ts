import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardsListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  keyword: string;
}
