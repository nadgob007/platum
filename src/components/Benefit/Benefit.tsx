import worker from "../../assets/icons/worker.png";
import tube from "../../assets/icons/tube.png";
import tube2 from "../../assets/icons/tube2.png";
import rig from "../../assets/icons/rig.png";
import drop from "../../assets/icons/drop.png";
import car from "../../assets/icons/car.png";

import "./Benefit.scss";

export interface BenefitProps {
  benefit: Benefit;
}

export interface Benefit {
  srcImg: string;
  alt: string;
  description: string;
}

export const Benefit = (props: BenefitProps) => {
  const { benefit } = props;
  return (
    <div className="Benefit">
      <img src={benefit.srcImg} alt={benefit.alt}></img>
      <p>{benefit.description}</p>
    </div>
  );
};

export const BENEFITS: Benefit[] = [
  {
    srcImg: worker,
    alt: "рабочий",
    description: "Бесподходный метод",
  },
  {
    srcImg: tube,
    alt: "пробирка",
    description: ` Энергетическая способность состава при его разложении составляет
              от 2х до 6 МДж/кг`,
  },
  {
    srcImg: tube2,
    alt: "круглая пробирка",
    description: "Органические компоненты состава",
  },
  {
    srcImg: rig,
    alt: "вышка",
    description: "Отсутствует выделение газа",
  },
  {
    srcImg: car,
    alt: "машина",
    description: "Нет необходимости в откачке продуктов реакции",
  },
  {
    srcImg: drop,
    alt: "капля",
    description: "Не обводняет пласт",
  },
];
