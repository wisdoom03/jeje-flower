import { calcTimeDiff } from "../../../../commons/libraries/utils";
import * as S from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import ReactPlayer from "react-player";
import { useRouter } from "next/router";
import Line01 from "../../../commons/line/line01";
import { Color } from "../../../../commons/styles/ColorStyles";
import HighLight01 from "../../../commons/text/highlight/highlight01";
import SideBar01 from "../../../commons/layout/sidebar/Sidebar01";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  const router = useRouter();

  console.log(props.data?.fetchBoard.user?.picture);
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
            <p>자유게시판</p>
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
        <SideBar01 page="/boards" />
        <Line01 color={Color.GRAY_3} height={1.5} />
      </main>
    </S.Wrap>
  );
}
