import MessageOptions from "./MessageOptions";
import { HiOutlineDotsVertical } from "react-icons/hi";

const SingleMessage = ({ subType, incoming }) => {
  incoming = incoming ? "chat-start" : "chat-end";
  subType = subType ? subType : "normal-message";
  return (
    <div className={`chat ${incoming}`}>
      <div className=" chat-header">
        <time className="text-xs opacity-50">some time ago</time>
      </div>
      <div className="chat-bubble flex flex-col">some message</div>
    </div>
  );
};

export default SingleMessage;

{
  /* <div className= "dropdown">
          <button tabIndex={0}>
            <HiOutlineDotsVertical></HiOutlineDotsVertical>
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu menu-sm p-2 shadow bg-base-100 rounded-box w-52"
          >
            <MessageOptions></MessageOptions>
          </ul>
        </div> */
}
