/* eslint react/prop-types: 0 */
//above line to diable props validation

let SidebarButton = ({
  bg,
  w,
  h,
  logoHeight,
  logoWidth,
  mt,
  logo,
  setSelected,
  index,
}) => {
  //in case the user clicks the logo
  const handleSelect = () => {
    if (index == 0) return;
    setSelected(index);
  };
  return (
    <div
      className={`${bg} ${w} ${h} ${mt} flex  justify-center items-center rounded-xl cursor-pointer hover:shadow-lg}`}
      onClick={() => handleSelect()}
    >
      <img src={logo} style={{ height: logoHeight, width: logoWidth }}></img>
    </div>
  );
};

export default SidebarButton;

//i wasted so much hours, but here is a piece of information
//tailwind css does not pick up broken strings,i.e, cannot make the strings
//dynamically, else taiwind will not pick up the class, so i directly wrote the
//code for styles in the data
