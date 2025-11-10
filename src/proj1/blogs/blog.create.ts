// import { getRandomInt } from "../helper.js";
import { IBlog, reloadTable } from "./blog.js";

const createBlog = () => {
  const btnCreateBlog = document.getElementById(
    "btnCreateBlog"
  ) as HTMLButtonElement;

  if (btnCreateBlog) {
    btnCreateBlog.addEventListener("click", async () => {
      // get input
      const inpTitle = document.getElementById("inpTitle")! as HTMLInputElement;
      const inpAuthor = document.getElementById(
        "inpAuthor"
      )! as HTMLInputElement;
      const inpContent = document.getElementById(
        "inpContent"
      )! as HTMLInputElement;

      const title = inpTitle.value;
      const author = inpAuthor.value;
      const content = inpContent.value;

      // empty input
      if(!title && ! author && !content){
        alert("empty input...");
        return;
      }

      //call API
      const rawData = await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, author, content }),
      });

      const res: IBlog = await rawData.json();

      //close modal
      //@ts-ignore
      const myModal = bootstrap.Modal.getOrCreateInstance("#modalCreateBlog", {
        keyboard: false,
      });
      myModal.hide();

      // reset modal
      inpTitle.value = "";
      inpAuthor.value = "";
      inpContent.value = "";

      reloadTable(res);
    });
  }
};

export { createBlog };
