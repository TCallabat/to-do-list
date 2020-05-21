const button = document.querySelector("#submit");
const input = document.querySelector("#input");
const list_to_do = document.querySelector("#todo");
const list_current = document.querySelector("#current");
const list_done = document.querySelector("#done");

button.addEventListener("click", function (e) {
  e.preventDefault();


  if (input.value === '') {

    alert("Input is empty, you must write something to add a new task");

  } else {

    const list_item = document.createElement("li");

    const task = document.createElement("label");
    const task_div = document.createElement("div");
    const current_button = document.createElement("button");
    const done_button = document.createElement("button");
    const delete_button = document.createElement("button");
    const edit_button = document.createElement("button");

    task_div.className = "btn_task";
    task.className = "lbl_task";
    current_button.className = "btn_current";
    done_button.className = "btn_done";
    delete_button.className = "btn_delete";
    edit_button.className = "btn_edit";

    task.innerText = input.value;
    current_button.innerText = "Current";
    done_button.innerText = "Done";
    delete_button.innerText = "Delete";
    edit_button.innerText = "Edit";

    list_item.appendChild(task);
    task_div.appendChild(delete_button);
    task_div.appendChild(done_button);
    task_div.appendChild(current_button);
    task_div.appendChild(edit_button);
    list_item.appendChild(task_div);

    list_to_do.appendChild(list_item);

    current_button.addEventListener("click", function () {
      list_current.appendChild(list_item);
      edit_button.remove();
      current_button.style.display = "none";
      done_button.style.display = "initial";
    });

    done_button.addEventListener("click", function () {
      list_done.appendChild(list_item);
      edit_button.remove();
      done_button.style.display = "none";
      current_button.style.display = "initial";
    });

    delete_button.addEventListener("click", function () {
      list_item.remove();
    });

    edit_button.addEventListener("click", function () {
      let edit_task = prompt("Edit task :", task.textContent);
      if (edit_task) {
        task.innerText = edit_task;
      }
    });

    input.value = "";
    input.focus();
  }
});
