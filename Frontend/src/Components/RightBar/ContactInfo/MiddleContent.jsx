//TODO break the entire component in parts,
//and implement caching or use react query to prevent un necessary api calls
import { IoChevronForward } from "react-icons/io5";
import { getFakeImage } from "../../../util";
import { IoStar } from "react-icons/io5";
import { IoMdNotificationsOff } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineAppBlocking } from "react-icons/md";
import AlertModal from "./AlertModal";
import { useDispatch } from "react-redux";
import { shiftDisplay } from "../../../features/RightBar/rightBarSlice";
import { rightBarDisplays } from "../../../data";

const MiddleContent = () => {
  //handle the redux store to go to different displays
  const dispatch = useDispatch();
  const handleClick1 = ()=>{
    dispatch(shiftDisplay(rightBarDisplays.MEDIA_LINKS.MEDIA));
  }

  return (
    <div className="flex flex-col h-full w-full items-center">
      <div className="divider"></div>
      <div className="flex flex-row w-full justify-between items-center">
        <div>Media, links and docs</div>
        <div className="flex flex-row gap-2">
          <button className="btn btn-ghost" onClick={handleClick1}>
            201
            <IoChevronForward></IoChevronForward>
          </button>
        </div>
      </div>
      <div className=" mt-5 mx-4 w-[90%] carousel carousel-center p-2 space-x-3 bg-neutral rounded-box ">
        <div className="carousel-item w-2/5">
          <img src={getFakeImage()} className="rounded-box" />
        </div>
        <div className="carousel-item w-2/5">
          <img src={getFakeImage()} className="rounded-box" />
        </div>
        <div className="carousel-item w-2/5">
          <img src={getFakeImage()} className="rounded-box" />
        </div>
        <div className="carousel-item w-2/5">
          <img src={getFakeImage()} className="rounded-box" />
        </div>
        <div className="carousel-item w-2/5">
          <img src={getFakeImage()} className="rounded-box" />
        </div>
        <div className="carousel-item w-2/5">
          <img src={getFakeImage()} className="rounded-box" />
        </div>
        <div className="carousel-item w-2/5">
          <img src={getFakeImage()} className="rounded-box" />
        </div>
      </div>
      <div className="divider"></div>
      {/* Starred messages */}
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-row w-[80%] gap-6 items-center">
          <IoStar className=" w-5 h-5 text-base-content"></IoStar>
          <div>Starred Messages</div>
        </div>
        <IoChevronForward className="w-6 h-6 text-base-content"></IoChevronForward>
      </div>
      <div className="divider"></div>
      {/* mute notifications */}
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-row w-[80%] gap-6 items-center">
          <IoMdNotificationsOff className=" w-5 h-5 text-base-content"></IoMdNotificationsOff>
          <div>Mute Notifications</div>
        </div>
        <input type="checkbox" className="toggle"></input>
      </div>
      <div className="divider"></div>
      {/* group,block and delete */}
      <div className="flex flex-col w-full justify-start gap-6">
        <div>Group&apos;s in common</div>
        <div className="flex flex-row items-center w-full">
          <div className="avatar ml-10">
            <div className=" w-20 h-20 rounded-full">
              <img src={getFakeImage()} />
            </div>
          </div>
          <div className=" flex flex-col gap-1 ml-9">
            <div className=" font-semibold">Camel&apos;s Gang</div>
            <div className=" font-normal">Owl, Parrot, Rabbit, You</div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-center gap-6">
          <button
            className="btn btn-outline btn-warning btn-lg"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <MdOutlineAppBlocking></MdOutlineAppBlocking>
            Block
          </button>
          <AlertModal type="my_modal_1"></AlertModal>
          <button
            className="btn btn-outline btn-warning btn-lg"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            <AiOutlineDelete></AiOutlineDelete>
            Delete
          </button>
          <AlertModal type="my_modal_2"></AlertModal>
        </div>
      </div>
    </div>
  );
};

export default MiddleContent;

// wasted a lot of time on em , em is actually relative to the font size of the parent element, and not the actual element
