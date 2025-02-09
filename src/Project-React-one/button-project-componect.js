import "./button-project-component.css"
export default function ButtonComponent({children}){
    return (
        <div>
            {children === undefined ? <div></div> : <button className={"button"}>{children}</button> }
        </div>
    )
}