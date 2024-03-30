import { useParams } from "react-router-dom";
import { useFindArticleByIdQuery } from "../store";
import { ShimmerPostDetails } from "react-shimmer-effects";

export const BlogDetailPage = () => {
  const { id } = useParams();
  const { data } = useFindArticleByIdQuery(id);
  if (!data) return <ShimmerPostDetails />;

  return (
    <>
      <section className="blog_area single-post-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <div className="single-post">
                <div className="feature-img">
                  <img
                    className="img-fluid w-100"
                    src={data.photo_url}
                    alt=""
                  />
                </div>
                <div className="blog_details">
                  <h2 style={{ color: "#2d2d2d" }}>{data.title}</h2>
                  <ul className="blog-info-link mt-3 mb-4">
                    <li>
                      <i className="fa fa-solid fa-hashtag"></i> {data.tag}
                    </li>
                  </ul>
                  <p className="excert">{data.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
