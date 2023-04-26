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
              <dl>
                <dt key={uuidv4}>{item.title}</dt>
                <dd>{item.description}</dd>
              </dl>
            );
          }
        })}
        <h2>Light</h2>
        {legend.map((item) => {
          if (item.category === "Light") {
            return (
              <dl>
                <dt key={uuidv4}>{item.title}</dt>
                <dd>{item.description}</dd>
              </dl>
            );
          }
        })}
        {/* <dt>
                <img />
                Novice
              </dt>
              <dd>Easy to take care. Begginers' plants!</dd>
              <dt>
                <img />
                Green thumb
              </dt>
              <dd>A bit more of attention is required.</dd>
              <dt>
                <img />
                Expert
              </dt>
              <dd>Save these plants for when you fill as a gardening badass.</dd>
            </dl>
            <dl>
              Light
              <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd>
            </dl>
            <dl>
              Water
              <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd>
            </dl>
            <dl>
              Soil
              <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd>
            </dl>
            <dl>
              Humidity
              <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd>
            </dl>
            <dl>
              Propagating
              <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd>
            </dl>
            <dl>
              Growth habit
              <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd>
            </dl>
            <dl>
              Position
              <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd>
            </dl>
            <dl>Toxicity
            <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd>
              <dt>
                <img />
              </dt>
              <dd></dd> */}
      </ul>
    </div>
  );
}
