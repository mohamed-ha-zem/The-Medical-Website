import "./services.css"
import React from 'react'
import Diagnostics from "./icons/stethoscope (1).png"
import treatment from "./icons/medicine.png"
import surgery from "./icons/first-aid-kit.png"
import vaccine from "./icons/medical.png"
import emergency from "./icons/ambulance.png"
import Kidney from "./icons/kidding.png"
import Muscle from "./icons/muscle.png"
import Bones from "./icons/x-ray.png"
import Brain from "./icons/brainstorm.png"
import { useTranslation } from "react-i18next"
import "./i18n"

export default function Services(){
    const {t , i18n} = useTranslation()
    return(
        <div>
            <h2 className="pageWord">{t("services.title")}</h2>
            <div className="row services">
                <div className="col serviceChild1">
                <h2 className="importantWord" style={{ marginBottom: "40px" }}>
                    {t("services.subtitle")}
                </h2>
                <p>{t("services.description")}</p>
                <button>{t("services.readMoreButton")}</button>
                </div>
                <div className="col serviceImage">
                    <div className="slider">
                        <div className="card" style={{ width: "13rem" }}>
                            <div className="serviceFont">
                                <div>
                                <img src={treatment} className="icon" alt="Treatment" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{t("services.cards.0.title")}</h5>
                                <p className="card-text">{t("services.cards.0.description")}</p>
                                <a href="#" className="btn btn-primary">
                                {t("services.buttonText")}
                                </a>
                            </div>
                        </div>
                        <div className="card" style={{ width: "13rem" }}>
                            <div className="serviceFont">
                                <div>
                                <img src={surgery} className="icon" alt="Surgery" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{t("services.cards.1.title")}</h5>
                                <p className="card-text">{t("services.cards.1.description")}</p>
                                <a href="#" className="btn btn-primary">
                                {t("services.buttonText")}
                                </a>
                            </div>
                        </div>
                        <div className="card" style={{ width: "13rem" }}>
                            <div className="serviceFont">
                                <div>
                                <img src={vaccine} className="icon" alt="Vaccine" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{t("services.cards.2.title")}</h5>
                                <p className="card-text">{t("services.cards.2.description")}</p>
                                <a href="#" className="btn btn-primary">
                                {t("services.buttonText")}
                                </a>
                            </div>
                        </div>
                        <div className="card" style={{ width: "13rem" }}>
                            <div className="serviceFont">
                                <div>
                                <img src={emergency} className="icon" alt="Emergency" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{t("services.cards.3.title")}</h5>
                                <p className="card-text">{t("services.cards.3.description")}</p>
                                <a href="#" className="btn btn-primary">
                                {t("services.buttonText")}
                                </a>
                            </div>
                        </div>
                        <div className="card" style={{ width: "13rem" }}>
                            <div className="serviceFont">
                                <div>
                                <img src={Kidney} className="icon" alt="Kidney" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{t("services.cards.4.title")}</h5>
                                <p className="card-text">{t("services.cards.4.description")}</p>
                                <a href="#" className="btn btn-primary">
                                {t("services.buttonText")}
                                </a>
                            </div>
                        </div>
                        <div className="card" style={{ width: "13rem" }}>
                            <div className="serviceFont">
                                <div>
                                <img src={Muscle} className="icon" alt="Muscle" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{t("services.cards.5.title")}</h5>
                                <p className="card-text">{t("services.cards.5.description")}</p>
                                <a href="#" className="btn btn-primary">
                                {t("services.buttonText")}
                                </a>
                            </div>
                        </div>
                        <div className="card" style={{ width: "13rem" }}>
                            <div className="serviceFont">
                                <div>
                                <img src={Bones} className="icon" alt="Bone" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{t("services.cards.6.title")}</h5>
                                <p className="card-text">{t("services.cards.6.description")}</p>
                                <a href="#" className="btn btn-primary">
                                {t("services.buttonText")}
                                </a>
                            </div>
                        </div>
                        <div className="card" style={{ width: "13rem" }}>
                            <div className="serviceFont">
                                <div>
                                <img src={Brain} className="icon" alt="Brain" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{t("services.cards.7.title")}</h5>
                                <p className="card-text">{t("services.cards.7.description")}</p>
                                <a href="#" className="btn btn-primary">
                                {t("services.buttonText")}
                                </a>
                            </div>
                        </div>
                        <div className="card" style={{ width: "13rem" }}>
                            <div className="serviceFont">
                                <div>
                                <img src={Diagnostics} className="icon" alt="Diagnostics" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{t("services.cards.8.title")}</h5>
                                <p className="card-text">{t("services.cards.8.description")}</p>
                                <a href="#" className="btn btn-primary">
                                {t("services.buttonText")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}












