import styled from "@emotion/styled";

import { Rate } from "antd";

export const CommentsUI = styled.div`
  width: 100%;
  /* background-color: skyblue; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Comments = styled.div`
  width: 800px;
  height: auto;
  border-radius: 8px;
  border: 2px solid #e1c157;
  padding: 10px;
`;

export const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const WrapperLeft = styled.div`
  width: 80%;
  /* background-color: aliceblue; */
`;

export const LeftHead = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Rating = styled(Rate)`
  width: 150px;
  /* background-color: springgreen; */
`;

export const Writer = styled.input`
  width: 110px;
  font-weight: 600;
  color: #e1c157;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #e1c157;
  /* background-color: teal; */
`;
export const Password = styled.input`
  width: 30%;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #e1c157;
  /* background-color: turquoise; */
`;

export const Contents = styled.input`
  width: 100%;
  height: 60px;
  padding-top: 1%;
  padding-bottom: 1%;
  border: none;
  /* background-color: gold; */
`;

export const WrapperRight = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  /* background-color: skyblue; */
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  /* background-color: teal; */
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  color: #c8c7c3;
  font-size: 12px;
  background-color: #254431;
  border: none;
  border-radius: 8px;
  :hover {
    cursor: pointer;
  }
`;

export const CommentPassword = styled.input``;

export const CommentLimit = styled.div``;
