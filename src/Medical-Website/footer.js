import "./footer.css"
import mainImage from"./Images/image1opacity0.png"
import phone from './icons/circle.png'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from "react-i18next"
import "./i18n"

export default function Footer(){
    const {t , i18n} = useTranslation()
    return(
        <div className="text-center footer">
            <h2 className="pageWord">{t('footer.title')}</h2>
            <div className="row" style={{ marginTop: '40px' }}>
                <div className="col contact">
                    <h2>{t('footer.contact.title')}</h2>
                    <p>{t('footer.contact.description')}</p>
                    <div className="phoneFooter">
                    <div>
                        <img src={phone} style={{ width: '50px' }} />
                    </div>
                    <div>
                        <p>{t('footer.contact.contact_us')}</p>
                        <p>{t('footer.contact.phone')}</p>
                    </div>
                    </div>
                </div>
                <div className="col links">
                    <h2>{t('footer.quick_links.0')}</h2>
                    <p>{t('footer.quick_links.1')}</p>
                    <p>{t('footer.quick_links.2')}</p>
                    <p>{t('footer.quick_links.3')}</p>
                    <p>{t('footer.quick_links.4')}</p>
                    <p>{t('footer.quick_links.5')}</p>
                    <p>{t('footer.quick_links.6')}</p>
                </div>
                <div className="col service">
                    <h2>{t('footer.our_service.0')}</h2>
                    <p>{t('footer.our_service.1')}</p>
                    <p>{t('footer.our_service.2')}</p>
                    <p>{t('footer.our_service.3')}</p>
                    <p>{t('footer.our_service.4')}</p>
                    <p>{t('footer.our_service.5')}</p>
                    <p>{t('footer.our_service.6')}</p>
                </div>
                <div className="col subcribe">
                    <h2>{t('footer.subscribe.title')}</h2>
                    <input type="email" placeholder={t('footer.subscribe.email_placeholder')} style={{ margin: '20px', borderRadius: '10px' }} />
                    <button>{t('footer.subscribe.button_text')}</button>
                    <div style={{ display: 'flex' }}>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg>
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 00 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                            </svg>
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.42 1.942a3.9 3.9 0 0 0 .923 1.417c.374.374.773.598 1.233.84a3.9 3.9 0 0 0 1.417.923c.509.246.939.38 1.542.42C5.556 15.99 5.83 16 8 16s2.444-.01 3.297-.048c.852-.04 1.433-.174 1.942-.42a3.9 3.9 0 0 0 1.417-.923 3.9 3.9 0 0 0 .923-1.417c.246-.509.38-.939.42-1.542.039-.853.048-1.125.048-3.297 0-2.172-.01-2.444-.048-3.297-.04-.852-.174-1.433-.42-1.942-.249-.509-.594-.973-.923-1.417a3.9 3.9 0 0 0-.923-1.417c-.246-.509-.38-.939-.42-1.542z" />
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}












