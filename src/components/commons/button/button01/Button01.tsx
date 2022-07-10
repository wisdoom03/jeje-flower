import styled from "@emotion/styled";
import { ReactChild } from "react";
import { Color } from "../../../../commons/styles/ColorStyles";

interface IButton01Props {
  children: ReactChild;
  onClick?: () => void;
}
export default function Button01(props: IButton01Props) {
  return <Button onClick={props.onClick}>{props.children}</Button>;
}

const Button = styled.button`
  width: 55px;
  height: 55px;
  padding: 14px;
  background: ${Color.WHITE_1};
  border: 1px solid ${Color.GRAY_3};
  border-radius: 100%;
  box-shadow: 1px 3px 4px 0 rgb(209 213 217 / 20%);
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    border: 1px solid ${Color.GRAY_2};
    svg {
      path {
        fill: ${Color.GRAY_1};
      }
    }
  }
  transition: border-color 0.2s, color 0.2s, background-color 0.2s;
  svg {
    path {
      fill: ${Color.GRAY_2};
      transition: fill 0.2s;
    }
  }
`;
