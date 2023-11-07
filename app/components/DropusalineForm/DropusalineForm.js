"use client";
import Link from 'next/link';

const DropusalineForm = () => {
  return (
    <>
      <div className="padding-wrap bg-gray" id="blog-guide-footer-contact-us">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="home-contact Pattern Pattern--vertical"></div>

              <h2 className="title mb-3">Drop us a line</h2>

              <p className="lg-paragraph mb-5">
                Stay Ahead of Competition with an Intuitive Mobile App for Your
                Business
              </p>
            </div>

            <div className="col-md-6">
              <form id="getstarted-section">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      id="c-name1"
                      className="form-control req"
                      name="Name"
                    />

                    <label>Your Name*</label>
                  </div>

                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      id="c-email1"
                      className="form-control req"
                      name="Email"
                    />

                    <label>Email</label>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      id="c-number1"
                      className="form-control req"
                      name="Number"
                    />

                    <label>Contact Number*</label>
                  </div>

                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      id="c-skype1"
                      className="form-control"
                      name="Skype"
                    />

                    <label>Skype</label>
                  </div>
                </div>
                <div className="form-group">
                  <select
                    className="form-control f-contact"
                    name=" Budget"
                    id="exampleFormControlSelect1"
                  >
                    <option
                      style={{ color: "gray !important" }}
                    >
                      Budget*
                    </option>
                    <option>Less Than $10,000</option>
                    <option>$10,000 to $50,000</option>
                    <option>$50,000 to $100,000</option>
                    <option>$100,000+</option>
                  </select>
                </div>
                
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <textarea
                      className="form-control req"
                      id="c-description1"
                      name="Description"
                    ></textarea>

                    <label>Describe Your Project</label>
                  </div>

                  <div className="col-md-12 mb-4">
                    <div id="html_element">
                      <div style={{ width: "304px", height: "78px" }}>
                        <div>
                          <iframe
                            title="reCAPTCHA"
                            role="presentation"
                            name="a-ewt5wedh8p69"
                            frameBorder="0"
                            scrolling="no"
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                            src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LcCm1MdAAAAADQuNkIChegYQA6qx11tS5E551mM&amp;co=aHR0cHM6Ly93d3cueGJ5dGVzb2x1dGlvbnMuY29tOjQ0Mw..&amp;hl=en&amp;v=vm_YDiq1BiI3a8zfbIPZjtF2&amp;size=normal&amp;cb=vdl820bqod7c"
                          ></iframe>
                        </div>
                        <textarea
                          id="g-recaptcha-response"
                          name="g-recaptcha-response"
                          className="g-recaptcha-response"
                          style={{
                            width: "250px",
                            height: "40px",
                            border: "1px solid rgb(193, 193, 193)",
                            margin: "10px 25px",
                            padding: "0px",
                            resize: "none",
                            display: "none",
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <Link href="javascript:void(0);" id="id-getstarted-btn" className="btn btn-custom" data-toggle="modal" data-target=""> Let's go! <span className="btn__bg"><span> Let's go! </span></span></Link>
                 */}
                <Link
                  href="/"
                  id="id-getstarted-btn"
                  className="btn btn-custom"
                  data-toggle="modal"
                  data-target=""
                >
                  {" "}
                  Let's go!{" "}
                  <span className="btn__bg">
                    <span> Let's go! </span>
                  </span>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
export default DropusalineForm;
