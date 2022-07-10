import styled from "@emotion/styled";
import Slide01 from "../../src/components/commons/slide/slide01";

const Wrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  main {
    max-width: 1024px;
    width: 100%;
  }
`;

export default function HomePage() {
  return (
    <Wrap>
      <Slide01 />
      <main>메인자리</main>
    </Wrap>
  );
}
