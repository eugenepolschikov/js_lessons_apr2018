let toDoItems = [];

let loadToDos = function () {
    $.getJSON("todos.json", function (data) {
        console.log(data);
        toDoItems = data;
    });
};
loadToDos();
