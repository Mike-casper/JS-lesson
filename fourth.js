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
    [todolistId_1]: [ //"1" todolist[0].id
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
    '1': 'Bob',
    '2': 'Nick',
    '3': 'Donald'
}
console.log(JSON.stringify(yo))
console.log(JSON.parse(JSON.stringify(yo)))

// console.log(yo[2])
// console.log(tasks)
// console.log(tasks[getPropName('student')])
// console.log(Object.keys(tasks))

const newTask = {id: '14', title: 'React'}
const copyTask = {...tasks, [todolistId_1]: [...tasks[todolistId_1], newTask]}
// console.log([...tasks[todolistId_1], newTask])
console.log(copyTask)

//delete id23
console.log({...tasks, [todolistId_2]: tasks})

//reduce
const nums = [1, 2, 3, 4, 5]
// console.log(nums.reduce((acc, el)=> acc + el, 0))
console.log(nums.reduce((acc, el) => {
    return acc + el
}, 0))
//acc = 0, el = 1 => 1
//acc = 1, el = 2 => 3
//acc = 3, el = 3 => 6
//acc = 6, el = 4 => 10
//acc = 10, el = 5 => 15
//=> 15
console.log(nums.reduce((acc, el) => acc > el ? acc : el))
console.log(Math.max(...nums))

const students = [
    {
        name: 'Bob',
        age: 22,
        isStudent: true,
        scores: 85
    },
    {
        name: 'John',
        age: 20,
        isStudent: true,
        scores: 95
    },
    {
        name: 'Nick',
        age: 25,
        isStudent: true,
        scores: 65
    }
]

console.log(students.filter(s => s.name !== 'Nick'))
console.log(students.reduce((acc, st) => {
    if (st.name !== 'Nick') {
        acc.push(st)
    }
    return acc
}, []))
//-----------------------------------------------------------2 разных метода ниже------------------------
console.log(students.map(st => ({...st, scores: st.scores + 10})))
console.log(students.reduce((acc, el) => {
    const copySt = {...el, scores: el.scores + 10}
    acc.push(copySt)
    return acc
}, []))

//---------------------как получить объект
const sts = {
    'Bob': {
        age: 22,
        isStudent: true,
        scores: 85
    },
    'John': {
        age: 20,
        isStudent: true,
        scores: 95
    }
}
console.log(students.reduce((acc, st) => {
    acc[st.name] = {...st}
    delete acc[st.name].name
    return acc
}, {}))
//-----------------------------------------------------