// Main care points to look at when taking care of indoor plants, like humidity, luminosity and etc.
import legend from "../../assets/careLegend.json";
import { v4 as uuidv4 } from "uuid";

export default function Categories() {
  return (
    <div>
      <h2>Categories </h2>
      <ul>
        <h2>Care Level</h2>
        {legend.map((item) => {
          if (item.category === "Care Level") {
            return (
              <dl key={item.id}>
                <dt>{item.title}</dt>
                <dd>{item.description}</dd>
              </dl>
            );
          }
        })}
        <h2>Light</h2>
        {legend.map((item) => {
          if (item.category === "Light") {
            return (
              <dl key={item.id}>
                <dt>{item.title}</dt>
                <dd>{item.description}</dd>
              </dl>
            );
          }
        })}
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
      </ul>
    </div>
  );
}
