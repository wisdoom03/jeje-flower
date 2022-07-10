import styled from "@emotion/styled";
import { Color } from "../../../../commons/styles/ColorStyles";
import { FontFamily, FontSize } from "../../../../commons/styles/FontStyles";
interface IHighLight01Props {
  content: string;
}

export default function HighLight01(props: IHighLight01Props) {
  return (
    <HighLight className="highlight">
      <span>{props.content}</span>
    </HighLight>
  );
}

const HighLight = styled.div`
  padding: 0 8px;
  background-color: ${Color.GREEN_POINT};
  border-radius: 2px;
  > span {
    font-size: ${FontSize.SMALL};
    font-family: ${FontFamily.SEMIBOLD};
    color: ${Color.WHITE_1};
  }
`;
