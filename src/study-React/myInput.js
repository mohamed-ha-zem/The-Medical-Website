import { use, useState } from "react"

export default function Personal(){
    let [input , setinput] = useState("fefe")
    function changeFunction(event){
        setinput(event.target.value)
        console.log(setinput(event.target.value))
    }
    return (
        <div>
            <label>Your Name: </label>
            <input onChange={changeFunction} value={input}/>
        </div>
    )
}







