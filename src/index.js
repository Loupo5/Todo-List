import "./style.css"
import "./dialog.css"
import "./project.css"
import { Task, User, taskConfiguration, projectConfiguration } from "./main.js"

const task1 = new Task("walk", "for weight loss")
console.log(task1)

const user1 = new User("Johny", 4)
console.log(user1.level)
console.log(user1.levelUp())

taskConfiguration()
projectConfiguration()
