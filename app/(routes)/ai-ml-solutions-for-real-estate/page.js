"use client";
import Link from "next/link";
import Image from "next/image";
import realEstatesvg from "../../../assets/img/AI-ML-Solutions-for-Real-Estate.svg";
import NavigationBar from "@/app/components/header/Navbar/NavigationBar";
import version8Image from "../../../assets/img/solutions-page-header/version_8.webp";
import Android from "../../../assets/img/tech-icons/android.png";
import ios from "../../../assets/img/tech-icons/ios.png";
import nodeJs from "../../../assets/img/tech-icons/nodejs.png";
import java from "../../../assets/img/tech-icons/java.png";
import php from "../../../assets/img/tech-icons/php.png";

import virtualAssistance from "../../../assets/img/demo/solution-icons/Virtual-Assistance.svg";
import BusinessIntelligence from "../../../assets/img/demo/solution-icons/Business-Intelligence.svg";
import HealthcareBigDataEngineering from "../../../assets/img/demo/solution-icons/Healthcare-Big-Data-Engineering.svg";
import CognitiveSolution from "../../../assets/img/demo/solution-icons/Cognitive-Solution.svg";
import PropertyForecastingthrough from "../../../assets/img/demo/solution-icons/Property-Forecasting-through.svg";
import PropertyRecommendation from "../../../assets/img/demo/solution-icons/Property-Recommendation.svg";
import healthfitness from "../../../assets/img/demo/health-fitness.png";
import educationelearning from "../../../assets/img/demo/education-elearning.png";
import retail from "../../../assets/img/demo/retail.png";
import bankingfinancesolution from "../../../assets/img/demo/banking-finance-solution.png";
import transportationlogistics from "../../../assets/img/demo/transportation-logistics.png";
import traveltourism from "../../../assets/img/demo/travel-tourism.png";
import realestate from "../../../assets/img/demo/real-estate.svg";
import mediaentertainment from "../../../assets/img/demo/media-entertainment.svg";
import CaseStudy from "@/app/components/CaseStudy/CaseStudy";
import DropusalineForm from "@/app/components/DropusalineForm/DropusalineForm";
import Footer from "@/app/components/footer/Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// import { useParams } from "react-router-dom";

