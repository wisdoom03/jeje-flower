import styled from "@emotion/styled";
import { Color } from "../../../../commons/styles/ColorStyles";
import { FontFamily } from "../../../../commons/styles/FontStyles";
interface IHighLight02Props {
  content: string;
}

export default function HighLight02(props: IHighLight02Props) {
  return (
    <HighLight className="highlight">
      <span>{props.content}</span>
    </HighLight>
  );
}

const HighLight = styled.div`
  > span {
    padding: 2px 4px;
    font-size: 0.5rem;
    border-radius: 2px;
    background-color: ${Color.GREEN_POINT};
    font-family: ${FontFamily.SEMILIGHT};
    color: ${Color.WHITE_1};
  }
`;
