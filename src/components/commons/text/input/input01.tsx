import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import { Color } from "../../../../commons/styles/ColorStyles";
import { FontFamily } from "../../../../commons/styles/FontStyles";

interface IInput01Props {
  maxLength?: number;
  placeholder?: string;
  type: string;
  id?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  defaultValue?: string;
}
export default function Input01(props: IInput01Props) {
  return (
    <Input>
      <input
        type={props.type}
        maxLength={props.maxLength}
        placeholder={props.placeholder}
        id={props.id}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
      />
      <button onClick={props.onClick}>입력</button>
    </Input>
  );
}
export const Input = styled.div`
  width: 100%;
  height: 45px;
  border: 1px solid ${Color.GRAY_3};
  border-radius: 4px;
  line-height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  :focus-within {
    border: 1px solid ${Color.ORANGE_POINT};
  }
  input {
    width: 100%;
    padding-right: 15px;
    ::placeholder {
      color: ${Color.GRAY_2};
    }
  }
  button {
    width: 30px;
    color: ${Color.ORANGE_POINT};
    font-family: ${FontFamily.BOLD};
  }
`;
