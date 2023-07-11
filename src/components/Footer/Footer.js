import "./Footer.css";
import ghubIcon from "../../assets/logos/github.svg";
import linkedinIcon from "../../assets/logos/linkedin.svg";

export default function Footer() {
  return (
    <div className="footer__container">
      <p>Developed by Manuela Brandão</p>
      <img
        className="footer__logo"
        src={linkedinIcon}
        alt="logo from LinkedIn"
      />{" "}
      <p>/manullbrand</p>
      
      <img className="footer__logo" src={ghubIcon} alt="logo from GitHub" />
      <p> /manulbrandao</p>
    </div>
  );
}
