import { Basket, Likes, User } from "../../assets/images/Icons";
import logo from "../../assets/images/logo.png";
import "./header.scss";

export default function Header() {
  return (
    <header className='header'>
      <div className='header__headerLeft'>
        <img src={logo} alt='logo'></img>
        <div className='headerLeft__info'>
          <h1>REACT SNEAKERS</h1>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className='header__headerRight'>
        <li>
          <Basket />
          <span>1250 руб.</span>
        </li>
        <li>
          <Likes />
        </li>
        <li>
          <User />
        </li>
      </ul>
    </header>
  );
}
