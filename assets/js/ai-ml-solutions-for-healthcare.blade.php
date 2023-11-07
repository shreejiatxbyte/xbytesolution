@extends('layout/custom_master')
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.3/css/swiper.min.css'>
<link rel="stylesheet" href="assets/css/my-css.css">
@section('title','Welcome')
@section('content')
<style type="text/css">
nav.navbar {
    background: transparent !important;
    position: fixed !important;
    width: 100%;
}
</style>
<div class="textual-banner solution-banner">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">          
          <!-- <h5 class="mb-4 text-mute">Industrial IoT Solutions</h5> -->
            <h1 class="lg-title mb-4">AI and Machine Learning Solutions for Healthcare</h1>
            <p>Integrate Artificial Intelligence and Machine Learning to your healthcare system for better organised management, precise data-driven decision making, reduced costs, and improved care for the patients.</p>
            <a href="#details-data" class="btn btn-custom scrollSlow"> Know More <span class="btn__bg"><span> Know More </span></span></a>
        </div>
        <div class="col-md-6 text-center">
          <img src="assets/img/AI-ML-Solutions-for-Healthcare.svg" alt="iot-development">
        </div>
      </div>
    </div>
    <div class="banner-cs-fixed" style="background: #200041;">
        <div class="banner-cs-img" style="background: url(assets/img/solutions-page-header/version_6.webp);"></div>
    </div>
</div>

<div class="inpage-menu">
  <div class="container">
    <ul>
      <li><a href="#details-data">Technologies</a></li>
      <li><a href="#digital-solutions">Solutions</a></li>
      <li><a href="#industries">Industries</a></li>
      <li><a href="#ourprocess">Our Process</a></li>
      <li><a href="#ourwork">Our Work</a></li>
    </ul>
  </div>
