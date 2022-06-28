import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiOutlinePushpin } from "react-icons/ai";
function Memo() {
  return (
    <div className="memo">
      <AiOutlinePushpin className="pin-icon" size="1.3em" />
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
