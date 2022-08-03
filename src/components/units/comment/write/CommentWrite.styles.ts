import styled from "@emotion/styled";
import { Rate } from "antd";
import { Color } from "../../../../commons/styles/ColorStyles";

export const CommentsUI = styled.form`
  width: 100%;
  max-width: 768px;
  /* padding: 40px 0; */
  > div:first-of-type {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    button {
      color: ${Color.GRAY_1};
      font-size: 0.7rem;
    }
  }
`;

export const User = styled.div`
  input {
    margin-right: 10px;
  }
`;

export const Rating = styled(Rate)`
  width: 150px;
`;
