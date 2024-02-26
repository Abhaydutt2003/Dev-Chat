import Chats from "./Chats";
import Messages from "./Messages";
import ProfileBar from "./ProfileBar";
import UserInput from "./UserInput";

const GeneralApp = ()=>{
    return(
        <div className="flex flex-row w-screen">
        <Chats></Chats>
        <div className=" w-[70%] h-screen flex flex-col justify-between items-center">
        <ProfileBar></ProfileBar>
        <Messages></Messages>
        <UserInput></UserInput>
        </div>
        </div>
    )
}


export default GeneralApp;