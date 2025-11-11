const getDataEdit = (btn) => {
    btn.addEventListener("click", () => {
        const inpId = document.getElementById("inpId-edit");
        const inpTitle = document.getElementById("inpTitle-edit");
        const inpAuthor = document.getElementById("inpAuthor-edit");
        const inpContent = document.getElementById("inpContent-edit");
        inpId.value = btn.getAttribute("data-edit-id");
        inpTitle.value = btn.getAttribute("data-title");
        inpAuthor.value = btn.getAttribute("data-author");
        inpContent.value = btn.getAttribute("data-content");
    });
};
const editBlog = () => {
    const btnEditBlog = document.querySelector("#btnEditBlog"); //
    if (btnEditBlog) {
        btnEditBlog.addEventListener("click", async () => {
            const inpId = document.getElementById("inpId-edit");
            const inpTitle = document.getElementById("inpTitle-edit");
            const inpAuthor = document.getElementById("inpAuthor-edit");
            const inpContent = document.getElementById("inpContent-edit");
            const id = inpId.value;
            const title = inpTitle.value;
            const author = inpAuthor.value;
            const content = inpContent.value;
            // empty input
            if (!title && !author && !content) {
                alert("empty input...");
                return;
            }
            const rawData = await fetch(`http://localhost:8000/blogs/${id}`, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, author, content }),
            });
            const res = await rawData.json();
            // console.log(res);
            const btnEditElement = document.querySelector(`[data-edit-id="${id}"]`);
            const rowEdit = btnEditElement.closest("tr");
            if (rowEdit)
                rowEdit.innerHTML = `
    <tr>
                        <th >${id}</th>
                        <th >${title}</th>
                        <th >${author}</th>
                        <th >${content}</th>
                        <th >
                        <button class = "btn btn-warning btn-edit" data-edit-id="${id}"
                        data-title = "${title}"
                        data-author = "${author}"
                        data-content = "${content}"
      data-bs-toggle="modal"
      data-bs-target="#modalEditBlog">Edit</button>
                        <button class = "btn btn-danger btn-delete" data-id="${id}">Delete</button>
                        </th>
                    </tr>
    `;
            // reloadTable(res)
            //close modal
            //@ts-ignore
            const myModal = bootstrap.Modal.getOrCreateInstance("#modalEditBlog", {
                keyboard: false,
            });
            myModal.hide();
            // window.location.reload();
        });
    }
};
const handleUpdateBlog = () => {
    const btnEdit = document.querySelectorAll(".btn-edit");
    if (btnEdit) {
        btnEdit.forEach((btn, index) => {
            getDataEdit(btn);
        });
    }
};
export { editBlog, getDataEdit, handleUpdateBlog };
