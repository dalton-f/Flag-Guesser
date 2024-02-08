// URL prefiltered to only return independent countries, and only receiving the name + flags to ensure the call is more efficient

const url =
  "https://restcountries.com/v3.1/independent?status=true&fields=name,flags";

const retrieveData = async () => {
  try {
    const response = await fetch(url);
    // Handles any 400s or 500s status codes
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  } catch (err) {
    // Handles network or CORS issues
    throw new Error(err);
  }
};

retrieveData();
