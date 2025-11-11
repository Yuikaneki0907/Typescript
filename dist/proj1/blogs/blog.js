import { createBlog } from "./blog.create.js";
import { attachActionDelete, deleteBlog } from "./blog.delete.js";
import { editBlog, getDataEdit, handleUpdateBlog } from "./blog.edit.js";
const reloadTable = (blog) => {
    const tableBlog = document.querySelector("#tableBlog tbody");
    const newRow = document.createElement("tr");
    if (tableBlog) {
        newRow.innerHTML = `
    <tr>
                        <th >${blog.id}</th>
                        <th >${blog.title}</th>
                        <th >${blog.author}</th>
                        <th >${blog.content}</th>
                        <th >
                        <button class = "btn btn-warning btn-edit" data-edit-id="${blog.id}"
                        data-title = "${blog.title}"
                        data-author = "${blog.author}"
                        data-content = "${blog.content}"
      data-bs-toggle="modal"
      data-bs-target="#modalEditBlog">Edit</button>
                        <button class = "btn btn-danger btn-delete" data-id="${blog.id}">Delete</button>
                        </th>
                    </tr>
    `;
        tableBlog.appendChild(newRow);
        const btnDelete = document.querySelector(`[data-id = "${blog.id}"]`);
        deleteBlog(btnDelete);
        const btnEdit = document.querySelector(`[data-edit-id = "${blog.id}"]`);
        getDataEdit(btnEdit);
    }
};
const renderBlog = (data) => {
    const tbody = document.querySelector("#tableBlog tbody");
    if (tbody) {
        data.forEach((blog, index) => {
            tbody.innerHTML += `
            <tr>
                        <th >${blog.id}</th>
                        <th >${blog.title}</th>
                        <th >${blog.author}</th>
                        <th >${blog.content}</th>
                        <th >
                        <button class = "btn btn-warning btn-edit" 
                        data-edit-id="${blog.id}"
                        data-title = "${blog.title}"
                        data-author = "${blog.author}"
                        data-content = "${blog.content}" 
                        data-bs-toggle="modal"
                        data-bs-target="#modalEditBlog">
                        Edit
                        </button>
                        <button class = "btn btn-danger btn-delete" data-id="${blog.id}">
                        Delete
                        </button>
                        </th>
                    </tr>
            `;
        });
    }
};
const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = (await res.json());
    renderBlog(data);
};
fetchBlogs().then(() => {
    attachActionDelete();
    handleUpdateBlog();
});
createBlog();
editBlog();
export { reloadTable };
