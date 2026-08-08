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
        const dialog = document.querySelector(".project-tasks")
        const closeBtn = document.createElement("button")
        const projectContent = document.createElement("div")
        projectContent.classList.add("project-content")
        closeBtn.textContent = "Close"
        closeBtn.classList.add("close-btn")
        
        for (let [index, item] of currentProject.tasks.entries()) {
            const task = document.createElement("div")
            task.classList.add("task")

            const taskTitle = document.createElement("p")
            taskTitle.textContent = item.title
            task.appendChild(taskTitle)

            const taskDescription = document.createElement("p")
            taskDescription.textContent = `Description: ${item.description}`
            task.appendChild(taskDescription)

            const taskDuration = document.createElement("p")
            taskDuration.textContent = `Duration: ${item.duration} min`
            task.appendChild(taskDuration)

            projectContent.appendChild(task)
        }
        dialog.appendChild(projectContent)
        dialog.appendChild(closeBtn)

        content.appendChild(dialog)

        dialog.showModal()
        closeBtn.addEventListener("click", () => {
            dialog.close()
        })

    })  
    return project
}
function getCurrentProject() {
    return currentProject
}

export { Project, createProject, getCurrentProject }