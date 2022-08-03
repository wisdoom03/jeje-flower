import styled from "@emotion/styled";
import { Color } from "../../../../../commons/styles/ColorStyles";

interface IContainedButton01Props {
  title: string;
  onClick: () => void;
  square: boolean;
}
export default function ContainedButton01(props: IContainedButton01Props) {
  return (
    <Button onClick={props.onClick} square={props.square} title="">
      <span>{props.title}</span>
    </Button>
  );
}

const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: ${(props: IContainedButton01Props) => {
    if (props.square) return "4px";
    return "50px";
  }};
  padding: 10px;
  background-color: ${Color.ORANGE_POINT};
  color: ${Color.WHITE_1};
  transition: background-color 0.2s ease;
  :hover {
    background-color: ${Color.BEIGE_POINT};
  }
`;
