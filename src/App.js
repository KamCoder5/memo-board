import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import MemoBoard from "./components/MemoBoard";
import Header from "./components/Header";

function App() {
  const [memos, newMemo] = useState([
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
  return (
    <div>
      <Header />
      <div className="memo-board-container">
        <MemoBoard memos={memos} />
      </div>
    </div>
  );
}

export default App;
