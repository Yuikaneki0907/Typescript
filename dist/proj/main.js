import { deleteTodo } from "./delete.todo.js";
import { getRandomInt } from "./helper.js";
import { displayTable } from "./table.todo.js";
const btnCreateTodo = document.getElementById("btnCreateTodo");
btnCreateTodo?.addEventListener("click", () => {
    const inpTodoName = document.getElementById("inpTodoName");
    if (inpTodoName) {
        const name = inpTodoName.value;
        //save localstorage
        const newTodo = {
            id: getRandomInt(1, 100000),
            name,
        };
        handleSaveTodoLocalstorage(newTodo);
        //close
        var myModalEl = document.querySelector("#createTodoModal");
        //@ts-ignore
        var createTodoModal = bootstrap.Modal.getOrCreateInstance(myModalEl);
        createTodoModal.hide();
        //clear todo
        inpTodoName.value = "";
        // window.location.reload();
        //show toast
        const toastLiveExample = document.getElementById('liveToast');
        //@ts-ignore
        const toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
    }
});
const handleSaveTodoLocalstorage = (todo) => {
    //check ton tai cua todo
    const todosStr = localStorage.getItem("todoList");
    if (todosStr) {
        const todoArr = JSON.parse(todosStr);
        todoArr.push(todo);
        localStorage.setItem("todoList", JSON.stringify(todoArr));
    }
    else {
        localStorage.setItem("todoList", JSON.stringify([todo]));
    }
    handleAddNew(todo);
};
const handleAddNew = (todo) => {
    const tableTodo = document.querySelector("#tableTodo tbody");
    const newRow = document.createElement("tr");
    const todoListStr = localStorage.getItem("todoList");
    let index;
    if (todoListStr) {
        const todoListArr = JSON.parse(todoListStr);
        index = todoListArr.length;
        newRow.innerHTML = `
            <tr>
            <th scope="row">${index}</th>
            <td>${todo.id}</td>
            <td>${todo.name}</td>
            <td>
                <button class = "btn btn-danger
                delete-todo"
                data-id= ${todo.id}
                >Delete</button>
            </td>
          </tr>
            `;
        tableTodo?.appendChild(newRow);
        // displayTable();
        deleteTodo();
    }
};
displayTable();
deleteTodo();
