// Main care points to look at when taking care of indoor plants, like humidity, luminosity and etc.
import legend from "../../assets/careLegend.json";
import "./Categories.css";

export default function Categories() {
  return (
    <div>
      <h2>Categories </h2>
      <ul className="container__categories">
        <div >
          <h2>Care Level</h2>
          {legend.map((item) => {
            if (item.category === "Care Level") {
              return (
                <dl className="categories__showHidden" key={item.id}>
                  <dt className="categories__listTitle">{item.title}</dt>
                  <dd className="categories__hiddenText">{item.description}</dd>
                </dl>
              );
            }
          })}
        </div>
        <div>
          <h2>Light</h2>
          {legend.map((item) => {
            if (item.category === "Light") {
              return (
                <dl key={item.id}>
                  <dt>{item.title}</dt>
                  <dd className="categories__hiddenText">{item.description}</dd>
                </dl>
              );
            }
          })}
        </div>
        <div>
          <h2>Water</h2>
          {legend.map((item) => {
            if (item.category === "Water") {
              return (
                <dl key={item.id}>
                  <dt>{item.title}</dt>
                  <dd>{item.description}</dd>
                </dl>
              );
            }
          })}
        </div>
        <div>
          <h2>Soil</h2>
          {legend.map((item) => {
            if (item.category === "Soil") {
              return (
                <dl key={item.id}>
                  <dt>{item.title}</dt>
                  <dd>{item.description}</dd>
                </dl>
              );
            }
          })}
        </div>
        <div>
          <h2>Humidity</h2>
          {legend.map((item) => {
            if (item.category === "Humidity") {
              return (
                <dl key={item.id}>
                  <dt>{item.title}</dt>
                  <dd>{item.description}</dd>
                </dl>
              );
            }
          })}
        </div>
        <div>
          <h2>Propagating</h2>
          {legend.map((item) => {
            if (item.category === "Propagating") {
              return (
                <dl key={item.id}>
                  <dt>{item.title}</dt>
                  <dd>{item.description}</dd>
                </dl>
              );
            }
          })}
        </div>
      </ul>
    </div>
  );
}
