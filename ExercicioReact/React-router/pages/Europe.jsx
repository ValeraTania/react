import { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";

export default function Europe() {
  const [europeCountries, setEuropeCountries] = useState();

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
console.log('Countries',europeCountries);
  }, []);

  return (
    <>
      {/* <div className="container">
        <div className="grid">
          {europeCountries.map((country) => (
                
                <Card
                  key={country.cca3}
                  name={country.name.common}
                  flag={country.flags.svg}
                  capital={country.capital}
                  region={country.region}
                  population={country.population}
                />
              ))}
        </div>
      </div> */}
    </>
  );
}
