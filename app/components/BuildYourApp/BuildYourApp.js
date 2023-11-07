"use client";
import Image from "next/image";
import Link from "next/link";
import apple from "../../../assets/img/techstack/apple.svg";
import android from "../../../assets/img/techstack/android.svg";
import reactnative from "../../../assets/img/techstack/react.svg";
import flutter from "../../../assets/img/techstack/flutter.svg";
import ionic from "../../../assets/img/techstack/ionic.svg";
import swift from "../../../assets/img/techstack/swift.svg";
import kotlin from "../../../assets/img/techstack/kotlin.svg";
import objective from "../../../assets/img/techstack//objective-c.svg";
import phonegap from "../../../assets/img/techstack/phonegap.svg";
import titanium from "../../../assets/img/techstack/titanium.png";
import xamarin from "../../../assets/img/techstack/xamarin.svg";

import angularjs from "../../../assets/img/techstack/angular-js.svg";
import reactjs from "../../../assets/img/techstack/react.svg";
import typescript from "../../../assets/img/techstack/typescript.svg";
import vue from "../../../assets/img/techstack/vue.svg";
import wpf from "../../../assets/img/techstack/wpf.svg";
import html5 from "../../../assets/img/techstack/html5.svg";

import mongodb from "../../../assets/img/techstack/mongodb.svg";
import mysql from "../../../assets/img/techstack/mysql.svg";
import mssql from "../../../assets/img/techstack/ms-sql.svg";
import firebase from "../../../assets/img/techstack/firebase.svg";
import realm from "../../../assets/img/techstack/realm.svg";
import awsdynamodb from "../../../assets/img/techstack/aws-dynamodb.svg";
import oracle from "../../../assets/img/techstack/oracle.svg";
import postgresql from "../../../assets/img/techstack/postgresql.svg";
import redis from "../../../assets/img/techstack/redis.svg";

import php from "../../../assets/img/techstack/php.svg";
import java from "../../../assets/img/techstack/java.svg";
import net from "../../../assets/img/techstack/net.svg";
import nodejs from "../../../assets/img/techstack/nodejs.svg";
import rubyonrails from "../../../assets/img/techstack/ruby-on-rails.svg";
import python from "../../../assets/img/techstack/python.svg";

import drupal from "../../../assets/img/techstack/drupal.svg";
import joomla from "../../../assets/img/techstack/joomla.svg";
import wordpress from "../../../assets/img/techstack/wordpress.svg";
import magento from "../../../assets/img/techstack/magento.svg";
import shopify from "../../../assets/img/techstack/shopify.svg";

import aws from "../../../assets/img/techstack/aws.svg";
import googlecloud from "../../../assets/img/techstack/google-cloud.svg";
import gradle from "../../../assets/img/techstack/gradle.svg";
import jenkins from "../../../assets/img/techstack/jenkins.svg";
import appium from "../../../assets/img/techstack/appium.svg";
import selenium from "../../../assets/img/techstack/selenium.svg";
import { useState } from "react";

