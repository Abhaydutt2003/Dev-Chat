import SingleLink from "./SingleLink";

const LinksContent = ()=>{
    let url = 'https://codingmonk.in/blogs';
    return(
        <div className="w-full h-full flex flex-col items-center mt-4">
            <div className="divider divider-start">27thOct22</div>
            <div className= "grid grid-cols-1 w-full place-items-center gap-6">
                <SingleLink fullLink = {url}></SingleLink>
                <SingleLink fullLink = {url}></SingleLink>
                <SingleLink fullLink = {url}></SingleLink>
            </div>
        </div>

    );
}

export default LinksContent;