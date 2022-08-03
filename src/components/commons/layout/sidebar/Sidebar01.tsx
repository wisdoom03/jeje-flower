import router from "next/router";
import { moveToTop } from "../../../../commons/libraries/utils";
import Button01 from "../../button/button01/Button01";
import HamburgerIcon from "../../../../../public/svg/hamburger-icon.svg";
import UpArrowIcon from "../../../../../public/svg/upArrow-icon.svg";
import styled from "@emotion/styled";

interface SideBar01Props {
  page: string;
}
export default function SideBar01(props: SideBar01Props) {
  return (
    <SideBar>
      <div className="sidebar">
        <div className="buttons">
          {/* <Button01 onClick={props.onClickLike}>
                <HeartIcon />
              </Button01> */}
          <Button01 onClick={moveToTop}>
            <UpArrowIcon />
          </Button01>
          <Button01
            onClick={() => {
              router.push(props.page);
            }}
          >
            <HamburgerIcon />
          </Button01>
        </div>
      </div>
    </SideBar>
  );
}

const SideBar = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: calc(50% - 384px);
  .sidebar {
    position: sticky;
    transition: top 0.1s ease 0s;
    width: 55px;
    margin: 0 auto;
    .buttons {
      padding: 70px 0;
      display: flex;
      flex-direction: column;
      grid-gap: 15px;
    }
  }
`;
