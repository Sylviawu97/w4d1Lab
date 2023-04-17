
const newInput=document.getElementById("new-task");
const updateButton=document.getElementById("update");

const taskList = document.getElementById("task-list");
const handleClick=(button) => {
    console.log(button);
    const listItem = button.parentNode;
    taskList.removeChild(listItem);
  };
updateButton.addEventListener("click",()=>{

    const newInputText=newInput.value;
    console.log(newInputText)
    if(newInputText){
        // taskList.innerHTML += `
        // <li> ${newInputText}
        // <button class="complete-btn">Complete</button>
        // </li>`
        let liTag=document.createElement("li");
        liTag.textContent=newInputText;
        let createButton=document.createElement("button");
        createButton.textContent="complete";
        createButton.classList.add("complete-btn");
        createButton.addEventListener("click",()=> handleClick(createButton));
        liTag.appendChild(createButton);
        taskList.appendChild(liTag);
    }

})


const completeButtons = document.querySelectorAll(".complete-btn");

completeButtons.forEach((button) => {
  button.addEventListener("click",()=> handleClick(button));
});

const clearButton=document.getElementById("clear");

clearButton.addEventListener("click",clearList);
function clearList(){
    taskList.innerHTML = '';
}
