console.log("this is vishu ..")
let taskStore = [] //array
            let inputContainer =document.createElement('div')
                        

function getTask () {
    
    let inputBox  = document.getElementById("inputGet").value   // here  i get value form input get
    let taskSection = document.getElementById("taskSection") // task section where  paragraoh tag will append
    let para =  document.createElement('p') // cretae paragraph tag
    let deleteBtn = document.createElement('button') // delete btn for paragraph tag 
  
inputContainer.className="inputContainer"
taskSection.appendChild(inputContainer)
taskStore.push(inputBox)  //push data inside the taskstore 
console.warn(inputBox)
// fetch data form taskStore using map 
taskStore.map((value,index) =>{
 
    para.innerText= value
    inputContainer.appendChild(para);
para.appendChild(deleteBtn)
    deleteBtn.innerText= "Delete"
    deleteBtn.dataset.id =index    /// dataSet se up element or tag ko uniquely identity k liye use kr rha hu
    para.dataset.ids = index  /// dataSet html ka part hai 
    document.getElementById("inputGet").value = ""; 
    if(inputBox === ""){ // ha pata hai ye condition shi nahi h par me paragraph tag ko regenrate hone se rok rha hu 
        para.remove() 
       
        
    }
 
        
    
})


deleteBtn.addEventListener("click" , function(){

    let newtask = taskStore.filter(t => t[deleteBtn.dataset.id] != deleteBtn.dataset.id )
    
  // delete k baad re render krne k liye
  console.error(deleteBtn.dataset.id) 

 console.log(newtask)
 getTask()  
    
})






setInterval(function() {
    console.error(taskStore[2]);
},1111110);


   
}
