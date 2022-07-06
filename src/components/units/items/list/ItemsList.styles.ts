import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* margin-top: 50px; */
  margin-bottom: 50px;
  align-items: center;
`;

export const ItemListWrapper = styled.div`
  width: 80%;
  border-top: 3px solid #dfdfdf;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 70px;
  text-align: center;
  font-size: 16px;
  border-bottom: 1px solid #dfdfdf;
`;

export const HeaderNumber = styled.div`
  width: 5%;
  font-weight: 700;
`;
export const HeaderName = styled.div`
  width: 20%;
  font-weight: 700;
`;
export const HeaderRemarks = styled.div`
  width: 20%;
  font-weight: 700;
`;
export const HeaderPrice = styled.div`
  width: 20%;
  font-weight: 700;
`;
export const HeaderDate = styled.div`
  width: 20%;
  font-weight: 700;
`;

export const HeaderImage = styled.div`
  width: 10%;
  font-weight: 700;
`;

export const BoardNumber = styled.div`
  width: 5%;
`;
export const BoardName = styled.div`
  width: 20%;
  cursor: pointer;
  :hover {
    color: #dfdfdf;
    text-decoration: underline;
  }
`;
export const BoardRemarks = styled.div`
  width: 20%;
  padding-left: 20px;
  padding-right: 20px;
`;

export const BoardPrice = styled.div`
  width: 20%;
`;
export const BoardDate = styled.div`
  width: 20%;
`;

export const BoardImage = styled.img`
  width: 10%;
  overflow: hidden;
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

export const Button = styled.button`
  font-size: 14px;
`;

export const Pagination = styled.div``;

export const SearchInput = styled.input``;

interface IProps {
  isMatched: boolean;
}
export const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

export const RecentItemsWrapper = styled.div`
  position: fixed;
  right: 85px;
  bottom: 27px;
  height: 50px;
  z-index: 900;
`;

export const RecentItems = styled.div`
  display: inline-block;
  position: relative;
  right: 13px;
  height: 50px;
  padding: 0 20px 0 20px;
  border-radius: 25px;
  border: 1px solid #555;
  background-color: #fff;
  box-shadow: 0 5px 14px 0 rgb(0 0 0 / 10%);
  font-size: 14px;
  line-height: 48px;
  letter-spacing: -0.3px;
  color: #333;
  -webkit-transition: right 0.4s;
  transition: right 0.4s;
  z-index: 10;
`;

export const RecentImageWrapper = styled.div`
  display: inline-block;
  position: relative;
  > img:first-child {
    margin-left: 0;
  }
`;

export const RecentImage = styled.img`
  display: inline-block;
  position: relative;
  width: 32px;
  height: 32px;
  margin-left: -20px;
  border-radius: 50%;
  border: 4px solid #fff;
  box-sizing: content-box;
  vertical-align: middle;
  background-color: #e5e5e5;
  overflow: hidden;
`;
