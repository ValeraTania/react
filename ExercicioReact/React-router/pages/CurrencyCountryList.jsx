import { useState, useEffect } from "react";
import SmallCard from "./SmallCard";
import { Link } from "react-router";

export default function CurrencyCountryList({ currency, countryName }) {
  const [countriesListCurrency, setCountriesCurrency] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  const getCountryCurrency = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/currency/${selectedCurrency}`
    );
    const countriesCurrency = await response.json();
    setCountriesCurrency(countriesCurrency);
  //  console.log("countries currency", countriesCurrency);
  };

  useEffect(() => {
    getCountryCurrency();
  }, [selectedCurrency]);

  return (
    <>
      <div>
        <select
          name=""
          id=""
          onChange={(e) => {
            setSelectedCurrency(e.target.value);
          }}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="BRL">BRL</option>
        </select>
      </div>

      <div className="grid">
        {countriesListCurrency.map((countryCurrency) => {
          if (countryCurrency.name.common !== countryName) {
            return (
              <Link
                to={`/country/${countryCurrency.name.common}`}
                key={countryCurrency.cca3}
              >
                <SmallCard
                  key={countryCurrency.cca3}
                  name={countryCurrency.name.common}
                  flag={countryCurrency.flags.svg}
                  currency={selectedCurrency}
                />
              </Link>
            );
          }
        })}
      </div>
    </>
  );
}
