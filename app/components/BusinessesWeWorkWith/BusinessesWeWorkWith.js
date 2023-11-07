"use client";
import Image from "next/image";
import startUpBussiness from "../../../assets/img/home/Home-page-icons/Start Up Business.svg"
import smallmediBussiness from "../../../assets/img/home/Home-page-icons/Small & Medium Business.svg"
import enterprise from "../../../assets/img/home/Home-page-icons/Enterprise.svg"
import Agencies from "../../../assets/img/home/Home-page-icons/Agencies.svg"

import retailEcommerce from "../../../assets/img/home/Home-page-icons/Retail & Ecommerce.svg"
import educationElearning from "../../../assets/img/home/Home-page-icons/Education & e-learning.svg"
import HealthcareFitness from "../../../assets/img/home/Home-page-icons/Healthcare & Fitness.svg"
import LogisticsDistribution from "../../../assets/img/home/Home-page-icons/Logistics & Distribution.svg"
import SocialNetworking from "../../../assets/img/home/Home-page-icons/Social Networking.svg"
import RealEstate from "../../../assets/img/home/Home-page-icons/Real Estate.svg"
import TravelHospitality from "../../../assets/img/home/Home-page-icons/Travel & Hospitality.svg"
import FoodRestaurant from "../../../assets/img/home/Home-page-icons/Food & Restaurant.svg"
import OnDemandSolutions from "../../../assets/img/home/Home-page-icons/On-Demand Solutions.svg"
import Gaming from "../../../assets/img/home/Home-page-icons/Gaming.svg"
import OilandGas from "../../../assets/img/home/Home-page-icons/Oil and Gas.svg"
import Manufacturing from "../../../assets/img/home/Home-page-icons/Manufacturing.svg"
import Automotive from "../../../assets/img/home/Home-page-icons/Automotive.svg"
import Fintech from "../../../assets/img/home/Home-page-icons/Fintech.svg"
import MediaEntertainment from "../../../assets/img/home/Home-page-icons/Media & Entertainment.svg"



const BusinessesWeWorkWith = () => {
  return (
    <>
      <div className="padding-wrap bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 className="font-600 mt-4">Businesses We Work With</h1>

              <p>
                As a top web and mobile development company in India and the
                USA, we have worked with over 3,000 companies of different sizes
                and industries. Our expert team provides various design and
                development services to fulfill diversified business
                requirements.
              </p>
            </div>
            <div className="col-md-7">
              <div className="d-flex">
                <div className="create">
                  <div className="icon1 text-center justify-content-center">
                    <Image
                      src={startUpBussiness}
                      alt="Start Up Business"
                    />
                  </div>
                  <h5 className="mt-2 text-center">Start Up Business</h5>
                </div>
                <div className="create">
                  <div className="icon1 text-center">
                    <Image
                      src={smallmediBussiness}
                      alt="Small & Medium Business"
                    />
                  </div>
                  <h5 className="mt-2 text-center">Small & Medium Business</h5>
                </div>
              </div>

              <div className="d-flex mt-4">
                <div className="create">
                  <div className="icon1 text-center justify-content-center">
                    <Image
                      src={enterprise}
                      alt="Enterprise"
                    />
                  </div>
                  <h5 className="mt-2 text-center">Enterprise</h5>
                </div>
                <div className="create">
                  <div className="icon1 text-center">
                    <Image
                      src={Agencies}
                      alt="Agencies"
                    />
                  </div>
                  <h5 className="mt-2 text-center">Agencies</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="padding-wrap">
    <div className="container">
        <div className="row justify-content-center mb-5">
            <div className="col-md-8 text-center">
                <h2 className="title mb-0">Industries We Serve</h2>

            </div>
        </div>
        <div className="row">
        <div className="col">
                <div className="solution-grid">
                    <div className="card-box bg-white text-center">
                       <Image src={retailEcommerce} alt="Retail & Ecommerce"/>
                        <h3 className="h6 mt-4">
                            <p>Retail &amp; Ecommerce</p>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="solution-grid">
                    <div className="card-box bg-white text-center">
                    <Image src={educationElearning} alt="Education & e-learning"/>
                        <h3 className="h6 mt-4">
                            <p>Education &amp; e-learning</p>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="solution-grid">
                    <div className="card-box bg-white text-center">
                    <Image src={HealthcareFitness} alt="Healthcare & Fitness"/>
                        <h3 className="h6 mt-4">
                            <p>Healthcare &amp; Fitness</p>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="solution-grid">
                    <div className="card-box bg-white text-center">
                    <Image src={LogisticsDistribution} alt="Logistics & Distribution"/>
                        <h3 className="h6 mt-4">
                            <p>Logistics &amp; Distribution</p>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="solution-grid">
                    <div className="card-box bg-white text-center">
                    <Image src={SocialNetworking} alt="Social Networking"/>
                        <h3 className="h6 mt-4">
                            <p>Social Networking</p>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
        <div className="col">
                <div className="solution-grid">
                    <div className="card-box bg-white text-center">
                    <Image src={RealEstate} alt="Real Estate"/>
                        <h3 className="h6 mt-4">
                            <p>Real Estate</p>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="solution-grid">
                    <div className="card-box bg-white text-center">
                    <Image src={TravelHospitality} alt="Travel & Hospitality"/>
                        <h3 className="h6 mt-4">
                            <p>Travel &amp; Hospitality</p>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="solution-grid">
                    <div className="card-box bg-white text-center">
                    <Image src={FoodRestaurant} alt="Food & Restaurant"/>
                        <h3 className="h6 mt-4">
                            <p>Food &amp; Restaurant</p>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="solution-grid">
                    <div className="card-box bg-white text-center">
                    <Image src={OnDemandSolutions} alt="On-Demand Solutions"/>
                        <h3 className="h6 mt-4">
                            <p>On-Demand Solutions</p>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="solution-grid">
                    <div className="card-box bg-white text-center">
                    <Image src={Gaming} alt="Gaming"/>
                        <h3 className="h6 mt-4">
                            <p>Gaming</p>
                        </h3>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
        <div className="col">
                <div className="solution-grid">
                    <div className="card-box bg-white text-center">
                    <Image src={OilandGas} alt="Oil and Gas"/>
                        <h3 className="h6 mt-4">
                            <p>Oil and Gas</p>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="solution-grid">
                    <div className="card-box bg-white text-center">
                    <Image src={Manufacturing} alt="Manufacturing"/>
                        <h3 className="h6 mt-4">
                            <p>Manufacturing</p>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="solution-grid">
                    <div className="card-box bg-white text-center">
                    <Image src={Automotive} alt="Automotive"/>
                        <h3 className="h6 mt-4">
                            <p>Automotive</p>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="solution-grid">
                    <div className="card-box bg-white text-center">
                    <Image src={Fintech} alt="Fintech"/>
                        <h3 className="h6 mt-4">
                            <p>Fintech</p>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="solution-grid">
                    <div className="card-box bg-white text-center">
                    <Image src={MediaEntertainment} alt="Media & Entertainment"/>
                        <h3 className="h6 mt-4">
                            <p>Media &amp; Entertainment</p>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  );
};
export default BusinessesWeWorkWith;
