import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import CommentList from "../../../src/components/units/comment/list/CommentList.container";
import CommentWrite from "../../../src/components/units/comment/write/CommentWrite.container";

export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      <CommentWrite />
      <CommentList />
    </>
  );
}
