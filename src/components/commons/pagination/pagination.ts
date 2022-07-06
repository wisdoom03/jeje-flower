import styled from "@emotion/styled";
import { Color } from "../../../commons/styles/ColorStyles";

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 20px;
`;

export const PageNumber = styled.span`
  text-align: center;
  cursor: pointer;
  &.click {
    color: ${Color.ORANGE_POINT};
  }
  :hover {
    color: ${Color.ORANGE_SUB};
  }
`;
