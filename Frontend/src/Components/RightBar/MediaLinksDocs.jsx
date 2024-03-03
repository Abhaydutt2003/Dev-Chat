import { GoArrowLeft } from "react-icons/go";
import MediaContent from "./MediaContent";
import LinksContent from "./LinksContent";
import DocsContent from "./DocsContent";

//TODO in the redux store , make sure to store that which page the user is actually viewing,
const MediaLinksDocs = () => {
  return (
    <>
      <div className="w-full flex  items-start flex-col h-max ">
        <button className="btn btn-ghost btn-md rounded-md">
          <GoArrowLeft className=" w-5 h-5 text-base-content"></GoArrowLeft>
          <div>Go Back</div>
        </button>
        <div role="tablist" className="tabs tabs-bordered tabs-md w-full mt-5">
          <a role="tab" className="tab tab-active">
            Media
          </a>
          <a role="tab" className="tab">
            Links
          </a>
          <a role="tab" className="tab">
            Docs
          </a>
        </div>
        {/* <div className="divider divider-start">27th Oct 22</div> */}
        {/* <MediaContent></MediaContent> */}
        {/* <LinksContent></LinksContent> */}
        <DocsContent></DocsContent>
      </div>
    </>
  );
};

export default MediaLinksDocs;
