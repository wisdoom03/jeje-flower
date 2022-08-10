import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Color } from "../../../../commons/styles/ColorStyles";
import { FontFamily } from "../../../../commons/styles/FontStyles";

interface ISideMenuProps {
  MENU: {
    title: string;
    page: string;
    list: {
      name: string;
      content: JSX.Element;
    }[];
    index: number;
  }[];
}

export interface MENU_ITEM {
  title: string;
  page: string;
  list: {
    name: string;
    content: JSX.Element;
  }[];
  index: number;
}

export default function SideMenu(props: ISideMenuProps) {
  const router = useRouter();

  const onClickMenu = (el: MENU_ITEM) => () => {
    router.push(`/mypage/${el.page}`);
  };
  return (
    <Wrap>
      {props.MENU.map((el) => (
        <div key={el.title}>
          <ul>
            <span onClick={onClickMenu(el)}> {el.title}</span>

            {el.list.map((list) => (
              <li key={list.name} onClick={onClickMenu(el)}>
                {list.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 250px;
  border: 1px solid ${Color.GRAY_3};
  border-radius: 8px;
  div {
    padding: 15px 20px;
  }
  div:not(:last-of-type) {
    border-bottom: 1px solid ${Color.GRAY_4};
  }
  ul {
    font-family: ${FontFamily.SEMIBOLD};
    span {
      cursor: pointer;
    }
  }
  li {
    text-indent: 18px;
    font-family: ${FontFamily.SEMILIGHT};
    margin-top: 12px;
  }
`;
