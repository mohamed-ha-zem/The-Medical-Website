import mainImage from "./Images/image1opacity0.png";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from "react-i18next";
import "./i18n";

export default function Home() {

    const {t , i18n} = useTranslation();
    return (
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
                    <img src={mainImage} className="img-fluid rounded-5 mainImage" alt="Healthcare" />
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
    );
}
