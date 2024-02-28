import { IoImages } from "react-icons/io5";
import { FaFile } from "react-icons/fa";
import { IoCameraSharp } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";

const InputOptions = () => {
  return (
    <>
      <li>
        <div className="flex">
        <IoImages className=" w-6 h-6 mr-6 text-base-content"></IoImages>
        <span>Upload Image</span>
        </div>
      </li>
      <li>
        <div className = "flex">
        <FaFile className=" w-6 h-6 mr-6 text-base-content"></FaFile>
        <span>Upload Document</span>
        </div>
      </li>
      <li>
        <div className="flex">
        <IoCameraSharp className=" w-6 h-6 mr-6 text-base-content"></IoCameraSharp>
        <span>Take Image</span>
        </div>
      </li>
      <li>
        <div className="flex">
        <MdOutlinePersonOutline className=" w-6 h-6 mr-6 text-base-content"></MdOutlinePersonOutline>
        <span>Upload contact</span>
        </div>
      </li>
    </>
  );
};

export default InputOptions;
