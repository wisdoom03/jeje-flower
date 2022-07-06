import * as L from "./styles";

import _ from "lodash";

export default function SearchPage(props) {
  const onChangeSearch = (event) => {
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
