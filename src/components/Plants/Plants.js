// List of all my plants, their species' name, nickname, size (with pot) and photo.
import myPlants from "../../assets/myPlants.json";
import { v4 as uuidv4 } from "uuid";
import Actions from "../Actions/Actions";

export default function Plants() {
  return (
    <>
      <ul>
        <li key={uuidv4}>
          {myPlants.map((item) => (
            <>
              <h1>{item.species}</h1>
              <h2>{item.alias}</h2>
              <p>{item.size}</p>
              <img src={item.photo} />
              <Actions />
            </>
          ))}
        </li>
      </ul>
      <Actions />
    </>
  );
}
