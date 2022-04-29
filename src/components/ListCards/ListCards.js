import { Search } from "../../assets/images/Icons";
import Card from "../Card/Card";
import "./listCard.scss";

export default function ListCards() {
  return (
    <div className='ListCards'>
      <div className='wrapperTitleAndSearch'>
        <h2 className='wrapperTitleAndSearch__title'>Все кроссовки</h2>
        <div className='wrapperTitleAndSearch__searchBlock'>
          <Search />
          <input
            className='search'
            type='search'
            placeholder='Поиск...'
          ></input>
        </div>
      </div>
      <div className='list'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
