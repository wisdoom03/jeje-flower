import { gql, useMutation, useQuery } from "@apollo/client";
import { getMyDate } from "../../src/commons/libraries/utils";
import * as I from "../../src/components/units/items/list/ItemsList.styles";
import withAuth from "../../src/components/commons/hoc/withAuth";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";
import { Fragment, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { Modal } from "antd";
import { IUseditem } from "../../src/commons/types/generated/types";

const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      price
      createdAt
      images
    }
  }
`;

export function ItemsPage() {
  const [basketItems, setBasketItems] = useState([]);
  const [todayItems, setTodayItems] = useState([]);

  const router = useRouter();
  const { data, fetchMore, refetch } = useQuery(FETCH_USED_ITEMS);

  const [keyword, setKeyword] = useState("");
  const [search, setSearch] = useState("");

  const onClickItem = (el) => () => {
    // console.log(event.target.id);

    const todayItems = JSON.parse(localStorage.getItem("todayItems") || "[]");

    const temp = todayItems.filter((todayEl) => todayEl._id === el._id);

    if (temp.length === 1) {
      router.push(`/items/${el._id}`);
      return;
    }

    const { __typename, ...todayEl } = el;

    todayItems.push(todayEl);

    localStorage.setItem("todayItems", JSON.stringify(todayItems));

    router.push(`/items/${el._id}`);
  };

  const onClickNew = () => {
    router.push("/items/new");
  };

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };
  const onClickSearch = () => {
    refetch({ search: search, page: 1 });
    setKeyword(search);
  };

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
        search: keyword,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems) {
          return { fetchUseditems: [...prev.fetchUseditems] };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickBasket = (el) => () => {
    // console.log(el);

    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");

    const temp = baskets.filter((basketEl) => basketEl._id === el._id);

    if (temp.length === 1) {
      Modal.error({ content: "이미 담은 상품입니다" });
      return;
    }

    const { __typename, ...newEl } = el;

    baskets.push(newEl);

    localStorage.setItem("basket", JSON.stringify(baskets));
  };

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);

    const todayItems = JSON.parse(localStorage.getItem("todayItems") || "[]");

    setTodayItems(todayItems);
  }, []);

  const onClickRecentItems = () => {
    router.push("/shopping");
    // console.log(basketItems);
  };

  return (
    <>
      <I.RecentItemsWrapper>
        <I.RecentItems onClick={onClickRecentItems}>
          최근 본 상품 ( {todayItems.length} )
          <I.RecentImageWrapper>
            {todayItems
              .map((el: IUseditem) => (
                <Fragment key={el._id}>
                  <I.RecentImage
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  ></I.RecentImage>
                </Fragment>
              ))
              .filter((el, index) => {
                if (index <= 3) return el;
              })}
          </I.RecentImageWrapper>
        </I.RecentItems>
      </I.RecentItemsWrapper>
      <I.Wrapper>
        <I.ButtonWrapper>
          <I.RegisterButton onClick={onClickNew}>등록하기</I.RegisterButton>
        </I.ButtonWrapper>
        <I.SearchInput
          placeholder="검색어를 입력해주세요"
          type="text"
          onChange={onChangeSearch}
        />
        <button onClick={onClickSearch}>검색</button>
        <I.ItemListWrapper>
          <I.Row>
            <I.HeaderNumber>NO</I.HeaderNumber>
            <I.HeaderImage>미리보기</I.HeaderImage>
            <I.HeaderName>상품명</I.HeaderName>
            <I.HeaderRemarks>한줄평</I.HeaderRemarks>
            <I.HeaderPrice>가격</I.HeaderPrice>
            <I.HeaderDate>날짜</I.HeaderDate>
          </I.Row>
          <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            useWindow={true}
          >
            {data?.fetchUseditems.map((el, index: number) => (
              <I.Row key={el._id}>
                <I.BoardNumber>{index + 1}</I.BoardNumber>
                <I.BoardImage
                  width={100}
                  height={70}
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                ></I.BoardImage>
                <I.BoardName onClick={onClickItem(el)} id={el._id}>
                  {el.name
                    .replaceAll(keyword, `#$%${keyword}#$%`)
                    .split("#$%")
                    .map((el) => (
                      <I.Word key={uuidv4()} isMatched={el === keyword}>
                        {el}
                      </I.Word>
                    ))}
                </I.BoardName>
                <I.BoardRemarks onClick={onClickItem} id={el._id}>
                  {el.remarks}
                </I.BoardRemarks>
                <I.BoardPrice>{el.price}</I.BoardPrice>
                <I.BoardDate>{getMyDate(el.createdAt)}</I.BoardDate>

                <I.Button onClick={onClickBasket(el)}>장바구니</I.Button>
              </I.Row>
            ))}
          </InfiniteScroll>
        </I.ItemListWrapper>
      </I.Wrapper>
    </>
  );
}
// export default withAuth(ItemsPage);
export default ItemsPage;
