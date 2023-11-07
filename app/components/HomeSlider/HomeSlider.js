'use client'
import Link from "next/link";
import Image from 'next/image';
import sofwareDevlopmentImg from "../../../assets/img/home-slider/software-development.jpg"
import AIImg from "../../../assets/img/home-slider/artificial-intellegence.jpg"
import MobileAppImg from "../../../assets/img/home-slider/mobile-app-developement-company.jpg"
import WebDevlopImg from "../../../assets/img/home-slider/web-developement-company.jpg"
import DataAnalyticsImg from "../../../assets/img/home-slider/data-analytics.jpg"

function HomeSlider() {

  return (
    <>
      <div className="container">
        <div id="carouselExampleControls" className="carousel slide home-slider" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5">
                  <div className="home-slider-content">
                    <h2>Custom Software Development</h2>
                    <p>Next-Gen Solutions Enabling Business Empowerment and Driving Growth</p>
                    <Link href="/contact" className="btn btn-custom"> Get A Quote
                      <span className="btn__bg"><span> Get A Quote </span></span></Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="home-slider-img">
                    <Image src={sofwareDevlopmentImg} alt="software-development" style={{ width: "100%", height: "600px" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5">
                  <div className="home-slider-content">
                    <h2>Generative Al Services</h2>
                    <p>Fostering Creativity and Empowering Automation through Advanced Genetic AI Innovations
                    </p>
                    <Link href="/artificial-intelligence-and-machine-learning-development"
                      className="btn btn-custom"> Read More <span className="btn__bg"><span> Read More
                      </span></span></Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="home-slider-img">
                    <Image src={AIImg} alt="artificial-intellegence" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5">
                  <div className="home-slider-content">
                    <h2>Mobile App Development Company</h2>
                    <p>Transforming Mobile Experience Through Innovation</p>
                    <Link href="/mobile-application-development" className="btn btn-custom"> Read More
                      <span className="btn__bg"><span> Read More </span></span></Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="home-slider-img">
                    <Image src={MobileAppImg} alt="Mobile-App-Development-Company" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5">
                  <div className="home-slider-content">
                    <h2>Web Development Company</h2>
                    <p>Your Imagination, Brought to the Web</p>
                    <Link href="/web-development" className="btn btn-custom"> Read More <span
                      className="btn__bg"><span> Read More </span></span></Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="home-slider-img">
                    <Image src={WebDevlopImg}
                      alt="web-developement-company" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5">
                  <div className="home-slider-content">
                    <h2>Data Analytics Services </h2>
                    <p>Empowering Your Journey with Uncharted Data Insights.</p>
                    <Link href="/contact" className="btn btn-custom"> Get A Quote <span
                      className="btn__bg"><span> Get A Quote </span></span></Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="home-slider-img">
                    <Image src={DataAnalyticsImg} alt="artificial-intellegence" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <i className="icon prev"></i>
          </Link>
          <Link className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <i className="icon next"></i>
          </Link>
        </div>

      </div>
    </>

  );
}

export default HomeSlider;
