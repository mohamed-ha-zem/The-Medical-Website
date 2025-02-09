import { useState } from "react";
import "./questiones.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

// import React from "react";
// import { useTransition } from "react-i18next";
// import "./i18n";
import React from "react";
import { useTranslation } from "react-i18next";
import "./i18n";

export default function Questions() {
    const [r1, setR1] = useState(false);
    const [r2, setR2] = useState(false);
    const [r3, setR3] = useState(false);
    const [r4, setR4] = useState(false);
    const [r5, setR5] = useState(false);
    const [r6, setR6] = useState(false);
    const [r7, setR7] = useState(false);
    const [r8, setR8] = useState(false);
    const [trnslate , setTranslate] = useState("-127px")
    const [opacity , setOpacity] = useState("0")

    function toggle(setState, currentState) {
        setState(!currentState);
        setTranslate("-40px");
        setOpacity("1");
    }
    
    const {t , i18n} = useTranslation()

    return (
        <div>
            <div className="questiones">
                <h2 className="pageWord" style={{marginBottom: "40px"}}>{t("questions.pageWord")}</h2>
                <div className="two-ques">
                    <div className="ques">
                        <h3>{t("questions.1.question")}<span onClick={() => toggle(setR1, r1)}><FontAwesomeIcon icon={faAngleDown} /></span></h3>
                        {r1 && (
                            <div className="response" style={{opacity: opacity, transform: `translateY(${trnslate})`}}>
                                <h5>{t("questions.1.answer")}</h5>
                                <p>{t("questions.1.description")}</p>
                            </div>
                        )}
                    </div>
                    <div className="ques">
                        <h3>{t("questions.2.question")}<span onClick={() => toggle(setR2, r2)}><FontAwesomeIcon icon={faAngleDown} /></span></h3>
                        {r2 && (
                            <div className="response" style={{opacity: opacity, transform: `translateY(${trnslate})`}}>
                                <h5>{t("questions.2.answer")}</h5>
                                <p>{t("questions.2.description")}</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="two-ques">
                    <div className="ques">
                        <h3>{t("questions.3.question")}<span onClick={() => toggle(setR3, r3)}><FontAwesomeIcon icon={faAngleDown} /></span></h3>
                        {r3 && (
                            <div className="response" style={{opacity: opacity, transform: `translateY(${trnslate})`}}>
                                <h5>{t("questions.3.answer")}</h5>
                                <p>{t("questions.3.description")}</p>
                            </div>
                        )}
                    </div>
                    <div className="ques">
                        <h3>{t("questions.4.question")}<span onClick={() => toggle(setR4, r4)}><FontAwesomeIcon icon={faAngleDown} /></span></h3>
                        {r4 && (
                            <div className="response" style={{opacity: opacity, transform: `translateY(${trnslate})`}}>
                                <h5>{t("questions.4.answer")}</h5>
                                <p>{t("questions.4.description")}</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="two-ques">
                    <div className="ques">
                        <h3>{t("questions.5.question")}<span onClick={() => toggle(setR5, r5)}><FontAwesomeIcon icon={faAngleDown} /></span></h3>
                        {r5 && (
                            <div className="response" style={{opacity: opacity, transform: `translateY(${trnslate})`}}>
                                <h5>{t("questions.5.answer")}</h5>
                                <p>{t("questions.5.description")}</p>
                            </div>
                        )}
                    </div>
                    <div className="ques">
                        <h3>{t("questions.6.question")}<span onClick={() => toggle(setR6, r6)}><FontAwesomeIcon icon={faAngleDown} /></span></h3>
                        {r6 && (
                            <div className="response" style={{opacity: opacity, transform: `translateY(${trnslate})`}}>
                                <h5>{t("questions.6.answer")}</h5>
                                <p>{t("questions.6.description")}</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="two-ques">
                    <div className="ques">
                        <h3>{t("questions.7.question")}<span onClick={() => toggle(setR7, r7)}><FontAwesomeIcon icon={faAngleDown} /></span></h3>
                        {r7 && (
                            <div className="response" style={{opacity: opacity, transform: `translateY(${trnslate})`}}>
                                <h5>{t("questions.7.answer")}</h5>
                                <p>{t("questions.7.description")}</p>
                            </div>
                        )}
                    </div>
                    <div className="ques">
                        <h3>{t("questions.8.question")}<span onClick={() => toggle(setR8, r8)}><FontAwesomeIcon icon={faAngleDown} /></span></h3>
                        {r8 && (
                            <div className="response" style={{opacity: opacity, transform: `translateY(${trnslate})`}}>
                                <h5>{t("questions.8.answer")}</h5>
                                <p>{t("questions.8.description")}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            
        </div>
    );
}
