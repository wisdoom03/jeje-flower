import styled from "@emotion/styled";
import {
  ChangeEvent,
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Color } from "../../../../commons/styles/ColorStyles";

// const OPTION = [
//    { value: "원룸", title: "원룸" },
//    { value: "아파트", title: "아파트" },
//    { value: "빌라&연립", title: "빌라&연립" },
//    { value: "기타", title: "기타" },
//  ];

interface ISelect01Props {
  OPTION: { value: string; title: string }[];
  defaultValue: string;
  setSelect: Dispatch<SetStateAction<string>>;
}

export default function Select01(props: ISelect01Props) {
  const [value, setValue] = useState("");

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    props.setSelect(event.target.value);
  };

  useEffect(() => {
    console.log("default :", props.defaultValue);
    setValue(props.defaultValue);
  }, [props.defaultValue]);

  return (
    <Select>
      <select
        className={value ? "" : "default"}
        onChange={onChangeSelect}
        defaultValue={props.defaultValue}
      >
        <option disabled>선택해주세요</option>
        {props.OPTION.map((el) => (
          <Fragment key={el.value}>
            <option value={el.value}>{el.title}</option>
          </Fragment>
        ))}
      </select>
      <span>▾</span>
    </Select>
  );
}

const Select = styled.div`
  width: 220px;
  height: 40px;
  border: 1px solid ${Color.GRAY_2};
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: relative;
  select {
    -webkit-appearance: none;
    width: 100%;
    padding: 0 20px 0 10px;
  }
  select.default {
    color: ${Color.GRAY_2};
  }

  span {
    position: absolute;
    width: 10px;
    right: 10px;
    color: ${Color.GRAY_2};
  }
`;
