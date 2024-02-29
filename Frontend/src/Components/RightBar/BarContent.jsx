import ContactInfo from "./ContactInfo";
import MiddleContent from "./MiddleContent";

const BarContent = ({ children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {children}
        {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label> */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="p-4 w-[30%]  min-h-full bg-base-100 text-base-content flex flex-col items-center">
          <ContactInfo></ContactInfo>
          {/* About */}
          <div className="flex flex-col w-full justify-start gap-3">
            <div className=" text-base-content"> About</div>
            <div className=" text-base-content font-semibold">
              Hey there!!! i am using DevChat
            </div>
          </div>
          <MiddleContent></MiddleContent>
        </div>
      </div>
    </div>
  );
};

export default BarContent;
