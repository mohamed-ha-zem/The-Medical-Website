// import { use, useState } from "react"
// export default function Arrey(){
//     let [inputValue , setInputValue] = useState("")
//     let [arrey , setArrey] = useState(["mohaemd" , "Ahmed" , "Ali" , "Omar"])
//     let arreyList = arrey.map((arr) => {
//         return <li>{arr}</li>
//     })
//     function addNameonArrey(){
//         setArrey([...arrey , inputValue])
//     }
//     return (
//         <div>
//             {arreyList}
//             <div>
//                 <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
//                 <button onClick={addNameonArrey}>Click</button>
//             </div>
//         </div>
//     )
// }
// ======================================> 
// import { use, useState } from "react";
// let nextId = 5
// export default function Names(){
//     let [inputValue , setInputValue] = useState("")
//     let [names, setNames] = useState(
//         [
//             {id: 1 , name: "mohaemd"},
//             {id: 2 , name: "Ahmed"},
//             {id: 3 , name: "Ali" },
//             {id: 4 , name: "Omar"},
//         ]
//     )
//     let namesList = names.map((name) => {
//         return <li key={name.id}>{name.name} <button onClick={() => {
//             deleteName(name.id)
//         }}>delete</button><button onClick={() => {
//             editName(name.id)
//         }}>Edit</button></li>
//     })
//     function addNameonArrey(){
//         setNames([...names , {id: nextId , name :inputValue}])
//         nextId = nextId + 1
//     }
//     function deleteName(id){
//         // let newNames = [...names]
//         // let index = 0;
//         // let selectedIndex = 0;
//         // for(let name of newNames){
//         //     if(name.id === id){
//         //         selectedIndex = index
//         //     }
//         //     index++
//         // }
//         // newNames.splice(selectedIndex , 1)
//         // حل اخر 
//         let newNames = names.filter((name) => {
//             return name.id !== id
//         })
//         setNames(newNames)
//     }
//     function editName(id){
//         let newNames = names.map((name) => {
//             if(name.id === id){
//                 let newName = {...name , name: name.name + "0"}
//                 return newName
//             }else{
//                 return name
//             }
//         })
//         setNames(newNames)
//     }
//     return (
//         <div>
//             {namesList}
//             <div>
//                 <input type="text" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}/>
//                 <button onClick={addNameonArrey}>click</button>
//             </div>
//         </div>
//     )
// }
// =======================================>
//     import { PureComponent, useState } from 'react';

// const initialProducts = [{
//     id: 0,
//     name: 'Baklava',
//     count: 1,
//     }, {
//     id: 1,
//     name: 'Cheese',
//     count: 5,
//     }, {
//     id: 2,
//     name: 'Spaghetti',
//     count: 2,
//     }];

//     export default function ShoppingCart() {
//     const [
//         products,
//         setProducts
//     ] = useState(initialProducts)

//     function handleIncreaseClick(productId) {
//         setProducts(products.map(product => {
//         if (product.id === productId) {
//             return {...product,count: product.count + 1};
//         } else {
//             return product;
//         }
//         }))
//     }
//     function handledeseceClick(productId){
//         let newProducts = []
//         for(let product of products){
//             if(product.id === productId){
//                 if(product.count > 1){
//                     let newProduct = {...product , count: product.count - 1}
//                     newProducts.push(newProduct)
//                 }
//             }else{
//                     newProducts.push(product)
//             }
//         }
//         setProducts(newProducts)
//     }
    
//     return (
//         <ul>
//         {products.map(product => (
//             <li key={product.id}>
//             {product.name}
//             {' '}
//             (<b>{product.count}</b>)
//             <button onClick={() => {
//                 handleIncreaseClick(product.id);
//             }}>
//                 +
//             </button>
//             <button onClick={() => {
//                 handledeseceClick(product.id)
//             }}>
//                 –
//             </button>
//             </li>
//         ))}
//         </ul>
//     );
// }
// ==========================================>
//     import { useState } from 'react';

// export default function RequestTracker() {
//     const [pending, setPending] = useState(0);
//     const [completed, setCompleted] = useState(0);

//     async function handleClick() {
//         setPending((p) => {return p + 1});
//         await delay(3000);
//         setPending((p) => {return p - 1});
//         setCompleted((c) => c + 1);
//     }

