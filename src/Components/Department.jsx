import { useState } from "react";
import { services } from "../utils/constant";

export default function Department() {
  const [service, setService] = useState(services.teeth);

  const handleServiceClick = (service) => {
    setService(service);
  };

  return (
    <>
      <div id="services" className="department_area section-padding2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle text-center mb-100">
                <h2>Our Medical Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="depart_ment_tab mb-30">
                <ul className="nav" id="myTab" role="tablist">
                  {Object.entries(services).map(([key, serviceObj]) => (
                    <li className="nav-item" key={key}>
                      <a
                        onClick={() => {
                          handleServiceClick(serviceObj);
                        }}
                        className={`nav-link ${
                          service.title === serviceObj.title ? "active" : ""
                        }`}
                      >
                        <i className={`flaticon-${key}`}></i>
                        <h4>{serviceObj.title}</h4>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="dept_main_info white-bg">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active">
                <div className="row align-items-center no-gutters">
                  <div className="col-lg-7">
                    <div className="dept_info">
                      <h3>{service.title}</h3>
                      <p>{service.description}. </p>
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
