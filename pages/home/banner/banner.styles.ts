import styled from "@emotion/styled";
export const Wrapper = styled.div`
  width: 60%;
  height: 100%;
  object-fit: cover;
  /* background-color: coral; */
`;
// export const BannerWrapper = styled.div`
//   width: 100%;
//   height: auto;
//   background-color: blue;
// `;

export const BannerImage = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* background-color: blueviolet; */
  & img {
    width: 100%;
    height: 100%;
  }
`;

// export const BannerImage = styled.div`
//   width: 100%;
//   height: 100%;
//   >div{
//     width: 100%;
//     height: 100%;
//   }
// `;
// div안의 div안까지 속성 부여
