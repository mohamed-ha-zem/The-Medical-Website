import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from "react-i18next";
import "./i18n";

export default function Header(){
    
    const {t , i18n} = useTranslation();
    
    return(
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
























