import { IoVideocamOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoSearchCircleOutline } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";

const ProfileBar = () => {
  return (
    <div className=" bg-base-300 h-20 w-[100%] px-8 pr-6 flex justify-between">
      <div className="flex gap-4 mt-4">
        <div>
          <label
            htmlFor="my-drawer-4"
            className=" drawer-button cursor-pointer"
          >
            <div className="avatar online ">
              <div className=" w-12 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </label>
        </div>
        <div className="flex flex-col">
          <span className=" text-base-content font-extrabold">
            Pink Panda
          </span>
          <span className=" text-base-content font-semibold">Online</span>
        </div>
      </div>
      {/* All the icons towards the right */}
      <div className=" md:hidden lg:flex items-center">
        <IoVideocamOutline className=" w-6 h-6 mr-6 text-base-content"></IoVideocamOutline>
        <IoCallOutline className=" w-6 h-6 mr-6 text-base-content"></IoCallOutline>
        <IoSearchCircleOutline className=" w-6 h-6 text-base-content"></IoSearchCircleOutline>
        <div className=" divider divider-horizontal "></div>
        <BsChevronDown className=" w-6 h-6 text-base-content"></BsChevronDown>
      </div>
    </div>
  );
};

export default ProfileBar;

//accent, secondary , accent, neutral,base-100, info,success,warning,error
//<div className="flex items-center  w-[20%] justify-between">
{
  /* <img src={VideoLogo} style={{ width: "24px", height: "24px" }}></img>
<img src={PhoneLogo} style={{ width: "24px", height: "24px" }}></img>
<img src={SearchLogo} style={{ width: "24px", height: "24px" }}></img>
<div className="divider divider-horizontal"></div>
<img src={DownLogo} style={{ width: "24px", height: "24px" }}></img>
</div> */
}
