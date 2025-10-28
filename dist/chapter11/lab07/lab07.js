"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tbody = document.getElementById("tbody");
const fetchData = async () => {
    const res = await fetch("http://localhost:8000/posts");
    const data = (await res.json());
    if (data && data.length !== 0) {
        data.forEach((blog, index) => {
            tbody.innerHTML += `
<tr>
    <td>${blog.id}</td>
    <td>${blog.title}</td>
    <td>${blog.content}</td>
</tr> `;
        });
    }
};
fetchData();
