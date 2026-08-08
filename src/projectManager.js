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
let currentProject = null
let projects = []
const content = document.querySelector(".content")
function createProject(title, priority) {
    const project = new Project(title, priority)
    projects.push(project)
    console.log(projects)
    const projectUI = document.createElement("button")
    projectUI.id = "project-container" 
    projectUI.textContent = project.title
    content.appendChild(projectUI)  
    projectUI.addEventListener("click", () => {
        currentProject = project
        console.log(currentProject)
    })  
    return project
}
function getCurrentProject() {
    return currentProject
}

export { Project, createProject, getCurrentProject }