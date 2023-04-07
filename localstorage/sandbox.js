 // store data in localStorage 
localStorage.setItem('name', 'Buntu')
localStorage.setItem('age', 45)
 // get data from localStorage 
 let name = localStorage.getItem('name')
 let age = localStorage.getItem('age')
console.log(name,age)
 // update data in 
 
 localStorage.age = 30
 //let newAge = localStorage.setItem('age')
 console.log(age)
 
const todos = [
    {text:'play mariokart', author:'shaun'},
    {text:'buy some bags', author:'mario'},
    {text:'buy some bread ', author:'samu'},
    {text:'play pooltable', author:'martial'}
]

// console.log(JSON.stringify(todos))
localStorage.setItem('todos',JSON.stringify(todos))
const stored = localStorage.getItem('todos')
console.log(stored, JSON.parse(stored))