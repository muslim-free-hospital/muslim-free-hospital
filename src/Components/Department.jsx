export default function Department() {
  return (
    <>
      <div className="department_area section-padding2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle text-center mb-100">
                <span>Our Departments</span>
                <h2>Our Medical Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="depart_ment_tab mb-30">
                <ul className="nav" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      <i className="flaticon-teeth"></i>
                      <h4>Dentistry</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      <i className="flaticon-cardiovascular"></i>
                      <h4>Cardiology</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="contact-tab"
                      data-toggle="tab"
                      href="#contact"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      <i className="flaticon-ear"></i>
                      <h4>ENT Specialists</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="Astrology-tab"
                      data-toggle="tab"
                      href="#Astrology"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      <i className="flaticon-bone"></i>
                      <h4>Astrology</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="Neuroanatomy-tab"
                      data-toggle="tab"
                      href="#Neuroanatomy"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      <i className="flaticon-lung"></i>
                      <h4>Neuroanatomy</h4>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="Blood-tab"
                      data-toggle="tab"
                      href="#Blood"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      <i className="flaticon-cell"></i>
                      <h4>Blood Screening</h4>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="dept_main_info white-bg">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-7">
                    <div className="dept_info">
                      <h3>
                        Dentist with surgical mask holding <br /> scaler near
                        patient
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.{" "}
                      </p>
                      <a href="#" className="dep-btn">
                        Appointment<i className="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="dept_thumb">
                      <img src="/img/gallery/department_man.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-7">
                    <div className="dept_info">
                      <h3>
                        Dentist with surgical mask holding <br /> scaler near
                        patient
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.{" "}
                      </p>
                      <a href="#" className="dep-btn">
                        Appointment<i className="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="dept_thumb">
                      <img src="/img/gallery/department_man.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-7">
                    <div className="dept_info">
                      <h3>
                        Dentist with surgical mask holding <br /> scaler near
                        patient
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.{" "}
                      </p>
                      <a href="#" className="dep-btn">
                        Appointment<i className="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="dept_thumb">
                      <img src="/img/gallery/department_man.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="Astrology"
                role="tabpanel"
                aria-labelledby="Astrology-tab"
              >
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-7">
                    <div className="dept_info">
                      <h3>
                        Dentist with surgical mask holding <br /> scaler near
                        patient
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.{" "}
                      </p>
                      <a href="#" className="dep-btn">
                        Appointment<i className="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="dept_thumb">
                      <img src="/img/gallery/department_man.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="Neuroanatomy"
                role="tabpanel"
                aria-labelledby="Neuroanatomy-tab"
              >
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-7">
                    <div className="dept_info">
                      <h3>
                        Dentist with surgical mask holding <br /> scaler near
                        patient
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.{" "}
                      </p>
                      <a href="#" className="dep-btn">
                        Appointment<i className="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="dept_thumb">
                      <img src="/img/gallery/department_man.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="Blood"
                role="tabpanel"
                aria-labelledby="Blood-tab"
              >
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-7">
                    <div className="dept_info">
                      <h3>
                        Dentist with surgical mask holding <br /> scaler near
                        patient
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.{" "}
                      </p>
                      <a href="#" className="dep-btn">
                        Appointment<i className="ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="dept_thumb">
                      <img src="/img/gallery/department_man.png" alt="" />
                    </div>
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
