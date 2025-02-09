import "./testimonial.css"
import React, { useState } from 'react'
import commaUp from "./icons/quotation-marks (1).png"
import commaDown from "./icons/quotation-mark (1).png"
import pexels from "./Images/pexels-mart-production-7089339.jpg"
import right from "./icons/right-arrow.png"
import left from "./icons/arrow.png"

import { useTranslation } from "react-i18next"
import "./i18n"


export default function Testimonial(){
    const {t , i18n} = useTranslation()

    const [display1 , setDisplay1] = useState("block")
    const [display2 , setDisplay2] = useState("none")
    const [display3 , setDisplay3] = useState("none")

    function handleSkib(){
        if(display1 === "block"){
            setDisplay1("none")
            setDisplay2("block")
            setDisplay3("none")
        }else if (display2 === "block"){
            setDisplay1("none")
            setDisplay2("none")
            setDisplay3("block")
        }else if(display3 === "block"){
            setDisplay1("block")
            setDisplay2("none")
            setDisplay3("none")
        }
    }

    return(
            <div>
                <h2 className="pageWord">{t("Testimonial.title")}</h2>
                <div className="row testimonial">
                    <div className="col testimonialTitle" style={{ margin: "30px 10px 30px 10px", position: "relative", padding: "0" }}>
                        <h2 className="importantWord">{t("Testimonial.subtitle")}</h2>
                    </div>
                    <div className="col testimonialImage row" style={{ position: "relative" }}>
                        <div className="treeDoctor col">
                            <img src={pexels} alt="Doctor" />
                        </div>
                        <div className="opinion col">
                            {/* Testimonial 1 */}
                            <div className="opinionChild">
                                <div style={{ display: display1 }}>
                                    <img className="commaUp" src={commaUp} alt="Comma Up" />
                                    <p>{t("Testimonial.testimonials.0.text")}</p>
                                    <p>{t("Testimonial.testimonials.0.name")}</p>
                                    <p>{t("Testimonial.testimonials.0.role")}</p>
                                    <img className="commaDown" src={commaDown} alt="Comma Down" />
                                </div>
        
                                {/* Testimonial 2 */}
                                <div style={{ display: display2 }}>
                                    <img className="commaUp" src={commaUp} alt="Comma Up" />
                                    <p>{t("Testimonial.testimonials.1.text")}</p>
                                    <p>{t("Testimonial.testimonials.1.name")}</p>
                                    <p>{t("Testimonial.testimonials.1.role")}</p>
                                    <img className="commaDown" src={commaDown} alt="Comma Down" />
                                </div>
        
                                {/* Testimonial 3 */}
                                <div style={{ display: display3 }}>
                                    <img className="commaUp" src={commaUp} alt="Comma Up" />
                                    <p>{t("Testimonial.testimonials.2.text")}</p>
                                    <p>{t("Testimonial.testimonials.2.name")}</p>
                                    <p>{t("Testimonial.testimonials.2.role")}</p>
                                    <img className="commaDown" src={commaDown} alt="Comma Down" />
                                </div>
                            </div>
    
                            <div className="direction">
                                <img src={left} alt="Left" />
                                <img src={right} alt="Right" onClick={handleSkib} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}












