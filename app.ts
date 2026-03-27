let firstname: string = "Ibrahim";
let age: number = 27;
let isStudent: boolean = true;
let coureses: string[] = ["Typescript", "Math", "Project"];
console.log(firstname, " " + age + " " + coureses, isStudent);
 
//kontater med tupels
let contacts: [string, string][] = [
  ["Ibrahim", "0728649267"],
  ["Dana",    "0728649261"],
  ["Dany",    "0728649123"],
];
console.log("Contacts list: ");
console.log(contacts);



function add(a: number, b: number): number{
    return a + b;
}

let result: number = add(3,5);
console.log("Summan= " + result);

//rekursion
function countdown(n: number): void{
if(n <= 0){
    console.log("klar!");
    return;
}
console.log(n);
countdown(n-1);
}
countdown(5);


interface Stundent{
    name: string,
    age: number;
    courses: string[],
    grade?: number;
}

let s: Stundent ={
    name: "Ibrahim",
    age: 28,
    courses: ["Matte", "Typescript"],
 };

 console.log(`${s.name} läser ${s.courses.length} kurser. Kurserna är: `+ s.courses);

//type
type User = {
    username: string,
    password: string,
    id: number
};

let u: User = {
    username: "iawad",
    password: "ib5211834",
    id: 1
};

console.log("username: " + u.username + ", password: " + u.password + ", id= " + u.id);