import styled from "@emotion/styled";
import { Color } from "../../../../commons/styles/ColorStyles";
import { FontFamily, FontSize } from "../../../../commons/styles/FontStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 0;
  > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      width: 250px;
      height: 40px;
      border: 1px solid ${Color.GRAY_2};
      border-radius: 10px;
      line-height: 40px;
      padding: 0px 15px;
      :focus {
        border: 1px solid ${Color.GREEN_POINT};
      }
      ::placeholder {
        color: ${Color.GRAY_2};
      }
    }
  }
  > div:nth-of-type(3) {
    margin: 30px 0;
  }
`;

export const Title = styled.div`
  font-size: ${FontSize.LARGE_T};
  font-family: Georgia, "Times New Roman", Times, serif;
`;

export const BoardListWrap = styled.div`
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

interface IProps {
  isMatched: boolean;
}
export const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? `${Color.ORANGE_POINT}` : "")};
`;
