import withAuth from "../../../src/components/commons/hoc/withAuth";
import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";

const BoardNewPage = () => {
  return <BoardWrite isEdit={false} />;
};

export default withAuth(BoardNewPage);
