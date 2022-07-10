import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Color } from "../../../../commons/styles/ColorStyles";
import { FontFamily, FontSize } from "../../../../commons/styles/FontStyles";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  main {
    /* display: flex;
    flex-direction: row; */
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 400px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BoardUI = styled.div`
  max-width: 768px;
  padding: 40px 0;
  margin: 0 auto;
`;

export const SideBar = styled.div`
  position: absolute;
  top: 400px;
  bottom: 0;
  right: 0;
  width: calc(50% - 384px);
  .sidebar {
    position: sticky;
    top: 130px;
    transition: top 0.1s ease 0s;
    width: 55px;
    margin: 0 auto;
    .buttons {
      padding: 70px 0;
      height: 500px;
      display: flex;
      flex-direction: column;
      grid-gap: 15px;
    }
  }
`;

export const BoardHead = styled.header`
  > p {
    font-family: ${FontFamily.LIGHT};
    font-size: ${FontSize.MEDIUM_C};
  }
  h1 {
    font-family: ${FontFamily.BOLD};
    font-size: 2rem;
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  div.user {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
    }
    p:nth-of-type(1) {
      font-size: ${FontSize.MEDIUM_C};
      color: ${Color.BLACK_1};
      margin-left: 5px;
      margin-right: 15px;
    }
  }
  div.userButton {
    button {
      width: 30px;
    }

    button:nth-of-type(1) {
      margin-right: 10px;
    }
  }
`;

export const Contents = styled.div`
  padding: 20px 0px;
  margin: 10px 0px;
  border-radius: 4px;
  line-height: 30px;
  > p {
    font-size: ${FontSize.MEDIUM_C};
  }
`;

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  > img {
    width: auto;
    max-height: calc(100vh - 80px);
    object-fit: cover;
  }
`;

export const Video = styled.div`
  display: flex;
  justify-content: center;
`;

export const Count = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  grid-gap: 15px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Like = styled(LikeOutlined)`
  font-size: 20px;
  line-height: 30px;
  svg {
    fill: ${Color.ORANGE_POINT};
  }
`;

export const Dislike = styled(DislikeOutlined)`
  font-size: 20px;
  line-height: 30px;
  svg {
    fill: ${Color.GRAY_2};
  }
`;
