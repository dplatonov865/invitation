import React from 'react';
// import photo from '../images/lion.png'

function Location() {
  const handleDirectionsClick = () => {
    window.open('https://yandex.ru/maps/org/lion/1044741937/?indoorLevel=1&ll=37.796924%2C55.745495&z=19.32');
  };

  return (
    <section className="location">
      <h1>Банкет</h1>
      <div className="venue">
        <h2>Ресторан «Lion»</h2>
        <h3>Начало в 15:00</h3>
        <h3>Адрес: ул. Перовская, д. 61/2с1</h3>
      </div>
      <div className="location-buttons">
        <button 
          className="direction-button"
          onClick={handleDirectionsClick}
        >
          📍 Посмотреть на карте
        </button>
      </div>
    </section>
  );
}

export default Location;