import { useState } from "react";
function NewMemo(props) {
  const [newMemoInput, setNewMemoInput] = useState({
    memoTitle: "",
    memoBody: "",
  });
  const characterLimit = 140;

  function handleNewMemoInput(event) {
    const input = event.target.value;
    if (characterLimit - input.length >= 0) {
      setNewMemoInput({
        ...newMemoInput,
        [event.target.name]: input,
      });
    }
  }

  function handleSaveClick(event) {
    if (newMemoInput.trim().length > 0) {
      props.handleAddNewMemoToBoard(newMemoInput);
      setNewMemoInput("");
      event.preventDefault();
    }
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
        <h6>{characterLimit - newMemoInput.memoBody.length}</h6>
        <button className="save" onClick={handleSaveClick}>
          save
        </button>
      </div>
    </form>
  );
}

export default NewMemo;
