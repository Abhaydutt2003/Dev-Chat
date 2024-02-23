import { BsEmojiLaughing } from "react-icons/bs";
import { GoPaperclip } from "react-icons/go";
import { IoPaperPlane } from "react-icons/io5";

const UserInput = () => {
  return (
    <div className="flex items-center w-[100%] h-[9%] bg-base-300 px-8 gap-9">
      <label className="input input-bordered flex items-center gap-2 w-[90%] rounded-xl">
        <GoPaperclip></GoPaperclip>
        <input type="text" className="grow" placeholder="Write a Message..." />
        <BsEmojiLaughing></BsEmojiLaughing>
      </label>
      <div className=" flex items-center justify-center h-12 w-12 bg-primary rounded-xl">
        <IoPaperPlane className=" h-6 w-6 text-primary-content"></IoPaperPlane>
      </div>
    </div>
  );
};

export default UserInput;
