import { NavLink } from "react-router-dom";
import qrCode from "../../assets/images/qr-code.png";
import logoPlatumBlack from "../../assets/images/logo-platum-black.png";
import logoFasie from "../../assets/images/footer_logo_fasie.png";
import { ContactUs } from "../ContactUs/ContactUs";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="columns">
        <div className="navigation">
          <div className="siteSections">
            <h2>Разделы сайта</h2>
            <div className="sections">
              <NavLink className="nav-link" to="/">
                Главная
              </NavLink>
              <NavLink className="nav-link" to="/ProductCatalog">
                Технология ТХВ РС
              </NavLink>
              <NavLink className="nav-link" to="/contacts">
                Контакты
              </NavLink>
              <NavLink className="nav-link" to="/about">
                О нас
              </NavLink>
            </div>
          </div>

          <div className="contacts">
            <h2>Контактная информация</h2>
            <p>
              Адрес: Россия, 443081, г. Самара, улица Губанова, дом 3
            </p>
            <p>Почта: info@pla2m.ru</p>
            <p>
              Номер телефона: <a href="tel:+78469720222">8 (846) 972-02-22</a>
            </p>
          </div>
        </div>
        <ContactUs />
        <div className="addUs">
          <h2>Добавьте нас в контакты</h2>
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
            <p className="blue">
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
