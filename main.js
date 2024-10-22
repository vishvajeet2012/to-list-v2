console.log("this is vishu ..")



function getTask () {
let inputBox  = document.getElementById("inputGet").value   // here  i get value form input get
let taskSection = document.getElementById("taskSection") // task section where  paragraoh tag will append
let para =  document.createElement('p') // cretae paragraph tag
let deleteBtn = document.createElement('button') // delete btn for paragraph tag 

        taskSection.appendChild(para)   
        taskSection.append(deleteBtn)
        deleteBtn.innerText ="Delete"
    para.innerText = inputBox

console.log(inputBox) 
}