import styled from "@emotion/styled";
import { Color } from "../../../commons/styles/ColorStyles";
import { FontFamily } from "../../../commons/styles/FontStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const LoginWrapper = styled.div``;

export const InputWrapper = styled.div`
  display: block;
  padding: 8px 12px;
  border: 1px solid ${Color.GRAY_3};
  border-radius: 4px;
  margin-bottom: 8px;
  :focus-within {
    border: 1px solid ${Color.GREEN_MAIN};
  }
`;

export const InputLabel = styled.div`
  color: ${Color.GRAY_2};
`;

export const InputField = styled.input`
  border: none;
  ::placeholder {
    color: ${Color.GRAY_2};
  }
`;

export const LoginButton = styled.button`
  height: 56px;
  font-size: 16px;
  padding: 0 16px;
  background-color: ${Color.GREEN_MAIN};
  width: 100%;
  border-radius: 4px;
  color: ${Color.WHITE_1};
`;

export const SubWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Join = styled.div`
  display: flex;
  p {
    color: ${Color.ORANGE_POINT};
    font-family: ${FontFamily.BOLD};
    margin-left: 10px;
    cursor: pointer;
  }
`;
