import { use, useState } from "react"

export default function Personal(){
let [formsInputs , setFormInputs] = useState({name: "" , email: "" , age: "" , textArea: "" , checkBox: "" , select: ""})
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            console.log(formsInputs)
            console.log(formsInputs.name)
            console.log(formsInputs.email)
            console.log(formsInputs.age)
            console.log(formsInputs.textArea)
            console.log(formsInputs.checkBox)
            console.log(formsInputs.select)
        }}>
            <p>
                <label>Your Name: </label>
                <input onChange={(event) => {setFormInputs({...formsInputs , name: event.target.value})}} value={formsInputs.name}/>
            </p>
            
            <p>
                <label>Your Email: </label>
                <input onChange={(event) => {setFormInputs({...formsInputs , email: event.target.value})}} value={formsInputs.email}/>
            </p>

            <p>
                <label>Your Age: </label>
                <input onChange={(event) => {setFormInputs({...formsInputs , age: event.target.value})}} value={formsInputs.age}/>
            </p>

            <p>
                <select onChange={(event) => setFormInputs({...formsInputs , select: event.target.value})} value={formsInputs.select}>
                    <option>Mohamed</option>
                    <option>ِAhemd</option>
                    <option>Yehia</option>
                    <option>Omar</option>
                </select>
            </p>

            <p>
            <label>Your Message</label>
            <textarea onChange={(event) => setFormInputs({...formsInputs , textArea: event.target.value})} value={formsInputs.textArea}/>
            </p>

            <p>
            <label>Your Check</label>
            <input type="checkbox" onChange={(event) => {setFormInputs({...formsInputs , checkBox: event.target.checked})}} value={formsInputs.checkBox}/>
            </p>

            <button>submit</button>
        </form>
    )
}







