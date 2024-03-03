import { FaFilePdf } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";

const SingleDoc = ({ text }) => {
  return (
    <div className=" w-96 h-72 shadow-lg rounded-lg flex flex-col items-center justify-center gap-7 ">
      <div className=" w-80 h-44 bg-base-200 rounded-lg"></div>
      <div className="flex flex-row w-full px-8 justify-between">
        <div className="flex flex-row gap-4 justify-end items-center">
          <FaFilePdf className=" w-9 h-9 text-base-300"></FaFilePdf>
          <div className=" font-thin text-base">{text}</div>
        </div>
        <FaDownload className=" w-9 h-9 text-base-content"></FaDownload>
      </div>
    </div>
  );
};

export default SingleDoc;
