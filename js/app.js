const url =
  "https://restcountries.com/v3.1/independent?status=true&fields=name,flags";

const retrieveData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    throw new Error(error);
  }
};

retrieveData();
