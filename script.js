 const searchButton = document.getElementById('search-btn');
const usernameInput = document.getElementById('user-input');
const container = document.getElementById('container');



// This script gets today's date and inserts it into the #currentDate element
window.addEventListener('DOMContentLoaded', () => {
  const dateElement = document.getElementById('currentDate');

  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateElement.textContent = today.toLocaleDateString('en-US', options);
});

 
function Validateusername(username) {
    if(username.trim()==""){
        alert("Task cannot be empty");
        return false;
    }
    const regex = /^[A-Za-z0-9][A-Za-z0-9 .,!\-]{2,99}$/;
    const isMatching = regex.test(username);
    if(!isMatching){
        alert("Task is invalid");
    }
    return isMatching;
}

function fetchtaskDetails(username){
    searchButton.disabled = true;
    searchButton.textContent = "Adding...";

   //create a div for task
    const taskDiv = document.createElement('div');
    taskDiv.id='task';

    // create a h1 for task content
    const tasktext = document.createElement('h1');
    tasktext.id='text';
    tasktext.textContent=`${username}`;

    // create a button for task
    const taskButton = document.createElement('button');
    taskButton.id='task_button';
    taskButton.textContent='Complete';
    taskButton.addEventListener('click', () => {
     taskDiv.classList.add('completed-task');      
     tasktext.classList.add('completed');          
   textContent = "✓ Completed";       
  taskButton.classList.add('completed');       
  taskButton.disabled = true;                   
});


  // create a delete button to delete task
  const DeleteButton = document.createElement('button');
  DeleteButton.id='delete_button';
  DeleteButton.textContent='Delete';
  DeleteButton.onclick = () => {
  taskDiv.classList.add('fade-out');
  setTimeout(() => taskDiv.remove(), 400); // wait for animation to finish
};


    //append all element in taskDiv
    taskDiv.appendChild(tasktext);
    taskDiv.appendChild(taskButton);
    taskDiv.appendChild(DeleteButton);

    // append taskdiv to container
    container.appendChild(taskDiv);
    
    // clear the input after adding task
    usernameInput.value="";

    
    searchButton.disabled = false;
    searchButton.textContent = "Add";


    // add button to delete and 

}
 searchButton.addEventListener('click', function() {
        const username = usernameInput.value;
        console.log("logggin username: ", username);
        if (Validateusername(username)){
            fetchtaskDetails(username);
                }
    })