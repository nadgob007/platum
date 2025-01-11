import "./Article.scss";
import { ReactComponent as PdfIcon } from "../../assets/icons/pdf_icon.svg";
import paper1 from "../../assets/images/paper1.webp";
import paper2 from "../../assets/images/paper2.jpg";

export interface ArticleProps {
  article: Article;
}

export interface Article {
  srcImg: string;
  alt: string;
  text: string;
  ref?: string;
}

export const Article = (props: ArticleProps) => {
  const { article } = props;
  return (
    <div className="Article">
      <img className="paper" src={article.srcImg} alt={article.alt} />
      <div className="detail">
        <a className="download" href={article.ref} download>
          <PdfIcon />
        </a>
        <div className="description">{article.text}</div>
      </div>
    </div>
  );
};

export const PAPERS: Article[] = [
  {
    srcImg: paper1,
    alt: "Статья",
    text: "Технология термохимического воздействия на пласт разогревающим составом для стимулирования добычи высоковязкой нефти и природного битума",
    ref: "./paper.pdf",
  },
  {
    srcImg: paper2,
    alt: "Презентация",
    text: "Термохимическое воздействие на пласт разработанным разогревающим составом как способ увеличения нефтеотдачи пластов с трудноизвлекаемыми запасами.",
    ref: "./presentation.pdf",
  },
];
