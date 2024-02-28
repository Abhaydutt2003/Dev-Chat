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
        <div className="p-4 w-[30%] min-h-full bg-base-100 text-base-content flex flex-col items-center">
          {/* shift this entire code to another comnponent */}
          <span className="text-lg mt-2 font-semibold text-base-content">Contact Info</span>
          <div className="divider"></div>
          {/* Avatar,name and number  */}
          <div className=" flex flex-row">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarContent;
