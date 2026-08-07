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
const content = document.querySelector(".content")
function createProject(title, priority) {
            const project = new Project(title, priority)
            const projectUI = document.createElement("button")
            projectUI.id = "project-container" 
            let currentProject = null
            projectUI.textContent = project.title
            projectUI.addEventListener("click", () => {
                currentProject = project
                console.log(currentProject)
            })
            content.appendChild(projectUI)  
        }

export { Project, createProject }