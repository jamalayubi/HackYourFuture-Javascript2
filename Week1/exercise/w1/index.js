console.log('Hack your future Belgium!');



// EXERCISE 1

// 1a: create a function called "changeHeader", put a console.log() inside this function to test

// 1d: add an event listener to the "Change header" button 
//     and call the "changeHeader" function when clicked ( you should see your console.log() )

// 1b: inside this function: select the header element and assign that to a variable called "header"

// 1c: change the inner html of the header element to your name


function changeHeader() {
    console.log("test");
    let header = document.getElementsByTagName('h1')[0];
    header.innerHTML = "Jamal";
}
let headerToChange = document.getElementById("btn-changeHeader")

headerToChange.addEventListener("click", changeHeader);


// ====================================== //


// EXERCISE 2

// 2a: create a function called "changeImage", put a console.log() inside this function to test

// 1b: add an event listener to the "Change image" button and call the "changeImage" function when clicked

// inside this function:

// 2c: select the "imageInput" element and assign to a variable called "imageInputValue"

// 2d: select the image element and assign to a variable called "imageToChange"

// 2e: to change the image: assign the imageInputValue to the image src

function changeImage() {
    console.log("test");
    let imageInputValue = document.getElementById("imageInput").value;
    let imageToChange = document.getElementById("imageToChange")
    imageToChange.src = imageInputValue;
}
    
document.getElementById("btn-changeImage").addEventListener("click", changeImage)


// ====================================== //


// Exercise 3:

// 3a: select "add todo" button & add click event listener to execute addTodo() function on click event

// 3b: define addTodo() function, in this function:

// 3c: get todoList element

// 3d: get todoInput element & log todoInput value

// 3e: create a <li> element

// 3f: set created <li> element innerHtml to todoInput value

// 3g: add <li> element to todoList
function addTodo(){
    const input_value = document.getElementById("todoInput").value,
          new_li_element = document.createElement("LI"),
          new_todo = document.createTextNode(input_value);
     
    new_li_element.appendChild(new_todo);
    document.getElementById("todoList").appendChild(new_li_element);
}

const todoButton = document.getElementById("btn-addTodo");
todoButton.addEventListener("click",addTodo);
