import mobileImage1 from "./Images/a.png";
import mobileImage2 from "./Images/b.png";
import mobileImage3 from "./Images/c.png";
import React, { use, useState } from "react";
import { useTranslation } from "react-i18next";
import "./i18n"

export default function Appointment() {
    const {t , i18n} = useTranslation()

    const [availableDates] = useState([
        { date: "2025-01-15", times: ["10:00 AM", "11:30 AM", "02:00 PM"] },
        { date: "2025-01-16", times: ["09:00 AM", "01:00 PM", "03:00 PM"] },
        { date: "2025-01-17", times: ["10:30 AM", "12:00 PM", "04:00 PM"] },
    ]);

    const departments = i18n.t("appointmentBooking.doctorsDepartments", { returnObjects: true });

    const translatedDepartments = departments.map(department => ({
        department: department.department,
        doctors: department.doctors.map(doctor => i18n.t(doctor))
    }));

    const [inputName , setInputName] = useState("")
    const [selectedDate , setSelectedDate] = useState("")
    const [selectedTime , setSelectedTime] = useState("")
    const [selectedDepartment , setSelectedDepartment] = useState("")
    const [selectedDoctor , setSelectedDoctor] = useState("")
    const [confirmationMessage, setConfirmationMessage] = useState(""); // State للرسالة

    function handleConfirm(){
        if(!selectedDate || !selectedTime || !selectedDepartment){
            alert("Please select both a date and a time.");
            return;
        }
        alert(`Appointment Confirmed:\nName: ${inputName} \nDate: ${selectedDate}\nTime: ${selectedTime} \nDepartment: ${selectedDepartment} \nDoctor: ${selectedDoctor} `)
        setConfirmationMessage(`: `);
    }

    
    return (
        <div>
            <h2 className="pageWord">{t("appointmentBooking.title")}</h2>
            <div className="appointment row">
                <div className="appointment-booking col">
                    <h2 className="pageWord" style={{ margin: "60px auto 60px" }}>{t("appointmentBooking.title")}</h2>
                    <form style={{ display: "flex" }}>
                        <label>{t("appointmentBooking.formLabels.name")}</label>
                        <input placeholder={t("appointmentBooking.formLabels.name")} value={inputName} onChange={(e) => { setInputName(e.target.value) }} />
                    </form>
                    <label>
                        {t("appointmentBooking.formLabels.chooseDate")}
                        <select value={selectedDate} onChange={(e) => { setSelectedDate(e.target.value) }}>
                            <option>{t("appointmentBooking.formLabels.selectDate")}</option>
                            {availableDates.map((entry) => <option id={entry.date} value={entry.date}>{entry.date}</option>)}
                        </select>
                    </label>
                    {selectedDate && (
                        <>
                            <label>
                                {t("appointmentBooking.formLabels.chooseTime")}
                                <select value={selectedTime} onChange={(e) => { setSelectedTime(e.target.value) }}>
                                    <option>{t("appointmentBooking.formLabels.selectTime")}</option>
                                    {availableDates.find((entry) => entry.date === selectedDate)?.times.map((time) =>
                                        <option id={time} value={time}>{time}</option>)}
                                </select>
                            </label>
                        </>
                    )}
                    {selectedDate && selectedTime && (
                        <label>
                            {t("appointmentBooking.formLabels.chooseDepartment")}
                            <select value={selectedDepartment} onChange={(e) => { setSelectedDepartment(e.target.value) }}>
                                <option>{t("appointmentBooking.formLabels.selectDepartment")}</option>
                                {translatedDepartments.map((department) => <option id={department.department} value={department.department}>{department.department}</option>)}
                            </select>
                        </label>
                    )}
                    {selectedDate && selectedTime && selectedDepartment && (
                        <label>
                            {t("appointmentBooking.formLabels.chooseDoctor")}
                            <select value={selectedDoctor} onChange={(e) => { setSelectedDoctor(e.target.value) }}>
                                <option>{t("appointmentBooking.formLabels.selectDoctor")}</option>
                                {translatedDepartments.find((department) => department.department === selectedDepartment)?.doctors.map((doctor) =>
                                    <option id={doctor} value={doctor}>{doctor}</option>)}
                            </select>
                        </label>
                    )}

                    <button onClick={handleConfirm}>{t("appointmentBooking.confirmButton")}</button>
                    {/* عرض الرسالة لو موجودة */}
                    {confirmationMessage && (
                        <div className="list">
                            <h2>{t("appointmentBooking.confirmationMessage.title")}</h2>
                            <h3>{t("appointmentBooking.confirmationMessage.name")} <span>{inputName}</span></h3>
                            <h3>{t("appointmentBooking.confirmationMessage.date")} <span>{selectedDate}</span></h3>
                            <h3>{t("appointmentBooking.confirmationMessage.time")} <span>{selectedTime}</span></h3>
                            <h3>{t("appointmentBooking.confirmationMessage.department")} <span>{selectedDepartment}</span></h3>
                            <h3>{t("appointmentBooking.confirmationMessage.doctor")} <span>{selectedDoctor}</span></h3>
                        </div>
                    )}
                </div>
                <div className="appointmentImags col">
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src={mobileImage1} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src={mobileImage2} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src={mobileImage3} class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
