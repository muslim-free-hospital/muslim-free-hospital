import { useState } from "react";
import { useSendMessageMutation } from "../store";

export default function AppointmentForm() {
  const [sendMessage, results] = useSendMessageMutation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    sendMessage(formData);
  }
  return (
    <>
      <div id="contact" className="container contact-form-main">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-7 col-lg-7">
              <div className="form-wrapper">
                <div className="form-tittle">
                  <div className="row ">
                    <div className="col-xl-12">
                      <div className="section-tittle section-tittle2">
                        <span>Appointment Apply Form</span>
                        <h2>Contact Us</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <form
                  onSubmit={handleFormSubmit}
                  id="contact-form"
                  action="#"
                  method="POST"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-box user-icon mb-30">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box mb-30">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box message-icon mb-65">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Message"
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <div className="submit-info">
                        <button className="btn" type="submit">
                          {results.isLoading ? "Sending..." : "Submit Now "}
                          <i className="ti-arrow-right"></i>{" "}
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
