// select the form, input, and list elements from the HTML
const form = document.querySelector('form');
const input = document.querySelector('#new-todo');
const list = document.querySelector('#todo-list');
const todos = []; // an empty array to store todos

// add an event listener to the form
form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the default form submission
    const text = input.value.trim(); // get the value of the input
    if (text !== '') { // if the input is not empty
        todos.push(text); // add the new todo to the todos array
        renderTodos(); // re-render the list of todos
    }
    });

function renderTodos() {
    const template = todos.map(todo => `<li>${todo}</li>`).join(''); // map over the todos array and create an <li> for each todo
    list.innerHTML = template; // set the innerHTML of the list element to the template

}