</div>
<div class="padding-wrap bg-gray tab-sec" id="details-data">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">        
            <div class="vertical-tab">
              <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active" data-toggle="pill" href="#tech-1" role="tab" aria-selected="true"><span><span>Amazon Polly</span></span></a>
                <a class="nav-link" data-toggle="pill" href="#tech-2" role="tab" aria-selected="false"><span><span>Amazon Rekognition</span></span></a>
                <a class="nav-link" data-toggle="pill" href="#tech-3" role="tab" aria-selected="false"><span><span>Amazon SageMaker</span></span></a>
              </div>
              <div class="tab-content tech-use" id="v-pills-tabContent">
                
                <div class="tab-pane fade active show" id="tech-1" role="tabpanel">
                  <h5>Amazon Polly</h5>
                  <p>We use Amazon Polly cloud technology to build text-to-speech AI algorithms. Amazon Polly allows us to achieve high accuracy levels when it comes to text-to-speech AI solutions. Moreover, our AI/ML solutions are powered and supported by all major web and mobile technologies which means such AI algorithms can be put to different uses.</p>
                  <div class="icons-row">
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/android.png" alt="Android"></div>
                          <span class="icon-label">Android</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/ios.png" alt="iOS"></div>
                          <span class="icon-label">iOS</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/nodejs.png" alt="Node.js"></div>
                          <span class="icon-label">Node.js</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/java.png" alt="Java"></div>
                          <span class="icon-label">Java</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/php.png" alt="PHP"></div>
                          <span class="icon-label">PHP</span>
                      </div>
                    

                  </div>
                </div>

                <div class="tab-pane fade" id="tech-2" role="tabpanel">
                  <h5>Amazon Rekognition</h5>
                  <p>Amazon Rekognition is meant to design cutting-edge computer vision solutions. Using image and video recognition technology, we build AI-based solutions  required for surveillance, image recognition applications and other industrial uses.</p>
                  <div class="icons-row">
                       <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/android.png" alt="Android"></div>
                          <span class="icon-label">Android</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/ios.png" alt="iOS"></div>
                          <span class="icon-label">iOS</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/nodejs.png" alt="Node.js"></div>
                          <span class="icon-label">Node.js</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/java.png" alt="Java"></div>
                          <span class="icon-label">Java</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/php.png" alt="PHP"></div>
                          <span class="icon-label">PHP</span>
                      </div>
                  </div>
                </div>


                <div class="tab-pane fade" id="tech-3" role="tabpanel">
                  <h5>Amazon SageMaker</h5>
                  <p>Sagemaker allows us to build, train and deploy advanced machine learning models efficiently. Using Amazon Sagemaker, we bring required efficiency to the AI/ML technology and allow you to take benefits of AI models on-the-cloud.</p>
                  <div class="icons-row">
                  </div>
                </div>


                <!-- <div class="tab-pane fade" id="tech-5" role="tabpanel">
                  <h5>Backend</h5>
                  <p>We focus on highly available, easily maintainable applications following the hexagonal architecture, DDD and SOA. We deliver distributed backend solutions that can handle the load and deliver value to your business..</p>
                  <div class="icons-row">
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/nodejs.png" alt="Nod JS"></div>
                          <span class="icon-label">Node.js</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/spring.png" alt="Java"></div>
                          <span class="icon-label d-label">Java <br> (Spring)</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/ruby.png" alt="Rube"></div>
                          <span class="icon-label d-label">Ruby <br> on Rails</span>
                      </div>
                       <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/stackoverflow.png" alt="Stackoverflow"></div>
                          <span class="icon-label">Stackoverflow</span>
                      </div>
                  </div>
                </div> -->


               <!--  <div class="tab-pane fade" id="tech-6" role="tabpanel">
                  <h5>Databases</h5>
                  <p>We choose the best data storage for building your product from a variety of SQL and NoSQL databases.</p>
                  <div class="icons-row">
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/mysql.png" alt="MySQL"></div>
                          <span class="icon-label">MySQL</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/mongo-db.png" alt="MongoDB"></div>
                          <span class="icon-label">MongoDB</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/postgresql.png" alt="PostgreSQL"></div>
                          <span class="icon-label">PostgreSQL</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/elastic.png" alt="Elasticsearch"></div>
                          <span class="icon-label">Elasticsearch</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/redis.png" alt="Redis"></div>
                          <span class="icon-label">Redis</span>
                      </div>
                      
                       <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/stackoverflow.png" alt="Stackoverflow"></div>
                          <span class="icon-label">Stackoverflow</span>
                      </div>
                  </div>
                </div> -->


              <!--   <div class="tab-pane fade" id="tech-7" role="tabpanel">
                  <h5>Infrastructure</h5>
                  <p>We follow No-Ops and automation philosophy which saves you money. We build secure cloud-based infrastructure for your application with Terraform and Ansible, using AWS and GCP.</p>
                  <div class="icons-row">
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/aws.png" alt="AWS"></div>
                          <span class="icon-label">AWS Cloud</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/google-cloud.png" alt="google-cloud"></div>
                          <span class="icon-label">Google Cloud</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/travis.png" alt="travis"></div>
                          <span class="icon-label">Travis</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/jenkins.png" alt="Jenkins"></div>
                          <span class="icon-label">Jenkins</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/github.png" alt="Github"></div>
                          <span class="icon-label">Github</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/nginx.png" alt="Nginx"></div>
                          <span class="icon-label">Nginx</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/terraform.png" alt="Terraform"></div>
                          <span class="icon-label">Terraform</span>
                      </div>
                      <div class="icon-wrapper">
                          <div class="i-wr"><img src="assets/img/tech-icons/ansible.png" alt="Ansible"></div>
                          <span class="icon-label">Ansible</span>
                      </div>
                  </div>
                </div> -->


              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
