import "./Banner.css";
import image from "../../assets/images/dieffenbachia_banner.jpeg";
import leafIcon from "../../assets/images/leaf_icon3.svg";

export default function Banner() {
  return (
    <header className="App-header">
      <h1>
        SmilyGreeny
        <img className="App-header__logoTitle" src={leafIcon} />
      </h1>

      <h2>Organize your indoor plants!</h2>
      <img
        className="App-header__imgBanner"
        src={image}
        alt="Areca plant in a living room"
      />
    </header>
  );
}
