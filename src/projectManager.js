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
function deleteInstance(UI, data, index) {
    UI.remove()
    data.splice(index, 1)
}      

function renderProject() {
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

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "x"
        deleteBtn.classList.add("delete")
        task.appendChild(deleteBtn)
    
        deleteBtn.addEventListener("click", () => {
            deleteInstance(task, currentProject.tasks, index)
        })

        if (item.difficulty == "easy") {
            task.classList.add("easy-difficulty")
        }
        else if (item.difficulty == "hard") {
            task.classList.add("hard-difficulty")
        }

        projectContent.appendChild(task)
    }
    dialog.appendChild(projectContent)
    dialog.appendChild(closeBtn)

    content.appendChild(dialog)

    closeBtn.addEventListener("click", () => {
        dialog.close()
        const addProjectBtn = document.getElementById("add-project")
        addProjectBtn.disabled = false
    })
}

let currentProject = null
let currentProjectUI = null
let projects = []
const content = document.querySelector(".content")
function createProject(title, priority) {

    const project = new Project(title, priority)
    projects.push(project)
    const projectUI = document.createElement("button")
    if (project.priority == "low") {
        projectUI.classList.add("low-priority")
    }
    else if (project.priority == "high") {
        projectUI.classList.add("high-priority")
    }
    projectUI.id = "project-container" 
    projectUI.textContent = project.title
    const deleteProjectBtn = document.createElement("button")
    deleteProjectBtn.textContent = "x"
    deleteProjectBtn.classList.add("delete")
    projectUI.appendChild(deleteProjectBtn)
    deleteProjectBtn.addEventListener("click", (e) => {
        e.stopPropagation()
        const index = projects.indexOf(project)
        deleteInstance(projectUI, projects, index)        
    })
    content.appendChild(projectUI)  

    const dialog = document.querySelector(".project-tasks")

    const addTaskBtn = document.getElementById("add-task-btn")
    addTaskBtn.addEventListener("click", () => {
        if (currentProjectUI) {
            currentProjectUI.classList.remove("current-project")
        }
        currentProjectUI = projectUI
        projectUI.classList.add("current-project")
        currentProject = project

        if (!project.tasks[0]) return 
        renderProject()
    })
    projectUI.addEventListener("click", () => {
        if (currentProjectUI) {
            currentProjectUI.classList.remove("current-project")
        }
        currentProjectUI = projectUI
        projectUI.classList.add("current-project")
        currentProject = project

        if (!project.tasks[0]) return 
        renderProject()
        dialog.show()
        const addProjectBtn = document.getElementById("add-project")
        addProjectBtn.disabled = true
        
        

    })  
    return project
}
function getProjects() {
    return projects
}
function getCurrentProject() {
    return currentProject
}

export { Project, createProject, getCurrentProject, getProjects }