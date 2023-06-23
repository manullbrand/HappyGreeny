// List of all my plants, their species' name, nickname, size (with pot) and photo.
import myPlants from "../../assets/myPlants.json";
import Actions from "../Actions/Actions";
import "./Plants.css";

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
      <h1 className="plants__averageWatering">
        Average watering time for all plants in the Spring: {averageWatering()}{" "}
      </h1>
      <ul className="plants__listCare">
        {myPlants.map((item) => (
          <li key={item.id}>
            {/* <h1>{item.species}</h1> */}
            <h2>{item.alias}</h2>
            <p>{item.size}</p>
            <p>Watering on Spring occurs each {item.watering} days</p>

            {/* depois arrumar todos esses nomes de classe! */}
            <div className="container">
              <img alt={item.species} src={item.photo} />
              <div className="middle">
                <div className="text">{item.species}</div>
              </div>
            </div>
            <Actions />
          </li>
        ))}
      </ul>
    </>
  );
}
