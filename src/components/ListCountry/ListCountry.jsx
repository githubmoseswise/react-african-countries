import ListItemCountry from "../../components/ListItemCountry/ListItemCountry.jsx";
import s from "./style.module.css";

function ListCountry({ countryData }) {
  const countryDataSort =
    countryData &&
    countryData.slice().sort((a, b) => {
      if (a.name.common > b.name.common) {
        return 1;
      } else if (a.name.common < b.name.common) {
        return -1;
      } else {
        return 0;
      }
    });

  return (
    <div className="row">
      {countryDataSort &&
        countryDataSort.map((item, index) => (
          <div
            key={index}
            className={`col-xl-3 col-lg-4 col-md-6 col-12 ${s.card_item}`}
          >
            <ListItemCountry  countryItem={item} />
          </div>
        ))}
    </div>
  );
}

export default ListCountry;
