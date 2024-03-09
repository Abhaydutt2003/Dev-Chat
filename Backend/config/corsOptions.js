//currently allowing request from any address, so no whitelist
const corsOptions = {
    origin:'*',
    credentials:true,
    methods:["GET","PATCH","POST","DELETE","PUT"]
}

module.exports  = corsOptions;





