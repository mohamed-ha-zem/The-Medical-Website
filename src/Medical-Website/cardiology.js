import "./cardiology.css"
import heart from "./Images/—Pngtree—red heart_20308205.png"
import "./home.css";
import mainImage from "./Images/image1opacity0.png";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from "react-i18next";
import "./i18n";

export default function Cardiology(){
    const {t , i18n} = useTranslation();
    return(
      <div></div>
//         <div className="cardiology">
//             <div>
//             <h2 className="pageWord" style={{ margin: "30px auto 10px" }}>{t('home.home')}</h2>
//             <div className="row header">
//                 <div className="col" style={{ margin: "30px 10px 30px 10px", position: "relative", padding: "0" }}>
//                     <p className="pWord">{t('home.healthCareSolution')}</p>
//                     <h2 className="importantWord" style={{ marginBottom: "40px" }}>{t('home.protectHealth')}</h2>
//                     <div className="button-group">
//                         <button className="btn-main">{t('home.readMore')}</button>
//                     </div>
//                 </div>
//                 <div className="col headerImage" style={{ position: "relative" }}>
//                     <img src={mainImage} className="img-fluid rounded-5 mainImage" alt="Healthcare" />
//                     <div className="square"></div>
//                 </div>
//             </div>

//             <div className="features-section">
//                 <h3 className="features-title">{t('home.whyChooseUs')}</h3>
//                 <div className="features">
//                     <div className="feature-item">
//                         <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" />
//                         <p>{t('home.experiencedDoctors')}</p>
//                     </div>
//                     <div className="feature-item">
//                         <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" />
//                         <p>{t('home.modernEquipment')}</p>
//                     </div>
//                     <div className="feature-item">
//                         <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" />
//                         <p>{t('home.comprehensiveServices')}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>
        
    )
}


// import React from "react";
// import "./cardiology.css"
// // import { FaHeartbeat, FaHome, FaUser, FaClipboard, FaChartBar } from "react-icons/fa";

// const Sidebar = () => {
//     return (
//         <div className="sidebar">
//         <h2>Heart Health</h2>
//         <nav>
//             <a href="#home">
//             {/* <FaHome className="icon" />  */}
//             Home
//             </a>
//             <a href="#patients">
//             {/* <FaUser className="icon" />  */}
//             Patients
//             </a>
//             <a href="#reports">
//             {/* <FaClipboard className="icon" />  */}
//             Reports
//             </a>
//             <a href="#analytics">
//             {/* <FaChartBar className="icon" /> */}
//             Analytics
//             </a>
//             <a href="#heart">
//             {/* <FaHeartbeat className="icon" />  */}
//             Heart Health
//             </a>
//         </nav>
//         </div>
//     );
// };

// const Header = () => {
//   return (
//     <div className="header">
//       <input type="text" className="search-bar" placeholder="Search..." />
//       <div className="header-icons">
//         <button className="notification-btn">🔔</button>
//         <span className="username">Doctor</span>
//       </div>
//     </div>
//   );
// };

// const MainContent = () => {
//   return (
//     <div className="main-content">
//       <h1>Welcome to Heart Health Dashboard</h1>
//       <div className="stats">
//         <div className="card">Heart Rate: 72 bpm</div>
//         <div className="card">Patients Today: 15</div>
//         <div className="card">Appointments: 7</div>
//       </div>
//       <div className="chart">[Graph Placeholder]</div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="dashboard">
//       <Sidebar />
//       <div className="content">
//         <Header />
//         <MainContent />
//       </div>
//     </div>
//   );
// };

// export default App;




















