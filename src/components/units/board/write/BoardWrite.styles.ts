import styled from "@emotion/styled";
import { Button } from "antd";

export const Page = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  margin-bottom: 100px;
`;

export const MainPage = styled.div`
  width: 100%;
  border: none;
  box-shadow: 0px 0px 10px gray;
  padding-top: 60px;
  padding-bottom: 100px;
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  flex-direction: column;
`;

export const MainTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  line-height: 53px;
  text-align: center;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 40px;
`;

export const MainWrapper = styled.div`
  width: 100%;
`;

export const Writer = styled.input`
  height: 52px;
  width: 95%;
  padding-left: 16px;
  margin-top: 10px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin-right: 10%;
`;

export const Password = styled.input`
  height: 52px;
  width: 100%;
  padding-left: 16px;
  margin-top: 10px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;

export const Head = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 40px;
`;

export const Title = styled.input`
  height: 52px;
  width: 100%;
  padding-left: 16px;
  margin-top: 12px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;

export const Contents = styled.input`
  height: 480px;
  width: 100%;
  margin-top: 12px;
  padding-left: 16px;
  padding-top: 14px;
  padding-right: 16px;
  padding-bottom: 14px;
  border: 1px solid #bdbdbd;
  resize: none;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`;

export const AddressNumber = styled.input`
  height: 52px;
  width: 77px;
  border: 1px solid #bdbdbd;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const AddressSearch = styled(Button)`
  height: 52px;
  width: 124px;
  color: white;
  background-color: black;
  margin-left: 16px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`;

export const MainAddress = styled.input`
  height: 52px;
  width: 100%;
  margin-top: 12px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
`;

export const DetailAddress = styled.input`
  height: 52px;
  width: 100%;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
  margin-top: 12px;
`;

export const Link = styled.input`
  height: 52px;
  width: 100%;
  margin-top: 12px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
`;

export const ImageWrapper = styled.div`
  width: 310px;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  border: none;
  margin-right: 24px;
  margin-top: 12px;
  font-size: 15px;
  color: #4f4f4f;
  cursor: pointer;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Registerbtn = styled.button`
  height: 52px;
  width: 179px;
  padding: 14px, 60px, 14px, 60px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  border: none;
  margin-top: 80px;
  margin-right: 20px;
  cursor: pointer;
  /* 또는 presenter에서 ggg를 없애서 백그라운드컬러 : yellow도 가능*/
  /* 와진짜모르겟다 수업 다시 보기 */
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 16px;
`;
