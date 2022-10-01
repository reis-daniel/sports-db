import "./Heroe.scss";
// Assets
import HeaderImage from "../assets/Images/BG_Home.png";

const Heroe = () => {
  return (
    <section className="heroe">
      <img className="headerImg" src={HeaderImage} alt="Sports Player" />
      <p className="headerCaption">
        Find your <span className="spanLeague">League</span>
      </p>
    </section>
  );
};

export default Heroe;
