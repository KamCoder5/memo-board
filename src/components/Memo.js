import { RiDeleteBin5Fill } from "react-icons/ri";
function Memo(props) {
  return (
    <div className="memo">
      <div className="memo-title">{props.title} </div>
      <div className="memo-body">{props.body}</div>
      <div className="memo-footer">
        <small>{props.creation_date}</small>
        <RiDeleteBin5Fill
          onClick={() => {
            props.handleDeleteNote(props.id);
          }}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
}

export default Memo;
