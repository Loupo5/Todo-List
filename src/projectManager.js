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
        if (!project.tasks[0]) return 
        const dialog = document.createElement("dialog")
        dialog.show()
        const task = document.createElement("div")
        const taskTitle = document.createElement("p")
        taskTitle.textContent = project.tasks[0].title
        task.appendChild(taskTitle)
        dialog.appendChild(task)
        content.appendChild(dialog)

    })  
    return project
}
function getCurrentProject() {
    return currentProject
}

export { Project, createProject, getCurrentProject }