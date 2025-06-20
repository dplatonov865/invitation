import React from 'react';
import datePhoto from '../images/date.jpg'
import photo from '../images/photo.png'

function Header() {
  return (
    <header className="header">
      <h1>Мы рады пригласить Вас на нашу свадьбу! </h1>
      <div className="date">
          <h1>16 августа 2025</h1>
{/*       <img src={datePhoto} alt={`Фото c датой`} className="header-image"/> */}
      </div>
      <h1>Дмитрий и Анастасия</h1>
      <img src={photo} alt={`Фото c голубями`} className="header-photo"/>
    </header>
  );
}

export default Header;