const displayTable = () => {
    const tableTodo = document.querySelector("#tableTodo tbody");
    const todoListStr = localStorage.getItem("todoList");
    if (todoListStr && tableTodo) {
        const todoList = JSON.parse(todoListStr);
        todoList.forEach((todo, index) => {
            tableTodo.innerHTML += `
            <tr>
            <th scope="row">${index + 1}</th>
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
        });
    }
};
export { displayTable };
