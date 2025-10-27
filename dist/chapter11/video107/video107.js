console.log("fetch API");
const fetchUsers = async () => {
    const res = await fetch("http://localhost:8000/users");
    // const data = (await res.json()) as IUser[];
    const data = (await res.json());
    console.log(data);
};
fetchUsers();
export {};
