/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import ModalContent from "../ModalContent/ModalContent.jsx";
import s from "./style.module.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function ListItemCountry({ countryItem }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div onClick={() => setShowModal(!showModal)}>
        <div className={s.card}>
          <img
            src={countryItem.flags.svg}
            alt={countryItem.flags.alt}
            className={s.img}
          />
          <p className={s.heading}>{countryItem.name.common}</p>
        </div>
      </div>

      {showModal &&
        createPortal(
          <ModalContent
            countryItem={countryItem}
            closeModal={() => setShowModal(!showModal)}
          />,
          document.body
        )}
    </>
  );
}

export default ListItemCountry;
