import React from 'react';
import photo1 from '../images/Kuskovo1.png'
import photo2 from '../images/Kuskovo2.png'
import photo3 from '../images/Kuskovo3.png'
import photo4 from '../images/Kuskovo4.png'
import photo5 from '../images/Kuskovo5.png'
import photo6 from '../images/Kuskovo6.png'
import photo7 from '../images/Kuskovo7.png'
import photo8 from '../images/Kuskovo8.png'

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];

function Gallery() {
  return (
    <section className="gallery">
      <h1>Прогулка в Кусково</h1>
      <h2>После церемонии регистрации состоится прогулка по музею-усадьбе Кусково. Прекрасная атмосфера и живописные виды вам гарантированы</h2>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div key={index} className="photo-item">
            <img src={photo} alt={`Фото ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;