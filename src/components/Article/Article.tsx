import './Article.scss'
import pdfIcon from '../../assets/images/pdfIcon.png'
import paper1 from '../../assets/images/paper_1_NGN_4_2021.png'
import paper2 from '../../assets/images/paper_2_NGN_12_2021.png'
import paper3 from '../../assets/images/paper_3_NGN_03_2022.png'

export interface ArticleProps {
    article: Article
}

export interface Article {
    srcImg: string
    alt: string
    text: string
}

export const Article = (props: ArticleProps) => {
    const {article} = props
    return  <div className='Article'>
        <img className='paper' src={article.srcImg} alt={article.alt}/>
        <div className='detail'>
            <div className='download'>
                <img src={pdfIcon}/>
            </div>
            <div className='description'>
                {article.text}
            </div>
        </div>
    </div>
}

export const PAPERS: Article[] = [
    {
        srcImg: paper1,
        alt: '',
        text: 'Технология мониторинга интервалов прорыва газа и воды с помощью хромато-десорбционных систем: результаты проведе-ния ОПР на месторождении им Ю. Корчагина'
    },
    {
        srcImg: paper2,
        alt: '',
        text: 'Использование хромато-десорбционных систем для определения интервалов прорыва воды и газа при разработке нефтяных оторочек'
    },
    {
        srcImg: paper3,
        alt: '',
        text: 'Сопоставление результатов исследования работы горизонтальной скважины, полученных с помощью комплекса ПГИ и постоянного мониторинга с помощью хромато- десорбционных систем'
    }
]

