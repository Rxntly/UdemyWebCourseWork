// new, list, delete, quit.
// all done via prompt
// while loop req
// store through an array
// Splice method to delete 

let input = prompt("What would you like to do?");
const todos = ['Collect Money', 'Collect Food'];

while (input !== 'quit' && input !== 'q') {
  if (input === 'list') {
    console.log("********");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("********");
  } else if (input === 'new') {
    const newTodo = prompt("Whats the new to do?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list!`);
  } else if (input === "delete") {
    const index = parseInt(prompt('Okay what to delete then?'));
    if (!isNaN(index) && index >= 0 && index < todos.length) {
      const deleted = todos.splice(index, 1);
      console.log(`Okay, I just deleted ${deleted}`);
    } else {
      console.log('Invalid index');
    }
  } else {
    console.log('Unknown command');
  }

  input = prompt("What would you like to do?");
}

console.log("Okay, I'll quit");
