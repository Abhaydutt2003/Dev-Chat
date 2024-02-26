const SingleMessage = ({ subType, incoming }) => {
  incoming = incoming ? "chat-start" : "chat-end";
  subType = subType ? subType : "normal-message";
  return (
    <div className={` chat ${incoming}`}>
      <div className=" chat-header">
        <time className="text-xs opacity-50">some time ago</time>
      </div>
      <div className="chat-bubble">
        {subType == 'reply' && <div> this message is a reply</div>}
        some message
      </div>
    </div>
  )
};

export default SingleMessage;
{
  /* <div className={` chat ${incoming}`}>
      <div className=" chat-header">
        <time className="text-xs opacity-50">some time ago</time>
      </div>
      <div className="chat-bubble">random message</div>
    </div> */
}
