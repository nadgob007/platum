import "./ProductCatalog.scss";
import TestTube from "../../assets/images/testTube.jpg";

import worker from "../../assets/icons/worker.png";
import tube from "../../assets/icons/tube.png";
import tube2 from "../../assets/icons/tube2.png";
import rig from "../../assets/icons/rig.png";
import drop from "../../assets/icons/drop.png";
import car from "../../assets/icons/car.png";

import oil from "../../assets/images/oil.jpg";

import drops from "../../assets/images/drops.jpg";
import { useInView } from "react-intersection-observer";
import tank from "../../assets/images/tank.jpg";

export const ProductCatalog = () => {
  document.title = `ТХВ РС | PLATUM`;
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className="ProductCatalog">
      <div className="ProductCatalog-header">
        <div className="ProductCatalog-title">
          <h1>Технология ТХВ РС</h1>
          <p>
            Термохимическое воздействие на пласт разогревающим составом для
            увеличения нефтеодачи
          </p>
        </div>
      </div>

      <section className="aboutTechnology">
        <h1>Подробнее о технологии</h1>
        <hr className="grey-line"/>
        <p>
          Технология термохимического воздействия на пласт с использованием
          разогревающего состава представляет собой передовой метод обработки
          призабойной зоны пласта. Этот метод включает в себя последовательную
          закачку в пласт специально разработанного реагента – органического
          кислородосодержащего соединения и инициатора реакции. ​
        </p>
        <p>
          Технология применяется для активации или возобновления работы нефтяных
          скважин с высокой вязкостью нефти, продуктивность которых снижена
          из-за парафино-гидратных и асфальтосмолистых отложений, закупоривающих
          фильтрационные каналы и нарушающих связь скважины с флюидонесущим
          пластом, а также для регулирования процесса разработки и повышения
          нефтеотдачи неоднородных по проницаемости пластов.
        </p>
      </section>

      <div className="divider-scroll-img">
        <div className="banner banner-inView">
          <img src={TestTube} alt="пробирка"></img>
        </div>
      </div>

      <section className="KeyBenefits">
        <h1>Ключевые преимущества</h1>
        <hr className="grey-line" />

        {
          // TODO: Benefit вынести в отдельный компонент
        }
        <div className="Benefits">
          <div className="Benefit">
            <img src={worker} alt="мужчина"></img>
            <p>Бесподходный метод</p>
          </div>
          <div className="Benefit">
            <img src={tube} alt="пробирка"></img>
            <p>
              Энергетическая способность состава при его разложении составляет
              от 2х до 6 МДж/кг
            </p>
          </div>
          <div className="Benefit">
            <img src={tube2} alt="круглая пробирка"></img>
            <p>Органические компоненты состава</p>
          </div>
          <div className="Benefit">
            <img src={rig} alt="вышка"></img>
            <p>Отсутствует выделение газа</p>
          </div>
          <div className="Benefit">
            <img src={car} alt="машина"></img>
            <p>Нет необходимости в откачке продуктов реакции</p>
          </div>
          <div className="Benefit">
            <img src={drop} alt="капля"></img>
            <p>Не обводняет пласт</p>
          </div>
        </div>
      </section>

      <section className="ApplicationArea">
        <h1>Область применения ТХВ РС</h1>
        <hr className="grey-line" />

        <div className="ApplicationArea-title">
          Месторождения высоковязкой и битуминозной нефти, где необходимо:
        </div>

        <div className="areas">
          <div className="left">
            <div className="text">
              <div className="step">1</div>
              <p>
                Проведение работ по активации или возобновлению работы нефтяных
                скважин
              </p>
            </div>
            <div className="text">
              <div className="step">3</div>
              <p>
                Реализация технологии на любом из типов коллектора продуктивного
                пласта месторождения
              </p>
            </div>
          </div>

          <img src={oil} alt={"битуминозная нефть"}></img>

          <div className="right">
            <div className="text">
              <div className="step">2</div>
              <p>
                Регулирование процесса разработки и повышение нефтеотдачи
                неоднородных по проницаемости пластов
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="HeatGenerating">
        <div className="reagent-img">
          {/* <img src={yellowTubeFull} alt="теплогенерирующая композиция" /> */}
        </div>
        <div className="reagent">
          <div className="reagent-title">
            <h2>ТЕПЛОГЕНЕРИРУЮЩАЯ КОМПОЗИЦИЯ</h2>
            <h1>ТХВ РЕАГЕНТ А</h1>
          </div>
          <div className="reagent-text">
            <p>
              ТХВ Реагент А является основным агентом в процессе обработки
              призабойной зоны посредством технологии ТХВ РС. Экзотермическая
              реакция, возникающая при разложении реагента, происходит
              непосредственно в пласте, что обеспечивает максимальную
              эффективность передачи тепла напрямую пластовому флюиду. Это
              способствует значительному снижению вязкости нефти и улучшению
              проницаемости призабойной зоны.
            </p>
            <p>
              Сочетание экологической безопасности, наличия органорастворимых
              компонентов и простоты использования делает ТХВ Реагент А
              оптимальным выбором для обработки нефтяных скважин. Технология
              позволяет осуществлять процесс обработки без привлечения
              дополнительной техники, персонала и бригады КРС, что в конечном
              итоге сокращает энерго- и ресурсозатраты.
            </p>
          </div>
        </div>
      </section>

      <div className="divider-scroll-img" ref={ref}>
        <div className={`banner ${inView ? "banner-inView" : ""}`}>
          {inView && <img src={drops} alt="капли"></img>}
        </div>
      </div>

      <section className="IncreasedOilAmount">
        <img src={tank} alt="нефтянная цистерна" />

        <div className="text-background">
          <div className="text">
            <h1>Повышение нефтеодачи</h1>
            <ul>
              <li>
                Технология ТХВ РС позволяет значительно увеличить дебит нефти по
                одной скважине до 350%, обеспечивая более высокие объемы добычи.
                ​
              </li>
              <li>
                В зависимости от геолого-физических характеристик объекта,
                эффект от применения нашей технологии сохраняется до 1 года,
                обеспечивая стабильную производительность.
              </li>
              <li>
                Возможность комбинировать с другими методами обработки пласта,
                что увеличивает общую эффективность проводимых операций.
              </li>
              <li>
                Наша технология позволяет заменить менее эффективные методы
                обработки пласта, обеспечивая более высокие показатели
                производительности и экономическую эффективность.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="AdditionalMaterials">
        <div className="title">
          <h1>Дополнительные материалы</h1>
          <hr className="grey-line" />
          <p>для ознакомления</p>
        </div>

        <div className="materials">
          <div className="presentation">
            <div className="text">
              <p>
                Термохимическое воздействие на пласт разработанным разогревающим
                составом как способ увеличения нефтеотдачи пластов с
                трудноизвлекаемыми запасами.
              </p>
              <h3>Презентация</h3>
              <a className="download" href={"./presentation.pdf"} download>
                <div className="button-download">Скачать</div>
              </a>
            </div>
          </div>

          <div className="article">
            <div className="text">
              <p>
                Технология термохимического воздействия на пласт разогревающим
                составом для стимулирования добычи высоковязкой нефти и
                природного битума
              </p>
              <h3>Статья</h3>
              <a className="download" href={"./paper.pdf"} download>
                <div className="button-download">Скачать</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
