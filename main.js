console.log("this is vishu ..");
let taskStore = ["sdds","sdfsd"]; //array
let inputContainer = document.createElement("div");

function getTask() {
  let inputBox = document.getElementById("inputGet").value; // here  i get value form input get
  let taskSection = document.getElementById("taskSection"); // task section where  paragraoh tag will append
  let para = document.createElement("p"); // cretae paragraph tag
  let deleteBtn = document.createElement("button"); // delete btn for paragraph tag

  inputContainer.className = "inputContainer";
  taskSection.appendChild(inputContainer);
  taskStore.push(inputBox); //push data inside the taskstore
  console.warn(inputBox);
  // fetch data form taskStore using map
  taskStore.forEach((value, index) => {
    para.innerText = value;
    inputContainer.appendChild(para);
    para.appendChild(deleteBtn);
    deleteBtn.innerText = "Delete";
    deleteBtn.dataset.id = index; /// dataSet se up element or tag ko uniquely identity k liye use kr rha hu
    para.dataset.ids = index; /// dataSet html ka part hai
    document.getElementById("inputGet").value = "";
    if (inputBox === "") {
      // ha pata hai ye condition shi nahi h par me paragraph tag ko regenrate hone se rok rha hu
      para.remove();
    }


    deleteBtn.addEventListener("click", function () {
                DeleteTask()          
    })
  });

 function DeleteTask() {
    console.log()
    //  taskStore array storeb-
    let id = deleteBtn.dataset.id;
    let vi = taskStore.splice(id, 1);




    para.remove();

 }

setInterval(() => {
        console.error(taskStore)   
}, 1000);
}
getTask()