import styled from "@emotion/styled";
import { Rate } from "antd";
import { ScissorOutlined, DeleteOutlined } from "@ant-design/icons";
import { FontFamily, FontSize } from "../../../../commons/styles/FontStyles";
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
  /* width: 50vw;
  height: 600px; */
  /* overflow: auto; */
  /* padding-right: 8px; */
  /* background-color: firebrick; */
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

export const Writer = styled.div`
  width: 110px;
  font-weight: 600;
  color: #e1c157;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
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

export const Contents = styled.div`
  width: 85%;
  height: 60px;
  padding-top: 1%;
  padding-bottom: 1%;
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

export const Edit = styled.div`
  padding: 10px 0;
`;

export const Delete = styled(DeleteOutlined)``;

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
