
const string = ["Alex", "Donald", "Bob","Игорь","юрий", 1, "1"]
console.log(string.sort())
//1. cортирует строки из "коробки"
//2. сортирует строки по алфавиту
//3. работает мутабельно
//4. возвращает ссылку на исходный массив
console.log(string.sort() ===string)
//5. часто используют  с reverse
const numbers = [1000, 99, 250, 5, 55, 54, 59, -2, -9, -66]

console.log(numbers.sort())
const compareFunc = (a, b) => { // по возрастанию
    if (a<b){
        return -1 // <0, если не надо менять местами
    } else {
        return 1000 // если надо менять местами
    }
}
const shortCompareFunc = (a,b) => a-b // по возрастанию
console.log(numbers.sort(compareFunc))
console.log(numbers.sort(shortCompareFunc))

const students = [
    {
        name: 'Bob',
        age: 22,
        isStudent: true,
        scores: 85
    },
    {
        name: 'Neo',
        age: 24,
        isStudent: true,
        scores: 85
    },
    {
        name: 'Qeo',
        age: 21,
        isStudent: true,
        scores: 85
    },
    {
        name: 'Adeo',
        age: 22,
        isStudent: true,
        scores: 90
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
];

console.log(students.sort((a,b)=>a.scores - b.scores))

console.log(students.sort((a,b)=>{
    if(a.scores<b.scores){
        return a.scores - b.scores //-1
    } else if (a.scores > b.scores) {
        return a.scores - b.scores //1
    } else {
        if(a.age <= b.age){
            return a.age - b.age //-1
        } else {
            return a.scores - b.scores//1
        }
    }

    }))

console.log(students.sort((a,b)=>a.name.localeCompare(b.name)).reverse())
//buble sort---------------------------------------------------------------------------------------
let nums = [12,23,34,9,91,1,25,66] // по возрастанию
for (let i=0; i<nums.length - 1; i++){ //повторяем цикл пока не отсортируем по порядку(капипастим)
    if(nums[i]>nums[i+1]){
        let temp = nums[i]
        nums[i] = nums[i+1]
        nums[i+1] = temp
    }
}
for (let i=0; i<nums.length - 1; i++){ //повторяем цикл пока не отсортируем по порядку(капипастим)
    if(nums[i]>nums[i+1]){
        let temp = nums[i]
        nums[i] = nums[i+1]
        nums[i+1] = temp
    }
}
console.log(nums)
//------------------другой вариант
let numss = [12,23,34,9,91,1,25,66]

for(let i=0; i<numss.length - 1; i++) {
    let isSorted = true
    for (let q = 0; q < numss.length - 1; q++) {
        if (numss[q] > numss[q + 1]) {
            isSorted = false;
            // let tempa = numss[q]
            // numss[q] = numss[q + 1]
            // numss[q + 1] = tempa //старый способ
            [numss[q], numss[q+1]] = [numss[q+1],numss[q]]
            // let [a,b] = [numss[q+1],numss[q]]
        }
    }
    if(isSorted)break
}
console.log(numss.reverse())
