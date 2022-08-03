import styled from "@emotion/styled";
import { Color } from "../../../../../commons/styles/ColorStyles";

interface IOutlinedButton01Props {
  title: string;
  onClick: () => void;
  square: boolean;
}
export default function OutlinedButton01(props: IOutlinedButton01Props) {
  return (
    <Button onClick={props.onClick} square={props.square} title="">
      <span>{props.title}</span>
    </Button>
  );
}

const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: ${(props: IOutlinedButton01Props) => {
    if (props.square) return "4px";
    return "50px";
  }};
  padding: 10px;
  border: 1px solid ${Color.ORANGE_POINT};
  background-color: ${Color.WHITE_1};
  color: ${Color.ORANGE_POINT};
  transition: background-color 0.2s ease;
  :hover {
    background-color: ${Color.ORANGE_POINT};
    color: ${Color.WHITE_1};
  }
`;
