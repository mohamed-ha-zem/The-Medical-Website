import "./working.css"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from "react-i18next";
import "./i18n";

export default function Header(){
    
    const {t , i18n} = useTranslation();
    
    return(
        // <div>
        //     <h2 className="pageWord">Working Process</h2>
        //     <div className="working">
        //         <div className="Workingtitle">
        //             <h2 className="importantWord">How We Work?</h2>
        //         </div>
        //         <div className="boxs" style={{display: "flex" , justifyContent: "center" , alignItems: "center"}}>
        //             <div className="box">
        //                 <p className="numper">01</p>
        //                 <p className="pWord" style={{fontSize: "20px" , fontWeight: "600"}}>Make Appointment</p>
        //                 <p className="WorkingWord">The first step is to schedule an appointment with us. You can easily choose the date and time that works best for you through our online system or by calling our office.</p>
        //                 <div className="viewDiv">
        //                     <button className="view">view More</button>
        //                     <span className="right"><FontAwesomeIcon icon={faChevronRight}/></span>
        //                 </div>
        //             </div>
        //             <div className="box" style={{marginBottom: "100px"}}>
        //                 <p className="numper">02</p>
        //                 <p className="pWord" style={{fontSize: "20px" , fontWeight: "600"}}>Consultation</p>
        //                 <p className="WorkingWord">During the consultation, our doctors will evaluate your health needs and discuss the best treatment options available. You will receive personalized care based on your condition.</p>
        //                 <div className="viewDiv">
        //                     <button className="view">view More</button>
        //                     <span className="right"><FontAwesomeIcon icon={faChevronRight}/></span>
        //                 </div>
        //             </div>
        //             <div className="box">
        //                 <p className="numper">03</p>
        //                 <p className="pWord" style={{fontSize: "20px" , fontWeight: "600"}}>Treatment Plan</p>
        //                 <p className="WorkingWord">Once we have all the information we need, we will design a personalized treatment plan tailored to your specific needs, ensuring the best results for your health and well-being.</p>
        //                 <div className="viewDiv">
        //                     <button className="view">view More</button>
        //                     <span className="right"><FontAwesomeIcon icon={faChevronRight}/></span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    <div>
        <h2 className="pageWord">{t('workingProcess.title')}</h2>
        <div className="working">
            <div className="Workingtitle">
                <h2 className="importantWord">{t('workingProcess.workingProcessTitle')}</h2>
            </div>
            <div className="boxs" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {t('workingProcess.steps', { returnObjects: true }).map((step, index) => (
                    <div className="box" key={index}>
                        <p className="numper">{`0${index + 1}`}</p>
                        <p className="pWord" style={{ fontSize: "20px", fontWeight: "600" }}>
                            {step.title}
                        </p>
                        <p className="WorkingWord">{step.description}</p>
                        <div className="viewDiv">
                            <button className="view">{t('workingProcess.viewMore')}</button>
                            <span className="right">
                            <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}
























