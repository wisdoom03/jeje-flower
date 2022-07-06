import { ChangeEvent, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import {
  IBoardWriteProps,
  IDaumPost,
  IMyUpdateBoardInput,
} from "./BoardWrite.types";
import {
  IMutationCreateBoardArgs,
  IMutation,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { Address } from "react-daum-postcode";
import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
    youtubeUrl: "",
    // fileurls: "",
  });

  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const onClickSubmit = async () => {
    if (
      !inputs.title ||
      !inputs.password ||
      !inputs.title ||
      !inputs.contents
    ) {
      Modal.warning({ title: "필수 항목이 작성되지 않았습니다" });
      return;
    }
    // console.log(inputs);
    if (inputs.writer && inputs.password && inputs.title && inputs.contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              ...inputs,
              images: fileUrls,
              boardAddress: {
                zipcode: zipcode,
                address: address,
                addressDetail: addressDetail,
              },
            },
          },
        });
        Modal.info({ title: "감사합니다. 게시물이 등록되었습니다 🌷" });
        router.push(`/boards/${result.data?.createBoard._id}`);
      } catch {
        console.log("에러입니다");
        Modal.warning({
          title: "Error : 죄송합니다. 잠시 후에 시도해주세요 😿",
        });
      }
    }
  };

  const onClickUpdate = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;
    if (
      !inputs.title &&
      !inputs.contents &&
      !inputs.youtubeUrl &&
      !zipcode &&
      !address &&
      !addressDetail
    ) {
      Modal.warning({ title: "수정된 내용이 없습니다" });
      return;
    }
    if (!inputs.password) {
      Modal.warning({ title: "비밀번호를 입력해주세요" });
      return;
    }

    const updateBoardInput: IMyUpdateBoardInput = {};
    if (inputs.title) updateBoardInput.title = inputs.title;
    if (inputs.contents) updateBoardInput.contents = inputs.contents;
    if (inputs.youtubeUrl) updateBoardInput.youtubeUrl = inputs.youtubeUrl;
    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    if (isChangedFiles) updateBoardInput.images = fileUrls;
    console.log(updateBoardInput);
    try {
      updateBoard({
        variables: {
          password: inputs.password,
          boardId: String(router.query.boardId),
          updateBoardInput,
        },
      });
      Modal.info({ content: "감사합니다. 게시물이 수정되었습니다 🌷" });
      // console.log(myUpdateBoardInput.boardAddress?.addressDetail);
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event?.target.value);
  }

  const toggleAddressModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const handleComplete = (address: Address) => {
    setAddress(address.address);
    setZipcode(address.zonecode);
    console.log(address);
    toggleAddressModal();
  };

  return (
    <BoardWriteUI
      onChangeAddressDetail={onChangeAddressDetail}
      address={address}
      zipcode={zipcode}
      addressDetail={addressDetail}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      handleComplete={handleComplete}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
      onChangeInputs={onChangeInputs}
      toggleAddressModal={toggleAddressModal}
    />
  );
}
