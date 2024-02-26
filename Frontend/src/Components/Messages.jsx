import { Chat_History } from "../fake_data";
import SingleMessage from "./SingleMessage";

const Messages = () => {
  return (
    <div className=" overflow-auto w-[100%]">
      {Chat_History.map((chat, index) => {
        return (
          <SingleMessage subType = {chat.subtype} incoming={chat.incoming} key={index}></SingleMessage>
        );
      })}
    </div>
  );
};

export default Messages;
