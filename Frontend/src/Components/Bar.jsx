const Bar = ({ width, margin}) => {
  //check if all the variables are provided
  width = width == undefined ? "" : width;
  margin = margin == undefined ? "" : margin;
  return (
    <div
      className={` ${width} ${margin}  bg-neutral border-solid`}
      style={{ height: "1px" }}
    ></div>
  );
};

export default Bar;
