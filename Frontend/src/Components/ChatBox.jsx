const ChatBox = ({ img, person, msg, time, unread, status }) => {
  status = status ? "online" : "offline";
  return (
    <div className=" w-80 h-20 bg-primary rounded-2xl flex flex-row items-center justify-between px-4">
      <div className="flex">
        <div className={`avatar ${status}`}>
          <div className=" w-12 h-12 rounded-full">
            <img src={img} />
          </div>
        </div>
        <div className="flex flex-col justify-center ml-4">
          <span className=" font-extrabold text-base text-primary-content">
            {person}
          </span>
          <span className=" text-sm font-semibold text-secondary-content">
            {unread == 0 && "You:"} {msg}
          </span>
        </div>
      </div>
      <span className="text-secondary-content">{time}</span>
    </div>
  );
};

export default ChatBox;
