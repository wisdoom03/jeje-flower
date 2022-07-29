import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import { Color } from "../../../../commons/styles/ColorStyles";

interface IInput02Props {
  placeholder?: string;
  type: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  value?: string;
  readOnly?: boolean;
}
export default function Input02(props: IInput02Props) {
  return (
    <Input
      placeholder={props.placeholder}
      type={props.type}
      onChange={props.onChange}
      id={props.id}
      value={props.value}
      readOnly={props.readOnly}
    />
  );
}

const Input = styled.input`
  width: 100px;
  border-bottom: 1px solid ${Color.GRAY_3};
  ::placeholder {
    color: ${Color.GRAY_2};
  }
  :focus {
    border-bottom: 1px solid ${Color.ORANGE_POINT};
  }
`;
