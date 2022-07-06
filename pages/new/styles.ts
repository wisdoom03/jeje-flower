import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const BoardWrapper = styled.div`
  height: 100%;
  width: 800px;
  margin-bottom: 30px;
  /* background-color: skyblue; */
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Writer = styled.input`
  width: 30%;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #e1c157;
`;

export const Title = styled.input`
  width: 30%;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #e1c157;
`;

export const Contents = styled.input`
  width: 100%;
  height: 60px;
  padding-top: 1%;
  padding-bottom: 1%;
  border-radius: 8px;
  border: 2px solid #e1c157;
`;

export const ButtonWrapper = styled.div``;

export const SubmitButton = styled.button`
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

export const FetchWrapper = styled.div`
  height: 100%;
  width: 800px;
  margin-bottom: 30px;
`;

export const FetchWriter = styled.div`
  width: 30%;
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #e1c157;
`;

export const FetchTitle = styled.div`
  width: 30%;
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #e1c157;
`;

export const FetchContents = styled.div`
  width: 100%;
  height: 60px;
  padding-top: 1%;
  padding-bottom: 1%;
  border-radius: 8px;
  border: 2px solid #e1c157;
`;
