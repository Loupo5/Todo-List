class Task {
    constructor(title, description, priority) {
        this.title = title
        this.description = description
    }
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
export { Task, User }



