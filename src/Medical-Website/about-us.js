import "./about-us.css"
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
        // <div>
        //     <h2 className="pageWord">{t("about.title")}</h2>
        //     <div className="row d-flex about">
        //         <div className="col about-child1">
        //             <div className="images">
        //                 <img src={image1} className="rounded-5" style={{ width: '40%' , height: "40%" , margin: "20px 0px 0px 20px"}} />
        //                 <img src={image2} className="rounded-5" style={{ width: '50%' , height: "50%" , margin: "20px 0px 0px 20px"}} />
        //                 <img src={image3} className="rounded-5" style={{ width: '30%' , height: "30%" , margin: "20px 0px 0px 20px"}} />
        //                 <img src={image4} className="rounded-5" style={{ width: '35%' , height: "35%" , margin: "20px 0px 0px 20px"}} />
        //             </div>
        //         </div>
        //         <div className="col about-child2">
        //             <h2 className="importantWord" style={{ letterSpacing: "0px" }}>The Great Place Of Medical Hospital Center</h2>
        //             <p>We provide the special tips and advice's of health care treatment and high level of best technology involve in the our hospital.</p>
        //             <div className="boxs">
        //                 <div className="box" style={{ border: "4px solid rgb(0 255 252 / 100%)" }}>
        //                     <div style={{ padding: "7px", color: "rgb(11, 26, 189)", backgroundColor: "rgb(0 255 252 / 100%)", borderRadius: "10px 0px 0px 10px" }}>
        //                         <FontAwesomeIcon className="icon" icon={faTruckMedical} />
        //                     </div>
        //                     <p>Emergency Help</p>
        //                 </div>
        //                 <div className="box" style={{ border: "4px solid rgb(42 255 0 / 100%)" }}>
        //                     <div style={{ padding: "7px", color: "#F44336", backgroundColor: "rgb(42 255 0 / 100%)", borderRadius: "10px 0px 0px 10px" }}>
        //                         <FontAwesomeIcon className="icon" icon={faBed} />
        //                     </div>
        //                     <p>Operation Help</p>
        //                 </div>
        //                 <div className="box" style={{ border: "4px solid rgb(255 0 0 / 100%)" }}>
        //                     <div style={{ padding: "7px", color: "rgba(0, 255, 251, 0.86)", backgroundColor: "rgb(255 0 0 / 100%)", borderRadius: "10px 0px 0px 10px" }}>
        //                         <FontAwesomeIcon className="icon" icon={faCrutch} />
        //                     </div>
        //                     <p>Cleaning Help</p>
        //                 </div>
        //                 <div className="box" style={{ border: "4px solid rgb(0 20 255 / 100%)" }}>
        //                     <div style={{ padding: "7px", color: "#9C27B0", backgroundColor: "rgb(0 20 255 / 100%)", borderRadius: "10px 0px 0px 10px" }}>
        //                         <FontAwesomeIcon className="icon" icon={faSyringe} />
        //                     </div>
        //                     <p>Sick Help</p>
        //                 </div>
        //             </div>
        //             {/* عند الضغط على "Read More" يظهر محتوى إضافي */}
        //             <button onClick={handleReadMore}>{showMore ? 'Read Less' : 'Read More'}</button>
        //             {showMore && (
        //                 <div className="moreContent">
        //                     <h3>Why Choose Our Medical Center?</h3>
        //                     <p>Our hospital is equipped with state-of-the-art medical technology and staffed by highly skilled professionals dedicated to providing the best care possible. We understand the importance of your health, which is why we go above and beyond to ensure that you receive the highest standard of treatment.</p>

        //                     <h3>Our Services Include:</h3>
        //                     <ul>
        //                         <li><strong>Emergency Care:</strong> Fast and efficient response for critical situations.</li>
        //                         <li><strong>Specialized Treatments:</strong> Tailored treatments for all medical needs, including surgeries and therapies.</li>
        //                         <li><strong>24/7 Availability:</strong> Our team is always ready to assist you, any time of day or night.</li>
        //                         <li><strong>Comfortable Environment:</strong> We ensure that you feel at home with a calm, peaceful atmosphere.</li>
        //                     </ul>

        //                     <h3>Our Promise to You:</h3>
        //                     <p>We promise to provide the highest level of care, compassion, and expertise in every interaction with our patients. From the moment you walk through our doors, we prioritize your comfort and well-being, ensuring that you receive the care you deserve.</p>

        //                     <p>Thank you for trusting us with your health!</p>
        //                 </div>
        //             )}
        //         </div>
        //     </div>
        //     <div>
        //         <div className="who-we">
        //             <h2 className="importantWord">Who We Are</h2>
        //             <p>
        //                 Founded in [year], [Hospital Name] has been dedicated to providing top-notch healthcare 
        //                 services to our community. With state-of-the-art facilities and a highly skilled team, 
        //                 we aim to set new standards in medical care.
        //             </p>

        //             <h3>Our Mission</h3>
        //             <p>
        //                 Our mission is to deliver comprehensive and compassionate healthcare services, ensuring 
        //                 the well-being of every patient we serve.
        //             </p>

        //             <h3>Our Vision</h3>
        //             <p>
        //                 To become a leading medical center renowned for innovation, quality, and exceptional 
        //                 patient care.
        //             </p>

        //             <h3>Our Values</h3>
        //             <ul>
        //                 <li><strong>Transparency:</strong> We maintain honesty and openness in all our dealings.</li>
        //                 <li><strong>Compassion:</strong> Caring for patients as if they are part of our family.</li>
        //                 <li><strong>Excellence:</strong> Striving for the highest standards in everything we do.</li>
        //                 <li><strong>Commitment:</strong> Dedicated to improving the lives of those we serve.</li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
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
