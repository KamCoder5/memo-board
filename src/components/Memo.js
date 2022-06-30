import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
function Memo(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMemoInput, setCurrentMemoInput] = useState();

  function handleOnMouseEnterLeaveDeleteIcon() {
    setIsVisible(!isVisible);
  }

  return (
    <div
      className="memo"
      onMouseEnter={handleOnMouseEnterLeaveDeleteIcon}
      onMouseLeave={handleOnMouseEnterLeaveDeleteIcon}
    >
      <div className="memo-title">{props.title} </div>
      <div className="memo-body">{props.body}</div>
      <div className="memo-footer">
        <small>{props.creation_date}</small>
        {isVisible ? (
          <AiFillEdit
            className="delete-icon"
            size="1.3em"
            onClick={() => {
              props.handleEditNote(props.id);
            }}
          />
        ) : null}
        {isVisible ? (
          <RiDeleteBin5Fill
            className="delete-icon"
            size="1.3em"
            onClick={() => {
              props.handleDeleteNote(props.id);
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Memo;
