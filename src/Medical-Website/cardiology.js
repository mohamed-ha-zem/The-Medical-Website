
import heart from "./Images/—Pngtree—red heart_20308205.png"
import mainImage from "./Images/image1opacity0.png";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from "react-i18next";
import "./i18n";

export default function Cardiology(){
    const {t , i18n} = useTranslation();
    return(
            <div>
                <div className="cardiology">
                    <div>
                    <h2 className="pageWord" style={{ margin: "30px auto 10px" }}>{t('home.home')}</h2>
                    <div className="row header">
                        <div className="col" style={{ margin: "30px 10px 30px 10px", position: "relative", padding: "0" }}>
                            <p className="pWord">{t('home.healthCareSolution')}</p>
                            <h2 className="importantWord" style={{ marginBottom: "40px" }}>{t('home.protectHealth')}</h2>
                            <div className="button-group">
                                <button className="btn-main">{t('home.readMore')}</button>
                            </div>
                        </div>
                        <div className="col headerImage" style={{ position: "relative" }}>
                            <img src={heart} className="img-fluid rounded-5 mainImage" alt="Healthcare" />
                            <div className="square"></div>
                        </div>
                    </div>

                    <div className="features-section">
                        <h3 className="features-title">{t('home.whyChooseUs')}</h3>
                        <div className="features">
                            <div className="feature-item">
                                <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" />
                                <p>{t('home.experiencedDoctors')}</p>
                            </div>
                            <div className="feature-item">
                                <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" />
                                <p>{t('home.modernEquipment')}</p>
                            </div>
                            <div className="feature-item">
                                <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" />
                                <p>{t('home.comprehensiveServices')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        {/* <!-- Header --> */}
            <div class="header">
                <div class="container">
                    <div class="links">
                        <span class="span">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <ul>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Medical Cases</a></li>
                            <li><a href="#about">About the Heart</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {/* <!-- Landing Section --> */}
            <div class="landing">
                <div class="text">
                    <h1>Welcome</h1>
                    <p>We are here to provide accurate information about heart diseases and prevention methods.</p>
                </div>
            </div>
            
            {/* <!-- Future Section --> */}
            <div class="future">
                <div class="container">
                    <div class="box">
                        <i class="fa-solid fa-heart"></i>
                        <h2>What is Heart Disease?</h2>
                        <p>Learn about the causes, symptoms, and prevention methods to keep your heart healthy.</p>
                    </div>
                    <div class="box">
                        <i class="fa-solid fa-stethoscope"></i>
                        <h2>Diagnosis and Treatment</h2>
                        <p>Discover the latest diagnostic and treatment methods for heart diseases from trusted sources.</p>
                    </div>
                    <div class="box">
                        <i class="fa-solid fa-apple-whole"></i>
                        <h2>Healthy Lifestyle</h2>
                        <p>Find out how to keep your heart strong with proper nutrition and physical activity.</p>
                    </div>
                </div>
                <div class="box-shadow">
                    <div class="shadow"></div>
                </div>
            </div>
            
            {/* <!-- Services --> */}
            <div class="services">
                <div class="container">
                    <div class="text-area">
                        <h2 class="special-heading">Services</h2>
                        <p>Keep your heart healthy, start the change today</p>
                    </div>
                    <div class="content-services">
                        <div class="col">
                            <div class="srv">
                                <i class="fa-solid fa-heart-pulse"></i>
                                <div class="text">
                                    <h3>Medical Consultations</h3>
                                    <p>Get advice from specialists to monitor your heart health.</p>
                                </div>
                            </div>
                            <div class="srv">
                                <i class="fa-solid fa-dumbbell"></i>
                                <div class="text">
                                    <h3>Exercise Plans</h3>
                                    <p>Workout programs designed to improve heart health and reduce risks.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="srv">
                                <i class="fa-solid fa-apple-alt"></i>
                                <div class="text">
                                    <h3>Healthy Diet</h3>
                                    <p>Learn about heart-friendly foods and how to integrate them into your meals.</p>
                                </div>
                            </div>
                            <div class="srv">
                                <i class="fa-solid fa-heart-circle-plus"></i>
                                <div class="text">
                                    <h3>Heart Disease Prevention</h3>
                                    <p>Guidelines and tips to maintain heart health and prevent diseases.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <!-- Contact --> */}
            <div class="contact">
                <div class="container">
                    <div class="content-contact">
                        <h2 class="special-heading">Contact Us</h2>
                        <p>We are here to help you maintain your heart health</p>
                    </div>
                    <div class="free">
                        <h1>Reach out to us via email:</h1>
                        <h2>heartcare@example.com</h2>
                    </div>
                </div>
            </div>
        </div>

    )
}

