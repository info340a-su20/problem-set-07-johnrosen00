'use strict';

/* your code goes here! */

class Task {
  constructor(description, complete){
    this.description = description;
    this.complete = complete;
  }

  render(){
    let ret = document.createElement('li');
    ret.textContent = this.description;
    if(this.complete){
      ret.classList.add("font-strike");
    }

    ret.addEventListener("click",() => {
      this.toggleFinished();
      ret.classList.toggle("font-strike");
    });

    return ret;
  }

  toggleFinished(){
    this.complete = !this.complete;
  }
}


class TaskList {
  constructor(tasks) {
    this.tasks = tasks;
  }

  addTask(description) {
    this.tasks.push(new Task(description, false));
  }

  render(){
    let ret = document.createElement("ol");
    this.tasks.forEach((item) => {ret.appendChild(item.render())});

    return ret; 
  }
}

class NewTaskForm {

  constructor(submitCallback) {
    this.submitCallback = submitCallback;
  }
  render(){
    let ret = document.createElement("form");
    let retInput = document.createElement("input");
    retInput.classList.add("form-control", "mb-3");
    retInput.setAttribute("placeholder", "What else do you have to do?");

    let retButton = document.createElement("button");
    retButton.classList.add("btn", "btn-primary");
    retButton.textContent = "Add task to list";


    ret.appendChild(retInput);
    ret.appendChild(retButton);

    retButton.addEventListener(
      "click",
      (event) => {
        event.preventDefault();
        this.submitCallback(retInput.value);
      }
    );


    return ret;

  }
}

class App {
  constructor(parentElement, taskList){
    this.parentElement = parentElement;
    this.taskList = taskList; 
  }

  render() {
    let form = new NewTaskForm(
      (a) => {
        this.addTaskToList(a);
      }
    );
    this.parentElement.appendChild(this.taskList.render());
    this.parentElement.appendChild(form.render());
  }

  addTaskToList(description){
    this.parentElement.innerHTML = "";
    this.taskList.addTask(description);
    this.render();
  }
}


let app = new App(
document.querySelector("#app"),
new TaskList([
  new Task("Make some classes", true),
  new Task("Arrow some functions", false)
]));

app.render();

//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof Task !== 'undefined') 
    module.exports.Task = Task;
  if(typeof TaskList !== 'undefined') 
    module.exports.TaskList = TaskList;
  if(typeof NewTaskForm !== 'undefined') 
    module.exports.NewTaskForm = NewTaskForm;
  if(typeof App !== 'undefined') 
    module.exports.App = App;
}
