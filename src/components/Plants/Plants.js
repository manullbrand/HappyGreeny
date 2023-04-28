import myPlants from "../../assets/myPlants.json";
import { v4 as uuidv4 } from "uuid";



export default function Plants() {
  return (
    <ul>
      <li key={uuidv4}>
        {myPlants.map((item) => (
          <>
            <h1>{item.species}</h1>
            <h2>{item.alias}</h2>
            <p>{item.size}</p>
            <img src={item.photo}/>


          </>
        ))}
      </li>
    </ul>
  );
}
