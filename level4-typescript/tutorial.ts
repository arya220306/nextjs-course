// // string
// let a:string;
// a="arya"

// // int
// let age:number = 34;
// age=12

// // boolean
// let isOnline:boolean = true
// let isNotOnline = false

// // array
// let marks:number[] = [10, 20, 30]

// // tuple
// let user: [string, number] = ["arya", 10]

// // enumeration

// enum Role {Admin, User, Guest}
// Role.Admin
// Role.Guest

// // any

// let something:any = "anything" //by default every variable is of any type in ts

// functions

// function nothing(): void {
//   //can be written undefined
//   console.log("void type");
// }

// function hello(): string {
//   return "hello";
// }

// // default and optional parameter
// function add(first: number, second: number = 10): number {
//   return first + second;
// }

// add(12);



// type inference

// let a = 89;


// type annotation

// let b:number;



// // type aliases---------- {

// type ayush = string | number

// let a:ayush
// a=89
// a="aman"


// type status = "success" | "pending" | "error"

//  let b:status

//  b="error"


// // objects

// type user = {
//     name: string,
//     age: number
// }


// // const obj:user = {
// //     name:"ayush",
// //     age: "21"
// // }

// let a:user;
// a = {
//     name: "ayush",
//     age:24
// }


// type post = {
//     description: string,
//     image?:string, //making it optional
//     likes: number
// }

// const user:post = {
//     description: "My post",
//     image: "/image.png",
//     likes: 100
// }



// type mathfn = (a:number, b:number) =>number

// let add:mathfn=(a, b)=> {
//     return a
// }

// -----------------}


// // & operatror


// type A = {
//     a:number
// }

// type B = {
//     b:number
// }

// type AB  = A & B;

// let combine:AB = {
//     a: 32,
//     b:43
// }

// // interface

// interface A {
//     a:number
// }



// interface B extends A {
//     b:string
// }

// let obj: B = {
//     a:90,
//     b:"ayush",
// }


// type generics


// function hello<T>(a:T, b:T):T {
//     return a
// }

// // hello("str1", "str2")
// hello<string>("str1", "str2")


// interface user<T>{
//     name:string,
//     age: T
// }

// const ayush:user<number> = {
//     name:"ayush",
//     age:21

// }


const ayush:user ={
    name:"",
    age:""
}

let a:arya
a = 89
a="str"