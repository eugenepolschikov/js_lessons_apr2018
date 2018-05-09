
let todoItems = [];

let loadToDosFromJson = function () {
    $.getJSON("todos.json", function (data) {
        console.log(data);
        todoItems = data;
    }).done(function(){


        viewTodoListDom("all");
        // viewTodoListDom("completed");
        // viewTodoListDom("not_completed");
        // editTodoItemDom(55,"fsdfs");  // negative
        // addTodoItemDom({ "text": " my new custom item", "completed": true, "id": 543 });
        // deleteTodoItemDom(22);  // negative


    });
};

loadToDosFromJson();