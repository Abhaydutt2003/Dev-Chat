import { IoChevronForward } from "react-icons/io5";
import { getFakeImage } from "../../util";
import { IoStar } from "react-icons/io5";
import { IoMdNotificationsOff } from "react-icons/io";

const MiddleContent = () => {
  return (
    <div className="flex flex-col h-full w-full items-center">
      <div className="divider"></div>
      <div className="flex flex-row w-full justify-between ">
        <div>Media, links and docs</div>
        <div className="flex flex-row gap-2">
          201
          <IoChevronForward className="w-6 h-6 text-base-content"></IoChevronForward>
        </div>
      </div>
        <div className=" mt-5 mx-4 w-[90%] carousel carousel-center p-2 space-x-3 bg-neutral rounded-box ">
          <div className="carousel-item w-2/5">
            <img
              src={getFakeImage()}
              className="rounded-box"
            />
          </div>
          <div className="carousel-item w-2/5">
            <img
              src={getFakeImage()}
              className="rounded-box"
            />
          </div>
          <div className="carousel-item w-2/5">
            <img
              src={getFakeImage()}
              className="rounded-box"
            />
          </div>
          <div className="carousel-item w-2/5">
            <img
              src={getFakeImage()}
              className="rounded-box"
            />
          </div>
          <div className="carousel-item w-2/5">
            <img
              src={getFakeImage()}
              className="rounded-box"
            />
          </div>
          <div className="carousel-item w-2/5">
            <img
              src={getFakeImage()}
              className="rounded-box"
            />
          </div>
          <div className="carousel-item w-2/5">
            <img
              src={getFakeImage()}
              className="rounded-box"
            />
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
          <input type = "checkbox" className="toggle"></input>
        </div>
        <div className="divider"></div>
    </div>
  );
};

export default MiddleContent;


// wasted a lot of time on em , em is actually relative to the font size of the parent element, and not the actual element
