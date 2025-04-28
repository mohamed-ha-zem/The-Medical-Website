import image1 from "./Images/pexels-vidalbalielojrfotografia-3376799.jpg"
import image2 from "./Images/pexels-jonathanborba-3279203.jpg"
import image3 from './Images/pexels-shvetsa-4586994.jpg'
import profileImage from "./Images/a.png"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';
import calender from "./icons/time.png"

import { useTranslation } from "react-i18next"
import "./i18n"

export default function Latest(){
    const {t , i18n} = useTranslation()
    return(
        <div>
            <h2 className="pageWord">{t("Latest.latestNews")}</h2>
            <div className="Latest">
                <div className="row cards">
                    <div className="card">
                        <div className="serviceImage">
                            <div>
                            <img src={image1} className="icon" alt="article image 1"/>
                            </div>
                            <div className="profile">
                            <img src={profileImage} alt="profile" />
                            <p style={{ margin: "0" }}>{t("Latest.articles.0.author")}</p>
                            <div style={{ display: "flex" }}>
                                <span><img src={calender} style={{ width: "20px", marginLeft: "9px" }} alt="calendar" /></span>
                                {t("Latest.articles.0.date")}
                            </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{t("Latest.articles.0.title")}</h2>
                            <div className="viewDiv">
                            <button className="view">{t("Latest.articles.0.buttonText")}</button>
                            <span className="right">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                            </div>
                        </div>
                    </div>
        
                    <div className="card">
                        <div className="serviceImage">
                            <div>
                            <img src={image2} className="icon" alt="article image 2"/>
                            </div>
                            <div className="profile">
                            <img src={profileImage} alt="profile" />
                            <p style={{ margin: "0" }}>{t("Latest.articles.1.author")}</p>
                            <div style={{ display: "flex" }}>
                                <span><img src={calender} style={{ width: "20px", marginLeft: "9px" }} alt="calendar" /></span>
                                {t("Latest.articles.1.date")}
                            </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{t("Latest.articles.1.title")}</h2>
                            <div className="viewDiv">
                            <button className="view">{t("Latest.articles.1.buttonText")}</button>
                            <span className="right">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                            </div>
                        </div>
                    </div>
        
                    <div className="card">
                        <div className="serviceImage">
                            <div>
                            <img src={image3} className="icon" alt="article image 3"/>
                            </div>
                            <div className="profile">
                            <img src={profileImage} alt="profile" />
                            <p style={{ margin: "0" }}>{t("Latest.articles.2.author")}</p>
                            <div style={{ display: "flex" }}>
                                <span><img src={calender} style={{ width: "20px", marginLeft: "9px" }} alt="calendar" /></span>
                                {t("Latest.articles.2.date")}
                            </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{t("Latest.articles.2.title")}</h2>
                            <div className="viewDiv">
                            <button className="view">{t("Latest.articles.2.buttonText")}</button>
                            <span className="right">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}












