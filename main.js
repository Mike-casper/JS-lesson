
const user1={
    name:"Bob",
    age:25,
    isStudent:true
}
const address={
    country:"Sudan",
    city:"Hartum"
}

const user2=user1
user2.name="Anna"
console.log(user1)

//add copy = redact in copy = use copy with mutation

const userCopy={}
userCopy.age = user1.age
userCopy.isStudent = user1.isStudent
userCopy.name = "Bob"
console.log(user1)
console.log(userCopy)

const userCopy2={...user1, isMarried: undefined}//add new property
const userCopy3={...userCopy2, isMarried: false}//change property
const userCopy4={...userCopy2,...address, isMarried: false}//change property plus address
const userCopy5={...userCopy2,country:address.country, isMarried: false}//only country
console.log(userCopy2);
console.log(userCopy3);
console.log(userCopy4);
console.log(userCopy5);

//deep copy
const student ={
    id:2,
    name:"Bob",
    age:25,
    isStudent:true,
    adress:{
        country:"Sudan",
        city:"Hartum" //=>"Minsk"
    }
}
const userAddress =[
    {
        userId: 1,
        country:"Sudan",
        city:"Hartum",
    },
    {
        userId: 2,
        country:"Benin",
        city:"Proto-Novo",
    },
]
console.log(userAddress.find(a=>a.userId === student.id).city) //first method

const adress = userAddress.find(a=>a.userId === student.id) //second method
console.log(adress.city)

// const deepCopyUser = {...student, adress:{...student.adress,city:"Minsk"}}
// console.log(student)
// console.log(deepCopyUser)
//
// console.log(student.address===deepCopyUser.adress)

const people=[
    {
        id:1,
        name:"Bob",
        isStudent:true,
        address:{
            country:"Germany",
            city:"Berlin",
        }
    },
    {
        id:2,
        name:"Mike",
        isStudent:true,
        address:{
            country:"Italy",
            city:"Rome",
        }
    },
    {
        id:3,
        name:"Alex",
        isStudent:true,
        address:{
            country:"Portugese",
            city:"Cako",
        }
    },
]
const newPeople={
    id:4,
    name:"Jo",
    isStudent:true,
    address:{
        country:"Russia",
        city:"Moscow",
    }
}

const copypeople = [newPeople,...people ]
const copypeople2 = copypeople.map(q=>q.id === 4 ? {...q,name:"Biden",
    address: {...q.address, city:"Minsk"}} : q)
console.log(copypeople)
console.log(copypeople2)
