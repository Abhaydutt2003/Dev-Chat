//there can be cases when the user has actually manipulated the form and 
//passes feilds such as verified which can severly hurt the security
/**
 * 
 * @param {Object} obj 
 * @param  {...any} allowedFields 
 * @returns {Object}
 */
const filterObj = (obj,...allowedFields)=>{
    const newObj = {};
    Object.keys(obj).forEach((el)=>{
        if(allowedFields.includes(el))newObj[el] = obj[el]
    });
    return newObj;
}

module.exports = filterObj;