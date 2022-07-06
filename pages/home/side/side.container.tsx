import * as S from "../side/side.styles";

import Weather from "../../../src/components/units/weather/index";

export default function SidePage() {
  return (
    <S.Wrapper>
      <S.SideWrapper>
        <S.SideMenu>
          <Weather />
        </S.SideMenu>
        <S.SideMenu></S.SideMenu>
        <S.SideMenu></S.SideMenu>
      </S.SideWrapper>
    </S.Wrapper>
  );
}
