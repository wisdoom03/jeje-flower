import * as L from "./BoardList.styles";
import { getMyDate } from "../../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";
import { IBoardsListUIProps } from "./BoardList.types";
import { useRouter } from "next/router";

export default function BoardsListUI(props: IBoardsListUIProps) {
  const router = useRouter();
  return (
    <L.BoardListWrapper>
      <L.Row>
        <L.HeaderNumber>NO</L.HeaderNumber>
        <L.HeaderWriter>작성자</L.HeaderWriter>
        <L.HeaderTitle>제목</L.HeaderTitle>
        <L.HeaderDate>날짜</L.HeaderDate>
      </L.Row>
      {props.data?.fetchBoards.map((el, index) => (
        <L.Row
          key={el._id}
          id={el._id}
          onClick={() => {
            router.push(`/boards/${el._id}`);
          }}
        >
          <L.BoardNumber>{index + 1}</L.BoardNumber>
          <L.BoardWriter>{el.writer}</L.BoardWriter>
          <L.BoardTitle id={el._id}>
            {el.title
              .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
              .split("#$%")
              .map((el) => (
                <L.Word key={uuidv4()} isMatched={el === props.keyword}>
                  {el}
                </L.Word>
              ))}
          </L.BoardTitle>
          <L.BoardDate>{getMyDate(el.createdAt)}</L.BoardDate>
        </L.Row>
      ))}
    </L.BoardListWrapper>
  );
}
