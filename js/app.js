// Create a new XMLHttpRequest object
const request = new XMLHttpRequest();

// Initialize the request with a "GET" request to the REST Countries API
request.open(
  "GET",
  "https://restcountries.com/v3.1/independent?status=true&fields=name,flags"
);

// Send the initialized request
request.send();

// Set up an event handler for the "load" event, which is triggered when the request is successfully completed
request.onload = () => {
  // Parse the JSON response received from the server and store it in the 'result' variable
  const result = JSON.parse(request.response);
  console.log(result);
};
