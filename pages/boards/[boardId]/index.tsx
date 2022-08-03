import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import CommentList from "../../../src/components/units/comment/list/CommentList.container";
import CommentWrite from "../../../src/components/units/comment/write/CommentWrite.container";
import styled from "@emotion/styled";

export default function BoardDetailPage() {
  return (
    <Wrap>
      <BoardDetail />
      <div className="write">
        <CommentWrite isEdit={false} />
      </div>
      <CommentList />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  .write {
    margin-top: 20px;
    width: 100%;
    max-width: 768px;
  }
`;
