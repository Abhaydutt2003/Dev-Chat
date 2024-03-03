import { FaLink } from "react-icons/fa6";
import { getDomain } from "../../util";

const SingleLink = ({fullLink})=>{
    let domain = getDomain(fullLink);
    return(
        <div className=" w-full h-24 bg-base-100 rounded-lg shadow-lg flex flex-row items-center">
            <div className= "rounded-lg w-16 h-16 bg-base-200 items flex items-center justify-center ">
                <FaLink className=" w-8 h-8"></FaLink>
            </div>
        </div>
    );
}


export default SingleLink;