//     return (
//         <>
//         <h3>
//             Pending: {pending}
//         </h3>
//         <h3>
//             Completed: {completed}
//         </h3>
//         <button onClick={handleClick}>
//             Buy     
//         </button>
//         </>
//     );
//     }

//     function delay(ms) {
//     return new Promise(resolve => {
//         setTimeout(resolve, ms);
//     });
// }
// ==========================================>














import ExamForms from "./examForm.js"
import { useEffect, useState } from "react"
export default function Forms(){
    const [inputName , setInputName] = useState("")
    const [inputPhone , setInputPhone] = useState("")
    const [inputAge , setInputAge] = useState("")
    const [checkBox , setCheckBox] = useState(false)
    const [buttonColor , setButtonColor] = useState("#777")
    const [pointerEvents , setPointerEvents] = useState("none")
    const [cursor , setCursor] = useState("auto")
    const [error, setError] = useState("");  // هنا هنخزن الأخطاء

    document.addEventListener("click", () => setError(""));
    
    function checkForms(){
        if(inputName.length > 0 && inputPhone.length > 0 && inputAge.length > 0 && checkBox === true){
            setButtonColor("red")
            setPointerEvents("auto")
            setCursor("pointer")
        }
    }
    function buttonClick(e){
        e.preventDefault()
        e.stopPropagation();
        checkAge()
    }
    function checkAge(){
        if(inputPhone.length > 10 && inputPhone.length < 12){
            if(!isNaN(inputAge)){
                if(+inputAge > 50 || +inputAge < 18){
                    return(
                        setError(<ExamForms type={"Age"} color={"red"}/>)
                    )
                }else{
                    return(
                        setError(<ExamForms type={"information"} color={"green"}/>)
                    )
                }
            }else{
                return(
                    setError(<ExamForms type={"Age"} color={"red"}/>)
                )
            }
        }else{
            return(
                setError(<ExamForms type={"Phone"} color={"red"}/>)
            )
        }
    }

    return (
        <div style={{width: "100%" , backgroundColor: "purple" , paddingBottom: "30px"}}>
            <h1>Requesting a Loan</h1>
            <hr/>
            <form>
                {/* Your Name  */}
                <label>Name</label>
                <input value={inputName} onChange={(e) => {
                    setInputName(e.target.value) 
                    checkForms()
                }} type="text" placeholder="Write The Name" style={{width: "100%", height: "30px" , border: "0" , outline: "0" , textIndent: "20px"}}/>
                {/* Your Phone  */}
                <label>Phone Numper</label>
                <input value={inputPhone} onChange={(e) => {
                    setInputPhone(e.target.value)
                    checkForms()}
                } type="text" placeholder="Write The Phone Numper" style={{width: "100%", height: "30px" , border: "0" , outline: "0" , textIndent: "20px"}}/>
                {/* Your Age  */}
                <label>Age</label>
                <input value={inputAge} onChange={(e) => {
                    setInputAge(e.target.value)
                    checkForms()
                }} type="text" placeholder="Write The Age" style={{width: "100%", height: "30px" , border: "0" , outline: "0" , textIndent: "20px"}}/>
                {/* Your checkBox  */}
                <label>Are You an employee</label>
                <input 
                    checked={checkBox} 
                    onChange={(e) => {
                        const newCheckBox = e.target.checked;
                        setCheckBox(newCheckBox);
                        if(inputName.length > 0 && inputPhone.length > 0 && inputAge.length > 0 && newCheckBox === true) {
                            setButtonColor("red");
                            setPointerEvents("auto");
                            setCursor("pointer");
                        }
                    }} 
                    type="checkbox" 
                    style={{width: "100%", height: "30px", border: "0", outline: "0", textIndent: "20px"}} 
                    />
                {/* Your select  */}
                <select style={{width: "100%", height: "30px" , border: "0" , outline: "0" , textIndent: "20px"}}>
                    <option>the Salary is 3000$ and 8 hours jop</option>
                    <option>the Salary is 6000$ and 12 hours jop</option>
                    <option>the Salary is 10000$ and 16 hours jop</option>
                </select>
                <button onClick={buttonClick} style={{backgroundColor: buttonColor , padding: "10px" , color: "white" , fontWeight: "bold" , fontSize: "30px" , marginTop: "50px" , cursor: cursor , pointerEvents: pointerEvents }}>submit</button>
            </form>
            {error}
        </div>
    )
}


















