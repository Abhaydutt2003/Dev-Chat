import { GoArrowLeft } from "react-icons/go";
import { useDispatch } from "react-redux";
import { shiftDisplay } from "../../../features/RightBar/rightBarSlice";
import { rightBarDisplays } from "../../../data";

const StarredMessages = () => {
  const { CONTACT_INFO } = rightBarDisplays;
  const dispatch = useDispatch();
  return (
    <div className=" w-full flex flex-col h-max items-start">
      <button
        className="btn btn-ghost btn-md rounded-md"
        onClick={() => dispatch(shiftDisplay(CONTACT_INFO))}
      >
        <GoArrowLeft className=" w-5 h-5 text-base-content"></GoArrowLeft>
        Go Back
      </button>
    </div>
  );
};

export default StarredMessages;
