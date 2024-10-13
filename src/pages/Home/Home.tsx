import "./Home.scss";

import CarouselBox from "../../components/CarouselBox/CarouselBox";

import blueSquer from "../../assets/images/rig-at-dawn.jpg";
import stones from "../../assets/images/stones.jpg";
import { ReactComponent as Wave } from "../../assets/images/wave.svg";
import trucks from "../../assets/images/trucks.jpg";
import { Article, PAPERS } from "../../components/Article/Article";
import { useInView } from "react-intersection-observer";

export const Home = () => {
  document.title = `Главная | PLATUM`
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className="Home">
      <CarouselBox />

      <section className="wrap-Technology">
        <div className="wave-Technology">
          <Wave />
        </div>
        <div className="newTechnology">
          <h1>Новые технологии и услуги</h1>
          <p>
            Наши научно-технические разработки позволяют нефтедобывающим
            компаниям получать значительно более доступные и одновременно более
            эффективные методы решения проблем для повышения эффективности
            добычи за счет применения соответствующих технологий.
          </p>
        </div>
      </section>

      <section className="window">
        <div className="banner1 inView">
          <img src={stones} alt="камни"></img>
        </div>
      </section>

      <section className="wrap">
        <div className="oilRecovery">
          <>
            <div className="oilRecovery-text">
              <h2>Увеличение нефтеотдачи</h2>
              <h1>ТХВ РС</h1>
              <p>
                Термохимическое воздействие на пласт разработанным разогревающим
                составом как способ увеличения нефтеотдачи пластов с
                трудноизвлекаемыми запасами.
              </p>
              <button>Подробнее</button>
            </div>
          </>
          <>
            <div className="oilRecovery-img">
              <img src={blueSquer} alt="модель увеличения теплоотдачи" />
            </div>
          </>
        </div>
      </section>

      <section className="trucks">
        <img src={trucks} alt="Грузовики"></img>
      </section>

      <section className="articles">
        <h1>Научные статьи и публикации</h1>
        <hr style={{ height: "5px", width: "31px" }} />

        <div className="articles-content">
          {PAPERS.map((item, index) => (
            <Article key={index} article={item} />
          ))}
        </div>
      </section>
    </div>
  );
};
