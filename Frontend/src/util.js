import { faker } from "@faker-js/faker";


/**
 *
 * @param {string} phoneNumber
 * function to format a string to indian number format
 */
let getIndian = (numericPhoneNumber) => {
  const formattedPhoneNumber = `+91-${numericPhoneNumber.slice(0,3)}-${numericPhoneNumber.slice(3, 6)}-${numericPhoneNumber.slice(6)}`;
  return formattedPhoneNumber;
};

//will not be used in production
let getFakeImage = ()=>{
  return faker.image.urlLoremFlickr({ category: 'cars' });
}


export {getIndian,getFakeImage};