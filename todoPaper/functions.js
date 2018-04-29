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

/**
 * Serves for checking the result of validity
 * check (text field is not empty, all fields are present and id is unique).
 * @param todoItem
 */
function addTodoItem(todoItem) {

    // todoItem : { text: string, completed: boolean, id: number }.
}

/**
 *
 * @param typeOfTodoItem: e.g ‘completed’ || ‘not_completed’ || ‘all’
 */
//@TODO: adjust via boolean values
function viewTodoList(typeOfTodoItem) {

    if (typeOfTodoItem === 'all') {
        return todoItems;
    }

    else {
        var resultArray = todoItems.filter(function (item) {
            return item['completed'] === typeOfTodoItem;
        });
        return resultArray;
    }
}

/**
 * If newText is not empty, function changes text of todoItem by todoItemId on the new text. It should return
 * flag, whether edit was successful.
 * @param number
 * @param newText
 * @returns {boolean}
 */
function editTodoItem(number, newText) {
    var flagIfUpdated = false;
    if (newText.length != 0) {
        for (var x in todoItems) {
            if (todoItems[x]['id'] === number) {
                todoItems[x]['text'] = newText;
                flagIfUpdated = true;
                break;
            }
        }
    }
    else {
        flagIfUpdated = false;
    }
    return flagIfUpdated;
}


/**
 * Delete todoItem by todoItemId, return flag, whether delete was successful.
 * @param todoItemId
 */
function deleteToDoItem(todoItemId) {
    var ifDeletionSuccessful = false;


    return ifDeletionSuccessful;

}

/**
 * Change completed field of todoItem (get it by todoItemId) on true.
 * @param todoItemId
 */
function completeToDoItem(todoItemId) {
    for (var x in todoItems) {
        if (todoItems[x]['id'] === todoItemId) {
            todoItems[x]['completed'] = true;
            break;
        }
    }
}