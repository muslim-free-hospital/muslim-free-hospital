import moment from "moment/moment";
import { Link } from "react-router-dom";
import { Image, Shimmer } from "react-shimmer";

export default function ArticleListItem({ article }) {
  return (
    <>
      <article className="blog_item">
        <div className="blog_item_img">
          <Image
            className="card-img rounded-0"
            src={article.photo_url}
            alt={article.title}
            fallback={<Shimmer width={500} height={370} />}
          />
          <a className="blog_item_date">
            <h3>{moment(article.created_date).format("DD")}</h3>
            <p>{moment(article.created_date).format("MMMM")}</p>
          </a>
        </div>
        <div className="blog_details">
          <Link to={`/articles/${article.id}`}>
            <a className="d-inline-block">
              <h2 className="blog-head" style={{ color: "#2d2d2d" }}>
                {article.title}
              </h2>
            </a>
          </Link>
          <p>{article.description}</p>
          <ul className="blog-info-link">
            <li>
              <Link to={`/article/${article.title}`}>
                <i className="fa fa-solid fa-hashtag"></i> {article.tag}
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
