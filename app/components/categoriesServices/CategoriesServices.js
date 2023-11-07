'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import img1 from "../../../assets/img/1.png";
import img2 from "../../../assets/img/2.png";
import img3 from "../../../assets/img/3.png";
import img4 from "../../../assets/img/4.png";
import img5 from "../../../assets/img/5.png";
import img6 from "../../../assets/img/6.png";


const CategoriesServices = () => {
    return (
        <>
          <div className="padding-wrap home-page-sec bg-gray" id="dig-solutions">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="subtitle">Your choice of weapon</div>
                <h2 className="title">Take Your Business Higher with our End-to-end Digital Solutions</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">

                <div className="icon-block">
                    <div><Image src={img1} alt="Mobile Development" /></div>
                    <div>
                        <Link href="https://www.xbytesolutions.com/mobile-application-development-company.php">
                            <h4>Mobile Development</h4>
                        </Link>
                        <p>Create intuitive mobile applications for iOS/Android or go cross-platform with the help of
                            our development experts.</p>
                    </div>
                </div>

            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="icon-block">
                    <div><Image src={img2} alt="Web Development" /></div>
                    <div>
                        <Link href="https://www.xbytesolutions.com/web-development-company.php">
                            <h4>Web Development</h4>
                        </Link>
                        <p>Strengthen your online footprint with the help of a responsive and dynamic business or
                            eCommerce website.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="icon-block">
                    <div><Image src={img3} alt="Blockchain Development" /></div>
                    <div>
                        <Link href="https://www.xbytesolutions.com/blockchain-development-company.php">
                            <h4>Blockchain Development</h4>
                        </Link>
                        <p>Blockchain enables solutions like cryptocurrency development, wallet development, smart
                            contract &amp; multichain/hyper ledger solutions.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="icon-block">
                    <div><Image src={img4} alt="Progressive Web Application" /></div>
                    <div>
                        <Link href="https://www.xbytesolutions.com/progressive-web-application-development-company.php">
                            <h4>Progressive Web Application</h4>
                        </Link>
                        <p>Progressive web app development solutions to tech startups, global businesses and large-scale
                            enterprises.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="icon-block">
                    <div><Image src={img5} alt="eCommerce CMS" /></div>
                    <div>
                        <Link href="https://www.xbytesolutions.com/ecommerce-and-cms-development-company.php">
                            <h4>eCommerce &amp; CMS</h4>
                        </Link>
                        <p>eCommerce and CMS development experts follow best development practices to offer end-to-end
                            Magento, Shopify &amp; WordPress development solutions.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="icon-block">
                    <div><Image src={img6} alt="Digital Marketing" /></div>
                    <div>
                        <Link href="https://www.xbytesolutions.com/digital-marketing-company.php">
                            <h4>Digital Marketing</h4>
                        </Link>
                        <p>Promote your business online with result-oriented digital marketing strategies crafted by our
                            experts.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}
export default CategoriesServices;