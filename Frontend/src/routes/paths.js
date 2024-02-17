//this file will have all the paths to different pages
let path = (root,sublink)=>{
    return `${root}${sublink}`;
}


export let allPaths = {
    ROOT : "/",
    APP :'app'
}


export const PATH_DASHBOARD = {
    root:allPaths.ROOT,
    general:{
        app:path(allPaths.ROOT,allPaths.APP)
    }
}

//is a better practice, as there are very less chances of typo by this approach


