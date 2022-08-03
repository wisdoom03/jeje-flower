import styled from "@emotion/styled";
import { Color } from "../../../../commons/styles/ColorStyles";
import { FontFamily, FontSize } from "../../../../commons/styles/FontStyles";

export const Dropdown = styled.span`
  position: relative;

  > button {
    width: 100px;
  }
  dl {
    position: absolute;
    top: 50px;
    right: 0;
    z-index: 3;
    background-color: ${Color.WHITE_1};
    border: 1px solid rgb(218, 221, 224);
    border-radius: 6px;
    box-shadow: rgb(63 71 77 / 20%) 0px 4px 10px 0px;
    padding: 8px;

    > div {
      display: flex;
      flex-direction: column;
      padding: 12px;
      border-radius: 2px;
      transition: background-color 0.2s ease 0s;
      white-space: nowrap;
      cursor: pointer;
      :hover {
        background-color: ${Color.GRAY_4};
      }
      dt {
        font-family: ${FontFamily.MEDIUM};
        font-size: ${FontSize.SMALL};
      }
      dd {
        font-family: ${FontFamily.LIGHT};
        font-size: ${FontSize.SMALL};
      }
    }
  }
`;
