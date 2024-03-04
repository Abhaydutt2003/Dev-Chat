import Info from "./Info";
import MiddleContent from "./MiddleContent";

const ContactInfo = () => {
  return (
    <>
      <Info></Info>
      {/* About */}
      <div className="flex flex-col w-full justify-start gap-3">
        <div className=" text-base-content"> About</div>
        <div className=" text-base-content font-semibold">
          Hey there!!! i am using DevChat
        </div>
      </div>
      <MiddleContent></MiddleContent>
    </>
  );
};

export default ContactInfo;
