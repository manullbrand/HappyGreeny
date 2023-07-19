import "./Footer.css";
import ghubIcon from "../../assets/logos/github.svg";
import linkedinIcon from "../../assets/logos/linkedin.svg";

export default function Footer() {
  return (
    <div className="footer__container">
      <p>Developed by Manuela Brandão </p>

      <a
        className="footer__social"
        href="https://github.com/manullbrand"
        target="_blank"
      >
        <img className="footer__logo" src={ghubIcon} alt="logo from GitHub" />
        <p>/manullbrand</p>
      </a>

      <a
        className="footer__social"
        href="https://www.linkedin.com/in/manulbrandao

        "
        target="_blank"
      >
        <img
          className="footer__logo"
          src={linkedinIcon}
          alt="logo from LinkedIn"
        />{" "}
        <p>/manulbrandao</p>
      </a>
    </div>
  );
}
