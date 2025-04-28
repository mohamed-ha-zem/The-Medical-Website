import image1 from "./Images/medical-students-are-hallway-talking_1157-31517.jpg"
import image2 from "./Images/doctor-black-mask-holding-black-folder-reading-it_144627-65150.jpg"
import image3 from "./Images/attractive-female-doctor-standing-with-documents-hospital_1303-20688.jpg"
import image4 from "./Images/doctor-with-stethoscope-holding-multiple-colorful-reporting-folders-looks-confused-unsure_144627-70918.jpg"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckMedical, faBed, faCrutch, faSyringe } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";
import "./i18n";

export default function About() {
    const [showMore, setShowMore] = useState(false);

    const handleReadMore = () => {
        setShowMore(!showMore);
    }
    const {t , i18n} = useTranslation();
    

    return (
        <div>
        <h2 className="pageWord">{t("aboutUs.title")}</h2>
        <div className="row d-flex about">
            <div className="col about-child1">
                <div className="images">
                    <img src={image1} className="rounded-5" style={{ width: '40%' , height: "40%" , margin: "20px 0px 0px 20px"}} />
                    <img src={image2} className="rounded-5" style={{ width: '50%' , height: "50%" , margin: "20px 0px 0px 20px"}} />
                    <img src={image3} className="rounded-5" style={{ width: '30%' , height: "30%" , margin: "20px 0px 0px 20px"}} />
                    <img src={image4} className="rounded-5" style={{ width: '35%' , height: "35%" , margin: "20px 0px 0px 20px"}} />
                </div>
            </div>
            <div className="col about-child2">
                <h2 className="importantWord" style={{ letterSpacing: "0px" }}>{t("aboutUs.subtitle")}</h2>
                <p>{t("aboutUs.description")}</p>
                <div className="boxs">
                    <div className="box" style={{ border: "4px solid rgb(0 255 252 / 100%)" }}>
                        <div style={{ padding: "7px", color: "rgb(11, 26, 189)", backgroundColor: "rgb(0 255 252 / 100%)", borderRadius: "10px 0px 0px 10px" }}>
                            <FontAwesomeIcon className="icon" icon={faTruckMedical} />
                        </div>
                        <p>{t("aboutUs.services.list.0")}</p>
                    </div>
                    <div className="box" style={{ border: "4px solid rgb(42 255 0 / 100%)" }}>
                        <div style={{ padding: "7px", color: "#F44336", backgroundColor: "rgb(42 255 0 / 100%)", borderRadius: "10px 0px 0px 10px" }}>
                            <FontAwesomeIcon className="icon" icon={faBed} />
                        </div>
                        <p>{t("aboutUs.services.list.1")}</p>
                    </div>
                    <div className="box" style={{ border: "4px solid rgb(255 0 0 / 100%)" }}>
                        <div style={{ padding: "7px", color: "rgba(0, 255, 251, 0.86)", backgroundColor: "rgb(255 0 0 / 100%)", borderRadius: "10px 0px 0px 10px" }}>
                            <FontAwesomeIcon className="icon" icon={faCrutch} />
                        </div>
                        <p>{t("aboutUs.services.list.2")}</p>
                    </div>
                    <div className="box" style={{ border: "4px solid rgb(0 20 255 / 100%)" }}>
                        <div style={{ padding: "7px", color: "#9C27B0", backgroundColor: "rgb(0 20 255 / 100%)", borderRadius: "10px 0px 0px 10px" }}>
                            <FontAwesomeIcon className="icon" icon={faSyringe} />
                        </div>
                        <p>{t("aboutUs.services.list.3")}</p>
                    </div>
                </div>
                <button onClick={handleReadMore}>{showMore ? t("aboutUs.readLess") : t("aboutUs.readMore")}</button>
                {showMore && (
                    <div className="moreContent">
                        <h3>{t("aboutUs.whyChooseUs")}</h3>
                        <p>{t("aboutUs.details")}</p>
    
                        <h3>{t("aboutUs.services.title")}</h3>
                        <ul>
                            <li><strong>{t("aboutUs.services.list.0")}</strong> {t("aboutUs.services.details.0")}</li>
                            <li><strong>{t("aboutUs.services.list.1")}</strong> {t("aboutUs.services.details.1")}</li>
                            <li><strong>{t("aboutUs.services.list.2")}</strong> {t("aboutUs.services.details.2")}</li>
                            <li><strong>{t("aboutUs.services.list.3")}</strong> {t("aboutUs.services.details.3")}</li>
                        </ul>
    
                        <h3>{t("aboutUs.promise.title")}</h3>
                        <p>{t("aboutUs.promise.text")}</p>
    
                        <p>{t("aboutUs.thanks")}</p>
                    </div>
                )}
            </div>
        </div>
        <div>
            <div className="who-we">
                <h2 className="importantWord">{t("aboutUs.whoWeAre.title")}</h2>
                <p>{t("aboutUs.whoWeAre.text")}</p>
    
                <h3>{t("aboutUs.mission.title")}</h3>
                <p>{t("aboutUs.mission.text")}</p>
    
                <h3>{t("aboutUs.vision.title")}</h3>
                <p>{t("aboutUs.vision.text")}</p>
    
                <h3>{t("aboutUs.values.title")}</h3>
                <ul>
                    {t("aboutUs.values.list", { returnObjects: true }).map((value, index) => (
                        <li key={index}><strong>{value}</strong></li>
                    ))}
                </ul>
            </div>
        </div>
    </div>    
    )
}
