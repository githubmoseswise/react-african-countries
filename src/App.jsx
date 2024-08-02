/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { CountryAPI } from "./api/country.js";
import Header from "./components/Header/Header.jsx";
import ListCountry from "./components/ListCountry/ListCountry.jsx";
import s from "./global.module.css";

function App() {
  const [countryData, setCountryData] = useState(null);
  const [currentCountry, setCurrentCountry] = useState("Africa");

  console.log(countryData);
  const updateCountry = (currentCountryData) => {
    setCurrentCountry(currentCountryData);
  };

  async function fetchCountry(currentCountry) {
    const country = await CountryAPI.fetchRegion(currentCountry);
    if (country.length > 0) {
      setCountryData(country);
    }
  }

  useEffect(() => {
    fetchCountry(currentCountry);
  }, [currentCountry]);

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
        {countryData && <ListCountry countryData={countryData} />}
      </div>
    </div>
  );
}

export default App;

// https://restcountries.com/v3.1/region/europe