const RealEstate = () => {
  
 const data = useSelector((state)=>state.data)



 useEffect(() => {
  console.log("shreejijason" , data)
 }, [data])
  
  return (
    <>
      <NavigationBar />
      <div className="textual-banner solution-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              {data && data.companyInfo && (
                <h1 className="lg-title mb-4">
                  {data.companyInfo.name}
                </h1>
              )}

              <p>
                Dominate the real estate market with smart data insights that
                keep you one step ahead of the competitors
              </p>

              <Link
                data-toggle="modal"
                data-target="#quickReach"
                href="#details-data"
                className="btn btn-custom scrollSlow"
              >
                {" "}
                Connect With an Expert{" "}
                <span className="btn__bg">
                  <span> Connect With an Expert </span>
                </span>
              </Link>
            </div>

            <div className="col-md-6 text-center">
              <Image src={realEstatesvg} alt="iot-development" />
            </div>
          </div>
        </div>

        <div className="banner-cs-fixed" style={{ background: "#593b45" }}>
          <div
            className="banner-cs-img"
            style={{ background: `url(${version8Image})` }}
          ></div>
          {/* <Image src={version8Image} className="banner-cs-img"  style={{height : "100%" , width : "fit-content"}}/> */}
        </div>
      </div>

      <div className="inpage-menu">
        <div className="container">
          <ul>
            <li>
              <Link href="#details-data">Technologies</Link>
            </li>

            <li>
              <Link href="#digital-solutions">Solutions</Link>
            </li>

            <li>
              <Link href="#industries">Industries</Link>
            </li>

            <li>
              <Link href="#ourprocess">Our Process</Link>
            </li>

            <li>
              <Link href="#ourwork">Our Work</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="padding-wrap bg-gray tab-sec" id="details-data">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="vertical-tab">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <Link
                    className="nav-link active"
                    data-toggle="pill"
                    href="#tech-1"
                    role="tab"
                    aria-selected="true"
                  >
                    <span>
                      <span>Amazon Polly</span>
                    </span>
                  </Link>

                  <Link
                    className="nav-link"
                    data-toggle="pill"
                    href="#tech-2"
                    role="tab"
                    aria-selected="false"
                  >
                    <span>
                      <span>Amazon Rekognition</span>
                    </span>
                  </Link>

                  <Link
                    className="nav-link"
                    data-toggle="pill"
                    href="#tech-3"
                    role="tab"
                    aria-selected="false"
                  >
                    <span>
                      <span>Amazon SageMaker</span>
                    </span>
                  </Link>
                </div>

                <div className="tab-content tech-use" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade active show"
                    id="tech-1"
                    role="tabpanel"
                  >
                    <h5>Amazon Polly</h5>

                    <p>
                      We use Amazon Polly cloud technology to build
                      text-to-speech AI algorithms. Amazon Polly allows us to
                      achieve high accuracy levels when it comes to
                      text-to-speech AI solutions. Moreover, our AI/ML solutions
                      are powered and supported by all major web and mobile
                      technologies which means such AI algorithms can be put to
                      different uses.
                    </p>

                    <div className="icons-row">
                      <div className="icon-wrapper">
                        <div className="i-wr">
                          <Image src={Android} alt="Android" />
                        </div>

                        <span className="icon-label">Android</span>
                      </div>

                      <div className="icon-wrapper">
                        <div className="i-wr">
                          <Image src={ios} alt="iOS" />
                        </div>

                        <span className="icon-label">iOS</span>
                      </div>

                      <div className="icon-wrapper">
                        <div className="i-wr">
                          <Image src={nodeJs} alt="Node.js" />
                        </div>

                        <span className="icon-label">Node.js</span>
                      </div>

                      <div className="icon-wrapper">
                        <div className="i-wr">
                          <Image src={java} alt="Java" />
                        </div>

                        <span className="icon-label">Java</span>
                      </div>

                      <div className="icon-wrapper">
                        <div className="i-wr">
                          <Image src={php} alt="PHP" />
                        </div>

                        <span className="icon-label">PHP</span>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tech-2" role="tabpanel">
                    <h5>Amazon Rekognition</h5>

                    <p>
                      Amazon Rekognition is meant to design cutting-edge
                      computer vision solutions. Using image and video
                      recognition technology, we build AI-based solutions
                      required for surveillance, image recognition applications
                      and other industrial uses.
                    </p>

                    <div className="icons-row">
                      <div className="icon-wrapper">
                        <div className="i-wr">
                          <Image src={Android} alt="Android" />
                        </div>

                        <span className="icon-label">Android</span>
                      </div>

                      <div className="icon-wrapper">
                        <div className="i-wr">
                          <Image src={ios} alt="iOS" />
                        </div>

                        <span className="icon-label">iOS</span>
                      </div>

                      <div className="icon-wrapper">
                        <div className="i-wr">
                          <Image src={nodeJs} alt="Node.js" />
                        </div>

                        <span className="icon-label">Node.js</span>
                      </div>

                      <div className="icon-wrapper">
                        <div className="i-wr">
                          <Image src={java} alt="Java" />
                        </div>

                        <span className="icon-label">Java</span>
                      </div>

                      <div className="icon-wrapper">
                        <div className="i-wr">
                          <Image src={php} alt="PHP" />
                        </div>

                        <span className="icon-label">PHP</span>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tech-3" role="tabpanel">
                    <h5>Amazon SageMaker</h5>

                    <p>
                      Sagemaker allows us to build, train and deploy advanced
                      machine learning models efficiently. Using Amazon
                      Sagemaker, we bring required efficiency to the AI/ML
                      technology and allow you to take benefits of AI models
                      on-the-cloud.
                    </p>

                    <div className="icons-row"></div>
                  </div>

                  {/* <!-- <div className="tab-pane fade" id="tech-5" role="tabpanel">

                  <h5>Backend</h5>

                  <p>We focus on highly available, easily maintainable applications following the hexagonal architecture, DDD and SOA. We deliver distributed backend solutions that can handle the load and deliver value to your business..</p>

                  <div className="icons-row">

                      <div className="icon-wrapper">

                          <div className="i-wr"><img src="assets/img/tech-icons/nodejs.png" alt="Nod JS"></div>

                          <span className="icon-label">Node.js</span>

                      </div>

                      <div className="icon-wrapper">

                          <div className="i-wr"><img src="assets/img/tech-icons/spring.png" alt="Java"></div>

                          <span className="icon-label d-label">Java <br/> (Spring)</span>

                      </div>

                      <div className="icon-wrapper">

                          <div className="i-wr"><img src="assets/img/tech-icons/ruby.png" alt="Rube"></div>

                          <span className="icon-label d-label">Ruby <br/> on Rails</span>

                      </div>

                       <div className="icon-wrapper">

                          <div className="i-wr"><img src="assets/img/tech-icons/stackoverflow.png" alt="Stackoverflow"></div>

                          <span className="icon-label">Stackoverflow</span>

                      </div>

                  </div>

                </div> --> */}

                  {/* <!--  <div className="tab-pane fade" id="tech-6" role="tabpanel">

                  <h5>Databases</h5>

                  <p>We choose the best data storage for building your product from a variety of SQL and NoSQL databases.</p>

                  <div className="icons-row">

                      <div className="icon-wrapper">

                          <div className="i-wr"><img src="assets/img/tech-icons/mysql.png" alt="MySQL"></div>

                          <span className="icon-label">MySQL</span>

                      </div>

                      <div className="icon-wrapper">

                          <div className="i-wr"><img src="assets/img/tech-icons/mongo-db.png" alt="MongoDB"></div>

                          <span className="icon-label">MongoDB</span>

                      </div>

                      <div className="icon-wrapper">

                          <div className="i-wr"><img src="assets/img/tech-icons/postgresql.png" alt="PostgreSQL"></div>

                          <span className="icon-label">PostgreSQL</span>

                      </div>

                      <div className="icon-wrapper">

                          <div className="i-wr"><img src="assets/img/tech-icons/elastic.png" alt="Elasticsearch"></div>

                          <span className="icon-label">Elasticsearch</span>

                      </div>

                      <div className="icon-wrapper">

                          <div className="i-wr"><img src="assets/img/tech-icons/redis.png" alt="Redis"></div>

                          <span className="icon-label">Redis</span>

                      </div>

                      

                       <div className="icon-wrapper">

                          <div className="i-wr"><img src="assets/img/tech-icons/stackoverflow.png" alt="Stackoverflow"></div>

                          <span className="icon-label">Stackoverflow</span>

                      </div>

                  </div>

                </div> --> */}

                  {/* <!--   <div className="tab-pane fade" id="tech-7" role="tabpanel">

                  <h5>Infrastructure</h5>

                  <p>We follow No-Ops and automation philosophy which saves you money. We build secure cloud-based infrastructure for your application with Terraform and Ansible, using AWS and GCP.</p>

                  <div className="icons-row">

                      <div className="icon-wrapper">

                          <div className="i-wr"><img src="assets/img/tech-icons/aws.png" alt="AWS"></div>

                          <span className="icon-label">AWS Cloud</span>

                      </div>

                      <div className="icon-wrapper">

                          <div className="i-wr"><img src="assets/img/tech-icons/google-cloud.png" alt="google-cloud"></div>

                          <span className="icon-label">Google Cloud</span>

                      </div>

                      <div className="icon-wrapper">

                          <div className="i-wr"><img src="assets/img/tech-icons/travis.png" alt="travis"></div>

                          <span className="icon-label">Travis</span>

                      </div>

                      <div className="icon-wrapper">

                          <div className="i-wr"><img src="assets/img/tech-icons/jenkins.png" alt="Jenkins"></div>

                          <span className="icon-label">Jenkins</span>

                      </div>

                      <div className="icon-wrapper">

                          <div className="i-wr"><img src="assets/img/tech-icons/github.png" alt="Github"></div>

                          <span className="icon-label">Github</span>

                      </div>

                      <div className="icon-wrapper">

                          <div className="i-wr"><img src="assets/img/tech-icons/nginx.png" alt="Nginx"></div>

                          <span className="icon-label">Nginx</span>

                      </div>

                      <div className="icon-wrapper">

                          <div className="i-wr"><img src="assets/img/tech-icons/terraform.png" alt="Terraform"></div>

                          <span className="icon-label">Terraform</span>

                      </div>

                      <div className="icon-wrapper">

                          <div className="i-wr"><img src="assets/img/tech-icons/ansible.png" alt="Ansible"></div>

                          <span className="icon-label">Ansible</span>

                      </div>

                  </div>

                </div> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="padding-wrap pb-5" id="dig-solutions">
        <div className="container" id="digital-solutions">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="subtitle">Your choice of weapon</div>

              <h2 className="title">
                Take Your Business Higher with our End-to-end Digital Solutions
              </h2>
            </div>
          </div>

          <div className="row object-box">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="icon-block">
                {/* <!--<span className="EandEIcon mobileDev"></span>--> */}

                <div>
                  <Image src={virtualAssistance} alt="virtual-assistance"/>
                </div>

                <div>
                  <h4>Virtual Assistance 24/7</h4>
                  <p>
                    Offer 24/7 virtual assistance to your potential leads with
                    intelligent bots that are business-aware.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="icon-block">
                {/* <!--<span className="EandEIcon webDev"></span>--> */}

                <div>
                  <Image
                    src={BusinessIntelligence}
                    alt="bussiness-intelligence"
                  />
                </div>

                <div>
                  <h4>Business Intelligence</h4>

                  <p>
                    Take better real estate decisions with smart insights
                    generated using key market patterns with BI.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="icon-block">
                {/* <!--<span className="EandEIcon webDev"></span>--> */}

                <div>
                  <Image
                    src={HealthcareBigDataEngineering}
                    alt="Healthcare-Big-Data-Engineering"
                  />
                </div>

                <div>
                  <h4>Big Data Engineering</h4>

                  <p>
                    Churn through millions of properties and assets to derive
                    the most refined business strategies.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="icon-block">
                {/* <!--<span className="EandEIcon progressiveSer"></span>--> */}

                <div>
                  <Image src={CognitiveSolution} alt="Cognitive-Solution" />
                </div>

                <div>
                  <h4>Cognitive Computing</h4>

                  <p>
                    Leverage the power of robot vision and voice to level-up
                    your real estate engagement experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="icon-block">
                {/* <!--<span className="EandEIcon productEngg"></span>--> */}

                <div>
                  <Image
                    src={PropertyForecastingthrough}
                    alt="Property-Forecasting-through"
                  />
                </div>

                <div>
                  <h4>Property Forecasting through</h4>

                  <p>
                    Predictive Analytics helps you make smart property forecasts
                    with deep and intelligent data insights.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="icon-block">
                {/* <!--<span className="EandEIcon cloudCons"></span>--> */}

                <div>
                  <Image
                    src={PropertyRecommendation}
                    alt="Property-Recommendation"
                  />
                </div>

                <div>
                  <h4>
                    Property Recommendation through data-driven actionable
                    insights
                  </h4>

                  <p>
                    Match clients with the most suitable properties by using
                    smart recommendations derived from data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-banner white-section padding-wrap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <h4>Enrich your Business Operations with AI Solutions</h4>

              <p className="mb-0">Talk to our experts now</p>
            </div>
            <div className="form-group col-md-3 mb-2">
              <input
                type="text"
                id="email-profitability"
                className="form-control req"
                name="email"
                placeholder="Your Email"
              />

              <span
                id="email-profitability-error"
                className="color-red font-size-12"
              ></span>
            </div>
            <div className="col-md-3 text-lg-right text-md-center xs-mt-4">
              <Link
                href="#"
                className="btn btn-custom"
                id="id-contactus-btn-profitability"
              >
                {" "}
                Get Started{" "}
                <span className="btn__bg">
                  <span> Get Started </span>
                </span>
              </Link>
            </div>{" "}
          </div>
        </div>
      </div>

      {/* <div className="padding-wrap pb-5 bg-xbyte" id="industries">
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-md-9 text-center">
              <h2 className="title mb-3 mt-5">Industries We Serve</h2>
              <p className="">
                We’ve had the privilege to work extensively across a wide range
                of industries, solving critical problems and delighting
                end-users with our engaging mobile apps.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <ul className="hover-box">
            <li>
              <div className="hover-grid">
                <div className="static">
                  <span className="dem1"></span>
                  <Image src={healthfitness} alt="health-fitness" />
                  <h6 className="text-x">AI & ML in Health & Fitness</h6>
                </div>
                <div className="on-hover">
                  <p>Telemedicine</p>
                  <hr />
                  Digital Wellness
                  <hr />
                  Drug Development
                  <hr />
                  Optimized Patient Recruitment for Clinical Trials
                  <hr />
                  Drug Development
                  <hr />
                  E-Health<p></p>
                </div>
              </div>
            </li>
            <li>
              <div className="hover-grid">
                <div className="static">
                  <span className="dem2"></span>
                  <Image src={educationelearning} alt="education-elearning" />
                  <h6 className="text-x">AI & ML in Education & eLearning</h6>
                </div>
                <div className="on-hover">
                  <p>
                    Adaptive Learning Platform
                    <br />
                    <hr />
                    Digital Mentor Solution
                    <br />
                    <hr />
                    Smart Test Preparation Applications
                    <br />
                    <hr />
                    eLearning Platforms
                    <br />
                    <hr />
                    Feedback and scoring system
                    <br />
                    <hr />
                    Smart Content
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="hover-grid">
                <div className="static">
                  {" "}
                  <span className="dem3"></span>
                  <Image src={retail} alt="retail" />
                  <h6 className="text-x">AI & ML in Retail & eCommerce</h6>
                </div>
                <div className="on-hover">
                  <p>
                    Order Fulfillment and Tracking
                    <br />
                    <hr />
                    Smart Inventory Management with AI
                    <br />
                    <hr />
                    Product Categorization
                    <br />
                    <hr />
                    IoT Analytics Platform
                    <br />
                    <hr />
                    Fraud Detection and Prevention
                    <br />
                    <hr />
                    Anomaly Detection
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="hover-grid">
                <div className="static">
                  {" "}
                  <span className="dem4"></span>
                  <Image
                    src={bankingfinancesolution}
                    alt="banking-finance-solution"
                  />
                  <h6 className="text-x">AI & ML in Banking & Finance</h6>
                </div>
                <div className="on-hover">
                  <p>
                    Anomaly Detection
                    <br />
                    <hr />
                    Banking Process Management
                    <br />
                    <hr />
                    Indoor Positioning Platform
                    <br />
                    <hr />
                    Robotic Process Automation
                    <br />
                    <hr />
                    Natural Language Processing
                    <br />
                    <hr />
                    Algorithm based Marketing
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="hover-grid">
                <div className="static">
                  {" "}
                  <span className="dem5"></span>
                  <Image
                    src={transportationlogistics}
                    alt="transportation-logistics"
                  />
                  <h6 className="text-x">AI & ML in Automotive</h6>
                </div>
                <div className="on-hover">
                  <p>
                    Traffic management
                    <br />
                    <hr />
                    IoT Analytics Platform
                    <br />
                    <hr />
                    Self-driving vehicles
                    <br />
                    <hr />
                    Monitoring weather conditions
                    <br />
                    <hr />
                    Detecting inconsistent supplier quality levels
                    <br />
                    <hr />
                    Preventative maintenance
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="hover-grid">
                <div className="static">
                  {" "}
                  <span className="dem6"></span>
                  <Image src={traveltourism} alt="travel-tourism" />
                  <h6 className="text-x">AI & ML in Travel & Tourism</h6>
                </div>
                <div className="on-hover">
                  <p>
                    Provide a personalized customer experience
                    <br />
                    <hr />
                    Automate customer support / ChatBot
                    <br />
                    <hr />
                    Manage travel disruption
                    <br />
                    <hr />
                    Data analysis and improved operations
                    <br />
                    <hr />
                    Intelligent travel assistants
                    <br />
                    <hr />
                    Recommendation engines
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="hover-grid">
                <div className="static">
                  {" "}
                  <span className="dem7"></span>
                  <Image src={realestate} alt="real-estate" />
                  <h6 className="text-x">AI & ML in Real Estate</h6>
                </div>
                <div className="on-hover">
                  <p>
                    Predictive maintenance
                    <br />
                    <hr />
                    Analytics in building automation systems
                    <br />
                    <hr />
                    Enhanced data management
                    <br />
                    <hr />
                    IoT Analytics Platform
                    <br />
                    <hr />
                    From manual property appraisal to automated valuation
                    <br />
                    <hr />
                    Consumer Apps with machine based interfaces
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="hover-grid">
                <div className="static">
                  {" "}
                  <span className="dem8"></span>
                  <Image src={mediaentertainment} alt="media-entertainment" />
                  <h6 className="text-x">AI & ML in Media & Entertainment</h6>
                </div>
                <div className="on-hover">
                  <p>
                    Metadata tagging
                    <br />
                    <hr />
                    Reporting automation
                    <br />
                    <hr />
                    Subtitle generation
                    <br />
                    <hr />
                    User Experience and Personalization
                    <br />
                    <hr />
                    Streaming Quality
                    <br />
                    <hr />
                    Search Optimization
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div> */}

      <div className="bottom-banner white-section padding-wrap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8">
              <h4>How much does it cost to build my Mobile App</h4>
            </div>
            <div className="col-md-4 text-right xs-mt-4">
              <Link href="#form-xbyte" className="btn btn-custom">
                {" "}
                Get Me Estimation{" "}
                <span className="btn__bg">
                  <span> Get Me Estimation </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="padding-wrap pt-0" id="ourprocess">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="title mb-4">
                Our Strategic App Development Process
              </h2>
              <p className="lg-paragraph w-75 ml-auto mr-auto mb-5">
                We offer three different flexible engagement models that can
                help you take complete control of app development process. Each
                of our model leverages a result-oriented development process.
              </p>
            </div>
          </div>
          <div className="row  justify-content-center">
            <ul
              className="nav nav-tabs horizontal-tab"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                {" "}
                <Link
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Fixed Cost
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Product Engineering
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link
                  className="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Talent On Demand
                </Link>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row pt-4 step-line">
                  <div className="col-md-4">
                    <div className="icon-block style-row">
                      <div className="step-count">
                        <span>01</span>
                      </div>
                      <div>
                        <h4>Discuss</h4>
                        <p>
                          We understand your core vision by discussing your idea
                          thoroughly with you or your internal teams.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon-block style-row">
                      <div className="step-count">
                        <span>02</span>
                      </div>
                      <div>
                        <h4>Define</h4>
                        <p>
                          Based on your inputs, we start building a detailed
                          development roadmap that defines the scope and goals
                          of the project.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon-block style-row">
                      <div className="step-count">
                        <span>03</span>
                      </div>
                      <div>
                        <h4>Design</h4>
                        <p>
                          Our expert UI/UX designers start creating wireframes
                          and prototypes by leveraging best design and UX
                          practices and approaches.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon-block style-row">
                      <div className="step-count">
                        <span>04</span>
                      </div>
                      <div>
                        <h4>Develop</h4>
                        <p>
                          Once the product design is finalized, our developers
                          start building the solution and enriching each design
                          element with required functionality and features.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon-block style-row">
                      <div className="step-count">
                        <span>05</span>
                      </div>
                      <div>
                        <h4>Debug</h4>
                        <p>
                          We thoroughly test each app or solution using
                          automated and manual testing approaches to promise
                          bug-free deployment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon-block style-row">
                      <div className="step-count">
                        <span>06</span>
                      </div>
                      <div>
                        <h4>Deploy</h4>
                        <p>
                          Once we are satisfied with the performance and
                          functionality of the solution, we move ahead with
                          deployment and launch of the solution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row pt-4 step-line">
                  <div className="col-md-4">
                    <div className="icon-block style-row">
                      <div className="step-count">
                        <span>01</span>
                      </div>
                      <div>
                        <h4>Envisage</h4>
                        <p>
                          When you hire resources from our talent pool, we begin
                          exploring the possibility of success market analysis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon-block style-row">
                      <div className="step-count">
                        <span>02</span>
                      </div>
                      <div>
                        <h4>Excogitate</h4>
                        <p>
                          Based on their research and your inputs, we start the
                          brainstorming and ideation process to begin the
                          development process.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon-block style-row">
                      <div className="step-count">
                        <span>03</span>
                      </div>
                      <div>
                        <h4>Evaluate</h4>
                        <p>
                          Our in-house research team performs various viability
                          studies and feasibility analysis to evaluate the core
                          product/app idea.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon-block style-row">
                      <div className="step-count">
                        <span>04</span>
                      </div>
                      <div>
                        <h4>Engage</h4>
                        <p>
                          If a development idea is worth it, we begin the
                          process of designing, developing and testing the
                          solution.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon-block style-row">
                      <div className="step-count">
                        <span>05</span>
                      </div>
                      <div>
                        <h4>Establish</h4>
                        <p>
                          After successful completion of the engagement stage,
                          we take required steps to deploy the solution
                          according to your growth plans.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon-block style-row">
                      <div className="step-count">
                        <span>06</span>
                      </div>
                      <div>
                        <h4>Expand</h4>
                        <p>
                          Once the solution is deployed, we take consistent
                          efforts to scale, improve and expand the prospects
                          according to the dynamic user expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="row pt-4 step-line">
                  <div className="col-md-4">
                    <div className="icon-block style-row">
                      <div className="step-count">
                        <span>01</span>
                      </div>
                      <div>
                        <h4>Ideation</h4>
                        <p>
                          We work closely with your internal teams to ideate a
                          groundbreaking product idea based on your expectations
                          and growth goals.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon-block style-row">
                      <div className="step-count">
                        <span>02</span>
                      </div>
                      <div>
                        <h4>Identification</h4>
                        <p>
                          Based on initial brainstorming and viability checks,
                          we square on the best possible product development
                          idea to kickstart the engineering process.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon-block style-row">
                      <div className="step-count">
                        <span>03</span>
                      </div>
                      <div>
                        <h4>Initialization</h4>
                        <p>
                          Our project managers and engineers coordinate to
                          initiate the product engineering process with special
                          focus on design and development.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon-block style-row">
                      <div className="step-count">
                        <span>04</span>
                      </div>
                      <div>
                        <h4>Iterations</h4>
                        <p>
                          Based on continuous user feedback on the product
                          design and features, we perform required changes and
                          iterations to bring a product closer to end-user
                          expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon-block style-row">
                      <div className="step-count">
                        <span>05</span>
                      </div>
                      <div>
                        <h4>Inspection</h4>
                        <p>
                          Our in-house testing and inspection team tests the
                          developed product for performance, functionality and
                          other issues to eliminate chances of breakdown.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="icon-block style-row">
                      <div className="step-count">
                        <span>06</span>
                      </div>
                      <div>
                        <h4>Introduction</h4>
                        <p>
                          Once everything is refined, tested and ready-to-go, we
                          take a diligent approach to introduce and launch the
                          product for end-users.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="padding-wrap combo-slider pb-5" id="ourwork">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <h2 className="title mb-3 mt-5">
                We’ve Built amazing Solutions. Discover our Past Projects!
              </h2>
              <p className="">
                Confused about making a decision? Explore our recent projects,
                gauge our abilities as a leading development company and make an
                informed decision, today.
              </p>
            </div>
          </div>
          {/* @include('slider') */}
          <CaseStudy />
        </div>
      </div>

      <div className="padding-wrap pt-0">
        <div className="container">
          <div className="row justify-content-center accordion-wrapper">
            <div className="col-md-12 text-center">
              <h2 className="title mb-4">Frequently Asked Questions</h2>
              <p className="lg-paragraph w-75 ml-auto mr-auto mb-5">
                We have compiled a number of the frequently asked questions
                (FAQs) from our users Check these Questions for better knowledge
                of the services and solutions which we are providing to our
                users.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="accordion faq-toggle">
                <li>
                  <Link className="ac-title" href="#" style={{color : "black"}}>
                    How will I judge the success of the AI ML Healthcare App
                    Development Solution?
                  </Link>
                  <div className="ac-content">
                    <p>
                      It totally depends on your aim. Is it the number of
                      downloads or or is it the revenue that you are capable of
                      creating from your AI ML Healthcare App Development.
                    </p>
                  </div>
                </li>
                <li>
                  <Link className="ac-title" href="#" style={{color : "black"}}>
                    Can we set up a call to discuss my AI ML Healthcare App
                    Solution idea?
                  </Link>
                  <div className="ac-content">
                    <p>
                      Yes, we are open for a phone conversation or email to
                      discuss your AI and Machine Learning Healthcare App ideas,
                      whichever is more convenient for you.
                    </p>
                  </div>
                </li>
                <li>
                  <Link className="ac-title" href="#" style={{color : "black"}}>
                    Why Choose us for AI and ML Solution For Healthcare App
                    Development?
                  </Link>
                  <div className="ac-content">
                    <p>
                      As a leading AI ML Development company we have focused all
                      our efforts in providing the clients with outstanding
                      Healthcare Solutions as per requirements.
                    </p>
                  </div>
                </li>
                <li>
                  <Link className="ac-title" href="#" style={{color : "black"}}>
                    Do you also create app back-end for projects?
                  </Link>
                  <div className="ac-content">
                    <p>
                      Yes, we develop a robust and scalable AI ML App back-end
                      along with custom API, allowing you to easily manage the
                      app process and control data access.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="accordion faq-toggle">
                <li>
                  <Link className="ac-title" href="#" style={{color : "black"}}>
                    What are the Mobile Apps of AI in the medical sector?
                  </Link>
                  <div className="ac-content">
                    <p>
                      AI Mobile Apps are ready to support healthcare experts
                      with many tasks from administrative work to medical
                      documentation and patient patient monitoring.
                    </p>
                  </div>
                </li>
                <li>
                  <Link className="ac-title" href="#" style={{color : "black"}}>
                    How is artificial intelligence (AI) used in the medical
                    sector?
                  </Link>
                  <div className="ac-content">
                    <p>
                      Medical Artificial Intelligence (AI) mainly uses computer
                      techniques to perform healthcare diagnoses and assist new
                      treatments.
                    </p>
                  </div>
                </li>
                <li>
                  <Link className="ac-title" href="#" style={{color : "black"}}>
                    How will AI ML Healthcare Solution help doctors?
                  </Link>
                  <div className="ac-content">
                    <p>
                      Primary care doctors can utilize AI ML Healthcare Solution
                      to take their notes, analyze data with patients, and enter
                      required data directly into EHR systems.
                    </p>
                  </div>
                </li>
                <li>
                  <Link className="ac-title" href="#" style={{color : "black"}}>
                    How is Machine Learning Solutionsused in the Healthcare
                    Sector?
                  </Link>
                  <div className="ac-content">
                    <p>
                      Machine Learning Solution can detect patterns of diseases
                      and health conditions by analyzing many clinical records
                      and other patient information.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <DropusalineForm />
      <Footer />
    </>
  );
};

export default RealEstate;
