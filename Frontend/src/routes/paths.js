//this file will have all the paths to different pages
// let path = (root,sublink)=>{
//     return `${root}${sublink}`;
// }


export let allPaths = {
    ROOT : "/",
    APP :'app',
    AUTH:'/auth',
    LOGIN:'login',
    REGISTER:'register',
    VERIFY:'verify'
}


// export const PATHS = {
//     root:allPaths.ROOT,
//     general:{
//         app:allPaths.APP
//     },
//     auth:{
//         login:path(allPaths.AUTH,allPaths.LOGIN),
//         register:path(allPaths.AUTH,allPaths.REGISTER),
//         verify:path(allPaths.AUTH,allPaths.VERIFY),
//     }
// }

//is a better practice, as there are very less chances of typo by this approach


//general -> sometginh/app


//auth-> some/auth/login,some/auth/register, and so on 
