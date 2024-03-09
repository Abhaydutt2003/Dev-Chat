//import ContactInfo from "./ContactInfo";
import { rightBarDisplays } from "../../data";
import MediaLinksDocs from "./MediaLinksDocs/MediaLinksDocs";
import { useSelector } from "react-redux";
import ContactInfo from "./ContactInfo/ContactInfo";
import StarredMessages from "./StarredMessages/StarredMessages";

const BarContent = ({ children }) => {
  const {CONTACT_INFO} = rightBarDisplays;
  const {STARRED_MESSAGES} = rightBarDisplays; 
  //get the currentDisplay from the redux store
  const { currentDisplay } = useSelector((state) => {
    return state.barState;
  });
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="p-4 w-[30%] h-full bg-base-100 text-base-content flex flex-col items-center overflow-auto noScrollBar">
          {currentDisplay == CONTACT_INFO ? (
            <ContactInfo></ContactInfo>
          ):(currentDisplay == STARRED_MESSAGES)? (
            <StarredMessages></StarredMessages>
          ):(
            <MediaLinksDocs></MediaLinksDocs>
          )}

        </div>
      </div>
    </div>
  );
};

export default BarContent;
