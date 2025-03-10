import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Card from "./Card";
import CurrencyCountryList from "./CurrencyCountryList";

export default function Country() {
  const countryName = useParams();

//console.log('countryname',countryName.name);

  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");

  const getCountry = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName.name}`
      );
      const country = await response.json();

      //console.log("teste", country[0].currencies);
      const currencyName = Object.keys(country[0].currencies);

      // console.log("country-currency", country.currencies);
      // console.log("currencyName", currencyName[0]);

      setCurrency(currencyName[0]);
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
      <>
        <Card
          key={country.cca3}
          name={country.name.common}
          flag={country.flags.svg}
          capital={country.capital}
          region={country.region}
          population={country.population}
        />

        <h4>Countries with the same Currency</h4>
        <CurrencyCountryList currency={currency} countryName={countryName.name}/>
      </>
    )
  );
}
