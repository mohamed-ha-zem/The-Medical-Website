import ButtonProjectCompenent from "./button-project-componect"

export default function Side(){
    let tasks = [
        {id: 1 , src: "https://fps.cdnpk.net/images/ai/image-generator/gallery/resource-tti-10.webp" , title: "nice"},
        {id: 2 , src: "https://fps.cdnpk.net/images/ai/image-generator/gallery/resource-tti-11.webp" , title : "nice"},
        {id: 3 , src: "https://fps.cdnpk.net/images/ai/image-generator/gallery/magnific-cat.webp"},
        {id: 4 , src: ""}
    ]
    let tasksList = tasks.map((task) => {
        if(task.src === "" && task.title === undefined){
            return <div></div>
        }
        return (
            <ButtonProjectCompenent key={task.id}>
                <div>{task.title}</div>
                <img style={{width: "30%"}} src={task.src}/>
            </ButtonProjectCompenent>
        )
    })
    return(
        <div style={{
            border: "3px solid teal",
            margin: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
        }}>
            {tasksList}
        </div>
    )
}