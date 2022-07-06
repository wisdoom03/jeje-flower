export default function checkValidationImage(file?: File) {
  if (!file?.size) {
    alert("파일이 선택되지 않았습니다"); // early exit
    return false;
  }
  if (file?.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다 (제한: 5MB)"); // early exit
    return false;
  }
  if (
    !file?.type.includes("jpeg") &&
    !file?.type.includes("png") &&
    !file?.type.includes("jpg")
  ) {
    alert("jpeg, jpg, png 파일만 업로드 가능합니다"); // early exit
    return false;
  }
  return file;
}
