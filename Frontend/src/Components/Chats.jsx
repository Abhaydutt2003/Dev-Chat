import CircleLogo from "../assets/circle.svg";
import ArchiveLogo from "../assets/archive.svg";
import SearchInput from "./SearchInput";
import { ChatList } from "../fake_data";
import ChatBox from "./ChatBox";

const Chats = () => {
  let pinned = [],
    allChats = [];
  //to seprate all the pinned and non pinned chats, for obvious reasons this will be removed later
  ChatList.map((chat) => {
    if (chat.pinned) {
      pinned.push(chat);
    } else {
      allChats.push(chat);
    }
  });
  return (
    <div
      className=" w-96 h-screen bg-base-200 overflow-hidden hover:overflow-auto"
      style={{ boxShadow: "4px 0px 4px -4px rgba(0, 0, 0, 0.25)"}}
    >
      <div className="flex justify-between mt-8 mx-7">
        <span className=" text-3xl font-extrabold">Chats</span>
        <button>
          <img src={CircleLogo} style={{ height: "32px", width: "32px" }}></img>
        </button>
      </div>
      <SearchInput></SearchInput>
      <div className="flex flex-row mt-7 px-7 gap-3">
        <button>
          <img
            src={ArchiveLogo}
            style={{ height: "22px", width: "24px" }}
          ></img>
        </button>
        <span>Archived</span>
      </div>
      <div className="divider mb-4 "></div>
      {/* pinned and all chats */}
      <span className=" text-base font-bold ml-9 ">Pinned</span>
      <div className="flex flex-col">
        <div className="flex flex-col ml-9 mt-4 gap-4">
          {pinned.map((info, index) => {
            return (
              <ChatBox
                key={index}
                img={info.img}
                person={info.person}
                msg={info.msg}
                time={info.time}
                unread={info.unread}
                status={info.status}
              ></ChatBox>
            );
          })}
           <span className=" text-base font-bold mt-2">All Chats</span>
           {allChats.map((info, index) => {
            return (
              <ChatBox
                key={index}
                img={info.img}
                person={info.person}
                msg={info.msg}
                time={info.time}
                unread={info.unread}
                status={info.status}
              ></ChatBox>
            );
          })}
        </div>
      </div>
      </div>
  );
};

export default Chats;
