import { LeftSquareOutlined, RightSquareOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  margin-bottom: 150px;
  /* background-color: wheat; */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-around;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PrevButton = styled(LeftSquareOutlined)`
  font-size: 20px;
`;

export const NextButton = styled(RightSquareOutlined)`
  font-size: 20px;
`;

export const PageNumber = styled.div`
  font-size: 16px;
  width: 30px;
  text-align: center;
  cursor: pointer;
  /* :hover {
    color: #dfdfdf;
  } */
`;
