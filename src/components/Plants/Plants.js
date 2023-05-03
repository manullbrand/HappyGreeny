// List of all my plants, their species' name, nickname, size (with pot) and photo.
import myPlants from "../../assets/myPlants.json";
import { v4 as uuidv4 } from "uuid";
import Actions from "../Actions/Actions";


export default function Plants() {
  //console.log(myPlants[0].watering + myPlants[1].watering) //14
  //console.log(myPlants.length) // 19
  //console.log(myPlants[0]) // {species: 'Adiantum aethiopicum', alias: 'Avenquinha', size: '20cm', photo: 'images/plants/avenquinha.jpg', watering: 9}

  function averageWatering() {
    let initialValue = 0;
    let newValue = "";

    for (let i = 0; i < myPlants.length; i++) {
      initialValue += myPlants[i].watering;
      newValue = Math.round(initialValue / myPlants.length);
    }
    return newValue;
  }

  return (
    <>
      <h1>
        Average watering time for all plants in the Spring: {averageWatering()}{" "}
      </h1>
      <ul>
        <li key={uuidv4}>
          {myPlants.map((item) => (
            <>
              <h1>{item.species}</h1>
              <h2>{item.alias}</h2>
              <p>{item.size}</p>
              <p>Watering on Spring occurs each {item.watering} days</p>
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
