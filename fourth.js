const todolistId_1 = '1'
const todolistId_2 = '2'

const todolist = [
    {
        id: todolistId_1,
        title: 'What to learn'
        // tasks:[
        //     {id:"11", title:"HTML"},
        //     {id:"12", title:"CSS"},
        //     {id:"13", title:"JS"},
        // ]
    },
    {
        id: todolistId_2,
        title: 'What to buy'
        // tasks:[
        //     {id:"21", title:"Milk"},
        //     {id:"22", title:"Beer"},
        //     {id:"23", title:"Water"},
        // ]
    }
]
const getPropName = (param) => `${param} name`
// const PropName = [getPropName("student")] (2)

const tasks = {
    [todolistId_1]: [ //"1"
        // todolistId_1: [ //"todolistId_1"
        {id: '11', title: 'HTML'},
        {id: '12', title: 'CSS'},
        {id: '13', title: 'JS'}
    ],
    [todolistId_2]: [ //"2"
        {id: '21', title: 'Milk'},
        {id: '22', title: 'Beer'},
        {id: '23', title: 'Water'}
    ],
    // name:"Bob" =  "name":"Bob"
    'user name': 'Bob',
    [getPropName('student')]: 'Alex',
    // [PropName]:"Aqer", (2)
    [10 + 30]: 'hey!'
}
const yo = {
    "1": 'Bob',
    "2": 'Nick',
    "3": 'Donald'
}
console.log(JSON.stringify(yo))
console.log(JSON.parse(JSON.stringify(yo)))

console.log(yo[2])
console.log(tasks)
console.log(tasks[getPropName('student')])
console.log(Object.keys(tasks))


