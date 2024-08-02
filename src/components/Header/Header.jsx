/* eslint-disable react/prop-types */
import Tabs from "../Tabs/Tabs";
import s from "./style.module.css";
function Header({updateCountryClick, currentCountryData }) {
  return (
    <div className={s.container}>
      <div className={s.container_title}>
        <div className={s.typewriter}>
          <div className={s.slide}>
            <i></i>
          </div>
          <div className={s.paper}></div>
          <div className={s.keyboard}></div>
        </div>
        <p className={s.title}> African Contries Data</p>
      </div>

      {/* <h1 className={s.description}>
        African countries : {countryData && countryData.length} countries
      </h1> */}
      <Tabs
        updateCountryClick={updateCountryClick}
        currentCountryData={currentCountryData}
      />
      {/* <p className={s.description}> Click on a card to reveal a country info</p> */}
    </div>
  );
}

export default Header;
