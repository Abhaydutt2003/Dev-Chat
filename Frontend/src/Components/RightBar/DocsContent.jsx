
// import { FaImage } from "react-icons/fa6";
// import { FaFileExcel } from "react-icons/fa6";

import SingleDoc from "./SingleDoc";


//TODO after completion of the backend make sure to implement document preview
//JOSH TRIED CODING, FILE INPUT VIDEO, make your own custom react component
const DocsContent = () => {
  return (
    <>
    <div className="divider divider-start mt-5">27th Oct 22</div>
    <div className="w-full grid grid-cols-1 place-items-center gap-7">
        <SingleDoc text = {'Booked Ticket'}></SingleDoc>
        <SingleDoc text = {'Invoice 22 Oct'}></SingleDoc>
        <SingleDoc text = {'Sales Report'}></SingleDoc>
    </div>
    </>
  );
};

export default DocsContent;

