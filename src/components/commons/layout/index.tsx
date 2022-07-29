import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactChild } from "react";
import LayoutFooter from "./footer";
import Header from "./header";

interface IProps {
  children: ReactChild;
}

export default function Layout(props: IProps) {
  const router = useRouter();

  const HIDDEN_HEADER = ["/", "/member/join", "/member/login"];
  const HIDDEN_FOOTER = ["/", "/member/join", "/member/login"];

  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <Wrap>
      {isHiddenHeader || <Header />}
      <LayoutBody>{props.children}</LayoutBody>
      {isHiddenFooter || <LayoutFooter />}
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
