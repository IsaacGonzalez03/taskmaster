import { ProxyState } from "../AppState.js "



export class List {
  constructor(name, color, id = generateId(), completedTasks = 0, totalTasks = 0) {
    this.name = name
    this.color = color
    this.id = id
    this.completedTasks = completedTasks
    this.totalTasks = totalTasks
  }

  get Template() {
    return /*html*/ `
  <div class="col-3 card m-3 bg-${this.color}">
    <h6>${this.name}</h6>
    <ul id="tasks">${this.Tasks}</ul>
    <form onsubmit="app.tasksController.addTask(${this.id})">
    <input class="form-control" type="text" placeholder="task" id="name" maxlength="50" minlength="3">
    <button type="submit" class="btn btn-primary" >Add Task</button>
    <div title="delete" class="btn btn-danger" onclick="window.confirm('that looks really important, we better not.')">Delete List</div>
    <div>total tasks: ${this.totalTasks}</div>
    </form>
  </div>
        `
  }

  get Tasks() {
    let task = ProxyState.tasks.filter(t => t.listId === this.id)
    let template = ''
    task.forEach(t => template += t.Template)
    return template
  }
}

function generateId() {
  return Math.floor(Math.random() * 10000)
}
