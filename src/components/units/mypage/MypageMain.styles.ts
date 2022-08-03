import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 80%;
`;

export const MyPageContent = styled.section`
  position: relative;
  width: 100%;
  max-width: 1280px;
  padding: 74px 0 0 250px;
  min-height: 480px;
  height: auto;
  margin-bottom: 115px;
`;

export const Category = styled.div`
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 220px;
  height: auto;
  margin: 65px 30px 0px 0px;
`;

export const CategoryUl = styled.ul`
  list-style: none;
  width: 100%;
  border: 1px solid #ebebeb;
`;

export const CategoryLi = styled.li`
  :not(:last-child) {
    border-bottom: 1px solid #ebebeb;
  }
`;
export const CategoryLiA = styled.a`
  display: block;
  margin: 0 0 0 20px;
  padding: 20px 0px;
  color: #666666;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
`;

export const RecentOrder = styled.div`
  display: block;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const Headerdl = styled.dl`
  text-align: left;
  position: relative;
  margin-bottom: 21px;
  list-style: none;
  padding: 0;
  margin: 0;
  display: block;
`;

export const Headerdt = styled.dt`
  font-size: 24px;
  color: #000000;
  position: relative;
  padding-right: 10px;
  font-weight: 500;
  display: inline-block;
  list-style: none;
`;

export const Headerdd = styled.dd`
  color: #666666;
  display: inline-block;
  font-size: 13px;
  letter-spacing: -0.03em;
  list-style: none;
`;

export const HeaderA = styled.a`
  margin-inline-start: 40px;
  text-align: left;
  ::after {
    content: "";
    display: inline-block;
    /* background: url(../img/common/ico-btn-black-small.svg) no-repeat center */
    /* center; */
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-bottom: 3px;
    margin-left: 4px;
  }
`;

export const TitleUl = styled.ul`
  width: 100%;
  border-bottom: 0px solid #dddddd;
  margin-bottom: 80px;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TitleLi = styled.li`
  border-top: 2px solid #999999;
  border-bottom: 1px solid #dddddd;
  position: relative;
  color: #000000;
  list-style: none;
  padding: 0;
  margin: 0;
  display: list-item;
`;

export const Titledl = styled.dl`
  display: table;
  table-layout: fixed;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Titledd = styled.dd`
  display: table-cell;
  vertical-align: middle;
  height: 45px;
  padding: 13px 10px;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  text-align: center;
`;

export const ContentsLi = styled.li`
  position: relative;
  border-bottom: 1px solid #dddddd;
  color: #333333;
  list-style: none;
  padding: 0;
  margin: 0;
  display: list-item;
`;

export const ContentsLidl = styled.dl`
  display: table;
  table-layout: fixed;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ContentsLidd = styled.dd`
  display: table-cell;
  text-align: center;
  height: auto;
  padding: 13px 10px;
  font-size: 14px;
  background: #ffffff;
  word-break: break-all;
`;
