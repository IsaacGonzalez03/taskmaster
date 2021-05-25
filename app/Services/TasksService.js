import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService {
  addTask(rawTask) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask.name, rawTask.listId)]
    ProxyState.tasks = ProxyState.tasks

  }

  deleteTask(id) {
    ProxyState.tasks = [...ProxyState.tasks.filter(t => t.id != id)]
    console.log(ProxyState.lists)
  }
}

export const tasksService = new TasksService();