<div class="padding-wrap pb-5" id="dig-solutions">
    <div class="container" id="digital-solutions">
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="subtitle">Your choice of weapon</div>
                <h2 class="title">Revolutionise your Healthcare Business with AI & ML Solutions</h2>
            </div>
        </div>
        <div class="row object-box">
            <div class="col-md-4 col-sm-6 col-xs-12">
              
                <div class="icon-block">
                    <!--<span class="EandEIcon mobileDev"></span>-->
                    <div><img src="assets/img/demo/solution-icons/Healthcare-Big-Data-Engineering.svg"></div>
                    <div>
                        <h4>Healthcare Big Data Engineering</h4>
                        <p>Analyse the healthcare system data for improved disease diagnosis and lowered operational costs.</p>
                    </div>
                </div>
             
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="icon-block">
                    <!--<span class="EandEIcon webDev"></span>-->
                    <div><img src="assets/img/demo/solution-icons/AI-healthcare-operation-management-patient-experience.svg"></div>
                    <div>
                        <h4>AI for healthcare operation management and patient experience</h4>
                        <p>Automate all your hospital paperwork with AI tools to save time for doctors and offer faster patient visits.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="icon-block">
                    <!--<span class="EandEIcon webDev"></span>-->
                    <div><img src="assets/img/demo/solution-icons/M2M-Integration.svg"></div>
                    <div>
                        <h4>M2M Integration</h4>
                        <p>Transmit patient data through apps and speed up emergency communication using M2M integration.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="icon-block">
                    <!--<span class="EandEIcon progressiveSer"></span>-->
                    <div><img src="assets/img/demo/solution-icons/Cognitive-Solution.svg"></div>
                    <div>
                        <h4>Cognitive Computing</h4>
                        <p>Make medical data more accessible to the patients for a better organised patient care.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="icon-block">
                    <!--<span class="EandEIcon productEngg"></span>-->
                    <div><img src="assets/img/demo/solution-icons/ML-data-science-actionable-insights.svg"></div>
                    <div>
                        <h4>ML and data science for actionable insights</h4>
                        <p>Provide precision medicine to the patient by studying insights from the patient’s medical records.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="icon-block">
                    <!--<span class="EandEIcon cloudCons"></span>-->
                    <div><img src="assets/img/demo/solution-icons/AI-assisted-radiology-pathology.svg"></div>
                    <div>
                        <h4>AI-assisted radiology and pathology</h4>
                        <p>Deliver a faster cure by analysing data from pathology and radiology labs with AI algorithms.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="bottom-banner white-section padding-wrap">
  <div class="container">
    <div class="row align-items-center justify-content-center">
      <div class="col-md-6">
        <h4>Enrich your Business Operations with AI Solutions</h4>
        <p class="mb-0">Talk to our experts now</p>
      </div>
      <div class="form-group col-md-3 mb-2">
        <input type="text" id="email-profitability" class="form-control req" name="email" placeholder="Your Email">
        <span id="email-profitability-error" class="color-red font-size-12"></span>
        <!-- <label>Your Email</label> -->
      </div>
      <div class="col-md-3 text-lg-right text-md-center xs-mt-4">
        <a href="javascript:void(0);" class="btn btn-custom" id="id-contactus-btn-profitability"> Get Started <span class="btn__bg"><span> Get Started </span></span></a>
      </div>    </div>
  </div>
