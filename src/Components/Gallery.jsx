export default function galler() {
  return (
    <>
      <div className="gallery-area section-padding30">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-tittle text-center mb-100">
                <span>Our Gellary</span>
                <h2 style={{color: "white"}}>Our Medical Camp</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="single-gallery mb-30">
                    <div
                      className="gallery-img big-img"
                      style={{backgroundImage: `url("/img/gallery/gallery1.png")`}}
                    ></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-gallery mb-30">
                    <div
                      className="gallery-img small-img"
                      style={{backgroundImage: `url("/img/gallery/gallery2.png")`}}
                    ></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-gallery mb-30">
                    <div
                      className="gallery-img small-img"
                      style={{backgroundImage: `url("/img/gallery/gallery3.png")`}}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-gallery mb-30">
                    <div
                      className="gallery-img small-img"
                      style={{backgroundImage: `url("/img/gallery/gallery4.png")`}}
                    ></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-gallery mb-30">
                    <div
                      className="gallery-img small-img"
                      style={{backgroundImage: `url("/img/gallery/gallery5.png")`}}
                    ></div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="single-gallery mb-30">
                    <div
                      className="gallery-img big-img"
                      style={{backgroundImage: `url("/img/gallery/gallery6.png")`}}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
