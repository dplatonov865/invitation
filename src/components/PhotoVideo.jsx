import React from 'react';

function PhotoVideo() {
  const handleDirectionsClick = () => {
    window.open('https://t.me/photographiisosvadba');
  };

  return (
    <section className="location">
      <h1>Дорогие гости!</h1>
      <div className="venue">
        <h3>Фотографии с торжества вы сможете скачать на нашем телеграм-канале</h3>
        <h2>⬇️⬇️⬇️</h2>
      </div>
      <div className="location-buttons">
        <button
          className="direction-button"
          onClick={handleDirectionsClick}
        >
          Перейти в телеграм-канал
        </button>
      </div>
    </section>
  );
}

export default PhotoVideo;