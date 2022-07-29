import MemberJoin from "../../../src/components/units/member/MemberJoin";
import styled from "@emotion/styled";
import UseMoveToPage from "../../../src/components/commons/hooks/useMoveToPage";

export default function JoinPage() {
  const { moveToPage } = UseMoveToPage();
  return (
    <Wrap>
      <Image>
        <img src="/img/member/member.jpg" />
      </Image>
      <section>
        <Home onClick={moveToPage("/home")}>
          <img src="/img/layout/Logo.png" />
        </Home>
        <MemberJoin />
      </section>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  section {
    width: 100%;
    max-width: 520px;
    padding: 80px 40px;
  }
`;

const Image = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Home = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  & img {
    width: 200px;
    height: auto;
  }
  cursor: pointer;
`;
