import robote from "./Images/—Pngtree—robot doctor in white coat_16657203.png";

import React from "react";
import { useTranslation } from "react-i18next";
import "./i18n"; // تأكد أنك تستورد إعدادات i18n

export default function LoginRegister() {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="body">
            <div className="loginPage">
                <div className="logo">
                    <img src={robote} alt="robot doctor" />
                    <p>
                        <span style={{ cursor: "pointer" }} onClick={() => changeLanguage("en")}>
                        English
                        </span>
                        {" "}|{" "}
                        <span style={{cursor: "pointer" }} onClick={() => changeLanguage("ar")}>
                        Arabic
                        </span>
                    </p>
                </div>
                <div className="login">
                    <h3>{t("login.loginInfo")}</h3>
                    <input placeholder={t("login.username")} />
                    <input placeholder={t("login.password")} />
                    <button>{t("login.login")}</button>
                </div>
                <div className="forgetPassword">
                    <a>{t("login.forgotPassword")}</a>
                </div>
            </div>
        </div>
    );
}
