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


const getNames = (array) =>{
    const result = []
    for(let i=0;i<array.length;i++){
        result[i] = array[i].name
    }
    return result
}
console.log(getNames(students))

//const scores = [85,89,120,100]

const getScores = (array)=>{
    const result = []
    for(let i=0;i<array.length;i++){
        result[i] = array[i].scores
    }
    return result
}

const getStudents = (array)=>{
    const func = (x) =>({...x, isStudent: true})

    const result = []
    for(let i=0;i<array.length;i++){
        result[i] = func(array[i])
    }
    return result
}

console.log(getStudents(students))

const global = (array, func)=>{

}