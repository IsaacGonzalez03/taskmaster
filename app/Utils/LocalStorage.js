import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { Task } from "../Models/Task.js";

export function saveState() {
  localStorage.setItem('TaskMaster', JSON.stringify({

    tasks: ProxyState.tasks,
    lists: ProxyState.lists

  }))
  console.log('saved state', ProxyState)
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('TaskMaster'))
  console.log(data)
  if (data != null) {
    ProxyState.lists = data.lists.map(l => new List(l.name, l.color, l.id, l.completedTasks, l.totalTasks))
    ProxyState.tasks = data.tasks.map(t => new Task(t.name, t.listId, t.id, t.complete))
  }
}