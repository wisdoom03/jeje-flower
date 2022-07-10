export const getMyDate = (myDate: string) => {
  const aaa = new Date(myDate);
  const yyyy = aaa.getFullYear();
  const mm = aaa.getMonth() + 1; // 0부터 시작하기때문에 1을 더해줘야한다
  const dd = aaa.getDate(); // 일
  // const day = aaa.getDay()  // 요일
  return `${yyyy}년 ${mm}월 ${dd}일`;
};

// dateUtils.ts
export const calcTimeDiff = (myDate: string | Date) => {
  const date = new Date(myDate);
  let dateString = "";
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor(diff / (1000 * 60 * 60));
  const diffMin = Math.floor(diff / (1000 * 60));
  const diffSec = Math.floor(diff / 1000);

  if (diffSec < 60) dateString = `방금 전`;
  else if (diffMin < 60) dateString = `${diffMin}분 전`;
  else if (diffHour < 24) dateString = `${diffHour}시간 전`;
  else if (diffDay < 8) dateString = `${diffDay}일 전`;

  return dateString;
};

export const getTimeDiff = (dateTime: string | Date) => {
  const date = new Date(dateTime);
  let dateString = calcTimeDiff(date);
  if (!dateString) dateString = String(dateTime).split("T")[0];
  return dateString;
};

export const getDateString = (dateTime: string | Date, separator?: string) => {
  const date = new Date(dateTime);
  let dateString = calcTimeDiff(date);
  if (!dateString) dateString = String(dateTime).split("T")[0];
  if (separator) dateString = dateString.replaceAll("-", separator);
  return dateString;
};

export const getShortDateString = (dateTime: string | Date) => {
  const day = ["일", "월", "화", "수", "목", "금", "토"];
  const date = new Date(dateTime);
  let dateString = calcTimeDiff(date);
  if (!dateString)
    dateString = `${date.getMonth() + 1}.${date.getDate()}.${
      day[date.getDay()]
    }`;
  return dateString;
};

export const getYYYYMMDD = (dateTime: string | Date) => {
  const date = new Date(dateTime);
  let dateString = calcTimeDiff(date);
  if (!dateString)
    dateString = `${date.getFullYear() + 1}.${
      date.getMonth() + 1
    }.${date.getDate()}`;
  return dateString;
};
