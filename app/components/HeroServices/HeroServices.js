"use client";
import React, { useEffect } from "react";
import Link from "next/link";
// import Swiper from 'swiper';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import amazon from "../../../assets/img/owl-carousel/test/amazon.webp";
import asianpaints from "../../../assets/img/owl-carousel/test/asianpaints.webp";
import expedia from "../../../assets/img/owl-carousel/test/expedia.webp";
import foodpanda from "../../../assets/img/owl-carousel/test/foodpanda.webp";
import loreal from "../../../assets/img/owl-carousel/test/loreal.webp";
import nielsen from "../../../assets/img/owl-carousel/test/nielsen.webp";
import olx from "../../../assets/img/owl-carousel/test/olx.webp";

import YearExpImg from "../../../assets/img/home/Home-page-icons/11+Years Experience.svg";
import ITProfessionalsImg from "../../../assets/img/home/Home-page-icons/250+IT Professionals.svg";
import SuccessfulProjectsImg from "../../../assets/img/home/Home-page-icons/1500+Successful Projects.svg";
import HappyCustomersImg from "../../../assets/img/home/Home-page-icons/900+Happy Customers.svg";
import IndustriesServedImg from "../../../assets/img/home/Home-page-icons/40+Industries Served.svg";
import SupportServicesImg from "../../../assets/img/home/Home-page-icons/24-7Support Services.svg";
// import "../../../assets/css/custom.css";
// import "../../../assets/css/myCss.css";

const HeroServices = () => {
  return (
    <>
      <div className="service-hero-wrapper mt-2">
        <div className="ml-3 pr-0">
          <div className="row">
            <div className="col-md-12">
              <div className="slider swiper-container">
                <Swiper
                  className="slide-track swiper-wrapper"
                  slidesPerView={15}
                  rewind={true}
                  centeredSlides={true}
                  spaceBetween={0}
                  grabCursor={true}
                  modules={[Pagination, Autoplay]}
                  autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                  }}
                  direction="horizontal"
                  loop={true}
                  allowTouchMove={false} // Disable swipe scrolling
                >
                  <SwiperSlide>
                    <div className="slide swiper-slide">
                      <Image src={foodpanda} alt="foodpanda" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide swiper-slide">
                      <Image src={amazon} alt="amazon" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide swiper-slide">
                      <Image src={asianpaints} alt="asianpaints" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide swiper-slide">
                      <Image src={expedia} alt="expedia" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide swiper-slide">
                      <Image src={olx} alt="olx" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide swiper-slide">
                      <Image src={foodpanda} alt="foodpanda" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide swiper-slide">
                      <Image src={loreal} alt="loreal" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide swiper-slide">
                      <Image src={nielsen} alt="nielsen" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide swiper-slide">
                      <Image src={amazon} alt="amazon" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide swiper-slide">
                      <Image src={asianpaints} alt="asianpaints" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide swiper-slide">
                      <Image src={expedia} alt="expedia" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide swiper-slide">
                      <Image src={olx} alt="olx" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide swiper-slide">
                      <Image src={foodpanda} alt="foodpanda" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide swiper-slide">
                      <Image src={loreal} alt="loreal" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide swiper-slide">
                      <Image src={nielsen} alt="nielsen" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-hero-wrapper mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 className="font-600">X-Byte Enterprise Solutions</h1>

              <p>We enable innovative solutions to stand out from the crowd.</p>
              <p>
                X-Byte Enterprise Solutions is a prominent custom web and app
                development company based in India, the USA, Germany, and the
                UAE. Since our inception in 2013, we have grown to be the top IT
                software design and development service provider and worked with
                several clients across the globe.
              </p>
              <p>
                Our team assists in digital transformation by providing creative
                design and development services for both mobile and web
                platforms. Our comprehensive services include web and mobile app
                development, website design and development, blockchain and
                progressive development, quantum computing, on-demand app
                development services, AI and ML development, and many more.
              </p>
              <p>
                X-Byte Enterprise Solutions aims to provide top-notch
                development services by utilizing the most advanced technology
                without compromising quality and user experience. We have
                received several prestigious awards in various fields and are
                proud partners of Google and AWS.{" "}
              </p>
              <p>Discuss Your Project Ideas with Our Experts!</p>

              <button className="btnx form-control">Get A Quote Now</button>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12 d-flex justify-content-around">
                  <div className="boxx">
                    <div className="icon1 text-center">
                      <Image src={YearExpImg} alt="11+Years Experience" />
                    </div>{" "}
                    <br />
                    <div className="text1 font-weight-bold text-center">
                      11+
                    </div>{" "}
                    <br />
                    <div className="text2 text-center">Years Experience</div>
                  </div>
                  <div className="boxx ml-4">
                    <div className="icon1 text-center">
                      <Image
                        src={ITProfessionalsImg}
                        alt="250+IT Professionals"
                      />
                    </div>{" "}
                    <br />
                    <div className="text1 font-weight-bold text-center">
                      250+
                    </div>{" "}
                    <br />
                    <div className="text2 text-center">IT Professionals</div>
                  </div>
                  <div className="boxx ml-4">
                    <div className="icon1 text-center">
                      <Image
                        src={SuccessfulProjectsImg}
                        alt="1500+Successful Projects"
                      />
                    </div>{" "}
                    <br />
                    <div className="text1 font-weight-bold text-center">
                      1500+
                    </div>{" "}
                    <br />
                    <div className="text2 text-center">Successful Projects</div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12 d-flex justify-content-around">
                  <div className="boxx">
                    <div className="icon1 text-center">
                      <Image
                        src={HappyCustomersImg}
                        alt="900+Happy Customers"
                      />
                    </div>{" "}
                    <br />
                    <div className="text1 font-weight-bold text-center">
                      900+
                    </div>{" "}
                    <br />
                    <div className="text2 text-center">Happy Customers</div>
                  </div>
                  <div className="boxx ml-4">
                    <div className="icon1 text-center">
                      <Image
                        src={IndustriesServedImg}
                        alt="40+Industries Served"
                      />
                    </div>{" "}
                    <br />
                    <div className="text1 font-weight-bold text-center">
                      40+
                    </div>{" "}
                    <br />
                    <div className="text2 text-center">Industries Served</div>
                  </div>
                  <div className="boxx ml-4">
                    <div className="icon1 text-center">
                      <Image
                        src={SupportServicesImg}
                        alt="24-7Support Services"
                      />
                    </div>{" "}
                    <br />
                    <div className="text1 font-weight-bold text-center">
                      24/7
                    </div>{" "}
                    <br />
                    <div className="text2 text-center">Support Services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroServices;
