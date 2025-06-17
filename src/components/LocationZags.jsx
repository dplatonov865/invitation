import React from 'react';
//import photo from '../images/zags.png'

function LocationZags() {
  const handleDirectionsClick = () => {
    window.open('https://yandex.ru/maps/org/dvorets_brakosochetaniya_5/1069097242/?ll=37.749148%2C55.794462&z=17.1');
  };

  return (
    <section className="location">
      <h1>Регистрация брака</h1>
      <div className="venue">
        <h2>Торжественная церемония во Дворце бракосочетания № 5</h2>
        <h3>Начало в 11:00</h3>
        <h3>Адрес: Измайловское ш., д. 73Ж</h3>
        {/* <img src={photo} alt={`Фото ЗАГСа`} /> */}
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

export default LocationZags;