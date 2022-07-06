import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  background-color: black;
  color: #c8c7c3;
  padding: 40px 0px 60px 120px;
`;

// const LinkSection = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// const LinkButton = styled.div`
//   width: 200px;
//   margin-bottom: 50px;
//   background-color: red;
// `;
const Footer = styled.div``;

export default function LayoutFooter() {
  return (
    <Wrapper>
      {/* <LinkSection>
        <LinkButton>파트너문의</LinkButton>
        <LinkButton>이용약관</LinkButton>
        <LinkButton>개인정보처리방침</LinkButton>
      </LinkSection> */}
      <Footer>
        회사소개 ·비즈니스 ·맞춤형광고 ·검색등록 ·제휴문의 ·인재채용
      </Footer>
      <Footer>
        이용약관 ·운영정책 ·청소년보호정책 ·위치기반서비스이용약관
        ·개인정보처리방침 ·웹접근성안내 ·고객센터
      </Footer>
      <Footer>Copyright © Jeje Corp. All rights reserved.</Footer>
    </Wrapper>
  );
}
