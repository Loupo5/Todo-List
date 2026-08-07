import { Project } from "./projectManager.js" 

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

function getCurrentProject() {
    let currProject = null
    const project = document.getElementById("project-container")
    project.addEventListener("click", () => {
        currProject = project
        return currProject
    })
    
}

function projectConfiguration() {
    const addProject = document.getElementById("add-project")
    const projDialog = document.getElementById("proj-dialog")
    addProject.addEventListener("click", () => {
        projDialog.showModal()
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
        const input = getInput()
        if (!input) {
            return
        }
        
        const newTask = new Task(input.title, input.description, input.duration, input.difficulty)
        console.log(newTask)
        const projectDiv = document.getElementById("project-container")
        const task = taskAdder("bicep", "gonna get them 40cm at least", "", "")
        console.log(task)
        /*Create dom elements for each parameter and append them as children to ProjectDiv*/
        taskDialog.close()

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



