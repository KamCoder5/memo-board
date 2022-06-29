import { useState } from "react";
import Memo from "./Memo";
import NewMemo from "./NewMemo";
function MemoBoard(props) {
  const [isVisible, setIsVisible] = useState(false);

  function buttonMessage() {
    return isVisible ? "cancel new memo" : "add new memo";
  }

  return (
    <div className="memo-board-container">
      <button onClick={() => setIsVisible(!isVisible)}>
        {buttonMessage()}
      </button>
      <div className="memo-board">
        {isVisible ? (
          <NewMemo handleAddNewMemoToBoard={props.handleAddNewMemoToBoard} />
        ) : null}
        {props.memos.map((memo) => (
          <Memo
            key={memo.id}
            id={memo.id}
            title={memo.title}
            body={memo.body}
            creation_date={memo.creation_date}
            handleDeleteNote={props.handleDeleteNote}
          />
        ))}
      </div>
    </div>
  );
}

export default MemoBoard;
