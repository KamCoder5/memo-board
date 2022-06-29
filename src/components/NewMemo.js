import { useState } from "react";
function NewMemo(props) {
  const [newMemoInput, setNewMemoInput] = useState({
    memoTitle: "",
    memoBody: "",
  });

  function handleNewMemoInput(event) {
    const input = event.target.value;
    setNewMemoInput({
      ...newMemoInput,
      [event.target.name]: input,
    });
  }

  function handleSaveClick(event) {
    console.log(newMemoInput);
    event.preventDefault();
  }

  return (
    <form className="memo new ">
      <input
        className="title-input"
        placeholder="Enter your title..."
        type="text"
        name="memoTitle"
        value={newMemoInput.memoTitle}
        onChange={handleNewMemoInput}
      ></input>
      <textarea
        rows="5"
        cols="10"
        placeholder="Type to add your great idea..."
        name="memoBody"
        value={newMemoInput.memoBody}
        onChange={handleNewMemoInput}
      ></textarea>
      <div className="memo-footer">
        <h6>140 characters remaining</h6>
        <button className="save" onClick={handleSaveClick}>
          save
        </button>
      </div>
    </form>
  );
}

export default NewMemo;
