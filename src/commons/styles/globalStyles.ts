import { css } from "@emotion/react";
import { Color } from "./ColorStyles";
// import { breakPoints } from "./Media";

export const globalStyles = css`
  @font-face {
    font-family: "Spoqa_B";
    src: url("/fonts/SpoqaHanSansNeo-Bold.woff2") format("woff2");
  }
  @font-face {
    font-family: "Spoqa_L";
    src: url("/fonts/SpoqaHanSansNeo-Light.woff2") format("woff2");
  }
  @font-face {
    font-family: "Spoqa_M";
    src: url("/fonts/SpoqaHanSansNeo-Medium.woff2") format("woff2");
  }
  @font-face {
    font-family: "Spoqa_R";
    src: url("/fonts/SpoqaHanSansNeo-Regular.woff2") format("woff2");
  }
  @font-face {
    font-family: "Spoqa_T";
    src: url("/fonts/SpoqaHanSansNeo-Thin.woff2") format("woff2");
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Spoqa_R";
    word-break: break-all;
    color: ${Color.BLACK_1};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ol,
  li,
  ul {
    list-style: none;
    margin: 0;
  }
  textarea {
    resize: none;
    outline: none;
  }
  input,
  select,
  button {
    border: none;
    outline: none;
    box-sizing: border-box;
    background: none;
  }
  button {
    cursor: pointer;
  }
  p {
    margin: 0;
  }
`;
