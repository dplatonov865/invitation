import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Countdown from './Countdown';
import LocationZags from './LocationZags';
import Location from './Location';
import Gallery from './Gallery';
import '../styles.css';

const guests = {
 '98b429c7-1bcc-4564-a5ff-7d6af398c154': 'Дорогая Татьяна Викторовна',
 'ba395a17-8c8c-4ac2-8241-c98d9aa4e3f7': 'Дорогие Наталья Леонидовна и Александр Валериевич',
 'c8d87a05-53cd-49a7-ac5a-41064c91379f': 'Дорогие Мария и Артём',
 'f11fbd4b-3ace-48a1-9e7f-b0569b6d6ffb': 'Дорогие Марианна и Глеб',
 'e6e97916-6a94-480e-ac26-7658d6dc8e33': 'Дорогая Елена Викторовна',
 '8e92f32e-ad40-4c87-9634-7e8c3455075e': 'Дорогая Алла Евгеньевна',
 '0a19454b-1c48-4559-a0c8-57a58d1a65a2': 'Дорогие Наталия, Анна, Илья и Иван',
 '35b5385d-54e9-414b-b8d2-8d9ba37298cd': 'Дорогая Надежда Афанасьевна',
 '680f54e0-7013-4c25-80d1-7ed7ca79f7ad': 'Дорогая Нина Афанасьевна',
 '4bbd434d-2b3a-489e-b81e-a77fcb359fbb': 'Дорогая Галина Алексеевна',
 'ca29bf17-fcb6-4264-918c-cd90653b8620': 'Дорогие Любовь и Полина',
 'c9e24204-4c8e-4f1c-886f-6dd7c7d16699': 'Дорогие Светлана и Дмитрий',
 '479f8f59-5545-450c-806d-0d9070bc8837': 'Дорогие Андрей и Лида',
 'b5feeaa0-46cd-4315-9633-f4472781dea8': 'Дорогие Серёжа, Юлия и Фёдор',
 'cf637c8a-57af-40a4-b590-aaffa843ccee': 'Дорогие Алёна Леонидовна и Сергей Константинович',
 '80950936-e225-4f00-aee1-57d40997a19a': 'Дорогие Фёдор Юрьевич и Наталья Николаевна',
 'ff0b67be-0619-4c36-b79e-089d173d7419': 'Дорогие Анна и Михаил',
 'f4fc2c67-f242-4ebb-bfae-9149e4f7961b': 'Дорогая Арина',
 'de135f92-fbca-485a-bc9b-e7bbaad14ec9': 'Дорогие Виталий Васильевич и Виктория Анатольевна',
 '4666a0c1-62a4-4373-b2d2-193d5f2f2a4f': 'Дорогие Алексей Фёдорович, Галина Николаевна и Андрей',
 '9b650a80-8195-463b-8934-82f004875f0b': 'Дорогая Виктория',
 'd6dc29c9-512f-463c-9eb1-a0408b058607': 'Дорогая Татьяна Васильевна'};

function Invitation() {
  const { guestName } = useParams();
  const decodedGuestName = decodeURIComponent(guestName).toString();
  const guest = guests[decodedGuestName];

  if (!guest) {
    return (
      <div className='invitation'>
        <h2>Ошибка!</h2>
        <h2>Извините, мы отправили вам неправильную ссылку, напишите нам, мы отправим её заново!</h2>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="guest-name">
        <h1> {guest}</h1>
      </div>
      <Header />
      <main>
        <LocationZags />
        <Gallery />
        <Location />
        <Countdown />
      </main>
      <footer>
        <h3>Мы ждём вас на нашем празднике!</h3>
      </footer>
    </div>
  );
}
  
export default Invitation;