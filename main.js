console.log("this is vishu ..")
let taskStore = [] //array


function getTask () {

    let inputBox  = document.getElementById("inputGet").value   // here  i get value form input get
    let taskSection = document.getElementById("taskSection") // task section where  paragraoh tag will append
    let para =  document.createElement('p') // cretae paragraph tag
    let deleteBtn = document.createElement('button') // delete btn for paragraph tag 

   
taskStore.push(inputBox)  //push data inside the taskstore 
// fetch data form taskStore using map 
taskStore.map((value,index) =>{
 
    para.innerText= value
    taskSection.appendChild(para);

    taskSection.appendChild(deleteBtn)
    deleteBtn.innerText= "Delete"
    

})
document.getElementById("inputGet").value = ""; 

 deleteBtn.addEventListener("click" , function(){
       let newtask = taskStore.filter(t => t != taskStore)

    console.log(newtask)   

})





// setInterval(function() {
//     console.log(para);
// }, 3000);






   
}