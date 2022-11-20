
const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

const handler1 = (e) => {
    e.stopPropagation()
    alert("Hey");
}
const handler2 = (e) => {
    alert("yo!")
    e.stopPropagation()
}
const handler3 = (e) => {
    alert("wow!")
    e.stopPropagation()
}
const handler4 = (e) => {
   if (e.currentTarget.id === "small"){
       alert(e.currentTarget.id)
   }
}
const handler5 = (e) => {
    if (e.target.tagName === "BUTTON") {
        console.dir(e.currentTarget)
    }
}
// }const handler5 = (e) => {
//     if (e.currentTarget==="BUTTON") { //не сработает 1:25:00
//         console.dir(e.currentTarget)
//     }
// }

// sm.onclick = handler1;
// sm.onclick = handler2;
// md.onclick = () => alert("Можно писать так, без переменной , а сразу функцию");
// // md.onclick = null затираем значение md

// sm.addEventListener("click", handler1) /#456
// sm.addEventListener("click", handler2)
// sm.removeEventListener("click", handler1) /#456
// sm.addEventListener('click', handler4)
// sm.addEventListener('click', handler5)
sm.addEventListener("click", handler1)
md.addEventListener("click", handler2)
bg.addEventListener("click", handler3)

const a = document.getElementById("a")
a.addEventListener("click", (e)=>{
    e.preventDefault(e)
    alert("PreventDefault")
})
