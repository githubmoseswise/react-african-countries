import { useState, useEffect } from "react";
import { CountryAPI } from "./api/country.js";
import Header from "./components/Header/Header.jsx";
import ListCountry from "./components/ListCountry/ListCountry.jsx";
import s from "./global.module.css";

function App() {
  const [countryData, setCountryData] = useState(null);
  async function fetchContry() {
    const country = await CountryAPI.fetchRegion("Afric");
    if (country.length > 0) {
      setCountryData(country);
    }
  }

  useEffect(() => {
    fetchContry();
  }, []);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <Header  countryData={countryData}/>
      </div>

      <div className={s.container_country}>
        {countryData && <ListCountry countryData={countryData} />}

      </div>
    </div>
  );
}

export default App;

// https://restcountries.com/v3.1/region/europe
