export default function Navbar() {
  return (
    <header>
      <div className="header-area">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-1">
                <div className="logo">
                  <a href="index.html">
                    <img src="/img/logo/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-10">
                <div className="menu-main d-flex align-items-center justify-content-end">
                  <div className="main-menu f-right d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="doctor.html">Doctors</a>
                        </li>
                        <li>
                          <a href="department.html">Department</a>
                        </li>
                        <li>
                          <a href="blog.html">Blog</a>
                          <ul className="submenu">
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="blog_details.html">Blog Details</a>
                            </li>
                            <li>
                              <a href="elements.html">Element</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-right-btn f-right d-none d-lg-block ml-30">
                    <a href="#" className="btn header-btn">
                      01654.066.456
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
