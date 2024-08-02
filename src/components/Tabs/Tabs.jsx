/* eslint-disable react/prop-types */
import { countries } from "../../services/countries";
import s from "./style.module.css";

function Tabs({ updateCountryClick, currentCountryData, countryData }) {
  return (
    <div className={s.container}>
      <div className={s.radio_inputs}>
        {countries.map((item, index) => (
          <label
            key={index}
            className={s.radio}
            onClick={() => updateCountryClick(item)}
          >
            <input
              type="radio"
              name="radio"
              value={item} // Add value for comparison
              checked={currentCountryData === item} // Check if the currentCountryData matches item
              readOnly // Prevent manual changes to radio buttons
            />
            <span className={s.name}>
              {item}
              {currentCountryData === item &&
                countryData &&
                Array.isArray(countryData) && (
                  <span className={s.notification}>{countryData.length}</span>
                )}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
