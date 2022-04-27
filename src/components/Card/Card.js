import "./card.scss";
import sneakers from "../../assets/images/sneakers.png";
import { Add, Like } from "../../assets/images/Icons";
export default function Card() {
  return (
    <div className='card'>
      <Like />
      <img className='card__photo' alt='sneakers' src={sneakers}></img>
      <p className='card__title'>
        Мужские Кроссовки <br /> Nike Blazer Mid Suede
      </p>
      <div className='wrapperPriceAndButton'>
        <div className='wrapperPrice'>
          <p>ЦЕНА:</p>
          <h2>12999 руб.</h2>
        </div>
        <button className='button'>
          <Add />
        </button>
      </div>
    </div>
  );
}
