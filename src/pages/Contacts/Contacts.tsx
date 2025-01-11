import "./Contacts.scss";

export const Contacts = () => {
  document.title = `Контакты | PLATUM`;

  return (
    <div className="Contacts">
      <h1>Контакты</h1>

      <div className="contactList">
        <div className="item">
          <h2>Адрес</h2>
          <p>Россия, 443081, г. Самара, ул. Губанова, д. 3</p>
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
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A9e731a9076708d832173fcdef673d9aea3eedf7250100137d00d6685a90fd05c&amp;source=constructor"
        ></iframe>
      </section>
    </div>
  );
};
