export {};

const tbody = document.getElementById("tbody");
interface IBlog {
  id: number;
  title: string;
  content: string;
}
const fetchData = async () => {
  const res = await fetch("http://localhost:8000/posts");
  const data = (await res.json()) as IBlog[];
  if (data && data.length !== 0) {
    data.forEach((blog, index) => {
      tbody!.innerHTML += `
<tr>
    <td>${blog.id}</td>
    <td>${blog.title}</td>
    <td>${blog.content}</td>
</tr> `;
    });
  }
  
};
fetchData();
