import SearchLogo from "../../assets/search.svg";

const SearchInput = () => {
  return (
    <div className="form-control px-7 mt-8">
      <label className="label ">
        <span className="label-text capitalize">
          <div className="flex flex-row gap-1">
            Search
            <img
              src={SearchLogo}
              style={{ height: "20px", width: "20px" }}
            ></img>
          </div>
        </span>
      </label>
      <input
        type="text"
        name="search"
        className={`input input-bordered input-md`}
      ></input>
    </div>
  );
};

export default SearchInput;

// <div className=" flex flex-row mt-8 justify-stretch px-7">

// </div>
