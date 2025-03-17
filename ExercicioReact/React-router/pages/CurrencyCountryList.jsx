import { useState, useEffect } from "react";
import SmallCard from "./SmallCard";
import { Link } from "react-router";

export default function CurrencyCountryList({ currency, countryName }) {
  const [countriesListCurrency, setCountriesCurrency] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState();

  const getCountryCurrency = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/currency/${currency}`
    );
    const countriesCurrency = await response.json();
    setCountriesCurrency(countriesCurrency);
  };

  useEffect(() => {
    getCountryCurrency();
  }, []);

  //Poner el onChange a funcionar
  return (
    <>
    <div>
      <select name="" id="" onChange={(e)=>{setCountriesCurrency(e.target.value)}}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="BRL">BRL</option>
        </select>
        </div>
    {/* <CurrencySelector onChange=/> */}
    <div className="grid">
      {countriesListCurrency.map((countryCurrency) => {
        if (countryCurrency.name.common !== countryName) {
          return (
            <Link to={`/country/${countryCurrency.name.common}`} key={countryCurrency.cca3}>

            <SmallCard
              key={countryCurrency.cca3}
              name={countryCurrency.name.common}
              flag={countryCurrency.flags.svg}
              currency={currency}
            />
            </Link>
          );
        }
      })}
    </div>
    </>
   
  );
}
