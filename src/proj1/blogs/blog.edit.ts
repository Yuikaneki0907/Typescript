import { deleteBlog } from "./blog.delete.js";
import { IBlog, reloadTable } from "./blog.js";

const getDataEdit = () => {
  const btnEdit = document.querySelectorAll(".btn-edit");
  if (btnEdit) {
    btnEdit.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        const inpId = document.getElementById(
          "inpId-edit"
        )! as HTMLButtonElement;
        const inpTitle = document.getElementById(
          "inpTitle-edit"
        )! as HTMLInputElement;
        const inpAuthor = document.getElementById(
          "inpAuthor-edit"
        )! as HTMLInputElement;
        const inpContent = document.getElementById(
          "inpContent-edit"
        )! as HTMLInputElement;

        inpId.value = btn.getAttribute("data-edit-id")!;
        inpTitle.value = btn.getAttribute("data-title")!;
        inpAuthor.value = btn.getAttribute("data-author")!;
        inpContent.value = btn.getAttribute("data-content")!;
      });
      editBlog(btn as HTMLButtonElement);
    });
  }
};

const editBlog = (btnEdit: HTMLButtonElement) => {
  const btnEditBlog = document.querySelector(
    "#btnEditBlog"
  ) as HTMLButtonElement;

  if (btnEditBlog) {
    btnEditBlog.addEventListener("click", async () => {
      const inpId = document.getElementById("inpId-edit")! as HTMLButtonElement;
      const inpTitle = document.getElementById(
        "inpTitle-edit"
      )! as HTMLInputElement;
      const inpAuthor = document.getElementById(
        "inpAuthor-edit"
      )! as HTMLInputElement;
      const inpContent = document.getElementById(
        "inpContent-edit"
      )! as HTMLInputElement;

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

      const res: IBlog = await rawData.json();
      console.log(res);

      //close modal
      //@ts-ignore
      const myModal = bootstrap.Modal.getOrCreateInstance("#modalEditBlog", {
        keyboard: false,
      });
      myModal.hide();

      // deleteBlog(btnEdit);
      // reloadTable(res);

      // window.location.reload();

      const row = btnEdit.closest('tr');
      if(row){
        row.innerHTML = `
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
      }
    });
  }
};

// const updateDataEdit = (btn: HTMLButtonElement) => {
  
// }

export { editBlog, getDataEdit };