</div>
<div class="padding-wrap pb-5 bg-xbyte" id="industries">
  <div class="container mb-5">
    <div class="row justify-content-center">
      <div class="col-md-9 text-center">
        <h2 class="title mb-3 mt-5">Industries We Serve</h2>
        <p class="l">We’ve had the privilege to work extensively across a wide range of industries, solving critical problems and delighting end-users with our engaging mobile apps.</p>
      </div>
    </div>
  </div>
  <div class="container">
    <ul class="hover-box">
      <li>
        <div class="hover-grid">
          <div class="static"> <span class="dem1"></span>
            <img src="assets/img/demo/health-fitness.png" alt="">
            <h6 class="text-x">AI & ML in Health & Fitness</h6>
          </div>
          <div class="on-hover">
            <p>Telemedicine</p><hr>
              Digital Wellness<hr>
              Drug Development<hr>
              Optimized Patient Recruitment for Clinical Trials<hr>
              Drug Development<hr>
              E-Health<p></p>
          </div>
        </div>
      </li>
      <li>
        <div class="hover-grid">
          <div class="static"> <span class="dem2"></span>
            <img src="assets/img/demo/education-elearning.png" alt="">
            <h6 class="text-x">AI & ML in Education & eLearning</h6>
          </div>
          <div class="on-hover">
            <p>Adaptive Learning Platform<br><hr>
              Digital Mentor Solution<br><hr>
              Smart Test Preparation Applications<br><hr>
              eLearning Platforms<br><hr>
              Feedback and scoring system<br><hr>
              Smart Content
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="hover-grid">
          <div class="static"> <span class="dem3"></span>
            <img src="assets/img/demo/retail.png" alt="">
            <h6 class="text-x">AI & ML in Retail & eCommerce</h6>
          </div>
          <div class="on-hover">
            <p>Order Fulfillment and Tracking<br><hr>
              Smart Inventory Management with AI<br><hr>
              Product Categorization<br><hr>
              IoT Analytics Platform<br><hr>
              Fraud Detection and Prevention<br><hr>
              Anomaly Detection
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="hover-grid">
          <div class="static"> <span class="dem4"></span>
            <img src="assets/img/demo/banking-finance-solution.png" alt="">
            <h6 class="text-x">AI & ML in Banking & Finance</h6>
          </div>
          <div class="on-hover">
            <p>Anomaly Detection<br><hr>
              Banking Process Management<br><hr>
              Indoor Positioning Platform<br><hr>
              Robotic Process Automation<br><hr>
              Natural Language Processing<br><hr>
              Algorithm based Marketing
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="hover-grid">
          <div class="static"> <span class="dem5"></span>
            <img src="assets/img/demo/transportation-logistics.png" alt="">
            <h6 class="text-x">AI & ML in Automotive</h6>
          </div>
          <div class="on-hover">
            <p>Traffic management<br><hr>
              IoT Analytics Platform<br><hr>
              Self-driving vehicles<br><hr>
              Monitoring weather conditions<br><hr>
              Detecting inconsistent supplier quality levels<br><hr>
              Preventative maintenance
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="hover-grid">
          <div class="static"> <span class="dem6"></span>
            <img src="assets/img/demo/travel-tourism.png" alt="">
            <h6 class="text-x">AI & ML in Travel & Tourism</h6>
          </div>
          <div class="on-hover">
            <p>Provide a personalized customer experience<br><hr>
              Automate customer support / ChatBot<br><hr>
              Manage travel disruption<br><hr>
              Data analysis and improved operations<br><hr>
              Intelligent travel assistants<br><hr>
              Recommendation engines
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="hover-grid">
          <div class="static"> <span class="dem7"></span>
            <img src="assets/img/demo/real-estate.svg" alt="">
            <h6 class="text-x">AI & ML in Real Estate</h6>
          </div>
          <div class="on-hover">
            <p>Predictive maintenance<br><hr>
              Analytics in building automation systems<br><hr>
              Enhanced data management<br><hr>
              IoT Analytics Platform<br><hr>
              From manual property appraisal to automated valuation<br><hr>
              Consumer Apps with machine based interfaces
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="hover-grid">
          <div class="static"> <span class="dem8"></span>
            <img src="assets/img/demo/media-entertainment.svg" alt="">
            <h6 class="text-x">AI & ML in Media & Entertainment</h6>
          </div>
          <div class="on-hover">
            <p>Metadata tagging<br><hr>
              Reporting automation<br><hr>
              Subtitle generation<br><hr>
              User Experience and Personalization<br><hr>
              Streaming Quality<br><hr>
              Search Optimization
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
<div class="bottom-banner white-section padding-wrap">
  <div class="container">
    <div class="row align-items-center justify-content-center">
      <div class="col-md-8">
        <h4>How much does it cost to build my Mobile App</h4>
      </div>
      <div class="col-md-4 text-right xs-mt-4">
        <a href="#form-xbyte" class="btn btn-custom"> Get Me Estimation <span class="btn__bg"><span> Get Me Estimation </span></span></a>
      </div>
    </div>
  </div>
