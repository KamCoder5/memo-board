import Memo from "./Memo";
import NewMemo from "./NewMemo";
function MemoBoard(props) {
  return (
    <div className="memo-board">
      {props.memos.map((memo) => (
        <Memo
          key={memo.id}
          id={memo.id}
          title={memo.title}
          body={memo.body}
          creation_date={memo.creation_date}
        />
      ))}
      <NewMemo addNewMemoToBoard={props.addNewMemoToBoard} />
    </div>
  );
}

export default MemoBoard;
