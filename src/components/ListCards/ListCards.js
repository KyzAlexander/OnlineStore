import Card from "../Card/Card";

export default function ListCards() {
  return (
    <div className='ListCards'>
      <div className='wrapperTitleAndSearch'>
        <h2 className='wrapperTitleAndSearch__title'>Все кроссовки</h2>
        <input className='wrapperTitleAndSearch__search'></input>
      </div>
      <div className='list'>
        <Card />
      </div>
    </div>
  );
}
