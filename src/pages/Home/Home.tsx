import "./Home.scss";

import CarouselBox from "../../components/CarouselBox/CarouselBox";

import blueSquer from "../../assets/images/rig-at-dawn.jpg";
import stones from "../../assets/images/stones.jpg";
import trucks from "../../assets/images/trucks.jpg";
import { ReactComponent as Wave } from "../../assets/images/wave.svg";
import { Article, PAPERS } from "../../components/Article";

export const Home = () => {
  document.title = `Главная | PLATUM`;

  return (
    <div className="Home">
      <CarouselBox />

      <section className="Technology">
        <div className="Technology__wave">
          <Wave />
        </div>
        <div className="Technology__text">
          <h1>Новые технологии и услуги</h1>
          <p>
            Наши научно-технические разработки позволяют нефтедобывающим
            компаниям получать значительно более доступные и одновременно более
            эффективные методы решения проблем для повышения эффективности
            добычи за счет применения соответствующих технологий.
          </p>
        </div>
      </section>

      <div className="divider-scroll-img">
        <div className="banner banner-inView">
          <img src={stones} alt="камни"></img>
        </div>
      </div>

      <section className="OilRecovery">
        <div className="OilRecovery__text">
          <h2>Увеличение нефтеотдачи</h2>
          <h1>ТХВ РС</h1>
          <p>
            Термохимическое воздействие на пласт разработанным разогревающим
            составом как способ увеличения нефтеотдачи пластов с
            трудноизвлекаемыми запасами.
          </p>
          <button>Подробнее</button>
        </div>
        <div className="OilRecovery__img">
          <img src={blueSquer} alt="модель увеличения теплоотдачи" />
        </div>
      </section>

      <div className="trucks">
        <img src={trucks} alt="Грузовики"></img>
      </div>

      <section className="Articles">
        <h1>Научные статьи и публикации</h1>
        <hr className="grey-line" />

        <div className="Articles__list">
          {PAPERS.map((item, index) => (
            <Article key={index} article={item} />
          ))}
        </div>
      </section>
    </div>
  );
};
