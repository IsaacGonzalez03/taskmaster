export class Task {
  constructor(name, listId, id = generateId(), complete = false) {
    this.name = name
    this.listId = listId
    this.id = id
    this.complete = complete
  }
  get Template() {
    return /*html*/ `

    <li>${this.name}</li>


    `
  }
}


function generateId() {
  return Math.floor(Math.random() * 10000)
}