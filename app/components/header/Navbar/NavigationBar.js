"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import logoIcon from "../../../../assets/img/logoicon/s.svg";
import logo from "../../../../assets/img/logo.svg";
import Image from "next/image";
import AIMLImg from "../../../../assets/img/nav/AI & ML.png";
import lotImg from "../../../../assets/img/nav/IOT.png";
import ARVRImg from "../../../../assets/img/nav/AR & VR.png";
import mobileDevlopmentImg from "../../../../assets/img/nav/MOBILE DEVELOPMENT.png";
import webDevlopmentImg from "../../../../assets/img/nav/WEB DEVELOPMENT.png";
import progressiveservImg from "../../../../assets/img/nav/PROGRESSIVE SERVICES.png";
import blockchainImg from "../../../../assets/img/nav/BLOCKCHAIN.png";
import digitalmarkImg from "../../../../assets/img/nav/DIGITAL MARKETING.png";

import aboutusImg from "../../../../assets/img/nav/ABOUT US.png";
import resouecesImg from "../../../../assets/img/nav/RESOURCES.png";
import certificationImg from "../../../../assets/img/nav/CERTIFICATES & ALLIANCES.png";
import contactImg from "../../../../assets/img/nav/CONTACT US.png";
import lifeImg from "../../../../assets/img/nav/LIFE @ XBYTE.png";
import partnershipImg from "../../../../assets/img/nav/PARTNERSHIP.png";

import fooddeleImg from "../../../../assets/img/menu/Food-Delivery.png";
import grocerydeleImg from "../../../../assets/img/menu/Grocery-Delivery.png";
import taxicabImg from "../../../../assets/img/menu/Taxi-Booking.png";
import multiserveImg from "../../../../assets/img/menu/Multi-Services.png";
import ottplateformImg from "../../../../assets/img/menu/OTT-Platform.png";
import socialmediaappImg from "../../../../assets/img/menu/Social-media.png";
import freelanceservImg from "../../../../assets/img/menu/Freelancer.png";
import carrentalImg from "../../../../assets/img/menu/Car-Rental.png";
import medicinedeleImg from "../../../../assets/img/menu/medicine.png";
import liquordeleImg from "../../../../assets/img/menu/Liquor.png";
import sportsbettingImg from "../../../../assets/img/menu/sports-Batting.png";
import onlineCouponImg from "../../../../assets/img/menu/coupon.png";
import eLearningImg from "../../../../assets/img/menu/E-Learning.png";
import logisticsImg from "../../../../assets/img/menu/logistics.png";
import courierdeleImg from "../../../../assets/img/menu/Courier-delivery.png";
import ondemandImg from "../../../../assets/img/menu/real-estate.png";
import ewalletImg from "../../../../assets/img/menu/e-wallet.png";
import onlinedateImg from "../../../../assets/img/menu/dating-app.png";
import handymanservImg from "../../../../assets/img/menu/Handyman.png";

// import "../../../../assets/css/custom.css";
// import "../../../../assets/css/myCss.css"

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCity, setHoveredCity] = useState(['London', 'MOBILE', 'About']);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (dropItem) => {
    setDropdownOpen((prevState) => (prevState === dropItem ? false : dropItem));
  };

  const openCity = (city) => {
    setHoveredCity(city);
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light">
        <style>
          {`
      .navbar.dropdown - toggle,
      .navbar.dropdown - menu a {
      cursor: pointer;
}

        .navbar .dropdown-item.active,
        .navbar .dropdown-item:active {
          color: inherit;
        text-decoration: none;
        background-color: inherit;
}

        .navbar .dropdown-item:focus,
        .navbar .dropdown-item:hover {
          color: #16181b;
        text-decoration: none;
        background-color: #f8f9fa;
}

        @media (min-width: 767px) {
      .navbar.dropdown - toggle:not(.nav-link)::after {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 0.5em;
        vertical-align: 0;
        border-bottom: 0.3em solid transparent;
        border-top: 0.3em solid transparent;
        border-left: 0.3em solid;
        
    }
}

        .tab {
          float: left;
        
}

        .tab button {
          display: block;
        background-color: inherit;
        color: black;
        padding: 22px 16px;
        width: 100%;
        border: none;
        outline: none;
        text-align: left;
        cursor: pointer;
}

        .tab button:hover {
        }

        .tab button.active {
        }

        .tabcontent {
          float: left;
        padding: 0px 12px;
        width: 70%;
        border-left: none;
        /* height: 300px; */
        height: 450px;
        display: none;
}

        .tabcontent.active {
          display: block;
          
}

`}
        </style>

        <div className="container1 container">
          <div className="col-md-2 col-sm-12">
            {/* <Link className="navbar-brand mt-2 ms-4" href="#">
            <Image
              alt="logo"
              src={logo}
              style={{ width: "190px", height: "60px" }}
            />
          </Link> */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                className="navbar-toggler"
                style={{ float: "left" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded={isOpen ? "true" : "false"}
                aria-label="Toggle navigation"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              {isSmallScreen ? (
                <Link className="navbar-brand logo" href="/">
                  <Image
                    alt="logo"
                    className="lozad"
                    src={logoIcon}
                    style={{ width: "auto", marginLeft: "5px" }}
                  />
                </Link>
              ) : (
                <div className="acc-logo">
                  <div className="acc-program">
                    <Link className="acc-program-logo" href="/">
                      <Image
                        alt="logo"
                        className="lozad"
                        src={logo}
                        style={{ width: "190px", height: "50px" }}
                      />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-8 ">
            <div
              className={`collapse navbar-collapse justify-content-end ${
                isOpen ? "show" : ""
              }`}
              id="navbarNavDropdown"
            >
              <div className="">
                <ul
                  className="navbar-nav ml-auto mr-auto py-1"
                  id="example-tabs"
                >
                  {!isSmallScreen ? (
                    <li
                      className="nav-item dropdown servicesDropdown-li hide shreejinandola Solutions"
                      data-id="first"
                    >
                      <Link
                        className="nav-link dropdown-toggle d-inline-block py-2"
                        href="#"
                        id="servicesDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Solutions
                      </Link>
                      <div
                        id="megamenu-1"
                        className="dropdown-menu dropdown-menu-Services_3 py-0"
                        aria-labelledby="servicesDropdown"
                      >
                        <div className="megamenu-blocks-22 p-4">
                          <div className="menublock">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="tab d-block d-inline-">
                                  <div
                                    className={`tablinks nav-link active gray AI ${
                                      hoveredCity === "London" ? "active" : ""
                                    }`}
                                    onMouseOver={() => openCity("London")}
                                  >
                                    AI and ML
                                  </div>
                                  <div
                                    className={`nav-link mt-3 gray tablinks ${
                                      hoveredCity === "Paris" ? "active" : ""
                                    }`}
                                    onMouseOver={() => openCity("Paris")}
                                  >
                                    IOT
                                  </div>
                                  <div
                                    className={`nav-link mt-3 gray tablinks ${
                                      hoveredCity === "Tokyo" ? "active" : ""
                                    }`}
                                    onMouseOver={() => openCity("Tokyo")}
                                  >
                                    AR VR
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-8 first">
                                <div
                                  id="London"
                                  className={`tabcontent w-100 p-0 ${
                                    hoveredCity === "London" ? "active" : ""
                                  }`}
                                >
                                  <div className="row mt-2">
                                    <div className="col-md-12">
                                      <Image
                                        src={AIMLImg}
                                        alt="AIMLImg"
                                        style={{ width: "100%" }}
                                      />
                                    </div>
                                    <div className="col-md-12 mt-4 mb-1">
                                      <h3 className="txt">AI and ML</h3>
                                      We utilize our potential to stay updated
                                      with advanced technologies like artificial
                                      intelligence and machine learning. Our
                                      smart solutions help businesses to work
                                      smarter and faster.
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/ai-ml-solutions-for-real-estate">
                                        Real Estate
                                      </Link>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/ai-ml-solutions-for-retail-ecommerce">
                                        Ecommerce & Retail
                                      </Link>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/ai-ml-solutions-for-healthcare">
                                        Healthcare
                                      </Link>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/ai-ml-solutions-for-transportation">
                                        Transportation
                                      </Link>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/ai-ml-solutions-for-education">
                                        Education
                                      </Link>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/ai-ml-solutions-for-entertainment">
                                        Entertainment
                                      </Link>
                                    </div>
                                    <div className="col-md-6 mt-3 mb-2">
                                      <Link href="/ai-ml-solutions-for-travel">
                                        Travel
                                      </Link>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  id="Paris"
                                  className={`two tabcontent w-100 p-0 ${
                                    hoveredCity === "Paris" ? "active" : ""
                                  }`}
                                >
                                  <div className="row mt-2">
                                    <div className="col-md-12">
                                      <Image
                                        src={lotImg}
                                        alt="lotImg"
                                        style={{ width: "100%" }}
                                      />
                                    </div>
                                    <div className="col-md-12 mt-4">
                                      <h3 className="txt">IOT</h3>
                                      We are providing IoT analytics web and app
                                      development that can be operated remotely.
                                      Our custom IoT development is carried out
                                      to satisfy unique business needs.
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/iot-real-estate-solution">
                                        Real Estate
                                      </Link>{" "}
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/iot-retail-ecommerce-solutions">
                                        Ecommerce & Retail
                                      </Link>{" "}
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/iot-healthcare-solutions">
                                        Healthcare
                                      </Link>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/industrial-iot-solutions">
                                        Industrial
                                      </Link>
                                    </div>
                                    <div className="col-md-6 mt-3 mb-2">
                                      <Link href="/iot-smart-city-solutions">
                                        Smart City
                                      </Link>{" "}
                                    </div>
                                  </div>
                                </div>

                                <div
                                  id="Tokyo"
                                  className={`two tabcontent w-100 p-0 ${
                                    hoveredCity === "Tokyo" ? "active" : ""
                                  } `}
                                >
                                  <div className="row mt-2">
                                    <div className="col-md-12">
                                      <Image
                                        src={ARVRImg}
                                        alt="ARVRImg"
                                        style={{ width: "100%" }}
                                      />
                                    </div>
                                    <div className="col-md-12 mt-4">
                                      <h3 className="txt">AR VR</h3>
                                      Augmented and virtual reality is the new
                                      era of technology. We create AR/VR apps
                                      that create a remarkable twist to provide
                                      next-gen solutions.
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/ar-vr-solutions-for-real-estate">
                                        Real Estate
                                      </Link>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/ar-vr-solutions-for-retail-ecommerce">
                                        Ecommerce & Retail
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ) : (
                    <li
                      className="nav-item dropdown servicesDropdown-li show1"
                      data-id="first"
                    >
                      <Link
                        className="nav-link dropdown-toggle d-inline-block py-2"
                        href="#"
                        id="servicesDropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded={isDropdownOpen}
                        onClick={() => toggleDropdown("Solutions")}
                      >
                        Solutions
                      </Link>
                      <div
                        id="megamenu-1"
                        className={`dropdown-menu dropdown-menu-Services_3 py-0 ${
                          isDropdownOpen === "Solutions" ? "show" : ""
                        }`}
                        aria-labelledby="servicesDropdown"
                      >
                        <div className="megamenu-blocks-22 p-4">
                          <div className="menublock">
                            <h4>
                              <Link href="/">
                                <div className="menu-icon">
                                  <svg
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 72 72"
                                    style={{
                                      enableBackground: "new 0 0 72 72",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <g>
                                      <path
                                        className="st1"
                                        d="M32.5,27.2c-0.6,0.2-0.9,0.9-0.6,1.2c0.2,0.6,0.9,0.9,1.2,0.7c1.8-0.8,3.8-0.8,5.7,0c0.6,0.2,1-0.1,1.2-0.7 c0.2-0.6-0.1-1-0.6-1.2C37.2,26.5,34.8,26.5,32.5,27.2z"
                                      />
                                      <path
                                        className="st1"
                                        d="M42.2,25.1c0.5,0,1-0.4,1-0.9c0.1-0.5-0.1-1-0.6-1.1c-4.2-2.2-9-2.2-13.2,0c-0.4,0.2-0.6,0.5-0.6,1 c0,0.4,0.2,0.8,0.5,1c0.4,0.2,0.8,0.2,1,0c3.5-1.8,7.8-1.8,11.3,0C41.8,25,42,25.1,42.2,25.1z"
                                      />
                                      <path
                                        className="st1"
                                        d="M27.5,20.9c5.2-3.1,11.7-3.1,17,0c0.5,0.3,1,0.2,1.4-0.4c0.3-0.5,0.2-1-0.4-1.4c-5.9-3.6-13.2-3.6-19,0 c-0.5,0.3-0.7,1-0.4,1.4C26.4,20.9,27.1,21.1,27.5,20.9z"
                                      />
                                      <path
                                        className="st1"
                                        d="M56.9,32.6C51,32.1,40.4,31.8,36,31.8s-15,0.3-20.9,0.9c-2.7,0.2-4.6,2.3-4.7,4.8v11.9c0,2.7,2.3,4.8,4.9,4.8 h16.1c0.7,0,1.2-0.3,1.6-0.9l0.9-1.1c0.4-0.6,1-1,1.7-1h0.9c0.7,0,1.2,0.4,1.7,1l0.9,1.1c0.4,0.6,1,0.9,1.6,0.9h16.1 c2.7,0,4.8-2.2,4.9-4.8V37.5C61.6,34.8,59.5,32.7,56.9,32.6z M15.5,42c-0.5,0-0.9-0.3-1-0.8s0-1,0.5-1.1l6.2-4.1 c0.5-0.3,1-0.2,1.4,0.3c0.3,0.5,0.2,1-0.3,1.4l-6.2-4.1C15.9,42,15.7,42,15.5,42z M26.3,39.9L20.1,44c-0.5,0.3-1,0.2-1.4-0.3 c-0.3-0.5-0.2-1,0.3-1.4l6.2-4.1c0.5-0.3,1-0.2,1.4,0.3C27,39,26.8,39.5,26.3,39.9z"
                                      />
                                      <path
                                        className="st1"
                                        d="M63.7,37v14.1c1.8-0.5,3-2.1,3-4v-6.2C66.7,39.1,65.5,37.5,63.7,37z"
                                      />
                                      <path
                                        className="st1"
                                        d="M5.3,41v6.2c0,1.9,1.2,3.5,3,4V37C6.5,37.5,5.3,39.1,5.3,41z"
                                      />
                                    </g>
                                  </svg>
                                </div>
                                AI and ML
                              </Link>
                            </h4>
                            <ul>
                              <li>
                                <Link href="/ai-ml-solutions-for-real-estate">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M63.4,27.7c-0.2-1-0.9-1.7-1.8-2.1c-2.1-1-4.2-2-6.3-3c-0.2-0.1-0.4-0.1-0.6-0.3c0-0.7,0-1.4,0-2.1 c0-0.7-0.1-1.4-0.4-2c-0.5-0.9-1.5-1.8-2.9-1.5c-1.2,0.2-1.8,1-2.2,2c-0.1,0.3-0.1,0.6-0.2,0.9c-0.2,0-0.3-0.1-0.4-0.1 c-3.8-1.8-7.7-3.6-11.5-5.4C36,13.5,35,13.5,34,14c-7.8,3.9-15.7,7.7-23.5,11.5c-0.2,0.1-0.5,0.3-0.7,0.4c-1,0.7-1.4,1.8-1.2,2.9 c0.2,1.2,1.2,2,2.4,2.3c0.8,0.1,1.5-0.1,2.1-0.4c7.3-3.6,14.7-7.2,22-10.8c0.4-0.2,0.7-0.2,1.1,0c2.7,1.3,5.4,2.6,8.1,3.9 c4.9,2.3,9.9,4.7,14.8,7c0.6,0.3,1.3,0.5,2,0.4C62.6,30.9,63.8,29.3,63.4,27.7z"
                                        />
                                        <path
                                          className="st0"
                                          d="M54.7,31.1c-6.3-2.9-12.6-5.8-18.9-8.7c-0.3-0.2-0.6-0.1-0.9,0c-2.5,1.2-5,2.4-7.5,3.6 c-3.8,1.9-7.6,3.7-11.5,5.6c0,0.3,0,0.5,0,0.7c0,6.8,0,13.7,0,20.5c0,0.4,0,0.9,0,1.3c0.1,1.1,0.3,2.2,0.9,3.2 c0.3,0.4,0.6,0.8,1.1,0.9c0.9,0.2,1.9,0.1,2.9,0.1c0-0.3,0-0.5,0-0.7c0-4.6,0-9.2,0-13.7c0-1,0.3-1.3,1.3-1.3c2.6,0,5.2,0,7.8,0 c0.1,0,0.2,0,0.3,0c0.6,0,0.9,0.4,1,1c0,0.2,0,0.3,0,0.5c0,4.6,0,9.1,0,13.7c0,0.2,0,0.4,0.1,0.7c0.2,0,0.5,0,0.7,0 c5.4,0,10.7,0,16.1,0c0.8,0,1.6,0,2.4-0.1c1.2-0.1,2.2-0.7,3.1-1.5c1-1,1.3-2.3,1.3-3.6c0-7.2,0-14.4,0-21.5 C54.8,31.4,54.8,31.2,54.7,31.1z M41.2,53.7c-1.7,0-3.5,0-5.2,0c0-3.9,0-7.8,0-11.6c1.7,0,3.4,0,5.2,0 C41.2,45.9,41.2,49.8,41.2,53.7z M48.9,53.7c-1.7,0-3.4,0-5.2,0c0-3.9,0-7.7,0-11.6c1.7,0,3.4,0,5.2,0 C48.9,45.9,48.9,49.8,48.9,53.7z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Real Estate</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/ai-ml-solutions-for-retail-ecommerce">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M59.2,58.7c1.1,0.3,2.2,0.7,3.4,1.1c-0.3-1.4-0.5-2.7-0.8-4c-0.4-1.8-0.7-3.6-1.1-5.4c-0.4-2-0.8-4.1-1.2-6.1 c-0.3-1.6-0.6-3.2-1-4.9c-0.3-1.6-0.6-3.2-1-4.9c-0.2-0.8-0.2-1.5-0.5-2.3c0,0.2,0,0.3,0,0.4c0.1,0.8,0.1,1.5,0.2,2.3 c0.1,0.8,0.1,1.6,0.2,2.4c0.1,0.6,0.1,1.2,0.1,1.8c0.1,0.8,0.1,1.6,0.2,2.4c0.1,0.8,0.1,1.5,0.1,2.3c0.1,1.3,0.2,2.6,0.3,3.9 c0.1,1.4,0.1,2.7,0.3,4.1c0.1,0.6,0.1,1.2,0.1,1.8c0.1,0.8,0.1,1.6,0.2,2.4c0.1,0.8,0.1,1.5,0.1,2.3C58.9,58.5,59,58.6,59.2,58.7z"
                                        />
                                        <path
                                          className="st0"
                                          d="M59.2,63.2c1.1-1,2.1-2,3.2-3c-1.2-0.4-2.3-0.7-3.5-1.1c-0.1-1.3-0.3-2.6-0.2-3.7c0.1-0.7,0.1-1.3,0.1-2c0.1-1.2,0.2-2.3,0.3-3.5 c0.1-1.2,0.1-2.4,0.3-3.6c0.1-0.7,0.1-1.3,0.2-2C24,62,24,62.6,24,63.3c11.4,0,22.9,0,34.3,0c0-0.1,0-0.2,0-0.3"
                                        />
                                        <path
                                          className="st0"
                                          d="M58.1,60.5c-0.1-0.9-0.1-1.7-0.2-2.6c-0.1-0.6-0.1-1.3-0.1-1.9c-0.1-0.8-0.1-1.7-0.2-2.5c-0.1-0.8-0.1-1.7-0.1-2.5c-0.1-1.4-0.2-2.8-0.3-4.2c-0.1-1.5-0.1-2.9-0.3-4.4c-0.1-0.6-0.1-1.3-0.1-1.9c-0.1-1.4-0.2-2.8-0.3-4.2c-0.1-1.4-0.2-2.8-0.3-4.3c-9.9,0-19.8,0-29.8,0c0,0.2-0.1,0.4-0.1,0.6c-0.1,1-0.2,2-0.2,2.9c-0.1,1.4-0.2,2.9-0.3,4.3c-0.1,1.7-0.2,3.4-0.4,5.1c-0.1,0.6-0.1,1.1-0.1,1.7c-0.1,1.2-0.2,2.5-0.3,3.7c-0.1-0.1,0-0.2,0.3-3.6"
                                        />
                                        <path
                                          className="st0"
                                          d="M24.1,51.4c0.1-1.2,0.2-2.4,0.3-3.6c0.1-1.2,0.2-2.3,0.3-3.5c0.1-1.1,0.2-2.3,0.3-3.4c0.1-1.2,0.1-2.4,0.3-3.6c-0.1-0.5,0.1-1.1,0.1-1.6c0.1-0.8,0.1-1.6,0.2-2.4c0-0.6,0.1-1.2,0.1-1.8c0-0.2,0-0.3,0.2-0.5c5.6,0,11.3,0,17,0 c-0.4-3.9-0.9-7.7-1.3-11.5c-1.8,0-3.6,0-5.5,0c0-0.3,0-0.6,0-0.9c0-1-0.1-2-0.3-3c-0.6-2.2-1.7-4-3.5-5.4c-2.6-1.8-5.3-2.1-8.1-0.6c-1.8,0.9-3.1,2.5-3.9,4.3c-0.6-0.1,0-1.6c0.6-1.3-0.9-2.7-0.9-4.2c0-0.4,0.1-0.8,0.4-1.1 c0.6-0.6,1.6-0.6,2.2,0.1"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Ecommerce & Retail</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/ai-ml-solutions-for-healthcare">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M62.2,25.6c-0.3-2.3-1-4.5-2.1-6.6c-0.7-1.2-1.5-2.3-2.4-3.3c-1-1-2.1-1.8-3.3-2.5c-1.4-0.7-2.8-1.3-4.4-1.5 c-1-0.1-2-0.1-2.9-0.1c-0.5,0-1,0-1.4,0.1C44,12,42.5,12.6,41,13.4c-1.2,0.7-2.3,1.6-3.2,2.6c-0.5,0.5-0.9,1-1.3,1.5 c-0.4,0.4-0.8,0.4-1.1,0c0,0-0.1-0.1-0.1-0.1c-0.8-1-1.6-1.9-2.5-2.7c-2.4-2-5.1-3.1-8.3-3.1c-0.4,0-0.7,0-1.1,0c-0.3,0-0.7,0-1,0 c-1.4,0.2-2.8,0.6-4,1.2c-1.6,0.8-3.1,1.9-4.3,3.2c-1.1,1.3-2,2.6-2.7,4.2c-0.9,2-1.4,4.1-1.5,6.3c-0.1,1.2,0,2.3,0.1,3.5 c0.4,2.3,1.1,4.5,2.2,6.6c0.5,1.1,1.2,2.1,1.9,3.2c0.2,0.3,0.4,0.4,0.7,0.4c1.7,0,3.3,0,5,0c0.7,0,0.7,0,1-0.7 c0.4-0.9,0.8-1.8,1.2-2.7c0.6-1.3,1.2-2.7,1.8-4c0.5-1,0.9-2,1.4-3c0.2-0.3,0.4-0.5,0.8-0.4c0.3,0,0.6,0.2,0.7,0.5 c0.7,1.6,1.3,3.2,2,4.7c1,2.6,2.1,5.1,3.1,7.7c0.1,0.1,0.1,0.3,0.2,0.3c0.1,0,0.2-0.2,0.3-0.3c0.9-1.5,1.7-3.1,2.6-4.6 c0.4-0.7,0.8-1.4,1.2-2.1c0.3-0.5,1-0.6,1.4-0.1c0.2,0.2,0.3,0.4,0.4,0.6c0.4,0.6,0.7,1.1,1,1.7c0.1,0.1,0.2,0.4,0.3,0.3 c0.2,0,0.2-0.3,0.2-0.4c1-4.5,1.9-9,2.9-13.5c0.2-0.7,0.3-1.5,0.5-2.2c0.1-0.5,0.4-0.7,0.9-0.7c0.4,0,0.8,0.4,0.9,0.9 c0.4,2.5,0.8,5,1.2,7.5c0.5,3.3,1,6.6,1.5,9.9c0.1,0.4,0.1,0.5,0.6,0.5c3.2,0,6.5,0,9.7,0c0.3,0,0.4-0.1,0.6-0.3 c0.8-1.2,1.5-2.3,2.1-3.6c0.9-1.9,1.6-3.9,1.9-5.9c0.1-0.6,0.1-1.2,0.2-1.8c0-0.7,0-1.4,0-2C62.2,26.2,62.3,25.9,62.2,25.6z"
                                        />
                                        <path
                                          className="st0"
                                          d="M52.4,42.1c-1.8,0-3.6,0-5.5-0.1c-0.2,0-0.5,0-0.7-0.1c-0.3,0-0.5-0.3-0.6-0.6c0-0.2-0.1-0.5-0.1-0.7 c-0.2-0.9-0.3-1.9-0.5-2.8c-0.1-0.8-0.3-1.7-0.4-2.5c-0.1-0.8-0.3-1.7-0.4-2.5c-0.1-0.8-0.3-1.7-0.4-2.5c-0.1-0.8-0.2-1.5-0.4-2.3 c-0.1,0-0.1,0.1-0.1,0.1c-0.2,0.8-0.3,1.5-0.5,2.3c-0.4,1.8-0.8,3.6-1.2,5.4c-0.4,1.8-0.8,3.7-1.2,5.5c-0.1,0.4-0.3,0.6-0.7,0.7 c-0.5,0.1-0.7,0-1-0.3c-0.1-0.2-0.2-0.4-0.4-0.5c-0.6-0.9-1.1-1.8-1.7-2.7c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1,0.1-0.2,0.2-0.2,0.3 c-0.8,1.3-1.5,2.7-2.3,4.1c-0.5,1-1.1,2-1.7,2.9c-0.1,0.1-0.1,0.2-0.3,0.3C32,46,31.7,46,31.4,46c-0.2-0.1-0.3-0.3-0.4-0.5 c-0.5-1.2-1-2.4-1.5-3.6c-1.1-2.8-2.2-5.6-3.4-8.4c-0.1-0.2-0.2-0.4-0.3-0.6c-0.1,0.1-0.2,0.3-0.2,0.4c-0.3,0.7-0.7,1.4-1,2.1 c-0.9,2-1.8,4-2.8,5.9c-0.3,0.6-0.4,0.6-1,0.7c-1.1,0-2.2,0.1-3.3,0.1c-0.5,0-1,0-1.5,0c0.1,0.3,0.3,0.4,0.4,0.5 c0.6,0.6,1.2,1.2,1.9,1.7c1.9,1.8,3.9,3.5,5.8,5.3c1.6,1.4,3.2,2.9,4.7,4.3c1.7,1.5,3.4,3.1,5.1,4.6c0.7,0.6,1.3,1.2,2,1.8 c0.1-0.1,0.1-0.1,0.2-0.1c0.9-0.8,1.7-1.5,2.6-2.3c1.7-1.5,3.4-3,5.1-4.5c1.8-1.6,3.6-3.2,5.4-4.8c1.3-1.2,2.6-2.4,4-3.6 c1-0.9,2-1.7,2.9-2.7c0-0.1,0.1-0.1,0.1-0.2C54.9,42.1,53.6,42.2,52.4,42.1z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Healthcare</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/ai-ml-solutions-for-transportation">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M27.9,32.4c-1.1-2.2-2.1-4.3-3.1-6.3c-0.2-0.1-0.3-0.1-0.5-0.1c-1,0-1.5-0.5-1.1-1.4c0.5-1.3-0.2-2.1-0.7-3.2 c-2.4,1.9-4.7,3.8-7,5.6c0.2,1.1,0.3,2.1,0.4,3.1c-0.3,0.5-0.8,0.9-1.2,1.2c-1-0.6-5.1-4.7-5.5-5.6c0.2-0.5,0.7-0.8,1-1.2 c1.2-0.2,2.3,0.4,3.4,0.2c1.8-2.3,3.6-4.6,5.4-6.9c-0.6-0.5-1.3-0.7-2-1c-0.4-0.2-0.7,0-1.1,0.1c-1.2,0.3-1.6-0.1-1.6-1.4 c-2-1-4.1-2-6.2-3c0.4-0.5,0.8-0.9,1.3-1.3c0.8-0.7,1.7-0.6,2.7-0.4c1.3,0.3,2.6,0.7,3.9,1c0.3,0.1,0.6,0.1,0.9,0.2 c0.5-0.4,0.9-0.9,1.4-1.3c0.6-0.6,1-0.5,1.6,0.1c0.4,0.4,0.9,0.8,1.2,1.3c0.2,0.4,0,0.7-0.1,1c0.7,0.3,1.5,0.5,2.3,0.5 c1.1-1.1,2.2-2.2,3.3-3.2c1-0.9,2.1-1.6,3.4-2c0.6-0.2,1.3-0.3,1.9-0.1c0.5,0.5,0.5,1,0.3,1.6c-0.4,1.4-1.1,2.7-2.1,3.8 c-1.1,1.1-2.2,2.3-3.3,3.4c0,0.8,0.3,1.5,0.5,2.2c1.7-0.4,1.9,1.2,2.8,1.8c-0.2,1.1-1.1,1.5-1.7,2.3c0,0.9,0.4,1.8,0.6,2.7 c0.1,0.8,0.4,1.7,0.6,2.5c0.3,1.1,0,2.1-0.9,2.8C28.5,31.7,28.2,32,27.9,32.4z"
                                        />
                                        <path
                                          className="st0"
                                          d="M49,43c0.5,0.1,1.1-0.1,1.7,0.3c0,4.7,0,9.4,0,14.2c-4.5,0-9,0-13.6,0c-1-1.2-2.2-2.2-4-2.2 c-1.8,0-3.1,0.8-4.1,2.2c-0.6,0.1-1.1,0.1-1.8,0c0-3.2,0-6.3,0-9.6c3.7,2,7.6,2.8,11.8,1.8C43,48.6,46.3,46.4,49,43z"
                                        />
                                        <path
                                          className="st0"
                                          d="M43.5,32.9c-2.6,0-5.1,0-7.7,0c0-2.3,0-4.6,0-6.9c2.1-0.2,4.2-0.4,6.4-0.9C43,27.6,43.4,30.1,43.5,32.9z"
                                        />
                                        <path
                                          className="st0"
                                          d="M28.4,41.6c-0.8-2.5-1.3-5-1.3-7.6c0.3-0.1,0.3,0.3,0.6,0.2c0.3-0.5,0.9-0.5,1.5-0.5c1.9,0,3.7,0,5.6,0 c0,2.3,0,4.6,0,7C32.7,40.8,30.6,41.1,28.4,41.6z"
                                        />
                                        <path
                                          className="st0"
                                          d="M43.5,33.8c0,2.7-0.5,5.2-1.3,7.7c-2.1-0.5-4.2-0.8-6.4-0.8c0-2.4,0-4.6,0-7C38.3,33.8,40.8,33.8,43.5,33.8z"
                                        />
                                        <path
                                          className="st0"
                                          d="M43,24.9c1.3-0.5,2.6-1,3.9-1.7c2.4,2.8,3.6,5.9,3.8,9.6c-2.1,0-4.1,0-6.3,0C44.2,30.2,43.9,27.5,43,24.9z"
                                        />
                                        <path
                                          className="st0"
                                          d="M44.4,33.8c2.1,0,4.1,0,6.3,0c-0.2,3.6-1.4,6.8-3.8,9.6c-1.2-0.6-2.5-1.2-3.9-1.6 C43.9,39.2,44.2,36.6,44.4,33.8z"
                                        />
                                        <path
                                          className="st0"
                                          d="M19.9,33.8c2.2,0,4.2,0,6.3,0c0.2,2.7,0.5,5.3,1.4,8c-1.2,0.5-2.6,0.9-3.8,1.7C21.3,40.7,20.1,37.5,19.9,33.8z "
                                        />
                                        <path
                                          className="st0"
                                          d="M51.2,61.6c-4.6,0-9.1,0-13.7,0c0.2-1.1,0.2-2,0-3.1c4.6,0,9,0,13.7,0C51.1,59.5,51.1,60.5,51.2,61.6z"
                                        />
                                        <path
                                          className="st0"
                                          d="M30.3,25.5c0.8,0.1,1.5,0.2,2.2,0.2c0.7,0.1,1.4,0.1,2.2,0.2c0,2.3,0,4.6,0,6.9c-1.9,0-3.7,0-5.5,0 c0.1-0.4,0.4-0.6,0.7-0.8c0.8-1,1.3-2,1-3.3C30.7,27.7,30.5,26.6,30.3,25.5z"
                                        />
                                        <path
                                          className="st0"
                                          d="M26.3,32.9c-2.2,0-4.3,0-6.4,0c0-2.5,0.7-4.8,1.9-7.1c0.5,0.9,1.2,1.4,2.2,1.6C24.7,29.2,26,30.8,26.3,32.9z"
                                        />
                                        <path
                                          className="st0"
                                          d="M28.7,42.5c2.1-0.6,4-0.7,6.1-0.8c0,2.4,0,4.7,0,7c-0.8,0.1-1.5-0.3-2.1-0.7C30.7,46.6,29.6,44.6,28.7,42.5z"
                                        />
                                        <path
                                          className="st0"
                                          d="M35.8,48.5c0-2.3,0-4.5,0-6.8c1.3-0.2,4.4,0.2,6,0.7C41,45.4,37.9,48.8,35.8,48.5z"
                                        />
                                        <path
                                          className="st0"
                                          d="M39.9,20.6c0.7,1.1,1.4,2.2,1.9,3.6c-2,0.5-4,0.8-6.1,0.8c0-2.3,0-4.6,0-7c0.7,0,1.3,0.3,1.9,0.6 c0.2,0.1,0.3,0.3,0.6,0.3C39.1,19.3,39.6,19.8,39.9,20.6z"
                                        />
                                        <path
                                          className="st0"
                                          d="M30.1,24.5c-0.2-0.3-0.2-0.5-0.1-0.9c1.1-0.9,2-1.9,1.2-3.6c1-1.1,2.1-1.9,3.7-2.2c0,2.4,0,4.7,0,7 C33.2,25.1,31.7,24.8,30.1,24.5z"
                                        />
                                        <path
                                          className="st0"
                                          d="M39.3,18.4c3.2,1,5.3,2.3,6.9,4.1c-1.1,0.6-2.2,1.1-3.4,1.4c-0.7-1.2-1.1-2.6-2.1-3.6c-0.6-0.5-1.3-1-1.6-1.8 c0,0,0-0.1,0.1-0.1C39.1,18.4,39.2,18.4,39.3,18.4z"
                                        />
                                        <path
                                          className="st0"
                                          d="M31.3,48.1c-2.7-0.6-5-1.9-7-3.9c1.1-0.6,2.3-1.1,3.5-1.4C28.7,44.7,29.7,46.6,31.3,48.1z"
                                        />
                                        <path
                                          className="st0"
                                          d="M39.2,48.1c1.6-1.5,2.7-3.4,3.5-5.4c1.2,0.3,2.3,0.8,3.4,1.3C45.2,45.6,41.5,47.8,39.2,48.1z"
                                        />
                                        <path
                                          className="st0"
                                          d="M60.2,61.6c0.3-1.1,0.4-2.1,0-3.1c0.8-0.2,1.6-0.2,2.3,0c0.8,0.2,1.3,0.9,1.2,1.7c-0.1,0.7-0.7,1.3-1.5,1.4 C61.7,61.6,61,61.6,60.2,61.6z"
                                        />
                                        <path
                                          className="st0"
                                          d="M28.5,58.4c-0.3,1.1-0.3,2.1,0,3.1c-0.6,0.2-1.1,0.1-1.6,0.1c-0.8-0.1-1.4-0.8-1.5-1.5c0-0.8,0.6-1.5,1.5-1.6 C27.5,58.4,28,58.4,28.5,58.4z"
                                        />
                                        <path
                                          className="st0"
                                          d="M31.3,18.5c-0.2,0.4-0.4,0.7-0.7,0.9c-0.2-0.1-0.3-0.2-0.4-0.5C30.4,18.6,30.9,18.6,31.3,18.5z"
                                        />
                                        <path
                                          className="st0"
                                          d="M62,49.7c-0.9-1.6-1.8-3.2-2.7-4.8c-0.4-0.8-1.1-1.1-2-1.1c-1.3,0-2.6,0-3.8,0c-0.5,0-1-0.1-1.5,0.1 c0,4.4,0,8.7,0,13.2c1.2-1.3,2.5-1.9,4.1-1.9c1.7,0.1,2.9,1,3.8,2.2c0.9,0,1.6,0,2.4,0c0-0.2,0.1-0.3,0.1-0.4c0-2.1,0-4.1,0-6.2 C62.4,50.5,62.2,50.1,62,49.7z M53.6,53.3c-0.2-0.2-0.2-0.5,0.1-0.8c0.4,0,0.8,0,1.3,0c0.4,0,0.9-0.2,1.1,0.4 C55.6,53.5,55.3,53.6,53.6,53.3z M56.9,51.2c-1.1,0-2.2,0-3.3,0c-0.3-0.7-0.1-1.4-0.1-2.2c0-0.7,0-1.5,0-2.3c1.5,0,3,0,4.4,0 c0.8,1.4,1.6,2.9,2.5,4.4C59.2,51.2,58,51.2,56.9,51.2z"
                                        />
                                        <path
                                          className="st0"
                                          d="M55.8,56.2c-2,0-3.8,1.5-3.9,3.8c-0.1,2.1,1.8,3.9,3.8,3.9c2.1,0,3.8-1.7,3.9-3.8 C59.8,58.1,57.8,56.2,55.8,56.2z M55.8,61.7c-1,0-1.7-0.8-1.6-1.8c0-0.9,0.8-1.6,1.7-1.5c0.9,0.1,1.6,0.8,1.6,1.7 C57.4,60.9,56.6,61.7,55.8,61.7z"
                                        />
                                        <path
                                          className="st0"
                                          d="M33.1,56.2c-2.3-0.1-4,2-3.9,3.7c0,2.2,1.7,4,3.9,3.9c2.3-0.1,3.7-1.8,3.8-3.8C36.9,58,35.2,56.1,33.1,56.2z M33.1,61.7c-0.9,0-1.7-0.7-1.7-1.7c0-0.9,0.7-1.6,1.6-1.6c0.9,0,1.6,0.6,1.7,1.5C34.7,60.9,34,61.6,33.1,61.7z"
                                        />
                                        <path
                                          className="st0"
                                          d="M55,60c0.1-0.5,0.4-0.8,1-0.7c0.3,0.1,0.5,0.3,0.5,0.7c0,0.4-0.2,0.7-0.6,0.8C55.4,60.8,55.1,60.5,55,60z"
                                        />
                                        <path
                                          className="st0"
                                          d="M33.8,60c-0.1,0.5-0.4,0.8-1,0.7c-0.4-0.1-0.6-0.4-0.6-0.8c0-0.4,0.2-0.6,0.6-0.7C33.4,59.2,33.7,59.5,33.8,60 z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Transportation</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/ai-ml-solutions-for-education">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M64,25.5c-0.2-0.1-0.4-0.3-0.7-0.4c-1.1-0.4-2.1-0.7-3.2-1.1c-2-0.7-4-1.4-6-2.1c-3.5-1.2-6.9-2.4-10.4-3.6 c-2.1-0.7-4.3-1.4-6.4-2.2c-0.4-0.2-0.9-0.2-1.3,0c-2.1,0.8-4.3,1.5-6.4,2.2c-2.9,1-5.8,2-8.6,2.9c-2.6,0.9-5.1,1.7-7.7,2.6 c-1.1,0.4-2.3,0.7-3.4,1.2c-0.4,0.1-0.7,0.3-0.9,0.6c-0.3,0.3-0.3,0.6,0,1c0.3,0.3,0.7,0.5,1.1,0.7c1.8,0.6,3.6,1.2,5.4,1.8 c0.1,0,0.1,0.1,0.2,0.1c0.1,0.1,0.2,0.1,0.1,0.3c0,0-0.1,0.1-0.1,0.1c-1,1-1.7,2.3-2.1,3.7c-0.3,1.3-0.4,2.6-0.4,3.9 c0,0.3-0.1,0.4-0.3,0.6c-1,0.5-1.4,1.4-1.4,2.4c0,1,0.4,1.8,1.2,2.4c0.2,0.1,0.3,0.2,0.2,0.4c-0.3,2.4-1.1,4.6-2.3,6.6 c-0.8,1.4-1.7,2.7-2.7,3.9c-0.2,0.2-0.2,0.3,0.1,0.5c0.3,0.2,0.6,0.4,0.9,0.6c0.9,0.6,1.8,1.2,2.9,1.4c0,0,0.1,0,0.1,0 c0.9-0.3,1.6-0.8,2.2-1.4c0.8-0.8,1.3-1.8,1.6-2.8c0.4-1.4,0.5-2.8,0.5-4.2c0-0.7,0-1.3-0.1-2c0-0.8-0.1-1.6-0.2-2.4 c0-0.4-0.1-0.8,0.3-1c0,0,0.1-0.1,0.1-0.1c1-1.3,0.9-3-0.4-4c-0.1-0.1-0.2-0.3-0.2-0.4c0-0.2,0-0.4,0.1-0.6c0.1-1,0.2-1.9,0.5-2.9 c0.4-1.4,1.2-2.6,2.3-3.6c0.2-0.2,0.4-0.2,0.6-0.1c1.9,0.7,3.8,1.3,5.7,2c3.8,1.3,7.6,2.5,11.3,3.9c0.5,0.2,1,0.2,1.5,0 c0.9-0.4,1.8-0.6,2.7-1c2.2-0.8,4.4-1.5,6.6-2.3c3.4-1.2,6.8-2.3,10.2-3.5c1.9-0.7,3.9-1.3,5.8-2c0.3-0.1,0.6-0.2,0.8-0.4 c0.2-0.2,0.4-0.3,0.5-0.6c0-0.1,0-0.2,0-0.3C64.3,25.8,64.2,25.6,64,25.5z"
                                        />
                                        <path
                                          className="st0"
                                          d="M55.7,34.2c0-0.1,0-0.2,0-0.3c0,0-0.1,0-0.1,0c-2,0.7-3.9,1.3-5.9,2c-4.1,1.4-8.2,2.8-12.2,4.2 c-0.4,0.1-0.8,0.1-1.2,0c-1.5-0.6-3.1-1.1-4.6-1.6c-3.6-1.2-7.2-2.5-10.8-3.7c-0.5-0.2-1.1-0.4-1.6-0.5c0,0.1,0,0.1,0,0.2 c0,4.1,0,8.1,0,12.2c0,0.1,0,0.2,0,0.3c0.1,0.7,0.5,1.2,1,1.7c0.7,0.7,1.5,1.2,2.4,1.7c1.3,0.6,2.7,1.1,4.1,1.5 c1.9,0.5,3.7,0.8,5.6,1c1.5,0.2,3,0.2,4.4,0.3c1.5,0,3.1,0,4.6-0.1c1.1-0.1,2.2-0.2,3.3-0.4c1.4-0.2,2.7-0.5,4.1-0.9 c1.4-0.4,2.8-0.9,4.1-1.6c0.8-0.4,1.6-1,2.2-1.7c0.5-0.6,0.7-1.2,0.7-2C55.7,42.4,55.7,38.3,55.7,34.2z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Education</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/ai-ml-solutions-for-entertainment">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M64.3,29c-0.1-2.4-1.3-3.5-3.7-3.4c-0.9,0-1.6,0.3-2.4,0.6c-2.1,0.9-4.2,0.9-6.3,0.5c-3.4-0.6-6.7-1.4-9.3-3.9 c-0.6-0.5-1.2-0.4-1.7,0.1c-0.5,0.5-0.6,1.1-0.2,1.7c0.5,0.7,1.2,1.2,1.9,1.7c1.2,0.8,2.6,1.4,4,1.9c4.4,1.5,8.7,2.2,13.2,0.3 c0.5-0.2,1-0.5,1.6-0.2c0.3,0.5,0.3,0.9,0.3,1.4c-0.1,3.6-0.6,7.1-1.4,10.6c-1,4-2.3,7.9-4.8,11.4c-2.3,3.2-5.4,5.3-9.5,5.9 c-1.7,0.2-3.3,0-4.8-1c-2.3-1.5-4-3.4-5.1-5.8c-0.2-0.4-0.3-0.8-0.6-1.1c-0.4-0.6-1.1-0.7-1.7-0.4c-0.6,0.3-0.8,0.8-0.7,1.5 c0,0.2,0.1,0.4,0.2,0.6c1.6,3.8,4.3,6.7,8,8.5c0.6,0.3,1.3,0.4,2,0.5c4.8,0.3,9-1.2,12.4-4.7c2.5-2.6,4.2-5.6,5.4-8.9 c1.5-3.9,2.3-7.9,2.8-12C64.2,32.6,64.4,30.8,64.3,29z"
                                        />
                                        <path
                                          className="st0"
                                          d="M49.1,45.3c-1.1-0.9-2.3-1.4-3.7-1.4c-3.5,0-5.6,2-7.5,4.7c5.4-1.9,10.1-1.1,14.2,3.2 C52,49.2,51.1,47,49.1,45.3z"
                                        />
                                        <path
                                          className="st0"
                                          d="M54.1,40.5c1.4-0.1,2.7-0.7,3.9-1.5c-0.4-2.3-2.5-3.2-4-3.2c-1.9,0-2.9,1.1-3.5,2.8 C51.2,40.1,52.4,40.6,54.1,40.5z"
                                        />
                                        <path
                                          className="st0"
                                          d="M43.1,38.1c1.1,0.5,2.1,0.5,3.1-0.1c0.5-0.3,0.7-0.7,0.7-1.3c-0.1-1.7-1.3-2.9-3-3.2c-1.8-0.3-3.2,0.2-4.3,1.7 C40.7,36.4,41.7,37.4,43.1,38.1z"
                                        />
                                        <path
                                          className="st0"
                                          d="M36.4,41.5c1.4-3.1,1.9-6.3,1.8-9.8c0.1-2.9-0.4-5.9-1-8.8c-0.7-3.3-1.7-6.5-2.9-9.6c-0.6-1.6-1.7-1.9-3.1-1 c-0.7,0.4-1.3,1-1.9,1.6c-0.8,0.9-1.7,1.6-2.8,2c-3.8,1.6-7.8,2-11.9,1.5c-1.4-0.2-2.7-0.8-4.1-1.1c-1.9-0.5-2.9,0.3-2.8,2.2 c0.1,4,0.3,8,1.2,11.9c0.8,3.8,2,7.5,4.1,10.8c2.5,3.9,5.8,6.7,10.5,7.7c1.5,0.3,3.1,0.8,4.7,0.1C31.8,47.7,34.7,45.3,36.4,41.5z M14.1,29.3c0.5-1.9,1.7-2.8,3.4-3c1.8-0.3,2.9,0.6,3.7,2.2c-0.4,1.3-1.3,2-2.8,2C16.8,30.4,15.4,30,14.1,29.3z M26.3,42.8 c-2.7,0.7-6-0.6-8.2-4.1c2.5,0.7,4.9,1.2,7.3,0.7c2.4-0.5,4.5-1.7,6.3-3.4C31.6,39.2,29.3,42.1,26.3,42.8z M29.1,28.3 c-0.9,0.5-1.9,0.6-2.8,0.1c-0.5-0.3-0.7-0.7-0.6-1.3c0.2-1.4,0.9-2.5,2.3-2.9c1.6-0.4,3.1-0.3,4.3,1.1 C31.3,26.6,30.3,27.6,29.1,28.3z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Entertainment</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/ai-ml-solutions-for-travel">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M63.2,46.4c0-0.2,0-0.4,0-0.6c0,0,0,0-0.1-0.1c0-0.2-0.1-0.4-0.2-0.5c-0.7-0.9-1.6-1.3-2.7-1.2 c-0.5,0.1-1,0.2-1.4,0.5c-1,0.5-1.8,1.1-2.6,1.8c-0.5,0.4-1,0.9-1.5,1.3C53.8,48.3,53,48.7,52,49c-0.9,0.2-1.7,0.4-2.6,0.5 c-0.8,0.1-1.7,0.2-2.6,0.2c-0.9,0-1.8,0-2.7,0c-0.7,0-1.3-0.2-2-0.4c-0.7-0.3-1.5-0.6-2.2-0.9c-1-0.5-2-1-3.1-1.2 c-0.8-0.2-1.6-0.5-2.4-0.7c-0.1,0-0.1-0.1-0.2-0.1c0.5,0,0.9,0,1.4,0c0.4,0,0.9,0,1.3-0.1c0.4,0,0.9-0.1,1.3-0.2 c0.3,0,0.6,0,0.9-0.1c0.4-0.1,0.9,0,1.3,0c0.5,0,1.1,0.1,1.6,0.1c0.4,0,0.7,0.1,1.1,0.1c0.5,0.1,1.1,0.2,1.6,0.3 c0.5,0.1,1,0.2,1.5,0.2c0.7,0.1,1.3,0.3,2,0.4c0.6,0.1,1.3,0.2,1.9,0.3c0.3,0,0.7,0.1,1,0c0.5-0.1,0.8-0.3,1.1-0.7 c0.5-0.5,0.8-1.1,1-1.7c0.1-0.3,0.2-0.7,0.2-1c0.1-0.5,0-0.9-0.1-1.4c-0.2-0.7-0.7-1.2-1.2-1.6c-0.4-0.3-0.9-0.5-1.4-0.7 c-0.6-0.2-1.3-0.4-1.9-0.6c-0.8-0.2-1.7-0.4-2.6-0.5c-0.5-0.1-1-0.2-1.6-0.2c-0.4-0.1-0.9-0.1-1.3-0.1c-0.4,0-0.9-0.1-1.3-0.1 c-0.6-0.1-1.1-0.1-1.7-0.3c-0.4-0.1-0.8-0.2-1.2-0.4c-0.8-0.4-1.5-0.8-2.3-1.3c-1.2-0.7-2.4-1.3-3.6-1.7c-1.3-0.5-2.7-0.7-4.1-0.7 c-0.3,0-0.6,0-0.9,0c-1,0-2,0-3,0.1c-0.6,0.1-1.2,0.2-1.8,0.3c-1.2,0.3-2.4,0.6-3.5,1c-0.4,0.1-0.8,0.3-1.1,0.5 c-0.2,0.1-0.3,0.3-0.3,0.5c0,0.2,0,0.4-0.1,0.7c-0.1,0.7-0.1,1.3-0.2,2c-0.1,0.6-0.1,1.2-0.2,1.9c-0.1,0.8-0.1,1.5-0.2,2.3 c0,0.3,0,0.5-0.1,0.8c0,0.6-0.1,1.1-0.1,1.7c0,0.3,0,0.7-0.1,1c-0.1,0.7-0.1,1.5-0.2,2.2c0,0.1,0,0.2,0,0.2c0,0.1,0,0.3,0,0.4 c0,0.4,0.1,0.5,0.5,0.6c0.5,0.2,0.9,0.2,1.4,0.3c0.7,0.1,1.3,0.3,2,0.6c1,0.4,1.9,1,2.8,1.5c1.6,0.9,3.2,1.8,4.8,2.7 c1.6,0.9,3.3,1.9,4.9,2.7c1,0.5,2,1,3,1.4c0.5,0.2,1.1,0.3,1.6,0.3c0.8,0,1.5-0.1,2.3-0.2c0.6-0.1,1.1-0.2,1.7-0.2 c0.7-0.1,1.4-0.2,2.1-0.4c0.6-0.1,1.1-0.2,1.7-0.3c0.4-0.1,0.8-0.2,1.2-0.2c0.6-0.1,1.2-0.2,1.7-0.3c0.6-0.1,1.2-0.2,1.8-0.3 c0.4-0.1,0.9-0.2,1.3-0.3c0.8-0.2,1.4-0.5,2.1-1c0.8-0.6,1.6-1.2,2.5-1.8c0.8-0.6,1.6-1.3,2.4-1.9c0.6-0.5,1.1-0.9,1.6-1.4 c0.5-0.5,0.9-0.9,1.3-1.5c0.3-0.4,0.4-0.9,0.5-1.4c0-0.4,0-0.8-0.2-1.1c-0.1-0.2-0.1-0.3,0-0.5C62.9,47,63,46.7,63.2,46.4z"
                                        />
                                        <path
                                          className="st0"
                                          d="M26.2,31.1c0.3,0.1,0.7,0.1,1,0c0.2,0,0.4-0.1,0.6-0.3c0.6-0.6,1.3-1.2,1.9-1.8c1.5-1.5,3-2.9,4.4-4.4 c2.4-2.4,4.8-4.8,7.2-7.2c0.1-0.1,0.1-0.2,0.2-0.3c0.1,0.1,0.1,0.1,0.1,0.1c3.4,3.4,6.7,6.7,10.1,10.1c0.6,0.6,1.2,1.2,1.8,1.8 c0.5,0.5,1.1,1,1.6,1.6c0.1,0.1,0.3,0.3,0.5,0.3c0.4,0.1,0.8,0.1,1.3,0c0.1,0,0.3-0.1,0.4-0.2c0.8-0.5,1.1-1.2,1-2.1 c0-0.4-0.2-0.7-0.4-1c-0.8-0.8-1.5-1.6-2.3-2.3c-4.5-4.5-9-9-13.5-13.5c0,0-0.1-0.1-0.1-0.1c-0.4,0-0.7,0-1.1,0 c0,0-0.1,0.1-0.1,0.1c-3.2,3.2-6.4,6.4-9.7,9.7c-1.8,1.8-3.6,3.6-5.3,5.4c-0.3,0.3-0.6,0.6-0.8,0.9c-0.1,0.1-0.2,0.3-0.3,0.5 c-0.1,0.4-0.1,0.8,0,1.2C25.1,30.4,25.5,30.9,26.2,31.1z"
                                        />
                                        <path
                                          className="st0"
                                          d="M16.2,33.2c-0.4-0.1-0.8-0.1-1.2-0.1c-0.6,0-1.1-0.1-1.7-0.1c-0.1,0-0.1,0-0.2,0c-0.6,0-1.2-0.1-1.8-0.1 c-0.4,0-0.6,0.2-0.7,0.5c-0.1,0.2-0.1,0.4-0.2,0.6c-0.1,0.6-0.3,1.3-0.4,1.9c-0.1,0.5-0.2,1-0.2,1.5c-0.1,0.5-0.1,0.9-0.2,1.4 c-0.1,0.5-0.1,1.1-0.2,1.6c-0.1,0.4-0.1,0.9-0.1,1.3c-0.1,0.7-0.1,1.5-0.2,2.2c0,0.6-0.1,1.1-0.1,1.7c0,0.7-0.1,1.4-0.1,2.2 c0,1-0.1,2-0.1,2.9c0,0.2,0,0.4,0,0.5c0,0.5,0,1,0.1,1.4c0,0.2,0,0.3,0.1,0.5c0.1,0.2,0.2,0.3,0.4,0.3c0.1,0,0.2,0,0.3,0 c0.6,0,1.2,0.1,1.8,0.1c0.7,0,1.4,0.1,2.1,0.1c0.1,0,0.1,0,0.2,0c0.3,0.1,0.6,0,0.9,0c0.2,0,0.3-0.1,0.4-0.3 c0.1-0.2,0.1-0.5,0.1-0.7c0-0.7,0.1-1.4,0.1-2.1c0-0.7,0-1.3,0.1-2c0-0.3,0-0.7,0.1-1c0-0.6,0.1-1.2,0.1-1.8c0-0.5,0.1-1.1,0.1-1.6 c0-0.2,0-0.4,0.1-0.7c0-0.4,0.1-0.9,0.2-1.3c0-0.4,0.1-0.8,0.1-1.2c0.1-0.5,0.1-1.1,0.2-1.6c0-0.3,0.1-0.7,0.1-1 c0.1-0.5,0.1-1,0.2-1.5c0.1-0.4,0.1-0.9,0.2-1.3c0.1-0.5,0.1-1,0.2-1.5C16.9,33.6,16.7,33.3,16.2,33.2z"
                                        />
                                        <path
                                          className="st0"
                                          d="M29.1,32.6c0.5,0,1.1,0.1,1.6,0.2c1,0.2,2,0.4,3,0.7c1.4,0.5,2.8,1.1,4,1.8c0.2,0.1,0.3,0.2,0.5,0.2 c0.2,0,0.4,0.1,0.6,0.1c0.4,0,0.9,0,1.3,0c0.2,0,0.5,0,0.7,0.1c0.3,0.1,0.4,0.2,0.5,0.5c0,0.1,0,0.3,0,0.4c0,0.1,0,0.2,0.1,0.3 c0.1,0,0.2,0,0.3,0c0.1-0.1,0.1-0.2,0.1-0.3c0-0.2,0-0.4,0-0.6c0.1-0.3,0.2-0.4,0.4-0.4c0.2,0,0.4-0.1,0.6-0.1c0.6,0,1.3,0,1.9,0 c0.3,0,0.6,0,0.8,0.1c0.2,0,0.2,0.1,0.3,0.2c0,0.1,0.1,0.2,0.1,0.4c0,0.4,0.1,0.8,0.1,1.2c0.1,0,0.1,0,0.2,0.1 c0.4,0.1,0.9,0.1,1.3,0.2c1.3,0.3,2.6,0.6,3.9,1.1c0.8,0.3,1.6,0.7,2.3,1.3c0.1,0.1,0.2,0.2,0.3,0.3c0-3,0-5.9,0-8.8 c-4.2-4.2-8.4-8.4-12.5-12.5c-4.1,4.1-8.2,8.2-12.4,12.4c0,0.2,0,0.4,0,0.5C29.1,32.2,29.1,32.4,29.1,32.6z M41.8,32.3 c0-0.2,0-0.5,0-0.7c0-0.4,0.2-0.6,0.6-0.6c0.4-0.1,0.9,0,1.3,0c0.5,0,1,0,1.5,0.1c0.1,0,0.3,0.1,0.4,0.1c0.1,0.1,0.2,0.2,0.2,0.3 c0,0.2,0.1,0.4,0.1,0.6c0,0.5,0,1.1,0,1.6c0,0.3,0,0.7-0.1,1c0,0.4-0.1,0.4-0.5,0.5c-0.8,0-1.5,0-2.3,0c-0.3,0-0.6,0-0.9,0 c-0.3,0-0.3-0.1-0.4-0.4c0-0.3,0-0.6-0.1-0.9C41.8,33.3,41.8,32.8,41.8,32.3z M37.2,31.7c0-0.1,0-0.2,0.1-0.3 c0.1-0.3,0.2-0.4,0.5-0.4c0.2,0,0.4-0.1,0.6-0.1c0.6,0,1.2,0,1.8,0c0.2,0,0.4,0,0.6,0.1c0.3,0,0.5,0.2,0.5,0.5 c0,0.2,0.1,0.3,0.1,0.5c0,0.6,0,1.3,0,1.9c0,0.3,0,0.6-0.1,0.9c0,0.3-0.1,0.4-0.4,0.4c-0.7,0-1.4,0.1-2.2,0c-0.2,0-0.5,0-0.7,0 c-0.2,0-0.5,0-0.7-0.1c-0.1-0.2-0.1-0.4-0.1-0.6C37.1,33.5,37.1,32.6,37.2,31.7z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Travel</div>
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="menublock">
                            <h4>
                              <Link
                                href="javascript:void(0)"
                                className="text-hover-red"
                              >
                                <div className="menu-icon">
                                  <svg
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 72 72"
                                    style={{
                                      enableBackground: "new 0 0 72 72",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <g>
                                      <path
                                        className="st1"
                                        d="M36,7.6C20.4,7.7,7.7,20.1,7.6,35.9C7.6,51.6,20.1,64.3,36,64.3c15.7,0,28.3-12.5,28.4-28.3 C64.4,20.3,51.9,7.7,36,7.6z M24.2,36.8c0,3.6,0,7.1,0,10.7c0,0.9,0,0.9-0.9,0.9c-1.2,0-2.4,0-3.6,0c-0.4,0-0.6-0.1-0.6-0.6 c0-0.2,0-0.4,0-0.7c0-6.9,0-13.8,0-20.8c0-0.1,0-0.3,0-0.4c0-0.8,0-0.8,0.8-0.8c1.1,0,2.3,0,3.4,0c0.8,0,0.8,0,0.8,0.8 C24.2,29.6,24.2,33.2,24.2,36.8z M35.4,48.4c-4.7,0-8.2-4-8.1-8.1c-0.1-4.4,3.7-8.1,8-8.1c4.3,0,8.2,3.5,8.2,8.1 C43.5,44.7,39.9,48.4,35.4,48.4z M55.6,30c-1,0-1.9,0-2.9,0c-1.1,0-1-0.1-1,1.1c0,3.1,0,6.3,0,9.4c0,2.3,0,4.7,0,7 c0,0.9,0,0.9-0.8,0.9c-1.1,0-2.2,0-3.3,0c-0.8,0-0.9,0.1-0.9-0.8c0-2.8,0-5.6,0-8.4c0-2.8,0-5.5,0-8.3c0-0.8,0-0.8-0.8-0.8 c-1,0-1.9,0-2.9,0c-0.9,0-0.9,0.1-0.9-0.8c0-1.1,0-2.2,0-3.3c0-0.8,0-0.8,0.8-0.8c3.6,0,7.1,0,10.7,0c0.7,0,1.4,0,2.1,0 c0.4,0,0.5,0.1,0.5,0.5c0,1.3,0,2.6,0,3.9C56.2,29.9,56,30,55.6,30z"
                                      />
                                      <path
                                        className="st1"
                                        d="M35.4,37.1c-1.7,0-3.2,1.5-3.2,3.2c0,1.7,1.4,3.2,3.2,3.2c1.8,0,3.1-1.4,3.1-3.2 C38.5,38.5,37.1,37.1,35.4,37.1z"
                                      />
                                    </g>
                                  </svg>
                                </div>
                                IOT
                              </Link>
                            </h4>
                            <ul>
                              <li>
                                <Link href="/iot-real-estate-solution">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <path
                                        className="st0"
                                        d="M63.8,46.2c-3.3-2.9-6.5-5.8-9.8-8.6c-0.4-0.3-1.1-0.5-1.5-0.4c-2,0.5-4.1,1-6.1,1.6c-0.7,0.2-1.2,0.6-1.2,1.4 c0,0.9-0.5,1-1.2,0.8c-0.6-0.2-1.1-0.3-1.7-0.5c-0.2-0.1-0.5-0.3-0.5-0.5c0-2.4,0-4.7,0-7.3c1.1,1,2,1.7,2.8,2.5 c0.5,0.5,0.9,0.6,1.4,0c0.6-0.7,1.2-1.4,1.9-2c0.8-0.7,0.6-1.2-0.1-1.8C41.3,25.6,35,19.9,28.7,14.1c-0.7-0.7-1.1-0.7-1.9,0 c-2.2,2.1-4.5,4.1-6.8,6.2c-0.4,0.3-0.8,0.6-1.3,1.1c0-1.1,0-1.9,0-2.7c0-0.6-0.2-0.9-0.8-0.8c-1.1,0-2.1,0.1-3.2,0 c-0.9-0.1-1.2,0.3-1.1,1.1c0.1,2.1,0,4.1,0,6.2c0,0.5-0.2,1.1-0.5,1.4c-2,1.8-4.1,3.6-6.1,5.4c0,0.1,0,0.2,0,0.3 c0.9,1,1.8,1.9,2.6,2.9c0.4,0.5,0.7,0.6,1.3,0.1c0.8-0.8,1.7-1.5,2.8-2.5c0,3.2,0,6,0,8.8c0,4.7,0,9.5,0,14.2c0,0.9,0.2,1.3,1.2,1.2 c1.2-0.1,2.5-0.1,3.7,0c1.1,0.1,1.4-0.3,1.4-1.4c-0.1-3.6,0-7.2,0-10.8c0-0.9,0.2-1.2,1.1-1.1c1.1,0.1,2.3,0.1,3.4,0 c0.9-0.1,1.2,0.3,1.2,1.2c-0.1,3.6,0,7.2,0,10.8c0,1,0.2,1.3,1.3,1.3c4.5-0.1,9.1-0.1,13.6,0c1,0,1.3-0.3,1.3-1.3 c-0.1-3.9,0-7.8,0-11.6c0-2.4,0-2.4,2.3-1.8c0.7,0.2,0.9,0.5,0.8,1.2c-0.2,0.9-0.3,1.9-0.3,2.8c0,0.6,0.2,1.4,0.6,1.7 c3.2,2.9,6.4,5.7,9.6,8.5c0.7,0.6,1.3,0.6,2-0.1c2.4-2.7,4.8-5.4,7.3-8.1C64.6,47.5,64.5,46.9,63.8,46.2z M25.6,35.1c0,3,0,3-3,3 c-2.8,0-2.8,0-2.8-2.8c0-1-0.3-2.4,0.2-2.9c0.6-0.5,2-0.3,3-0.3c2.5,0,2.5,0,2.5,2.5C25.6,34.8,25.6,35,25.6,35.1z M35.6,35.2 c0,2.9,0,2.9-2.9,2.9c-2.9,0-2.9,0-2.9-2.8c0-3.1,0-3.1,2.9-3.1c2.8,0,2.8,0,2.8,2.9C35.6,35.1,35.6,35.1,35.6,35.2z M61.3,48 c-1.7,1.9-3.5,3.8-5.1,5.8c-0.4,0.5-0.7,0.6-1.3,0.1c-2.6-2.3-5.2-4.5-7.7-6.8c-0.3-0.3-0.5-0.8-0.6-1c0.1-0.9,0.2-1.5,0.3-2 c0.1-0.3,0.2-0.8,0.3-0.8c0.4,0.1,0.8,0.2,1.2,0.4c0.2,0.1,0.3,0.5,0.5,0.7c0.6,0.6,1.3,0.8,2.1,0.3c0.7-0.5,1-1.4,0.5-2.1 c-0.4-0.7-1.1-1-2-0.7c-0.5,0.2-1.1,0.3-1.6,0.3c-0.2,0-0.5-0.3-0.6-0.6c0-0.2,0.2-0.6,0.4-0.6c1.6-0.5,3.2-0.9,4.8-1.3 c0.2-0.1,0.6,0.2,0.9,0.4c2.7,2.3,5.3,4.7,8,7C61.8,47.3,61.7,47.5,61.3,48z"
                                      />
                                    </svg>
                                  </div>
                                  <div>Real Estate</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/iot-retail-ecommerce-solutions">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M36.6,19.4c-1.8,1.8-2.5,4-1.9,6.5c0.5,2,1.7,3.5,3.5,4.5c0.3,0.2,0.7,0.4,1,0.6c0,0.8,0,1.7,0,2.5 c1.6,0,3.1,0,4.7,0c0-0.9,0-1.7,0-2.6c0.5-0.3,1-0.6,1.4-0.8c2.4-1.5,3.6-4.2,3.1-7c-0.6-3.2-3.2-5.5-6.4-5.7 C39.9,17.3,38,18,36.6,19.4z"
                                        />
                                        <path
                                          className="st0"
                                          d="M29.8,55.1c-2,0-3.7,1.7-3.7,3.7c0,1.9,1.5,3.7,3.8,3.7c2,0,3.7-1.7,3.7-3.7C33.6,56.7,31.9,55,29.8,55.1z"
                                        />
                                        <path
                                          className="st0"
                                          d="M51.1,55.1c-2.1,0-3.7,1.6-3.7,3.7c0,2,1.7,3.7,3.7,3.7c2.2,0,3.7-1.8,3.7-3.7C54.8,56.8,53.3,55.1,51.1,55.1z "
                                        />
                                        <path
                                          className="st0"
                                          d="M35.1,14.4c0.2,0.3,0.6,0.4,0.9,0.3c0.4-0.1,0.6-0.5,0.6-0.9c0-0.1-0.1-0.3-0.2-0.5c-0.3-0.5-0.5-0.9-0.8-1.4 c-0.1-0.2-0.3-0.4-0.5-0.5c-0.3-0.1-0.6-0.1-0.9,0.1c-0.3,0.2-0.4,0.6-0.3,0.9C34.3,13.1,34.6,13.8,35.1,14.4z"
                                        />
                                        <path
                                          className="st0"
                                          d="M29.2,17.8c0.6,0.4,1.3,0.8,2,1.1c0.6,0.2,1.1-0.2,1.1-0.8c0-0.3-0.1-0.6-0.4-0.7c-0.6-0.4-1.2-0.8-1.9-1.1 c-0.4-0.2-0.9,0-1.1,0.4C28.7,17.1,28.8,17.5,29.2,17.8z"
                                        />
                                        <path
                                          className="st0"
                                          d="M47,14.8c0.4,0.3,0.9,0.2,1.2-0.2c0.4-0.6,0.7-1.1,1-1.8c0.3-0.6-0.1-1.3-0.8-1.3c-0.4,0-0.6,0.2-0.8,0.4 c-0.3,0.5-0.7,1.1-1,1.7C46.5,14.1,46.6,14.6,47,14.8z"
                                        />
                                        <path
                                          className="st0"
                                          d="M52.2,19.2c0.6-0.3,1.1-0.6,1.6-0.9c0.3-0.2,0.4-0.4,0.5-0.7c0-0.6-0.5-1.2-1.3-0.8c-0.6,0.3-1.1,0.6-1.7,1 c-0.5,0.3-0.6,0.8-0.4,1.2C51.2,19.3,51.7,19.5,52.2,19.2z"
                                        />
                                        <path
                                          className="st0"
                                          d="M41.6,13.3c0.8-0.2,0.9-0.4,0.9-1.2c0-0.5,0-1,0-1.5c0-0.6-0.4-1-0.9-1c-0.5,0-0.9,0.4-0.9,1 c0,0.6,0,1.1,0,1.7C40.8,12.8,41,13.1,41.6,13.3z"
                                        />
                                        <path
                                          className="st0"
                                          d="M62.5,23.8c-0.9-0.6-1.8-0.8-2.9-0.8c-3,0-6.1,0-9.1,0c-0.1,0-0.3,0-0.3,0.1c0.5,3.5-0.8,6.3-4.5,8.6 c0,1.1,0,2.3,0,3.5c-2.9,0-5.7,0-8.6,0c0-1.1,0-2.2,0-3.4c-1.1-0.6-1.9-1.4-2.7-2.3c-0.8-0.9-1.3-2-1.6-3.1 c-0.3-1.1-0.3-2.3-0.2-3.5c-3.8,0-7.5,0-11.2,0c-0.2-0.6-0.3-1.1-0.5-1.6c-0.5-1.4-1.2-2.7-2.4-3.7c-0.9-0.7-1.9-1.2-3.1-1.2 c-0.7,0-1.3,0-2,0c0-0.1-0.1-0.2-0.1-0.2c-0.5-1.2-1.6-1.8-2.8-1.8c-1.3,0.1-2.2,0.8-2.7,2c0,0.1,0,0.1-0.1,0.2c0,0.4,0,0.8,0,1.2 c0,0,0.1,0.1,0.1,0.1c0.3,1.2,1.1,1.9,2.3,2c1.2,0.2,2.2-0.2,2.9-1.2c0.1-0.1,0.1-0.1,0.2-0.2c0.7,0,1.4,0,2.1,0 c0.8-0.1,1.4,0.3,2,0.8c0.9,0.9,1.4,2.1,1.8,3.3c0.4,1.3,0.6,2.7,0.8,4c0.4,2.1,0.8,4.2,1.2,6.3c0.4,2.2,0.9,4.5,1.3,6.7 c0.3,1.8,0.7,3.7,1.1,5.5c0.2,0.9,0.2,1.8,0.4,2.7c0.4,1.7,1.5,3,3.2,3.6c0.8,0.3,1.6,0.3,2.4,0.3c7.7,0,15.3,0,23,0 c0.5,0,1,0,1.5,0c0.5,0,0.9-0.2,1.1-0.7c0.2-0.5,0-0.9-0.5-1C54.3,50,54,50,53.8,50c-3,0-6,0-9,0c-5.3,0-10.6,0-15.8,0 c-1.4,0-2.3-0.6-2.9-1.9c-0.1-0.1-0.1-0.2,0-0.3c1-0.1,2-0.1,2.9-0.2c1.4-0.1,2.8-0.2,4.2-0.3c1.4-0.1,2.8-0.2,4.2-0.3 c1.4-0.1,2.7-0.2,4.1-0.3c1.4-0.1,2.7-0.2,4.1-0.3c1.8-0.1,3.5-0.3,5.3-0.4c1.7-0.1,3.4-0.2,5.1-0.5c1.4-0.2,2.8-0.6,4.1-1.4 c1.6-1.1,2.5-2.5,2.7-4.5c0.1-1.3,0.3-2.6,0.5-3.8c0.2-1.3,0.3-2.6,0.5-3.8c0.2-1.3,0.3-2.7,0.5-4C64.5,26.3,64,24.8,62.5,23.8z M44,40.6c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-2.7,0-4,0c-0.4,0-0.7-0.1-0.9-0.4c-0.1-0.2-0.1-0.3,0-0.5c0.1-0.2,0.2-0.3,0.5-0.4 c0.2,0,0.4-0.1,0.5-0.1c1.3,0,2.5,0,3.8,0c0.2,0,0.4,0,0.6,0.1c0.2,0.1,0.4,0.3,0.4,0.5C44.4,40.4,44.2,40.5,44,40.6z M45,38.5 c-0.2,0.1-0.4,0.1-0.7,0.1c-1.9,0-3.8,0-5.8,0c-1.1,0-1.5-0.5-1.5-1.7c2.9,0,5.8,0,8.7,0C45.9,37.8,45.6,38.3,45,38.5z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Ecommerce & Retail</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/iot-healthcare-solutions">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M63.8,46c-0.8-1-2.2-1.2-3.3-0.4c-2.3,1.6-4.7,3-7,4.6c-4.7,3.2-9.9,4.1-15.5,3.7c-0.6,0-1.2-0.2-1.2-0.9 c0-0.8,0.5-0.9,1.2-1c2.5-0.1,4.9-0.3,7.4-0.4c1.6-0.1,2.7-1,2.7-2.5c0.1-1.5-0.9-2.6-2.5-2.8c-1.6-0.2-3.2-0.4-4.8-0.6 c-2.5-0.3-4.9-0.7-7.1-2c-3-1.9-6.3-2-9.5-0.5c-0.9,0.4-1.9,0.7-2.9,0.9c-1.1,0.2-1.3,0.4-1.3,1.5c0,1.7,0,3.4,0,5.1c0,0,0,0,0,0 c0,1.7,0,3.4,0,5.1c0,1.4,0.4,1.8,1.8,1.5c1.6-0.3,3,0,4.5,0.6c3.3,1.4,6.7,2.1,10.2,2.3c10.7,0.4,19.4-4.3,27.2-11 C64.5,48.4,64.6,47,63.8,46z"
                                        />
                                        <path
                                          className="st0"
                                          d="M26.9,28.1c2.1,2.7,4.5,5.2,7,7.5c0.2,0.2,0.4,0.5,0.8,0.6c-0.3-1.5-0.1-3-0.1-4.6c0-1.9,0.9-2.8,2.8-2.8 c1,0,2.1,0,3.2,0c0-1.3,0-2.4,0-3.5c0-1.5,0.9-2.4,2.4-2.4c1.3,0,2.6,0,3.9,0c1.6,0,2.4,0.9,2.5,2.5c0,0.9,0,1.8,0,3 c0.8-0.9,1.3-1.7,1.8-2.5c0.7-1.2,1.4-2.5,1.5-4c0.3-7.4-7.8-12.5-13.6-9.1c-0.5,0.3-1,0.3-1.5,0c-1.9-1-3.9-1.3-6-0.9 c-5.6,1.2-10.1,8.2-6.1,14.1C26,26.7,26.4,27.4,26.9,28.1z"
                                        />
                                        <path
                                          className="st0"
                                          d="M17.9,45.3c0-1.5-0.7-2.2-2.2-2.2c-2.3,0-4.5,0-6.8,0c-1.2,0-1.3,0.1-1.3,1.3c0,4.6,0,9.2,0,13.8 c0,1.1,0.1,1.2,1.2,1.2c2.3,0,4.6,0,6.9,0c1.5,0,2.2-0.7,2.2-2.3c0-1.9,0-3.9,0-5.8C17.9,49.2,17.9,47.3,17.9,45.3z"
                                        />
                                        <path
                                          className="st0"
                                          d="M47.7,30.6c0-1.7,0-3.3,0-4.9c0-0.8-0.3-1.1-1.1-1.1c-1,0-2,0-3,0c-1.1,0-1.2,0.1-1.2,1.2c0,1.6,0,3.1,0,4.8 c-1.7,0-3.4,0-5,0c-0.7,0-1,0.3-1,1c0,1,0,2,0,3c0,1.3,0,1.3,1.3,1.3c1.5,0,3,0,4.6,0c0,1.7,0,3.3,0,4.9c0,0.8,0.3,1.1,1.1,1.1 c1,0,2,0,3,0c1.1,0,1.2-0.1,1.2-1.2c0-1.6,0-3.1,0-4.6c0.5-0.3,0.9-0.1,1.2-0.2c1.2,0,2.5,0,3.7,0c0.7,0,1-0.3,1-1c0-1,0-2,0-3 c0-1.2,0-1.3-1.2-1.3C50.9,30.6,49.3,30.6,47.7,30.6z"
                                        />
                                        <path
                                          className="st0"
                                          d="M49.7,47.8c0.2,0.7,0.1,1.5,0.1,2.4c3.2-2,6.4-3.9,9.4-6c-0.6-1.5-1.3-1.7-2.5-1c-1.5,0.9-2.9,1.8-4.3,2.8 C51.5,46.6,50.6,47.1,49.7,47.8z"
                                        />
                                        <path
                                          className="st0"
                                          d="M52.8,40.5c-2.1,1.3-4.1,2.7-6.3,4.1c1.1,0.4,1.9,0.9,2.6,1.8c1.8-1.2,3.5-2.2,5.2-3.3c0.8-0.5,1-1.3,0.6-2 C54.4,40.3,53.6,40.1,52.8,40.5z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Healthcare</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/industrial-iot-solutions">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M20.6,26.4c0.7-0.2,1.4-0.5,2.1-0.9c1-0.5,2-0.5,2.9,0.2c0.3,0.2,0.7,0.5,1,0.7c2.6,1.7,5.6,1.5,7.9-0.4 c0.2-0.2,0.5-0.4,0.8-0.6c1-0.7,2.1-0.8,3.2-0.2c0.5,0.3,1,0.7,1.5,1.1c1.9,1.3,4,2,6.4,1.7c2.2-0.2,4.1-1.1,5.8-2.5 c2.3-1.8,3.5-4.2,3.6-7.2c0-0.7-0.1-1.4-0.2-2.1c-0.4-2.2-1.3-4.2-2.8-5.8c-4-4.1-10.6-4-14.5,0.1c-0.5,0.5-0.8,1-1.3,1.5 c-0.6,0.6-1.3,0.9-2.2,0.8c-0.6-0.1-1.1-0.3-1.6-0.5c-2.6-1.3-5.1-1-7.3,0.8c-0.7,0.6-1.3,1.3-1.9,2.1c-0.8,1.1-1.8,1.5-3.1,1.2 c-0.5-0.1-1-0.1-1.4-0.1c-3.5,0-5.9,3.4-4.8,6.7C15.3,25,17.6,27.2,20.6,26.4z"
                                        />
                                        <path
                                          className="st0"
                                          d="M59.4,34.8c0-0.1,0-0.2,0-0.3c-4.5,3-9.1,6-13.7,9c0-3,0-6,0-9c-1.5,0.8-2.9,1.8-4.2,2.7c-2.5,1.7-5,3.5-7.6,5 c-1,0.6-2.1,1.2-3.2,1.7c0-0.1,0-0.2,0-0.3c0-4.4,0-8.9,0-13.3c0-0.2-0.1-0.3-0.3-0.3c-1.8,0-3.6,0-5.4,0c-0.3,0-0.3,0.1-0.3,0.4 c0,4.2,0,8.5,0,12.7c0,0.2-0.1,0.3-0.3,0.3c-0.9,0-1.7,0-2.6,0c-0.3,0-0.3-0.1-0.3-0.3c0-4.2,0-8.4,0-12.7c0-0.3-0.1-0.4-0.4-0.4 c-1.8,0-3.5,0-5.3,0c-0.3,0-0.4,0.1-0.4,0.4c0,4.2,0,8.4,0,12.7c0,0.2-0.1,0.3-0.3,0.3c-0.7,0-1.4,0.1-2.2,0.2 c-0.3,0-0.3,0.1-0.3,0.3c0,6.8,0,13.6,0,20.4c0,0.3,0.1,0.3,0.3,0.3c15.4,0,30.8,0,46.2,0c0.2,0,0.3,0,0.3-0.3 C59.4,54.4,59.4,44.6,59.4,34.8z M25.7,58.5c-2.3,0-4.7,0-7,0c-0.2,0-0.3-0.1-0.3-0.3c0-2.3,0-4.7,0-7c0-0.2,0-0.3,0.3-0.3 c2.3,0,4.7,0,7,0c0.2,0,0.3,0.1,0.3,0.3c0,1.2,0,2.3,0,3.5c0,1.2,0,2.3,0,3.5C26,58.4,25.9,58.5,25.7,58.5z M41,58.5 c-2.4,0-4.7,0-7.1,0c-0.2,0-0.3,0-0.3-0.3c0-2.3,0-4.6,0-6.9c0-0.2,0.1-0.3,0.3-0.3c1.2,0,2.4,0,3.5,0c1.2,0,2.4,0,3.5,0 c0.2,0,0.3,0.1,0.3,0.3c0,2.3,0,4.6,0,6.9C41.3,58.4,41.3,58.5,41,58.5z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Industrial</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/iot-smart-city-solutions">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M27.3,21.1c1.6,0,3.2,0,4.8,0c0.3,0,0.7,0.1,1-0.3c0-1.7,0-3.5,0-5.2c0.7,0,1.2-0.1,1.8,0.2c0,1.7,0,3.5,0,5.3 c0.3,0,0.5,0,0.7,0c1.7,0,3.4,0,5.1,0c2-0.1,3.5-1.6,3.6-3.7c0.1-2-1.6-3.7-3.4-3.8c-0.4,0-0.9,0.1-1.3-0.1c-0.7-2.8-2.4-4.4-5-4.5 c-3.3-0.2-5.3,1.6-6.2,4.7c-0.4,0-0.7,0-1,0c-2.1,0.1-3.7,1.8-3.7,3.8C23.6,19.7,25.6,21.1,27.3,21.1z"
                                        />
                                        <path
                                          className="st0"
                                          d="M63.2,19.9c0.4-0.5,0.9-0.8,1.1-1.4c-4.5-4.2-12.3-3.8-16,0.1c0.2,0.5,0.6,0.9,1.1,1.3 C54.1,16.5,58.7,16.5,63.2,19.9z"
                                        />
                                        <path
                                          className="st0"
                                          d="M61.7,21.3c-3-3-8.4-2.6-10.6,0.1c0.4,0.4,0.7,0.9,1.3,1.2c1.2-1,2.5-1.5,3.9-1.6c1.5,0,2.9,0.7,4.1,1.6 C60.9,22.2,61.4,21.8,61.7,21.3z"
                                        />
                                        <path
                                          className="st0"
                                          d="M54.2,25.6c1.5-0.9,2.9-0.9,4.4,0c0.5-0.4,0.8-0.9,1.2-1.4c-1.9-1.7-4.9-1.7-6.7,0 C53.5,24.6,53.8,25.1,54.2,25.6z"
                                        />
                                        <path
                                          className="st0"
                                          d="M62.1,61.2c0-0.6,0-1.1,0-1.5c0-8.8,0-17.6,0-26.4c0-1.8-0.2-2-2.1-2c-0.9,0-1.7,0-2.7,0c0-1.6,0-3.1,0-4.6 c-0.7,0.1-1.2-0.1-2,0.2c0,1.4,0,2.9,0,4.4c-0.7,0-1.1,0-1.6,0c-4.6,0-9.3,0-13.9,0c-0.3,0-0.7,0-1,0c-0.8,0.1-1.1,0.4-1.1,1.1 c0,0.3,0,0.7,0,1c0,8.7,0,17.5,0,26.2c0,0.5,0.1,1-0.1,1.5c-0.5,0-1.1,0-1.6,0c0-0.2-0.1-0.3-0.1-0.5c0-9.4,0-18.8,0-28.2 c0-1.9,1.1-2.9,3-3c0.6,0,1.2,0.1,1.8-0.2c0-1.1,0-2.1,0-3.2c0-1.1,0.1-2.2-0.1-3.2c-1.9,0-3.7,0-5.4,0c-0.3,0.6,0.1,1.2-0.3,1.8 c-0.5,0-1,0.1-1.4,0c-0.4-0.5,0.1-1.2-0.4-1.8c-1.8,0-3.6,0-5.5,0c-2.2,0-3.8-1.1-4.9-2.9c-0.3-0.5-0.5-1.1-0.7-1.7 c-2.1,0-4.3,0-6.4,0c-0.9,0-1.1,0.3-1.1,1.2c0,0.2,0,0.4,0,0.6c0,4.7,0,9.5,0,14.2c0,0.4,0,0.8,0,1.2c2.1,1.1,2.8,2.8,2.8,5.1 c-0.1,3.7-0.1,7.5,0,11.2c0,1.9-0.3,3.7-1.9,4.9c0,1.5,0,3,0,4.5c-0.6,0-1.2,0.1-1.7-0.1c0-1.9,0-3.8,0-5.6 c1.3-0.6,1.8-1.5,1.8-2.9c0-4.2,0-8.5,0-12.7c0-0.2,0-0.4,0-0.6c-0.2-1.3-1.2-2.3-2.4-2.4c-1.2-0.1-2.5,0.6-3,1.8 c-0.2,0.6-0.3,1.2-0.3,1.8c0,3.7,0.1,7.4,0,11.1c0,1.8,0.3,3.3,1.9,4c0,1.9,0,3.7,0,5.6c-1.2,0-2.4,0-3.7,0 c-0.1,0.8-0.2,1.4,0.1,1.9c18.7,0,37.4,0,56.1,0c0-0.7,0.2-1.3-0.2-1.9C63.2,61.2,62.7,61.2,62.1,61.2z M25.6,27.7 c2.2,0,4.2,0,6.3,0c0,1.8,0,3.6,0,5.5c-2.1,0-4.1,0-6.3,0c0-0.9,0-1.8,0-2.7C25.6,29.5,25.6,28.6,25.6,27.7z M25.3,37 c0.3,1.5,0.1,2.9,0.1,4.5c-1.5,0-3,0-4.5,0c0-1.5,0-3,0-4.5C22.4,37,23.8,37,25.3,37z M25.4,45.5c0,1.5,0,2.9,0,4.4 c-1.4,0-2.9,0-4.4,0c0-1.4,0-2.9,0-4.4C22.5,45.5,23.9,45.5,25.4,45.5z M17.2,27.7c2.1,0,4.2,0,6.3,0c0,1.8,0,3.6,0,5.5 c-2.1,0-4.1,0-6.3,0C17.2,31.3,17.2,29.5,17.2,27.7z M32,60.6c0,0.1,0,0.3,0,0.4c-1.1,0.3-8.8,0.3-11,0.1c0-2,0-4.1,0-6.1 c1.3-0.3,10-0.3,11.1,0C32,56.9,32,58.7,32,60.6z M32,50c-1.5,0-3,0-4.5,0c0-1.5,0-2.9,0-4.5c1.5,0,2.9,0,4.4,0 C32.1,47,31.9,48.5,32,50z M27.5,41.6c0-1.6,0-3,0-4.5c1.4-0.2,2.9-0.1,4.4-0.1c0.3,1.6,0,3.1,0.2,4.6C30.4,41.6,29,41.6,27.5,41.6 z M40.6,43.6c1.2,0,2.3,0,3.5,0c0,1.8,0,3.6,0,5.5c-1.2,0-2.2,0-3.5,0C40.6,47.3,40.6,45.5,40.6,43.6z M44.1,58.4 c-1.1,0-2.3,0-3.5,0c0-1.8,0-3.5,0-5.4c1.2,0,2.3,0,3.5,0C44.1,54.8,44.1,56.6,44.1,58.4z M44.2,36.8c0,0.9,0,1.8,0,2.8 c-1.2,0-2.3,0-3.6,0c0-1.7,0-3.5,0-5.4c1.3,0,2.3,0,3.5,0C44.3,35.1,44.2,36,44.2,36.8z M51.6,58.4c-1.2,0-2.3,0-3.5,0 c0-1.7,0-3.5,0-5.3c1.1,0,2.2,0,3.5,0C51.6,54.8,51.6,56.6,51.6,58.4z M51.7,49.1c-1.3,0-2.3,0-3.6,0c-0.2-0.9-0.1-1.8-0.1-2.8 c0-0.9,0-1.8,0-2.7c1.2-0.2,2.3-0.1,3.6-0.1C51.7,45.4,51.7,47.2,51.7,49.1z M51.7,36.8c0,0.9,0,1.8,0,2.8c-1.2,0-2.3,0-3.6,0 c0-1.7,0-3.5,0-5.4c1.3,0,2.3,0,3.5,0C51.8,35.1,51.7,36,51.7,36.8z M55.5,43.5c1.3,0,2.4,0,3.6,0c0,1.8,0,3.6,0,5.5 c-1.1,0-2.2,0-3.5,0C55.4,47.3,55.6,45.5,55.5,43.5z M59.1,58.4c-1.1,0-2.3,0-3.5,0c0-1.8,0-3.5,0-5.4c1.2,0,2.3,0,3.5,0 C59.1,54.8,59.1,56.6,59.1,58.4z M59.2,36.8c0,0.9,0,1.8,0,2.8c-1.2,0-2.3,0-3.6,0c0-1.8,0-3.5,0-5.3c1.1,0,2.3,0,3.5,0 C59.3,35.1,59.2,36,59.2,36.8z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Smart City</div>
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="menublock">
                            <h4>
                              <Link href="/">
                                <div className="menu-icon">
                                  <svg
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 72 72"
                                    style={{
                                      enableBackground: "new 0 0 72 72",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <g>
                                      <path
                                        className="st1"
                                        d="M58.5,22c0.4,1,1.1,1.5,2.1,1.8c0,0.9,0,1.8,0,2.7c-1.2,0.2-6.9,1.3-7.3,1.4c0.1,0.4,0.1,0.9,0.2,1.2h0.1 c2.6-0.5,5.2-1.1,7.7-1.5c0.7-0.1,0.8-0.3,0.8-0.9c0-0.7,0-1.4,0-2.1c0-0.3,0-0.6,0-0.9c1.7-0.7,2.5-1.9,2.3-3.4 c-0.2-1.2-1.5-2.4-3-2.5c-1.5-0.1-2.7,0.8-3.1,2.2C58.2,20.8,58.3,21.5,58.5,22z"
                                      />
                                      <path
                                        className="st1"
                                        d="M59,46.4c0-1.1,0-2,0-3.1c0-0.5-0.2-0.7-0.6-0.8c-0.1,0-0.2-0.1-0.3-0.1c-1.7-0.3-3.3-0.7-5.1-1 c-0.6-0.1-1.1-0.3-1.7-0.3c-0.2,0.5-0.5,0.8-0.6,1.2c2.3,0.5,4.7,1,7,1.4c0,1,0,1.8,0,2.7c-1.8,0.8-2.6,1.9-2.3,3.5 c0.2,1.2,1.4,2.3,2.8,2.4c1.2,0.1,2.7-0.7,3.1-2.2C61.5,48.8,60.9,47.1,59,46.4z"
                                      />
                                      <path
                                        className="st1"
                                        d="M50.6,19.9c0.3,0.5,0.5,1,0.8,1.3c1.5,0,3,0,4.5,0c0.5,0,0.7-0.3,0.8-0.7c0-0.2,0-0.4,0-0.6c0-0.7,0-1.2,0-1.9 c1.5-0.6,2.5-1.8,2.3-3.2c-0.2-1.5-1.2-2.7-2.9-2.8c-1.4-0.1-2.7,0.8-3.1,2.2c-0.2,0.7-0.2,1.3,0.1,1.9c0.4,1,1.1,1.5,2.1,1.8 c0,0.6,0,1.2,0,1.9C53.7,19.9,52.2,19.9,50.6,19.9z"
                                      />
                                      <path
                                        className="st1"
                                        d="M61.4,32.8c-1.4-0.1-2.6,0.7-3.1,1.9c-0.1,0.1-0.1,0.3-0.2,0.4c-1.6,0-3.2,0-4.9,0C53.2,35.6,53,36,53,36.5 c1.7,0,3.4,0,5.1,0c0.2,0.1,0.2,0.3,0.2,0.4c0.5,1.3,1.9,2.3,3.6,1.8c1.5-0.4,2.4-1.7,2.2-3.4C63.9,34.1,62.8,32.9,61.4,32.8z"
                                      />
                                      <path
                                        className="st1"
                                        d="M26.5,24.2c-0.1,0.7-0.1,10.4,0,10.8c3.5,0,7.2,0,10.7,0c0.2-0.5,0.2-10.3,0-10.8 C33.7,24.2,30.2,24.2,26.5,24.2z"
                                      />
                                      <path
                                        className="st1"
                                        d="M52.6,29.5c-0.2-2.1-0.7-4.2-1.5-6.2c-1.5-3.6-3.9-6.6-7.1-8.9c-2.5-1.8-5.3-3-8.3-3.5 c-2.2-0.4-4.3-0.5-6.5-0.2c-2.1,0.3-4.1,0.9-5.9,1.7c-5.2,2.5-8.8,6.4-10.7,11.8c-0.6,1.6-1,3.2-1.1,5c-0.1,1.5-0.1,3.1,0.1,4.5 c0.1,0.7,0.2,1.2-0.3,1.7c0,0-0.1,0.1-0.1,0.2c-1.1,2.1-2.3,4.2-3.4,6.3c-0.3,0.6-0.2,1,0.5,1.2c1,0.4,1.9,0.8,2.9,1.1 c0.8,0.3,1.6,0.6,2.4,1c0,0.2,0,0.4,0,0.5c0,2.9,0,5.6,0,8.5c0,0.7,0.3,1.1,1.1,1.1c2.3,0,4.7,0,7,0c0.2,0,0.4-0.1,0.6,0.1 c0,1.4,0,2.9,0,4.3c0,0.3,0,0.6,0,0.9c0,0.6,0.3,0.8,0.8,0.8c0.1,0,0.2,0,0.3,0c5.1,0,10.2,0,15.3,0c1.1,0,2.3,0,3.4,0 c0.6,0,0.8-0.3,0.8-0.8c0-0.1,0-0.2,0-0.4c0-3.6,0-7.4,0-11c0-0.2,0-0.4,0-0.7l0.1-0.1c2.7-1.5,4.6-3.8,6.3-6.2 c1.1-1.4,1.7-3,2.3-4.6C52.4,34.9,52.8,32.3,52.6,29.5z M36.1,16c0.5,0,0.7,0.3,0.8,0.8c0,1.1,0,2.1,0,3.2c0,0.5,0,0.9,0,1.3 c0,0.4-0.2,0.7-0.5,0.8c-0.5,0.1-0.9-0.2-0.9-0.7c0-0.8,0-1.5,0-2.3c-0.1-0.8-0.1-1.5-0.1-2.3C35.4,16.3,35.6,16,36.1,16z M31,16.8 c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7c0,0.8,0,1.5,0,2.3s0,1.5,0,2.3c0,0.4-0.2,0.6-0.5,0.7c-0.3,0.1-0.6,0-0.8-0.3 C31,21.7,31,21.5,31,21.4C31,19.8,31,18.2,31,16.8z M26.6,16.7c0-0.3,0.2-0.6,0.6-0.7c0.4,0,0.7,0.2,0.8,0.7c0,0.8,0,1.5,0,2.3 c0,0.7,0,1.4,0,2.1c0,0.5-0.2,0.8-0.7,0.8c-0.5,0-0.7-0.3-0.7-0.8C26.6,19.7,26.6,18.2,26.6,16.7z M23.4,34.8c-1.1,0-2.1,0-3.2,0 c-0.4,0-0.8,0-1.1,0c-0.6,0-1-0.6-0.6-1.1c0.2-0.2,0.4-0.3,0.7-0.3c0.8,0,1.5,0,2.3,0c0.7,0,1.4,0,2.1,0c0.5,0,0.8,0.2,0.9,0.7 C24.3,34.4,24,34.8,23.4,34.8z M18.2,29.7c0-0.4,0.3-0.7,0.8-0.7c0.8,0,1.5,0,2.3,0c0.7,0,1.4,0,2.1,0c0.5,0,0.8,0.3,0.8,0.7 c0.2,0.3-0.2,0.7-0.7,0.7c-1.5,0-3,0-4.5,0C18.5,30.4,18.2,30.1,18.2,29.7z M23.6,25.8c-0.8,0-1.5,0-2.3,0c-0.8,0-1.5,0-2.3,0 c-0.3,0-0.5-0.2-0.7-0.5c-0.1-0.2,0.1-0.5,0.3-0.7c0.1-0.1,0.3-0.2,0.5-0.2c1.5,0,3,0,4.5,0c0.5,0,0.8,0.3,0.8,0.7 C24.3,25.6,24,25.8,23.6,25.8z M27.8,40.2c0,0.8,0,1.4,0,2.2c0.1,0.7-0.4,1-0.9,0.8c-0.3-0.1-0.4-0.4-0.5-0.7c0-0.2,0-0.5,0-0.7 c0-1.1,0-2.3,0-3.4c0-0.2,0-0.3,0-0.5c0.1-0.5,0.3-0.7,0.7-0.7c0.4,0,0.7,0.2,0.7,0.7C27.8,38.7,27.8,39.4,27.8,40.2z M31.4,43.2 c-0.4-0.1-0.6-0.4-0.6-0.8c0-1,0-1.8,0-2.8c0-0.6,0-1.1,0-1.6c0-0.5,0.3-0.8,0.7-0.8c0.5,0,0.7,0.2,0.7,0.7c0,0.8,0,1.5,0,2.3 c0.1,0.9,0.1,1.5,0.1,2.3C32.3,43,31.9,43.3,31.4,43.2z M36.7,40.2c0,0.8,0,1.4,0,2.2c0,0.5-0.3,0.8-0.7,0.8 c-0.4,0-0.7-0.3-0.7-0.8c0-1.4,0-3,0-4.4c0-0.4,0.2-0.7,0.5-0.7c0.4-0.1,0.6,0.1,0.8,0.3c0.1,0.2,0.1,0.3,0.1,0.5 C36.7,38.9,36.7,39.5,36.7,40.2z M37,36.4c-3.3,0-6.8,0-10.1,0c-1.1,0-1.7-0.9-1.7-1.7c0.1-1.7,0-3.4,0-5.1c0-1.7,0-3.3,0-5.1 c0-1.1,0.6-1.6,1.6-1.6c3.3,0,6.8,0,10.1,0c1.1,0,1.7,0.7,1.7,1.7c0.1,3.3,0.1,6.7,0.1,10C38.7,35.7,38.1,36.4,37,36.4z M39.8,29.1 C40,29,40.2,29,40.4,29c0.7,0,1.4,0,2.1,0c0.7,0,1.4,0,2.1,0c0.6,0,0.8,0.2,0.8,0.7c0.1,0.4-0.2,0.7-0.7,0.7c-1.4,0-3,0-4.4,0 c-0.4,0-0.7-0.2-0.8-0.5C39.4,29.6,39.6,29.3,39.8,29.1z M44.8,34.8c-1.5,0-3,0-4.5,0c-0.3,0-0.6-0.2-0.7-0.5s0-0.5,0.2-0.8 c0.2-0.2,0.3-0.2,0.5-0.2c0.8,0,1.5,0,2.3,0c0.7,0,1.4,0,2.1,0c0.5,0,0.8,0.2,0.8,0.7C45.6,34.4,45.3,34.8,44.8,34.8z M44.9,26 c-0.8,0-1.5,0-2.3,0c-0.8,0-1.4,0-2.2,0c-0.4,0-0.8-0.3-0.7-0.8c-0.1-0.4,0.1-0.7,0.5-0.7c0.2,0,0.4,0,0.5,0c1.2,0,2.5,0,3.8,0 c0.1,0,0.3,0,0.4,0c0.4,0.1,0.7,0.3,0.7,0.8C45.6,25.7,45.4,26,44.9,26z"
                                      />
                                    </g>
                                  </svg>
                                </div>
                                AR VR
                              </Link>
                            </h4>
                            <ul>
                              <li>
                                <Link href="/ar-vr-solutions-for-real-estate">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M36.5,27.5c-5.5-1.3-10.9-2.6-16.4-3.9c0.6,3.1,1.1,6,1.7,8.9c0.1,0.7,0.7,1.2,1.4,1.2c3.5,0,7,0,10.5,0 c1,0,1.8-1,1.6-1.9c-0.2-1-0.1-1.9,0.4-2.8C35.9,28.5,36.2,28,36.5,27.5z"
                                        />
                                        <path
                                          className="st0"
                                          d="M36.5,34.8C35.9,35.6,35,36,34,36c-3.6,0-7.1,0-10.7,0c-1.4,0-2.3-0.7-3-1.8c-0.3-0.6-0.4-1.3-0.6-1.9 c-0.6-2.9-1.1-5.8-1.7-8.7c-0.2-0.8-0.2-1.6-0.5-2.5c-0.3,0-0.5,0-0.8,0c-0.5,0-0.9,0-1.4,0c-0.7,0-1.1-0.5-1-1.1 c0-0.5,0.4-0.9,1-0.9c0.6,0,1.2,0,1.7,0c1.2,0,2,0.5,2.4,1.7c0.1,0.3,0.2,0.6,0.3,0.9c0.2,0,0.3,0.1,0.5,0.1 c5.4,1.1,10.8,2.3,16.1,3.4c1,0.2,1.8,0.6,2.2,1.5c2.2,0.1,3.6,1,4.6,3c0.3,0.6,0.6,1.2,0.9,1.7c0.4,0.8,0.8,1.5,1.2,2.3 c0.1-0.1,0.1-0.2,0.2-0.2c0.3-1,0.5-2,0.6-3.1c0.2-1.5,0-3.1-0.2-4.6C45.1,21,43,17.1,39.4,14c-4.5-3.9-9.8-5.4-15.7-4.6 c-3.3,0.4-6.3,1.7-8.9,3.7c-2.6,2-4.7,4.5-6,7.5c-1.4,3.2-1.9,6.5-1.5,10c0.2,2.1,0.7,4.1,1.5,5.9c3,6.6,8.2,10.4,15.4,11.5 c3.9,0.6,7.7-0.2,11.2-1.9c0.1-0.1,0.3-0.1,0.4-0.3c-0.3-0.5-0.6-1.1-0.7-1.7c-0.4-1.4,0.1-2.7,1.3-3.6c0.6-0.4,1.3-0.6,2.1-0.8 C37.9,38,37.3,36.4,36.5,34.8z M25.2,41.3c-1,0-1.8-0.8-1.8-1.8c0-0.9,0.8-1.7,1.8-1.8c1,0,1.8,0.8,1.8,1.8 C26.9,40.5,26.2,41.3,25.2,41.3z M31.9,41.3c-1,0-1.8-0.8-1.8-1.7c0-1,0.8-1.8,1.8-1.8c0.9,0,1.7,0.8,1.7,1.8 C33.7,40.4,32.9,41.2,31.9,41.3z"
                                        />
                                        <path
                                          className="st0"
                                          d="M64.5,54.8c-0.4-0.7-0.7-1.4-1-2.2c-0.2-0.5-0.5-0.9-0.9-1.2c-0.7-0.5-1-1.2-1.2-2.1c-0.4-1.6-0.8-3.2-1.2-4.9 c-0.6-2.5-1.5-4.8-2.8-7c-0.6-1-1.4-1.5-2.6-1.5c-0.7,0-1.4,0.2-2.1,0.3c-2,0.4-4,0.9-6,1.4c-1.2,0.3-1.9-0.1-2.4-1.2 c-0.4-0.7-0.7-1.5-1.1-2.2c-0.6-1.3-1.3-2.6-1.9-3.9c-0.4-0.8-1-1.4-1.8-1.8c-0.7-0.3-1.5-0.1-1.9,0.5c-0.6,0.9-0.8,1.7-0.3,2.8 c1.8,3.9,3.3,7.9,4.8,11.9c0.1,0.2,0.2,0.3,0.1,0.6c-0.3,0-0.4-0.3-0.5-0.5c-0.5-0.7-1.1-1.3-1.7-1.8c-0.4-0.3-0.8-0.6-1.3-0.7 c-1.1-0.3-2.2,0.8-1.9,1.9c0.2,0.8,0.5,1.5,1,2.2c1.1,1.4,2.1,2.8,3.2,4.1c1.8,2.4,4,4.3,6.9,5.3c0.6,0.2,1,1.1,0.8,1.7 c-0.2,0.6-0.2,1.2,0,1.7c0.4,1,0.8,2,1.2,3c0.4,0.9,1,1.4,2,1.6c0.6,0.1,1.1,0,1.6-0.3c2-0.8,3.9-1.7,5.9-2.5 c1.3-0.5,2.5-1.1,3.8-1.6C64.4,58,65.3,56.2,64.5,54.8z M52,61c-0.6-1.4-1.2-2.7-1.8-4.1c3.7-1.6,7.4-3.1,11.1-4.7 c0.6,1.3,1.2,2.7,1.8,4.1C59.4,57.9,55.7,59.5,52,61z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Real Estate</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/ar-vr-solutions-for-retail-ecommerce">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M63.6,32.9c0-0.4-0.1-0.7-0.1-1.1c-0.2-1.7-0.6-3.3-1.1-4.9c-1.3-3.8-3.3-7.1-6.2-9.9 c-1.9-1.9-4.1-3.5-6.6-4.7c-3.2-1.6-6.6-2.5-10.1-2.7c-1.5-0.1-2.9,0-4.4,0.2c-1.7,0.2-3.3,0.6-4.9,1.1c-4.6,1.5-8.4,4.2-11.5,7.9 c-2.3,2.8-4,5.9-5,9.5c-0.5,1.8-0.8,3.5-0.9,5.3c-0.1,1,0,2,0,3c0,0.6,0.1,1.2,0.2,1.8c0,0.2,0,0.5,0.1,0.7c1-0.4,2-0.6,3.1-0.6 c-0.3-2.4-0.3-4.7,0-7c0.4-2.3,1.1-4.4,2.2-6.6c0.1,0.5,0.1,1,0.2,1.4c0.3,1.6,0.8,3.2,1.5,4.6c0.6,1.1,1.3,2.1,2.4,2.9 c1,0.8,2.2,1.2,3.4,1.6c1,0.3,1.9,0.6,2.9,1c1.6,0.7,2,2.7,0.6,3.8c-0.4,0.3-0.8,0.6-1.1,0.8c-0.1,0.1-0.2,0.1-0.2,0.3 c0.6,0.2,1.2,0.3,1.8,0.5c0.4,0.1,0.7,0.1,1,0c1.6-0.6,3.2-1.2,4.9-1.6c0.6-0.2,1.2-0.3,1.9-0.5c-0.1-0.2-0.3-0.2-0.4-0.2 c-1-0.4-2-0.9-2.9-1.3c-0.8-0.4-1.3-0.9-1.6-1.7c-0.3-0.7-0.4-1.4-0.5-2.1c-0.1-0.7-0.1-1.5-0.3-2.2c-0.2-0.9-0.7-1.2-1.6-1 c-0.6,0.1-1.1,0.3-1.7,0.4c-0.4,0.1-0.8,0.1-1.2-0.2c-0.5-0.4-0.9-0.9-0.9-1.6c-0.1-1,0.3-1.9,1-2.5c0.5-0.5,1.2-0.9,1.9-0.9 c1,0,1.9,0.3,2.7,0.8c0.8,0.5,1.5,1.2,2.2,1.9c0.3,0.3,0.6,0.6,1,0.9c0.3,0.2,0.7,0.3,1,0.2c0.3-0.1,0.6-0.2,0.8-0.4 c0.6-0.5,0.9-1.2,1.2-1.9c0.2-0.4,0.3-0.9,0.3-1.4c0-0.6-0.1-0.8-0.6-1c-0.2-0.1-0.3-0.1-0.5-0.2c-0.4-0.3-0.6-0.7-0.5-1.2 c0.1-0.3,0.2-0.5,0.4-0.7c0.5-0.5,1-1,1.6-1.4c0.7-0.5,1.4-0.9,2-1.4c0.7-0.6,0.7-1.4,0-2c-0.4-0.3-0.8-0.5-1.2-0.7 c-0.6-0.3-1.3-0.6-1.9-0.9c-0.6-0.3-1.3-0.6-1.8-1.1c-0.3-0.3-0.6-0.6-0.7-1c-0.1-0.4,0-0.7,0.3-1c0.3-0.3,0.7-0.4,1.1-0.5 c1.4-0.4,2.8-0.4,4.3-0.2c1.8,0.3,3.5,0.7,5.2,1.4c0.1,0,0.2,0.1,0.3,0.1c0.5,0.4,1,0.9,1.5,1.4c1.1,1.4,1.7,3,2,4.7 c0.2,1.4-0.1,2.6-1,3.6c-1,1.1-2.2,1.9-3.5,2.4c-0.5,0.2-1.1,0.4-1.6,0.7c-1.4,1-2,2.3-1.9,4c0.1,0.7,0.3,1.2,1,1.5 c0.3,0.1,0.5,0.3,0.8,0.4c0.6,0.2,1.2,0.5,1.8,0.8c0.8,0.5,1.3,1.2,1.2,2.2c0,0.1,0,0.3,0,0.4c0,0.9,0.3,1.6,1.1,2.1 c0.9,0.6,1.8,0.8,2.8,0.8c1.1,0,2,0.6,2.4,1.6c0.3,0.6,0.2,1-0.4,1.5c-0.3,0.2-0.7,0.4-1,0.7c-0.8,0.5-1.1,1.2-1,2.1 c0,0.4,0.2,0.6,0.5,0.7c0.3,0.1,0.6,0.3,0.9,0.4c0.7,0.3,0.8,0.6,0.6,1.4c-0.1,0.3-0.2,0.7-0.3,1c-0.1,0.4-0.2,0.9-0.1,1.3 c0.1,0.5,0.4,0.8,0.8,1.1c-1.1,1.1-2.3,1.9-3.6,2.7c-2.4,1.4-5,2.4-7.7,2.9c0.1,1.1,0.3,2.1,0.1,3.2c0.4-0.1,0.7-0.2,1.1-0.2 c2.7-0.5,5.2-1.4,7.5-2.8c2.2-1.2,4.2-2.8,6-4.7c2.6-2.7,4.5-5.9,5.7-9.4c0.6-1.6,0.9-3.3,1.1-5c0-0.3,0-0.7,0.2-1 c0-1.4,0-2.7,0-4.1C63.6,33.1,63.6,33,63.6,32.9z"
                                        />
                                        <path
                                          className="st0"
                                          d="M42.8,49.3c0.9-0.5,1.8-1.1,2.6-1.9c0.6-0.5,1.1-1.1,1.4-1.8c0.5-1.2,0-2.3-1-2.7c-0.3-0.1-0.5-0.2-0.8-0.3 c-0.3-0.1-0.5-0.1-0.8,0c-1.7,0.8-3.5,1.6-5.2,2.4c-0.2,0.1-0.4,0.2-0.6,0.2c0.1-0.4,0.1-0.8,0.1-1.3c1.3-0.6,2.6-1.2,3.9-1.8 c-0.6-0.1-1.2-0.2-1.8-0.1c-1.5,0.1-2.9,0.4-4.3,0.8c-1.8,0.5-3.6,1.1-5.3,1.8c-0.3,0.1-0.5,0.1-0.8,0c-4-1.1-8.1-2.1-12.1-3.2 c-0.6-0.2-1.3-0.3-1.9-0.3c-1.1,0-2,0.4-2.9,0.9c-0.9,0.5-1.1,1.5,0,2.2c1.7,1,3.3,2.1,4.9,3.2c0.9,0.6,1.8,1.2,2.7,1.8 c-0.1,0.2-0.3,0.3-0.5,0.3c-1.5,0.7-2.9,1.5-4.3,2.4c-0.3,0.2-0.6,0.2-0.9,0c-1.1-0.6-2.3-1.2-3.5-1.8c-0.8-0.4-1.5-0.5-2.4-0.2 c-0.9,0.3-1.3,1-0.7,2c0.7,1.2,1.4,2.4,2.1,3.7c-0.4,0.4-0.8,0.8-1.1,1.2c-0.1,0.2-0.2,0.4-0.2,0.7c0,0.5,0.3,0.9,0.8,1.1 c0.8,0.4,1.6,0.4,2.4,0.4c0.7-0.1,1.4-0.2,2.1-0.3c2.4-0.5,4.8-1.1,7.2-1.7c4.5-1.2,9-2.5,13.4-4.1C37.8,51.8,40.4,50.7,42.8,49.3z "
                                        />
                                        <path
                                          className="st0"
                                          d="M39.1,56.1c-0.1-0.9-0.2-1.7-0.3-2.6c0-0.3-0.2-0.4-0.4-0.5c-0.2-0.1-0.4,0-0.6,0.1c-2,0.7-3.9,1.4-5.9,2.1 c-0.3,0.1-0.5,0.2-0.8,0.3c-0.5,0.2-0.6,0.6-0.3,1c0.1,0.1,0.2,0.2,0.3,0.3c1,1.2,2,2.3,3.1,3.5c0.5,0.6,1,1.1,1.5,1.7 c0.4,0.5,0.8,0.6,1.3,0.3c0.3-0.1,0.7-0.3,1-0.5c1-0.6,1.4-1.5,1.5-2.6c0-0.2,0-0.3,0-0.4C39.3,57.9,39.2,57,39.1,56.1z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Ecommerce & Retail</div>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  )}

                  {!isSmallScreen ? (
                    <li className="nav-item dropdown servicesDropdown-li hide shreejinandola Services">
                      {" "}
                      <Link
                        className="nav-link dropdown-toggle d-inline-block py-2"
                        href="#"
                        id="servicesDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Services
                      </Link>
                      <div
                        id="megamenu-1"
                        className="dropdown-menu dropdown-menu-Services_3 py-0"
                        aria-labelledby="servicesDropdown"
                      >
                        <div className="megamenu-blocks-22 p-4">
                          <div className="menublock">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="tab d-block d-inline">
                                  <Link
                                    href="/mobile-application-development"
                                    className={`tablinks nav-link active show gray mobile ${
                                      hoveredCity === "MOBILE" ? "active" : ""
                                    }`}
                                    onMouseOver={() => openCity("MOBILE")}
                                  >
                                    {" "}
                                    MOBILE DEVELOPMENT
                                  </Link>

                                  <Link
                                    href="/web-development"
                                    className={`nav-link mt-3 gray tablinks web ${
                                      hoveredCity === "WEB" ? "active" : ""
                                    }`}
                                    onMouseOver={() => openCity("WEB")}
                                  >
                                    WEB DEVELOPMENT
                                  </Link>

                                  <Link
                                    href="/progressive-services"
                                    className={`nav-link mt-3 gray tablinks ${
                                      hoveredCity === "PROGRESSIVE"
                                        ? "active"
                                        : ""
                                    }`}
                                    onMouseOver={() => openCity("PROGRESSIVE")}
                                  >
                                    PROGRESSIVE SERVICES
                                  </Link>

                                  <Link
                                    href="/blockchain-development"
                                    className={`nav-link mt-3 gray tablinks ${
                                      hoveredCity === "BLOCKCHAIN"
                                        ? "active"
                                        : ""
                                    }`}
                                    onMouseOver={() => openCity("BLOCKCHAIN")}
                                  >
                                    BLOCKCHAIN
                                  </Link>
                                  <Link
                                    href="/digital-marketing"
                                    className={`nav-link mt-3 gray tablinks ${
                                      hoveredCity === "DIGITAL" ? "active" : ""
                                    }`}
                                    onMouseOver={() => openCity("DIGITAL")}
                                  >
                                    DIGITAL MARKETING
                                  </Link>
                                </div>
                              </div>
                              <div className="col-md-8 sec">
                                <div
                                  id="MOBILE"
                                  className={`tabcontent w-100 p-0 ${
                                    hoveredCity === "MOBILE" ? "active" : ""
                                  }`}
                                >
                                  <div className="row mt-2">
                                    <div className="col-md-12">
                                      <Image
                                        src={mobileDevlopmentImg}
                                        alt="mobileDevlopmentImg"
                                        style={{ width: "100%" }}
                                      />
                                    </div>
                                    <div className="col-md-12 mt-4 mb-1">
                                      <h3 className="txt">
                                        Mobile Development
                                      </h3>
                                      Businesses are adopting mobile-first
                                      technologies to provide seamless user
                                      experience. Our team of Mobile App
                                      developers provides top-notch graphics for
                                      a smooth experience.
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/iphone-app-development">iOS</Link>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/android-app-development">
                                        Android
                                      </Link>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/react-native-app-development-company">
                                        React
                                      </Link>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/ionic-app-development-company">
                                        Ionic
                                      </Link>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/flutter-app-development-company">
                                        Flutter
                                      </Link>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/cross-platform-development">
                                        Cross-platform
                                      </Link>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  id="WEB"
                                  className={`one tabcontent w-100 p-0 ${
                                    hoveredCity === "WEB" ? "active" : ""
                                  }`}
                                >
                                  <div className="row mt-2">
                                    <div className="col-md-12">
                                      <Image
                                        src={webDevlopmentImg}
                                        alt="webDevlopmentImg"
                                        style={{ width: "100%" }}
                                      />
                                    </div>
                                    <div className="col-md-12 mt-4">
                                      <h3 className="txt">Web Development</h3>
                                      Our team of website designers and
                                      developers provides a digital presence
                                      with compatible and attractive websites to
                                      our clients
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/fullstack-js-development">
                                        Fullstack Js
                                      </Link>{" "}
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/ecommerce-and-cms-development">
                                        ecommerce & CMS
                                      </Link>{" "}
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/magento-development-company">
                                        Magento
                                      </Link>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/wordpress-development-company">
                                        Wordpress
                                      </Link>
                                    </div>
                                    <div className="col-md-6 mt-3 mb-2">
                                      <Link href="/progressive-web-application-development">
                                        Progressive & Web Application
                                      </Link>{" "}
                                    </div>
                                  </div>
                                </div>

                                <div
                                  id="PROGRESSIVE"
                                  className={`one tabcontent w-100 p-0 ${
                                    hoveredCity === "PROGRESSIVE"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  <div className="row mt-2">
                                    <div className="col-md-12">
                                      <Image
                                        src={progressiveservImg}
                                        alt="progressiveservImg"
                                        style={{ width: "100%" }}
                                      />
                                    </div>
                                    <div className="col-md-12 mt-4">
                                      <h3 className="txt">
                                        Progressive Services
                                      </h3>
                                      This is the era of cross-platform
                                      technologies. X-Byte Solutions is an
                                      expert in delivering innovative solutions
                                      supported with several devices and
                                      browsers.
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/iot-app-development">IOT</Link>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/artificial-intelligence-and-machine-learning-development">
                                        AI & machine Learning
                                      </Link>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/ar-vr-app-development-company">
                                        AR / VR
                                      </Link>
                                    </div>
                                    <div className="col-md-4 mt-3 mb-2">
                                      <Link href="/devops-consulting-service">
                                        DevOps Consulting
                                      </Link>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  id="BLOCKCHAIN"
                                  className={`one tabcontent w-100 p-0 ${
                                    hoveredCity === "BLOCKCHAIN" ? "active" : ""
                                  }`}
                                >
                                  <div className="row mt-2">
                                    <div className="col-md-12">
                                      <Image
                                        src={blockchainImg}
                                        alt="blockchainImg"
                                        style={{ width: "100%" }}
                                      />
                                    </div>
                                    <div className="col-md-12 mt-4">
                                      <h3 className="txt">BlockChain</h3>
                                      We deliver the framework that allows the
                                      development and management of
                                      blockchain-based applications and
                                      services.
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/smart-contract-development-company">
                                        Smart Contract
                                      </Link>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/dapps-development-services-company">
                                        dApps
                                      </Link>
                                    </div>
                                    <div className="col-md-4 mt-3 mb-2">
                                      <Link href="/crypto-currency-development-company">
                                        Crypto Currency
                                      </Link>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  id="DIGITAL"
                                  className={`one tabcontent w-100 p-0 ${
                                    hoveredCity === "DIGITAL" ? "active" : ""
                                  }`}
                                >
                                  <div className="row mt-2">
                                    <div className="col-md-12">
                                      <Image
                                        src={digitalmarkImg}
                                        alt="digitalmarkImg"
                                        style={{ width: "100%" }}
                                      />
                                    </div>
                                    <div className="col-md-12 mt-4">
                                      <h3 className="txt">Digital Marketing</h3>
                                      Being in the modern era of digitalization,
                                      our creative and innovative team provides
                                      all-round digital marketing and optimized
                                      SEO-friendly solutions.
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/app-store-optimization">
                                        App Store Optimization
                                      </Link>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <Link href="/social-media-marketing">
                                        Social Media Marketing
                                      </Link>
                                    </div>
                                    <div className="col-md-4 mt-3 mb-2">
                                      <Link href="/search-engine-optimization">
                                        Search Engine Optimization
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ) : (
                    <li className="nav-item dropdown servicesDropdown-li show1">
                      <Link
                        className="nav-link dropdown-toggle d-inline-block py-2"
                        href="#"
                        id="servicesDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded={isDropdownOpen}
                        onClick={() => toggleDropdown("Services")}
                      >
                        Services
                      </Link>
                      <div
                        id="megamenu-1"
                        className={`dropdown-menu py-0 ${
                          isDropdownOpen === "Services" ? "show" : ""
                        }`}
                        aria-labelledby="servicesDropdown"
                      >
                        <div className="megamenu-blocks-3">
                          <div className="menublock">
                            <h4>
                              <Link
                                href="/mobile-application-development"
                                className="text-hover-red"
                              >
                                <div className="menu-icon">
                                  <svg
                                    className="main-service"
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 72 72"
                                    style={{
                                      enableBackground: "new 0 0 72 72",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <g>
                                      <path
                                        className="st1"
                                        d="M33.5,26.4c0-1.1,0-2,0-2.9c0-2-1.5-3.5-3.5-3.6c-1.8,0-3.6,0-5.4,0c-2,0-3.5,1.6-3.5,3.5c0,1.8,0,3.5,0,5.3 c0,2,1.6,3.5,3.6,3.6c1.8,0,3.5,0,5.3,0c1.7,0,3.1-1.2,3.5-2.9C33.6,28.4,33.4,27.3,33.5,26.4z"
                                      />
                                      <path
                                        className="st1"
                                        d="M47.7,23.6c0-2-1.6-3.6-3.6-3.6c-1.8,0-3.5,0-5.3,0c-2,0-3.5,1.6-3.6,3.5c0,1.8,0,3.5,0,5.3 c0,2,1.5,3.5,3.5,3.5c1.8,0,3.6,0,5.4,0c1.8,0,3.1-1.2,3.4-2.9c0.2-1.1,0-2.1,0.1-3C47.7,25.3,47.7,24.5,47.7,23.6z"
                                      />
                                      <path
                                        className="st1"
                                        d="M33.5,37.8c0-2-1.6-3.6-3.6-3.6c-1.8,0-3.5,0-5.3,0c-2,0-3.5,1.6-3.6,3.5c0,1.8,0,3.5,0,5.3 c0,2,1.6,3.5,3.5,3.5c1.8,0,3.6,0,5.4,0c1.8,0,3.1-1.2,3.4-2.9c0.2-1.1,0-2.2,0.1-3.1C33.5,39.5,33.5,38.6,33.5,37.8z"
                                      />
                                      <path
                                        className="st1"
                                        d="M50.5,55.5c-10.2,0-20.4,0-30.6,0c-0.4,0-0.6,0-0.6-0.6c0-12.6,0-25.3,0-37.9c0-0.4,0.1-0.6,0.5-0.6 c9.7,0,19.4,0,29.1,0c0.4,0,0.5,0.1,0.5,0.6c0,4.7,0,9.4,0,14.1c0,1.3,0,1.3,1.3,1.3c0.3,0,0.4-0.1,0.4-0.4c0-7,0-13.9,0-20.9 c0-1.5-0.8-2.6-2.2-3.2c-0.3-0.1-0.6-0.2-0.9-0.3c-9.2,0-18.3,0-27.5,0c0,0-0.1,0-0.2,0.1c-1.6,0.1-2.8,1.1-3.1,2.8 c-0.1,0.5-0.1,1-0.1,1.5c0,16,0,32.1,0,48.1c0,0.3,0,0.6,0,0.9c0.1,1.9,1.4,3.2,3.3,3.4c0,0,0.1,0,0.1,0c9.2,0,18.3,0,27.5,0 c0,0,0.1-0.1,0.1-0.1c1.9-0.4,3-1.8,3-3.7c0-1.5,0-2.9,0-4.4C51.3,55.6,51.1,55.5,50.5,55.5z M38.7,11.1c0.6,0,1.3,0,1.9,0 c0.5,0,0.8,0.4,0.8,0.9c0,0.5-0.3,0.9-0.9,0.9c-0.2,0-0.3,0-0.5,0c-0.1,0-0.3,0-0.4,0c-0.3,0-0.6,0-0.9,0c-0.5,0-0.8-0.4-0.8-0.9 C37.9,11.4,38.2,11.1,38.7,11.1z M28.3,11.1c1.1,0,2.3,0,3.4,0c1.1,0,2.3,0,3.4,0c0.6,0,1,0.3,1,0.9c0,0.6-0.4,0.9-1,0.9 c-2.3,0-4.5,0-6.8,0c-0.7,0-1-0.3-1-0.9C27.2,11.4,27.6,11.1,28.3,11.1z M38.7,60.8c-2.9,0-5.8,0-8.7,0c-0.6,0-1-0.3-1-0.9 c0-0.5,0.4-0.9,1-0.9c1.5,0,3,0,4.4,0c1.4,0,2.8,0,4.3,0c0.6,0,1,0.3,1,0.9C39.7,60.5,39.3,60.8,38.7,60.8z"
                                      />
                                      <path
                                        className="st1"
                                        d="M54.8,37.9c0-2.2-1.5-3.8-3.8-3.8c-4,0-8,0-12,0c-2.3,0-3.8,1.5-3.8,3.8c0,3.9,0,7.9,0,11.8 c0,2.4,1.5,3.9,3.9,3.9c3.9,0,7.9,0,11.8,0c2.3,0,3.9-1.5,3.9-3.8c0-2,0-4,0-5.9C54.8,41.9,54.8,39.9,54.8,37.9z M51.2,44.4 c0.1,0.2-0.1,0.4-0.3,0.4c-0.1,0-0.1,0-0.2,0c-0.7,0-1.1,0.3-1.3,1c-0.2,0.5-0.1,0.8,0.2,1.2c0.5,0.6,0.5,0.6-0.1,1.1 c0,0-0.1,0.1-0.1,0.1c-0.8,0.8-0.5,0.7-1.4,0.1c-0.3-0.2-0.6-0.3-0.9-0.1c0,0-0.1,0-0.1,0.1c-0.8,0.1-1.2,0.6-1.1,1.4 c0,0.3-0.2,0.5-0.5,0.4c0,0-0.1,0-0.1,0c-1.2,0-1.2,0-1.4-1.1c-0.1-0.3-0.2-0.4-0.5-0.5c-0.3-0.1-0.6-0.2-0.9-0.4 c-0.3,0.1-0.5,0.3-0.8,0.5c-0.3,0.3-0.6,0.3-0.9-0.1c0,0-0.1-0.1-0.1-0.1c-0.8-0.7-0.8-0.8-0.1-1.6c0.2-0.2,0.3-0.5,0.1-0.7 c0,0,0-0.1,0-0.1c-0.2-0.8-0.6-1.3-1.5-1.2c-0.3,0-0.4-0.2-0.4-0.4c0-0.1,0-0.1,0-0.2c0-0.4-0.1-0.8,0.1-1.1c0.2-0.3,0.7-0.2,1-0.2 c0.2-0.1,0.5-0.1,0.5-0.4c0-0.1,0-0.1,0.1-0.2c0.5-0.7,0.3-1.2-0.2-1.8c-0.2-0.2-0.2-0.4,0-0.6c0,0,0.1-0.1,0.1-0.1 c0.8-0.8,0.8-0.8,1.7-0.2c0.2,0.2,0.4,0.2,0.6,0c0.1,0,0.1-0.1,0.2-0.1c0.8-0.2,1.2-0.6,1.1-1.4c0-0.3,0.2-0.4,0.5-0.4 c0,0,0.1,0,0.1,0c1.2,0,1.2,0,1.4,1.1c0.1,0.3,0.1,0.5,0.4,0.5c0.1,0,0.1,0,0.2,0.1c0.6,0.4,1.1,0.3,1.6-0.2c0.3-0.3,0.5-0.3,0.8,0 c0,0,0,0,0,0c0.8,0.8,0.8,0.8,0.2,1.8c-0.1,0.2-0.2,0.4-0.1,0.6c0,0,0,0.1,0.1,0.1c0.2,0.8,0.6,1.4,1.6,1.3c0,0,0.1,0,0.1,0 C51.5,43.4,51.1,44,51.2,44.4z"
                                      />
                                      <path
                                        className="st1"
                                        d="M45,41c-1.6,0-2.9,1.3-2.9,2.9c0,1.6,1.3,3,2.9,3c1.6,0,3-1.3,3-2.9C47.9,42.3,46.6,41,45,41z"
                                      />
                                    </g>
                                  </svg>
                                </div>
                                Mobile Development
                              </Link>
                            </h4>
                            <ul>
                              <li>
                                <Link href="/iphone-app-development">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <g>
                                          <g>
                                            <g>
                                              <path
                                                className="st0"
                                                d="M46.6,7.6c-3,0.2-6.6,2.1-8.6,4.7c-1.9,2.3-3.4,5.7-2.8,9c3.3,0.1,6.7-1.9,8.7-4.4 C45.7,14.5,47.1,11.1,46.6,7.6z"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                        <g>
                                          <g>
                                            <g>
                                              <path
                                                className="st0"
                                                d="M58.6,26.7c-2.9-3.6-7-5.8-10.8-5.8c-5.1,0-7.2,2.4-10.8,2.4c-3.6,0-6.4-2.4-10.8-2.4 c-4.3,0-8.9,2.6-11.8,7.2c-4.1,6.4-3.4,18.3,3.2,28.5c2.4,3.6,5.6,7.7,9.7,7.8C31,64.4,32,62,37,62c5,0,6,2.4,9.6,2.4 c4.2,0,7.5-4.6,9.9-8.2c1.7-2.6,2.3-3.9,3.7-6.9C50.6,45.6,49.1,31.9,58.6,26.7z"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </svg>
                                  </div>
                                  <div>iOS</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/android-app-development">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <g>
                                          <path
                                            className="st0"
                                            d="M15.5,25.9c-1,0-1.8,0.3-2.5,1c-0.7,0.7-1,1.5-1,2.5v14.7c0,1,0.3,1.8,1,2.5c0.7,0.7,1.5,1,2.5,1 c1,0,1.8-0.3,2.5-1c0.7-0.7,1-1.5,1-2.5V29.4c0-1-0.3-1.8-1-2.5S16.4,25.9,15.5,25.9z"
                                          />
                                          <path
                                            className="st0"
                                            d="M43.7,12.7l2.4-4.5C46.3,8,46.3,7.7,46,7.6c-0.3-0.1-0.5-0.1-0.7,0.2l-2.5,4.5c-2.2-1-4.5-1.4-6.9-1.4 c-2.4,0-4.7,0.5-6.9,1.4l-2.5-4.5c-0.2-0.3-0.4-0.3-0.7-0.2c-0.3,0.2-0.3,0.4-0.2,0.7l2.4,4.5c-2.5,1.3-4.4,3-5.9,5.2 c-1.5,2.2-2.2,4.7-2.2,7.4h31.6c0-2.7-0.7-5.1-2.2-7.4C48.1,15.7,46.2,14,43.7,12.7z M29.7,19.2c-0.3,0.3-0.6,0.4-0.9,0.4 c-0.4,0-0.7-0.1-0.9-0.4c-0.3-0.3-0.4-0.6-0.4-0.9c0-0.4,0.1-0.7,0.4-0.9c0.3-0.3,0.6-0.4,0.9-0.4s0.7,0.1,0.9,0.4 c0.3,0.3,0.4,0.6,0.4,0.9C30.1,18.7,30,19,29.7,19.2z M44.1,19.2c-0.3,0.3-0.6,0.4-0.9,0.4c-0.4,0-0.7-0.1-0.9-0.4 c-0.3-0.3-0.4-0.6-0.4-0.9c0-0.4,0.1-0.7,0.4-0.9c0.3-0.3,0.6-0.4,0.9-0.4c0.4,0,0.7,0.1,0.9,0.4c0.3,0.3,0.4,0.6,0.4,0.9 C44.5,18.7,44.4,19,44.1,19.2z"
                                          />
                                          <path
                                            className="st0"
                                            d="M20.3,49.3c0,1,0.4,1.9,1.1,2.7c0.7,0.7,1.6,1.1,2.7,1.1h2.5l0,7.8c0,1,0.3,1.8,1,2.5s1.5,1,2.5,1 c1,0,1.8-0.3,2.5-1c0.7-0.7,1-1.5,1-2.5v-7.8h4.7v7.8c0,1,0.3,1.8,1,2.5c0.7,0.7,1.5,1,2.5,1c1,0,1.8-0.3,2.5-1 c0.7-0.7,1-1.5,1-2.5v-7.8h2.6c1,0,1.9-0.4,2.6-1.1c0.7-0.7,1.1-1.6,1.1-2.7V26.6H20.3V49.3z"
                                          />
                                          <path
                                            className="st0"
                                            d="M56.5,25.9c-1,0-1.8,0.3-2.5,1c-0.7,0.7-1,1.5-1,2.5v14.7c0,1,0.3,1.8,1,2.5c0.7,0.7,1.5,1,2.5,1 c1,0,1.8-0.3,2.5-1c0.7-0.7,1-1.5,1-2.5V29.4c0-1-0.3-1.8-1-2.5C58.3,26.3,57.5,25.9,56.5,25.9z"
                                          />
                                        </g>
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Android</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/react-native-app-development-company">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M54.2,27.1c-0.6-0.2-1.2-0.4-1.8-0.6c0.1-0.4,0.2-0.8,0.3-1.2c1.4-6.7,0.5-12.1-2.6-13.8 c-2.9-1.7-7.8,0.1-12.6,4.3c-0.5,0.4-0.9,0.8-1.4,1.3c-0.3-0.3-0.6-0.6-0.9-0.9c-5.1-4.5-10.2-6.4-13.3-4.7 c-2.9,1.7-3.8,6.8-2.6,13.1c0.1,0.6,0.3,1.3,0.4,1.9c-0.7,0.2-1.4,0.4-2.1,0.7c-6,2.1-9.8,5.4-9.8,8.7c0,3.5,4.1,7,10.3,9.1 c0.5,0.2,1,0.3,1.5,0.5c-0.2,0.7-0.3,1.3-0.4,2c-1.2,6.2-0.3,11.2,2.7,12.9c3,1.7,8.1,0,13.1-4.4c0.4-0.3,0.8-0.7,1.2-1.1 c0.5,0.5,1,0.9,1.5,1.4c4.8,4.1,9.5,5.8,12.5,4.1c3-1.8,4-7.1,2.7-13.5c-0.1-0.5-0.2-1-0.3-1.5c0.4-0.1,0.7-0.2,1.1-0.3 c6.5-2.1,10.7-5.6,10.7-9.2C64.2,32.5,60.3,29.2,54.2,27.1z M39,17.6c4.2-3.6,8.1-5.1,9.8-4c1.9,1.1,2.6,5.5,1.4,11.3 c-0.1,0.4-0.2,0.8-0.3,1.1c-2.3-0.5-4.9-0.9-7.6-1.2c-1.6-2.2-3.2-4.2-4.8-6C38.1,18.4,38.6,18,39,17.6z M24.4,38.8 c0.5,1,1,2,1.6,2.9c0.6,1,1.2,1.9,1.8,2.9c-1.8-0.2-3.6-0.5-5.2-0.8C23.1,42.2,23.7,40.5,24.4,38.8z M24.4,33.1 c-0.7-1.7-1.3-3.3-1.8-4.9c1.6-0.4,3.3-0.7,5.1-0.9c-0.6,0.9-1.2,1.9-1.7,2.8C25.5,31.1,24.9,32.1,24.4,33.1z M25.7,35.9 c0.7-1.5,1.5-3.1,2.4-4.6l0,0c0.9-1.5,1.8-2.9,2.7-4.4c1.7-0.1,3.4-0.2,5.1-0.2c1.7,0,3.5,0.1,5.2,0.2c1,1.4,1.9,2.9,2.7,4.3 c0.9,1.5,1.7,3,2.4,4.5c-0.8,1.6-1.6,3.1-2.4,4.6l0,0c-0.9,1.5-1.8,2.9-2.7,4.4C39.5,45,37.8,45,36,45c-1.8,0-3.5-0.1-5.1-0.2 c-1-1.4-1.9-2.9-2.8-4.4C27.3,39,26.5,37.5,25.7,35.9z M46,41.7c0.6-1,1.1-2,1.6-3c0.8,1.7,1.4,3.4,1.9,5c-1.6,0.4-3.4,0.7-5.3,0.9 C44.8,43.6,45.4,42.7,46,41.7z M47.6,33.1c-0.5-1-1.1-2-1.6-2.9c-0.6-1-1.1-1.9-1.7-2.8c1.8,0.2,3.5,0.5,5.1,0.9 C48.9,29.8,48.3,31.4,47.6,33.1z M36,20.5c1.1,1.2,2.2,2.6,3.3,4c-2.2-0.1-4.5-0.1-6.7,0C33.8,23.1,34.9,21.7,36,20.5z M23,13.6 c1.9-1.1,6.1,0.5,10.5,4.4c0.3,0.3,0.6,0.5,0.8,0.8c-1.6,1.8-3.3,3.8-4.8,6c-2.7,0.2-5.2,0.6-7.5,1.2c-0.1-0.6-0.3-1.2-0.4-1.7l0,0 C20.5,18.7,21.2,14.6,23,13.6z M20.3,43.2c-0.5-0.1-0.9-0.3-1.4-0.4c-2.8-0.9-5-2.2-6.6-3.5c-1.4-1.2-2.1-2.4-2.1-3.4 c0-2.1,3.1-4.7,8.2-6.5c0.6-0.2,1.3-0.4,1.9-0.6c0.7,2.3,1.6,4.7,2.8,7.1C21.9,38.4,21,40.9,20.3,43.2z M33.3,54.2 c-2.2,1.9-4.4,3.3-6.3,4l0,0c-1.7,0.6-3.1,0.6-4,0.1c-1.8-1-2.5-5-1.5-10.3c0.1-0.6,0.3-1.3,0.4-1.9c2.3,0.5,4.9,0.9,7.6,1.1 c1.6,2.2,3.2,4.2,4.8,6C34.1,53.5,33.7,53.9,33.3,54.2z M36.1,51.5c-1.1-1.2-2.3-2.6-3.4-4.1c1.1,0,2.2,0.1,3.3,0.1 c1.2,0,2.3,0,3.4-0.1C38.3,48.9,37.2,50.2,36.1,51.5z M50.7,54.8c-0.3,1.8-1,3-1.8,3.5c-1.8,1-5.6-0.3-9.7-3.8 c-0.5-0.4-0.9-0.8-1.4-1.3c1.6-1.7,3.2-3.8,4.7-6c2.7-0.2,5.3-0.6,7.7-1.2c0.1,0.5,0.2,0.9,0.3,1.4C51,50.2,51.1,52.8,50.7,54.8z M52.8,42.8L52.8,42.8c-0.3,0.1-0.6,0.2-0.9,0.3c-0.7-2.3-1.7-4.7-2.9-7.2c1.1-2.4,2.1-4.8,2.7-7.1c0.6,0.2,1.1,0.3,1.7,0.5 c5.2,1.8,8.4,4.5,8.4,6.5C61.8,38.1,58.4,40.9,52.8,42.8z"
                                        />
                                        <circle
                                          className="st0"
                                          cx="36"
                                          cy="35.9"
                                          r="5"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>React</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/ionic-app-development-company">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <path
                                        className="st0"
                                        d="M59.3,19.8c0.6-0.8,0.9-1.9,0.9-2.9c0-2.8-2.3-5.2-5.2-5.2c-1.1,0-2,0.3-2.9,0.9c-4.8-3.3-10.3-5-16.1-5 C20.4,7.6,7.6,20.3,7.6,36S20.4,64.3,36,64.3c15.6,0,28.4-12.7,28.4-28.4C64.3,30.1,62.6,24.6,59.3,19.8z M55,22 c0.6,0,1.2-0.1,1.8-0.3c0.9,1.4,1.8,2.9,2.4,4.4c1.3,3.1,2,6.4,2,9.8c0,3.4-0.7,6.7-2,9.8c-1.3,3-3.1,5.7-5.4,8l0,0 c-2.3,2.3-5,4.1-8,5.4c-6.2,2.6-13.4,2.6-19.7,0c-3-1.3-5.7-3.1-8-5.4c-2.3-2.3-4.1-5-5.4-8c-1.3-3.1-2-6.4-2-9.8 c0-3.4,0.7-6.7,2-9.8c1.3-3,3.1-5.7,5.4-8c2.3-2.3,5-4.1,8-5.4c3.1-1.3,6.4-2,9.8-2c3.4,0,6.7,0.7,9.8,2c1.5,0.7,3,1.5,4.4,2.4 c-0.2,0.6-0.3,1.2-0.3,1.8C49.9,19.7,52.2,22,55,22z"
                                      />
                                      <circle
                                        className="st0"
                                        cx="36"
                                        cy="36"
                                        r="13.1"
                                      />
                                    </svg>
                                  </div>
                                  <div>Ionic</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/flutter-app-development-company">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M41.8,64.3L26.5,49l8.5-8.6l23.9,23.9H41.8z"
                                        />
                                        <path
                                          className="st0"
                                          d="M26.3,49l15.2-15.2h17.1L34.9,57.5L26.3,49z"
                                        />
                                        <path
                                          className="st0"
                                          d="M13.1,35.8l8.6,8.6L58.6,7.6H41.4L13.1,35.8z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Flutter</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/cross-platform-development">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M60.4,19c-0.7-0.1-1-0.3-0.9-1c0-0.4,0-0.9,0-1.3c-0.2-2.1-1.2-3.3-3.3-3.9c-4.2,0-8.3,0-12.5,0 c-9.6,0-19.2,0-28.8,0c-2.3,0.6-3.3,1.9-3.3,4.5c0,9.7,0,19.4,0,29.1c0,0.4,0,0.8,0,1.2c0,0.5-0.2,0.7-0.7,0.6c-0.3,0-0.7,0-1,0 c-1.7,0-2.3,0.7-2.4,2.4c0,1.7,0.7,2.5,2.4,2.5c3.4,0,6.7,0.1,10.1,0.1c2,0,2,0,2.1,2c0.1,2.3,1.1,3.6,3.3,4.3 c0.2,0,0.4-0.1,0.7-0.1c10,0,20.1,0,30.1,0c1.6,0,3.1,0,4.7,0.1c2.3-0.6,3.3-1.9,3.3-4.2c0-6.8,0-13.7,0-20.5c0-3.9,0-7.9,0.1-11.8 C63.8,20.3,62.9,19.4,60.4,19z M22.2,33.3c0,4.4,0,8.9,0,13.3c0,1.7,0.2,1.5-1.5,1.5c-0.8,0-1.6,0-2.4,0c-1-0.1-1.5-0.5-1.7-1.5 c-0.1-0.4,0-0.9,0-1.3c0-8.3,0-16.6,0-25c0-0.2,0-0.5,0-0.7c-0.1-1.5,0.7-2.4,2.2-2.2c1.3,0.1,2.6,0,3.9,0c4.3,0,8.7,0,13,0 c5.6,0,11.1,0,16.7,0c0.6,0,1.2-0.1,1.7,0.4c0.2,0.2,0.5,0.5,0.4,0.9c-0.1,0.3-0.5,0.2-0.8,0.2c-0.3,0-0.7,0-1,0 c-4.6,0-9.2,0-13.8,0c-0.6,0-1.1,0-1.7,0.1c-2.2,0.3-3.5,1.8-3.6,4c0,1.3,0,2.7,0,4c0,1.8,0.2,1.6-1.6,1.6c-1.7,0-3.4,0-5.1,0 C23.8,28.7,22.2,30.3,22.2,33.3z M38.4,52.5c0,1.7-0.4,2.1-2.1,2.1c-2.4,0-4.7,0-7.1,0c-1.6,0-2.1-0.4-2.1-2.1c0-2.8,0-5.6,0-8.4 c0-2.8,0-5.5,0-8.3c0-1.8,0.4-2.1,2.2-2.2c2.3,0,4.6,0,6.9,0c1.7,0,2.1,0.4,2.1,2C38.4,41.2,38.4,46.9,38.4,52.5z M59.5,52.8 c-0.1,1.2-0.7,1.8-1.8,1.8c-4.5,0-9,0-13.5,0c-1,0-0.9-0.5-0.9-1.2c0-6.4,0-12.8,0-19.2c0-0.4,0-0.8,0-1.2c-0.1-2.5-1.4-4-3.8-4.3 c-1-0.1-1.2-0.5-1.1-1.4c0-0.4,0-0.8,0-1.2c0-1.8,0.5-2.3,2.3-2.3c5.2,0,10.3,0,15.5,0c0.3,0,0.7,0,1,0c1.8,0,2.3,0.5,2.3,2.3 c0,4.4,0,8.8,0,13.1c0,4.1,0,8.2,0,12.3C59.5,52,59.5,52.4,59.5,52.8z"
                                        />
                                        <path
                                          className="st0"
                                          d="M48.9,48.1c-1.4,0-2.6,1.2-2.5,2.6c0.1,1.3,1.3,2.4,2.6,2.3c1.3-0.1,2.4-1.3,2.4-2.5 C51.4,49.2,50.2,48.1,48.9,48.1z"
                                        />
                                        <path
                                          className="st0"
                                          d="M32.6,48.1c-1.3,0-2.4,1.2-2.4,2.5c0,1.3,1.2,2.4,2.5,2.4c1.3,0,2.5-1.2,2.5-2.4C35.2,49.2,34,48.1,32.6,48.1z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Cross-Platform</div>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menublock">
                            <h4>
                              <Link href="/web-development">
                                <div className="menu-icon">
                                  <svg
                                    className="main-service"
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 72 72"
                                    style={{
                                      enableBackground: "new 0 0 72 72",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <g>
                                      <path
                                        className="st1"
                                        d="M7.6,36.8c0,0.1,0.1,0.1,0.1,0.2c0,1.3,0,2.7,0,4c0,0,0,0-0.1,0C7.6,39.6,7.6,38.2,7.6,36.8z"
                                      />
                                      <path
                                        className="st1"
                                        d="M7.6,21.7C7.7,21.6,7.7,21.6,7.6,21.7c0.1,1.2,0.1,2.5,0.1,3.7c0,0,0,0-0.1,0C7.6,24.2,7.6,22.9,7.6,21.7z"
                                      />
                                      <path
                                        className="st1"
                                        d="M7.6,41C7.7,41,7.7,41,7.6,41c0.1,1,0.1,1.9,0.1,2.8c0,0,0,0-0.1,0C7.6,42.9,7.6,41.9,7.6,41z"
                                      />
                                      <path
                                        className="st1"
                                        d="M7.6,25.4C7.7,25.4,7.7,25.4,7.6,25.4c0.1,0.9,0.1,1.8,0.1,2.7c0,0,0,0-0.1,0C7.6,27.2,7.6,26.3,7.6,25.4z"
                                      />
                                      <path
                                        className="st1"
                                        d="M7.6,28.1C7.7,28.1,7.7,28.1,7.6,28.1c0.1,0.8,0.1,1.5,0.1,2.3c0,0.1,0,0.2-0.1,0.3C7.6,29.9,7.6,29,7.6,28.1z"
                                      />
                                      <path
                                        className="st1"
                                        d="M7.6,43.8C7.7,43.8,7.7,43.8,7.6,43.8c0.1,0.8,0.1,1.6,0.1,2.3c0,0,0,0,0,0l0,0C7.6,45.4,7.6,44.6,7.6,43.8z"
                                      />
                                      <path
                                        className="st1"
                                        d="M31.4,45.7c-0.8,0-1.5-0.4-1.7-1.3c-0.1-0.3,0.1-0.5,0.2-0.8c0.6-1.9,1.1-3.8,1.7-5.7c0.3-0.9,0.6-1.7,0.8-2.6 c1-3,1.9-6,3-9c0.3-0.7,0.9-1.2,1.6-1.2c1,0,1.7,1,1.5,2c-0.8,2.6-1.6,5.1-2.4,7.7c-0.5,1.6-1,3.2-1.6,4.8c-0.6,1.7-1.1,3.4-1.7,5 C32.6,45.4,32.1,45.7,31.4,45.7z"
                                      />
                                      <path
                                        className="st1"
                                        d="M28.3,29.9c0.6,0,1.1,0.5,1.3,1c0.3,0.8,0,1.6-0.8,2c-1.6,0.8-3.2,1.5-4.8,2.3c-0.1,0.1-0.4,0.1-0.4,0.3 c0,0.1,0.2,0.2,0.4,0.3c1.2,0.6,2.4,1.1,3.6,1.7c0.5,0.2,1,0.5,1.5,0.8c0.6,0.3,0.7,0.9,0.7,1.5c0,0.6-0.7,1.3-1.2,1.4 c-0.5,0.1-0.9-0.1-1.3-0.3c-1.5-0.6-3.1-1.3-4.6-2.1c-1.3-0.6-2.5-1.2-3.8-1.8c-0.6-0.3-0.8-0.8-0.8-1.4c0-0.6,0.3-1.1,0.9-1.4 c0.9-0.5,1.8-0.9,2.7-1.3c1.3-0.6,2.5-1.2,3.8-1.7c0.8-0.4,1.6-0.8,2.5-1.1C28.1,29.9,28.2,29.9,28.3,29.9z"
                                      />
                                      <path
                                        className="st1"
                                        d="M50.2,35.4c0,0.9-0.5,1.4-1.2,1.7c-1.5,0.7-3,1.4-4.5,2.1c-1.4,0.6-2.7,1.2-4.1,1.8c-0.7,0.3-1.8-0.4-1.9-1.2 c-0.1-0.8,0.2-1.4,1-1.7c1.5-0.8,3.1-1.5,4.6-2.2c0.2-0.1,0.5-0.2,0.5-0.3c0-0.2-0.3-0.2-0.5-0.3c-1.2-0.6-2.4-1.2-3.6-1.8 c-0.4-0.2-0.9-0.5-1.3-0.7c-0.8-0.4-0.9-1.6-0.4-2.2c0.6-0.7,0.9-0.9,1.8-0.5c1.7,0.6,3.3,1.4,5,2.2c1.2,0.6,2.5,1.2,3.7,1.8 C49.8,34.3,50.1,34.8,50.2,35.4z"
                                      />
                                      <path
                                        className="st1"
                                        d="M60.5,12.7c0-0.4-0.1-0.7-0.3-1c-0.6-1-1.5-1.7-2.8-1.7c-1,0-1.9,0-2.9,0c-0.2,0-0.5,0.1-0.7-0.1 c-14.6,0-29.2,0-43.9,0c-0.3,0.1-0.7,0.3-1,0.5c-0.7,0.5-1.2,1-1.3,1.9c0,0.8,0,1.6,0,2.4c0,2.3,0,4.6,0,7c0,1.2,0,2.5,0,3.7 c0,0.9,0,1.8,0,2.7c0,0.3,0,0.7,0,1c0,0.5,0,1.1,0,1.6c0,2,0,4.1,0,6.1c0.1,0.1,0,0.3,0,0.4c0,1.3,0,2.5,0,3.8c0,0.9,0,1.9,0,2.8 c0,0.8,0,1.6,0,2.3c0.1,2.9-0.1,5.8,0.1,8.7c0,0.7,0.2,1.3,0.6,1.7c0.6,0.7,1.3,1.2,2.2,1.2c9.6,0,19.3-0.1,28.9,0.1 c1.9,0,3.8,0,5.6,0c0.3,0,0.3,0,0.3-0.4c-0.1-0.7-0.2-1.4,0.3-2.1c0.1-0.2,0.1-0.3-0.1-0.4c-0.3-0.2-0.4-0.4-0.6-0.7 c-0.1-0.3-0.3-0.3-0.6-0.3c-10.9,0-21.7,0-32.6,0c-0.3,0-0.4-0.1-0.4-0.4c0-10.7,0-21.5,0-32.2c0-0.3,0.1-0.4,0.4-0.4 c5.8,0,11.6,0,17.5,0c3.2,0,6.5,0,9.7,0c5.8,0,11.6,0,17.5,0c0.2,0,0.3-0.1,0.3,0.2c0,1.4,0,2.9,0,4.3c0,5.5,0.1,11,0.1,16.4 c0,0.4,0,0.6,0.5,0.6c0.1,0,0.2,0.1,0.3,0.2c0.4,0.3,0.9,0.6,1.2,1.1c0.1,0.1,0.2,0.1,0.3,0.1c0.3-0.1,0.7-0.1,1-0.1 c0.3,0,0.3-0.1,0.3-0.3C60.6,33.3,60.6,23,60.5,12.7z M45.9,15.9c0,0.3,0,0.6-0.1,0.9c-0.1,0.5-0.5,0.7-0.9,0.8 c-0.6,0.2-1.2,0.1-1.7,0c-0.5-0.1-0.8-0.4-0.9-1c-0.1-0.6-0.1-1.2,0-1.8c0.1-0.6,0.5-0.9,1-0.9c0.5-0.1,1-0.1,1.5,0 c0.7,0.2,1,0.5,1,1.2C45.9,15.4,45.9,15.7,45.9,15.9z M51.4,16.6c-0.2,0.6-0.6,1-1.2,1.1c-0.4,0-0.8,0.1-1.2,0 c-0.7-0.1-1.1-0.5-1.1-1.2c0-0.2,0-0.4,0-0.7c0-0.2,0-0.5,0-0.9c0.2-0.7,0.6-1,1.3-1c0.3,0,0.5,0,0.8,0c0.8-0.1,1.4,0.5,1.5,1.3 C51.5,15.7,51.5,16.2,51.4,16.6z M56.8,16.8c-0.1,0.5-0.6,0.8-1.1,0.9c-0.4,0-0.8,0.1-1.3,0c-0.8-0.2-1.1-0.6-1.1-1.4 c0-0.2,0-0.4,0-0.6c0-0.2,0-0.5,0.1-0.8c0.1-0.8,0.6-1,1.1-1c0.5,0,1-0.1,1.5,0.1c0.4,0.1,0.7,0.4,0.8,0.8 C57,15.5,57,16.2,56.8,16.8z"
                                      />
                                      <path
                                        className="st1"
                                        d="M64.3,52.8c0-0.6-0.2-1.2-0.3-1.7c0-0.3-0.2-0.4-0.5-0.4c-0.3,0-0.6,0.1-1,0.1c-0.7,0.2-0.8,0.2-1.2-0.5 c-0.1-0.2-0.2-0.4-0.4-0.6c-0.1-0.2-0.1-0.3,0.1-0.5c0.3-0.4,0.7-0.8,0.9-1.2c0.1-0.2,0.1-0.4-0.1-0.5c-0.5-0.5-1-1-1.7-1.4 c-0.1-0.1-0.2-0.1-0.3,0c-0.5,0.3-0.8,0.8-1.2,1.2c-0.1,0.2-0.2,0.2-0.4,0.1c-0.4-0.1-0.8-0.3-1.2-0.4c-0.2,0-0.2-0.2-0.2-0.4 c0-0.5,0-0.9,0-1.4c0-0.3-0.1-0.5-0.4-0.5c-0.5-0.1-1-0.1-1.5-0.1c-0.8,0-1,0.3-1,1.1c0,0.3,0,0.6,0,1c0,0.1,0,0.3-0.2,0.3 c-0.3,0.1-0.6,0.2-0.9,0.4c-0.4,0.1-0.6,0-0.8-0.3c-0.2-0.3-0.4-0.5-0.7-0.8c-0.2-0.2-0.4-0.4-0.7-0.2c-0.6,0.4-1.2,0.9-1.7,1.5 c-0.1,0.1-0.1,0.3,0,0.4c0.3,0.3,0.5,0.7,0.8,1c0.3,0.3,0.4,0.5,0.1,0.9c-0.2,0.3-0.3,0.6-0.5,0.8c-0.1,0.1-0.2,0.2-0.4,0.2 c-0.5-0.1-0.9-0.2-1.4-0.3c-0.3,0-0.5,0.1-0.5,0.3c-0.1,0.6-0.3,1.2-0.4,1.8c-0.1,0.6,0,0.7,0.6,0.8c0.3,0.1,0.7,0.1,1,0.2 c0.3,0,0.6,0.1,0.6,0.5c0,0.3,0.1,0.5,0.1,0.8c0.1,0.4,0,0.7-0.4,0.8c-0.3,0.1-0.6,0.3-0.9,0.5c-0.4,0.2-0.5,0.5-0.3,0.9 c0.3,0.5,0.6,1,0.9,1.5c0.2,0.4,0.4,0.4,0.7,0.2c0.4-0.2,0.9-0.4,1.3-0.7c0.2-0.1,0.3-0.1,0.5,0c0.3,0.3,0.6,0.5,0.9,0.7 c0.2,0.1,0.2,0.3,0.1,0.5c-0.1,0.4-0.3,0.8-0.4,1.1c-0.2,0.7-0.2,0.7,0.5,1c0.5,0.2,1,0.4,1.5,0.6c0.1,0,0.2,0,0.4,0 c0.2-0.1,0.2-0.2,0.3-0.4c0.2-0.4,0.3-0.8,0.5-1.2c0.1-0.2,0.2-0.3,0.4-0.3c0.4,0,0.7,0.1,1.1,0.1c0.2,0,0.2,0.1,0.3,0.2 c0.1,0.3,0.2,0.6,0.4,1c0.1,0.2,0.2,0.5,0.4,0.6c0.1,0,0.2,0,0.3,0c0.6-0.1,1.2-0.3,1.7-0.5c0.5-0.2,0.6-0.4,0.5-1 c0-0.2-0.1-0.4-0.2-0.6c-0.4-1-0.4-0.7,0.5-1.5c0.2-0.2,0.5-0.2,0.8-0.1c0.3,0.1,0.6,0.3,0.9,0.5c0.5,0.3,0.7,0.2,1-0.2 c0.3-0.4,0.6-0.9,0.8-1.3c0.3-0.5,0.2-0.7-0.3-1.1c-0.3-0.2-0.6-0.4-1-0.6c-0.2-0.1-0.3-0.3-0.2-0.5c0.1-0.3,0.1-0.6,0.1-0.9 c0-0.3,0.2-0.4,0.4-0.4c0.4,0,0.8-0.1,1.1-0.2c0.3-0.1,0.6-0.2,0.6-0.6c0,0,0,0,0-0.1C64.3,52.9,64.3,52.9,64.3,52.8z M55.5,56.2 c-1.5,0-2.8-1.2-2.7-2.8c0-1.5,1.2-2.7,2.8-2.7c1.6,0,2.7,1.1,2.8,2.8C58.3,55,57,56.3,55.5,56.2z"
                                      />
                                    </g>
                                  </svg>
                                </div>
                                Web Development
                              </Link>
                            </h4>
                            <ul>
                              <li>
                                <Link href="/fullstack-js-development">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M36,7.5c0.6,0,1.1,0.1,1.5,0.4c7.9,4.6,15.7,9.2,23.6,13.9c2.1,1.3,2.1,3.9,0,5.2c-7.8,4.6-15.7,9.2-23.5,13.8 c-1.1,0.7-2.2,0.6-3.3,0c-7.8-4.6-15.5-9.2-23.3-13.7c-2.5-1.4-2-4.3,0-5.4c7.8-4.5,15.5-9.1,23.3-13.6C34.8,7.7,35.4,7.5,36,7.5z"
                                        />
                                        <path
                                          className="st0"
                                          d="M36,64.3c-0.6,0-1.1-0.2-1.6-0.5c-7.8-4.6-15.7-9.2-23.5-13.8c-1.1-0.6-1.7-1.5-1.6-2.8c0.1-1.2,0.8-2,1.8-2.6 c0.3-0.2,0.5,0,0.7,0.1c4.1,2.4,8.2,4.8,12.3,7.2c3.4,2,6.8,4,10.1,6c1.2,0.7,2.3,0.7,3.4,0c7.5-4.4,14.9-8.8,22.4-13.2 c0.4-0.2,0.6-0.2,1,0c2.1,1.3,2.1,3.9,0,5.2c-7.8,4.6-15.6,9.1-23.4,13.7C37.2,64.1,36.6,64.4,36,64.3z"
                                        />
                                        <path
                                          className="st0"
                                          d="M62.7,35.9c-0.1,1.2-0.6,2-1.6,2.6c-4.9,2.9-9.8,5.8-14.7,8.6c-2.9,1.7-5.8,3.4-8.7,5.1 c-1.2,0.7-2.3,0.7-3.4,0c-7.8-4.6-15.5-9.1-23.3-13.7c-1.6-1-2.1-2.5-1.3-4.1c0.3-0.6,0.9-1,1.5-1.4c0.3-0.2,0.5,0,0.7,0.2 c4.1,2.4,8.2,4.8,12.3,7.2c3.4,2,6.7,3.9,10.1,5.9c1.2,0.7,2.3,0.7,3.5,0c7.4-4.4,14.9-8.7,22.3-13.1c0.5-0.3,0.8-0.3,1.2,0 C62.1,34,62.7,34.8,62.7,35.9z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Fullstack JS</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/ecommerce-and-cms-development">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M63,41c-1-1-1.3-2.2-1.2-3.5c0.1-1.1,0-2.2,0-3.2c0-5.6,0-11.3,0-16.9c0-3-1.1-4.4-3.7-5.3 c-12.6,0-25.1,0-37.7,0c-1.7,0.8-3.3,1.8-3.3,3.9c-0.1,5.8,0,11.6,0,17.5c1.5,0,2.9,0,4.3,0c0-5.3,0-10.5,0-15.7 c0-1,0.1-1.4,1.2-1.4c11,0,22,0,33,0c1.1,0,1.2,0.4,1.2,1.4c0,6.6,0,13.2,0,19.9c0,1.1-0.3,1.4-1.4,1.4c-6.4-0.1-12.8,0-19.2,0 c-2.6,0-2.6,0-3.3,2.5c-0.6,2.1-1.2,4.3-1.8,6.5c0.4,0,0.6,0.1,0.8,0.1c9.6,0,19.3,0,28.9,0c1.7,0,2.8-0.8,3.5-2.2 c0-0.9,0-1.8,0-2.7C64.1,42.4,63.7,41.7,63,41z M43.5,44.8c-0.4,0.4-0.9,0.5-1.5,0.5c-1.9,0-3.8,0-5.7,0c-0.5,0-1-0.1-1.4-0.4 c-0.4-0.3-0.6-0.8-0.5-1.2c0.1-0.5,0.6-0.3,1-0.3c1.3,0,2.6,0,3.8,0c1.2,0,2.5,0,3.7,0c0.4,0,0.9-0.2,1,0.4 C44,44.1,43.8,44.5,43.5,44.8z"
                                        />
                                        <path
                                          className="st0"
                                          d="M34.9,33c-1.5,0-3.2-0.4-4.5,0.2c-0.8,0.4-0.8,2.2-1.2,3.4c0,0-0.1,0.1-0.1,0.1c-0.6-0.1-1.1-0.2-1.7-0.2 c-5.6,0-11.2,0-16.8,0c-2.2,0-3.3,1.4-2.8,3.6c0.7,3,1.4,6,2.2,9c0.5,1.8,1.3,2.4,3.2,2.4c4.4,0,8.7,0,13.1,0c0.8,0,1.7,0,1.7,1.1 c0,1.1-0.9,1-1.7,1c-4.9,0-9.8,0.1-14.7,0c-1.7,0-3,1.4-3,3c0,1.7,1.4,3,3,3c1.7,0,3-1.4,3-3c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0-0.2 c0.1-0.1,0.4,0,0.5,0c1.4,0,2.8,0,4.2,0c0.9,0,1.4,0.3,1.5,1.2c0.3,1.3,1,2.2,2.3,2.5c0.7,0,1.4,0,2.1,0c1.3-0.8,2.3-1.8,2-3.5 c-0.1-0.7,0.5-0.6,0.8-0.8c2.4-1.2,2.7-4.1,0.5-5.5c-0.7-0.4-0.8-0.8-0.6-1.5c1-3.4,1.9-6.8,2.9-10.1c0.3-1,0.3-2.3,1-3 c0.7-0.8,2-0.2,3.1-0.3c0.6-0.1,1.2-0.2,1.2-1C36.1,33.3,35.6,33,34.9,33z M9.7,39.7c-0.1-0.7,0.1-1,0.8-1.1c2-0.4,1.6,1.2,1.9,2.4 C11.3,40.8,9.9,41.6,9.7,39.7z M10.7,43.2c2.1-0.1,2.1-0.1,2.5,2C11.1,45.6,10.8,45.4,10.7,43.2z M13.5,49.5 c-1.6,0.2-1.6-0.9-1.8-2c0.9,0.1,2.2-0.6,2.3,1.1C14,48.9,14.3,49.4,13.5,49.5z M14.1,38.7c0.8,0,1.6,0.1,2.3,0 c1.5-0.3,1.5,0.6,1.5,1.7c0,0.5-0.2,0.7-0.7,0.7c-0.2,0-0.4,0-0.6,0C14.3,41,14.4,41.5,14.1,38.7z M15.1,43.7 c0-1.1,0.9-0.4,1.2-0.6c1.2-0.2,1.6,0,1.6,1.1c0,1.2-0.7,1-1.4,1.1C15.2,45.5,15.1,44.6,15.1,43.7z M17.3,49.5c-1.6,0-1-1.2-1.2-2 c0.7,0.3,1.9-0.8,1.9,0.8C18,48.7,18.3,49.4,17.3,49.5z M11.4,57.8c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1 c0.6,0,1.1,0.5,1.1,1.1C12.5,57.3,12,57.8,11.4,57.8z M24.1,57.7c-0.6-0.1-0.9-0.5-0.9-1.1c0-0.5,0.4-0.9,1-0.9c0.6,0,1,0.4,1,1.1 C25.1,57.4,24.8,57.8,24.1,57.7z M20.5,49.4c-1-0.1-0.6-0.9-0.6-1.4c0.1-1.3,1.1-0.5,2-0.8C21.4,48.2,22.2,49.6,20.5,49.4z M20.7,45.4c-1.2-0.2-0.8-1.1-0.7-1.5c0.4-1.6,1.8-0.3,2.7-0.9C22.7,44.6,22.5,45.6,20.7,45.4z M23.1,40.9 c-0.8,0.3-1.9,0.3-2.9,0.1c-0.7-0.2-0.2-1-0.3-1.6c-0.1-0.5,0.2-0.7,0.7-0.7c0.9,0,1.8,0,2.9,0C23.7,39.6,23.6,40.6,23.1,40.9z M23.7,49.3c0-2.1,0.1-2.1,2.3-1.8C25.6,49.5,25.6,49.5,23.7,49.3z M24.7,45.2c-0.1-2.3,0-2.3,2.5-2C26.9,45.4,26.9,45.4,24.7,45.2 z M28.3,39.7c-0.3,1.9-1.7,1.2-2.9,1.4c0.2-1.4,0.2-2.7,2-2.4C28.1,38.8,28.5,38.9,28.3,39.7z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>eCommerce & CMS</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/magento-development-company">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M39.2,24.6v32.3L36,58.9l-3.2-2V24.6l-8.2,5.1v27.7l11.4,7l11.5-7V29.7L39.2,24.6L39.2,24.6z M36,7.5L12,22.1 v27.7l6.2,3.7V25.8L36,15l17.8,10.8l0.1,0l0,27.6l6.2-3.6V22.1L36,7.5L36,7.5z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Magento</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/wordpress-development-company">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M52.4,34.7c0-3-1.1-5.1-2-6.7c-1.2-2-2.4-3.7-2.4-5.7c0-2.2,1.7-4.3,4.1-4.3c0.1,0,0.2,0,0.3,0 c-4.3-4-10.1-6.4-16.4-6.4c-8.5,0-16,4.4-20.3,11c0.6,0,1.1,0,1.6,0c2.5,0,6.5-0.3,6.5-0.3c1.3-0.1,1.5,1.8,0.2,2 c0,0-1.3,0.2-2.8,0.2l8.9,26.4l5.3-16l-3.8-10.4c-1.3-0.1-2.6-0.2-2.6-0.2c-1.3-0.1-1.2-2.1,0.2-2c0,0,4,0.3,6.4,0.3 c2.5,0,6.5-0.3,6.5-0.3c1.3-0.1,1.5,1.8,0.2,2c0,0-1.3,0.2-2.8,0.2l8.8,26.2l2.4-8.1C51.6,39.2,52.4,36.8,52.4,34.7z"
                                        />
                                        <path
                                          className="st0"
                                          d="M11.7,36c0,9.6,5.6,18,13.7,21.9L13.8,26.1C12.4,29.2,11.7,32.6,11.7,36z"
                                        />
                                        <path
                                          className="st0"
                                          d="M36.4,38.1l-7.3,21.2c2.2,0.7,4.5,1,6.9,1c2.8,0,5.6-0.5,8.1-1.4c-0.1-0.1-0.1-0.2-0.2-0.3L36.4,38.1z"
                                        />
                                        <path
                                          className="st0"
                                          d="M57.4,24.3c0.1,0.8,0.2,1.6,0.2,2.5c0,2.5-0.5,5.2-1.9,8.7L48.2,57c7.2-4.2,12.1-12.1,12.1-21 C60.3,31.9,59.3,27.9,57.4,24.3z"
                                        />
                                        <path
                                          className="st0"
                                          d="M36,7.6C20.3,7.6,7.6,20.3,7.6,36c0,15.6,12.7,28.4,28.4,28.4c15.6,0,28.4-12.7,28.4-28.4 C64.4,20.3,51.6,7.6,36,7.6z M36,63C21.1,63,8.9,50.9,8.9,36C8.9,21,21.1,8.9,36,8.9C50.9,8.9,63.1,21,63.1,36 C63.1,50.9,50.9,63,36,63z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Wordpress</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/progressive-web-application-development">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M57.5,22.5c-2.4,0-4.8,0-7.2,0c-0.1,0-0.1,0.1-0.1,0.2c-0.6,1.5-1.2,2.9-1.9,4.4c-0.9,2-1.7,4.1-2.6,6.1 c-0.7,1.7-1.4,3.3-2.1,5c-0.3,0.6-0.5,1.2-0.8,1.8c0-0.1-0.1-0.3-0.1-0.4c-0.4-1.5-0.9-3-1.4-4.5c-0.4-1.2-0.8-2.5-1.1-3.7 c-0.4-1.2-0.7-2.5-1.1-3.7c-0.4-1.4-0.9-2.8-1.3-4.3c-0.1-0.3-0.1-0.6-0.3-0.8c-1.9,0-3.7,0-5.6,0C30,28.3,28.1,34.1,26.2,40 c-1.3-2.7-2.7-5.3-4-7.9c-0.1,0-0.1,0.1-0.1,0.1c-0.2,0.6-0.4,1.2-0.6,1.8c-1,3-2,6.1-3,9.1c0,0.1-0.1,0.2,0,0.3 c1.2,2,2.4,4.1,3.6,6.1c0.1,0.1,0.1,0.1,0.2,0.1c2.3,0,4.6,0,6.9,0c0.1,0,0.2,0,0.2-0.1c1.6-5,3.3-10,4.9-15 c0.1-0.2,0.1-0.3,0.2-0.5c0,0.1,0,0.1,0.1,0.2c1.6,5.1,3.2,10.2,4.8,15.3c0,0.2,0.1,0.2,0.3,0.2c2.2,0,4.5,0,6.7,0 c0.2,0,0.2,0,0.3-0.2c1.1-2.7,2.2-5.3,3.2-8c2.3-5.8,4.7-11.6,7-17.3C57.1,23.5,57.3,23,57.5,22.5z"
                                        />
                                        <path
                                          className="st0"
                                          d="M71.9,49.3c-0.8-2.1-1.6-4.1-2.3-6.2c-2.3-6.2-4.7-12.3-7-18.5c-0.3-0.7-0.5-1.5-0.8-2.2c0,0,0,0,0,0 c0,0,0,0.1,0,0.1c-1.2,2.9-2.3,5.8-3.5,8.8c0,0.1-0.1,0.2,0,0.3c0.8,2.2,1.6,4.5,2.4,6.7c0.1,0.4,0.3,0.7,0.4,1.1 c-0.1,0-0.2,0-0.2,0c-1.9,0-3.7,0-5.6,0c-0.1,0-0.2,0-0.2,0.2c-0.5,1.4-1.1,2.7-1.6,4c-0.1,0.3-0.3,0.7-0.4,1.1c0.1,0,0.1,0,0.2,0 c3.1,0,6.2,0,9.3,0c0.1,0,0.2,0,0.3,0.2c0.5,1.5,1.1,3,1.6,4.5c0,0.1,0.1,0.2,0.2,0.2c2.4,0,4.8,0,7.2,0c0.1,0,0.1,0,0.2,0 C72,49.5,72,49.4,71.9,49.3z"
                                        />
                                        <path
                                          className="st0"
                                          d="M19.3,26.3c-0.1-0.2-0.2-0.4-0.4-0.6c-1.5-1.9-3.5-2.8-5.9-3.1c-0.3,0-0.7-0.1-1-0.1c-4,0-7.9,0-11.9,0 c-0.1,0-0.2,0-0.2,0.2c0,9,0,17.9,0,26.9c2.2,0,4.5,0,6.7,0c0.2,0,0.2,0,0.2-0.2c0-3,0-5.9,0-8.9c0-0.2,0-0.2,0.2-0.2 c1.4,0,2.8,0,4.2,0c1.2,0,2.4-0.1,3.5-0.4c0.1,0,0.2-0.1,0.3-0.2c1.4-4.2,2.7-8.4,4.1-12.7C19.2,26.7,19.4,26.5,19.3,26.3z M13.4,33.1c-0.4,1-1.2,1.5-2.2,1.8C10.6,34.9,10,35,9.4,35c-0.8,0-1.6,0-2.4,0c-0.1,0-0.2,0-0.2-0.2c0-1.2,0-2.3,0-3.5 c0-1.1,0-2.3,0-3.4c0-0.1,0-0.2,0.2-0.2c1,0,1.9,0,2.9,0c0.6,0,1.3,0.1,1.9,0.4c0.9,0.4,1.5,1.1,1.7,2 C13.9,31.1,13.8,32.1,13.4,33.1z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Progressive Web Application</div>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menublock">
                            <h4>
                              <Link href="/">
                                <div className="menu-icon">
                                  <svg
                                    className="main-service"
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 72 72"
                                    style={{
                                      enableBackground: "new 0 0 72 72",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <g>
                                      <path
                                        className="st1"
                                        d="M64.4,13c0-2.8-2.7-5.5-5.5-5.5c-15.3,0.1-30.6,0.1-46,0c-2.8,0-5.5,2.7-5.5,5.5c0.1,5,0,10,0,15.1 c0,4.6,0,9.3,0,13.9c0,2.5,2.3,5.1,4.8,5.1c3.3,0.1,6.6,0,10,0c0.9,0,1.6-0.7,1.6-1.6c0-1.1-0.7-1.8-1.9-1.8c-3,0-6,0-8.9,0 c-0.3,0-0.7,0-1-0.1c-0.5-0.1-0.9-0.4-1-1C11,42.3,11,42,11,41.6c0-7.1,0-14.2,0-21.3c0-0.6,0.2-0.7,0.7-0.7c8.1,0,16.2,0,24.2,0 c8.1,0,16.2,0,24.3,0c0.6,0,0.7,0.1,0.7,0.7c0,7.1,0,14.2,0,21.3c0,0.3,0,0.7-0.1,1c-0.1,0.5-0.4,0.9-1,1c-0.3,0.1-0.7,0.1-1,0.1 c-2.9,0-5.9,0-8.8,0c-0.3,0-0.7,0-1,0.1c-0.8,0.3-1.1,1.1-1,1.9c0.1,0.8,0.8,1.4,1.7,1.4c3.1,0,6.1-0.1,9.2,0 c2.8,0.1,5.5-2.7,5.5-5.5C64.4,32.1,64.4,22.5,64.4,13z M60.3,16.1c-5.1,0-10.2,0-15.3,0c-3,0-6.1,0-9.1,0c-8.1,0-16.2,0-24.2,0 c-0.6,0-0.8-0.1-0.7-0.7c0.1-0.8,0-1.7,0-2.5c0-1.5,0.5-2,2-2c5.3,0,10.6,0,15.9,0c9.9,0,19.8,0,29.7,0c2.2,0,2.4,0.3,2.4,2.4 c0,0.7,0,1.4,0,2.1C61,16,60.9,16.2,60.3,16.1z"
                                      />
                                      <path
                                        className="st1"
                                        d="M38.2,54.7c-0.4-0.2-0.5-0.5-0.5-0.9c0-3.7,0-7.3,0-11c0-3.7,0-7.3,0-11c0-0.9-0.4-1.5-1.1-1.8 c-1.2-0.5-2.4,0.4-2.4,1.9c0,7.3,0,14.5,0,21.8c0,0.5-0.1,0.7-0.6,1c-3,1.6-3.8,5-1.8,7.5c1.3,1.6,2.9,2.5,5,2.1 c2.1-0.4,4-2.4,4.2-4.4C41.4,57.8,40.3,55.8,38.2,54.7z M36,60.9c-1.2,0-1.7-0.6-1.7-1.8c0-1.2,0.6-1.7,1.8-1.7 c1.2,0,1.7,0.6,1.7,1.8C37.7,60.4,37.1,60.9,36,60.9z"
                                      />
                                      <path
                                        className="st1"
                                        d="M30.8,36.9c0-1.1-0.7-1.9-1.8-1.8c-1,0-1.7,0.8-1.7,1.9c0,1.5,0,2.9,0,4.4c0,1.5,0,2.9,0,4.4 c0,0.5-0.2,0.9-0.5,1.2c-0.8,0.7-1.5,1.5-2.2,2.2c-0.2,0.2-0.4,0.2-0.7,0.1c-2.1-0.9-4.3-0.2-5.8,1.8c-1.4,1.8-1.5,3.9-0.2,5.8 c1.5,2.2,4.2,3,6.4,1.8c2-1.1,3.9-3.7,2.6-6.5c-0.1-0.3,0-0.4,0.2-0.6c0.7-0.7,1.4-1.4,2.1-2.1c1-1,1.6-2.3,1.6-3.7 C30.9,42.8,30.9,39.9,30.8,36.9z M22.2,55.7c-1.2,0-1.7-0.5-1.7-1.7c0-1.2,0.5-1.7,1.7-1.7c1.2,0,1.7,0.5,1.7,1.7 C23.9,55.3,23.4,55.7,22.2,55.7z"
                                      />
                                      <path
                                        className="st1"
                                        d="M47.9,49.3c-0.3,0.1-0.4,0.1-0.6-0.1c-0.7-0.7-1.4-1.5-2.2-2.2c-0.4-0.4-0.5-0.8-0.5-1.3c0-1.4,0-2.9,0-4.3 c0-1.4,0-2.7,0-4.1c0-0.3,0-0.6-0.1-0.9c-0.2-0.8-1-1.3-1.9-1.2c-0.9,0.1-1.5,0.8-1.5,1.8c0,2.9,0,5.8,0,8.7c0,1.4,0.6,2.7,1.6,3.7 c0.7,0.7,1.4,1.4,2.1,2.1c0.2,0.2,0.3,0.4,0.1,0.7c-0.9,2.1-0.2,4.3,1.8,5.9c1.8,1.4,3.9,1.5,5.8,0.1c2.2-1.6,2.9-4.2,1.8-6.4 C53.3,49.8,50.7,48,47.9,49.3z M49.8,55.7c-1.2,0-1.7-0.5-1.7-1.7c0-1.2,0.5-1.7,1.7-1.7c1.2,0,1.7,0.5,1.7,1.7 C51.5,55.3,51,55.7,49.8,55.7z"
                                      />
                                      <path
                                        className="st1"
                                        d="M13.6,11.8c-1,0-1.7,0.7-1.7,1.7c0,1,0.7,1.7,1.7,1.7c1,0,1.7-0.7,1.7-1.7C15.3,12.6,14.6,11.8,13.6,11.8z"
                                      />
                                      <path
                                        className="st1"
                                        d="M18,11.8c-1,0-1.8,0.7-1.8,1.6c0,1,0.7,1.8,1.7,1.8c1,0,1.7-0.7,1.7-1.6C19.6,12.6,18.9,11.9,18,11.8z"
                                      />
                                      <path
                                        className="st1"
                                        d="M22.3,11.8c-1,0-1.8,0.7-1.8,1.7c0,1,0.7,1.7,1.7,1.7c1,0,1.7-0.7,1.7-1.7C23.9,12.6,23.2,11.9,22.3,11.8z"
                                      />
                                    </g>
                                  </svg>
                                </div>
                                Progressive Service
                              </Link>
                            </h4>
                            <ul>
                              <li>
                                <Link href="/iot-app-development">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <path
                                        className="st0"
                                        d="M64.3,34.7c0-1.6-0.6-3-1.3-4.4c-1.1-2-2.8-3.6-4.8-4.7c-0.3-0.2-0.4-0.4-0.4-0.7c-0.1-0.8-0.1-1.5-0.3-2.3 c-0.8-3.9-2.5-7.2-5.3-9.9c-2.3-2.2-5-3.8-8.1-4.6c-1.1-0.3-2.2-0.4-3.3-0.5c-1,0-1.9,0-2.9,0c-0.8,0.1-1.7,0.1-2.5,0.3 c-1.6,0.4-3.2,1-4.7,1.8c-3,1.6-5.4,3.9-7.1,6.8c-0.4,0.7-0.8,1.1-1.8,1.2c-3.9,0.3-7,3.5-7.5,7.2c-0.1,0.4-0.3,0.7-0.7,0.9 c-2.4,1.3-4.2,3.3-5.3,5.8c-0.5,1.1-0.7,2.2-0.8,3.4c0,0.8,0,1.6,0,2.3c0.1,0.6,0.1,1.1,0.2,1.7c1.3,5.2,6.2,9,11.5,9 c1.4,0,2.9,0,4.3,0c0.4,0,0.6,0.1,0.6,0.5c0,2.9,0,5.7,0,8.6c0,0.4-0.2,0.5-0.6,0.5c-0.6,0-1.3,0-1.9,0c-0.6,0-1-0.2-1.3-0.8 c-1.1-2.1-3.8-3.1-6-2.3c-2.4,0.9-3.9,3.3-3.5,5.7c0.4,2.3,1.9,3.7,4.3,4.2c0.5,0,1,0,1.6,0c1.7-0.2,2.9-1.1,3.7-2.5 c0.3-0.5,0.6-0.6,1.1-0.6c1.7,0,3.4,0,5,0c1.2,0,1.2,0,1.2-1.2c0-3.7,0-7.5,0-11.2c0-0.9,0-0.9,0.9-0.9c1.6,0,3.1,0,4.7,0 c0.7,0,0.7,0,0.7,0.8c0,1.7,0,3.4,0,5.1c0,0.6-0.2,0.9-0.7,1.2c-2,1-3,3.3-2.5,5.5c0.4,2.1,1.9,3.5,4.3,4c0.5,0,1,0,1.6,0 c0.6-0.1,1.2-0.2,1.8-0.5c1.7-1.1,2.6-2.6,2.6-4.6c-0.1-2-1-3.4-2.7-4.4c-0.4-0.2-0.6-0.5-0.6-1c0-1.8,0-3.5,0-5.3 c0-0.6,0.1-0.7,0.7-0.7c1.6,0,3.2,0,4.8,0c0.8,0,0.8,0,0.8,0.8c0,3.8,0,7.7,0,11.5c0,0.9,0.1,1,1,1c1.8,0,3.5,0,5.3,0 c0.4,0,0.7,0.1,0.9,0.5c0.8,1.5,2,2.5,3.8,2.7c0.5,0,1,0,1.6,0c0.5-0.1,1.1-0.1,1.5-0.4c1.3-0.7,2.2-1.7,2.6-3.1 c0.9-2.9-0.8-5.9-3.7-6.5c-2.4-0.5-4.6,0.5-5.7,2.7c-0.2,0.4-0.4,0.5-0.8,0.5c-0.7,0-1.4,0-2.1,0c-0.7,0-0.7,0-0.7-0.8 c0-2.6,0-5.3,0-7.9c0-1,0-1,1-1c1.8,0,3.7,0.2,5.5-0.1c4.3-0.7,7.3-3.1,9.2-7c0.5-1.1,0.8-2.4,0.9-3.6c0-0.8,0-1.6,0-2.3 C64.4,34.8,64.3,34.7,64.3,34.7z M39.9,40.2c-0.7,0.4-1.4,0.8-2.1,1.3c-0.2,0.1-0.4,0.2-0.6,0c-0.7-0.7-1.7-0.7-2.4,0 c-0.2,0.2-0.3,0.2-0.6,0.1c-0.7-0.5-1.4-0.9-2.2-1.3c-0.3-0.2-0.3-0.3-0.1-0.5c1-1.3,2.4-1.9,4-1.9c1.7,0,3,0.6,4,1.9 C40.2,39.8,40.2,40,39.9,40.2z M45.5,36.7c-0.7,0.4-1.4,0.8-2.1,1.3c-0.3,0.2-0.4,0.1-0.6-0.1c-1.3-1.9-3.1-3.1-5.4-3.5 c-3.4-0.6-6.2,0.6-8.3,3.4c-0.2,0.3-0.4,0.4-0.8,0.2c-0.7-0.5-1.4-0.9-2.1-1.3c-0.2-0.1-0.3-0.2-0.1-0.5c1.9-2.8,4.5-4.5,7.9-5.1 c0.2,0,0.4-0.1,0.7-0.1c0.4,0,0.8,0,1.2,0c4.1,0.1,7.3,1.7,9.7,5.1C45.9,36.4,45.9,36.5,45.5,36.7z M51.1,33.3 c-0.7,0.4-1.3,0.8-2,1.2c-0.3,0.2-0.4,0.2-0.6-0.1c-2-3-4.6-5.1-8.1-6.1c-6.4-2-13.3,0.5-17,6.1c-0.2,0.4-0.4,0.4-0.7,0.2 c-0.7-0.4-1.3-0.9-2-1.2c-0.3-0.2-0.3-0.3-0.1-0.6c2.1-3.2,5-5.6,8.6-7.1c2.2-0.9,4.4-1.3,6.8-1.3c6.5,0.2,11.6,2.9,15.3,8.3 C51.6,32.9,51.5,33.1,51.1,33.3z"
                                      ></path>
                                    </svg>
                                  </div>
                                  <div>IoT</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/artificial-intelligence-and-machine-learning-development">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M32,32.5c-0.5,1.5-1,3.1-1.4,4.6c-0.1,0.3,0,0.4,0.3,0.4c0.9,0,1.8,0,2.7,0c-0.5-1.7-1-3.3-1.4-5 C32.1,32.5,32.1,32.5,32,32.5z"
                                        />
                                        <path
                                          className="st0"
                                          d="M56.5,34.1c2,0,4.1,0,6.1,0c1,0,1.7-0.7,1.7-1.7c0-0.5,0-0.9,0-1.4c0-1.3-0.6-1.9-1.9-1.9c-2,0-4,0-5.9,0 c-0.5,0-0.7-0.1-0.7-0.6c0.1-0.8,0-1.6,0-2.5c0-0.5,0.1-0.7,0.7-0.7c1.6,0,3.2,0,4.8,0c2.7,0.1,3.1-0.4,3-3c0-1.2-0.6-1.9-1.9-1.9 c-1.7,0-3.4,0-5.1,0c-1.5,0-1.5,0-1.5-1.5c0-1.4-0.8-2.6-2-2.9c-0.6-0.1-1.2-0.1-1.8-0.1c-0.5,0-0.7-0.1-0.7-0.7c0-1.6,0-3.2,0-4.7 c0.1-2.7-0.4-3.2-3.1-3.1c-1.3,0.1-1.9,0.6-1.9,1.9c0,2,0,3.9,0,5.8c0,0.7-0.2,0.8-0.8,0.8c-0.7-0.1-1.5-0.1-2.2,0 c-0.6,0-0.8-0.1-0.8-0.7c0-1.9,0-3.8,0-5.8c0-1.4-0.6-2-1.9-2c-0.4,0-0.8,0-1.2,0c-1.2,0-1.8,0.6-1.8,1.8c0,2,0,4,0,6 c0,0.5-0.1,0.6-0.6,0.6c-0.8,0-1.6,0-2.5,0c-0.6,0-0.7-0.2-0.7-0.7c0-1.6,0-3.2,0-4.7c0.1-2.7-0.4-3.1-3-3 c-1.3,0.1-1.9,0.6-1.9,1.9c0,2,0,4,0,5.9c0,0.5-0.1,0.6-0.6,0.6c-0.8,0-1.7,0-2.5,0c-0.5,0-0.6-0.1-0.6-0.6c0-1.6,0-3.2,0-4.8 c0.1-2.7-0.3-3.1-3-3c-1.3,0.1-1.9,0.6-1.9,1.9c0,1.7,0,3.3,0,5c0,1.5,0,1.5-1.5,1.6c-1.8,0-2.9,1.1-2.9,2.9c0,0.3,0,0.6,0,0.8 c0.1,0.6-0.2,0.7-0.7,0.7c-2,0-4,0-6,0c-1.1,0-1.7,0.7-1.7,1.7c0,0.5,0,1,0,1.5c0,1,0.6,1.6,1.6,1.6c1,0,2,0,3.1,0c1,0,2.1,0,3.1,0 c0.5,0,0.7,0.1,0.6,0.6c0,0.8,0,1.7,0,2.5c0,0.5-0.1,0.6-0.6,0.6c-1.6,0-3.3,0-4.9,0c-2.5-0.1-3.1,0.4-3,2.9c0.1,1.4,0.6,2,2,2 c1.9,0,3.8,0,5.8,0c0.6,0,0.8,0.2,0.7,0.8c-0.1,0.8,0,1.5,0,2.3c0,0.5-0.1,0.7-0.7,0.7c-1.6,0-3.2,0-4.8,0c-2.6-0.1-3.1,0.3-3,3 c0.1,1.4,0.6,1.9,2,1.9c2,0,3.9,0,5.9,0c0.5,0,0.7,0.1,0.7,0.7c-0.1,0.8,0,1.6,0,2.5c0,0.5-0.2,0.7-0.7,0.6c-1.6,0-3.2,0-4.7,0 c-2.8-0.1-3.2,0.4-3.1,3c0,1.3,0.6,1.9,1.9,1.9c1.7,0,3.3,0,5,0c1.6,0,1.6,0,1.6,1.6c0,1.7,1.1,2.8,2.9,2.9c0.3,0,0.6,0,0.9,0 c0.5-0.1,0.7,0.2,0.7,0.7c0,2,0,4,0,6c0,1.1,0.7,1.8,1.8,1.8c0.5,0,0.9,0,1.4,0c1.2,0,1.8-0.6,1.8-1.8c0-2,0-4,0-6 c0-0.5,0.1-0.7,0.6-0.7c0.8,0.1,1.6,0,2.5,0c0.5,0,0.7,0.1,0.7,0.7c0,2,0,4.1,0,6.1c0,1,0.7,1.7,1.7,1.7c0.5,0,0.9,0,1.4,0 c1.3,0,1.9-0.6,1.9-1.9c0-2,0-4,0-5.9c0-0.5,0.1-0.7,0.6-0.7c0.8,0.1,1.6,0,2.5,0c0.5,0,0.7,0.1,0.7,0.7c0,1.6,0,3.2,0,4.7 c-0.1,2.8,0.4,3.2,3.1,3.1c1.2-0.1,1.9-0.6,1.9-1.9c0-2,0-4,0-5.9c0-0.5,0.1-0.7,0.6-0.7c0.8,0.1,1.6,0,2.5,0 c0.5,0,0.7,0.1,0.7,0.7c0,1.6,0,3.3,0,4.9c-0.1,2.6,0.4,3,3,2.9c1.4-0.1,2-0.6,2-1.9c0-1.6,0-3.3,0-4.9c0-1.6,0-1.6,1.6-1.6 c1.7,0,2.8-1.1,2.9-2.9c0-0.3,0-0.6,0-0.9c-0.1-0.5,0.1-0.7,0.7-0.7c2,0,4,0,6,0c1.1,0,1.8-0.7,1.8-1.8c0-0.5,0-0.9,0-1.4 c0-1.2-0.6-1.8-1.8-1.8c-2,0-4,0-6,0c-0.5,0-0.7-0.1-0.7-0.6c0.1-0.8,0-1.6,0-2.5c0-0.5,0.1-0.7,0.7-0.7c2,0,4,0,6,0 c1.1,0,1.8-0.6,1.8-1.8c0-0.4,0-0.8,0-1.3c0-1.3-0.6-1.9-1.9-1.9c-2,0-4,0-5.9,0c-0.5,0-0.7-0.1-0.7-0.6c0.1-0.8,0-1.6,0-2.5 C55.8,34.2,56,34.1,56.5,34.1z M40,43.4c-1.4,0-2.7,0-4.1,0c-0.5,0-0.6-0.2-0.8-0.6C34.6,41,34.6,41,32.7,41c-0.9,0-1.9,0-2.8,0 c-0.5,0-0.7,0.1-0.8,0.6c-0.5,1.8-0.6,1.8-2.5,1.8c-1,0-2,0-3.2,0c0.9-2.4,1.7-4.6,2.5-6.9c1.1-3,2.2-6.1,3.3-9.1 c0.2-0.5,0.4-0.7,1-0.7c1.2,0,2.5,0,3.7,0c0.4,0,0.6,0.1,0.8,0.6c1.9,5.1,3.7,10.3,5.6,15.4C40.6,43.2,40.6,43.4,40,43.4z M46.8,42.8c0,0.5-0.2,0.6-0.6,0.6c-1.3,0-2.5,0-3.8,0c-0.6,0-0.8-0.2-0.8-0.8c0-2.5,0-5.1,0-7.6c0-2.5,0-5,0-7.5 c0-0.6,0.2-0.8,0.8-0.7c1.3,0,2.5,0,3.8,0c0.4,0,0.6,0.1,0.6,0.6C46.8,32.5,46.8,37.6,46.8,42.8z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>AI & Machine Learning</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/ar-vr-app-development-company">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M11.7,36.5c1.7,0,3.3,0,4.9,0c0.3,0,0.4,0.1,0.5,0.3c0.3,0.7,0.7,1.3,1,2c1.5,3,3,6,4.5,9 c0.9,1.8,1.8,3.6,2.6,5.4c0.1,0.1,0.1,0.3,0.3,0.4c0.3-0.5,0.5-1,0.8-1.5c0.7-1.4,1.4-2.8,2-4.2C29.1,45.9,30,44,31,42 c0.8-1.7,1.7-3.4,2.5-5.1c0.2-0.3,0.3-0.5,0.7-0.5c1.5,0,3.1,0,4.6,0c0.1,0.2,0,0.4-0.1,0.5c-1.7,3.4-3.4,6.9-5,10.3 c-1.8,3.7-3.6,7.4-5.4,11.1c-1,1.9-1.9,3.9-2.9,6C20.8,55,16.2,45.8,11.7,36.5z"
                                        />
                                        <path
                                          className="st0"
                                          d="M60,34.9c-1.9-2.8-3.7-5.7-5.6-8.5c-0.3-0.5-0.7-1-1-1.6c-0.2-0.3-0.2-0.3,0.2-0.5c0.1,0,0.1-0.1,0.2-0.1 c1.9-1.2,3.2-2.8,3.8-5c0.3-1,0.3-2,0.3-3c0-0.8-0.2-1.6-0.5-2.4c-0.6-1.6-1.7-2.9-3.1-3.9c-1.2-0.9-2.6-1.4-4.2-1.4 c-2.5,0-4.9,0-7.4,0C42,8.6,42,8.5,42,9.3c0,8.5,0,17,0,25.6c0,0.2-0.1,0.3,0.1,0.5c1.5,0,3,0,4.6,0c0-0.3,0-0.5,0-0.7 c0-2.8,0-5.6,0-8.5c0-0.2,0-0.4,0-0.6c0-0.1,0-0.2,0.1-0.2c0.4,0,0.7,0,1.1,0c0.3,0,0.4,0.3,0.5,0.6c2,3,4,6.1,6,9.1 c0.2,0.3,0.3,0.4,0.7,0.4c1.7,0,3.5,0,5.2,0c0,0,0-0.1,0-0.1C60.2,35.2,60.1,35,60,34.9z M52.5,19.2C51.8,20,51,20.5,50,20.6 c-0.9,0.1-1.8,0.1-2.7,0.1c-0.5,0-0.5,0-0.5-0.6c0-1.5,0-2.9,0-4.4c0-0.8,0-1.6,0-2.5c1.2,0,2.3-0.1,3.3,0c1.9,0.2,3.1,2,3.1,3.2 C53.2,17.5,53.1,18.4,52.5,19.2z"
                                        />
                                        <path
                                          className="st0"
                                          d="M60,63.8c-1.9-2.8-3.7-5.7-5.6-8.5c-0.3-0.5-0.6-1-1-1.4c-0.3-0.4-0.3-0.4,0.1-0.7c0,0,0,0,0.1,0 c2-1.2,3.3-2.8,3.9-5c0.3-1,0.3-2,0.3-3c0-0.8-0.2-1.5-0.5-2.3c-0.6-1.6-1.7-2.9-3.1-3.9c-1.2-0.9-2.6-1.4-4.2-1.4 c-2.4,0-4.9,0-7.3,0c-0.9,0-0.8-0.1-0.8,0.8c0,8.4,0,16.8,0,25.3c0,0.2,0,0.5,0,0.7c1.5,0.1,3,0,4.5,0.1c0.4-0.2,0.3-0.6,0.3-0.9 c0-1.5,0-2.9,0-4.4c0-1.3,0-2.6,0-3.9c0-0.3-0.1-0.6,0.2-0.7c0.3-0.1,0.6-0.1,0.8,0.1c0.2,0.1,0.3,0.4,0.5,0.6 c1.9,2.8,3.7,5.7,5.6,8.5c0.2,0.3,0.4,0.7,0.9,0.7c0.4,0,0.8,0,1.2,0c1.4,0,2.8,0.1,4.1-0.1c0,0,0-0.1,0-0.1 C60.2,64.1,60.1,63.9,60,63.8z M52.5,48.2c-0.7,0.8-1.5,1.3-2.5,1.4c-1,0.1-1.9,0.1-2.9,0.1c-0.2,0-0.3-0.1-0.3-0.3 c0,0,0-0.1,0-0.1c0-2.3,0-4.6,0-7c1.2,0,2.3-0.1,3.3,0c1.9,0.2,3.1,2,3.1,3.2C53.2,46.4,53.1,47.4,52.5,48.2z"
                                        />
                                        <path
                                          className="st0"
                                          d="M25.3,7.5c-4.6,9.3-9.1,18.5-13.7,27.8c1.7,0,3.3,0,5,0c0.3,0,0.4-0.2,0.5-0.4c0.6-1.2,1.2-2.4,1.8-3.6 c0.2-0.4,0.4-0.5,0.8-0.5c3.8,0,7.5,0,11.3,0c0.4,0,0.6,0.2,0.7,0.5c0.6,1.2,1.2,2.4,1.8,3.6c0.1,0.3,0.3,0.4,0.7,0.4 c1.4,0,2.9,0,4.3,0c0.1,0,0.2,0,0.4-0.1C34.4,26,29.9,16.8,25.3,7.5z M21.4,26.1c1.3-2.7,2.6-5.3,3.9-7.9c1.3,2.7,2.6,5.3,3.8,7.9 C26.6,26.1,24.1,26.1,21.4,26.1z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>AR / VR</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/devops-consulting-service">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M11.7,44.6c0.1-0.1,0.1-0.2,0.1-0.3c0.1-1.2,0.2-2.4,0.3-3.6c0-0.2,0-0.3-0.1-0.4c-0.4-0.4-0.6-0.9-0.8-1.4 c-1.2-2.9-1-5.7,0.8-8.4c0.4-0.6,0.9-1.1,1.4-1.6c-0.1-0.1-0.3-0.1-0.4-0.1c-1.2-0.1-2.4-0.2-3.6-0.2c-0.6,0-0.5,0-0.5-0.5 c0-0.9,0.1-1.8,0.1-2.8C9,25,9,24.7,9,24.4c-0.1,0-0.1,0.1-0.2,0.1c-0.4,0.3-0.9,0.7-1.3,1.1c-2.1,2.3-3.3,4.9-3.6,8 c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.3,0,0.4c0,0.7,0,1.4,0,2.1c0,0.1,0,0.2,0,0.3C4,36.6,4,36.6,4,36.7c0.1,1.3,0.4,2.6,0.9,3.9 C5.4,41.9,6,43.1,7,44.1c0.1,0.1,0.3,0.2,0.5,0.2c1.2,0.1,2.3,0.2,3.5,0.2C11.2,44.6,11.4,44.6,11.7,44.6z"
                                        />
                                        <path
                                          className="st0"
                                          d="M44.7,40.3c-1.5-1.7-3-3.3-4.5-5c0,0,0-0.1,0.1-0.1c1.8-2,3.7-4.1,5.5-6.1C46,29,46,28.9,46,28.7 c0-0.6,0.1-1.3,0.2-1.9c0.1-0.7,0.1-1.4,0.2-2.1c-0.1-0.1-0.3-0.1-0.4-0.1c-1.2-0.1-2.5-0.2-3.7-0.4c-0.2,0-0.4,0-0.5,0.2 c-1.8,2-3.6,4-5.4,5.9c-0.1,0.1-0.2,0.2-0.3,0.3c-1.2-1.4-2.4-2.7-3.6-4.1c-0.2-0.2-0.4-0.3-0.7-0.4c-1.2-0.1-2.5-0.2-3.7-0.3 c-0.1,0-0.2,0-0.3,0c0,0,0,0,0,0.1c-0.1,1.4-0.2,2.9-0.3,4.3c0,0.2,0,0.3,0.2,0.4c1.1,1.2,2.2,2.4,3.2,3.6c0.3,0.4,0.7,0.8,1,1.1 c-1.9,2.1-3.9,4.3-5.8,6.4c1.5,0.1,3,0.2,4.4,0.3c-0.1,1.4-0.1,2.8-0.2,4.2c0,0,0,0,0.1,0c1.9-2.1,3.8-4.2,5.7-6.3 c1.3,1.4,2.5,2.8,3.9,4.3c0.2-1.5,0.3-2.8,0.5-4.2C41.8,40.2,43.3,40.3,44.7,40.3C44.7,40.4,44.7,40.4,44.7,40.3z"
                                        />
                                        <path
                                          className="st0"
                                          d="M67.5,32c-0.6-2.4-1.8-4.6-3.4-6.5c-0.1-0.1-0.1-0.2-0.3-0.2c-0.1,1.3-0.2,2.7-0.3,4c-1.6-0.1-3.1-0.2-4.6-0.2 c0,0,0,0.1-0.1,0.1c0.1,0.1,0.2,0.2,0.3,0.3c0.8,0.8,1.4,1.7,1.8,2.8c0.8,2.1,0.8,4.1,0.1,6.2c-0.4,1.2-1.1,2.3-2.1,3 c-0.2,0.1-0.2,0.2-0.2,0.4c-0.1,0.7-0.1,1.5-0.2,2.2c-0.1,0.6-0.1,1.3-0.2,1.9c0,0,0.1,0,0.1,0c1.4,0.1,2.8,0.3,4.2,0.4 c0.1,0,0.2,0,0.3-0.1c0.6-0.4,1.1-0.9,1.5-1.4c1.7-1.9,2.9-4.1,3.3-6.6C68.2,36.2,68.1,34.1,67.5,32z"
                                        />
                                        <path
                                          className="st0"
                                          d="M57.6,46.7c0.1-1.5,0.3-2.9,0.4-4.4c-0.1,0-0.1,0-0.2,0c-0.6,0.4-1.2,0.7-1.9,1c-1.8,0.7-3.7,0.8-5.7,0.4 c-1.6-0.4-3.1-1.1-4.3-2.2c-0.1-0.1-0.2-0.2-0.4-0.2c-1.4-0.1-2.7-0.2-4.1-0.3C41,41,41,41,41,41.3c-0.1,1.2-0.2,2.4-0.3,3.5 c0,0.2,0,0.4,0.2,0.5c0.8,0.9,1.8,1.6,2.8,2.3c1.6,1,3.2,1.7,5.1,2.1c1.5,0.3,3,0.4,4.5,0.3c3-0.2,5.9-1.1,8.4-2.8 c0.1,0,0.2,0,0.1-0.2C60.4,47,59,46.8,57.6,46.7z"
                                        />
                                        <path
                                          className="st0"
                                          d="M29.3,42.8c-1.4-0.1-2.7-0.2-4.1-0.3c-0.2,0-0.3,0-0.4,0.1c-1.6,0.9-3.2,1.4-5.1,1.4c-2.3,0-4.3-0.7-6.2-2.1 c-0.3-0.2-0.5-0.4-0.8-0.6c-0.1,1.4-0.2,2.8-0.4,4.2C11,45.4,9.5,45.3,8,45.2c0.1,0.1,0.2,0.2,0.2,0.3c1.1,1.1,2.3,2,3.7,2.7 c2.2,1.2,4.6,1.8,7.1,2c0,0,0,0,0,0.1c0.6,0,1.2,0,1.8,0c0,0,0,0,0-0.1c1.6-0.1,3.1-0.4,4.6-0.9c1.3-0.5,2.6-1.1,3.7-2 c0.1-0.1,0.2-0.2,0.2-0.4c0-1.3,0.1-2.5,0.2-3.8C29.6,42.9,29.5,42.9,29.3,42.8z"
                                        />
                                        <path
                                          className="st0"
                                          d="M14.2,28c0.1,0,0.2,0,0.4-0.1c1.4-0.8,2.9-1.3,4.5-1.5c2.7-0.2,5.1,0.7,7.1,2.5c0.1,0.1,0.2,0.2,0.3,0.2 c0.1-1.4,0.2-2.9,0.4-4.3c1.4,0.1,2.8,0.2,4.2,0.3c0-0.1-0.1-0.2-0.1-0.2c-0.9-0.9-2-1.7-3.1-2.4c-1.9-1.1-3.9-1.9-6.1-2.1 c-2.8-0.3-5.5,0.2-8.1,1.2c-1.1,0.4-2.2,1-3.3,1.7c-0.2,0.1-0.3,0.3-0.3,0.6c0,0.4,0,0.7-0.1,1.1c-0.1,0.9-0.1,1.8-0.2,2.7 c0.1,0,0.1,0,0.2,0C11.3,27.9,12.7,28,14.2,28z"
                                        />
                                        <path
                                          className="st0"
                                          d="M46.8,28.2c0.1,0,0.1,0,0.2,0c0.7-0.6,1.4-0.9,2.2-1.2c1.8-0.6,3.6-0.7,5.5-0.3c1.3,0.2,2.4,0.7,3.4,1.6 c0.1,0.1,0.3,0.2,0.5,0.2c1.3,0.1,2.5,0.1,3.8,0.2c0.2,0,0.4,0.1,0.6,0c0.1-1.4,0.2-2.7,0.3-4.1c0-0.1-0.1-0.2-0.1-0.3 c-0.4-0.4-0.8-0.8-1.3-1.2c-1.8-1.3-3.9-2.1-6.1-2.4c-1.9-0.3-3.7-0.2-5.6,0.1c-2.4,0.4-4.6,1.1-6.7,2.4c-0.2,0.1-0.4,0.2-0.6,0.4 c1.5,0.1,2.9,0.3,4.4,0.4C47,25.4,46.9,26.8,46.8,28.2z"
                                        />
                                        <path
                                          className="st0"
                                          d="M56.3,36.5c-0.1,0-0.2,0-0.3,0c-0.3,0-0.6-0.2-0.8-0.3c-0.2,0.2-0.3,0.4-0.4,0.7c0.7,0.4,1.4,0.6,2.2,0.3 c0.4-0.1,0.6-0.5,0.6-0.9c0-0.4-0.2-0.7-0.6-0.8c-0.2-0.1-0.4-0.1-0.7-0.2c-0.1,0-0.3-0.1-0.3-0.2c0-0.1,0.1-0.1,0.1-0.1 c0.4-0.1,0.7,0.2,1,0.3c0.1-0.2,0.2-0.4,0.4-0.7c-0.6-0.4-1.4-0.5-2-0.3c-0.4,0.2-0.6,0.4-0.6,0.8c0,0.4,0.2,0.7,0.5,0.9 c0.1,0.1,0.2,0.1,0.3,0.1c0.2,0.1,0.4,0.1,0.6,0.2c0.1,0,0.2,0.1,0.2,0.2C56.5,36.4,56.3,36.4,56.3,36.5z"
                                        />
                                        <path
                                          className="st0"
                                          d="M24.5,34.3c-0.2,0.5-0.3,1-0.5,1.6c-0.2-0.6-0.4-1.1-0.5-1.6c0-0.1-0.1-0.3-0.3-0.3c-0.3,0-0.6,0-0.9,0 c0,0.1,0,0.1,0,0.1c0.3,0.8,0.6,1.6,1,2.4c0.3,0.7,0.3,0.7,1,0.7c0.2,0,0.2-0.1,0.3-0.2c0.2-0.5,0.4-1.1,0.6-1.6 c0.2-0.5,0.4-0.9,0.5-1.4c-0.3,0-0.6,0-0.9,0C24.7,34,24.6,34.1,24.5,34.3z"
                                        />
                                        <path
                                          className="st0"
                                          d="M47.7,33c-0.7,0.1-1.3,0.5-1.6,1.2c-0.7,1.8,0.6,3.1,2,3.1c1.6,0,2.6-1.5,2.1-3C49.9,33.4,48.8,32.8,47.7,33z M48.2,36.2c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C49.3,35.8,48.8,36.2,48.2,36.2z"
                                        />
                                        <path
                                          className="st0"
                                          d="M14.6,33.1c0,1.4,0,2.7,0,4.1c0.7,0,1.3,0,2,0c1.1-0.1,1.8-0.9,1.8-1.9c0.1-1.3-0.8-2-1.8-2.1 C16,33,15.3,33.1,14.6,33.1z M17.2,34.5c0.3,0.4,0.3,0.8,0,1.2c-0.3,0.5-0.9,0.5-1.5,0.5c0-0.7,0-1.4,0-2.1 C16.3,34,16.8,34,17.2,34.5z"
                                        />
                                        <path
                                          className="st0"
                                          d="M52.2,37c0.6,0.5,1.5,0.3,1.9-0.3c0.4-0.6,0.4-1.2,0.2-1.8c-0.2-0.6-0.8-1-1.4-0.9c-0.3,0-0.5,0.2-0.8,0.4 c-0.1-0.1,0-0.2-0.1-0.4c-0.3,0-0.7,0-1,0c0,1.4,0,2.8,0,4.1c0.3,0,0.6,0,0.8,0c0.2,0,0.2-0.1,0.2-0.2c0-0.3,0-0.7,0-1 C52.1,36.9,52.2,37,52.2,37z M52,35.6c0-0.4,0.3-0.7,0.6-0.7c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7C52.3,36.3,52,36,52,35.6 z"
                                        />
                                        <path
                                          className="st0"
                                          d="M20.4,35.9c0.5,0,1,0,1.5,0c0.2,0,0.3,0,0.2-0.2c0-0.5-0.1-0.9-0.4-1.3c-0.5-0.5-1.3-0.6-2-0.2 c-0.6,0.4-0.9,1.2-0.7,1.9c0.3,0.9,1.2,1.4,2.1,1.1c0.4-0.1,0.7-0.3,0.9-0.6c-0.2-0.2-0.4-0.3-0.6-0.5c-0.7,0.4-1.1,0.4-1.4-0.2 C20.2,35.9,20.3,35.9,20.4,35.9z M20.5,34.8c0.3,0,0.5,0.2,0.5,0.5c-0.4,0-0.7,0-1.1,0C20.1,35,20.3,34.8,20.5,34.8z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>DevOps Consulting</div>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menublock">
                            <h4>
                              <Link href="/blockchain-development">
                                <div className="menu-icon">
                                  <svg
                                    className="main-service"
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 72 72"
                                    style={{
                                      enableBackground: "new 0 0 72 72",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <g>
                                      <path
                                        className="st1"
                                        d="M25.8,20.1c0.8,0.6,1.1,1.4,1.3,2.3c1-0.5,1.9-1,2.8-1.5c1.6,0.9,3.1,1.8,4.6,2.7c0.2,1,0,1.9,0.2,2.9 c0.8-0.3,1.7-0.2,2.5,0c0.2-1-0.1-1.9,0.2-2.9c1.5-0.9,3-1.8,4.6-2.7c0.9,0.5,1.8,1,2.8,1.5c0.1-1,0.5-1.7,1.3-2.3 c-1-0.6-1.9-1.1-2.8-1.6c0-1.9,0-3.8,0-5.6c0-0.9-0.3-1.6-1.1-2c-1.7-1-3.4-1.9-5.1-3c-0.8-0.5-1.5-0.5-2.3,0c-1.6,1-3.3,2-5,2.9 c-0.9,0.5-1.2,1.1-1.2,2.1c0.1,1.9,0,3.7,0,5.6C27.7,19,26.8,19.5,25.8,20.1z M40.6,18.6c-1,0.6-2.1,1.2-3.2,1.9c0-1.4,0-2.6,0-3.9 c1-0.6,2-1.2,3.2-1.9C40.6,16.1,40.6,17.3,40.6,18.6z M36,10.3c1.1,0.7,2.2,1.3,3.3,2c-1.1,0.8-2.2,1.4-3.3,1.9 c-1.1-0.5-2.1-1.2-3.3-1.9C33.7,11.5,34.9,11,36,10.3z M31.3,14.6c1.2,0.7,2.2,1.3,3.2,1.9c0,1.3,0,2.5,0,3.8 c-1.2-0.5-2.2-1.2-3.2-1.8C31.3,17.3,31.3,16.1,31.3,14.6z"
                                      />
                                      <path
                                        className="st1"
                                        d="M42,41c1,0.4,1.8,1.1,2.9,1.4c0-1,0.6-1.6,1.1-2.2c-0.9-0.7-1.9-1-2.7-1.6c0-1.9,0-3.8,0-5.7 c0-0.7-0.2-1.3-0.8-1.7c-1.9-1.1-3.8-2.2-5.7-3.3c-0.5-0.3-1-0.3-1.6,0c-1.9,1.1-3.9,2.3-5.8,3.4c-0.5,0.3-0.7,0.7-0.7,1.3 c0,0.4,0,0.8,0,1.2c0,1.7,0,3.3,0,4.9c-0.9,0.5-1.8,1-2.8,1.5c0.7,0.6,1.1,1.3,1.3,2.3c1-0.5,1.9-1,2.8-1.5 c1.5,0.9,3.1,1.8,4.6,2.7c0.2,1,0,2,0.2,3c0.8-0.3,1.6-0.3,2.5,0c0.3-1,0-2,0.2-3C38.9,42.8,40.5,41.9,42,41z M34.6,40.5 c-1.2-0.7-2.2-1.3-3.2-1.9c0-1.3,0-2.5,0-3.8c1.2,0.5,2.2,1.2,3.2,1.8C34.6,37.9,34.6,39.1,34.6,40.5z M36,34.4 c-1.1-0.7-2.1-1.2-3.3-1.9c1.1-0.8,2.2-1.3,3.2-2c1.1,0.5,2.2,1.2,3.4,2C38.2,33.1,37.1,33.7,36,34.4z M37.4,36.7 c1-0.7,2-1.3,3.2-1.9c0,1.4,0,2.6,0,3.9c-1,0.6-2,1.2-3,1.8C37.3,39.6,37.2,38.5,37.4,36.7z"
                                      />
                                      <path
                                        className="st1"
                                        d="M13.3,31.4c1.3,0.7,2.5,1.5,3.8,2.2c0,1,0,1.9,0,2.9c0.9-0.3,1.7-0.3,2.6-0.1c0.2-1,0-1.9,0.2-2.9 c1.5-0.9,3.1-1.8,4.6-2.7c1,0.5,1.9,1,2.9,1.5c0.1-1,0.6-1.7,1.2-2.3c-0.8-0.7-1.9-0.9-2.7-1.6c0-1.9,0-3.7,0-5.6 c0-0.9-0.3-1.6-1.1-2c-1.7-1-3.4-2-5.1-3c-0.3-0.2-0.7-0.4-1.2-0.4c-0.2,0.1-0.4,0.1-0.6,0.2c-2,1.1-3.9,2.3-5.9,3.5 c-0.6,0.3-0.8,0.8-0.8,1.5c0,1.6,0,3.2,0,4.9C11.1,30.4,10.7,29.9,13.3,31.4z M23.1,28.5c-1,0.7-2.1,1.3-3.3,2 c-0.2-1.3-0.1-2.5-0.1-3.9c1.1-0.6,2.1-1.2,3.3-1.9C23.2,26.1,23.1,27.3,23.1,28.5z M18.4,20.4c1.1,0.6,2.1,1.2,3.3,1.9 c-1,0.8-2.1,1.3-3.3,2c-1.1-0.6-2.2-1.3-3.4-2C16.3,21.6,17.3,21,18.4,20.4z M13.8,24.8c1.2,0.5,2.1,1.2,3.2,1.7 c0.2,1.3,0,2.5,0.1,3.9c-0.7-0.2-1.2-0.6-1.7-0.9c-0.5-0.3-1-0.6-1.6-0.9C13.8,27.3,13.8,26.1,13.8,24.8z"
                                      />
                                      <path
                                        className="st1"
                                        d="M44.7,32.4c1-0.5,1.9-1,2.8-1.5c1.6,0.9,3.1,1.8,4.6,2.7c0.3,1-0.1,1.9,0.2,2.9c0.8-0.3,1.6-0.2,2.5,0 c0-1,0-1.9,0-2.9c1.6-0.9,3.1-1.9,4.6-2.7c1-0.5,1.5-1.2,1.4-2.3c-0.1-1.9-0.1-3.8,0-5.7c0-0.9-0.3-1.6-1.1-2c-1.7-1-3.4-2-5.1-3 c-0.4-0.2-0.8-0.4-1.1-0.4c-0.6,0.1-1.1,0.4-1.5,0.7c-1.4,0.8-2.7,1.6-4.1,2.4c-1.8,1-1.8,1-1.8,3.1c0,0.5,0,1,0,1.5 c0,1.1,0,2.3,0,3.4c-0.9,0.5-1.8,1-2.7,1.5C44.1,30.8,44.6,31.5,44.7,32.4z M58.2,28.6c-1,0.6-2,1.2-3.2,1.9c0-1.4,0-2.6,0-3.9 c1-0.6,2-1.2,3.2-1.9C58.2,26.1,58.2,27.3,58.2,28.6z M53.5,20.4c1.1,0.6,2.1,1.2,3.3,1.9c-1.1,0.8-2.2,1.3-3.3,2 c-1.1-0.6-2.1-1.2-3.4-2C51.4,21.6,52.5,21,53.5,20.4z M48.9,24.7c1.2,0.7,2.2,1.3,3.3,1.9c0,1.3,0,2.5,0,3.9 C51,30,50,29.2,48.9,28.6C48.9,27.4,48.9,26.1,48.9,24.7z"
                                      />
                                      <path
                                        className="st1"
                                        d="M59.9,41.1c-1.8-1-3.6-2.1-5.4-3.2c-0.3-0.2-0.6-0.4-1.1-0.3c-0.4,0.1-0.8,0.3-1.2,0.6 c-1.3,0.7-2.5,1.5-3.8,2.2c-2.6,1.5-2.2,1.1-2.3,4c0,1.5,0,2.9,0,4.3c-0.9,0.5-1.8,1-2.7,1.5c0.7,0.6,1.1,1.4,1.2,2.3 c1-0.5,1.9-1,2.8-1.5c2.1,1.1,3.9,2.4,5.9,3.3c0.5-0.1,0.8-0.2,1.1-0.4c1.8-1.1,3.7-2.2,5.5-3.2c0.7-0.4,0.9-0.9,0.9-1.7 c0-2.1,0-4.2,0-6.3C60.9,42,60.6,41.5,59.9,41.1z M52.2,50.6C51,50,50,49.3,48.9,48.7c0-1.3,0-2.5,0-3.9c1.2,0.6,2.2,1.2,3.3,1.9 C52.2,47.9,52.2,49.2,52.2,50.6z M53.6,44.4c-1.1-0.5-2.2-1.3-3.4-1.9c1.2-0.7,2.3-1.3,3.4-2c1.1,0.6,2.1,1.2,3.1,1.9 C55.7,43.2,54.7,43.8,53.6,44.4z M58.2,48.7c-1.1,0.6-2.1,1.2-3.3,1.9c-0.1-1.4,0-2.6,0-3.9c1.1-0.6,2.1-1.2,3.2-1.9 C58.3,46.2,58.2,47.4,58.2,48.7z"
                                      />
                                      <path
                                        className="st1"
                                        d="M25.8,47.5c0-1.5,0-3.1,0-4.6c0-0.7-0.2-1.3-0.9-1.7c-1.9-1.1-3.8-2.2-5.7-3.3c-0.5-0.3-1-0.3-1.6,0 c-1.9,1.1-3.8,2.2-5.7,3.3c-0.5,0.3-0.8,0.7-0.8,1.3c0,2.4,0,4.9,0,7.3c0.6,0.9,5.6,3.9,7.4,4.6c2-1,3.9-2.3,5.9-3.3 c0.9,0.5,1.8,1,2.8,1.5c0.1-1,0.6-1.7,1.2-2.3c-1-0.5-1.8-1-2.6-1.5C25.7,48.3,25.8,47.9,25.8,47.5z M17,50.6 c-1.1-0.7-2.2-1.3-3.2-1.9c0-1.3,0-2.5,0-3.9c1.2,0.5,2.2,1.2,3.2,1.8C17,48,17,49.3,17,50.6z M18.4,44.4c-1.1-0.6-2.2-1.3-3.4-2 c1.2-0.7,2.2-1.3,3.4-2c1.1,0.6,2.1,1.2,3.3,1.9C20.6,43.2,19.5,43.8,18.4,44.4z M23.1,48.6c-1,0.7-2.1,1.3-3.4,2 c0-1.4,0-2.6,0-3.9c1-0.7,2.1-1.3,3.2-1.9C23.2,46.2,23.1,47.4,23.1,48.6z"
                                      />
                                      <path
                                        className="st1"
                                        d="M43.3,56.1c0-1.1,0-2.2,0-3.3c0-0.7-0.3-1.2-0.9-1.6c-1.8-1.1-3.7-2.1-5.5-3.2c-0.6-0.4-1.2-0.4-1.9,0 c-1.8,1.1-3.7,2.2-5.5,3.2c-0.6,0.3-0.9,0.8-0.9,1.5c0,2.2,0,4.3,0,6.5c0,0.7,0.3,1.2,0.9,1.5c1.9,1.1,3.7,2.2,5.6,3.3 c0.6,0.3,1.1,0.4,1.7,0c1.9-1.1,3.7-2.2,5.6-3.3c0.6-0.4,0.9-0.9,0.9-1.6C43.3,58.1,43.3,57.1,43.3,56.1z M34.6,60.7 c-1.1-0.7-2.1-1.2-3.2-1.9c0-1.3,0-2.6,0-3.9c1.2,0.6,2.2,1.2,3.2,1.9C34.6,58,34.6,59.3,34.6,60.7z M36,54.5 c-1.1-0.7-2.1-1.3-3.3-1.9c1-0.8,2.1-1.3,3.2-2c1.1,0.6,2.2,1.2,3.3,2C38.1,53.2,37.1,53.8,36,54.5z M40.7,58.7 c-1.1,0.7-2.1,1.3-3.3,1.9c0-1.4,0-2.6,0-3.9c1-0.6,2.1-1.2,3.2-1.9C40.8,56.2,40.6,57.4,40.7,58.7z"
                                      />
                                    </g>
                                  </svg>
                                </div>
                                BlockChain
                              </Link>
                            </h4>
                            <ul>
                              <li>
                                <Link href="/smart-contract-development-company">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M64.1,35.1c-0.4-1.6-1.4-2.7-2.9-3.4c-0.3-0.1-0.4-0.3-0.5-0.6c-1-5.1-3.4-9.4-7.1-13 c-3.5-3.4-7.6-5.7-12.4-6.8c-0.6-0.1-0.9-0.4-1.1-0.9c-0.8-1.7-2.2-2.6-4.1-2.8c-1.7,0.1-3.1,0.9-3.9,2.4c-0.5,1-1.2,1.2-2.2,1.5 c-9.9,2.8-16.1,9.3-18.6,19.3c-0.1,0.5-0.3,0.8-0.8,1c-2,0.9-3.2,3.1-2.7,5c0.4,1.6,1.4,2.7,2.9,3.4c0.3,0.1,0.5,0.3,0.5,0.6 c0.4,2.1,1.1,4.2,2.1,6.1c3.7,7.2,9.5,11.8,17.5,13.7c0.5,0.1,0.8,0.3,1,0.8c0.9,2,3.1,3.1,5,2.7c1.5-0.3,2.6-1.3,3.3-2.6 c0.3-0.5,0.6-0.7,1.1-0.9c10-2.6,16.5-8.8,19.2-18.8c0.2-0.9,0.5-1.5,1.4-2C63.7,38.9,64.5,36.8,64.1,35.1z M35.9,10.8 c1,0,1.6,0.4,1.6,1.2c0,1.1-0.5,1.6-1.5,1.6c-1,0-1.5-0.5-1.5-1.4C34.4,11.3,35,10.8,35.9,10.8z M12.2,37.5c-0.9,0-1.3-0.5-1.3-1.5 c0-0.9,0.5-1.5,1.2-1.5c1.1,0,1.7,0.5,1.7,1.5C13.7,37,13.2,37.5,12.2,37.5z M36,61.1c-1,0-1.6-0.5-1.6-1.4c0-0.9,0.5-1.4,1.5-1.4 c1,0,1.5,0.5,1.5,1.6C37.5,60.6,36.9,61.1,36,61.1z M30.1,48.9c-1.3,0-1.7-0.4-1.7-1.7c0-7.5,0-14.9,0-22.4c0-1.3,0.4-1.7,1.7-1.7 c4,0,7.9,0,11.9,0c1.3,0,1.7,0.4,1.7,1.7c0,3.7,0,7.5,0,11.2c0,3.7,0,7.5,0,11.2c0,1.3-0.4,1.7-1.7,1.7C38,48.9,34,48.9,30.1,48.9z M57.6,40.5c-2.2,9.2-7.9,14.9-17.1,17.1c-0.4,0.1-0.6,0-0.8-0.3c-0.4-0.7-1.1-1.2-1.8-1.6c-0.3-0.1-0.4-0.3-0.4-0.6 c0-0.9,0-1.9,0-2.8c0-0.3,0.1-0.4,0.4-0.4c1.3,0,2.7,0,4,0c2.6,0,4.8-2.2,4.8-4.8c0-3.7,0-7.5,0-11.2c0-3.7,0-7.4,0-11.1 c0-2.8-2.6-5-4.9-4.9c-3.9,0.1-7.8,0-11.7,0c-2.6,0-4.8,2.2-4.8,4.7c0,7.5,0,15,0,22.5c0,2.5,2.2,4.7,4.7,4.7c1.3,0,2.6,0,3.9,0 c0.4,0,0.5,0,0.5,0.5c0,0.9,0,1.8,0,2.7c0,0.3,0,0.5-0.3,0.6c-0.8,0.4-1.5,0.9-1.9,1.7c-0.2,0.3-0.4,0.3-0.7,0.3 c-8.7-1.7-15.5-8.6-17.1-17.2c-0.1-0.3,0-0.5,0.3-0.7c2.9-2.1,2.9-5.5,0-7.6c-0.3-0.2-0.3-0.4-0.2-0.7c1.6-7,5.5-12.2,12-15.4 c1.6-0.8,3.4-1.3,5.2-1.7c0.3-0.1,0.5,0,0.7,0.3c2.1,2.8,5.5,2.8,7.6,0c0.2-0.3,0.4-0.3,0.7-0.3c8.7,1.7,15.4,8.5,17.2,17.1 c0.1,0.3,0,0.5-0.3,0.7c-1.4,1.1-2.3,2.5-2,4.4c0.2,1.3,1,2.4,2.1,3.1C57.7,39.9,57.7,40.2,57.6,40.5z M59.9,37.5 c-1.1,0-1.6-0.5-1.6-1.5c0-1,0.5-1.5,1.4-1.5c1,0,1.4,0.5,1.4,1.6C61.1,36.9,60.7,37.5,59.9,37.5z"
                                        />
                                        <path
                                          className="st0"
                                          d="M31.3,30.6c0.5,0,1.1,0,1.6,0c0.5,0,1.1,0,1.6,0c0.8,0,1.4-0.7,1.4-1.4c0-0.8-0.6-1.5-1.4-1.6 c-1.1,0-2.2,0-3.3,0c-0.8,0-1.4,0.7-1.4,1.6C29.9,29.9,30.5,30.6,31.3,30.6z"
                                        />
                                        <path
                                          className="st0"
                                          d="M40.5,44.3c1,0,1.6-0.6,1.6-1.5c0-0.9-0.6-1.5-1.6-1.5c-1.5,0-2.9,0-4.4,0c-1.5,0-3,0-4.5,0 c-1,0-1.6,0.6-1.6,1.5c0,0.9,0.6,1.5,1.6,1.5C34.5,44.3,37.5,44.3,40.5,44.3z"
                                        />
                                        <path
                                          className="st0"
                                          d="M40.4,36.7c-3,0-6,0-8.9,0c-1,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.5,1.7,1.5c1.5,0,2.9,0,4.4,0c1.5,0,3,0,4.5,0 c1,0,1.6-0.6,1.6-1.5C42.1,37.4,41.5,36.7,40.4,36.7z"
                                        />
                                        <path
                                          className="st0"
                                          d="M31.5,35.2c3,0,6,0,8.9,0c1,0,1.6-0.7,1.6-1.6c0-0.9-0.7-1.5-1.7-1.5c-1.5,0-2.9,0-4.4,0c-1.5,0-3,0-4.5,0 c-1,0-1.6,0.6-1.7,1.5C29.9,34.5,30.5,35.2,31.5,35.2z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Smart Contract</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/dapps-development-services-company">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M50.6,20.5L15.5,9.7l13,36l35.8,3.7L50.6,20.5z M35.5,38.8l-4.1-11.3L42.8,30l4.7,10.6L35.5,38.8z"
                                        />
                                        <polygon
                                          className="st0"
                                          points="7.6,37.8 23.9,39.9 26.9,48.2 36.2,49 41.1,62 15.1,62.2 "
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>dApps</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/crypto-currency-development-company">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M64.2,31.9c-0.9-6.2-3.6-11.5-7.9-16c-1.3-1.3-2.7-2.5-4.3-3.5c-3.4-2.3-7-3.8-11-4.5 c-1.1-0.2-2.1-0.2-3.2-0.3c-1.3,0-2.7,0-4,0c-0.7,0.1-1.3,0.1-2,0.2c-3,0.4-5.9,1.3-8.6,2.7c-3.6,1.8-6.7,4.2-9.3,7.3 c-3,3.6-4.9,7.6-5.9,12.1c-0.3,1.3-0.4,2.7-0.5,4c0,1.4,0,2.8,0,4.2c0.1,0.6,0,1.2,0.1,1.9c0.9,6.2,3.5,11.5,7.8,16 c1.6,1.7,3.4,3.1,5.3,4.3c2.8,1.7,5.8,2.9,9,3.6c1.3,0.3,2.7,0.4,4,0.5c1.3,0,2.7,0,4,0c0.7-0.1,1.5-0.1,2.2-0.2 c3-0.4,5.9-1.3,8.6-2.7c3.6-1.8,6.7-4.2,9.2-7.3c3-3.6,4.9-7.6,6-12.2c0.3-1.3,0.4-2.7,0.5-4c0-1.4,0-2.7,0-4.1 C64.3,33.3,64.3,32.6,64.2,31.9z M35.9,60.5c-13.6-0.1-24.6-11.2-24.6-24.7c0.1-13.6,11.2-24.6,24.7-24.5 C49.6,11.4,60.7,22.5,60.6,36C60.5,49.6,49.5,60.6,35.9,60.5z"
                                        />
                                        <path
                                          className="st0"
                                          d="M35.9,15.1c-11.4,0-20.8,9.5-20.7,20.8c0.1,11.5,9.4,20.9,20.9,20.8c11.5,0,20.8-9.4,20.8-20.9 C56.8,24.4,47.4,15.1,35.9,15.1z M47.7,32.3c-0.3,2.6-1.2,3.8-3.6,4.6c0.4,0.2,0.7,0.5,1.1,0.7c1.6,1.2,2.2,2.8,1.8,4.8 c-0.4,2.1-1.3,3.9-3.3,4.9c-1.2,0.6-2.6,0.7-3.9,0.6c-0.9,0-1.8-0.1-2.7-0.3c-0.3-0.1-0.4,0-0.4,0.3c-0.3,1.3-0.7,2.6-1,3.9 c-0.1,0.4-0.2,0.5-0.6,0.4c-0.6-0.2-1.2-0.3-1.8-0.4c-0.4-0.1-0.5-0.2-0.4-0.7c0.3-1.2,0.6-2.5,0.9-3.7c0.1-0.4,0-0.5-0.4-0.6 c-0.5-0.1-0.9-0.2-1.3-0.3c-0.4-0.1-0.5,0-0.6,0.3c-0.3,1.2-0.6,2.5-0.9,3.7c-0.1,0.4-0.2,0.5-0.7,0.4c-0.6-0.2-1.2-0.4-1.9-0.5 c-0.4-0.1-0.4-0.2-0.3-0.6c0.3-1.2,0.6-2.5,1-3.7c0.1-0.4,0.1-0.7-0.4-0.8c-1.5-0.3-3.1-0.8-4.6-1.1c-0.5-0.1-0.6-0.3-0.3-0.7 c0.4-0.7,0.7-1.5,1-2.3c0.1-0.3,0.3-0.4,0.6-0.3c0.6,0.2,1.2,0.4,1.8,0.4c0.7,0.1,1.1-0.2,1.3-0.9c1-4.2,2.1-8.3,3.1-12.5 c0.2-0.8-0.2-1.4-1-1.7c-0.6-0.2-1.2-0.3-1.9-0.5c-0.4-0.1-0.5-0.2-0.4-0.6c0.2-0.7,0.4-1.4,0.5-2.1c0.1-0.4,0.2-0.4,0.6-0.4 c1.6,0.4,3.1,0.8,4.7,1.2c0.5,0.1,0.6,0,0.7-0.5c0.3-1.2,0.6-2.5,0.9-3.7c0.1-0.3,0.2-0.4,0.5-0.3c0.6,0.2,1.3,0.4,2,0.5 c0.4,0.1,0.4,0.2,0.3,0.6c-0.3,1.2-0.6,2.4-0.9,3.6c-0.1,0.4,0,0.5,0.4,0.6c0.4,0.1,0.8,0.1,1.2,0.3c0.5,0.2,0.7,0.1,0.8-0.4 c0.2-1.2,0.6-2.4,0.9-3.5c0.1-0.3,0.2-0.4,0.5-0.3c0.7,0.2,1.3,0.4,2,0.5c0.4,0.1,0.4,0.3,0.3,0.6c-0.3,1.2-0.6,2.5-0.9,3.7 c-0.1,0.4,0,0.5,0.4,0.7c1,0.3,2,0.8,2.9,1.4C46.9,28.8,47.9,30.3,47.7,32.3z"
                                        />
                                        <path
                                          className="st0"
                                          d="M40.1,38.9c-0.4-0.3-0.8-0.6-1.3-0.8c-1.5-0.7-3-1-4.6-1.4c-0.2-0.1-0.3,0-0.3,0.2c-0.5,1.9-1,3.8-1.4,5.7 c-0.1,0.2,0,0.3,0.2,0.4c1.6,0.4,3.2,0.9,5.1,0.9c0.2,0,0.7,0,1.1-0.1c1.1-0.2,2-0.8,2.3-2C41.5,40.6,41.1,39.7,40.1,38.9z"
                                        />
                                        <path
                                          className="st0"
                                          d="M40.9,29.8c-1.4-0.9-3-1.2-4.5-1.6c-0.3-0.1-0.2,0.1-0.3,0.3c-0.4,1.7-0.8,3.4-1.3,5.1c-0.1,0.2,0,0.3,0.2,0.4 c1.3,0.3,2.5,0.6,3.9,0.7c0.2,0,0.4,0,0.6,0c1.5-0.1,2.5-1,2.6-2.3C42.2,31.2,41.7,30.4,40.9,29.8z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Crypto Currency</div>
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="menublock">
                            <h4>
                              <Link href="/digital-marketing">
                                <div className="menu-icon">
                                  <svg
                                    className="main-service"
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 72 72"
                                    style={{
                                      enableBackground: "new 0 0 72 72",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <g>
                                      <path
                                        className="st1"
                                        d="M41,37.3c-2.6-2.6-5.2-5.2-7.9-7.9c-0.6-0.6-1.2-0.9-2-0.9c-1.3-0.1-2.4,1-2.8,1.9c-0.5,1-0.2,2.1,0.7,3 c5.4,5.4,10.8,10.8,16.2,16.2c0.8,0.8,1.8,1.1,2.8,0.6c1.1-0.5,1.9-1.3,2-2.6c0.1-0.9-0.3-1.6-0.9-2.2C46.5,42.8,43.8,40,41,37.3z"
                                      />
                                      <path
                                        className="st1"
                                        d="M24.9,17.9c0.8-0.2,1-0.6,0.8-1.3c-0.2-0.8-0.4-1.5-0.6-2.3c-0.4-1.6-0.8-3.2-1.2-4.8 c-0.2,0.1-0.3,0.3-0.5,0.4c-1.6,1.8-3.3,3.5-4.9,5.3c-0.5,0.5-0.9,0.6-1.6,0.4c-1.9-0.7-3.9-1.4-5.8-2.1c-0.5-0.2-1-0.3-1.5-0.5 c0,0.1,0,0.2,0,0.2c0.6,2.4,1.2,4.8,1.8,7.2c0.1,0.6,0.5,0.8,1.1,0.6c0.7-0.2,1.4-0.3,2.1-0.5C18,19.6,21.4,18.7,24.9,17.9z"
                                      />
                                      <path
                                        className="st1"
                                        d="M18.5,54.6c-1.2-1.1-2.7-1.1-3.9,0.1c-1.2,1.2-1.3,2.7-0.1,3.9c1.6,1.6,3.3,3.3,4.9,4.9 c0.8,0.8,1.9,1.1,2.9,0.6c1.1-0.5,1.8-1.4,1.9-2.5c0-0.9-0.3-1.5-0.8-2.1C21.7,57.9,20.1,56.3,18.5,54.6z"
                                      />
                                      <path
                                        className="st1"
                                        d="M25.7,20.7c0.5,2.3,0.9,4.7,1.4,7c0.1,0.4,0.3,0.7,0.7,0.8c0.4,0.1,0.7-0.1,1-0.4c1.2-1.4,2.4-2.9,3.6-4.3 c0.5-0.6,0.4-1.1-0.3-1.5c-0.6-0.3-1.2-0.7-1.9-1c-1.1-0.6-2.1-1.1-3.2-1.7c-0.7-0.4-1.3,0-1.3,0.8C25.7,20.5,25.7,20.6,25.7,20.7z "
                                      />
                                      <path
                                        className="st1"
                                        d="M59.9,41.9c-0.6,0.6-1.3,1.3-2,1.9c0.2,0.2,0.4,0.5,0.8,0.8c0.3-0.4,0.6-0.7,0.8-1c0.4,0.4,0.8,0.8,1.2,1.1 c-0.3,0.5-0.7,1-1.1,1.3c-0.6,0.5-1.3,0.5-2,0.1c-0.6-0.3-1.1-0.8-1.4-1.3c-0.6-0.9-0.5-1.8,0.2-2.6c0.4-0.4,0.9-0.7,1.5-0.9 c0.2,0,0.3-0.1,0.5-0.2c-0.1-0.3-0.3-0.7-0.4-1.1c-0.5,0-0.9,0.1-1.3,0.4c-1.2,0.7-2.2,1.7-2.3,3.2c-0.2,1.8,1.4,3.8,3.2,4.1 c0.4,0.1,0.7,0.1,1.1,0c1.5-0.3,3.4-2,3.7-3.4C61.5,43.5,60.7,42.6,59.9,41.9z"
                                      />
                                      <path
                                        className="st1"
                                        d="M17.4,13.8c1.7-1.8,3.3-3.6,4.9-5.3c0,0,0-0.1-0.1-0.1c-3.9,1-7.8,2-11.6,2.9c0,0,0,0.1,0,0.1 C12.9,12.2,15.1,13,17.4,13.8z"
                                      />
                                      <path
                                        className="st1"
                                        d="M55.3,33.6c0.6-1.2,1.2-2.4,1.8-3.5c0.4,0.2,0.6,0.3,1,0.5c0.2-0.3,0.4-0.6,0.5-1c-0.2-0.3-0.6-0.3-0.9-0.6 c0.4-0.8,0.6-0.9,1.6-0.4c0.2-0.3,0.4-0.7,0.5-1c-1.3-1.3-2.3-1.1-3.6,0.6c-0.3,0-0.5-0.3-0.9-0.3c-0.2,0.3-0.3,0.6-0.5,0.9 c0.2,0.3,0.6,0.3,0.8,0.6c-0.6,1.2-1.2,2.3-1.8,3.6C54.4,33.1,54.8,33.4,55.3,33.6z"
                                      />
                                      <path
                                        className="st1"
                                        d="M49.8,37c-0.3-0.6-0.4-1.1-0.7-1.6c-2,0.8-3.9,1.6-5.9,2.5c0.2,0.6,0.4,1,0.7,1.6C45.9,38.6,47.9,37.8,49.8,37 z"
                                      />
                                      <path
                                        className="st1"
                                        d="M38.8,34.4c0.6,0.2,1,0.4,1.6,0.7c0.8-2,1.6-4,2.5-6c-0.6-0.2-1.1-0.4-1.6-0.6C40.5,30.4,39.7,32.4,38.8,34.4z "
                                      />
                                      <path
                                        className="st1"
                                        d="M46.5,32.9c-0.3-0.4-0.7-0.7-1-1.1c-1,1-1.9,1.9-2.8,2.8c0.4,0.4,0.7,0.7,1.1,1.1 C44.6,34.7,45.6,33.8,46.5,32.9z"
                                      />
                                      <path
                                        className="st1"
                                        d="M28,34.9c-2.8,6-5.7,12.1-8.6,18.2c2,1.9,3.9,3.8,5.8,5.8c0.9-0.4,1.7-0.8,2.7-1.3c0.1,0.1,0.2,0.3,0.3,0.4 c0.8,0.8,1.5,1.5,2.3,2.3c0.9,0.9,2.2,0.9,3,0.1c1.5-1.4,2.9-2.9,4.3-4.3c0.7-0.8,0.8-1.9,0.1-2.7c-0.1-0.1-0.3-0.2-0.3-0.4 c1.9-0.9,3.9-1.8,5.7-2.7C38.2,45.2,33.1,40,28,34.9z M36.4,55.1c-1.3,1.3-2.7,2.7-4,4c-0.3,0.3-0.5,0.3-0.8,0.1 c-0.7-0.7-1.5-1.5-2.3-2.3c2.2-1.1,4.4-2.1,6.5-3.1c0.3,0.3,0.6,0.5,0.7,0.9C36.7,54.9,36.6,55,36.4,55.1z"
                                      />
                                      <path
                                        className="st1"
                                        d="M38.1,22.7c0.3,0.1,0.5,0.2,0.8,0.5c0,1.7,0,3.4,0,5.2c0.3,0,0.4-0.2,0.6-0.3c1.5-1.1,3-2.1,4.6-3.2 c0.3-0.2,0.6-0.3,1-0.3c1.7,0,3.3-0.1,4.9-0.5c2.3-0.6,4.3-1.6,6-3.4c2.6-2.7,2.6-6.4,0.1-9.1c-0.9-1-2-1.8-3.2-2.4 c-3.6-1.7-7.4-2-11.2-1.1c-2.3,0.6-4.4,1.6-6,3.4c-2.5,2.6-2.6,6.2-0.2,8.9C36,21.3,37,22.1,38.1,22.7z M40.4,12.9 c3.5,0,7,0,10.5,0c0.1,0.6,0.1,1.1,0,1.6c-3.5,0-7,0-10.5,0C40.4,14,40.4,13.5,40.4,12.9z M40.4,17.5c3.5,0,7,0,10.5,0 c0,0.6,0,1.1,0,1.7c-3.5,0-7,0-10.5,0C40.4,18.6,40.4,18.1,40.4,17.5z"
                                      />
                                      <path
                                        className="st1"
                                        d="M14.9,34.1c0.4-0.3,0.7-0.7,1.1-1c2.2,0.9,4,0.5,5.1-1.1c1-1.5,0.8-3.4-0.4-4.7c-1.2-1.3-3.2-1.5-4.7-0.6 c-0.8,0.5-1.3,1.1-1.6,2c-0.4,1.1-0.2,2.2,0.4,3.3c-0.2,0.1-0.3,0.2-0.5,0.4c-0.5,0.4-0.9,0.9-1.3,1.4c-0.3,0.4-0.3,0.8,0,1.2 c0.3,0.4,0.8,0.4,1.2,0.1C14.4,34.7,14.6,34.4,14.9,34.1z M18,27.8c1.1,0,2,1,2,2.1c0,1.2-0.9,2-2.1,1.9c-1.2,0-2-0.9-1.9-2.1 C16,28.7,16.9,27.8,18,27.8z"
                                      />
                                    </g>
                                  </svg>
                                </div>
                                Digital Marketing
                              </Link>
                            </h4>
                            <ul>
                              <li>
                                <Link href="/app-store-optimization">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M60.3,55.4c-3.8-4.6-7.7-9.2-11.5-13.9c-0.4-0.5-0.8-1.1-1.5-1.4c-0.6-0.3-1.2,0.1-1.8,0.1c-1-1.2-2-2.4-3-3.6 c1.2-1.7,2.2-3.4,2.8-5.4c-1.3,0-1.6-1-1.9-1.8c-0.6-0.2-1.1-0.2-1.7-0.1c-0.4,1-1.1,1.7-2.3,1.5c-0.1,0.3-0.3,0.5-0.4,0.7 c-2.5,4.4-7.3,6.8-12.4,6.2c-4.9-0.7-8.9-4.2-10.2-9.1c-1.2-4.6,0.5-9.7,4.3-12.7c4-3.1,9.3-3.5,13.6-1c1,0.6,2.2,0.9,3.2,1.3 c0.5-0.3,0.8-0.6,1.2-1.1c-0.1-0.6-0.5-1.2-0.2-1.9c0.3-0.7,1.1-0.7,1.6-1.2c-5.9-5.7-15.9-6.1-22.7-1c-7.1,5.4-9.3,15.1-5.2,22.9 c3.8,7.2,13.6,12.6,24.3,7.6c1,1.2,2,2.4,3,3.6c-0.9,1.2-0.4,2.2,0.4,3.2c3.8,4.6,7.7,9.2,11.5,13.7c0.7,0.8,1.3,1.6,2.1,2.2 c0.2,0,0.3,0,0.5,0c0.6-0.2,1.3-0.3,1.9-0.8c0.8-0.7,1.7-1.4,2.5-2.1c1.1-1,2.6-1.7,3.3-3.3c0-0.2,0-0.5,0-0.7 C61.4,56.7,60.8,56,60.3,55.4z"
                                        />
                                        <path
                                          className="st0"
                                          d="M27.8,15.1c-5.1,0.1-9.7,4.7-9.8,9.8c0,0.2,0,0.4,0,0.6c0,0.6,0.3,0.9,0.9,1c0.7,0,1-0.3,1.1-0.9 c0-0.2,0-0.5,0-0.7c0.4-3,1.8-5.3,4.6-6.8c1.2-0.6,2.5-0.9,3.8-0.9c0.7,0,1-0.4,0.9-1.1c0-0.6-0.4-0.9-0.9-0.9 C28.2,15.1,28,15.1,27.8,15.1z"
                                        />
                                        <path
                                          className="st0"
                                          d="M39.8,15c0.1,0.7,0.4,1.5-0.5,2.3c-0.9,0.9-1.7-0.1-2.5,0.1c-0.3,0.6-0.8,1-0.8,1.9c0.6,0.5,1.4,0.8,1.3,1.9 c-0.1,1.2-1,1.3-1.6,1.7c0,0.2,0,0.5,0,0.6c0.3,1.3,0.4,1.3,1.7,1.2c1-0.1,2,1.2,1.6,2.2c-0.4,0.8-0.1,1.1,0.6,1.5 c0.4,0.2,0.7,0.5,1.1,0.3c1.5-1.8,2.4-1.7,3.7,0.3c0.7,0.2,1.3-0.2,1.9-0.5c0.2-0.8-0.5-1.6,0.4-2.4c0.9-0.8,1.6-0.3,2.5-0.1 c0.5-0.6,1-1.2,0.9-2c-0.1-0.1-0.2-0.2-0.3-0.3c-1.4-1-1.4-2.3,0.1-3c0.5-0.3,0.7-0.6,0.5-1.1c-0.2-0.4-0.2-0.9-0.5-1.2 c-0.6-0.3-1.1,0.2-1.7,0.1c-0.5-0.4-1.1-0.9-1.3-1.6c0.1-0.6,0.6-0.9,0.4-1.5c-0.4-0.5-1-0.7-1.6-0.9c-0.3,0.1-0.5,0.2-0.6,0.3 c-0.3,0.7-0.7,1.1-1.6,1c-0.8-0.1-1.3-0.4-1.5-1.2c-0.1-0.4-0.5-0.6-0.9-0.4C40.8,14.4,40.2,14.4,39.8,15z M43.1,18.1 c1.8,0,3.4,1.6,3.5,3.4c0,1.9-1.6,3.6-3.5,3.6c-1.9,0-3.6-1.6-3.6-3.5C39.6,19.7,41.2,18.1,43.1,18.1z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>App Store Optimization</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/social-media-marketing">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M63.7,26.1c-0.4-0.6-1-1-1.7-1.3c-0.3-0.2-0.4-0.2-0.4,0.3c0,2.6,0,5.1,0,7.7c0,0.5,0,0.5,0.5,0.3 c0.8-0.3,1.3-0.9,1.8-1.5c0-1.7,0-3.4,0-5.2C63.8,26.3,63.8,26.2,63.7,26.1z"
                                        />
                                        <path
                                          className="st0"
                                          d="M21,58.9c-0.7,0-1.5,0-2.2,0c-1.1,0-2-0.7-2.4-1.7c-0.2-0.4-0.1-0.9-0.1-1.4c0-1.4,0-2.8,0-4.2 c-0.2,0.1-0.3,0.1-0.4,0.2c-0.4,0.2-0.9,0.4-1.4,0.5c-0.3,0.1-0.6,0-0.7-0.3c-0.1-0.4,0.1-0.6,0.4-0.7c0.1,0,0.3-0.1,0.4-0.1 c1.9-0.5,3.1-2,3.1-4c0-1.1-0.1-2.2-0.5-3.2c-0.1-0.4-0.1-0.7,0.4-0.9c0.3-0.1,0.5-0.2,0.7-0.3c1.8-0.8,3.5-1.7,5.3-2.5 c0.8-0.4,1.4-1,1.2-2c-0.1-0.6-0.2-1.2-0.6-1.5c-0.3-0.3-0.7,0.1-1.1,0.3c-3.1,1.1-6.2,2-9.4,2.8c-0.4,0.1-0.7-0.1-0.7-0.4 c0-0.3,0.2-0.5,0.5-0.6c0.8-0.2,1.7-0.4,2.5-0.6c0.2-0.1,0.3-0.2,0.3-0.4c0-1,0-2,0-2.9c0-0.1,0-0.3-0.2-0.3 c-0.7-0.1-1.5-0.1-2.2,0c-2.3,0.4-3.8,1.8-4.7,3.9c-0.8,1.7-1,3.6-1.1,5.5c0,1.8,0.2,3.6,0.7,5.4c0.5,1.6,1.2,3.1,2.3,4.4 c0.2,0.3,0.4,0.4,0.8,0.4c0.5,0,1.1,0,1.7,0c0.3,0,0.6,0.2,0.5,0.5c0,0.3-0.2,0.5-0.6,0.5c-0.5,0-1,0-1.4,0c-0.3,0-0.3,0.1-0.3,0.3 c0,2.6,0,5.2,0,7.7c0,0.3,0.1,0.3,0.3,0.3c3,0,6,0,9,0c0.3,0,0.3-0.1,0.3-0.3c0-1.3,0-2.6,0-4C21.4,58.9,21.3,58.9,21,58.9z"
                                        />
                                        <path
                                          className="st0"
                                          d="M45.1,24.8c0,2.8,0,5.5,0,8.3c0,0.3,0.1,0.4,0.3,0.6c2.1,1,4.1,2,6.1,3c0.9,0.5,1.9,0.9,2.8,1.4 c0-6.1,0-12.2,0-18.3c-0.2,0-0.3,0.1-0.4,0.1c-2.8,1.4-5.7,2.8-8.5,4.2C45.2,24.3,45.1,24.4,45.1,24.8z"
                                        />
                                        <path
                                          className="st0"
                                          d="M60.5,16.7c-1.6,0.8-3.2,1.6-4.8,2.4c-0.2,0.1-0.2,0.2-0.2,0.4c0,6.2,0,12.5,0,18.7c0,0.3,0.1,0.4,0.3,0.5 c1,0.5,2.1,1,3.1,1.6c0.5,0.3,1.1,0.5,1.7,0.8C60.6,32.9,60.6,24.8,60.5,16.7C60.5,16.7,60.5,16.7,60.5,16.7z"
                                        />
                                        <path
                                          className="st0"
                                          d="M27.6,17.3c5.8,0,11.6,0,17.4,0c0.7,0,0.8,0.2,0.8,0.8c0,1.6,0,3.2,0,4.8c1-0.5,1.9-1,2.9-1.4 c0.2-0.1,0.2-0.2,0.2-0.4c0-1.7,0-3.5,0-5.2c0-0.9-0.7-1.6-1.6-1.6c-1.2,0-2.4,0-3.6,0c-5.4,0-10.7,0-16.1,0 c-0.4,0-0.5,0.1-0.5,0.5c0,0.7,0,1.4,0,2.1C27.1,17.2,27.1,17.3,27.6,17.3z"
                                        />
                                        <path
                                          className="st0"
                                          d="M46.5,35.2c-0.5-0.2-1-0.5-1.5-0.8c-0.2-0.1-0.4-0.2-0.7-0.2c-1.1,0-2.3,0-3.4,0c-0.3,0-0.4,0-0.3,0.4 c0.3,1,0.5,2,0.8,3c0.6,2.3,1.2,4.5,1.8,6.8c0.3,1,1.2,1.5,2.2,1.4c0.9-0.1,1.5-0.9,1.5-1.9c0-1.3,0-2.6,0-4c0-1.4,0-2.8,0-4.1 C46.8,35.4,46.7,35.3,46.5,35.2z"
                                        />
                                        <path
                                          className="st0"
                                          d="M40.8,24.6c-1.1,0-2.2,0-3.3,0c-1.5,0-2.8,1.2-3,2.6c-0.1,1-0.1,2-0.1,3c0.1,1.8,1.5,3,3.2,3c1,0,2,0,3,0 c0.3,0,0.4,0,0.4-0.4c0-1.3,0-2.6,0-3.9c0-1.3,0-2.7,0-4C41.1,24.6,41,24.6,40.8,24.6z"
                                        />
                                        <path
                                          className="st0"
                                          d="M47.7,53.3c1.8,1.4,3.6,2.8,5.4,4.2c0.2,0.1,0.2,0.1,0.4,0c1.8-1.4,3.6-2.8,5.4-4.2c0.1-0.1,0.1-0.1,0.2-0.2 c0-0.1-0.1-0.2-0.2-0.2c-1.8-1.4-3.5-2.8-5.3-4.1c-0.2-0.2-0.4-0.2-0.6,0c-1.7,1.4-3.5,2.8-5.3,4.1C47.3,53.1,47.5,53.2,47.7,53.3z "
                                        />
                                        <path
                                          className="st0"
                                          d="M17.3,37.7c0.9-0.3,1.8-0.5,2.6-0.8c0.3-0.1,0.4-0.3,0.4-0.6c0-4.8,0-9.7,0-14.5c0-0.1,0-0.2,0-0.2 c0-0.2,0-0.2-0.2-0.3c-0.9,0-1.8-0.1-2.4,0.7c0,0,0,0-0.1,0.1c-0.3,0.1-0.3,0.4-0.3,0.7c0,2.6,0,5.2,0,7.7 C17.3,32.9,17.3,35.3,17.3,37.7z"
                                        />
                                        <path
                                          className="st0"
                                          d="M47.1,54.2c0,2.8,0,5.5,0,8.3c1.8-1.4,3.6-2.8,5.3-4.2C50.6,56.9,48.9,55.6,47.1,54.2z"
                                        />
                                        <path
                                          className="st0"
                                          d="M59.4,62.4c0-2.8,0-5.5,0-8.2c-1.8,1.4-3.5,2.7-5.3,4.1C55.9,59.7,57.6,61,59.4,62.4z"
                                        />
                                        <path
                                          className="st0"
                                          d="M53.6,59.2c-0.3-0.2-0.5-0.1-0.7,0C52,60,51,60.7,50.1,61.5c-0.6,0.5-1.3,1-2,1.6c3.5,0,6.9,0,10.3,0 c0,0,0-0.1,0-0.1C56.8,61.7,55.2,60.4,53.6,59.2z"
                                        />
                                        <path
                                          className="st0"
                                          d="M42.4,33.2c0.5,0,0.9,0,1.4,0c0.2,0,0.3,0,0.3-0.3c0-2.7,0-5.4,0-8.1c0-0.2-0.1-0.3-0.3-0.3 c-0.5,0-0.9,0-1.4,0c-0.3,0-0.4,0.1-0.4,0.4c0,1.3,0,2.6,0,4c0,1.3,0,2.7,0,4C42.1,33.1,42.2,33.2,42.4,33.2z"
                                        />
                                        <path
                                          className="st0"
                                          d="M48,39.2c1,0.2,2.4-0.6,2.7-1.6c0.1-0.2,0-0.2-0.1-0.3c-0.9-0.4-1.8-0.9-2.8-1.4c0,1.1,0,2,0,3 C47.8,39,47.8,39.1,48,39.2z"
                                        />
                                        <path
                                          className="st0"
                                          d="M12.6,19.9c0,0.4,0.1,0.5,0.4,0.4c0.4,0,0.8,0,1.2,0c0.6,0,0.7,0.2,0.7,0.7c0,0.5,0,1.1,0,1.7 c0.9-0.6,1.7-1.2,2.5-1.8c0.5-0.4,1-0.6,1.7-0.6c2.1,0,4.3,0,6.4,0c0.4,0,0.4-0.1,0.4-0.4c0-3.7,0-7.3,0-11c-4.5,0-9,0-13.4,0 c0,1.7,0,3.3,0,5C12.7,15.9,12.7,17.9,12.6,19.9z M14.3,10.5c0-0.5,0.2-0.7,0.7-0.7c2.9,0,5.9,0,8.8,0c0.6,0,0.7,0.2,0.7,0.7 c0,2.4,0,4.8,0,7.2c0,0.6-0.2,0.8-0.8,0.8c-1.4,0-2.9,0-4.3,0c-1.5,0-2.9,0-4.4,0c-0.6,0-0.7-0.1-0.7-0.7 C14.3,15.4,14.3,13,14.3,10.5z"
                                        />
                                        <path
                                          className="st0"
                                          d="M21.8,21.3c-0.4,0-0.4,0.1-0.4,0.5c0,4.5,0,9,0,13.6c0,0.4,0,0.7,0,1.1c0.6-0.2,1-0.4,1.5-0.5 c1.6-0.6,2-0.5,2.7,1.1c0.3,0.7,0.4,1.3,0.2,2c-0.2,0.9-0.9,1.5-1.7,1.9c-0.8,0.4-1.6,0.8-2.4,1.1c-0.3,0.1-0.4,0.3-0.4,0.6 c0,3,0,6,0,9c0,0.4,0.1,0.5,0.5,0.5c7.4,0,14.8,0,22.3,0c0.1,0,0.2,0,0.3,0c0.2,0,0.3-0.1,0.3-0.3c0-1.7,0-3.3,0-5 c0-0.2,0-0.3-0.2-0.3c-1.3-0.2-2.2-1-2.5-2.3c-0.8-3.3-1.7-6.5-2.5-9.8c-0.1-0.4-0.3-0.5-0.6-0.5c-0.4,0-0.9,0-1.3,0 c-1.6,0-3.3-1.1-3.8-2.6c-0.6-1.6-0.5-3.2-0.2-4.7c0.4-2,2.1-3.3,4.2-3.3c2.2,0,4.4,0,6.5,0c0.4,0,0.6-0.1,0.6-0.6 c0-1.4,0-2.9,0-4.3c0-0.4-0.1-0.4-0.4-0.4c-1.7,0-3.4,0-5.1,0c-3.9,0-7.9,0-11.8,0c-0.3,0-0.4,0.1-0.4,0.4c0,0.5,0,1,0,1.5 c0,0.7-0.4,1.1-1.1,1.1C24.6,21.3,23.2,21.4,21.8,21.3z M27.8,42.3c1.2,0,2.4,0,3.6,0c0.3,0,0.6,0.1,0.6,0.5c0,0.4-0.3,0.5-0.6,0.5 c-0.6,0-1.2,0-1.8,0c-0.6,0-1.2,0-1.7,0c-0.4,0-0.7-0.1-0.7-0.5C27.1,42.4,27.4,42.3,27.8,42.3z M27.6,45.8c0.7,0,1.3,0,2,0 c0.3,0,0.5,0.2,0.5,0.5c0,0.3-0.2,0.4-0.5,0.4c-0.3,0-0.6,0-1,0c-0.3,0-0.6,0-1,0c-0.3,0-0.5-0.2-0.5-0.5 C27.1,46,27.3,45.8,27.6,45.8z"
                                        />
                                        <path
                                          className="st0"
                                          d="M48.8,50.4c0-3.3,0-6.6,0-9.9c0-0.2,0-0.5-0.3-0.4c-0.3,0.1-0.7-0.3-0.7,0.4c0,1.1,0,2.2,0,3.3 c0,1.2-0.6,2.1-1.7,2.6c-0.3,0.1-0.3,0.3-0.3,0.5c0,1.8,0,3.6,0,5.4c0,0.8-0.1,0.9-0.9,0.9c-7.8,0-15.5,0-23.3,0 c-1.3,0-1.3,0-1.3-1.2c0-3.1,0-6.1,0-9.2c-0.6,0.3-1.2,0.6-1.7,0.8c-0.2,0.1-0.3,0.2-0.2,0.4c0.3,1,0.5,2.1,0.4,3.2 c-0.1,1.2-0.4,2.3-1.3,3.2c-0.2,0.2-0.2,0.3-0.2,0.6c0,1.7,0,3.5,0,5.2c0,0.9,0.6,1.5,1.6,1.5c8.9,0,17.9,0,26.8,0 c0.3,0,0.4-0.1,0.4-0.4c0-1.3,0-2.7,0-4c0-0.4,0.1-0.7,0.4-0.9c0.7-0.5,1.4-1.1,2.1-1.6C48.8,50.8,48.8,50.6,48.8,50.4z M33.8,56.1 c-0.2,0-0.4,0-0.6,0c-0.3-0.1-0.5-0.2-0.5-0.6c0-0.3,0.2-0.5,0.6-0.5c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.2,0c0.4,0,0.7,0.1,0.7,0.5 C34.5,56,34.2,56.1,33.8,56.1z"
                                        />
                                        <path
                                          className="st0"
                                          d="M15.7,17.5c1.2,0,2.5,0,3.7,0c1.3,0,2.5,0,3.8,0c0.3,0,0.4,0,0.4-0.3c0-2,0-4,0-6c0-0.3-0.1-0.3-0.3-0.3 c-2.5,0-5,0-7.5,0c-0.3,0-0.3,0.1-0.3,0.3c0,2,0,4,0,6C15.3,17.5,15.4,17.5,15.7,17.5z M18,12.3c0-0.4,0.2-0.6,0.5-0.7 c0.1,0,0.3,0,0.4,0.1c0.9,0.6,1.9,1.2,2.9,1.8c0.5,0.3,0.5,0.7,0,1c-0.9,0.6-1.9,1.2-2.8,1.7c-0.5,0.3-0.9,0.1-0.9-0.5 C18,14.6,18,13.5,18,12.3z"
                                        />
                                        <path
                                          className="st0"
                                          d="M19,13c0,0.7,0,1.3,0,2c0.5-0.4,1.1-0.6,1.5-1C20,13.7,19.6,13.4,19,13z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Social Media Marketing</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/search-engine-optimization">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M28.2,10.8c2.9,0.7,5.7,1.9,8.3,3.3c0.3,0.2,0.6,0.2,0.9,0c1-0.6,2-1.1,3.1-1.5c0.2-0.1,0.4-0.1,0.6-0.4 c-0.3,0-0.6,0-0.8,0c-2.3,0-4.7,0-7,0c-0.7,0-1-0.3-1-0.9c0-0.6,0.4-0.9,1-0.9c2.7,0,5.5,0,8.2,0c0.9,0,1.2,0.3,1.1,1.3 c4.1-1.4,8.2-2.4,12.5-1.2C54.6,8.9,53.5,8,52,7.5c-1.1,0-2.3,0-3.4,0c-1.5,0-3,0-4.4,0c0,0,0,0,0,0c0,0,0,0,0,0 c-1.4,0-2.8,0-4.2,0c-1.3,0-2.5,0-3.8,0c-1.4,0-2.9,0-4.3,0c-1.6,0-3.2,0-4.8,0c-1.3,0-2.6,0-3.9,0c-1,0-1.9,0.4-2.6,1.1 c-0.5,0.5-0.8,1.1-0.9,1.8C22.5,10,25.4,10.2,28.2,10.8z"
                                        />
                                        <path
                                          className="st0"
                                          d="M57.7,39.2c-0.1-0.2-0.2-0.4,0-0.7c1.3-1.4,1.3-3.8,0-5.2c-0.2-0.2-0.2-0.3-0.1-0.6c0.3-0.7,0.6-1.3,0.9-2 c1.3-3.3,2.3-6.7,1.8-10.3c-0.4-3.7-2.7-6.5-6.3-7.5c-2.5-0.7-5-0.5-7.5,0.1c-3.2,0.7-6.3,2-9.1,3.7c-0.4,0.2-0.6,0.2-1,0 c-1-0.6-2.1-1.2-3.2-1.7c-3.3-1.5-6.8-2.6-10.5-2.5c-2.6,0.1-4.9,0.9-6.8,2.8c-0.2,0.2-0.5,0.3-0.8,0.3c-1.7,0.1-3.1,1.2-3.5,2.9 c-0.4,1.7,0.2,3.4,1.7,4.3c0.3,0.2,0.4,0.3,0.4,0.6c0,1,0.2,2,0.4,3c0.7,3.2,2,6.1,3.6,8.9c0.3,0.6,0.4,0.9,0,1.5 c-1.3,2.2-2.3,4.5-3.1,6.9c-0.9,2.8-1.4,5.7-0.8,8.6c0.5,2.7,1.9,4.7,4.3,6c0.5,0.3,1.3,0.2,1.5,0.7c0.2,0.5,0,1.2,0,1.8 c0,1.5,1,2.9,2.4,3.4c0.2,0.1,0.4,0.1,0.6,0.2c1.1,0,2.1,0,3.2,0c1.2,0,2.4,0,3.7,0c1.5,0,3,0,4.4,0c1.8,0,3.6,0,5.3,0 c1.7,0,3.3,0,5,0c1.3,0,2.6,0,3.9,0c0,0,0-0.1,0-0.1c1.1,0,2.3,0,3.4,0c1.8,0,3.2-1.2,3.5-3c0.2-0.8,0.1-1.6,0.1-2.4 c0-0.2,0-0.4,0.3-0.5c1.6-0.6,2.7-1.8,3.6-3.2c1.5-2.6,1.5-5.4,1.1-8.2C59.8,44.2,58.8,41.7,57.7,39.2z M43.7,15.7 c2.1-0.8,4.3-1.4,6.6-1.4c1.3,0,2.6,0.1,3.8,0.5c2.5,0.9,3.8,2.8,4.3,5.3c0.5,2.5,0.1,4.9-0.6,7.3c-0.5,1.6-1.1,3.1-1.8,4.6 c-0.1,0.2-0.2,0.3-0.5,0.3c-0.5-0.1-1.1-0.1-1.6,0.1c-0.3,0.1-0.5,0-0.7-0.2c-4-5.4-8.8-10-14.4-13.7c-0.1,0-0.1-0.1-0.2-0.1 C40.2,17.2,41.9,16.3,43.7,15.7z M16.3,27.9c-0.4-1.4-0.8-2.8-0.9-4.3c0-0.3,0-0.3,0.3-0.4c1.7-0.2,2.8-1.1,3.3-2.7 c0.5-1.6,0-3-1.2-4.1c-0.3-0.2-0.2-0.3,0-0.5c1.5-1.2,3.2-1.6,5-1.7c2.5-0.1,4.8,0.5,7.1,1.3c1.8,0.7,3.6,1.5,5.4,2.5 c-6.5,4.3-11.8,9.6-16.1,16.1C17.9,32.1,17,30.1,16.3,27.9z M42,59.3c-0.2,0.5-0.4,0.9-0.5,1.4c-0.2,0.7-0.7,1-1.4,1.1 c-1.7,0-3.5,0-5.2,0c-0.6,0-1.1-0.4-1.4-1c-0.2-0.5-0.5-1.1-0.7-1.6c-0.4-1,0.3-2.1,1.4-2.1c1.1,0,2.1,0,3.2,0c1,0,2,0,3,0 C41.7,57,42.4,58.1,42,59.3z M56.3,55.8c-0.2,0.2-0.5,0.4-0.8,0.6c-0.1,0.1-0.2,0.2-0.4,0.2c0-0.5,0-1,0-1.5c0-0.4-0.1-0.6-0.6-0.6 c-2.5,0-5,0-7.5,0c-8.8,0-17.6,0-26.4,0c-0.9,0-0.9,0-0.9,0.9c0,0.4,0,0.9,0,1.3c0,0,0,0.1,0,0.2c-1.3-0.5-2.5-1.3-3.2-2.5 c-1.1-1.9-1.3-3.9-1.1-6c0.4-3.9,1.8-7.4,3.7-10.7c4.3-7.5,10.2-13.6,17.5-18.4c0.3-0.2,0.5-0.2,0.9,0c5.7,3.6,10.4,8.3,14.4,13.7 c0.2,0.3,0.1,0.4-0.1,0.6c-1,1.4-1.1,2.8-0.3,4.3c0.7,1.4,2,1.9,3.5,1.9c0.9,0,0.9,0,1.4,0.9c1.2,2.5,2.1,5.2,2.4,8 C58.8,51.3,58.4,53.8,56.3,55.8z"
                                        />
                                        <path
                                          className="st0"
                                          d="M47.3,21.9c2.5,2.3,4.8,4.8,6.9,7.6c0.1,0.2,0.3,0.4,0.6,0.3c0.3-0.1,0.2-0.4,0.2-0.6c0-3.5,0-7.1,0-10.6 c0-0.2,0.1-0.3-0.1-0.5c-0.6-0.6-1.2-1.1-2.1-1.1c-1.4,0-2.7,0-4.1,0c-2-0.1-3.7,0.9-5.7,1.4c0.2,0.1,0.3,0.2,0.3,0.2 C44.8,19.6,46.1,20.7,47.3,21.9z"
                                        />
                                        <path
                                          className="st0"
                                          d="M19.7,29.4c3.2-4.1,6.9-7.7,10.9-10.8c-3-1.8-6.4-1.5-9.7-1.5c0.8,2.9,0.5,4.4-1.3,6.7 c-0.1,0.2-0.2,0.4-0.1,0.6c0,1.6,0.1,3.1,0.1,4.7C19.6,29.2,19.5,29.3,19.7,29.4z"
                                        />
                                        <path
                                          className="st0"
                                          d="M34.7,59.5c0.1,0.5,0.4,0.7,0.9,0.6c1,0,2.1,0,3.1,0c1.1,0,1.1,0,1.5-1c0,0,0-0.1,0-0.2c-1.9,0-3.8,0-5.7,0 C34.5,59.1,34.7,59.3,34.7,59.5z"
                                        />
                                        <path
                                          className="st0"
                                          d="M55,43.1c0-1,0-1-1-1.1c-0.1,0-0.2,0-0.3,0c-3.9-0.8-6-4.5-4.7-8.2c0.1-0.3,0.1-0.5-0.1-0.8 c-3.3-4.1-7.1-7.7-11.5-10.7c-0.3-0.2-0.5-0.2-0.8,0c-3.2,2.3-6.2,4.8-8.8,7.7c-3.2,3.4-6,7.1-8,11.4c-0.1,0.3-0.2,0.5-0.2,0.8 c0,3.4,0,6.7,0,10.1c0,0.5,0.1,0.6,0.6,0.6c5.7,0,11.4,0,17.1,0c0,0,0,0,0,0c5.7,0,11.5,0,17.2,0c0.5,0,0.5-0.1,0.5-0.6 C55,49.2,55,46.2,55,43.1z M30,50.8c-0.9,0-1.8,0-2.7,0c-1.1,0-1.8-0.8-1.8-1.9c0-2.1,0-4.3,0-6.4c0-2.1,0-4.1,0-6.2 c0-1.3,0.7-2,2-2c0.8,0,1.7,0,2.5,0c1.1,0,1.9,0.8,1.9,1.9c0,4.2,0,8.5,0,12.7C31.8,50.1,31,50.8,30,50.8z M39.8,49 c0,1-0.7,1.8-1.8,1.8c-0.9,0-1.8,0-2.8,0c-1.1,0-1.8-0.7-1.8-1.9c0-1.7,0-3.4,0-5c0,0,0,0,0,0c0-1.6,0-3.3,0-4.9c0-1.3,0.7-2,2-2 c0.9,0,1.7,0,2.6,0c1.1,0,1.8,0.8,1.8,1.9C39.8,42.3,39.8,45.6,39.8,49z M46.2,50.8c-0.9,0-1.8,0-2.7,0c-1.1,0-1.8-0.8-1.8-1.9 c0-2.5,0-5.1,0-7.6c0,0,0,0,0,0c0-2.5,0-4.9,0-7.4c0-1.4,0.7-2.1,2.1-2.1c0.8,0,1.7,0,2.5,0c1,0,1.8,0.8,1.8,1.8 c0,5.1,0,10.2,0,15.2C48,50.1,47.3,50.8,46.2,50.8z"
                                        />
                                        <path
                                          className="st0"
                                          d="M46.2,41.4C46.2,41.4,46.2,41.4,46.2,41.4c0-2.4,0-4.8,0-7.1c0-0.5-0.1-0.6-0.6-0.5c-0.6,0-1.2,0-1.8,0 c-0.4,0-0.5,0.1-0.5,0.5c0,1.3,0,2.6,0,3.9c0,3.5,0,7,0,10.5c0,0.4,0.1,0.5,0.5,0.5c0.6,0,1.2,0,1.8,0c0.4,0,0.6-0.1,0.6-0.6 C46.2,46.1,46.2,43.8,46.2,41.4z"
                                        />
                                        <path
                                          className="st0"
                                          d="M29.6,36.2c-0.7,0-1.3,0-2,0c-0.4,0-0.5,0.1-0.5,0.5c0,2,0,4,0,6c0,0,0,0,0,0c0,2,0,4,0,6c0,0.3,0,0.4,0.4,0.4 c0.7,0,1.4,0,2.1,0c0.3,0,0.4-0.1,0.4-0.4c0-4.1,0-8.1,0-12.2C30,36.2,29.9,36.1,29.6,36.2z"
                                        />
                                        <path
                                          className="st0"
                                          d="M37.7,38.7c-0.7,0-1.4,0-2.1,0c-0.3,0-0.4,0.1-0.4,0.4c0,3.2,0,6.4,0,9.7c0,0.3,0.1,0.4,0.4,0.4 c0.7,0,1.3,0,2,0c0.4,0,0.4-0.1,0.4-0.4c0-1.6,0-3.2,0-4.8c0,0,0,0,0,0c0-1.6,0-3.2,0-4.8C38.1,38.8,38,38.6,37.7,38.7z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Search Engine Optimization</div>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  )}

                  <li className="nav-item">
                    <Link href="/portfolio">
                      <div className="nav-link">Work</div>
                    </Link>
                  </li>

                  <li className="nav-item dropdown servicesDropdown-li single-dropdown">
                    <Link
                      className="nav-link dropdown-toggle d-inline-block py-2"
                      href="#"
                      id="servicesDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen}
                      onClick={() => toggleDropdown("multiServ")}
                    >
                      Multi Services App
                    </Link>
                    <div
                      id="megamenu-1"
                      className={`dropdown-menu py-0 ${
                        isDropdownOpen === "multiServ" ? "show" : ""
                      }`}
                      aria-labelledby="servicesDropdown"
                    >
                      <div className="megamenu-blocks-3">
                        <div className="menublock">
                          <h4>
                            <Link href="/food-delivery-app">
                              <div className="menu-icon">
                                <Image
                                  src={fooddeleImg}
                                  alt="fooddeleImg"
                                  width="25"
                                  height="25"
                                />
                              </div>
                              Food Delivery App
                            </Link>
                          </h4>

                          <h4>
                            <Link href="/grocery-delivery-app">
                              <div className="menu-icon">
                                <Image
                                  src={grocerydeleImg}
                                  alt="grocerydeleImg"
                                  width="25"
                                  height="25"
                                />
                              </div>
                              Grocery Delivery App
                            </Link>
                          </h4>

                          <h4>
                            <Link href="/online-taxi-cab-booking-app-development">
                              <div className="menu-icon">
                                <Image
                                  src={taxicabImg}
                                  alt="taxicabImg"
                                  width="25"
                                  height="25"
                                />
                              </div>
                              Taxi Cab Booking App
                            </Link>
                          </h4>

                          <h4>
                            <Link href="/online-multi-services-app-development-solutions">
                              <div className="menu-icon">
                                <Image
                                  src={multiserveImg}
                                  alt="multiserveImg"
                                  width="25"
                                  height="25"
                                />
                              </div>
                              Multi Services App
                            </Link>
                          </h4>

                          <h4>
                            <Link href="/ott-streaming-platform-app-development-solutions">
                              <div className="menu-icon">
                                <Image
                                  src={ottplateformImg}
                                  alt="ottplateformImg"
                                  width="25"
                                  height="25"
                                />
                              </div>
                              OTT Platform APP
                            </Link>
                          </h4>

                          <h4>
                            <Link href="/social-media-networking-app-development-solutions">
                              <div className="menu-icon">
                                <Image
                                  src={socialmediaappImg}
                                  alt="socialmediaappImg"
                                  width="25"
                                  height="25"
                                />
                              </div>
                              Social Media APP
                            </Link>
                          </h4>

                          <h4>
                            <Link href="/online-freelance-service-app-development">
                              <div className="menu-icon">
                                <Image
                                  src={freelanceservImg}
                                  alt="freelanceservImg"
                                  width="25"
                                  height="25"
                                />
                              </div>
                              Freelance Service App
                            </Link>
                          </h4>
                        </div>
                        <div className="menublock">
                          <h4>
                            <Link href="/on-demand-car-rental-app-development-solutions">
                              <div className="menu-icon">
                                <Image
                                  src={carrentalImg}
                                  alt="carrentalImg"
                                  width="25"
                                  height="25"
                                />
                              </div>
                              Car Rental App
                            </Link>
                          </h4>
                          <h4>
                            <Link href="/online-medicine-delivery-app-development-solutions">
                              <div className="menu-icon">
                                <Image
                                  src={medicinedeleImg}
                                  alt="medicinedeleImg"
                                  width="25"
                                  height="25"
                                />
                              </div>
                              Medicine Delivery App
                            </Link>
                          </h4>
                          <h4>
                            <Link href="/on-demand-liquor-delivery-app-development-solutions">
                              <div className="menu-icon">
                                <Image
                                  src={liquordeleImg}
                                  alt="liquordeleImg"
                                  width="25"
                                  height="25"
                                />
                              </div>
                              Liquor Delivery App
                            </Link>
                          </h4>
                          <h4>
                            <Link href="/online-sports-betting-app-development-services">
                              <div className="menu-icon">
                                <Image
                                  src={sportsbettingImg}
                                  alt="sportsbettingImg"
                                  width="25"
                                  height="25"
                                />
                              </div>
                              Sports Betting App
                            </Link>
                          </h4>
                          <h4>
                            <Link href="/daily-deals-and-online-coupon-app-development">
                              <div className="menu-icon">
                                <Image
                                  src={onlineCouponImg}
                                  alt="onlineCouponImg"
                                  width="25"
                                  height="25"
                                />
                              </div>
                              Online Coupon App
                            </Link>
                          </h4>
                          <h4>
                            <Link href="/on-demand-e-learning-app-development-solutions">
                              <div className="menu-icon">
                                <Image
                                  src={eLearningImg}
                                  alt="eLearningImg"
                                  width="25"
                                  height="25"
                                />
                              </div>
                              eLearning App
                            </Link>
                          </h4>
                          <h4>
                            <Link href="/logistics-transportation-app-development-solutions">
                              <div className="menu-icon">
                                <Image
                                  src={logisticsImg}
                                  alt="logisticsImg"
                                  width="25"
                                  height="25"
                                />
                              </div>
                              Logistics & Transportation App
                            </Link>
                          </h4>{" "}
                        </div>
                        <div className="menublock">
                          <h4>
                            <Link href="/on-demand-courier-delivery-app-development-solutions">
                              <div className="menu-icon">
                                <Image
                                  src={courierdeleImg}
                                  alt="courierdeleImg"
                                  width="25"
                                  height="25"
                                />
                              </div>
                              Courier Delivery App
                            </Link>
                          </h4>

                          <h4>
                            <Link href="/online-real-estate-mobile-app-development-solutions">
                              <div className="menu-icon">
                                <Image
                                  src={ondemandImg}
                                  alt="ondemandImg"
                                  width="25"
                                  height="25"
                                />
                              </div>
                              On-Demand Real Estate App
                            </Link>
                          </h4>

                          <h4>
                            <Link href="/e-wallet-app-development-services">
                              <div className="menu-icon">
                                <Image
                                  src={ewalletImg}
                                  alt="ewalletImg"
                                  width="25"
                                  height="25"
                                />
                              </div>
                              E-Wallet APP
                            </Link>
                          </h4>

                          <h4>
                            <Link href="/online-dating-app-development">
                              <div className="menu-icon">
                                <Image
                                  src={onlinedateImg}
                                  alt="onlinedateImg"
                                  width="25"
                                  height="25"
                                />
                              </div>
                              Online Dating App
                            </Link>
                          </h4>

                          <h4>
                            <Link href="/handyman-app-development-services">
                              <div className="menu-icon">
                                <Image
                                  src={handymanservImg}
                                  alt="handymanservImg"
                                  width="25"
                                  height="25"
                                />
                              </div>
                              Handyman Services App
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown servicesDropdown-li single-dropdown">
                    <Link
                      className="nav-link dropdown-toggle d-inline-block py-2"
                      href="#"
                      id="servicesDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen}
                      onClick={() => toggleDropdown("Process")}
                    >
                      Process
                    </Link>
                    <div
                      id="megamenu-1"
                      className={`dropdown-menu dropdown-menu-Services py-0 ${
                        isDropdownOpen === "Process" ? "show" : ""
                      }`}
                      aria-labelledby="servicesDropdown"
                    >
                      <div className="megamenu-blocks-1">
                        <div className="menublock">
                          <h4>
                            <Link href="/process-fixedcost">
                              <div className="menu-icon">
                                <svg
                                  className="main-service"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 72 72"
                                  style={{ enableBackground: "new 0 0 72 72" }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    <path
                                      className="st1"
                                      d="M50.6,40.4c1.1-0.2,2.3-0.1,3.4-0.1c2,0,3.7,0.7,5.1,2.1c0.2,0.2,0.4,0.4,0.7,0.6c4.4-10.3,1.5-23.7-9.3-31.1 c-10.3-7.1-24.3-5.6-33,3.4c-8.8,9.1-9.7,23.3-2.1,33.4c7.5,10,19.6,11.7,26.9,9.4c0-0.3,0-0.5,0-0.8c0-1.8,0-3.6,0-5.4 c0-1.3,0.5-2.3,1.7-2.8c0.1,0,0.1-0.1,0.2-0.2c0-0.3,0-0.6,0-0.9C44.4,44.1,46.9,41.1,50.6,40.4z M43.5,38.5 c-0.3,2.8-2.3,4.9-5.2,5.7c-0.3,0.1-0.6,0.1-1,0.3c0,1.2,0,2.4,0,3.6c-1,0-1.9,0-2.9,0c-0.2-1.1,0-2.3-0.1-3.5 c-2-0.2-4-0.5-5.8-1.6c0.3-1.2,0.6-2.3,1-3.4c0.4,0,0.6,0.2,0.9,0.3c1.7,0.8,3.5,1.2,5.4,1.1c0.7,0,1.3-0.2,1.9-0.5 c1.8-1,2-3.1,0.5-4.5c-0.7-0.6-1.6-1-2.4-1.4c-1.4-0.6-2.8-1.1-4.1-1.9c-4-2.5-3.5-8.2,0.4-10.2c0.4-0.2,0.9-0.4,1.3-0.6 c0.4-0.1,0.9-0.3,1.4-0.4c0-1.1,0-2.3,0-3.5c1,0,2,0,3,0c0,1.1,0,2.2,0,3.3c1.8,0.2,3.5,0.4,5.1,1.3c-0.3,1.1-0.6,2.2-1,3.3 c-0.4,0-0.6-0.2-0.9-0.3c-1.7-0.7-3.4-1-5.2-0.8c-0.5,0.1-1,0.3-1.4,0.5c-1.1,0.8-1.3,2.4-0.4,3.4c0.4,0.5,1,0.8,1.6,1.1 c0.9,0.4,1.9,0.8,2.8,1.2c1.3,0.5,2.6,1.2,3.6,2.2C43.3,34.9,43.8,36.6,43.5,38.5z"
                                    />
                                    <path
                                      className="st1"
                                      d="M59.9,51.5c-0.3,0-0.7,0.1-1-0.1c-0.1-0.3-0.1-0.6-0.1-0.9c0-0.9,0-1.8,0-2.6c-0.1-2.5-1.9-4.6-4.4-4.9 c-0.8-0.1-1.6-0.1-2.5,0c-2.9,0.1-4.9,2.2-5,5c0,0.8,0,1.7,0,2.5c0,0.3,0.1,0.6-0.1,0.8c-0.3,0.1-0.6,0-0.9,0.1 c-0.7,0-0.9,0.2-0.9,0.9c0,1.9,0,3.9,0,5.8c0.1,2.9,2.2,5.4,5.1,5.9c1.9,0.3,3.8,0.3,5.7,0c2.6-0.5,4.7-2.9,4.9-5.5 c0.1-2.1,0.1-4.2,0-6.4C60.8,51.7,60.5,51.5,59.9,51.5z M54,57c-0.3,0.3-0.4,0.5-0.4,0.9c0,0.5,0,1.1,0,1.7c-0.5,0.1-0.9,0.1-1.4,0 c-0.2-0.5-0.1-1-0.1-1.4c0-0.5-0.1-0.8-0.4-1.2c-0.5-0.5-0.5-1.2-0.2-1.8c0.3-0.6,0.8-0.8,1.5-0.8c0.7,0.1,1.2,0.5,1.4,1.2 C54.6,56.1,54.4,56.7,54,57z M56.8,51.3c-0.7,0.2-6.8,0.2-7.7,0c-0.1-0.6,0-1.3-0.1-1.9c0-0.5,0-1,0-1.5c0.1-1.6,1.2-2.8,2.8-2.8 c0.7,0,1.5,0,2.2,0c1.4,0.1,2.7,1.2,2.8,2.7C56.9,48.9,56.8,50.1,56.8,51.3z"
                                    />
                                  </g>
                                </svg>
                              </div>
                              Fixed Cost Project
                            </Link>
                          </h4>
                        </div>
                        <div className="menublock">
                          <h4>
                            <Link href="/talent-on-demand">
                              <div className="menu-icon">
                                <svg
                                  className="main-service"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 72 72"
                                  style={{ enableBackground: "new 0 0 72 72" }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    <path
                                      className="st1"
                                      d="M43.8,59.3c0,2.7,2.2,4.9,4.9,4.9c2.7,0,4.9-2.2,4.9-4.9v-1h-9.8V59.3z"
                                    />
                                    <path
                                      className="st1"
                                      d="M31.2,31c0.2-2.3,0.9-4.4,1.9-6.4v-7.3h3.3c0.3,0,0.6-0.2,0.6-0.6c0-0.1,0-0.2-0.1-0.3L31.8,8 c-0.3-0.4-1-0.4-1.3,0l-5.1,8.6c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.3,0.2,0.6,0.6,0.6h3.3V31H31.2z"
                                    />
                                    <path
                                      className="st1"
                                      d="M54.5,54.4H42.8c-0.5,0-1,0.4-1,1s0.4,1,1,1h11.7c0.5,0,1-0.4,1-1S55.1,54.4,54.5,54.4z"
                                    />
                                    <path
                                      className="st1"
                                      d="M31.1,42.2v18.1H35V43.4c-0.8-1-1.5-2-2-3.1L31.1,42.2z"
                                    />
                                    <path
                                      className="st1"
                                      d="M41.8,58.2c-1.1-0.4-2-1.5-2-2.7c0-0.5,0.1-1,0.4-1.4c-0.8-0.5-1.4-1.4-1.4-2.5c0-0.9,0.4-1.6,1-2.1 c-0.1-0.9-0.4-1.7-1.1-2.3L37,45.5v14.8h5c0-0.3-0.1-0.6-0.1-1V58.2z"
                                    />
                                    <path
                                      className="st1"
                                      d="M55.5,50.5H41.8c-0.5,0-1,0.4-1,1s0.4,1,1,1h1h11.7h1c0.5,0,1-0.4,1-1S56,50.5,55.5,50.5z"
                                    />
                                    <path
                                      className="st1"
                                      d="M25.3,60.3h3.9V44.1L25.3,48V60.3z"
                                    />
                                    <path
                                      className="st1"
                                      d="M49.1,17.4h-0.9c-8.4,0-15.2,6.8-15.2,15.2c0,4.3,1.9,8.5,5.1,11.3l1.9,1.7c0.9,0.8,1.5,1.9,1.7,3 c0,0,0.1,0,0.1,0h13.7c0,0,0.1,0,0.1,0c0.2-1.2,0.8-2.2,1.7-3l1.9-1.7c3.2-2.9,5.1-7,5.1-11.3C64.3,24.2,57.5,17.4,49.1,17.4z M37,32.1L35,32c0-0.7,0.1-1.4,0.3-2.1l1.9,0.4C37.1,30.9,37,31.5,37,32.1L37,32.1z M37.7,28.5l-1.8-0.7c2-5,6.9-8.4,12.3-8.4h0.4 v2h-0.4C43.6,21.3,39.4,24.2,37.7,28.5z M48.8,28.1h-0.2c-1,0-1.9,0.8-1.9,1.9c0,0.8,0.5,1.5,1.3,1.8l2,0.7c1.6,0.5,2.6,2,2.6,3.6 c0,1.8-1.3,3.3-2.9,3.7v2.1h-2v-2.1c-1.7-0.4-2.9-1.9-2.9-3.7v-1.1h2V36c0,1,0.8,1.9,1.9,1.9h0.2c1,0,1.9-0.8,1.9-1.9 c0-0.8-0.5-1.5-1.3-1.8l-2-0.7c-1.6-0.5-2.6-2-2.6-3.6c0-1.8,1.3-3.3,2.9-3.7v-2.1h2v2.1c1.7,0.4,2.9,1.9,2.9,3.7l-2,0.1V30 C50.6,29,49.8,28.1,48.8,28.1L48.8,28.1z M57.9,42.5L56,44.1c-0.4,0.3-0.7,0.7-1,1.1l-1.6-1.2c0.4-0.5,0.8-1,1.3-1.4l1.9-1.7 c1.4-1.2,2.4-2.7,3.1-4.4l1.8,0.7C60.7,39.2,59.5,41,57.9,42.5L57.9,42.5z M60.2,34.8c0.1-0.6,0.2-1.2,0.2-1.8l1.9,0.1 c0,0.7-0.1,1.4-0.2,2.1L60.2,34.8z"
                                    />
                                    <path
                                      className="st1"
                                      d="M19.4,50.2v10.1h3.9V50l-1.9,1.9L19.4,50.2z"
                                    />
                                    <path
                                      className="st1"
                                      d="M7.7,60.3h3.9v-9.3l-3.9,3.9V60.3z"
                                    />
                                    <path
                                      className="st1"
                                      d="M13.6,49v11.3h3.9V48.6L15.6,47L13.6,49z"
                                    />
                                    <path
                                      className="st1"
                                      d="M18.1,17.8c-0.3-0.4-1-0.4-1.3,0l-5.1,8.6c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.3,0.2,0.6,0.6,0.6h3.3v13.7h3.9V27.1 h3.3c0.3,0,0.6-0.2,0.6-0.6c0-0.1,0-0.2-0.1-0.3L18.1,17.8z"
                                    />
                                  </g>
                                </svg>
                              </div>
                              Talent On Demand
                            </Link>
                          </h4>
                        </div>
                        <div className="menublock">
                          <h4>
                            <Link href="/product-engineering">
                              <div className="menu-icon">
                                <svg
                                  className="main-service"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  // xmlnssvgjs="http://svgjs.com/svgjs"
                                  version="1.1"
                                  width="512"
                                  height="512"
                                  x="0"
                                  y="0"
                                  viewBox="0 0 511.99925 511"
                                  style={{
                                    enableBackground: "new 0 0 512 512",
                                  }}
                                  xmlSpace="preserve"
                                >
                                  <g>
                                    <path
                                      xmlns="http://www.w3.org/2000/svg"
                                      d="m177.285156 139.253906c-7.398437-3-15.519531-2.9375-22.871094.171875-7.351562 3.113281-13.050781 8.898438-16.050781 16.296875-3 7.394532-2.9375 15.519532.171875 22.867188 6.421875 15.175781 23.992188 22.300781 39.167969 15.878906 7.351563-3.109375 13.050781-8.898438 16.050781-16.292969 2.996094-7.398437 2.9375-15.523437-.175781-22.871093-3.109375-7.351563-8.898437-13.050782-16.292969-16.050782zm0 0"
                                      fill="#ffffff"
                                      data-original="#000000"
                                      style={{}}
                                      className=""
                                    ></path>
                                    <path
                                      xmlns="http://www.w3.org/2000/svg"
                                      d="m257.605469 256.722656 44.222656.628906h.214844c6.074219 0 11.558593-3.683593 13.84375-9.328124l14.558593-35.90625c2.3125-5.710938.886719-12.253907-3.597656-16.484376l-32.179687-30.339843 31.714843-30.828125c4.417969-4.296875 5.746094-10.863282 3.34375-16.535156l-15.09375-35.683594c-2.402343-5.675782-8.058593-9.292969-14.199218-9.113282l-44.210938 1.300782.628906-44.222656c.085938-6.164063-3.617187-11.746094-9.328124-14.0625l-35.902344-14.554688c-5.710938-2.3125-12.257813-.886719-16.488282 3.597656l-30.339843 32.179688-30.828125-31.714844c-4.296875-4.417969-10.863282-5.7460938-16.535156-3.347656l-35.683594 15.097656c-5.671875 2.402344-9.292969 8.039062-9.113282 14.199219l1.300782 44.210937-44.222656-.628906c-6.203126-.085938-11.746094 3.617188-14.058594 9.328125l-14.558594 35.902344c-2.3125 5.710937-.886719 12.257812 3.597656 16.488281l32.179688 30.339844-31.714844 30.828125c-4.417969 4.296875-5.746094 10.863281-3.347656 16.535156l15.097656 35.683594c2.402344 5.671875 8.050781 9.308593 14.199219 9.113281l44.210937-1.300781-.628906 44.222656c-.085938 6.160156 3.617188 11.746094 9.328125 14.058594l35.90625 14.558593c1.820313.734376 3.722656 1.09375 5.609375 1.09375 4.035156 0 7.996094-1.636718 10.875-4.691406l30.34375-32.179687 30.824219 31.714843c4.296875 4.417969 10.863281 5.746094 16.539062 3.34375l35.679688-15.09375c5.675781-2.402343 9.292969-8.042968 9.113281-14.203124zm-36.160157-67.320312c-6 14.796875-17.398437 26.367187-32.101562 32.589844-7.574219 3.203124-15.457031 4.722656-23.207031 4.722656-23.300781 0-45.488281-13.703125-55.125-36.480469-6.21875-14.699219-6.339844-30.945313-.34375-45.742187 5.996093-14.792969 17.398437-26.367188 32.101562-32.585938 14.699219-6.222656 30.945313-6.34375 45.738281-.347656 14.796876 6 26.371094 17.398437 32.589844 32.101562 6.222656 14.703125 6.34375 30.949219.347656 45.742188zm0 0"
                                      fill="#ffffff"
                                      data-original="#000000"
                                      style={{}}
                                      className=""
                                    ></path>
                                    <path
                                      xmlns="http://www.w3.org/2000/svg"
                                      d="m384.5 365.875c-9.652344 0-17.503906 7.851562-17.503906 17.5 0 9.652344 7.851562 17.503906 17.503906 17.503906 9.648438 0 17.5-7.851562 17.5-17.503906 0-9.648438-7.851562-17.5-17.5-17.5zm0 0"
                                      fill="#ffffff"
                                      data-original="#000000"
                                      style={{}}
                                      className=""
                                    ></path>
                                    <path
                                      xmlns="http://www.w3.org/2000/svg"
                                      d="m502.472656 354.832031-25.980468-10.101562 11.226562-25.515625c2.480469-5.640625 1.246094-12.222656-3.113281-16.582032l-19.90625-19.90625c-4.355469-4.355468-10.941407-5.59375-16.582031-3.109374l-25.511719 11.226562-10.105469-25.980469c-2.234375-5.742187-7.765625-9.523437-13.925781-9.523437h-28.15625c-6.164063 0-11.691407 3.78125-13.925781 9.527344l-10.101563 25.976562-25.515625-11.222656c-5.636719-2.484375-12.222656-1.246094-16.578125 3.109375l-19.910156 19.90625c-4.355469 4.359375-5.59375 10.945312-3.109375 16.585937l11.226562 25.511719-25.980468 10.105469c-5.742188 2.234375-9.527344 7.761718-9.527344 13.925781v28.152344c0 6.164062 3.785156 11.695312 9.527344 13.925781l25.980468 10.105469-11.226562 25.511719c-2.480469 5.640624-1.246094 12.226562 3.113281 16.582031l19.90625 19.910156c4.355469 4.355469 10.941406 5.589844 16.582031 3.109375l25.515625-11.226562 10.105469 25.976562c2.230469 5.746094 7.761719 9.527344 13.921875 9.527344h28.15625c6.164063 0 11.691406-3.78125 13.925781-9.527344l10.101563-25.980469 25.515625 11.226563c5.644531 2.484375 12.226562 1.246094 16.582031-3.113282l19.90625-19.90625c4.359375-4.355468 5.59375-10.941406 3.113281-16.582031l-11.230468-25.515625 25.980468-10.105468c5.742188-2.230469 9.527344-7.761719 9.527344-13.921876v-28.15625c0-6.160156-3.78125-11.691406-9.527344-13.925781zm-117.972656 75.929688c-26.128906 0-47.386719-21.257813-47.386719-47.386719 0-26.125 21.257813-47.382812 47.386719-47.382812 26.125 0 47.382812 21.253906 47.382812 47.382812s-21.257812 47.386719-47.382812 47.386719zm0 0"
                                      fill="#ffffff"
                                      data-original="#000000"
                                      style={{}}
                                      className=""
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                              Product Engineering
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </li>
                  {!isSmallScreen ? (
                    <li
                      className="nav-item dropdown servicesDropdown-li hide shreejinandola Company"
                      data-id="third"
                    >
                      {" "}
                      <Link
                        className="nav-link dropdown-toggle d-inline-block py-2"
                        href="#"
                        id="servicesDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Company
                      </Link>
                      <div
                        id="megamenu-1"
                        className="dropdown-menu dropdown-menu-Services_3 py-0"
                        aria-labelledby="servicesDropdown"
                      >
                        <div className="megamenu-blocks-22 p-4">
                          <div className="menublock">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="tab d-block d-inline-">
                                  <div
                                    href="/about"
                                    className={`nav-link active gray ${
                                      hoveredCity === "About" ? "active" : ""
                                    }`}
                                    onMouseOver={() => openCity("About")}
                                  >
                                    About us
                                  </div>

                                  <div
                                    href="/blog"
                                    className={`nav-link mt-3 gray ${
                                      hoveredCity === "Resources"
                                        ? "active"
                                        : ""
                                    }`}
                                    onMouseOver={() => openCity("Resources")}
                                  >
                                    Resources
                                  </div>

                                  <div
                                    className={`nav-link mt-3 gray ${
                                      hoveredCity === "Certifications"
                                        ? "active"
                                        : ""
                                    }`}
                                    onMouseOver={() =>
                                      openCity("Certifications")
                                    }
                                    href="/certifications"
                                  >
                                    Certifications & Alliances
                                  </div>

                                  <div
                                    className={`nav-link mt-3 gray ${
                                      hoveredCity === "Contact" ? "active" : ""
                                    } `}
                                    onMouseOver={() => openCity("Contact")}
                                    href="/contact"
                                  >
                                    {" "}
                                    Contact Us
                                  </div>
                                  <div
                                    className={`nav-link mt-3 gray tablinks ${
                                      hoveredCity === "Life" ? "active" : ""
                                    }`}
                                    onMouseOver={() => openCity("Life")}
                                  >
                                    Life @ X-Byte
                                  </div>

                                  <div
                                    className={`nav-link mt-3 gray tablinks ${
                                      hoveredCity === "Partnership"
                                        ? "active"
                                        : ""
                                    }`}
                                    onMouseOver={() => openCity("Partnership")}
                                  >
                                    Partnership
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-8 third">
                                <div
                                  id="About"
                                  className={`tabcontent w-100 p-0 ${
                                    hoveredCity === "About" ? "active" : ""
                                  }`}
                                >
                                  <div className="row mt-2">
                                    <div className="col-md-12">
                                      <Image
                                        src={aboutusImg}
                                        alt="aboutusImg"
                                        style={{ width: "100%" }}
                                      />
                                    </div>
                                    <div className="col-md-12 mt-4 mb-1">
                                      <h3 className="txt">About Us</h3>
                                      X-Byte Enterprise Solution is the leading
                                      service provider to transform the digital
                                      journey of businesses. We are a combined
                                      team of innovative and experienced people
                                      who strive to deliver the best solutions.
                                    </div>
                                  </div>
                                </div>

                                <div
                                  id="Resources"
                                  className={`three tabcontent w-100 p-0 ${
                                    hoveredCity === "Resources" ? "active" : ""
                                  }`}
                                >
                                  <div className="row mt-2">
                                    <div className="col-md-12">
                                      <Image
                                        src={resouecesImg}
                                        alt="resouecesImg"
                                        style={{ width: "100%" }}
                                      />
                                    </div>
                                    <div className="col-md-12 mt-4">
                                      <h3 className="txt">Resources</h3>
                                      We provide knowledge and expert ideas to
                                      make our audiences stay updated with the
                                      latest technology trends and market
                                      scenarios.
                                    </div>
                                  </div>
                                </div>

                                <div
                                  id="Certifications"
                                  className={`three tabcontent w-100 p-0 ${
                                    hoveredCity === "Certifications"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  <div className="row mt-2">
                                    <div className="col-md-12">
                                      <Image
                                        src={certificationImg}
                                        alt="certificationImg"
                                        style={{ width: "100%" }}
                                      />
                                    </div>
                                    <div className="col-md-12 mt-4">
                                      <h3 className="txt">
                                        Certifications & Alliances
                                      </h3>
                                      X-Byte Enterprise Solution is a certified
                                      service provider across various domains.
                                      We have made alliances with several
                                      leading consulting and service providers
                                      to bring everything under one roof.
                                    </div>
                                  </div>
                                </div>

                                <div
                                  id="Contact"
                                  className={`three tabcontent w-100 p-0 ${
                                    hoveredCity === "Contact" ? "active" : ""
                                  }`}
                                >
                                  <div className="row mt-2">
                                    <div className="col-md-12">
                                      <Image
                                        src={contactImg}
                                        alt="contactImg"
                                        style={{ width: "100%" }}
                                      />
                                    </div>
                                    <div className="col-md-12 mt-4">
                                      <h3 className="txt">Contact US</h3>
                                      We operate through various locations
                                      around the globe to satisfy our clients.
                                      Get in touch with us to discuss your
                                      requirements and project ideas.
                                    </div>
                                  </div>
                                </div>
                                <div
                                  id="Life"
                                  className={`three tabcontent w-100 p-0 ${
                                    hoveredCity === "Life" ? "active" : ""
                                  }`}
                                >
                                  <div className="row mt-2">
                                    <div className="col-md-12">
                                      <Image
                                        src={lifeImg}
                                        alt="lifeImg"
                                        style={{ width: "100%" }}
                                      />
                                    </div>
                                    <div className="col-md-12 mt-4">
                                      <h3 className="txt">Life @ X-Byte</h3>
                                      Our team made us what we are today. We
                                      believe teamwork and team growth as the
                                      core to success in the market. Explore
                                      career opportunities to enjoy work-life
                                      balance and career development.
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <div href="/career">Career</div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  id="Partnership"
                                  className={`three tabcontent w-100 p-0 ${
                                    hoveredCity === "Partnership"
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  <div className="row mt-2">
                                    <div className="col-md-12">
                                      <Image
                                        src={partnershipImg}
                                        alt="partnershipImg"
                                        style={{ width: "100%" }}
                                      />
                                    </div>
                                    <div className="col-md-12 mt-4">
                                      <h3 className="txt">Partnership</h3>
                                      X-Byte Enterprise Solution is the emerging
                                      choice of startups and other companies to
                                      expand their business and increase the
                                      sale conversion ratio.
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <div href="/white-label-partnership-program">
                                        White Label Partnership
                                      </div>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <div href="/referral-program">
                                        {" "}
                                        Refferal Program
                                      </div>
                                    </div>
                                    <div className="col-md-4 mt-3">
                                      <div href="/startup-accelerator-program">
                                        StartUp Accelerator Program
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ) : (
                    <li className="nav-item dropdown servicesDropdown-li show1">
                      {" "}
                      <Link
                        className="nav-link dropdown-toggle d-inline-block py-2"
                        href="#"
                        id="servicesDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded={isDropdownOpen}
                        onClick={() => toggleDropdown("Company")}
                      >
                        {" "}
                        Company
                      </Link>
                      <div
                        id="megamenu-1"
                        className={`dropdown-menu dropdown-menu-Services_2 py-0 ${
                          isDropdownOpen === "Company" ? "show" : ""
                        }`}
                        aria-labelledby="servicesDropdown"
                      >
                        <div className="megamenu-blocks-2">
                          <div className="menublock">
                            <h4>
                              <Link href="/about">
                                <div className="menu-icon">
                                  <svg
                                    className="main-service"
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 72 72"
                                    style={{
                                      enableBackground: "new 0 0 72 72",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <g>
                                      <ellipse
                                        className="st1"
                                        cx="22.7"
                                        cy="35.8"
                                        rx="8.4"
                                        ry="8.3"
                                      />
                                      <path
                                        className="st1"
                                        d="M49.4,7.5c-8.3,0-15,6.7-15,15c0,2.6,0.7,5.1,1.9,7.3l-1.8,5.5c-0.2,0.6-0.1,1.2,0.4,1.7 c0.4,0.5,1.1,0.6,1.6,0.5l6.2-1.5c2.1,1,4.4,1.6,6.7,1.6c8.3,0,15-6.7,15-15S57.7,7.5,49.4,7.5z M51.1,29.2c0,0.9-0.7,1.7-1.7,1.7 c-0.9,0-1.7-0.7-1.7-1.7v-6.7c0-0.9,0.7-1.7,1.7-1.7c0.9,0,1.7,0.7,1.7,1.7V29.2z M49.4,19.2c-0.9,0-1.7-0.7-1.7-1.7 c0-0.9,0.7-1.7,1.7-1.7c0.9,0,1.7,0.7,1.7,1.7C51.1,18.4,50.3,19.2,49.4,19.2z"
                                      />
                                      <path
                                        className="st1"
                                        d="M31.4,43.6c-2.1,2.4-5.3,3.9-8.7,3.9s-6.6-1.5-8.7-3.9c-3.8,2.7-6.4,7.2-6.4,12.2v6.9c0,0.9,0.7,1.7,1.7,1.7 h26.9c0.9,0,1.7-0.7,1.7-1.7v-6.9C37.8,50.8,35.2,46.3,31.4,43.6z"
                                      />
                                    </g>
                                  </svg>
                                </div>
                                About Us
                              </Link>
                            </h4>
                            <h4>
                              <Link href="/blog">
                                <div className="menu-icon">
                                  <svg
                                    className="main-service"
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 72 72"
                                    style={{
                                      enableBackground: "new 0 0 72 72",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <path
                                      className="st1"
                                      d="M64.3,33c-0.3-3.5-1.3-6.7-2.9-9.8c-1.6-3.3-3.9-6.1-6.6-8.6c-3.4-3-7.4-5.1-11.8-6.3c-3.3-0.9-6.6-0.9-10-0.7 c-3.5,0.2-6.9,1.3-10,2.9c-3.5,1.8-6.5,4.2-9,7.2c-3,3.6-5,7.6-6,12.2c-0.3,1.3-0.4,2.6-0.5,3.9c0,1.5,0,3,0,4.4 c0.1,0.6,0.1,1.1,0.1,1.7c0.4,3.2,1.4,6.2,2.8,9c1.8,3.5,4.2,6.5,7.2,9c3.6,3,7.6,4.9,12.2,6c1.3,0.3,2.6,0.4,3.9,0.5 c1.4,0,2.8,0,4.2,0c0.6-0.1,1.3,0,1.9-0.1c3.2-0.4,6.2-1.4,9-2.8c2.9-1.5,5.5-3.5,7.8-5.9c2.4-2.5,4.2-5.4,5.6-8.5 C64.2,42.5,64.7,37.8,64.3,33z M48.4,31.8c-3,5.2-5.9,10.3-8.9,15.5c-3.3-1.9-6.6-3.8-10-5.7c-2.2,3.8-4.4,7.7-6.6,11.5 c-1.8-1.1-3.6-2.1-5.5-3.2c3.3-5.7,6.5-11.3,9.8-17c3.3,1.9,6.6,3.8,10,5.7c1.9-3.3,3.8-6.6,5.8-10c-2-1.2-4-2.3-6.1-3.5 C42,23,47.1,21,52.2,18.9c0.8,5.5,1.5,10.9,2.3,16.4C52.4,34.1,50.4,33,48.4,31.8z"
                                    />
                                  </svg>
                                </div>
                                Resources{" "}
                                <span className="blog-span">Trending Blog</span>
                              </Link>
                            </h4>
                            <h4>
                              <Link href="/certifications">
                                <div className="menu-icon">
                                  <svg
                                    className="main-service"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    // xmlnsSvgjs="http://svgjs.com/svgjs"
                                    version="1.1"
                                    width="512"
                                    height="512"
                                    x="0"
                                    y="0"
                                    viewBox="0 0 297 297"
                                    style={{
                                      enableBackground: "new 0 0 512 512",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <g transform="matrix(0.71,0,0,0.71,43.06499557495107,43.06497842788697)">
                                      <g xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="M200.506,270.09c1.131-0.565,2.36-0.848,3.59-0.848c1.23,0,2.459,0.282,3.59,0.848l11.691,5.846 c2.545,1.272,5.539-0.578,5.539-3.423v-54.757c-6.445,2.576-13.467,4.009-20.82,4.009c-7.354,0-14.375-1.432-20.82-4.009v54.757 c0,2.845,2.994,4.695,5.539,3.423L200.506,270.09z"
                                          fill="#ffffff"
                                          data-original="#000000"
                                          style={{}}
                                          className=""
                                        />
                                        <path
                                          d="M204.096,125.258c-22.181,0-40.226,18.045-40.226,40.226s18.045,40.226,40.226,40.226 c22.181,0,40.226-18.045,40.226-40.226S226.277,125.258,204.096,125.258z"
                                          fill="#ffffff"
                                          data-original="#000000"
                                          style={{}}
                                          className=""
                                        />
                                        <path
                                          d="M286.966,20.655H10.034C4.493,20.655,0,25.148,0,30.689v207.699c0,5.541,4.493,10.034,10.034,10.034h157.188v-40.475 c-11.876-10.326-19.406-25.527-19.406-42.464c0-31.033,25.247-56.28,56.28-56.28s56.28,25.247,56.28,56.28 c0,16.936-7.53,32.137-19.406,42.464v40.475h45.996c5.541,0,10.034-4.493,10.034-10.034V30.689 C297,25.148,292.507,20.655,286.966,20.655z M96.575,194.491H44.65c-4.433,0-8.027-3.594-8.027-8.027s3.594-8.027,8.027-8.027 h51.925c4.433,0-8.027,3.594,8.027,8.027S101.008,194.491,96.575,194.491z M113.883,142.566H44.65 c-4.433,0-8.027-3.594-8.027-8.027c0-4.433,3.594-8.027,8.027-8.027h69.233c4.433,0,8.027,3.594,8.027,8.027 C121.91,138.972,118.316,142.566,113.883,142.566z M165.808,90.641H44.65c-4.433,0-8.027-3.594-8.027-8.027 s3.594-8.027,8.027-8.027h121.158c4.433,0,8.027,3.594,8.027,8.027S170.241,90.641,165.808,90.641z"
                                          fill="#ffffff"
                                          data-original="#000000"
                                          style={{}}
                                          className=""
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                                Certifications & Alliances
                              </Link>
                            </h4>
                            <h4>
                              <Link href="/contact">
                                <div className="menu-icon">
                                  <svg
                                    className="main-service"
                                    style={{
                                      enableBackground: "new 0 0 512 512",
                                    }}
                                    version="1.1"
                                    viewBox="0 0 512 512"
                                    xmlSpace="preserve"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        className=""
                                        d="m467 61h-422c-6.927 0-13.412 1.703-19.279 4.51l229.28 229.28 51.389-49.387s4e-3 -5e-3 5e-3 -7e-3 5e-3 -4e-3 5e-3 -4e-3l179.89-179.88c-5.868-2.809-12.357-4.514-19.286-4.514z"
                                        fill="#fff"
                                        style={{}}
                                        data-original="#000000"
                                      />
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        className=""
                                        d="m507.5 86.728-169.28 169.27 169.28 169.28c2.807-5.867 4.51-12.352 4.51-19.279v-300c0-6.923-1.699-13.407-4.504-19.272z"
                                        fill="#fff"
                                        style={{}}
                                        data-original="#000000"
                                      />
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        className=""
                                        d="M4.51,86.721C1.703,92.588,0,99.073,0,106v300c0,6.923,1.701,13.409,4.506,19.274L173.789,256L4.51,86.721z"
                                        fill="#fff"
                                        style={{}}
                                        data-original="#000000"
                                      />
                                    </g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        className=""
                                        d="m317 277.21-51.396 49.393c-2.93 2.93-6.768 4.395-10.605 4.395s-7.676-1.465-10.605-4.395l-49.396-49.395-169.29 169.28c5.868 2.809 12.357 4.514 19.286 4.514h422c6.927 0 13.412-1.703 19.279-4.51l-169.28-169.28z"
                                        fill="#fff"
                                        style={{}}
                                        data-original="#000000"
                                      />
                                    </g>
                                  </svg>
                                </div>
                                Contact Us
                              </Link>
                            </h4>
                          </div>
                          <div className="menublock">
                            <h4>
                              <Link href="/life-at-xbyte">
                                <div className="menu-icon">
                                  <svg
                                    className="main-service"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    // xmlnssvgjs="http://svgjs.com/svgjs"
                                    version="1.1"
                                    width="512"
                                    height="512"
                                    x="0"
                                    y="0"
                                    viewBox="0 0 512.008 512.008"
                                    style={{
                                      enableBackground: "new 0 0 512 512",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <g>
                                      <g xmlns="http://www.w3.org/2000/svg">
                                        <path
                                          d="m508.726 165.33-127.5-159.689c-2.847-3.565-7.16-5.641-11.722-5.641s-8.875 2.076-11.722 5.641l-127.5 159.689c-3.596 4.503-4.293 10.67-1.794 15.863 2.5 5.193 7.753 8.496 13.517 8.496h44v307.311c0 8.284 6.716 15 15 15h137c8.284 0 15-6.716 15-15v-307.311h44c5.764 0 11.017-3.302 13.517-8.496 2.497-5.193 1.8-11.36-1.796-15.863z"
                                          fill="#ffffff"
                                          data-original="#000000"
                                          style={{}}
                                          className=""
                                        />
                                        <path
                                          d="m107.178 427.153 14.826 19.211 14.826-19.211-14.826-37.895z"
                                          fill="#ffffff"
                                          data-original="#000000"
                                          style={{}}
                                          className=""
                                        />
                                        <path
                                          d="m204.491 332.992c-14.614 17.849-34.895 30.885-58.068 36.339l21.439 54.799c1.919 4.906 1.125 10.458-2.094 14.629l-31.888 41.321c-2.84 3.68-7.226 5.836-11.875 5.836s-9.035-2.156-11.875-5.836l-31.888-41.321c-3.218-4.17-4.013-9.723-2.094-14.629l21.439-54.799c-23.173-5.454-43.454-18.49-58.068-36.339-22.933 7.697-39.514 29.437-39.514 55.004v109.012c0 3.979 1.581 7.793 4.394 10.606s6.628 4.394 10.607 4.394l214-.005c8.284 0 15-6.716 15-15v-109.007c-.002-25.567-16.583-47.307-39.515-55.004z"
                                          fill="#ffffff"
                                          data-original="#000000"
                                          style={{}}
                                          className=""
                                        />
                                        <ellipse
                                          cx="122.004"
                                          cy="265.579"
                                          rx="76.579"
                                          ry="76.579"
                                          transform="matrix(.973 -.23 .23 .973 -57.754 35.135)"
                                          fill="#ffffff"
                                          data-original="#000000"
                                          style={{}}
                                          className=""
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                                Life @ X-Byte
                              </Link>
                            </h4>
                            <ul>
                              <li>
                                <Link href="/career">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 500 500"
                                      style={{
                                        enableBackground: "new 0 0 500 500",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M249.57,318.67l12.92-6v-53.11h-25.84v53.11L249.57,318.67z"
                                        />
                                        <path
                                          className="st0"
                                          d="M283.56,293.65v32.46l-33.99,15.8l-33.99-15.8v-32.45l-145.8-55.49V409h359.58V238.16L283.56,293.65z"
                                        />
                                        <path
                                          className="st0"
                                          d="M215.58,271.11v-32.62h67.98v32.62l145.8-55.49v-76.3H313V91H186.14v48.31H69.78v76.3L215.58,271.11z M207.21,112.07h84.72
                                        v27.24h-84.72V112.07z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Career</div>
                                </Link>
                              </li>
                            </ul>
                            <h4 className="mt-3">
                              <Link href="/">
                                <div className="menu-icon">
                                  <svg
                                    className="main-service"
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 72 72"
                                    style={{
                                      enableBackground: "new 0 0 72 72",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <g>
                                      <path
                                        className="st1"
                                        d="M55.7,20.8c-0.2,0.1-0.4,0.2-0.6,0.3c-4.7,0.7-8.2-0.4-10.9-1.3c-1.7-0.6-3.1-1-4.6-1c-2.5,0-4.4,1.3-6.3,2.5 c-0.4,0.3-0.9,0.6-1.3,0.8l-6.2,6.2c-0.8,0.8-1.1,2.1-0.5,3.2c0.5,0.9,1.4,1.5,2.5,1.5h0.9c0.6,0,1.2-0.2,1.7-0.6 c0.5-0.4,1-0.8,1.5-1.3c3-2.5,5.5-4.5,7.1-5.1c0.1-0.1,0.3-0.1,0.4-0.1c0.3,0,0.6,0.1,0.8,0.3l17.1,14.8l7-2.8V15.4L55.7,20.8z"
                                      />
                                      <path
                                        className="st1"
                                        d="M19,46.1l1.3-1.9c0.3-0.4,0.4-0.8,0.4-1.3v-0.5c0-1.3-1-2.3-2.3-2.3c-0.8,0-1.5,0.4-1.9,1L15.1,43 c-0.3,0.4-0.4,0.8-0.4,1.3v0.5c0,1.3,1,2.3,2.3,2.3C17.8,47.1,18.5,46.7,19,46.1z"
                                      />
                                      <path
                                        className="st1"
                                        d="M25.4,45.1v-0.5c0-1.3-1-2.3-2.3-2.3H23c-0.7,0-1.4,0.3-1.8,0.9l-2.4,3.2c-0.3,0.4-0.5,0.9-0.5,1.4v0.5 c0,1.3,1,2.3,2.3,2.3h0.1c0.7,0,1.4-0.3,1.8-0.9l2.4-3.2C25.2,46.1,25.4,45.6,25.4,45.1z"
                                      />
                                      <path
                                        className="st1"
                                        d="M30.1,47.5V47c0-1.3-1-2.3-2.3-2.3h-0.1c-0.7,0-1.4,0.3-1.8,0.9l-2.4,3.2c-0.3,0.4-0.5,0.9-0.5,1.4v0.5 c0,1.3,1,2.3,2.3,2.3h0.1c0.7,0,1.4-0.3,1.8-0.9l2.4-3.2C29.9,48.5,30.1,48,30.1,47.5z"
                                      />
                                      <path
                                        className="st1"
                                        d="M34.8,49.4L34.8,49.4c0-1.3-1-2.3-2.3-2.3h-0.1c-0.7,0-1.4,0.3-1.8,0.9l-2.4,3.2c-0.3,0.4-0.5,0.9-0.5,1.4V53 c0,1.3,1,2.3,2.3,2.3h0.1c0.7,0,1.4-0.3,1.8-0.9l2.4-3.2c0.3-0.4,0.5-0.9,0.5-1.4V49.4z"
                                      />
                                      <path
                                        className="st1"
                                        d="M36.4,52.3c-0.1,0.1-0.1,0.2-0.2,0.3l-1.5,2l1.6,1.5c0.5,0.5,1.3,0.5,1.7,0c0.6-0.6,0.8-1.7,0.6-2.1L36.4,52.3 z"
                                      />
                                      <path
                                        className="st1"
                                        d="M39.3,28.4c-1.5,0.8-4,2.9-5.8,4.4c-0.6,0.5-1.1,0.9-1.5,1.3c-0.9,0.8-2,1.1-3.2,1.1h-0.9 c-2,0-3.7-1.1-4.6-2.8c-1-2-0.6-4.4,1-5.9l6.6-6.5c0.3-0.2,0.7-0.4,1-0.7c-3.7-0.8-7.9-0.8-12.6-0.1c-2.4,0.4-4.8-0.3-6.6-1.8 l-4.9-2.1v22.8l6.1,2.6l0.7-1c0.9-1.3,2.3-2.1,3.9-2.1c1.8,0,3.3,1,4.1,2.4c0.2,0,0.4-0.1,0.6-0.1c1.8,0,3.4,1,4.2,2.4 c0.2,0,0.4-0.1,0.6-0.1c1.8,0,3.4,1,4.2,2.4c0.2,0,0.4-0.1,0.6-0.1h0.1c2.6,0,4.7,2.1,4.7,4.7v0.5l3,2.5c0,0,0,0,0,0l1.1,1 c0.7,0.5,1.5,0.8,2.4,0.8c1,0,1.8-0.8,1.8-1.8c0-0.5-0.2-1-0.6-1.4l-10.8-9c-0.5-0.4-0.6-1.2-0.2-1.7c0.4-0.5,1.2-0.6,1.7-0.1 l13.3,11.1c0.4,0.3,0.8,0.5,1.3,0.5h0.3c1.1,0,2-0.9,2-2c0-0.6-0.2-1.1-0.7-1.5L38.8,37.4c-0.5-0.4-0.6-1.2-0.1-1.7 c0.4-0.5,1.2-0.6,1.7-0.2l13,10.8c0,0,0,0,0.1,0.1l0.2,0.2c0.4,0.3,0.8,0.5,1.3,0.5h0.3c1.1,0,2.1-0.9,2.1-2.1 c0-0.6-0.3-1.2-0.7-1.6L39.3,28.4z"
                                      />
                                    </g>
                                  </svg>
                                </div>
                                Partnership
                              </Link>
                            </h4>
                            <ul>
                              <li>
                                <Link href="/white-label-partnership-program">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <path
                                        className="st0"
                                        d="M36.4,22.6c-2.6-0.7-5.7-1.5-8.7-2.3c-1.9,1.6-3.3,3.5-5.2,4.9c-2.5-2-5.6-3.2-6.5-6.6c0.2-0.4,0.3-0.7,0.5-0.9 c1.1-1.4,2.7-2,4.3-2.5c3.2-1.1,6.5-1.4,9.8-1.7c6.2-0.6,12.4-0.9,18.6-1.4c2.4-0.2,4.8-0.8,7.1-1.5c0.3-0.1,0.6-0.4,0.7-0.8 c0.1-0.7-0.3-1.1-1.1-1.2c-4.3,1.3-8.9,1.5-13.7,1.8c0.5-0.7,1.4-0.8,1.5-1.6c0-0.6-0.2-0.9-1-1.1c-1.7,0.6-3.4,1.5-5.3,1.8 c-3.5,0.6-7.1,0.5-10.6,0.2c-2.4-0.2-4.7,0-7.1,0.3c-2,0.3-4,0.9-5.7,2.1c-1.9,1.4-2.6,3.2-2.1,5.4c0.6,2.8,2.3,4.7,4.5,6.4 c1.5,1.1,3,2.1,5,3.4c-1.8,1.5-3.4,2.8-4.9,4.1c0.6,2.8,1.4,5.2,1.9,7.6c0.3,1.5,1,2.5,2,3.6c7.4,7.3,14.7,14.7,22,22 c0.1,0,0.3,0,0.4,0c0.2-0.7,0.9-1.1,1.4-1.7c5.4-5.5,10.9-10.9,16.3-16.2C52.5,38.6,44.6,30.7,36.4,22.6z M13.9,17.4 c-0.4-1.7,0.4-2.7,1.5-3.5c2.5-1.8,5.4-2.3,8.8-1.8c-2.2,0.6-4,1.1-5.8,1.7C16.6,14.4,15,15.4,13.9,17.4z M27.3,34.6 c-2.5-0.4-3.6-2.5-3.1-6c1,1.4,0.2,2.9,1.1,3.9c1,1.1,2.2,1.4,3.6,1.1c1.5-0.8,2.5-1.9,2-3.7c-0.7-2.7-2.9-2.7-5.5-2.3 c2.8-2.2,5.4-0.9,6.5,2.8C31.3,33.5,29.6,35,27.3,34.6z M25.9,30.3c1.2-0.4,2.5,0.3,3.6-0.8c0.6,1.4,0.2,2.2-0.7,2.8 C26.6,32.5,26.6,32.5,25.9,30.3z M29.6,44.3c0.5-1,8.9-9.9,10.3-10.8c0.4-0.3,0.8-0.3,1.4,0c0.2,0.5,0.2,0.9-0.2,1.3 c-3.4,3.4-6.9,6.9-10.1,10.1C30.1,45,29.8,44.8,29.6,44.3z M36.6,50.7c-0.4-0.1-0.7-0.1-0.9-0.2c-0.2-0.1-0.3-0.3-0.4-0.4 c-0.1-0.5,0.2-0.8,0.4-1c1.8-1.9,3.7-3.7,5.5-5.5c1.3-1.3,2.6-2.6,3.9-3.9c0.8-0.8,0.8-0.7,2.5,0C43.8,43.5,40.2,47.1,36.6,50.7z"
                                      />
                                    </svg>
                                  </div>
                                  <div>White Label Partnership</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/referral-program">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M13.8,46.2c1.8-2.5,4.2-3.8,7.3-3.8c3,0,6,0,9,0c0.3,0,0.4,0,0.4-0.3c0-1.1,0-2.3,0-3.4c0-3.3-2.2-6.3-5.4-7.3 c-1.3-0.4-2.6-0.3-3.9-0.4c-0.2,0-0.2,0.2-0.2,0.3c-0.4,0.9-0.7,1.8-1,2.7c-0.6,1.5-1.1,2.9-1.7,4.5c-0.6-1.6-1.2-3.2-1.8-4.8 c-0.6,1.6-1.2,3.2-1.8,4.8c-0.1,0-0.1-0.1-0.1-0.2c-0.9-2.3-1.8-4.6-2.7-6.9c-0.1-0.1-0.1-0.3-0.3-0.3c-0.8,0-1.7,0-2.5,0.1 c-3.7,0.4-6.7,3.6-6.7,7.3c0,2.6,0,5.1,0,7.7c0,0.2,0,0.3,0.3,0.3c3.7,0,7.3,0,11,0C13.6,46.4,13.7,46.3,13.8,46.2z"
                                        />
                                        <path
                                          className="st0"
                                          d="M69.8,38.6c0-3.3-2.4-6.3-5.5-7.2c-1.2-0.4-2.5-0.3-3.8-0.3c-0.2,0-0.2,0.2-0.3,0.3c-0.5,1.2-1,2.5-1.4,3.7 c-0.4,1.1-0.9,2.2-1.3,3.4c-0.6-1.6-1.2-3.2-1.8-4.8c-0.6,1.7-1.2,3.2-1.8,4.9c-0.9-2.4-1.8-4.8-2.7-7.1c-0.1-0.2-0.1-0.3-0.3-0.3 c-0.8,0-1.7,0-2.5,0.1c-3.4,0.4-6.3,3.3-6.6,6.7c-0.1,1.4,0,2.8-0.1,4.2c0,0.3,0.1,0.4,0.4,0.4c3,0,6.1,0,9.1,0 c3,0,5.4,1.3,7.1,3.7c0.1,0.2,0.2,0.2,0.4,0.2c3.6,0,7.3,0,10.9,0c0.2,0,0.3-0.1,0.3-0.3C69.8,43.6,69.8,41.1,69.8,38.6z"
                                        />
                                        <path
                                          className="st0"
                                          d="M55.6,31.3c5,0,9-4.1,9-9c0-5.1-4-9.1-9-9.1c-5,0-9,4.1-9,9.1C46.7,27.2,50.7,31.3,55.6,31.3z"
                                        />
                                        <path
                                          className="st0"
                                          d="M16.4,31.3c5,0,9-4.1,9-9.1c0-5.1-4-9.1-9-9.1c-5,0-9,4.1-9,9.1C7.3,27.2,11.4,31.3,16.4,31.3z"
                                        />
                                        <path
                                          className="st0"
                                          d="M51.9,43.1c-1.4-0.1-2.7,0-4.1,0c-2.6,0-5.3,0-7.9,0c-0.9,0-1.5,0.5-1.7,1.3c-0.2,1.1,0.5,1.9,1.7,1.9 c3.8,0,7.6,0,11.3,0c2.4,0,4.5,2.1,4.6,4.5c0,2.6-2,4.7-4.6,4.7c-3.8,0-7.6,0-11.3,0c-0.3,0-0.5,0-0.8-0.1 c-2.6-0.4-4.5-3.1-3.6-5.9c0.1-0.3,0.1-0.6,0-0.9c-0.2-0.7-0.8-1.1-1.5-1.2c-0.7,0-1.3,0.4-1.6,1.1c-0.3,1-0.4,2-0.3,3.1 c0.4,4,3.7,7,7.7,7c1.9,0,3.8,0,5.7,0c1.9,0,3.8,0,5.7,0c0.5,0,0.9,0,1.4-0.1c4.4-0.9,7-5,6.1-9.4C58.1,46,55.3,43.4,51.9,43.1z"
                                        />
                                        <path
                                          className="st0"
                                          d="M32,55.5c-3.7,0-7.4,0-11.1,0c-0.3,0-0.6,0-0.9,0c-2.4-0.4-4-2.6-3.8-5.1c0.2-2.3,2.2-4.1,4.6-4.1 c3.8,0,7.5,0,11.3,0c0.3,0,0.6,0,0.9,0.1c2.4,0.5,4.3,2.9,3.6,5.7c-0.2,0.9,0.3,1.8,1.2,2c0.9,0.2,1.7-0.3,1.9-1.2 c0.3-1,0.3-2.1,0.2-3.2c-0.6-3.9-3.9-6.7-7.8-6.7c-3.7,0-7.4,0-11.1,0c-0.6,0-1.1,0-1.7,0.2c-4,0.9-6.6,4.6-6.1,8.7 c0.4,3.8,3.8,6.8,7.6,6.8c1.8,0,3.7,0,5.5,0c2,0,4,0,6,0c1,0,1.8-0.9,1.6-1.9C33.6,56,33,55.5,32,55.5z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Referral Program</div>
                                </Link>
                              </li>
                              <li>
                                <Link href="/startup-accelerator-program">
                                  <div className="menu-icon">
                                    <svg
                                      className="svg-menu"
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 72 72"
                                      style={{
                                        enableBackground: "new 0 0 72 72",
                                      }}
                                      xmlSpace="preserve"
                                    >
                                      <g>
                                        <path
                                          className="st0"
                                          d="M10.3,38.5l4.5,0.7c1-5.6,3.6-11.1,7.3-16.2l-4.9,0.4c-1.4,0.1-2.6,0.8-3.3,2l-5.6,8.5 c-0.6,0.9-0.7,1.9-0.2,2.9C8.4,37.7,9.3,38.3,10.3,38.5z"
                                        />
                                        <path
                                          className="st0"
                                          d="M33.5,61.6c0.2,1,0.8,1.9,1.8,2.3c0.4,0.2,0.8,0.3,1.2,0.3c0.6,0,1.2-0.2,1.7-0.5l8.5-5.6c1.1-0.8,1.9-2,2-3.3 l0.4-4.9c-5.1,3.8-10.7,6.3-16.2,7.3L33.5,61.6z"
                                        />
                                        <path
                                          className="st0"
                                          d="M19.8,33.7c-0.9,2.1-1.5,4.4-1.9,6.7c-0.2,0.9,0.2,1.9,0.8,2.5L29,53.2c0.5,0.5,1.3,0.9,2,0.9 c0.2,0,0.3,0,0.5,0c2.3-0.4,4.6-1,6.7-1.9L19.8,33.7z"
                                        />
                                        <path
                                          className="st0"
                                          d="M64.2,10.5c-0.1-1.5-1.3-2.7-2.7-2.7c-0.7,0-1.5-0.1-2.5-0.1c-4.8,0-12.5,0.7-19.8,4.5 c-5.8,3-13.4,9.6-17.9,18.3c0.1,0,0.1,0.1,0.2,0.1l19.9,19.9c0,0,0.1,0.1,0.1,0.2c8.7-4.5,15.3-12.1,18.3-17.9 C64.2,24,64.4,14.8,64.2,10.5z M52.3,31.3c-1.6,1.6-3.7,2.4-5.9,2.4c-2.1,0-4.2-0.8-5.9-2.4c-1.6-1.6-2.4-3.6-2.4-5.9 c0-2.2,0.9-4.3,2.4-5.9v0c3.2-3.2,8.5-3.2,11.7,0c1.6,1.6,2.4,3.6,2.4,5.9C54.7,27.7,53.9,29.8,52.3,31.3z"
                                        />
                                        <path
                                          className="st0"
                                          d="M46.4,20.5c-1.3,0-2.5,0.5-3.5,1.5c-0.9,0.9-1.5,2.2-1.5,3.5s0.5,2.6,1.5,3.5c1.9,1.9,5.1,1.9,7,0 c0.9-0.9,1.5-2.2,1.5-3.5S50.9,22.9,50,22C49,21,47.7,20.5,46.4,20.5z"
                                        />
                                        <path
                                          className="st0"
                                          d="M13.7,46l-5.4,5.4c-0.6,0.6-0.6,1.7,0,2.3c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.8-0.2,1.2-0.5l5.4-5.4 c0.6-0.6,0.6-1.7,0-2.3C15.4,45.4,14.3,45.4,13.7,46z"
                                        />
                                        <path
                                          className="st0"
                                          d="M21,51c-0.6-0.6-1.7-0.6-2.3,0L8.2,61.4c-0.6,0.6-0.6,1.7,0,2.3C8.6,64,9,64.2,9.4,64.2s0.8-0.2,1.2-0.5 L21,53.3C21.6,52.7,21.6,51.6,21,51z"
                                        />
                                        <path
                                          className="st0"
                                          d="M23.6,55.9L23.6,55.9l-5.4,5.4c-0.6,0.6-0.6,1.7,0,2.3c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.8-0.2,1.2-0.5l5.4-5.4 c0.6-0.6,0.6-1.7,0-2.3C25.3,55.3,24.2,55.3,23.6,55.9z"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <div>Startup Accelerator Program</div>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  )}

                  <li className="nav-item">
                    <Link
                      className="nav-link sm-scroll"
                      href="#blog-guide-footer-contact-us"
                    >
                      Enquire Now
                    </Link>
                  </li>
                </ul>
              </div>
              {!isSmallScreen ? (
                <div className="right-menu">
                  <ul className="navbar-nav ">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        style={{ color: "red" }}
                        href="/"
                        id="new-lets-get-started"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
