import { calcTimeDiff } from "../../../../commons/libraries/utils";
import * as S from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";
import Line01 from "../../../commons/line/line01";
import { Color } from "../../../../commons/styles/ColorStyles";
import HighLight01 from "../../../commons/text/highlight/highlight01";
import Button01 from "../../../commons/button/button01/Button01";
import HeartIcon from "../../../../../public/svg/heart-icon.svg";
import HamburgerIcon from "../../../../../public/svg/hamburger-icon.svg";
import UpArrowIcon from "../../../../../public/svg/upArrow-icon.svg";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  const router = useRouter();
  return (
    <S.Wrap>
      <S.Image>
        {props.data?.fetchBoard.images
          ?.filter((el) => el)
          .map((el) => (
            <img key={el} src={`https://storage.googleapis.com/${el}`} />
          ))}
      </S.Image>
      <main>
        <S.BoardUI>
          <S.BoardHead>
            <p>온라인 집들이</p>
            <h1>{props.data?.fetchBoard?.title}</h1>
            <S.Profile>
              <div className="user">
                <img src="/img/profile.svg" alt="Profile" />
                <p>{props.data?.fetchBoard?.writer}</p>
                <HighLight01
                  content={calcTimeDiff(props.data?.fetchBoard?.createdAt)}
                />
              </div>
              <div className="userButton">
                <button
                  onClick={() => {
                    router.push(`/boards/${router.query.boardId}/edit`);
                  }}
                >
                  수정
                </button>
                <button onClick={props.onClickDelete}>삭제</button>
              </div>
            </S.Profile>
          </S.BoardHead>
          <Line01 color={Color.GRAY_3} height={1.5} />
          <S.Contents>
            <p>{props.data?.fetchBoard?.contents}</p>
          </S.Contents>
          <S.ImageWrap>
            <img
              src={
                props.data?.fetchBoard.images
                  ? `https://storage.googleapis.com/${props.data?.fetchBoard.images[0]}`
                  : ""
              }
            />
          </S.ImageWrap>
          <S.Video>
            {props.data?.fetchBoard.youtubeUrl && (
              <ReactPlayer
                url={props.data?.fetchBoard?.youtubeUrl}
                width={600}
                height={400}
                muted={true}
                playing={true}
                controls={true}
              ></ReactPlayer>
            )}
          </S.Video>
          <S.Count>
            <div>
              <S.Like onClick={props.onClickLike} />
              <span>{props.data?.fetchBoard?.likeCount}</span>
            </div>
            <div>
              <S.Dislike onClick={props.onClickDislike} />
              <span>{props.data?.fetchBoard?.dislikeCount}</span>
            </div>
          </S.Count>
        </S.BoardUI>
        <S.SideBar>
          <div className="sidebar">
            <div className="buttons">
              <Button01 onClick={props.onClickLike}>
                <HeartIcon />
              </Button01>
              <Button01>
                <UpArrowIcon />
              </Button01>
              <Button01
                onClick={() => {
                  router.push(`/boards`);
                }}
              >
                <HamburgerIcon />
              </Button01>
            </div>
          </div>
        </S.SideBar>
        <Line01 color={Color.GRAY_3} height={1.5} />
      </main>
    </S.Wrap>
  );
}
