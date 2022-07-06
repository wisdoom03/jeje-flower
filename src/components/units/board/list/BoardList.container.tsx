import * as L from "./BoardList.styles";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { useQuery } from "@apollo/client";
import _ from "lodash";
import Pagination from "../../../commons/pagination";
import BoardsListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";

export default function BoardsList() {
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil(Number(dataBoardsCount?.fetchBoardsCount) / 10);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const getDebounce = _.debounce((data) => {
    setKeyword(data);
    refetch({ search: data, page: 1 });
  }, 1000);

  return (
    <L.Wrapper>
      <div>
        <L.Title>Flower Us</L.Title>
        <input
          placeholder="검색어를 입력해주세요"
          type="text"
          onChange={onChangeSearch}
        />
      </div>
      <BoardsListUI data={data} keyword={keyword} />
      <Pagination keyword={keyword} refetch={refetch} lastPage={lastPage} />
    </L.Wrapper>
  );
}
