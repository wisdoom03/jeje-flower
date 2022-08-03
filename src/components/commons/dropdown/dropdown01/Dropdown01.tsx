import { useRouter } from "next/router";
import { useState } from "react";
import ContainedButton01 from "../../button/contained/contained01/ContainedButton01";
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
        <ContainedButton01
          onClick={onClickCategory}
          square={true}
          title="글쓰기 🖋"
        />
        {isActive && (
          <>
            <dl>
              {props.LIST.map((el) => (
                <div key={el.title} onClick={onClickList(el.link)}>
                  <dt>{el.title}</dt>
                  <dd>{el.content}</dd>
                </div>
              ))}
            </dl>
          </>
        )}
      </S.Dropdown>
    </>
  );
}
