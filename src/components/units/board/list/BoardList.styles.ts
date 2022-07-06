import styled from "@emotion/styled";
import { FontFamily } from "../../../../commons/styles/FontStyles";

export const Wrapper = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
  flex-direction: column;
  width: 100%;
  /* margin-top: 50px; */
  margin-bottom: 50px;
`;

export const BoardListWrapper = styled.div`
  width: 100%;
  border-top: 3px solid #dfdfdf;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  text-align: center;
  border-bottom: 1px solid #dfdfdf;
`;

export const HeaderNumber = styled.div`
  width: 10%;
  /* font-weight: 700; */
`;
export const HeaderWriter = styled.div`
  width: 15%;
`;
export const HeaderTitle = styled.div`
  width: 50%;
`;
export const HeaderDate = styled.div`
  width: 20%;
`;

export const BoardNumber = styled.div`
  width: 10%;
`;
export const BoardWriter = styled.div`
  width: 15%;
`;
export const BoardTitle = styled.div`
  width: 50%;
  text-align: start;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  :hover {
    color: #dfdfdf;
    text-decoration: underline;
  }
`;
export const BoardDate = styled.div`
  width: 20%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;

export const RegisterButton = styled.div`
  /* width: 100px; */
  /* height: 40px; */
  display: inline-block;
  width: auto;
  padding: 14px 60px;
  background-color: #254431;
  color: white;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  border-radius: 4px;
  margin-top: 20px;
  cursor: pointer;
`;

export const Pagination = styled.div``;

interface IProps {
  isMatched: boolean;
}
export const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

export const Title = styled.div`
  font-size: 35px;
  font-weight: 500;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #000000;
  text-align: left;

  margin-top: 100px;
`;
export const BoardSearchWrapper = styled.div``;
export const SearchInput = styled.input``;
