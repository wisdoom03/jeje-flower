import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./Dropdown01.styles";

interface IDropdown01Props {
  LIST: list[];
}
interface list {
  title: string;
  content: string;
  link: string;
}
export default function Dropdown01(props: IDropdown01Props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const onClickCategory = () => {
    setIsActive((prev) => !prev);
  };

  const onClickList = (link: string) => () => {
    setIsActive((prev) => !prev);
    router.push(link);
  };

  return (
    <>
      <S.Dropdown>
        <button onClick={onClickCategory}>글쓰기 🖋</button>
        {isActive && (
          <>
            <ul>
              {props.LIST.map((el) => (
                <li key={el.title} onClick={onClickList(el.link)}>
                  <p>{el.title}</p>
                  <p>{el.content}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </S.Dropdown>
    </>
  );
}
