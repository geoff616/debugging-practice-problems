// Bug: getInventoryForCountry is causing an error and not returning 0 when the country does not exist

const product = {
  productID: 12345,
  inventory: {
    US: {
      quantity: 100,
    },
    GB: {
      quantity: 200,
    },
    DE: {
      quantity: 400,
    },
  },
};

// return the value for the country if it exists, otherwise zero
function getInventoryForCountry(product, countryCode) {
  return product.inventory[countryCode].quantity || 0;
}

console.log(getInventoryForCountry(product, "GB"));
console.log(getInventoryForCountry(product, "FR"));
