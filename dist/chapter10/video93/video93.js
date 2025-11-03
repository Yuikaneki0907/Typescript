//union type
let username = "leanh@gmail.com"; //email
username = 1234567890; //id
username = "0987654321"; //number phone
const printf = (username) => {
    if (typeof username === "string") {
        console.log("my name is ", username.toUpperCase());
    }
    else {
        console.log("my name is ", username);
    }
};
printf("le anh");
export {};
