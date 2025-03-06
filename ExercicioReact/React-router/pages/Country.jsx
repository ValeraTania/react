import { useParams } from "react-router";
import { useState, useEffect } from "react";

function Country() {
  const countryName = useParams();
  const [country, setCountry] = useState("");

  const getCountry = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName.name}`
      );
      const country = await response.json();
      setCountry(country[0]);
    } catch (error) {
      console.error("No country found: ", error);
    } 
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    country && ( // if country loads then shows the card
      <div key={country.cca3} className="card">
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="flag"
        />
        <h2>{country.name.common}</h2>
        <p>
          <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
      </div>
    )
  );
}

export default Country;
