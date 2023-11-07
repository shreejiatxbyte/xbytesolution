"use client";
import Link from "next/link";
import Image from "next/image";
import reactvsangularImg from "../../../assets/img/react-vs-angular/Here’s what you need to know about React vs Angular.png";
import thumbnailpng from "../../../assets/img/react-vs-angular/Thumbnail.png";
import logisticsMobileAppDevelopment from "../../../assets/img/blog/logistics-mobile-app-development-cost/thumb.jpg";
import guidandCostOfMobileAppDevelopment from "../../../assets/img/blog/comprehensive-guide-on-costs-of-mobile-app-development/Thumb.png";
import howtochooseMobileAppDevelopment from "../../../assets/img/blog/thumb.jpg";


const Ourlatestthoughts = () => {
  return (
    <>
      <div className="padding-wrap">
        <div className="container large">
          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <div className="subtitle">Insights</div>
              <h2 className="title mb-0">Our latest thoughts</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="insights-left">
                <Link href="/how-to-choose-a-mobile-app-development-company">
                  <div className="insights-img">
                  <Image
                      src={howtochooseMobileAppDevelopment}
                      alt="top-10-software-development-trends"
                    />
                  </div>
                  <div className="insights-info ml-0 mr-4 pl-4 pt-3">
                    <h2>
                    How To Choose a Mobile App Development Company?
                    </h2>
                    <p>
                      Read More <i className="icon next"></i>
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-md-5 col-sm-12 col-xs-12 sm-mt-5">

            <div className="insights-box">
                <Link href="/how-to-choose-a-mobile-app-development-company">
                  <div className="insights-img">
                    <Image
                      src={howtochooseMobileAppDevelopment}
                      alt="top-10-software-development-trends"
                    />
                  </div>
                  <div className="insights-info">
                    <h2>How To Choose a Mobile App Development Company?</h2>
                    <p>
                      Read More <i className="icon next"></i>
                    </p>
                  </div>
                </Link>
              </div>

              <div className="insights-box">
                <Link href="/react-vs-angular">
                  <div className="insights-img">
                    <Image
                      src={thumbnailpng}
                      alt="react-vs-angular"
                    />
                  </div>
                  <div className="insights-info">
                    <h2>
                      React vs Angular: Which JS Framework to Pick for Front-end
                      Development?
                    </h2>
                    <p>
                      Read More <i className="icon next"></i>
                    </p>
                  </div>
                </Link>
              </div>

              <div className="insights-box">
                <Link href="/logistics-mobile-app-development-cost">
                  <div className="insights-img">
                    <Image
                      src={logisticsMobileAppDevelopment}
                      alt="logistics-mobile-app-development-cost"
                    />
                  </div>
                  <div className="insights-info">
                    <h2>How Much Does Logistics App Development Cost?</h2>
                    <p>
                      Read More <i className="icon next"></i>
                    </p>
                  </div>
                </Link>
              </div>

              <div className="insights-box">
                <Link href="/comprehensive-guide-on-costs-of-mobile-app-development">
                  <div className="insights-img">
                    <Image
                      src={guidandCostOfMobileAppDevelopment}
                      alt="comprehensive-guide-on-costs-of-mobile-app-development"
                    />
                  </div>
                  <div className="insights-info">
                    <h2>
                      Unlocking The Costs Of Mobile App Development In 2023: A
                      Comprehensive Guide
                    </h2>
                    <p>
                      Read More <i className="icon next"></i>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ourlatestthoughts;
