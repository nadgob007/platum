import { NavLink } from "react-router-dom";
import qrCode from "../../assets/images/qr-code.png";
import logoPlatumBlack from "../../assets/images/logo-platum-black.png";
import logoFasie from "../../assets/images/footer_logo_fasie.png";
import "./Footer.scss";
import { useState } from "react";

export const Footer = () => {
  const [send, setSend] = useState(false);

  return (
    <footer className="Footer">
      <div className="detail">
        <div className="column1">
          <div className="siteSections">
            <h2 className="title">Разделы сайта</h2>
            <div className="sections">
              <NavLink className="nav-link" to="/">
                {" "}
                Главная{" "}
              </NavLink>
              <NavLink className="nav-link" to="/ProductCatalog">
                {" "}
                Технология ТХВ РС{" "}
              </NavLink>
              <NavLink className="nav-link" to="/contacts">
                {" "}
                Контакты{" "}
              </NavLink>
              <NavLink className="nav-link" to="/about">
                {" "}
                О нас{" "}
              </NavLink>
            </div>
          </div>
          <div className="contacts">
            <h2 className="title">Контактная информация</h2>
            <p>
              Россия, 443081, г. Самара, улица Советской Армии, дом 185, офис 23
            </p>
            <p>
              <span>Почта: info@pla2m.ru</span>
              <div></div>
              <span>
                Номер телефона: <a href="tel:+78469720222">8 (846) 972-02-22</a>
              </span>
            </p>
          </div>
        </div>
        <div className="contactUs">
          <h2 className="title">Связаться с нами</h2>
          <form className="contactUs-form">
            <div className="inputs">
              <input placeholder="Имя" />
              <input placeholder="Эл.почта" />
              <input placeholder="Компания" />
              <input placeholder="Телефон" />
            </div>
            <textarea placeholder="Добавьте сообщение..." />
            <button
              onClick={(e) => {
                e.preventDefault();
                setSend(true);
              }}
            >
              <div className="submit-btn">Отправить</div>
            </button>
            {send && <div className="btxt">Отправлено. Спасибо!</div>}
          </form>
        </div>
        <div className="add">
          <h2 className="title">Добавьте нас в контакты</h2>
          <img className="qr-code" src={qrCode} alt="QR-code" />
          <p>
            *чтобы добавить нас в контакты наведите на этот qr-код камеру своего
            смартфона в режиме qr-сканера, либо воспользуйтесь приложением
            qr-сканнер
          </p>
          <div className="cooperation">
            <div className="logos">
              <img src={logoPlatumBlack} alt="Platum" />
              <img src={logoFasie} alt="Fasie" />
            </div>
            <p className="btxt">
              Работа проводится компанией "Платум" при финансовой поддержке
              Фонда содействия инновациям
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">© Платум, Самара, 2021</div>
    </footer>
  );
};
