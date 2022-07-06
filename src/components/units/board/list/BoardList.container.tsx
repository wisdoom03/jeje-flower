import * as L from "./BoardList.styles";
import { useRouter } from "next/router";
import { getMyDate } from "../../../../commons/libraries/utils";
import { ChangeEvent, MouseEvent, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { useQuery } from "@apollo/client";
import _ from "lodash";
import { GlobalContext } from "../../../../../pages/_app";
import Pagination from "../../../commons/pagination";
import BoardsListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";

export default function BoardsList() {
  const { userInfo } = useContext(GlobalContext);
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

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
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 1000);

  return (
    <L.Wrapper>
      <div>
        <L.Title>Flower Us</L.Title>
        <span>{userInfo?.name}님 환영!</span>
        <L.BoardSearchWrapper>
          <L.SearchInput
            placeholder="검색어를 입력해주세요"
            type="text"
            onChange={onChangeSearch}
          />
        </L.BoardSearchWrapper>
      </div>
      <BoardsListUI data={data} keyword={keyword} />
      <Pagination keyword={keyword} refetch={refetch} lastPage={lastPage} />
      <L.ButtonWrapper>
        <L.RegisterButton
          onClick={() => {
            router.push(`/boards/new`);
          }}
        >
          등록하기
        </L.RegisterButton>
      </L.ButtonWrapper>
    </L.Wrapper>
  );
}
