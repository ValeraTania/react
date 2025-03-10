import { useState, useEffect } from "react";
import "./CountriesList.css"; // Importando o CSS
import Card from "./Card";

export default function CountriesList() {

  // To-do
  // hacer un boton click me ✅
  // al clicar el card cambia de color dark/light ✅
  //mostrar idioma

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Função assíncrona para buscar os países
  const fetchCountries = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/all`);
      const countries = await response.json();
      setCountries(countries);
      console.log(countries);
      console.log(Object.values(countries[2].languages));
    } catch (error) {
      console.error("Error finding countries:", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect para buscar os dados ao carregar
  useEffect(() => {
    fetchCountries();
  }, []);

  // Filtra os países com base no input do usuário
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">🌍 Lista de Países</h1>

      {/* Campo de Pesquisa */}
      <input
        type="text"
        placeholder="Search country..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Mostra um texto de carregamento enquanto os dados não chegam */}
      {loading ? (
        <p className="loading">Loading countries...</p>
      ) : (
        <div className="grid">
          {filteredCountries.map((country) => (
            
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
      )}
    </div>
  );
}
