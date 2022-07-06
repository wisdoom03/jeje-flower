import * as I from "./ItemsWrite.styles";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useRef, useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import {
  CREATE_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "./ItemsWrite.queries";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import DaumPostcode from "react-daum-postcode";
import { v4 as uuidv4 } from "uuid";

const schema = yup.object().shape({
  name: yup.string().required("필수 입력 사항입니다"),
  remarks: yup.string().required("필수 입력 사항입니다"),
  contents: yup.string().required("필수 입력 사항입니다"),
  price: yup.number().required("필수 입력 사항입니다"),
});

interface FormValues {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
}

export default function ItemsWritePage(props) {
  const { register, handleSubmit, setValue, trigger, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const fileRef = useRef();

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const onClickSubmit = async (data: FormValues) => {
    console.log(data);
    // try {
    //   const result = await createUseditem({
    //     variables: {
    //       createUseditemInput: {
    //         name: data.name || "",
    //         remarks: data.remarks || "",
    //         contents: data.contents || "",
    //         price: Number(data.price),
    //         //  tag: data.tag,
    //         images: fileUrls,
    //         useditemAddress: {
    //           zipcode: zipcode,
    //           address: address,
    //           addressDetail: addressDetail,
    //         },
    //       },
    //     },
    //   });

    //   console.log(result?.data?.createUseditem);
    //   router.push(`/items/${result.data?.createUseditem?._id}`);
    // } catch (error) {
    //   Modal.error({ content: error.message });
    // }
  };
  const onChangeFileUrls = (url: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = url;
    setFileUrls(newFileUrls);
  };

  const onChangeFile = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    try {
      const result = await uploadFile({
        variables: { file: file },
      });
      // console.log(result?.data.uploadFile.url);
      onChangeFileUrls(result?.data?.uploadFile.url, 0); // 일단 0으로 넣어둔다
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  // console.log(props.data?.fetchUseditem);

  const onClickEditSubmit = async (data: FormValues) => {
    try {
      await updateUseditem({
        variables: {
          useditemId: String(router.query.itemId),
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            //  tag: data.tag,
            images: fileUrls,
            useditemAddress: {
              zipcode: zipcode,
              address: address,
              addressDetail: addressDetail,
            },
          },
        },
      });
      router.push(`/items/${String(router.query.itemId)}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const handleChange = (value) => {
    // console.log(value);
    setValue("contents", value === "<p><br><p>" ? "" : value);

    trigger("contents");
  };

  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  const onClickOk = () => {
    setIsOpen(false);
  };

  const onClickCancel = () => {
    setIsOpen(false);
  };

  const PostcodeComplete = (data) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    // console.log(data);
    setIsOpen(false);
  };

  const onChangeDetailAddress = (event) => {
    setAddressDetail(event?.target.value);
  };

  return (
    <I.Page>
      {isOpen && (
        <Modal
          title="우편번호 검색!🌷"
          visible={true}
          onOk={onClickOk}
          onCancel={onClickCancel}
        >
          <DaumPostcode onComplete={PostcodeComplete} />
        </Modal>
      )}
      <I.MainPage>
        <I.MainTitle>상품 {props.isEdit ? "수정" : "등록"}</I.MainTitle>
        <I.FormWrapper
          onSubmit={
            props.isEdit
              ? handleSubmit(onClickEditSubmit)
              : handleSubmit(onClickSubmit)
          }
        >
          <I.InputWrapper>
            <I.InputLabel>상품 명</I.InputLabel>
            <I.Input
              type="text"
              {...register("name")}
              defaultValue={props.data?.fetchUseditem.name}
            />
            <div>{formState.errors.name?.message}</div>
            <I.InputWrapper>
              <I.InputLabel>가격</I.InputLabel>
              <I.Input
                type="text"
                {...register("price")}
                defaultValue={props.data?.fetchUseditem.price}
              />
              <div>{formState.errors.price?.message}</div>
            </I.InputWrapper>
            <div>{formState.errors.name?.message}</div>
          </I.InputWrapper>
          <I.InputWrapper>
            <I.InputLabel>한 줄 평</I.InputLabel>
            <I.Input
              type="text"
              {...register("remarks")}
              defaultValue={props.data?.fetchUseditem.remarks}
            />
            <div>{formState.errors.remarks?.message}</div>
          </I.InputWrapper>
          <I.InputWrapper>
            <I.InputLabel>제품 설명</I.InputLabel>
            <I.Contents
              onChange={handleChange}
              defaultValue={props.data?.fetchUseditem.contents}
            />
            <div>{formState.errors.contents?.message}</div>
          </I.InputWrapper>
          {/* <I.InputWrapper>
            <I.InputLabel>태그</I.InputLabel>
            <I.Input
              type="text"
              {...register("tag")}
              defaultValue={props.data?.fetchUseditem.tags}
            />
            <div>{formState.errors.tag?.message}</div>
          </I.InputWrapper> */}
          <I.InputWrapper>
            <I.InputLabel>사진</I.InputLabel>
            <I.Images>
              {fileUrls.map((url) => (
                <>
                  {url ? (
                    <I.Image
                      key={uuidv4()}
                      onClick={onClickUpload}
                      src={`https://storage.googleapis.com/${url}`}
                    />
                  ) : (
                    <I.UploadButton onClick={onClickUpload}>
                      <>+</>
                      <>Upload</>
                    </I.UploadButton>
                  )}
                </>
              ))}
              <I.HiddenButton
                ref={fileRef}
                type="file"
                onChange={onChangeFile}
              ></I.HiddenButton>
            </I.Images>
          </I.InputWrapper>
        </I.FormWrapper>
        <I.InputWrapper>
          <I.InputLabel>판매 주소</I.InputLabel>
          <I.AddressWrapper>
            <I.AddressNumber
              placeholder="07520"
              readOnly
              value={
                zipcode || props.data?.fetchUseditem?.useditemAddress?.zipcode
              }
            />
            <I.AddressSearch type="button" onClick={onClickAddressSearch}>
              우편번호 검색
            </I.AddressSearch>
          </I.AddressWrapper>
          <I.MainAddress
            readOnly
            value={
              address || props.data?.fetchUseditem?.useditemAddress?.address
            }
          ></I.MainAddress>
          <I.DetailAddress
            type="text"
            onChange={onChangeDetailAddress}
            defaultValue={
              addressDetail ||
              props.data?.fetchUseditem?.useditemAddress?.addressDetail
            }
          ></I.DetailAddress>
          <div id="map" style={{ width: 500, height: 400 }}></div>
          {/* <input type="text" onChange={onChangeInput}></input> */}
        </I.InputWrapper>
        <I.Button
          isValid={formState.isValid}
          onClick={
            props.isEdit
              ? handleSubmit(onClickEditSubmit)
              : handleSubmit(onClickSubmit)
          }
        >
          {props.isEdit ? `수정하기` : `등록하기`}
        </I.Button>
      </I.MainPage>
    </I.Page>
  );
}
