import { useState, useEffect } from "react";
import CountriesList from "../../../REACT-EDIT-LESSONS/src/aula-3/CountryList";

function Home() {
//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchCountries = async () => {
//     try {
//       const response = await fetch(`https://restcountries.com/v3.1/all`);
//       const countries = await response.json();
//       setCountries(countries);
//       console.log(countries);
//     } catch (error) {
//       console.error("Error finding countries: ", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // useEffect para buscar os dados ao carregar
//   useEffect(() => {
//     fetchCountries();
//   }, []);

  return <CountriesList />;
}

export default Home;
