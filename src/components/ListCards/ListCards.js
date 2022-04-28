import Card from "../Card/Card";
import "./listCard.scss";

export default function ListCards() {
  return (
    <div className='ListCards'>
      <div className='wrapperTitleAndSearch'>
        <h2 className='wrapperTitleAndSearch__title'>Все кроссовки</h2>
        <input
          className='wrapperTitleAndSearch__search'
          type='search'
          placeholder='Поиск...'
        ></input>
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
