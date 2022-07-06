import styled from "@emotion/styled";
import { Color } from "../../../../commons/styles/ColorStyles";
import { FontFamily, FontSize } from "../../../../commons/styles/FontStyles";

export const Dropdown = styled.span`
  position: relative;

  > button {
    width: 100px;
    height: 40px;
    border-radius: 4px;
    background-color: ${Color.ORANGE_POINT};
    color: ${Color.WHITE_1};
    :hover {
      background-color: ${Color.BEIGE_POINT};
    }
  }
  ul {
    position: absolute;
    top: 50px;
    right: 0;
    z-index: 3;
    background-color: ${Color.WHITE_1};
    border: 1px solid rgb(218, 221, 224);
    border-radius: 6px;
    box-shadow: rgb(63 71 77 / 20%) 0px 4px 10px 0px;
    padding: 8px;

    li {
      /* height: 30px; */
      display: flex;
      flex-direction: column;
      padding: 15px;
      border-radius: 2px;
      transition: background-color 0.2s ease 0s;
      /* word-break: keep-all; */
      white-space: nowrap;
      /* line-height: 30px; */
      outline: none;
      cursor: pointer;
      :hover {
        background-color: ${Color.GRAY_4};
      }
      p:nth-of-type(1) {
        font-family: ${FontFamily.MEDIUM};
        font-size: ${FontSize.SMALL};
      }
      p:nth-of-type(2) {
        font-family: ${FontFamily.LIGHT};
        font-size: ${FontSize.SMALL};
      }
    }
  }
`;
