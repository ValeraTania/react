import { useState } from "react";

export default function Card({ name, flag, capital, population, languages }) {
  const [isLight, setTheme] = useState(true);

  return (
    <div className="card" style={{ background: isLight ? "#fff" : "#1e1e1e" , color: isLight? "#000":"#fff"}}>
      <img src={flag} alt={name} className="flag" />
      <h2>{name}</h2>
      <p>
        <strong>Capital: </strong>
        {capital?.[0] || "N/A"}
      </p>
      <p>
        <strong>Languages: </strong> 
        <ul>
            { languages?.map((lang,index) => {<li key={index}>{lang}</li>})}
            </ul>
      </p>
      <p>
        <strong>Population: </strong>
        {population.toLocaleString()}
      </p>
      <button onClick={() => setTheme((prev) => !prev)}>Click me!</button>
    </div>
  );
}
