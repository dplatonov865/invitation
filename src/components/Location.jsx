import React from 'react';
// import photo from '../images/lion.png'

function Location() {
  const handleDirectionsClick = () => {
    window.open('https://yandex.ru/maps/org/lion/1044741937/?indoorLevel=1&ll=37.796924%2C55.745495&z=19.32');
  };

  return (
    <section className="location">
      <h2>Банкет</h2>
      <div className="venue">
        <h3>Ресторан «Lion»</h3>
        <p>Адрес: ул. Перовская, д. 61/2с1</p>
        <p>Начало в 15:00</p>
        {/* <img src={photo} alt={`Фото ресторана`} />  */}
      </div>
      <div className="location-buttons">
        <button 
          className="direction-button"
          onClick={handleDirectionsClick}
        >
          📍 Получить маршрут
        </button>
      </div>
    </section>
  );
}

export default Location;