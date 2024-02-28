import { useState } from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import { GoPaperclip } from "react-icons/go";
import { IoPaperPlane } from "react-icons/io5";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import InputOptions from "./InputOptions";

//remember to lazy load the data later to reduce the initial bundle size

const UserInput = () => {
  //state to manage the visibility of the emoji picker
  const [visible, setIsVisible] = useState(false);
  //state to manage what is written in the input
  const [input, setInput] = useState("");
  //to handle emoji input
  const handleEmoji = (event) => {
    setInput(input.concat(event.native));
    setIsVisible(!visible);
  };
  return (
    <div className="flex items-center w-[100%] h-[9%] bg-base-300 px-8 gap-9 relative">
      {visible && (
        <div className=" absolute left-[50%] bottom-[90%]">
          <Picker
            data={data}
            previewPosition="none"
            onEmojiSelect={(event) => handleEmoji(event)}
          ></Picker>
        </div>
      )}
      <label className="input input-bordered flex items-center gap-2 w-[90%] rounded-xl">
        <div className=" dropdown dropdown-top">
          <button tabIndex={0}>
            <GoPaperclip></GoPaperclip>
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu menu-sm p-2 shadow bg-base-100 rounded-box w-52"
          >
            <InputOptions></InputOptions>
          </ul>
        </div>
        <input
          type="text"
          className="grow"
          placeholder="Write a Message..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={() => setIsVisible(!visible)}>
          <BsEmojiLaughing></BsEmojiLaughing>
        </button>
      </label>
      <div className=" flex items-center justify-center h-12 w-12 bg-primary rounded-xl">
        <IoPaperPlane className=" h-6 w-6 text-primary-content"></IoPaperPlane>
      </div>
    </div>
  );
};

export default UserInput;
