import { atom } from 'nanostores'

export const todoList = atom([])
export const userName = atom("")

export const setStore = (list) => {
    todoList.set(list)
}

export const setUser = (user) => {
    userName.set(user)
}