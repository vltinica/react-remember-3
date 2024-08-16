<<<<<<< HEAD
import logo from "../assets/logo.png";
import classes  from "./Header.module.css";
=======
import logo from '../assets/logo.png';
import myStyles from "./Header.module.css"
>>>>>>> 7a61ef2c0da80b3e8df2f857ea79e991ce67a273

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={classes.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}
