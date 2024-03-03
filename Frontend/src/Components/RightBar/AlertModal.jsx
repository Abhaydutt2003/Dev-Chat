import { IoMdCheckmark } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const AlertModal = ({ type }) => {
  let text =
    type == "my_modal_1" ? "Block the account ?" : "Delete all chats ?";
  return (
    <dialog id={type} className="modal">
      <div className="modal-box flex flex-col justify-between items-center gap-6">
        <div className=" font-bold"> {text} </div>
        <div className=" flex flex-row w-full justify-center gap-10">
        <button className="btn btn-outline btn-lg btn-warning">
          <IoMdCheckmark></IoMdCheckmark>
          Yes
        </button>
        <button className="btn btn-outline btn-lg btn-secondary">
          <RxCross1></RxCross1>
          No
        </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default AlertModal;
