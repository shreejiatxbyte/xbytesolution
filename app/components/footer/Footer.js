"use client";
import Image from "next/image";
import Link from "next/link";
// import "../../../assets/css/custom.css";
// import "../../../assets/css/myCss.css";
import DCMA from "../../../assets/img/dmca_protected_sml_120n.png";
import iconBwSvg from "../../../assets/img/icon_bw.svg";
import award16 from "../../../assets/img/award-16.png";
import award17 from "../../../assets/img/award-17.png";
import award14 from "../../../assets/img/award-14.png";
import award11 from "../../../assets/img/award-11.png";
import award10 from "../../../assets/img/award-10.png";
import award1 from "../../../assets/img/award-1.png";
import facebook from "../../../assets/img/social-icons/facebook.svg";
import linkedin from "../../../assets/img/social-icons/linkedin.svg";
import twitter from "../../../assets/img/social-icons/twitter.svg";
import instagram from "../../../assets/img/social-icons/instagram.svg";
import tumblr from "../../../assets/img/social-icons/tumblr.svg";
import pinterest from "../../../assets/img/social-icons/pinterest.svg";
import dribbble from "../../../assets/img/social-icons/dribbble.svg";
import behance from "../../../assets/img/social-icons/behance.svg";

const Footer = () => {
  return (
    // <footer>
    //     <div className="container">
    //         <div className="row">
    //             <div className="col-md-12">
    //                 <div className="row">
    //                     <div className="col-md-12">
    //                         <div className="row">
    //                             <div className="col-md-3 col-sm-4 col-xs-12">
    //                                 <ul className="list-link list-type-none">
    //                                     <li className="title">Services</li>
    //                                     <li>
    //                                         <Link href="">Mobile App Development</Link>
    //                                     </li>
    //                                     <li>
    //                                         <Link href="">Web Development</Link>
    //                                     </li>
    //                                     <li>
    //                                         <Link href="">Blockchain Development</Link>
    //                                     </li>
    //                                     <li>
    //                                         <Link href="">IoT Development</Link>
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                             <div className="col-md-3 col-sm-4 col-xs-12">
    //                                 <ul className="list-link list-type-none">
    //                                     <li className="title">Solutions</li>
    //                                     <li>
    //                                         <Link href="">AI & ML Real Estate</Link>
    //                                     </li>
    //                                     <li>
    //                                         <Link href="">IoT Healthcare</Link>
    //                                     </li>
    //                                     <li>
    //                                         <Link href="">AR & VR Retail & Ecommerce</Link>
    //                                     </li>
    //                                     <li>
    //                                         <Link href="">AI & ML Transportation</Link>
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                             <div className="col-md-3 col-sm-4 col-xs-12">
    //                                 <ul className="list-link list-type-none">
    //                                     <li className="title">Solutions</li>
    //                                     <li>
    //                                         <Link href="">IoT Industrial</Link>
    //                                     </li>
    //                                     <li>
    //                                         <Link href="">AI & ML Entertainment</Link>
    //                                     </li>
    //                                     <li>
    //                                         <Link href="">IoT Smart City</Link>
    //                                     </li>
    //                                     <li>
    //                                         <Link href="">AI & ML Travel</Link>
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                             <div className="col-md-3 col-sm-4 col-xs-12">
    //                                 <ul className="list-link list-type-none">
    //                                     <li className="title">Contact Us</li>
    //                                     <li>
    //                                         <Link href="tel:+18322517311">+1 (832) 251 7311</Link>
    //                                     </li>
    //                                     <li>
    //                                         <Link href="mailto:sales@xbytesolutions.com">
    //                                             sales@xbytesolutions.com
    //                                         </Link>
    //                                     </li>
    //                                 </ul>
    //                                 <div className="companyprofile-link">
    //                                     <Link href="">
    //                                         <span>
    //                                             <svg
    //                                                 xmlns="http://www.w3.org/2000/svg"
    //                                                 xmlnsXlink="http://www.w3.org/1999/xlink"
    //                                                 version="1.1"
    //                                                 width="512"
    //                                                 height="512"
    //                                                 x="0"
    //                                                 y="0"
    //                                                 viewBox="0 0 512 512"
    //                                                 xmlSpace="preserve"
    //                                             >
    //                                                 <g>
    //                                                     <g xmlns="http://www.w3.org/2000/svg">
    //                                                         <path
    //                                                             d="m127.741 209h-31.741c-3.986 0-7.809 1.587-10.624 4.41s-4.389 6.651-4.376 10.638l.221 113.945c0 8.284 6.716 15 15 15s15-6.716 15-15v-34.597c6.133-.031 12.685-.058 16.52-.058 26.356 0 47.799-21.16 47.799-47.169s-21.443-47.169-47.799-47.169zm0 64.338c-3.869 0-10.445.027-16.602.059-.032-6.386-.06-13.263-.06-17.228 0-3.393-.017-10.494-.035-17.169h16.696c9.648 0 17.799 7.862 17.799 17.169s-8.15 17.169-17.798 17.169z"
    //                                                             fill="#e61f2d"
    //                                                             data-original="#000000"
    //                                                             style={{ fill: "#e61f2d" }}
    //                                                             className=""
    //                                                         ></path>
    //                                                         <path
    //                                                             d="m255.33 209h-31.33c-3.983 0-7.803 1.584-10.617 4.403s-4.391 6.642-4.383 10.625c0 .001.223 110.246.224 110.646.015 3.979 1.609 7.789 4.433 10.592 2.811 2.79 6.609 4.354 10.567 4.354h.057c.947-.004 23.294-.089 32.228-.245 33.894-.592 58.494-30.059 58.494-70.065-.001-42.054-23.981-70.31-59.673-70.31zm0.655 110.38c-3.885.068-10.569.123-16.811.163-.042-13.029-.124-67.003-.147-80.543h16.303c27.533 0 29.672 30.854 29.672 40.311 0 19.692-8.972 39.719-29.017 40.069z"
    //                                                             fill="#e61f2d"
    //                                                             data-original="#000000"
    //                                                             style={{ fill: "#e61f2d" }}
    //                                                             className=""
    //                                                         ></path>
    //                                                         <path
    //                                                             d="m413.863 237.842c8.284 0 15-6.716 15-15s-6.716-15-15-15h-45.863c-8.284 0-15 6.716-15-15v113.158c0 8.284 6.716 15 15 15s15-6.716 15-15v-42.65h27.22c8.284 0 15-6.716 15-15s-6.716-15-15-15h-27.22v-25.508z"
    //                                                             fill="#e61f2d"
    //                                                             data-original="#000000"
    //                                                             style={{ fill: "#e61f2d" }}
    //                                                             className=""
    //                                                         ></path>
    //                                                         <path
    //                                                             d="m458 145h-11v-4.279c0-19.282-7.306-37.607-20.572-51.601l-62.305-65.721c-14.098-14.87-33.936-23.399-54.428-23.399h-199.695c-24.813 0-45 20.187-45 45v100h-11c-24.813 0-45 20.187-45 45v180c0 24.813 20.187 45 45 45h11v52c0 24.813 20.187 45 45 45h292c24.813 0 45-20.187 45-45v-52h11c-24.813 0-45 20.187-45-45v-180c0-24.813-20.187-45-45-45zm-363-100c0-8.271 6.729-15 15-15h199.695c12.295 0 24.198 5.117 32.657 14.04l62.305 65.721c7.96 8.396 12.343 19.391 12.343 30.96v4.279h-322zm322 422c0 8.271-6.729 15-15 15h-292c-8.271 0-15-6.729-15-15v-52h322zm56-97c0 8.271-6.729 15-15 15h-404c-8.271 0-15-6.729-15-15v-180c0-8.271 6.729-15 15-15h404c-8.271 0-15 6.729 15 15z"
    //                                                             fill="#e61f2d"
    //                                                             data-original="#000000"
    //                                                             style={{ fill: "#e61f2d" }}
    //                                                             className=""
    //                                                         ></path>
    //                                                     </g>
    //                                                 </g>
    //                                             </svg>
    //                                         </span>
    //                                         Company Profile
    //                                     </Link>
    //                                 </div>

    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="row mt-5">
    //             <div className="col-sm-4 d-flex align-items-center">
    //                 <div className="d-flex align-items-center">
    //                     <Image
    //                         className="iconBwSvg"
    //                         src={iconBwSvg}
    //                         style={{ width: "30px" }}
    //                         alt="Image not Found"
    //                     />
    //                     <p className="small mute m-0">©2012-2023 X-Byte Enterprise Solutions, All rights reserved.</p>
    //                 </div>
    //             </div>
    //             <div className="col-sm-8 d-flex align-items-center justify-content-end">

    //                 <div className="footDMCA">
    //                     <Link
    //                         href="https://www.dmca.com/site-report/www.xbytesolutions.com"
    //                         target="_blank"
    //                     >
    //                         <Image
    //                             alt="dmca"
    //                             className="lozad"
    //                             src={DCMA}
    //                         />
    //                     </Link>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </footer>
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-3 col-sm-4 col-xs-12">
                    <ul className="list-link list-type-none">
                      <li className="title">Services</li>
                      <li>
                        <Link href="/mobile-application-development">
                          Mobile App Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/web-development">Web Development</Link>
                      </li>
                      <li>
                        <Link href="/blockchain-development">
                          Blockchain Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/iot-app-development">IoT Development</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-4 col-xs-12">
                    <ul className="list-link list-type-none">
                      <li className="title">Solutions</li>
                      <li>
                        <Link href="/ai-ml-solutions-for-real-estate">
                          AI & ML Real Estate
                        </Link>
                      </li>
                      <li>
                        <Link href="/iot-healthcare-solutions">IoT Healthcare</Link>
                      </li>
                      <li>
                        <Link href="/ar-vr-solutions-for-retail-ecommerce">
                          AR & VR Retail & Ecommerce
                        </Link>
                      </li>
                      <li>
                        <Link href="/ai-ml-solutions-for-transportation">
                          AI & ML Transportation
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-4 col-xs-12">
                    <ul className="list-link list-type-none">
                      <li className="title">Solutions</li>
                      <li>
                        <Link href="/industrial-iot-solutions">IoT Industrial</Link>
                      </li>
                      <li>
                        <Link href="/ai-ml-solutions-for-entertainment">
                          AI & ML Entertainment
                        </Link>
                      </li>
                      <li>
                        <Link href="/iot-smart-city-solutions">IoT Smart City</Link>
                      </li>
                      <li>
                        <Link href="/ai-ml-solutions-for-travel">AI & ML Travel</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-4 col-xs-12">
                    <ul className="list-link list-type-none">
                      <li className="title">Contact Us</li>
                      <li>
                        <Link href="tel:+18322517311">+1 (832) 251 7311</Link>
                      </li>
                      <li>
                        <Link href="mailto:sales@xbytesolutions.com">
                          sales@xbytesolutions.com
                        </Link>
                      </li>
                    </ul>
                    <div className="companyprofile-link">
                      <Link href="/company-profile.pdf" target="_blank">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlnssvgjs="http://svgjs.com/svgjs"
                            version="1.1"
                            width="512"
                            height="512"
                            x="0"
                            y="0"
                            viewBox="0 0 512 512"
                            style={{ enableBackground: "new 0 0 512 512" }}
                            xmlSpace="preserve"
                            className=""
                          >
                            <g>
                              <g xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="m127.741 209h-31.741c-3.986 0-7.809 1.587-10.624 4.41s-4.389 6.651-4.376 10.638l.221 113.945c0 8.284 6.716 15 15 15s15-6.716 15-15v-34.597c6.133-.031 12.685-.058 16.52-.058 26.356 0 47.799-21.16 47.799-47.169s-21.443-47.169-47.799-47.169zm0 64.338c-3.869 0-10.445.027-16.602.059-.032-6.386-.06-13.263-.06-17.228 0-3.393-.017-10.494-.035-17.169h16.696c9.648 0 17.799 7.862 17.799 17.169s-8.15 17.169-17.798 17.169z"
                                  fill="#e61f2d"
                                  data-original="#000000"
                                  style={{}}
                                  className=""
                                />
                                <path
                                  d="m255.33 209h-31.33c-3.983 0-7.803 1.584-10.617 4.403s-4.391 6.642-4.383 10.625c0 .001.223 110.246.224 110.646.015 3.979 1.609 7.789 4.433 10.592 2.811 2.79 6.609 4.354 10.567 4.354h.057c.947-.004 23.294-.089 32.228-.245 33.894-.592 58.494-30.059 58.494-70.065-.001-42.054-23.981-70.31-59.673-70.31zm.655 110.38c-3.885.068-10.569.123-16.811.163-.042-13.029-.124-67.003-.147-80.543h16.303c27.533 0 29.672 30.854 29.672 40.311 0 19.692-8.972 39.719-29.017 40.069z"
                                  fill="#e61f2d"
                                  data-original="#000000"
                                  style={{}}
                                  className=""
                                />
                                <path
                                  d="m413.863 237.842c8.284 0 15-6.716 15-15s-6.716-15-15-15h-45.863c-8.284 0-15 6.716-15 15v113.158c0 8.284 6.716 15 15 15s15-6.716 15-15v-42.65h27.22c8.284 0 15-6.716 15-15s-6.716-15-15-15h-27.22v-25.508z"
                                  fill="#e61f2d"
                                  data-original="#000000"
                                  style={{}}
                                  className=""
                                />
                                <path
                                  d="m458 145h-11v-4.279c0-19.282-7.306-37.607-20.572-51.601l-62.305-65.721c-14.098-14.87-33.936-23.399-54.428-23.399h-199.695c-24.813 0-45 20.187-45 45v100h-11c-24.813 0-45 20.187-45 45v180c0 24.813 20.187 45 45 45h11v52c0 24.813 20.187 45 45 45h292c24.813 0 45-20.187 45-45v-52h11c24.813 0 45-20.187 45-45v-180c0-24.813-20.187-45-45-45zm-363-100c0-8.271 6.729-15 15-15h199.695c12.295 0 24.198 5.117 32.657 14.04l62.305 65.721c7.96 8.396 12.343 19.391 12.343 30.96v4.279h-322zm322 422c0 8.271-6.729 15-15 15h-292c-8.271 0-15-6.729-15-15v-52h322zm56-97c0 8.271-6.729 15-15 15h-404c-8.271 0-15-6.729-15-15v-180c0-8.271 6.729-15 15-15h404c8.271 0 15 6.729 15 15z"
                                  fill="#e61f2d"
                                  data-original="#000000"
                                  style={{}}
                                  className=""
                                />
                              </g>
                            </g>
                          </svg>
                        </span>
                        Company Profile
                      </Link>
                    </div>
                    {/* <div className="social-icons mt-3">
                      <Link
                        href="https://www.facebook.com/X-Byte-Enterprise-Solutions-1820086854912567"
                        target="_blank"
                      >
                        <Image
                          alt="facebook"
                          className="lozad"
                          src={facebook}
                        />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/company/xbytesolutions"
                        target="_blank"
                      >
                        <Image
                          alt="linkedin"
                          className="lozad"
                          src={linkedin}
                        />
                      </Link>
                      <Link
                        href="https://twitter.com/xbyte_solutions"
                        target="_blank"
                      >
                        <Image alt="twitter" className="lozad" src={twitter} />
                      </Link>
                      <Link
                        href="https://www.instagram.com/xbytesolutions/"
                        target="_blank"
                      >
                        <Image
                          alt="instagram"
                          className="lozad"
                          src={instagram}
                        />
                      </Link>
                      <Link
                        href="https://xbytesolutions.tumblr.com/"
                        target="_blank"
                      >
                        <Image alt="tumblr" className="lozad" src={tumblr} />
                      </Link>
                      <Link
                        href="https://pinterest.com/xbytesolutions"
                        target="_blank"
                      >
                        <Image
                          alt="pinterest"
                          className="lozad"
                          src={pinterest}
                        />
                      </Link>
                      <Link
                        href="https://dribbble.com/xbyte_solutions"
                        target="_blank"
                      >
                        <Image
                          alt="dribbble"
                          className="lozad"
                          src={dribbble}
                        />
                      </Link>
                      <Link
                        href="https://www.behance.net/xbyte_solutions"
                        target="_blank"
                      >
                        <Image alt="behance" className="lozad" src={behance} />
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-4 d-flex align-items-center">
            <div className="d-flex align-items-center">
              <Image
                src={iconBwSvg}
                style={{ width: "30px" }}
                alt="xbytesolutions.com/assets/img/icon_bw.svg"
              />
              <p className="small mute m-0">
                ©2012-2023 X-Byte Enterprise Solutions, All rights reserved.
              </p>
            </div>
          </div>
          <div className="col-sm-8 d-flex align-items-center justify-content-end">
            <div className="partners">
              <Link href="/certifications">
                <Image
                  src={award16}
                  style={{ height: "26px", width: "fit-content" }}
                  alt="Image not Found"
                />
              </Link>
              <Link href="/certifications">
                <Image
                  src={award17}
                  style={{ height: "26px", width: "fit-content" }}
                  alt="Image not Found"

                />
              </Link>
              <Link href="/certifications">
                <Image
                  src={award14}
                  style={{ height: "26px", width: "fit-content" }}
                  alt="Image not Found"

                />
              </Link>
              <Link href="/certifications">
                <Image
                  src={award11}
                  style={{ height: "26px", width: "fit-content" }}
                  alt="Image not Found"

                />
              </Link>
              <Link href="/certifications">
                <Image
                  src={award10}
                  style={{ height: "26px", width: "fit-content" }}
                  alt="Image not Found"

                />
              </Link>
              <Link href="/certifications">
                <Image
                  src={award1}
                  style={{ height: "26px", width: "fit-content" }}
                  alt="Image not Found"

                />
              </Link>
            </div>
            <div className="footDMCA">
              <Link
                href="https://www.dmca.com/site-report/www.xbytesolutions.com"
                target="_blank"
              >
                <Image alt="dmca" className="lozad" src={DCMA}  />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
