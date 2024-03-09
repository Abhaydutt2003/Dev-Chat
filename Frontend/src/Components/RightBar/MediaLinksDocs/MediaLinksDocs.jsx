import { GoArrowLeft } from "react-icons/go";
import MediaContent from "./MediaContent";
import LinksContent from "./LinksContent";
import DocsContent from "./DocsContent";
import { rightBarDisplays } from "../../../data";
import { useSelector, useDispatch } from "react-redux";
import { shiftDisplay } from "../../../features/RightBar/rightBarSlice";

const MediaLinksDocs = () => {
  let { CONTACT_INFO } = rightBarDisplays;
  let { DOCS, LINKS, MEDIA } = rightBarDisplays.MEDIA_LINKS;
  const { currentDisplay } = useSelector((state) => {
    return state.barState;
  });
  //to handle change on the bar
  let handleClick = (toGo) => {
    if (toGo != currentDisplay) {
      if (toGo == DOCS) {
        dispatch(shiftDisplay(DOCS));
      } else if (toGo == LINKS) {
        dispatch(shiftDisplay(LINKS));
      } else {
        dispatch(shiftDisplay(MEDIA));
      }
    }
  };
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full flex  items-start flex-col h-max ">
        <button
          className="btn btn-ghost btn-md rounded-md"
          onClick={() => dispatch(shiftDisplay(CONTACT_INFO))}
        >
          <GoArrowLeft className=" w-5 h-5 text-base-content"></GoArrowLeft>
          Go Back
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
        {/* {currentDisplay == rightBarDisplays.MEDIA_LINKS.MEDIA ? (
          <MediaContent></MediaContent>
        ) : currentDisplay == rightBarDisplays.MEDIA_LINKS.LINKS ? (
          <LinksContent></LinksContent>
        ) : (
          <DocsContent></DocsContent>
        )} */}
      </div>
    </>
  );
};

export default MediaLinksDocs;
