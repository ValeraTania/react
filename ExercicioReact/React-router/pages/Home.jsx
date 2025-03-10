import { useState, useEffect, Link } from "react";
import "./CountriesList.css"; // Importando o CSS
import Card from "./Card";

export default function Home() {
  const [countries, setCountries] = useState([]);
 // const [loading, setLoading] = useState(true);

  const fetchCountries = async () => {
    //try {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const countries = await response.json();
      setCountries(countries);
      console.log(countries);
    // } catch (error) {
    //   console.error("Error finding countries: ", error);
    // } finally {
    //  // setLoading(false);
    // }
  };

  // useEffect para buscar os dados ao carregar
  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="grid">
      {
      countries.map((country) => {
       // <Link to={`/country/${country.name.common}`} key={country.cca3}>
          <Card
            key={country.cca3}
            name={country.name.common}
            flag={country.flags.svg}
            capital={country.capital}
            region={country.region}
            population={country.population}
          />
       // </Link>
      })}
    </div>
  );
}

