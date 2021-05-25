import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListsService {
  addList(rawList) {
    ProxyState.lists = [...ProxyState.lists, new List(rawList.name, rawList.color)]
    saveState()
  }
  deleteList(id) {
    ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
  }
}

export const listsService = new ListsService();