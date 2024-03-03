//import ContactInfo from "./ContactInfo";
import MediaLinksDocs from "./MediaLinksDocs";

const BarContent = ({ children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="p-4 w-[30%] h-full bg-base-100 text-base-content flex flex-col items-center overflow-auto noScrollBar">
        <MediaLinksDocs></MediaLinksDocs>
        {/* <ContactInfo></ContactInfo> */}
        </div>
        {/* <ContactInfo></ContactInfo> */}
        {/* <MediaLinksDocs></MediaLinksDocs> */}
      </div>
    </div>
  );
};

export default BarContent;
