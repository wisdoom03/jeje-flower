import styled from "@emotion/styled";
import { Rate } from "antd";
import { FontFamily } from "../../../../commons/styles/FontStyles";
import { Color } from "../../../../commons/styles/ColorStyles";

export const CommentsUI = styled.div`
  width: 100%;
  max-width: 768px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Comments = styled.div`
  width: 100%;
`;

export const CommentItem = styled.div`
  width: 100%;
  margin-top: 30px;
`;
export const Wrap = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const WrapHeader = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0 10px;
    font-family: ${FontFamily.SEMIBOLD};
  }
`;
export const WrapBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  > p {
    width: calc(100% - 150px);
  }
  > div {
    display: flex;
    color: ${Color.GRAY_1};
    font-size: 0.7rem;
  }
`;

export const Rating = styled(Rate)`
  width: 150px;
  /* background-color: springgreen; */
`;

export const Edit = styled.div`
  padding: 10px 0;
`;
