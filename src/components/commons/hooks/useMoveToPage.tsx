import { useRouter } from "next/router";

type IPage =
  | "/boards"
  | "/items"
  | "/"
  | "/member/login"
  | "/member/join"
  | "/mypage";

export default function UseMoveToPage() {
  const router = useRouter();

  const moveToPage = (page: IPage) => () => {
    router.push(page);
  };
  return { moveToPage: moveToPage };
}
