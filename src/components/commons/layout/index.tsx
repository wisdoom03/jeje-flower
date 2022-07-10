import styled from "@emotion/styled";
import { ReactChild } from "react";
import LayoutFooter from "./footer";
import Header from "./header";

interface IProps {
  children: ReactChild;
}

export default function Layout(props: IProps) {
  // const router = useRouter();

  // const SHOW_SLIDE = ["/home"];
  // const isShowSlide = SHOW_SLIDE.includes(router.asPath);

  return (
    <Wrap>
      <Header />
      <LayoutBody>{props.children}</LayoutBody>
      <LayoutFooter />
    </Wrap>
  );
}

const Wrap = styled.div`
  max-width: 1920px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LayoutBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
