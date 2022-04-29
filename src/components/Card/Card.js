import "./card.scss";
import sneakers from "../../assets/images/sneakers.png";
import { Add, Like } from "../../assets/images/Icons";
export default function Card() {
  return (
    <div className='card'>
      <button className='card__btnLike'>
        <Like />
      </button>
      <img className='card__photo' alt='sneakers' src={sneakers}></img>
      <p className='card__title'>
        Мужские Кроссовки <br /> Nike Blazer Mid Suede
      </p>
      <div className='card__wrapperPriceAndButton'>
        <div className='wrapperPrice'>
          <p>ЦЕНА:</p>
          <h2>12999 руб.</h2>
        </div>
        <button className='buttonAdd'>
          <Add />
        </button>
      </div>
    </div>
  );
}
