import { useState } from "react";
import React, { MouseEvent } from "react";
// import * as P from "./pagination";
import styled from "@emotion/styled";
import { Color } from "../../../commons/styles/ColorStyles";

interface IPaginationProps {
  refetch?: any;
  lastPage: number;
  keyword?: string;
}
export default function Pagination01(props: IPaginationProps) {
  const [startPage, setStartPage] = useState(1);
  const [nowPage, setNowPage] = useState(1);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (event.target instanceof HTMLSpanElement) {
      props.refetch({ search: props.keyword, page: Number(event.target.id) });
      setNowPage(Number(event.target?.id));
    }
  };

  const onClickPrevPage = () => {
    if (startPage === 1) {
      return;
    }
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > props.lastPage) {
      return;
    }
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };

  const onClickStartPage = () => {
    if (startPage === 1) {
      return;
    }
    setStartPage(1);
    props.refetch({ page: 1 });
    setNowPage(1);
  };

  const onClickLastPage = () => {
    if (startPage + 10 > props.lastPage) {
      return;
    }
    setStartPage(props.lastPage);
    props.refetch({ page: props.lastPage });
    setNowPage(props.lastPage);
  };

  return (
    <Pagination>
      <Wrapper>
        <button onClick={onClickStartPage}>&#xE000;&#xE000;</button>
        <button onClick={onClickPrevPage}>&#xE000;</button>
        {new Array(10)
          .fill(1)
          .map(
            (_, index) =>
              index + startPage <= props.lastPage && (
                <PageNumber
                  key={index + startPage}
                  onClick={onClickPage}
                  id={String(index + startPage)}
                  className={
                    nowPage === Number(index + startPage) ? "click" : ""
                  }
                >{` ${index + startPage} `}</PageNumber>
              )
          )}
        <button onClick={onClickNextPage}>&#xE001;</button>
        <button onClick={onClickLastPage}>&#xE001;&#xE001;</button>
      </Wrapper>
    </Pagination>
  );
}

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 20px;
`;

const PageNumber = styled.span`
  text-align: center;
  cursor: pointer;
  &.click {
    color: ${Color.ORANGE_POINT};
  }
  :hover {
    color: ${Color.ORANGE_SUB};
  }
`;
