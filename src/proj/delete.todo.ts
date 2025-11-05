import { ITodo } from "./main.js";

const deleteTodo = () => {
    const allDeleteBtn = document.querySelectorAll(".delete-todo");
    if(allDeleteBtn){
        allDeleteBtn.forEach((btn, index) => {
            const btnElement = btn as HTMLButtonElement;
            btnElement.addEventListener("click", () => {
                const id = btnElement.getAttribute("data-id");
                if(id){
                    removeTodo(+id);

                    const row = btnElement.closest("tr");
                    if(row) row.remove();
                }
            })
        })
    }
}

const removeTodo = (id: number) => {
    const todoListStr = localStorage.getItem("todoList");
    if(todoListStr){
        const todoList = JSON.parse(todoListStr) as ITodo[];
        const newListTodo = todoList.filter(todo => todo.id != id);
        localStorage.setItem("todoList", JSON.stringify(newListTodo))
        // window.location.reload();
    }
}

export {deleteTodo}