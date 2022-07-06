import { getMyDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardDetail.styles";
import Image from "next/image";
import React from "react";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import ReactPlayer from "react-player";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  const router = useRouter();
  return (
    <>
      <S.BoardUI>
        <S.BoardWrapper>
          <S.BoardContents>
            <S.TopWrapper>
              <S.ProfilePicture>
                <Image
                  src="/img/profile.svg"
                  alt="Profile"
                  width={47}
                  height={47}
                ></Image>
              </S.ProfilePicture>
              <S.Profile>
                <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
                <S.UpLoadDate>
                  {getMyDate(props.data?.fetchBoard?.createdAt)}
                </S.UpLoadDate>
              </S.Profile>
              <S.Info>
                <S.Uri>
                  <Image
                    src="/img/uri.svg"
                    alt="Uri"
                    width={27}
                    height={13}
                  ></Image>
                </S.Uri>
                <S.Map>
                  <Image
                    src="/img/map.svg"
                    alt="Map"
                    width={20}
                    height={27}
                  ></Image>
                </S.Map>
              </S.Info>
            </S.TopWrapper>
            <S.MiddleWrapper>
              <S.Title>{props.data?.fetchBoard?.title}</S.Title>
              <S.PictureWrapper>
                {props.data?.fetchBoard.images
                  ?.filter((el) => el)
                  .map((el) => (
                    <S.Picture
                      key={el}
                      src={`https://storage.googleapis.com/${el}`}
                    ></S.Picture>
                  ))}
              </S.PictureWrapper>
              <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
              <S.Video>
                {props.data?.fetchBoard.youtubeUrl && (
                  <ReactPlayer
                    url={props.data?.fetchBoard?.youtubeUrl}
                    width={800}
                    height={600}
                    muted={true}
                    playing={true}
                    controls={true}
                  ></ReactPlayer>
                )}
              </S.Video>
              <S.Count>
                <LikeOutlined onClick={props.onClickLike} />
                <S.Like>{props.data?.fetchBoard?.likeCount}</S.Like>
                <DislikeOutlined onClick={props.onClickDislike} />
                <S.Dislike>{props.data?.fetchBoard?.dislikeCount}</S.Dislike>
              </S.Count>
            </S.MiddleWrapper>
          </S.BoardContents>
          <S.BoardButton>
            <S.ButtonWrapper>
              <S.PageButton
                onClick={() => {
                  router.push(`/boards`);
                }}
              >
                목록으로
              </S.PageButton>
              <S.PageButton
                onClick={() => {
                  router.push(`/boards/${router.query.boardId}/edit`);
                }}
              >
                수정하기
              </S.PageButton>
              <S.PageButton onClick={props.onClickDelete}>
                삭제하기
              </S.PageButton>
            </S.ButtonWrapper>
          </S.BoardButton>
        </S.BoardWrapper>
      </S.BoardUI>
    </>
  );
}
