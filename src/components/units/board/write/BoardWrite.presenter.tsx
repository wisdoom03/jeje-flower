import * as S from "./BoardWrite.styles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  const router = useRouter();
  const fetchBoard = props.data?.fetchBoard;

  return (
    <S.Page>
      <S.MainPage>
        <S.MainTitle>게시물 {props.isEdit ? "수정" : "등록"}</S.MainTitle>
        <S.InfoWrapper>
          <S.MainWrapper>
            <S.Head>작성자</S.Head>
            <S.Writer
              id="writer"
              type="text"
              onChange={props.onChangeInputs}
              placeholder="이름을 적어주세요"
              defaultValue={fetchBoard ? String(fetchBoard.writer) : ""}
              readOnly={props.isEdit ? true : false}
            ></S.Writer>
          </S.MainWrapper>
          <S.MainWrapper>
            <S.Head>비밀번호</S.Head>
            <S.Password
              id="password"
              type="password"
              onChange={props.onChangeInputs}
              placeholder="비밀번호를 작성해주세요."
            />
          </S.MainWrapper>
        </S.InfoWrapper>
        <S.MainWrapper>
          <S.Head>제목</S.Head>
          <S.Title
            id="title"
            type="text"
            onChange={props.onChangeInputs}
            placeholder="제목을 작성해주세요."
            defaultValue={fetchBoard ? fetchBoard.title : ""}
          ></S.Title>
        </S.MainWrapper>
        <S.MainWrapper>
          <S.Head>내용</S.Head>
          <S.Contents
            id="contents"
            type="text"
            onChange={props.onChangeInputs}
            placeholder="내용을 작성해주세요."
            defaultValue={fetchBoard ? fetchBoard.contents : ""}
          ></S.Contents>
        </S.MainWrapper>
        <S.MainWrapper>
          <S.Head>주소</S.Head>
          <S.AddressWrapper>
            <S.AddressNumber
              placeholder="07520"
              readOnly
              value={
                props.zipcode ||
                String(props.data?.fetchBoard.boardAddress?.zipcode)
              }
            ></S.AddressNumber>
            <S.AddressSearch type="default" onClick={props.toggleAddressModal}>
              우편번호 검색
            </S.AddressSearch>
            {props.isModalVisible && (
              <Modal
                title="우편번호 검색!🌷"
                visible={true}
                onOk={props.toggleAddressModal}
                onCancel={props.toggleAddressModal}
              >
                <DaumPostcode onComplete={props.handleComplete} />
              </Modal>
            )}
          </S.AddressWrapper>
          <S.MainAddress
            readOnly
            value={String(
              props.address || props.data?.fetchBoard.boardAddress?.address
            )}
          ></S.MainAddress>
          <S.DetailAddress
            type="text"
            onChange={props.onChangeAddressDetail}
            value={String(
              props.addressDetail ||
                props.data?.fetchBoard.boardAddress?.addressDetail
            )}
          ></S.DetailAddress>
        </S.MainWrapper>
        <S.MainWrapper>
          <S.Head>유튜브</S.Head>
          <S.Link
            id="youtubeUrl"
            onChange={props.onChangeInputs}
            placeholder="링크를 복사해주세요."
            defaultValue={fetchBoard ? String(fetchBoard.youtubeUrl) : ""}
          ></S.Link>
        </S.MainWrapper>
        <S.ImageWrapper>
          <S.Head>사진첨부</S.Head>
          {props.fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.ImageWrapper>

        <S.BtnWrapper>
          <S.Registerbtn
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          >
            {props.isEdit ? "수정" : "등록"}
          </S.Registerbtn>
          <S.Registerbtn
            onClick={() => {
              router.push("/boards");
            }}
          >
            취소
          </S.Registerbtn>
        </S.BtnWrapper>
      </S.MainPage>
    </S.Page>
  );
}
