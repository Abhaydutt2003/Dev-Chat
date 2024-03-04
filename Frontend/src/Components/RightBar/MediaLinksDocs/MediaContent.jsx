import { getFakeImage } from "../../../util";



const MediaContent = ()=>{
    return(
        <div className=" w-full h-full flex flex-col items-center mt-4">
            <div className="divider divider-start">27th Oct 22</div>
            <div className=" grid grid-cols-3 w-full place-items-center gap-3 ">
                <img src = {getFakeImage()}></img>
                <img src = {getFakeImage()}></img>
                <img src = {getFakeImage()}></img>
                <img src = {getFakeImage()}></img>
                <img src = {getFakeImage()}></img>
                <img src = {getFakeImage()}></img>
                <img src = {getFakeImage()}></img>
                <img src = {getFakeImage()}></img>
            </div>
            <div className="divider divider-start">26th Oct 22</div>
            <div className=" grid grid-cols-3 w-full place-items-center gap-3 ">
                <img src = {getFakeImage()}></img>
                <img src = {getFakeImage()}></img>
                <img src = {getFakeImage()}></img>
                <img src = {getFakeImage()}></img>
                <img src = {getFakeImage()}></img>
                <img src = {getFakeImage()}></img>
            </div>
            <div className="divider divider-start">20th Oct 22</div>
            <div className=" grid grid-cols-3 w-full place-items-center gap-3 ">
                <img src = {getFakeImage()}></img>
                <img src = {getFakeImage()}></img>
                <img src = {getFakeImage()}></img>
                <img src = {getFakeImage()}></img>
                <img src = {getFakeImage()}></img>
                <img src = {getFakeImage()}></img>
            </div>
        </div>
    ); 
}


export default MediaContent;  
