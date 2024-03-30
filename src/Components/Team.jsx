import { doctors } from "../utils/constant";

export default function Team() {
  return (
    <>
      <div id="doctors" className="team-area section-padding30">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-tittle text-center mb-100">
                <span>Our Doctors</span>
                <h2>Our Specialist</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {Object.entries(doctors).map(([key, doctorObj]) => (
              <div key={key} className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                <div className="single-team mb-30">
                  <div className="team-img">
                    <img src={doctorObj.image} alt="" />
                  </div>
                  <div className="team-caption">
                    <h3>
                      <a href="#">{doctorObj.name}</a>
                    </h3>
                    <span>{doctorObj.speciality}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
