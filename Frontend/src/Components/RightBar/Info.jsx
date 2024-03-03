import { getIndian } from "../../util";
import { IoVideocamOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

const Info = () => {
  //a turnAround
  let phoneNumber = getIndian("7780827816");
  return (
    <>
      <span className="text-lg mt-2 font-semibold text-base-content">
        Contact Info
      </span>
      <div className="divider"></div>
      <div className="flex flex-row items-center w-full">
        <div className="avatar ml-10">
          <div className=" w-20 h-20 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className=" flex flex-col gap-1 ml-9">
          <div className=" font-medium">Someone</div>
          <div className=" font-medium">{phoneNumber}</div>
        </div>
      </div>
      <div className="flex gap-16 mt-[8%]">
        <button className=" flex flex-col items-center gap-1">
          <IoVideocamOutline className=" w-6 h-6"></IoVideocamOutline>
          Video
        </button>
        <button className=" flex flex-col items-center gap-1">
          <IoCallOutline className=" w-6 h-6"></IoCallOutline>
          Call
        </button>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default Info;
