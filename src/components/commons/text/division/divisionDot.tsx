import styled from "@emotion/styled";
export default function DivisionDot() {
  return <I />;
}

const I = styled.i`
  margin: 0px 4px;
  ::before {
    content: "·";
  }
`;
