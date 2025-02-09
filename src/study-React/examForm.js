export default function ExamForm({ type, color }) {
    const style = {
        color: color,
        backgroundColor: "white",
        width: "92%",
        textAlign: "center",
        padding: "61px",
        position: "absolute",
        top: "711px",
        boxShadow: "rgb(255, 87, 34) 4px 0px 22px 11px",
        fontSize: "50px",
    };

    const messages = {
        Age: "The Age is not valid",
        Phone: "The Phone number is not valid",
        information: "The information is sent successfully",
    };

    return (
        <h1 style={style}>
            {messages[type] || "Invalid input"}
        </h1>
    );
}
