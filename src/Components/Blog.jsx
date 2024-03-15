export default function Blog() {
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
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="single-blogs mb-30">
                <div className="blog-img">
                  <img src="/img/gallery/blog1.png" alt="" />
                </div>
                <div className="blogs-cap">
                  <div className="date-info">
                    <span>Health</span>
                    <p>Nov 30, 2020</p>
                  </div>
                  <h4>
                    <a href="blog_details.html">
                      Amazing Places To Visit In Summer
                    </a>
                  </h4>
                  <a href="blog_details.html" className="read-more1">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="single-blogs mb-30">
                <div className="blog-img">
                  <img src="/img/gallery/blog2.png" alt="" />
                </div>
                <div className="blogs-cap">
                  <div className="date-info">
                    <span>Checkup</span>
                    <p>Nov 30, 2020</p>
                  </div>
                  <h4>
                    <a href="blog_details.html">
                      Developing Creativithout Losing Visual
                    </a>
                  </h4>
                  <a href="blog_details.html" className="read-more1">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="single-blogs mb-30">
                <div className="blog-img">
                  <img src="/img/gallery/blog3.png" alt="" />
                </div>
                <div className="blogs-cap">
                  <div className="date-info">
                    <span>Operation</span>
                    <p>Nov 30, 2020</p>
                  </div>
                  <h4>
                    <a href="blog_details.html">
                      Winter Photography Tips from Glenn
                    </a>
                  </h4>
                  <a href="blog_details.html" className="read-more1">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
