import { useState } from "react";
function NewMemo() {
  const [memoTitle, setMemoTitle] = useState("");
  const [memoBody, setMemoBody] = useState("");

  function handleTextBodyChange(event) {
    setMemoBody(event.target.value);
  }

  function handleTitleChange(event) {
    setMemoTitle(event.target.value);
  }

  return (
    <div className="memo new ">
      <input
        className="title-input"
        type="text"
        placeholder="Enter your title..."
        onChange={handleTitleChange}
      ></input>
      <textarea
        rows="5"
        cols="10"
        placeholder="Type to add your great idea..."
        onChange={handleTextBodyChange}
      ></textarea>
      <div className="memo-footer">
        <h6>140 characters remaining</h6>
        <button className="save">save</button>
      </div>
    </div>
  );
}

export default NewMemo;
