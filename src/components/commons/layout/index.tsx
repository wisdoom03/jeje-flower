import styled from "@emotion/styled";
import { ReactChild } from "react";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import LayoutMain from "./main";
import LayoutFooter from "./footer";
import { useRouter } from "next/router";
import Header from "./header";

interface IProps {
  children: ReactChild;
}

export default function Layout(props: IProps) {
  const router = useRouter();

  const HIDDEN_NAVIGATION = ["/"];
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);

  return (
    <Wrap>
      <Header />
      {/* {!isHiddenNavigation && <LayoutNavigation />} */}
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
  /* max-width: 1024px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
