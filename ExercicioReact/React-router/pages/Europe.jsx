import { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";
import { Link } from "react-router";

export default function Europe() {
  const [europeCountries, setEuropeCountries] = useState([]);

  const europeanCountries = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/region/europe"
    );
    const europe = await response.json();
    setEuropeCountries(europe);
    console.log('lista paises europa',europe);
  };

  useEffect(() => {
    europeanCountries();

  }, []);

  return (
    
    europeCountries && (<div className="container">
        <div className="grid">
          {europeCountries.map((country) => (
                <Link to={`/country/${country.name.common}`}>
                <Card
                  key={country.cca3}
                  name={country.name.common}
                  flag={country.flags.svg}
                  capital={country.capital}
                  region={country.region}
                  population={country.population}
                />
                </Link>
              ))}
        </div>
      </div>)
      
    
  );
}
