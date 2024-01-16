// List of all my plants, their species' name, nickname, size (with pot) and photo.
import myPlants from "../../assets/myPlants.json";
import Actions from "../Actions/Actions";
import "./Plants.css";
import leafIcon from "../../assets/images/leaf_icon4.svg";

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
      <h1 className="plants__cardTitle">
        <img className="plants__leafIcon" src={leafIcon} alt="leaf icon" /> My
        indoor plants
        <img className="plants__leafIcon" src={leafIcon} alt="leaf icon" />{" "}
      </h1>

      <ul className="plants__listCare">
        {myPlants.map((item) => (
          <li className="plants__listCard" key={item.id}>
            <h2 className="plants__alias">{item.alias}</h2>
            <div className="plants__plantCard">
              <div className="plants__containerImg">
                <img alt={item.species} src={item.photo} />
                <div className="plants__containerTextbox">
                  <div className="plants__containerText">{item.species}</div>
                </div>
              </div>
              <div className="plants__plantInfo">
                <h3 className="plants__aBitAbout">A bit about me:</h3>
                <p>{item.careLevel}</p>
                <p>{item.light}</p>
                <p>{item.water}</p>
                <p>{item.soil}</p>
                <p>{item.humidity}</p>
                <p>{item.propagation}</p>
                <p>Currently {item.size} high</p>
                {/* <p>Watering on Spring occurs each {item.watering} days</p> */}
              </div>
            </div>

            <div className="plants__calendar">
              <p>List of the last 3 actions' dates:</p>
              <Actions />
            </div>
          </li>
        ))}
      </ul>
      {/* <h1 className="plants__averageWatering">
        Average watering time for all plants in the Spring: {averageWatering()}{" "}
      </h1> */}
    </>
  );
}
