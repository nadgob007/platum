import './Home.scss'

import CarouselBox from '../../components/CarouselBox/CarouselBox'

import blueSquer from '../../assets/images/blue-squer.png'
import stones from '../../assets/images/stones.jpg'
import worker from '../../assets/images/worker.jpg'
import { ReactComponent as Wave }from '../../assets/images/wave.svg'
import trucks from '../../assets/images/trucks.jpg'
import { Article, PAPERS } from '../../components/Article/Article'
import { useInView } from 'react-intersection-observer'
import React from 'react'

export const Home = ( ) => {
    const {ref, inView }= useInView({
        threshold: 0,
    });

    return <div className="Home">
        <CarouselBox />

        <section className='wrap-Technology'>
            <div className='wave-Technology'>
                <Wave/>
            </div>
            <div className='newTechnology'>
               
                <h1>Новые технологии и услуги</h1>
                <p>
                    Наши научно-технические разработки позволяют 
                    нефтедобывающим компаниям получать значительно 
                    более доступные и одновременно более эффективные 
                    методы решения проблем для повышения эффективности 
                    добычи за счет применения соответствующих технологий.
                </p>
            </div>
        </section>

        <section className='window'>
            <div className='banner1 inView'>
                <img src={stones} alt='камни'></img>
            </div>
        </section>

        <section  className='wrap'>
            <div className='oilRecovery'>
                <>
                    <div className='oilRecovery-text'>
                        <h2>Увеличение нефтеотдачи</h2>
                        <h1>ТХВ РС</h1>
                        <p>
                            Термохимическое воздействие на пласт разработанным 
                            разогревающим составом как способ увеличения нефтеотдачи 
                            пластов с  трудноизвлекаемыми запасами.
                        </p>
                        <button>Подробнее</button>
                    </div>
                </>
                <>
                    <div className='oilRecovery-img'>
                        <img src={blueSquer} alt='модель увеличения теплоотдачи' />
                    </div>
                </>
            </div>
        </section>

        <section className='trucks'>
            <img src={trucks} alt='Грузовики'></img>
        </section>

        <section className='articles'>
            <h1>Научные статьи и публикации</h1>
            <hr style={{height: '5px', width: '31px'}}/>
            
            <div className='articles-content'>
                {PAPERS.map((item)=> <Article article={item} />)}
            </div>
            
        </section>

        <section ref={ref} className='window'>
            <div className={`banner2 ${inView ? 'inView' : ''}`}>
                {inView && <img src={worker} alt='рабочий'></img>}
            </div>
        </section>

        <section className='map'>
            <iframe 
                title='Map'
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Acd5ef7248575fff897b57ce8dd91e4017421ab0c099984874e8f311c7dfbaa29&amp;source=constructor" 
                width="100%" 
                height="300">
            </iframe>
        </section>

    </div>
}