import "./Contacts.scss";

export const Contacts = () => {
  document.title = `Контакты | PLATUM`

  return (
    <div className="Contacts">
      <h1>Контакты</h1>

      <div className="contactList">
        <div className="item">
          <h2>Адрес</h2>
          <p>
            Россия, 443081, г. Самара, ул. Советской армии, дом 185, офис 23
          </p>
        </div>
        <div className="item">
          <h2>Телефон</h2>
          <p>+7 (846) 972-02-22</p>
        </div>
        <div className="item">
          <h2>Почта</h2>
          <p>info@pla2m.ru</p>
        </div>
        <div className="item">
          <h2>Время работы</h2>
          <p>Понедельник - Пятница 9:00 – 18:00</p>
        </div>
      </div>

      <section className="map">
        <iframe
          title="Map"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Acd5ef7248575fff897b57ce8dd91e4017421ab0c099984874e8f311c7dfbaa29&amp;source=constructor"
          width="100%"
          height="300"
          style={{filter: 'grayscale(100%)'}}
        ></iframe>
      </section>
    </div>
  );
};
