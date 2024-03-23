import { ShimmerCategoryList } from "react-shimmer-effects";
import ArticleListItem from "../Components/ArticleListItem";
import { useFetchArticlesQuery } from "../store";

export default function BlogPage() {
  const { data } = useFetchArticlesQuery();
  if (!data)
    return <ShimmerCategoryList title items={6} categoryStyle="STYLE_TWO" />;

  function paginate(records, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const totalPages = Math.ceil(records.length / pageSize);
    const currentPage = Math.min(Math.max(1, pageNumber), totalPages); // Ensure current page is within valid range

    return {
      currentPage,
      totalPages,
      data: records.slice(startIndex, endIndex),
    };
  }

  const paginationResult = paginate(data.records, 1, 5);

  return (
    <main>
      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                {paginationResult.data.map((article) => (
                  <ArticleListItem key={article.title} article={article} />
                ))}
                <nav className="blog-pagination justify-content-center d-flex">
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Previous">
                        <i className="ti-angle-left"></i>
                      </a>
                    </li>
                    {[...Array(paginationResult.totalPages).keys()].map(
                      (number) => (
                        (number = number + 1),
                        (
                          <li
                            key={number}
                            className={`page-item ${
                              paginationResult.currentPage === number
                                ? "active"
                                : ""
                            }`}
                          >
                            <a
                              href="#"
                              className="page-link"
                              onClick={() => {
                                paginate(data.records, number, 5);
                              }}
                            >
                              {number}
                            </a>
                          </li>
                        )
                      )
                    )}
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Next">
                        <i className="ti-angle-right"></i>
                      </a>
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
                  <ul className="list cat-list">
                    <li>
                      <a href="#" className="d-flex">
                        <p>Resaurant food</p>
                        <p>(37)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Travel news</p>
                        <p>(10)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Modern technology</p>
                        <p>(03)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Product</p>
                        <p>(11)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Inspiration</p>
                        <p>21</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Health Care (21)</p>
                        <p>09</p>
                      </a>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
