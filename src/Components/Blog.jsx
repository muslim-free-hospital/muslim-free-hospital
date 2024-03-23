import { useFetchArticlesQuery } from "../store";

export default function Blog() {
  const { data } = useFetchArticlesQuery();
  // get only 3 articles
  const threeArticles = data && data.records.slice(0, 3);
  if (!threeArticles) return null;
  else console.log(threeArticles);
  function articlesMapper(articles) {
    return articles.map((article) => {
      return (
        <div key={article.title} className="col-xl-4 col-lg-4 col-md-6">
          <div className="single-blogs mb-30">
            <div className="blog-img">
              <img src={article.photo_url} alt="" />
            </div>
            <div className="blogs-cap">
              <div className="date-info">
                <span>{article.title}</span>
                <p>{article.description}</p>
              </div>
              <h4>
                <a href="blog_details.html">{article.title}</a>
              </h4>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <div className="home_blog-area section-padding30">
        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="cl-xl-7 col-lg-8 col-md-10">
              <div className="section-tittle text-center mb-70">
                <span>Oure recent news</span>
                <h2>OurNews From Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {threeArticles && articlesMapper(threeArticles)}
          </div>
        </div>
      </div>
    </>
  );
}
