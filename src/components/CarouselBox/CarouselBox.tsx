import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import OilRig1 from '../../assets/images/oil_rig1.jpg'
import OilRig2 from '../../assets/images/oil_rig2.png'
import OilRig3 from '../../assets/images/oil_rig3.png'
// import derrick from '../../assets/derrick.jpg'
import './CarouselBox.scss'

export default class CarouselBox extends Component {
    render(){
        return(<div className='CarouselBox'>
                <div className='carousel-title'>
                    <h1>Нефтесервисная компания</h1>
                    <p>
                        Высокотехнологичная нефтесервисная компания, разработчик и 
                        интегратор передовых термохимических методов  увеличения 
                        нефтеотдачи пластов
                    </p>
                </div>
                <Carousel style={{height: 587}}>
                    <Carousel.Item >
                        <img
                            src={ OilRig1 }
                            alt="Нефтяная вышка1"
                        />
                        <Carousel.Caption>
                            <h3>Вышка Нефтяная 1</h3>
                            <p>Первая вышка</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item >
                        <img
                            src={ OilRig2 }
                            alt="Нефтяная вышка2"
                        />
                        <Carousel.Caption>
                            <h3>Вышка Нефтяная 2</h3>
                            <p>Вторая вышка</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item >
                        <img
                            src={ OilRig3 }
                            alt="Нефтяная вышка3"
                        />
                        <Carousel.Caption>
                            <h3>Вышка Нефтяная 2</h3>
                            <p>Вторая вышка</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}