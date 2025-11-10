const deleteBlog = (btnDelete) => {
    btnDelete.addEventListener("click", async () => {
        const id = btnDelete.getAttribute("data-id");
        const rawData = await fetch(`http://localhost:8000/blogs/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        // remove row
        const row = btnDelete.closest("tr");
        if (row)
            row.remove();
    });
};
const attachActionDelete = () => {
    const allBtn = document.querySelectorAll(".btn-delete");
    if (allBtn) {
        allBtn.forEach((blog, index) => {
            deleteBlog(blog);
        });
    }
};
export { deleteBlog, attachActionDelete };
