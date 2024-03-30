import { ShimmerCategoryList } from "react-shimmer-effects";
import ArticleListItem from "../Components/ArticleListItem";
import { useFetchArticlesQuery } from "../store";
import { useState } from "react";

export default function BlogPage() {
  const { data } = useFetchArticlesQuery();
  // const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(5); // Number of items per page
  // const [hashtagFilters, setHashtagFilters] = useState([]);
  // const [selectedHashtag, setSelectedHashtag] = useState('');

  if (!data)
    return <ShimmerCategoryList title items={6} categoryStyle="STYLE_TWO" />;

  // Pagination logic
  const offset = currentPage * perPage;
  const pageCount = Math.ceil(data.records.length / perPage);
  const paginatedArticles = data.records.slice(offset, offset + perPage);

  // Handle page change
  const handlePageClick = (selected) => {
    setCurrentPage(selected);
    window.scrollTo(0, 0);
  };

  // Handle hashtag filter change
  // const handleHashtagChange = (e) => {
  //   setSelectedHashtag(e.target.value);
  //   setCurrentPage(0); // Reset page when changing filter
  // };

  return (
    <main>
      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                {paginatedArticles.map((article) => (
                  <ArticleListItem key={article.title} article={article} />
                ))}
                <nav className="blog-pagination justify-content-center d-flex">
                  <ul className="pagination">
                    <li className="page-item">
                      <button
                        onClick={() => handlePageClick(currentPage - 1)}
                        disabled={currentPage === 0}
                        className="page-link"
                        aria-label="Previous"
                      >
                        <i className="ti-angle-left"></i>
                      </button>
                    </li>
                    <li className="page-item">
                      <button className="page-link" aria-label="Next">
                        {currentPage + 1} / {pageCount}
                      </button>
                    </li>
                    <li className="page-item">
                      <button
                        onClick={() => handlePageClick(currentPage + 1)}
                        disabled={currentPage === pageCount - 1}
                        className="page-link"
                        aria-label="Next"
                      >
                        <i className="ti-angle-right"></i>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                  <form action="#">
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Keyword"
                        />
                        <div className="input-group-append">
                          <button className="btns" type="button">
                            <i className="ti-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </aside>
                <aside className="single_sidebar_widget post_category_widget">
                  <h4 className="widget_title" style={{ color: "#2d2d2d" }}>
                    Category
                  </h4>
                  {/* <ul className="list cat-list">
                    {hashtagFilters.map((hashtag) => (  
                      <li>
                        <a href="#" className="d-flex">
                          <p>{hashtag}</p>
                        </a>
                      </li>
                    ))}
                  </ul> */}
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
