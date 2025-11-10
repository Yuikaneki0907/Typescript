"use strict";
const fetchPost = async () => {
    const res = await fetch("http://localhost:8000/posts");
    const data = (await res.json());
    renderPost(data);
    console.log(data);
};
const renderPost = (data) => {
    const tbody = document.querySelector("#tableBlog tbody");
    if (tbody) {
        data.forEach((post, index) => {
            tbody.innerHTML += `
            <tr>
                        <td>${post.id}</td>
                        <td>${post.title}</td>
                        <td>${post.content}</td>
                        <td>
                            <button class="btn btn-warning">Edit</button>
                            <button class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
            `;
        });
    }
};
fetchPost();
