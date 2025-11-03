console.log("Interface Generic");
const a = {
    data: "abc"
};
const fetchUsers = async () => {
    const res = await fetch("http://localhost:8000/users");
    const dataAPI = await res.json();
    const result = {
        status: 200,
        data: dataAPI
    };
    result.data.map(item => item.email);
};
export {};
