import { useState, useEffect } from "react";
import CountriesList from "../../../REACT-EDIT-LESSONS/src/aula-3/CountryList";
import './CountriesList.css'; // Importando o CSS


function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

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

// return (
//   <div className="grid">
//             {filteredCountries.map((country) => (
//               <Link to={`/country/${country.name.common}`} key={country.cca3}>
//                 <Card/>
//                   </Link>
//                   )}

//                 </div>
//                 )

  return <CountriesList />;
}

export default Home;
