/* eslint-disable react/prop-types */
import s from "./style.module.css";

function ModalContent({ countryItem, closeModal }) {
  {
    console.log("***", countryItem);
  }

  return (
    <div className={s.container}>
      <div className={s.modal}>
        <div className={s.modal_content}>
          <p className={s.title}>
            Capital :<span className={s.subtitle}> {countryItem.capital}</span>
          </p>
          <p className={s.title}>
            Country :
            <span className={s.subtitle}> {countryItem.name.common}</span>
          </p>
          <p className={s.title}>
            Population :
            <span className={s.subtitle}> {countryItem.population}</span>
          </p>
          <p className={s.title}>
            Superficie :
            <span className={s.subtitle}> {countryItem.area} km2</span>
          </p>
          <p className={s.title}>
            Region :<span className={s.subtitle}> {countryItem.region}</span>
          </p>
          <p className={s.title}>
            Subregion :
            <span className={s.subtitle}> {countryItem.subregion}</span>
          </p>
          <p className={s.title}>
            Times Zone :
            <span className={s.subtitle}> {countryItem.timezones[0]}</span>
          </p>
        </div>
        <button className={s.button} onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
}

export default ModalContent;
