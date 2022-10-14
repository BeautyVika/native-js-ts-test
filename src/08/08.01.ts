

export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}
type UsersType = {
    [key: string] : {id: number, name: string}
}
const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232312': { id: 3232312, name:'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name:'Katya'}
} //ассоциативный массив
// users[1212].name

let user = {id: 100500, name: 'Igor'}
users[user.id] = user  //добавление нового ключ-значения
delete users[user.id] //удаление
users[user.id].name = 'Vitya' //перезаписываем свойство


export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'}
]