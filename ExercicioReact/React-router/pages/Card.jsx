import { useState } from "react";
import NavLabel from "./NavLabel";
import CurrencyCard from "./CurrencyCard";

export default function Card({ name, flag, capital, population, region,currency }) {
  const [isLight, setTheme] = useState(true);

  return (
    <div
      className="card"
      style={{
        background: isLight ? "#fff" : "#1e1e1e",
        color: isLight ? "#000" : "#fff",
      }}
    >
      <img src={flag} alt={name} className="flag" />
      <h2>{name}</h2>
      <p>
        <strong>Capital: </strong>
        {capital?.[0] || "N/A"}
      </p>
      <p>
        <strong>Region: </strong>
        {region}
      </p>
      <p>
        
        
        <strong>Population: </strong>
        {population.toLocaleString()}
      </p>
      <button onClick={() => setTheme((prev) => !prev)}>
        <NavLabel>
          Click me!
        </NavLabel>
      </button>
      <button>
        <NavLabel>
          Back
        </NavLabel>
      </button>
    </div>
  );
}