</div>
<div class="padding-wrap pt-0" id="ourprocess">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h2 class="title mb-4">Our Strategic App Development Process</h2>
        <p class="lg-paragraph w-75 ml-auto mr-auto mb-5">We offer three different flexible engagement models that can help you take complete control of app development process. Each of our model leverages a result-oriented development process.</p>
      </div>
    </div>
    <div class="row  justify-content-center">
      <ul class="nav nav-tabs horizontal-tab" id="myTab" role="tablist">
        <li class="nav-item"> <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Fixed Cost</a>
        </li>
        <li class="nav-item"> <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Product Engineering</a>
        </li>
        <li class="nav-item"> <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Talent On Demand</a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div class="row pt-4 step-line">
            <div class="col-md-4">
              <div class="icon-block style-row">
                <div class="step-count"><span>01</span>
                </div>
                <div>
                  <h4>Discuss</h4>
                  <p>We understand your core vision by discussing your idea thoroughly with you or your internal teams.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-block style-row">
                <div class="step-count"><span>02</span>
                </div>
                <div>
                  <h4>Define</h4>
                  <p>Based on your inputs, we start building a detailed development roadmap that defines the scope and goals of the project.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-block style-row">
                <div class="step-count"><span>03</span>
                </div>
                <div>
                  <h4>Design</h4>
                  <p>Our expert UI/UX designers start creating wireframes and prototypes by leveraging best design and UX practices and approaches.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-block style-row">
                <div class="step-count"><span>04</span>
                </div>
                <div>
                  <h4>Develop</h4>
                  <p>Once the product design is finalized, our developers start building the solution and enriching each design element with required functionality and features.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-block style-row">
                <div class="step-count"><span>05</span>
                </div>
                <div>
                  <h4>Debug</h4>
                  <p>We thoroughly test each app or solution using automated and manual testing approaches to promise bug-free deployment.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-block style-row">
                <div class="step-count"><span>06</span>
                </div>
                <div>
                  <h4>Deploy</h4>
                  <p>Once we are satisfied with the performance and functionality of the solution, we move ahead with deployment and launch of the solution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <div class="row pt-4 step-line">
            <div class="col-md-4">
              <div class="icon-block style-row">
                <div class="step-count"><span>01</span>
                </div>
                <div>
                  <h4>Envisage</h4>
                  <p>When you hire resources from our talent pool, we begin exploring the possibility of success market analysis.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-block style-row">
                <div class="step-count"><span>02</span>
                </div>
                <div>
                  <h4>Excogitate</h4>
                  <p>Based on their research and your inputs, we start the brainstorming and ideation process to begin the development process.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-block style-row">
                <div class="step-count"><span>03</span>
                </div>
                <div>
                  <h4>Evaluate</h4>
                  <p>Our in-house research team performs various viability studies and feasibility analysis to evaluate the core product/app idea.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-block style-row">
                <div class="step-count"><span>04</span>
                </div>
                <div>
                  <h4>Engage</h4>
                  <p>If a development idea is worth it, we begin the process of designing, developing and testing the solution.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-block style-row">
                <div class="step-count"><span>05</span>
                </div>
                <div>
                  <h4>Establish</h4>
                  <p>After successful completion of the engagement stage, we take required steps to deploy the solution according to your growth plans.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-block style-row">
                <div class="step-count"><span>06</span>
                </div>
                <div>
                  <h4>Expand</h4>
                  <p>Once the solution is deployed, we take consistent efforts to scale, improve and expand the prospects according to the dynamic user expectations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <div class="row pt-4 step-line">
            <div class="col-md-4">
              <div class="icon-block style-row">
                <div class="step-count"><span>01</span>
                </div>
                <div>
                  <h4>Ideation</h4>
                  <p>We work closely with your internal teams to ideate a groundbreaking product idea based on your expectations and growth goals.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-block style-row">
                <div class="step-count"><span>02</span>
                </div>
                <div>
                  <h4>Identification</h4>
                  <p>Based on initial brainstorming and viability checks, we square on the best possible product development idea to kickstart the engineering process.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-block style-row">
                <div class="step-count"><span>03</span>
                </div>
                <div>
                  <h4>Initialization</h4>
                  <p>Our project managers and engineers coordinate to initiate the product engineering process with special focus on design and development.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-block style-row">
                <div class="step-count"><span>04</span>
                </div>
                <div>
                  <h4>Iterations</h4>
                  <p>Based on continuous user feedback on the product design and features, we perform required changes and iterations to bring a product closer to end-user expectations.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-block style-row">
                <div class="step-count"><span>05</span>
                </div>
                <div>
                  <h4>Inspection</h4>
                  <p>Our in-house testing and inspection team tests the developed product for performance, functionality and other issues to eliminate chances of breakdown.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon-block style-row">
                <div class="step-count"><span>06</span>
                </div>
                <div>
                  <h4>Introduction</h4>
                  <p>Once everything is refined, tested and ready-to-go, we take a diligent approach to introduce and launch the product for end-users.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="padding-wrap combo-slider pb-5" id="ourwork">
  <div class="container">
    <div class="row mb-5">
      <div class="col-md-12 text-center">
        <h2 class="title mb-3 mt-5">We’ve Built amazing Solutions. Discover our Past Projects!</h2>
        <p class="l">Confused about making a decision? Explore our recent projects, gauge our abilities as a leading development company and make an informed decision, today.</p>
      </div>
    </div>@include('slider')</div>
