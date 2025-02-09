export default function NavComponent({post1 , post2 , children}){
    if(post1 === undefined || post1 === "" && post2 === undefined || post2 === "" && children.props.children === undefined || children.props.children === ""){
        return <div></div>
    }
    return(
        <div style={{
            border: "5px solid teal",
            margin: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"}}>
            <h1>{post1}</h1>
            <h1>{post2}</h1>
            <p style={{backgroundColor: "#777" , height: "1px" , width: "99%"}}></p>
            <p>{children}</p>
        </div>
    )
}