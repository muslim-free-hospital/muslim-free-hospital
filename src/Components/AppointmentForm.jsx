export default function AppointmentForm() {
  return (
    <>
      <div className="contact-form-main">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-7 col-lg-7">
              <div className="form-wrapper">
                <div className="form-tittle">
                  <div className="row ">
                    <div className="col-xl-12">
                      <div className="section-tittle section-tittle2">
                        <span>Appointment Apply Form</span>
                        <h2>Appointment Form</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <form id="contact-form" action="#" method="POST">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box user-icon mb-30">
                        <input type="text" name="name" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box email-icon mb-30">
                        <input type="text" name="email" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-30">
                      <div className="select-itms">
                        <select name="select" id="select2">
                          <option value="">Health Law</option>
                          <option value="">saiful islam</option>
                          <option value="">Arafath Miya</option>
                          <option value="">Shakil Miya</option>
                          <option value="">Tamim Sharker</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-box subject-icon mb-30">
                        <input
                          type="Email"
                          name="subject"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box message-icon mb-65">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="submit-info">
                        <button className="btn" type="submit">
                          Submit Now <i className="ti-arrow-right"></i>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="from-left d-none d-lg-block">
          <img src="/img/gallery/contact_form.png" alt="" />
        </div>
      </div>
    </>
  );
}
