// Create a new XMLHttpRequest object
const request = new XMLHttpRequest();

// Initialize the request with a "GET" request to the REST Countries API
request.open(
  "GET",
  "https://restcountries.com/v3.1/all?fields=name,flags,independent"
);

// Send the initialized request
request.send();

// Set up an event handler for the "load" event, which is triggered when the request is successfully completed
request.onload = () => {
  // Parse the JSON response received from the server and store it in the 'result' variable
  const result = JSON.parse(request.response);
  filterCountries(result);
};

// Filters out any non-independant territories or otherwise included in the object

const filterCountries = (result) => {
  result = result.filter((country) => country.independent);
};
