import { RiDeleteBin5Fill } from "react-icons/ri";
function Memo() {
  return (
    <div className="memo">
      <div className="memo-title">memo title </div>
      <div className="memo-body">memo body</div>
      <div className="memo-footer">
        <small>28/06/22</small>
        <RiDeleteBin5Fill className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
}

export default Memo;
