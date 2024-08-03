/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { CountryAPI } from "./api/country.js";
import Header from "./components/Header/Header.jsx";
import ListCountry from "./components/ListCountry/ListCountry.jsx";
import s from "./global.module.css";

function App() {
  const [countryData, setCountryData] = useState(null);
  const [currentCountry, setCurrentCountry] = useState("Africa");
  const [search, setSearch] = useState("");
  const [shouldSearch, setShouldSearch] = useState(true);

  console.log("sea", shouldSearch);
  console.log("search", search);
  const updateSearch = (name) => {
    setSearch(name);
    setShouldSearch(true);
  };

  const updateCountry = (currentCountryData) => {
    setCurrentCountry(currentCountryData);
  };

  async function fetchCountry(currentCountry) {
    const country = await CountryAPI.fetchRegion(currentCountry);
    if (country.length > 0) {
      setCountryData(country);
    }
  }

  async function searchCountry(name) {
    const country = await CountryAPI.searchCountry(name);
    if (country.length > 0) {
      setCountryData(country);
      setCurrentCountry(country[0].region);
    }
  }

  useEffect(() => {
    fetchCountry(currentCountry);
    setSearch("");
    setShouldSearch(false);
  }, [currentCountry]);

  useEffect(() => {
    if (shouldSearch && search) {
      searchCountry(search);
    }
  }, [search, shouldSearch]);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <Header
          countryData={countryData}
          currentCountryData={currentCountry}
          updateCountryClick={updateCountry}
        />
      </div>

      <div className={s.container_country}>
        {countryData && (
          <ListCountry
            countryData={countryData}
            onSearchUpdate={updateSearch}
            etatSearch={shouldSearch}
          />
        )}
      </div>
    </div>
  );
}

export default App;

// https://restcountries.com/v3.1/region/europe
