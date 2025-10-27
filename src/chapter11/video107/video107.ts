export { };

console.log("fetch API")

interface IUser {
    id: number,
    email: string,
    name: string
}

const fetchUsers = async () => {
    const res = await fetch("http://localhost:8000/users");
    // const data = (await res.json()) as IUser[];
    const data: IUser[] = (await res.json());
    console.log(data)
}

fetchUsers()