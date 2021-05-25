import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js"
import { loadState } from "../Utils/LocalStorage.js";

function _draw() {
  console.log('drawing lists controller to page')
  let template = ''
  ProxyState.lists.forEach(l => template += l.Template)
  document.getElementById('lists').innerHTML = template
}

export class ListsController {
  constructor() {
    ProxyState.on('lists', _draw)
    ProxyState.on('tasks', _draw)
    loadState()
    _draw()
  }
  addList(event) {
    console.log('new list')
    event.preventDefault()
    let form = window.event.target
    let rawList = {
      name: form.name.value,
      color: form.color.value
    }
    listsService.addList(rawList)
    form.reset()
  }
  deleteList(id) {
    listsService.deleteList(id)
  }
}