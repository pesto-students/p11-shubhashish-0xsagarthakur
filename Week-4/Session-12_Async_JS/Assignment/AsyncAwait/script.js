import fetch from "node-fetch";

async function getExchangeRate(currencyCode) {
  try {
    // Make the API request
    const response = await fetch(
      "https://api.exchangerate-api.com/v4/latest/EUR"
    );

    // Check if the response was successful
    if (!response.ok) {
      throw new Error("Unable to fetch exchange rates.");
    }

    // Parse the JSON response
    const data = await response.json();

    // Extract the exchange rate for the specified currencyCode
    const rate = data.rates[currencyCode];

    // Check if the currencyCode is found in the response
    if (rate === undefined) {
      return null;
    }

    // Round the exchange rate to 4 decimal places
    return parseFloat(rate.toFixed(4));
  } catch (error) {
    throw new Error("An error occurred while fetching the exchange rate.");
  }
}

getExchangeRate("INR")
  .then((rate) => {
    console.log("INR current exchange rate with EUR : ",rate); // Output: 88.49
  })
  .catch((error) => {
    console.error(error);
  });

getExchangeRate("USD")
  .then((rate) => {
    console.log("USD current exchange rate with EUR : ",rate); // Output: 1.07
  })
  .catch((error) => {
    console.error(error);
  });

getExchangeRate("XYZ")
  .then((rate) => {
    console.log("XYZ current exchange rate with EUR : ",rate); // Output: null
  })
  .catch((error) => {
    console.error(error);
  });