</div>
<div class="fixed-bottom-estimation mt-5"><a class="nav-link" href="" data-toggle="modal" data-target="#quickReach">Let's get started<i class="icon next"></i></a>
</div>


<div class="padding-wrap pt-0">
    <div class="container">
      <div class="row justify-content-center accordion-wrapper">
        <div class="col-md-12 text-center">                  
                  <h2 class="title mb-4">Frequently Asked Questions</h2>
                  <p class="lg-paragraph w-75 ml-auto mr-auto mb-5">We have compiled a number of the frequently asked questions (FAQs) from our users Check these Questions for better knowledge of the services and solutions which we are providing to our users.</p>
              </div>
        <div class="col-md-6">
          <ul class="accordion faq-toggle">
                  <li>
                    <a class="ac-title">How will I judge the success of the AI ML Healthcare App Development Solution?</a>
                    <div class="ac-content">
                      <p>It totally depends on your aim. Is it the number of downloads or or is it the revenue that you are capable of creating from your AI ML Healthcare App Development.</p>
                    </div>
                  </li>
                  <li>
                    <a class="ac-title">Can we set up a call to discuss my AI ML Healthcare App Solution idea?</a>
                    <div class="ac-content">
                      <p>Yes, we are open for a phone conversation or email to discuss your AI and Machine Learning Healthcare App ideas, whichever is more convenient for you.</p>
                    </div>
                  </li>
                  <li>
                    <a class="ac-title">Why Choose us for AI and ML Solution For Healthcare App Development?</a>
                    <div class="ac-content">
                      <p>As a leading AI ML Development company we have focused all our efforts in providing the clients with outstanding Healthcare Solutions as per requirements.</p>
                    </div>
                  </li>
                  <li>
                    <a class="ac-title">Do you also create app back-end for projects?</a>
                    <div class="ac-content">
                      <p>Yes, we develop a robust and scalable AI ML App back-end along with custom API, allowing you to easily manage the app process and control data access.</p>
                    </div>
                  </li>
              </ul>
        </div>
        <div class="col-md-6">
          <ul class="accordion faq-toggle">
                  <li>
                    <a class="ac-title">What are the Mobile Apps of AI in the medical sector?</a>
                    <div class="ac-content">
                      <p>AI Mobile Apps are ready to support healthcare experts with many tasks from administrative work to medical documentation and patient patient monitoring.</p>
                    </div>
                  </li>
                  <li>
                    <a class="ac-title">How is artificial intelligence (AI) used in the medical sector?</a>
                    <div class="ac-content">
                      <p>Medical Artificial Intelligence (AI) mainly uses computer techniques to perform healthcare diagnoses and assist new treatments.</p>
                    </div>
                  </li>
                  <li>
                    <a class="ac-title">How will AI ML  Healthcare Solution help doctors?</a>
                    <div class="ac-content">
                      <p>Primary care doctors can utilize AI ML Healthcare Solution to take their notes, analyze data with patients, and enter required data directly into EHR systems.</p>
                    </div>
                  </li>
                  <li>
                    <a class="ac-title">How is Machine Learning Solutionsused in the Healthcare Sector?</a>
                    <div class="ac-content">
                      <p>Machine Learning Solution can detect patterns of diseases and health conditions by analyzing many clinical records and other patient information.</p>
                    </div>
                  </li>
              </ul>
        </div>
      </div>
  </div>
</div>


