import "./personalStyle.css"
import { useState } from "react"

export default function Personal(){
    let state = useState("18")
    let name = state[0]
    let setName = state[1]
    function change(){
        name === "18" ? setName("19") : setName("18")
    }
    return (
        <div>
            <button onClick={change}>click</button>
            <p>{name}</p>
        </div>
    )
}







