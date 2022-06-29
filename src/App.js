import { useEffect, useState } from "react";
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

  function handleDeleteNote(id) {
    const updatedMemoList = memos.filter((memo) => memo.id !== id);
    setNewMemo(updatedMemoList);
  }

  //local storage

  // useEffect(() => {
  //   const savedMemos = JSON.parse(localStorage.getItem("react-memo-app-data"));
  //   if (savedMemos) {
  //     setNewMemo(savedMemos);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("app-name", "react-memo-app-data");
  //   JSON.stringify(memos);
  // }, [memos]);

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
