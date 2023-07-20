import "./Banner.css";
import image1 from "../../assets/images/dieffenbachia_banner.jpeg";
import image2 from "../../assets/images/table_plants.jpeg";
import leafIcon from "../../assets/images/leaf_icon3.svg";

export default function Banner() {
  return (
    <header className="App-header">
      <div className="App-header__bannerText">
        <h1 className="App-header__h1">
          SmilyGreeny
          <img className="App-header__logoTitle" src={leafIcon} />
        </h1>
        <h2 className="App-header__h2">Organize your indoor plants!</h2>
      </div>
      <img
        className="App-header__imgBanner2"
        src={image2}
        alt="Bamboo plant on a vase "
      />
      <img
        className="App-header__imgBanner"
        src={image1}
        alt="Plant in a living room"
      />
    </header>
  );
}
