let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
// const names = ["Bob","Alex","Nick","John"]


const funcName =(x)=>x.name
const funcScore=(x)=>x.scores
const funcStudent=(x)=>({...x, isStudent:true})

// const globalM=(array,func)=>{
//     const result=[]
//     for (let i=0; i<array.length;i++){
//         result[i] = func(array[i])
//     }
//     return result
// }
// console.log(global(students,funcName))

console.log(students.map(funcName))
//
// console.log(global(students,funcScore))
// console.log(global(students,funcStudent))

const globalF = (array, func) =>{
    const result=[]
    for (let i=0; i<array.length;i++){
        if(func(array[i])===true){ //true || false
            result.push(array[i])
        }
    }
    return result
}

console.log(globalF(students, s=>s.age>20))
console.log(students.filter( s=>s.age>20))

const globalFD = (array,func)=>{
    for (let i=0; i<array.length;i++){
        if(func(array[i])===true){ //true || false
            return array[i]
        }
    }
}

console.log(globalFD(students, s=>s.name==="Bob"))
console.log(students.find(s=>s.name==="Bob"))

const globalPush = (array, el) => {
    // return [...array,el]
    array[array.length]=el;
    return array.length

}

console.log((students))
console.log(globalPush(students, {hey:"Yo"}))
console.log((students))

const numberss = [1,2,3,4,5]

const  globalIndexOf = (numberss.indexOf(2))// 1
console.log(globalIndexOf)

const globalIndexOff = (numberss.indexOf(6))// -1
console.log(globalIndexOff)

const globalIndex = (arr, el) => {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === el) {
            return i
        }
    }
    return -1
}
