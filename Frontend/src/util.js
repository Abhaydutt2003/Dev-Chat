import { faker } from "@faker-js/faker";

/**
 *
 * @param {string} phoneNumber
 * function to format a string to indian number format
 */
let getIndian = (numericPhoneNumber) => {
  const formattedPhoneNumber = `+91-${numericPhoneNumber.slice(
    0,
    3
  )}-${numericPhoneNumber.slice(3, 6)}-${numericPhoneNumber.slice(6)}`;
  return formattedPhoneNumber;
};

//will not be used in production, generates a random dog image
let getFakeImage = () => {
  return faker.image.urlLoremFlickr({ category: "dogs" });
};

//extracts the domain from the given url
let getDomain = (fullLink) => {
  let urlObject = new URL(fullLink);
  return urlObject.hostname;
};

export { getIndian, getFakeImage, getDomain };
