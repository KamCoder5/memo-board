import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import MemoBoard from "./components/MemoBoard";
import Header from "./components/Header";

function App() {
  const [memos, setNewMemo] = useState([
    {
      id: uuidv4(),
      title: "This is my first note",
      body: "How exciting!",
      creation_date: "27/06/22",
    },
    {
      id: uuidv4(),
      title: "This is my second note",
      body: "Still  exciting!",
      creation_date: "27/06/22",
    },
  ]);

  function handleAddNewMemoToBoard(newMemoInput) {
    console.log("test");
    console.log(newMemoInput);
    const creation_date = new Date();
    const newMemo = {
      id: uuidv4(),
      title: newMemoInput.memoTitle,
      body: newMemoInput.memoBody,
      creation_date: creation_date.toLocaleDateString(),
    };
    const newMemos = [...memos, newMemo];
    setNewMemo(newMemos);
  }

  return (
    <div>
      <Header />
      <button>Create new memo</button>
      <div className="memo-board-container">
        <MemoBoard
          memos={memos}
          handleAddNewMemoToBoard={handleAddNewMemoToBoard}
        />
      </div>
    </div>
  );
}

export default App;
