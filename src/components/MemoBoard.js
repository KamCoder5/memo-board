import Memo from "./Memo";
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
    </div>
  );
}

export default MemoBoard;
