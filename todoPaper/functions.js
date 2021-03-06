// - addTodoItem(todoItem: object)
// Check if todoItem is valid and if yes, add it to todoItems array. Function should return the result of validity
// check (text field is not empty, all fields are present and id is unique).
// todoItem : { text: string, completed: boolean, id: number }.
// - viewTodoList(itemsType: string)
// Function takes itemsType argument (‘completed’, ‘not_completed’, ‘all’) and returns all items of this type.
// - editTodoItem(todoItemId: number, newText: string)
// If newText is not empty, function changes text of todoItem by todoItemId on the new text. It should return
// flag, whether edit was successful.
// - deleteTodoItem(todoItemId: number)
// Delete todoItem by todoItemId, return flag, whether delete was successful.
// - completeTodoItem(todoItemId: number)
// Change completed field of todoItem (get it by todoItemId) on true.

// todoItem : { text: string, completed: boolean, id: number }.
/**
 * Serves for checking the result of validity
 * check (text field is not empty, all fields are present and id is unique).
 * @param todoItem
 */
function addTodoItem(todoItem) {
    let ifValid = true;

    // text length should be greater than 0 ; completed should either be equal to true or false ;
    // item id should not be empty
    if (todoItem["text"].length === 0 || typeof(todoItem["completed"]) !== typeof(true) ||
        todoItem["id"].length === 0) {
        ifValid = false;
        return ifValid;
    }
    //check for uniqueness of id
    else {
        for (let iter in todoItems) {
            if (todoItems[iter]["id"] === todoItem["id"]) {
                ifValid = false;
                return ifValid;
            }
        }
    }
    // pushing item if all criteria matched
    todoItems.push(todoItem);
    return ifValid;
}

// todoItem : { text: string, completed: boolean, id: number }.
/**
 *
 * @param typeOfTodoItem: e.g ‘completed’ || ‘not_completed’ || ‘all’
 */
function viewTodoList(typeOfTodoItem) {
    if (typeOfTodoItem === "all") {
        return todoItems;
    }

    else {

        let resultArray = [];

        if (typeOfTodoItem === "completed") {
            resultArray = todoItems.filter(function (item) {
                return item["completed"] === true;
            });
        }
        else if (typeOfTodoItem === "not_completed") {
            resultArray = todoItems.filter(function (item) {
                return item["completed"] === false;
            });

        }
        return resultArray;
    }

}


// todoItem : { text: string, completed: boolean, id: number }.
/**
 * If newText is not empty, function changes text of todoItem by todoItemId on the new text. It should return
 * flag, whether edit was successful.
 * @param number
 * @param newText
 * @returns {boolean}
 */
function editTodoItem(number, newText) {
    let IfUpdated = false;
    if (newText.length !== 0) {
        for (let i in todoItems) {
            if (todoItems[i]["id"] === number) {
                todoItems[i]["text"] = newText;
                IfUpdated = true;
                break;
            }
        }
    }
    else {
        IfUpdated = false;
    }
    return IfUpdated;
}


// todoItem : { text: string, completed: boolean, id: number }.
/**
 * Delete todoItem by todoItemId, return flag, whether delete was successful.
 * @param todoItemId
 */
function deleteTodoItem(todoItemId) {
    let ifDeleted = false;
    for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i]['id'] === todoItemId) {
            todoItems.splice(i, 1);
            ifDeleted = true;
            break;
        }
    }
    return ifDeleted;
}

// todoItem : { text: string, completed: boolean, id: number }.
/**
 * Change completed field of todoItem (get it by todoItemId) on true.
 * @param todoItemId
 */
function completeToDoItem(todoItemId) {
    for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i]["id"] === todoItemId) {
            todoItems[i]["completed"] = true;
            break;
        }
    }
}

function generateItemId(){
    let Ids = todoItems.map(myTodoItem => myTodoItem["id"]);
    let generatedValue = Math.max.apply(Math, Ids)+1;
    console.log("generated value for new todoItem id:"+generatedValue);
    return generatedValue;

}