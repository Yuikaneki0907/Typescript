export { };

console.log("video 90: any unknown")

let name: any = "le anh";
name = 25;
name = true;

let name1: unknown = "le anh";
if(typeof(name) === "string"){
    name.toUpperCase();
}