import * as L from "./styles";
import _ from "lodash";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface ISearchPageProps {
  refetch?: any;
  setKeyword: Dispatch<SetStateAction<string>>;
}

export default function SearchPage(props: ISearchPageProps) {
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data, page: 1 });
    props.setKeyword(data);
  }, 1000);

  return (
    <L.BoardSearchWrapper>
      <L.SearchInput
        placeholder="검색어를 입력해주세요"
        type="text"
        onChange={onChangeSearch}
      ></L.SearchInput>
    </L.BoardSearchWrapper>
  );
}
