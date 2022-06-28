import { useState } from "react";
function NewMemo() {
  const [memoTitle, setMemoTitle] = useState("");
  //const [memoBody, setMemoBody] = useState("");

  // function handleTextChange()) {}

  return (
    <div className="memo new ">
      <textarea
        rows="5"
        cols="10"
        placeholder="Type to add your great idea..."
      ></textarea>
      <div className="memo-footer">
        <h6>140 characters remaining</h6>
        <button className="save">save</button>
      </div>
    </div>
  );
}

export default NewMemo;
