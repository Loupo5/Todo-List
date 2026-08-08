class Project {
    constructor(title, priority) {
        this.title = title
        this.priority = priority
        this.tasks = []
    }

    addTask(task) {
        this.tasks.push(task)
    }
}
let projects = []
const content = document.querySelector(".content")
function createProject(title, priority) {
            const project = new Project(title, priority)
            projects.push(project)
            console.log(projects)
            const projectUI = document.createElement("button")
            projectUI.id = "project-container" 
            let currentProject = null
            projectUI.textContent = project.title
            content.appendChild(projectUI)  
            projectUI.addEventListener("click", () => {
                currentProject = project
                console.log(currentProject)
            })  
        }

export { Project, createProject }