 // console.log("Welcome to DOM")
 // alert("welcome to DOM")
 let element = document.getElementById("root")
 //element.innerText="<h1>Welcome to DOM</h1>" // wht weype exactly  coes out

 // element.innerHTML="<h1>Welcome to DOM</h1>" //only content comes 
 let greetings=document.createElement("h1")
 greetings.innerText="Welcome to DOM"
 element.append(greetings,"I am appended")

    
 function constructUl(){
    let node = document.createElement("div")
    let node1 = document.createElement("ul")
    node1.setAttribute("class","list")
    let listItems=[]

 let listitem1=document.createElement("li")
 listitem1.innerText="create element"
 listItems.push(listitem1)

 let listitem2=document.createElement("li")
 listitem2.innerText="get element"
 listItems.push(listitem2)

 let listitem3=document.createElement("li")
 listitem3.innerText="append element"
 listItems.push(listitem3)

 node1.append(...listItems)

 node.appendChild(node1)

 document.body.appendChild(node)
 }
 
 let button=document.createElement("button")
 button.innerText="Click Me"
  button.setAttribute("id","btn")
 button.setAttribute("class","button")
 button.addEventListener("click",constructUl)
 document.body.appendChild(button)

 // let button1=document.createElement("button")
// button1.innerText="QuerySelector"
// button1.setAttribute("id","btn")
// button1.setAttribute("class","button")
// button1.addEventListener("click",()=>{
//     let elements = document.querySelector(".list")
 //     elements.setAttribute("style","list-style-type: circle;")
  // })
  // document.body.appendChild(button1)
   let button1 = document.createElement("button")
   button1.innerText = "QuerySelector"
   button1.setAttribute("id","btn")
    button1.setAttribute("class","button")
    button1.addEventListener("click",()=>{
    let elements = document.querySelector(".list")
    elements.setAttribute("style","list-style-type: circle;")
   })
 document.body.appendChild(button1)

//  let button2=document.createElement("button")
//  button2.innerText="QuerySelectorALL"
//  button2.setAttribute("id","btn")
//  button2.setAttribute("class","button")
//  button2.addEventListener("click",()=>{
//     let elements=document.querySelectorAll(".list")
//     elements.forEach((e)=>{
//     e.setAttribute("style","list-style-type: circle;")
//      })
    
//   })
//   document.body.appendChild(button2)

let button2 = document.createElement("button")
button2.innerText = "QuerySelectorAll"
button2.setAttribute("id","btn")
button2.setAttribute("class","button")
button2.addEventListener("click",()=>{
    let elements = document.querySelectorAll(".list")
    elements.forEach((e)=>{
        e.setAttribute("style","list-style-type: circle;")
    })
})
document.body.appendChild(button2)