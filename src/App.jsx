/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { CountryAPI } from "./api/country.js";
import Header from "./components/Header/Header.jsx";
import ListCountry from "./components/ListCountry/ListCountry.jsx";
import s from "./global.module.css";

function App() {
  const [countryData, setCountryData] = useState(null);
  const [currentCountry, setCurrentCountry] = useState("Africa");
  const [search, setSearch] = useState("");
  const [shouldSearch, setShouldSearch] = useState(true);
  const [handleContact, setHandleContact] = useState(false);

  const cardRef = useRef(null);

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

  // Handle clicks outside the card
  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setHandleContact(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

      <div
        className={s.container_contact}
        onClick={() => setHandleContact(!handleContact)}
      >
        <div className={s.contact}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={s.contactIcon}
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
          </svg>
        </div>
      </div>

      {handleContact && (
        <div className={s.card} ref={cardRef}>
          <span className={s.time_text}>
            <span className={s.time_sub_text}>Pseudo : Moseswise</span>
          </span>
          <span className={s.day_text}>Email: moseswisegit@gmail.com</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            className={s.moon}
          >
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm1.5 0v12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5zM3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default App;

// https://restcountries.com/v3.1/region/europe
