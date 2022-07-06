// import styled from "@emotion/styled";
// import dynamic from "next/dynamic";
// export const Wrapper = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: auto;
//   height: 800px;
// `;

// export const Name = styled.input``;

// export const Remarks = styled.input``;

// export const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// export const Contents = styled(ReactQuill)`
//   height: 200px;
//   margin-bottom: 50px;
// `;

// export const Price = styled.input``;

// export const Tag = styled.input``;

// interface IMyButton {
//   isValid: boolean;
// }

// export const Button = styled.button`
//   background-color: ${(props: IMyButton) =>
//     props.isValid ? "yellow" : "none"};
// `;

// export const Images = styled.div``;

// export const UploadButton = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: gray;
//   display: flex;
// `;

// export const HiddenButton = styled.input``;

// export const Image = styled.img`
//   width: 50px;
//   height: 50px;
//   background-color: wheat;
// `;

import styled from "@emotion/styled";
import dynamic from "next/dynamic";

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

export const Page = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  margin-bottom: 100px;
`;
export const MainTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  line-height: 53px;
  text-align: center;
`;

export const FormWrapper = styled.form`
  width: 100%;
`;
export const InputWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 40px;
`;

export const Input = styled.input`
  height: 52px;
  width: 80%;
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

export const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
export const Contents = styled(ReactQuill)`
  height: 200px;
  margin-bottom: 50px;
`;

interface IMyButton {
  isValid: boolean;
}

export const Button = styled.button`
  background-color: ${(props: IMyButton) =>
    props.isValid ? "yellow" : "none"};
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
`;

export const Images = styled.div``;

export const UploadButton = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
  display: flex;
`;

export const HiddenButton = styled.input``;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  background-color: wheat;
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

export const AddressSearch = styled.button`
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
