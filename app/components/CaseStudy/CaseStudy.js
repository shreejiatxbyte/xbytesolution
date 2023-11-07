'use client'
import Link from "next/link"
import medtonicImg from "../../../assets/img/demo/Medtonic.jpg"
import Image from "next/image"
import medtonicIcon from "../../../assets/img/portfolio/icon1.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import visitTripImg from "../../../assets/img/demo/Visitrip.jpg"
import visitTripIcon from "../../../assets/img/Visitrip/Icons/icon-front.png"
import mobiPos from "../../../assets/img/mobipos/mobipos.webp"
import mobiPosIcon from "../../../assets/img/mobipos/mobipos-icon.svg"
import lectorImg from "../../../assets/img/lector/slider.webp"
import lectorIcon from "../../../assets/img/lector/icon.svg"
// import mobiPos from "../../../assets/img/mobipos/mobipos.webp"
// import mobiPos from "../../../assets/img/mobipos/mobipos.webp"
// import mobiPos from "../../../assets/img/mobipos/mobipos.webp"
// import mobiPos from "../../../assets/img/mobipos/mobipos.webp"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from "swiper/modules";
import { useParams } from "next/navigation"

const CaseStudy = () => {
    const params = useParams()
    

    return (
        <>
            <div className="padding-wrap combo-slider pt-0 mt-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12 text-center">
                            <div className="subtitle">Case Study</div>
                            <h2 className="title mb-0">That’s What Our Happy Clients Say</h2>
                        </div>
                    </div>
                    <div className="row">
                        <Swiper className="swiper-container gallery-top swiper-container-horizontal"
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={{
                                nextEl: '.custom-next', 
                                prevEl: '.custom-prev', 
                              }}                            modules={[Navigation]}
                        >
                            <div className="swiper-wrapper" style={{ transform: 'translate3d(-2680px, 0px, 0px)', transitionDuration: '0ms' }}><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3" style={{ width: "1340px" }}>
                                <div className="swiper-slide-container">
                                    <div className="work-slider">
                                        <div className="work-image pt-4"><Link href="https://www.xbytesolutions.com/pos-development-solutions.php"><Image src={mobiPos} alt="mobipos" /></Link></div>
                                        <div className="work-details">
                                            <div className="work-content">
                                                <Link href="https://www.xbytesolutions.com/pos-development-solutions.php">
                                                    <h2><Image src={mobiPosIcon} alt="mobipos-icon.svg" /> MobiPOS</h2>
                                                </Link>
                                                <h5>The only solution you will ever need to manage your retail store and make profits is now live for your portable device as well.</h5>
                                                <p>All retail stores out there – regardless of their market segments – require a powerful point of sale system that can optimize sales, conversions, billing and inventory management.</p>
                                            </div>
                                            <div className="work-testimonials">
                                                <blockquote>I've been working with X-Byte Enterprise Solutions for longer than two years at this point. Lots of obstacles and everyone was worked out expertly. Extremely happy with the result and the work they put in. Thanks</blockquote>

                                                <div className="testimonail-auther">

                                                    <b className="float-right">Nick N. Dunn</b><br />
                                                    <span className="float-right">CTO</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4  xs-mt-4">
                                                    <Link href="https://www.xbytesolutions.com/pos-development-solutions.php" className="btn btn-custom scrollSlow casebtn">View Case<span className="btn__bg"><span> View Case </span></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <SwiperSlide className="swiper-slide swiper-slide-prev" data-swiper-slide-index="0" style={{ width: "1340px" }}>
                                    <div className="swiper-slide-container">
                                        <div className="work-slider">
                                            <div className="work-image pt-4"><Link href="https://www.xbytesolutions.com/book-selling-ecommerce-app-development-company"><Image src={lectorImg} alt="assets/img/lector/slider.webp" /></Link></div>
                                            <div className="work-details">
                                                <div className="work-content">
                                                    <Link href="https://www.xbytesolutions.com/book-selling-ecommerce-app-development-company">
                                                        <h2><Image src={lectorIcon} alt="xbytesolutions.com/assets/img/lector/icon.svg" /> Lector</h2>
                                                    </Link>
                                                    <h5>Lector - Where Books Find You</h5>
                                                    <p>Bookstores are becoming a part of the digital landscape, with several companies creating eCommerce stores offering published books catering to the needs of book enthusiasts.</p>
                                                </div>
                                                <div className="work-testimonials">
                                                    <blockquote>My experience with X-Byte Enterprise Solutions has exceeded expectations. I needed an ecommerce solution, and that I got it.</blockquote>
                                                    <div className="testimonail-auther">
                                                        <b className="float-right">James Flockhart</b><br />
                                                        <span className="float-right">Director</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4  xs-mt-4">
                                                        <Link href="https://www.xbytesolutions.com/book-selling-ecommerce-app-development-company" className="btn btn-custom scrollSlow casebtn">View Case<span className="btn__bg"><span> View Case </span></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide swiper-slide-active" data-swiper-slide-index="1" style={{ width: "1340px" }}>
                                    <div className="swiper-slide-container">
                                        <div className="work-slider">
                                            <div className="work-image pt-4"><Link href="on-demand-doctor-app-development.php"><Image src={medtonicImg} alt="xbytesolutions.com/assets/img/portfolio/doc_banner2.png" /></Link></div>
                                            <div className="work-details">
                                                <div className="work-content">
                                                    <Link href="on-demand-doctor-app-development.php">
                                                        <h2><Image src={medtonicIcon} alt="xbytesolutions.com/assets/img/portfolio/icon1.png" /> MedTonic</h2>
                                                    </Link>
                                                    <h5>Digital Disruption, Future of Healthcare and Wellness</h5>
                                                    <p>MedTonic is a free medicinal services application that use you an entrance to top notch therapeutic administrations whenever it might suit you and fingertips.</p>
                                                </div>
                                                <div className="work-testimonials">
                                                    <blockquote>X-Byte Enterprise Solutions is an excellent partner, building the product to a high degree of quality and ensuring the business can be a success.</blockquote>
                                                    <div className="testimonail-auther">
                                                        <b className="float-right">Netal Walsh</b><br />
                                                        <span className="float-right">President</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4  xs-mt-4">
                                                        <Link href="on-demand-doctor-app-development.php" className="btn btn-custom scrollSlow casebtn">View Case<span className="btn__bg"><span> View Case </span></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide swiper-slide-next" data-swiper-slide-index="2" style={{ width: "1340px" }}>
                                    <div className="swiper-slide-container">
                                        <div className="work-slider">
                                            <div className="work-image pt-4"><Link href="on-demand-tour-and-travel-app-development-company.php"><Image src={visitTripImg} alt="xbytesolutions.com/assets/img/Visitrip/Icons/front.jpg" /></Link></div>
                                            <div className="work-details">
                                                <div className="work-content">
                                                    <Link href="on-demand-tour-and-travel-app-development-company.php">
                                                        <h2><Image src={visitTripIcon} alt="xbytesolutions.com/assets/img/Visitrip/Icons/icon-front.png" />VisiTrip</h2>
                                                    </Link>
                                                    <h5>The Best Rooms Are Just A Swipe Away</h5>
                                                    <p>Planning a getaway? Or are you finalizing that long-pending holiday? Well, regardless of what your plan is, your most preferred rooms are just a swipe away. </p>
                                                </div>
                                                <div className="work-testimonials">
                                                    <blockquote>The time distinction has required clear correspondence procedures, and X-Byte Enterprise Solutions has eagerly adjusted to explicit necessities . Their work is excellent, and you get more than what you paid for.</blockquote>
                                                    <div className="testimonail-auther">
                                                        <b className="float-right">ESTEBAN CASCANTE</b><br />
                                                        <span className="float-right">Marketing Head</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4  xs-mt-4">
                                                        <Link href="on-demand-tour-and-travel-app-development-company.php" className="btn btn-custom scrollSlow casebtn">View Case<span className="btn__bg"><span> View Case </span></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide" data-swiper-slide-index="3" style={{ width: "1340px" }}>
                                    <div className="swiper-slide-container">
                                        <div className="work-slider">
                                            <div className="work-image pt-4"><Link href="https://www.xbytesolutions.com/pos-development-solutions.php"><Image src={mobiPos} alt="mobipos" /></Link></div>
                                            <div className="work-details">
                                                <div className="work-content">
                                                    <Link href="https://www.xbytesolutions.com/pos-development-solutions.php">
                                                        <h2><Image src={mobiPosIcon} alt="mobipos-icon.svg" /> MobiPOS</h2>
                                                    </Link>
                                                    <h5>The only solution you will ever need to manage your retail store and make profits is now live for your portable device as well.</h5>
                                                    <p>All retail stores out there – regardless of their market segments – require a powerful point of sale system that can optimize sales, conversions, billing and inventory management.</p>
                                                </div>
                                                <div className="work-testimonials">
                                                    <blockquote>I've been working with X-Byte Enterprise Solutions for longer than two years at this point. Lots of obstacles and everyone was worked out expertly. Extremely happy with the result and the work they put in. Thanks</blockquote>
                                                    <div className="testimonail-auther">
                                                        <b className="float-right">Nick N. Dunn</b><br />
                                                        <span className="float-right">CTO</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4  xs-mt-4">
                                                        <Link href="https://www.xbytesolutions.com/pos-development-solutions.php" className="btn btn-custom scrollSlow casebtn">View Case<span className="btn__bg"><span> View Case </span></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </button> */}
        </>
    )
}
export default CaseStudy;