const BuildYourApp = () => {
  const [activeTab, setActiveTab] = useState("tech-1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="service-hero-wrapper mb-0 mt-6">
        <div className="container-fluid container-fluid1 mt-6">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="title">Build your apps for any platform</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="vertical-tab horizontal-tab">
                <div
                  className="nav nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <div
                    className={`nav-link ${
                      activeTab === "tech-1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("tech-1")}
                  >
                    <span>
                      <span>Mobile</span>
                    </span>
                  </div>
                  <div
                    className={`nav-link ${
                      activeTab === "tech-2" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("tech-2")}
                  >
                    <span>
                      <span>Front End</span>
                    </span>
                  </div>
                  <div
                    className={`nav-link ${
                      activeTab === "tech-3" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("tech-3")}
                  >
                    <span>
                      <span>Database</span>
                    </span>
                  </div>
                  <div
                    className={`nav-link ${
                      activeTab === "tech-4" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("tech-4")}
                  >
                    <span>
                      <span>Backend</span>
                    </span>
                  </div>
                  <div
                    className={`nav-link ${
                      activeTab === "tech-5" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("tech-5")}
                  >
                    <span>
                      <span>CMS</span>
                    </span>
                  </div>
                    <div
                      className={`nav-link ${
                        activeTab === "tech-6" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("tech-6")}
                    >
                      <span>Infra and DevOps</span>
                    </div>
                </div>
                <div className="tab-content tech-use" id="v-pills-tabContent">
                  <div
                    className={`tab-pane fade ${
                      activeTab === "tech-1" ? "show active" : ""
                    }`}
                    id="tech-1"
                    role="tabpanel"
                  >
                    <ul className="tech-stack dark">
                      <li>
                        <Image src={apple}  alt="apple"/>
                        <span>iOS</span>
                      </li>
                      <li>
                        <Image src={android} alt="android"/>
                        <span>Android</span>
                      </li>
                      <li>
                        <Image src={reactnative} alt="reactnative"/>
                        <span>React Native</span>
                      </li>
                      <li>
                        <Image src={flutter} alt="flutter" />
                        <span>Flutter</span>
                      </li>
                      <li>
                        <Image src={ionic} alt="ionic"/>
                        <span>Ionic</span>
                      </li>
                      <li>
                        <Image src={swift} alt="swift"/>
                        <span>Swift</span>
                      </li>
                      <li>
                        <Image src={kotlin} alt="kotlin"/>
                        <span>Kotlin</span>
                      </li>
                      <li>
                        <Image src={objective} alt="objective"/>
                        <span>ObjectiveC</span>
                      </li>
                      <li>
                        <Image src={phonegap} alt="phonegap"/>
                        <span>Phone Gap</span>
                      </li>
                      <li>
                        <Image src={titanium} alt="titanium" />
                        <span>Titanium</span>
                      </li>
                      <li>
                        <Image src={xamarin} alt="xamarin" />
                        <span>Xamarin</span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab === "tech-2" ? "show active" : ""
                    }`}
                    id="tech-2"
                    role="tabpanel"
                  >
                    <ul className="tech-stack dark">
                      <li>
                        <Image src={angularjs} alt="angularjs"/>
                        <span>Angular JS</span>
                      </li>
                      <li>
                        <Image src={reactjs} alt="reactjs"/>
                        <span>React Js</span>
                      </li>
                      <li>
                        <Image src={typescript} alt="typescript"/>
                        <span>TypeScript</span>
                      </li>
                      <li>
                        <Image src={vue} alt="vue"/>
                        <span>Vue</span>
                      </li>
                      <li>
                        <Image src={wpf} alt="wpf"/>
                        <span>WPF</span>
                      </li>
                      <li>
                        <Image src={html5} alt="html5"/>
                        <span>HTML5</span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab === "tech-3" ? "show active" : ""
                    }`}
                    id="tech-3"
                    role="tabpanel"
                  >
                    <ul className="tech-stack dark">
                      <li>
                        <Image src={mongodb} alt="mongodb"/>
                        <span>Mongo DB</span>
                      </li>
                      <li>
                        <Image src={mysql} alt="mysql"/>
                        <span>MySQL</span>
                      </li>
                      <li>
                        <Image src={mssql} alt="mssql"/>
                        <span>MsSQL</span>
                      </li>
                      <li>
                        <Image src={firebase} alt="firebase"/>
                        <span>Firebase</span>
                      </li>
                      <li>
                        <Image src={realm} alt="realm"/>
                        <span>Realm</span>
                      </li>
                      <li>
                        <Image src={awsdynamodb} alt="awsdynamodb"/>
                        <span>DynamoDB</span>
                      </li>
                      <li>
                        <Image src={oracle} alt="oracle"/>
                        <span>Oracle</span>
                      </li>
                      <li>
                        <Image src={postgresql} alt="postgresql"/>
                        <span>PostgreSQL</span>
                      </li>
                      <li>
                        <Image src={redis} alt="redis"/>
                        <span>Redis</span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab === "tech-4" ? "show active" : ""
                    }`}
                    id="tech-4"
                    role="tabpanel"
                  >
                    <ul className="tech-stack dark">
                      <li>
                        <Image src={php} alt="php"/>
                        <span>PHP</span>
                      </li>
                      <li>
                        <Image src={java} alt="java"/>
                        <span>Java</span>
                      </li>
                      <li>
                        <Image src={net} alt="net"/>
                        <span>.NET</span>
                      </li>
                      <li>
                        <Image src={nodejs} alt="nodejs"/>
                        <span>Node.JS</span>
                      </li>
                      <li>
                        <Image src={rubyonrails} alt="rubyonrails"/>
                        <span>Rails</span>
                      </li>
                      <li>
                        <Image src={python} alt="python"/>
                        <span>Python</span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab === "tech-5" ? "show active" : ""
                    }`}
                    id="tech-5"
                    role="tabpanel"
                  >
                    <ul className="tech-stack dark">
                      <li>
                        <Image src={drupal} alt="drupal"/>
                        <span>Drupal</span>
                      </li>
                      <li>
                        <Image src={joomla} alt="joomla"/>
                        <span>Joomla</span>
                      </li>
                      <li>
                        <Image src={wordpress} alt="wordpress"/>
                        <span>Wordpress</span>
                      </li>
                      <li>
                        <Image src={magento} alt="magento"/>
                        <span>Magento</span>
                      </li>
                      <li>
                        <Image src={shopify} alt="shopify"/>
                        <span>Shopify</span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab === "tech-6" ? "show active" : ""
                    }`}
                    id="tech-6"
                    role="tabpanel"
                  >
                    <ul className="tech-stack dark">
                      <li>
                        <Image src={aws} alt="aws"/>
                        <span>AWS</span>
                      </li>
                      <li>
                        <Image src={googlecloud} alt="googlecloud"/>
                        <span>Google Cloud</span>
                      </li>
                      <li>
                        <Image src={gradle} alt="gradle"/>
                        <span>Gradle</span>
                      </li>
                      <li>
                        <Image src={jenkins} alt="jenkins"/>
                        <span>Jenkins</span>
                      </li>
                      <li>
                        <Image src={appium} alt="appium"/>
                        <span>Appium</span>
                      </li>
                      <li>
                        <Image src={selenium} alt="selenium"/>
                        <span>Selenium</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
export default BuildYourApp;
