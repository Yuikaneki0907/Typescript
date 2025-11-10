
interface IUser {
  id: number;
  name: string;
  email: string;
}

const fetchUser = async () => {
  const res = await fetch("http://localhost:8000/users");
  const data = (await res.json()) as IUser[];

  renderUser(data);
};

const renderUser = (data: IUser[]) => {
  const tbody = document.querySelector("#tableUser tbody");
  if (tbody) {
    data.forEach((user, index) => {
      tbody.innerHTML += `
            <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>
                            <button class="btn btn-warning">Edit</button>
                            <button class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
            `;
    });
  }
};

fetchUser();
