const ChatBox = ({ img, person, msg, time, unread, status }) => {
  status = status ? "online" : "offline";
  return (
    <div className=" w-80 h-20 bg-secondary rounded-2xl flex flex-row items-center justify-between px-4 hover:cursor-pointer overflow-hidden">
      <div className="flex">
        <div className={`avatar ${status}`}>
          <div className=" w-12 h-12 rounded-full">
            <img src={img} />
          </div>
        </div>
        <div className="flex flex-col justify-center ml-4">
          <span className=" font-extrabold text-base text-secondary-content">
            {person}
          </span>
          <div className=" text-sm font-semibold text-secondary-content noScrollBar">
            {unread == 0 && "You:"} {msg}
          </div>
        </div>
      </div>
      <span className="text-secondary-content">{time}</span>
    </div>
  );
};

export default ChatBox;
