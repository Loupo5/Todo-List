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

function taskConfiguration() {
    addTask.addEventListener("click", () => {
        taskDialog.showModal()
    })
    closeTaskBtn.addEventListener("click", () => {
        taskDialog.close()
    })
    confirmTaskBtn.addEventListener("click", () => {
        const task = taskAdder("bicep", "gonna get them 40cm at least", "", "")
        console.log(task)
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
export { Task, User, taskConfiguration }



