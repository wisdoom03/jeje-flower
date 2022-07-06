import styled from "@emotion/styled";

const Wrap = styled.div`
  width: 100%;
  height: auto;
  background-color: aqua;
  main {
    width: 100%;
  }
`;

export default function HomePage() {
  return (
    <Wrap>
      <main>메인자리</main>
    </Wrap>
  );
}