<div class="padding-wrap bg-gray">
  <div class="container">
    <div class="row justify-content-center" id="form-xbyte">
      <div class="col-md-4">
        <div class="home-contact Pattern Pattern--vertical"></div>
        <h2 class="title mb-3">Drop us a line</h2>
        <p class="lg-paragraph mb-5">Harness the Benefits of Progressive Technologies for Your Business</p>
      </div>
      <div class="col-md-6">
        <form id="getstarted-section">
          <div class="form-row">
            <div class="form-group col-md-6">
              <input type="text" id="c-name1" class="form-control req" name="Name">
              <label>Your Name</label>
            </div>
            <div class="form-group col-md-6">
              <input type="text" id="c-email1" class="form-control req" name="Email">
              <label>Email</label>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input type="text" id="c-number1" class="form-control req" name="Number">
              <label>Contact Number</label>
            </div>
            <div class="form-group col-md-6">
              <input type="text" id="c-skype1" class="form-control" name="Skype">
              <label>Skype</label>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <textarea class="form-control req" id="c-description1" name="Description"></textarea>
              <label>Describe Your Project</label>
            </div>
          </div> <a href="javascript:void(0);" id="id-getstarted-btn" class="btn btn-custom" data-toggle="modal" data-target=""> Let's go! <span class="btn__bg"><span> Let's go! </span></span></a>
        </form>
      </div>
    </div>
  </div>
</div>@stop @section('script')
<!-- <script src="assets/js/glide.js"></script> -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.3/js/swiper.min.js'></script>
<script>
  var BASEURL =  window.location.origin+'/';
    
   // new Glide('.glide', {
   //    type: 'carousel',
   //    autoplay: 0,
   //    animationDuration: 300,
   //    animationTimingFunc: 'linear',
   //    perView: 1,
   //    peek: 250,
   //  breakpoints: {
   //    801: { peek: 0 }
   //  } 
   //  }).mount()
  
  
    $(document).ready(function(){
        var slidersContainer = document.querySelector('.sliders-container');
        var msNumbers = new MomentumSlider({
            el: slidersContainer,
            cssClass: 'ms--numbers',
            range: [1, 4],
            rangeContent: function (i) {
                return '0' + i;
            },
            style: {
                transform: [{scale: [0.4, 1]}],
                opacity: [0, 1]
            },
            interactive: false
        });
        var titles = [
            'MedTonic',
            'Viedy',
            'Spressio',
            'Terby Cab'
        ];
        var subtitles = [
            'Future of Healthcare and Wellness',
            'Watch Anytime and Anywhere',
            'Delivering Deliciousness',
            'When Success is a Smooth Ride'
        ];
      var tilteLink = [
            BASEURL+'development/XBSolutions/v1/on-demand-doctor-app-development.php',
            BASEURL+'development/XBSolutions/v1/on-demand-entertainment-app-development.php',
            BASEURL+'development/XBSolutions/v1/on-demand-food-delivery-app-development.php',
            BASEURL+'development/XBSolutions/v1/on-demand-taxi-app-development-company.php'
        ];
        var msTitles = new MomentumSlider({
            el: slidersContainer,
            cssClass: 'ms--titles',
            range: [0, 3],
            rangeContent: function (i) {
                return '<h3>'+ titles[i] +'</h3>' + '<p>'+ subtitles[i] +'</p>';
            },
            vertical: true,
            reverse: true,
            style: {
                opacity: [0, 1]
            },
            interactive: false
        });
        var msLinks = new MomentumSlider({
            el: slidersContainer,
            cssClass: 'ms--links',
            range: [0, 3],
            rangeContent: function (i) {
                return '<a href="'+ tilteLink[i] +'" class="btn btn-custom"> View Case <span class="btn__bg"><span> View Case </span></span></a>';
            },
            vertical: true,
            interactive: false
        });
        var pagination = document.querySelector('.pagination');
        var paginationItems = [].slice.call(pagination.children);
        var msImages = new MomentumSlider({
            el: slidersContainer,
            cssClass: 'ms--images',
            range: [0, 3],
            rangeContent: function () {
                return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>';
            },
            sync: [msNumbers, msTitles, msLinks],
            style: {
                '.ms-slide__image': {
                    transform: [{scale: [1.5, 1]}],
                    opacity: [0.15, 1]
                }
            },
            change: function(newIndex, oldIndex) {
                if (typeof oldIndex !== 'undefined') {
                    paginationItems[oldIndex].classList.remove('pagination__item--active');
                }
                paginationItems[newIndex].classList.add('pagination__item--active');
            }
        });
        pagination.addEventListener('click', function(e) {
            if (e.target.matches('.pagination__button')) {
                var index = paginationItems.indexOf(e.target.parentNode);
                msImages.select(index);
            }
        });
    });
</script>
<script type="text/javascript">
  var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      speed: 1000,
      autoplay: {
        delay: 5000,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
</script>
@stop