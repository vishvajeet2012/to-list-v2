console.log("this is vishu ..");
let taskStore = []; //array
let storage
let CheckData
function getTask() {


  let inputBox = document.getElementById("inputGet").value; // here  i get value form input get
  if (inputBox===""){
 
    console.warn(taskStore)
    console.log("ok")
  }
  else{
    document.getElementById("inputGet").value = "";
    taskStore.push(inputBox); //push data inside the taskstore

storageBox()

  }
}
        function storageBox () {
  
        storage = localStorage.setItem('task' ,JSON.stringify(taskStore))

  
  
          let getData = JSON.parse(localStorage.getItem('task'))
          taskStore =getData || [];
        renderTask()

      }


    function renderTask() {
      let taskSection = document.getElementById("taskSection"); // task section where  paragraoh tag will append
      taskSection.innerHTML = "";
      
     






  // fetch data form taskStore using map
  for (let i = 0; i < taskStore.length; i++)  {
    
    let para = document.createElement("p"); // cretae paragraph tag
  let deleteBtn = document.createElement("button"); // delete btn for paragraph tag
      let inputContainer = document.createElement("div");
    inputContainer.className = "inputContainer";
    taskSection.appendChild(inputContainer);
    deleteBtn.innerText = "Delete"; 
    para.innerText = taskStore[i];
    inputContainer.appendChild(para);
    inputContainer.appendChild(deleteBtn);
    para.className ="taskFeild";
    
    deleteBtn.dataset.id = i; /// dataSet se up element or tag ko uniquely identity k liye use kr rha hu
    para.dataset.ids = i; 
    
      
    deleteBtn.addEventListener("click", function () {
      DeleteTask(deleteBtn.dataset.id); 
     
      
    });
  
  };
 


  function DeleteTask(e) {
    //  taskStore array storeb
  taskStore.splice(e, 1); // remve tak from array 

 storageBox() //ystorage function ko call kiya hai and rerender the task list 

  }
}


window.onload  = function(){
  const savedTask =JSON.parse(localStorage.getItem('task'))
  taskStore = savedTask || []
  renderTask()
}


    


function clearSaved(){
      localStorage.removeItem('task')
}


setInterval(()=>{
  console.log(taskStore)
},5000)