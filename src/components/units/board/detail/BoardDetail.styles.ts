import styled from "@emotion/styled";

export const BoardUI = styled.div`
  max-width: 1024px;

  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

export const BoardWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

export const BoardContents = styled.div`
  width: 800px;
  border: 1px solid black;
  margin-top: 0px;
  padding-top: 60px;
  padding-bottom: 100px;
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  flex-direction: column;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const TopWrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;
  /* background-color: #F2F2F2; */
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #bdbdbd;
`;

export const ProfilePicture = styled.div`
  width: 50px;
  margin-right: 16px;
`;

export const Profile = styled.div`
  width: 100%;
  margin-right: 220px;
`;

export const Writer = styled.div`
  font-size: 24px;
  font-weight: 500;
  text-align: left;
`;

export const UpLoadDate = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #828282;
`;

export const Info = styled.div`
  width: 64px;
  display: flex;
  flex-direction: row;
`;

export const Uri = styled.div`
  width: 32px;
  height: 32px;
`;

export const Map = styled.div`
  width: 32px;
  height: 32px;
`;

export const MiddleWrapper = styled.div`
  width: 100%;
  padding-top: 80px;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 36px;
  font-weight: 700;
  line-height: 53px;
  text-align: left;
  resize: none;
`;

export const PictureWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

export const Picture = styled.img`
  width: 100%;
  height: auto;
  padding-bottom: 10px;
`;

export const Contents = styled.div`
  width: 100%;
  margin-top: 40px;
  background-color: #f2f2f2;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  white-space: pre-wrap;
  resize: none;
  word-wrap: break-word;
  /* white-space는 코드리뷰때 배운거 */
`;

export const Video = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export const Count = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Like = styled.div`
  width: 40px;
  height: 51px;
  background-color: yellow;
`;

export const Dislike = styled.div`
  width: 40px;
  height: 51px;
  background-color: yellowgreen;
`;

export const BoardButton = styled.div`
  width: 100%;
  height: 220px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-bottom: 1px solid #bdbdbd;
`;

export const ButtonWrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PageButton = styled.button`
  width: 180px;
  height: 45px;
  background-color: white;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
`;
