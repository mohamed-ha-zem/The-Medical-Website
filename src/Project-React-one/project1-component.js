import HeaderProjectComponent from "./header-project-component"
import NavProjectComponent from "./nav-project-component"
import SideProjectComponent from "./side-project-component"
function Projet1Component(){
    let tasks = [
        {id: 1 , post1: "20" , post2: "Mohamed Hazem" , title: "MOhamed Hazem is a good Developer"},
        {id: 2 , post1: "hello World" , title: "this is the my World"},
        {id: 3 , post1: "post3" , title: "this is the Post 3"},
        {id: 4 , title: ""},
        {id: 5 ,  title: "jgeioghei"}
    ]
    let tasksList = tasks.map((task) => {
        return (
            <NavProjectComponent key={task.id} post1={task.post1} post2={task.post2}>
                <p>{task.title}</p>
            </NavProjectComponent>
        )
    })
    return(
        <div>
            <div>
                <HeaderProjectComponent />
            </div>
            <div style={{display: 'flex', justifyContent: "center" }}>
                <div style={{display: 'flex', width: "70%"}}>
                    <div style={{width: '70%'}}>
                        <div>
                            {tasksList}
                        </div>
                    </div>
                    <div style={{width: "30%"}}>
                        {<SideProjectComponent />}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Projet1Component;




















