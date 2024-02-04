fetch(
  "https://restcountries.com/v3.1/independent?status=true&fields=name,flags"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
