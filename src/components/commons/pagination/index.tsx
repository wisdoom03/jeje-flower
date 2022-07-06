import { useState } from "react";
import React, { MouseEvent } from "react";
import * as P from "./pagination";

interface IPaginationProps {
  refetch?: any;
  lastPage: number;
  keyword: string;
}
export default function Pagination(props: IPaginationProps) {
  const [startPage, setStartPage] = useState(1);
  const [nowPage, setNowPage] = useState(1);

  function onClickPage(event: MouseEvent<HTMLDivElement>) {
    if (event.target instanceof HTMLDivElement) {
      props.refetch({ search: props.keyword, page: Number(event.target.id) });
      setNowPage(Number(event.target?.id));
    }
  }

  function onClickPrevPage() {
    if (startPage === 1) {
      return;
    }
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  }

  function onClickNextPage() {
    if (startPage + 10 > props.lastPage) {
      return;
      // setIsActive(true);
    }
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  }

  return (
    <P.Pagination>
      <P.Wrapper>
        <P.PrevButton type="button" onClick={onClickPrevPage}></P.PrevButton>
        {new Array(10).fill(1).map(
          (_, index) =>
            index + startPage <= props.lastPage && (
              <P.PageNumber
                key={index + startPage}
                onClick={onClickPage}
                id={String(index + startPage)}
                style={{
                  color:
                    nowPage === Number(index + startPage) ? "#dfdfdf" : "black",
                }}
              >{` ${index + startPage} `}</P.PageNumber>
            )
        )}
        <P.NextButton type="button" onClick={onClickNextPage}></P.NextButton>
      </P.Wrapper>
    </P.Pagination>
  );
}
