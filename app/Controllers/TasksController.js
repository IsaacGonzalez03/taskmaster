import { tasksService } from "../Services/TasksService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"

export class TasksController {
  constructor() {
  }
  addTask(listId) {
    console.log('adding task')
    window.event.preventDefault()
    let form = window.event.target
    let rawTask = {
      name: form.name.value,
      listId: listId
    }
    tasksService.addTask(rawTask)
    form.reset()
    saveState()
  }
  deleteTask() {

  }
  checkTask() {

  }
}