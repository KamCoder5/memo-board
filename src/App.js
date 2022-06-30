import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import MemoBoard from "./components/MemoBoard";
import Header from "./components/Header";
import SortBy from "./components/SortBy";

function App() {
  const [memos, setMemos] = useState(() => {
    const storedMemoData = window.localStorage.getItem("stored-memo-data");
    return storedMemoData !== null ? JSON.parse(storedMemoData) : [];
  });

  useEffect(() => {
    window.localStorage.setItem("stored-memo-data", JSON.stringify(memos));
  }, [memos]);

  function handleAddNewMemoToBoard(newMemoInput) {
    const creation_date = new Date();
    const newMemo = {
      id: uuidv4(),
      title: newMemoInput.memoTitle,
      body: newMemoInput.memoBody,
      creation_date: creation_date.toLocaleDateString(),
    };
    const newMemos = [...memos, newMemo];
    setMemos(newMemos);
  }

  function handleDeleteNote(id) {
    const updatedMemoList = memos.filter((memo) => memo.id !== id);
    setMemos(updatedMemoList);
  }

  // function handleEditNote(id) {
  //   const memoToEdit = memos.filter((memo) => memo.id === id);
  //   console.log(memoToEdit[0].body);
  // }

  return (
    <div>
      <Header />

      <div className="memo-board-container">
        <MemoBoard
          memos={memos}
          handleAddNewMemoToBoard={handleAddNewMemoToBoard}
          handleDeleteNote={handleDeleteNote}
        />
      </div>
    </div>
  );
}

export default App;
