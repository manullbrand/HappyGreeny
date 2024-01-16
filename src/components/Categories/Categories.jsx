// Main care points to look at when taking care of indoor plants, like humidity, luminosity and etc.
import legend from "../../assets/careLegend.json";
import "./Categories.css";

function CategoryCard({ title }) {
  return (
    <li className="categories__cards">
      <h2>{title}</h2>
      {legend.map((item) => {
        if (item.category === title) {
          return (
            <dl className="categories__showHidden" key={item.id}>
              <dt className="categories__listTitle">{item.title}</dt>
              <dd className="categories__hiddenText">{item.description}</dd>
            </dl>
          );
        }
      })}
    </li>
  );
}

const categories = [
  "Care Level",
  "Light",
  "Water",
  "Soil",
  "Humidity",
  "Propagating",
];

export default function Categories() {
  return (
    <ul className="categories__container">
      {categories.map((category) => (
        <CategoryCard key={category} title={category} />
      ))}
    </ul>
  );
}
