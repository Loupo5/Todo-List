import { Project, createProject, getCurrentProject } from "./projectManager.js" 

class Task {
    constructor(title, description, duration, difficulty) {
        this.title = title
        this.description = description
        this.duration = duration
        this.difficulty = difficulty
    }
}

function taskAdder(title, description, duration, difficulty) {
    return new Task(title, description, duration, difficulty)
}

const taskDialog = document.getElementById("task-dialog")
const confirmTaskBtn = document.getElementById("add-task-btn")
const closeTaskBtn = document.getElementById("close-task-btn")
const addTask = document.getElementById("add-task")

function getInput() {
    const taskTitle = document.getElementById("title")
    const title = taskTitle.value
    if (taskTitle.value === "") {
        taskTitle.placeholder = "Enter title"
        return 
    }

    const taskDesc = document.getElementById("description")
    const description = taskDesc.value

    const taskDuration = document.getElementById("duration")
    const errorMessage = document.getElementById("error")
    console.log(taskDuration.value)
    if (taskDuration.value === "") {
        taskDuration.value = ""
    }
    if (Number.isNaN(Number(taskDuration.value))) {
        taskDuration.placeholder = "invalid"
        errorMessage.textContent = "Enter a valid number!"
        return
    }
    const duration = taskDuration.value

    const taskDifficulty = document.querySelector("input[name='task_difficulty']:checked")
    const difficulty = taskDifficulty.value

    return {title, description, duration, difficulty}
}
function getProject() {
    const projectTitleInput = document.getElementById("proj-title")
    if (projectTitleInput.value === "") {
        projectTitleInput.placeholder = "Input a title"
        return 
    }
    const title = projectTitleInput.value

    const priorityInput = document.querySelector("input[name='project-priority']:checked")
    const priority = priorityInput.value
    return { title, priority }
}


function projectConfiguration() {
    const addProject = document.getElementById("add-project")
    const projDialog = document.getElementById("proj-dialog")
    const closeProjBtn = document.getElementById("proj-close-btn")
    const confirmProjBtn = document.getElementById("proj-confirm-btn")
    addProject.addEventListener("click", () => {
        projDialog.showModal()
    })
    closeProjBtn.addEventListener("click", () => {
        projDialog.close()
    })
    confirmProjBtn.addEventListener("click", () => {
        const input = getProject()
        if (!input) return
        projDialog.close()

        createProject(input.title, input.priority)
    })

}

function taskConfiguration() {
    addTask.addEventListener("click", () => {
        taskDialog.showModal()
    })
    closeTaskBtn.addEventListener("click", () => {
        taskDialog.close()
    })
    confirmTaskBtn.addEventListener("click", () => {
        const currentProject = getCurrentProject()
        if (!currentProject) {
            const errorMsg = document.createElement("dialog")
            errorMsg.classList.add("error")
            errorMsg.textContent = "Error, no project selected!!"
            document.body.appendChild(errorMsg)
            errorMsg.showModal()
            setTimeout(() => {
                errorMsg.close();
                errorMsg.remove();
            }, 2000);
            return 
        }
        const input = getInput()
        if (!input) {
            return
        }
        taskDialog.close()

        const newTask = new Task(input.title, input.description, input.duration, input.difficulty)
        
        currentProject.addTask(newTask)
        console.log(currentProject)
    })
}










class User {
    constructor(name, level) {
        this.name = name
        this.level = level
    }
    levelUp(level) {
        return this.level + 1
    }
}
export { Task, User, taskConfiguration, projectConfiguration }



