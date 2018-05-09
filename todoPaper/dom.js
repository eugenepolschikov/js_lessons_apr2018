/**
 * serving for deletion of all current items from the DOM and render items of an appropriate itemsType.
 * @param itemsType: ‘completed’ || ‘not_completed’ || ‘all’.
 */
function viewTodoListDom(itemsType) {
    document.getElementById("todo-items").innerHTML = "";
    let todoList = viewTodoList(itemsType);

    for (let i = 0; i < todoList.length; i++) {
        document.getElementById("todo-items").appendChild(addTodoToHtml(todoList[i]));
    }
}

/**
 * serving for adding todoItem to the DOM. It includes the text and id as text fields
 * and a checkbox (for the completed field visualization).
 * @param todoItem: object
 */
function addTodoItemDom(todoItem) {
    if (addTodoItem(todoItem)) {
        viewTodoListDom("all");
    }
    else {
        alert("Unable to add this invalid Todo item!");
    }
}


/**
 * serving for adding single todoItem to html
 * @param toDoItem
 * @returns {HTMLDivElement}
 */
function addTodoToHtml(toDoItem) {
    let div = document.createElement('div');
    div.className = "todo";
    div.id = toDoItem.id;
    let todoHtml;
    let checkBoxAttr = toDoItem.completed === true ? "checked" : "";
    let isCompleted = toDoItem.completed === true ? "green" : "red";
    todoHtml = `<div class="w3-container">
	<button type="button" class="btn btn-info" data-toggle="collapse" style="width:600px;height:40px;" data-target="#demo${toDoItem.id}">To do item #${toDoItem.id} </button>
	<div id="demo${toDoItem.id}" class="collapse">
	</p>
	<b>Text:</b>
	</p>
    <textarea rows="4" cols="50">${toDoItem.text}</textarea>	
    <div class="checkbox">
  	<label><input type="checkbox" value="" ${checkBoxAttr}>Is Completed: <span class="w3-${isCompleted}">${toDoItem.completed}</span></label>
	</div>
	</div></div></br></br>`

    div.innerHTML = todoHtml;
    return div;
}


/**
 * serving for replacement the text of the item with the given todoItemId.
 * @param todoItemId: number
 * @param newText: string
 */
function editTodoItemDom(todoItemId, newText) {
    if (editTodoItem(todoItemId, newText)) {
        viewTodoListDom("all");
    }
    else {
        alert("Unable to update Todo item with invalid Todo Item ID or empty text!");
    }
}

/**
 * serving for deletion of todoItem with the given todoItemId
 * @param todoItemId: number
 */
function deleteTodoItemDom(todoItemId) {
    if (deleteTodoItem(todoItemId)) {
        viewTodoListDom("all");
    }
    else {
        alert("Unable to delete a Todo Item with given id" + todoItemId);
    }
}