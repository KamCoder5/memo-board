import { useState } from "react";
function NewMemo(props) {
  const [newMemoInput, setNewMemoInput] = useState({
    memoTitle: "",
    memoBody: "",
  });
  const [inputCharacterCount, setInputCharacterCount] = useState(0);
  const characterLimit = 140;

  function handleNewMemoInput(event) {
    const input = event.target.value;
    setInputCharacterCount(input.length);

    if (characterLimit - input.length >= 0) {
      setNewMemoInput({
        ...newMemoInput,
        [event.target.name]: input,
      });
    } else {
    }
  }

  function handleSaveClick(event) {
    if (inputCharacterCount > 0) {
      props.handleAddNewMemoToBoard(newMemoInput);
      event.preventDefault();
      setNewMemoInput("");
    }
  }

  return (
    <form className="memo new" autoComplete="off">
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
        <h6>{characterLimit - inputCharacterCount}</h6>
        <button className="save" onClick={handleSaveClick}>
          save
        </button>
      </div>
    </form>
  );
}

export default NewMemo;
