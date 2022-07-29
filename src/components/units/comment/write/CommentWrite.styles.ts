import styled from "@emotion/styled";
import { Rate } from "antd";

export const CommentsUI = styled.div`
  width: 100%;
  max-width: 768px;
  /* padding: 40px 0; */
  > div:first-of-type {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
`;

export const User = styled.div`
  input:first-of-type {
    margin-right: 10px;
  }
`;

export const Rating = styled(Rate)`
  width: 150px;
`;
