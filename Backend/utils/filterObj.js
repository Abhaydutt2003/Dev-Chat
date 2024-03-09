//there can be cases when the user has actually manipulated the form and 
//passes feilds such as verified which can severly hurt the security
const filterObj = (obj,...allowedFields)=>{
    const newObj = {};
    Object.keys(obj).forEach((el)=>{
        if(allowedFields.includes(el))newObj[el] = obj[el]
    });
    return newObj;
}

module.exports = filterObj;