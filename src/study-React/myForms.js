import { use, useState } from "react"

export default function Personal(){
    let [name , setname] = useState("")
    let [email , setemail] = useState("")
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            console.log(name)
            console.log(email)
        }}>
            <p>
                <label>Your Name: </label>
                <input onChange={(event) => {setname(event.target.value)}} value={name}/>
            </p>
            
            <p>
                <label>Your Email: </label>
                <input onChange={(event) => {setemail(event.target.value)}} value={email}/>
            </p>
            
            <button>submit</button>
        </form>
    )
}







