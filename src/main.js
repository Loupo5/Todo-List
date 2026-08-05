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
const addTask = document.getElementById("add-task")
addTask.addEventListener("click", () => {
    taskDialog.showModal()
})







class User {
    constructor(name, level) {
        this.name = name
        this.level = level
    }
    levelUp(level) {
        return this.level + 1
    }
}
export { Task, User }



