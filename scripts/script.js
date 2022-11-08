// alert("this is fun");
// console.log("this is really fun")
// for (let i = 0 ; i <1000000; i++)
// {
//     console.log(i);

// }

// for (let i = 1; i <=10 ; i++)
// {
//     console.log(Math.pow(2,i));
//     // console.log(2 ** i);
// }

// let i =11;
// while( i <=10)
// {
//     console.log(Math.pow(2,i))
//     // console.log(2 ** i)
//     i++;
// }i =11;
// while( i <=10)
// {
//     console.log(Math.pow(2,i))
//     // console.log(2 ** i)
//     i++;
// }

// let input = "";

// do {
//   input = prompt("What is your name?");
//   // prompt always returns string.
//   //we need to convert the string to a number and check if it was successfully converted
// } while (!isNaN(Number(input)));
// // console.log(input);

// // alert("Welcome " + input);
// alert(`Welcome ${input}`);

let fruits = ["Apple", "Banana"];
let newLength = fruits.push("Orange");

let poppedElem = fruits.pop();

fruits.unshift("Mango");

fruits.shift();

// for (let i = 0; i <fruits.length ; i++)
// {
//     console.log(fruits[i]);
// }

// for (let item of fruits)
// {
//     console.log(item);
// }
// const person = {
//   name: ["Bob", "Smith"],
//   age: 32,
//   gender: "male",
//   interests: ["music", "skiing"],
// };

// for (let prop in person)
// {
//     console.log(person[prop])
// }
// console.log(
//   `My name is ${person.name[0]} ${person.name[1]}. I am interested in ${person.interests[0]} and ${person.interests[1]}`
// );
let student1 = {
	ID: "A00022",
	GPA: 3.0,
	program: "CIT"
};

let student2 = {
	ID: "A01000",
	GPA: 3.1,
	program: "CST"
};

let student3 = {
	ID: "A00114",
	GPA: 3.2,
	program: "CIT"
};
let students = [student1, student2, student3];
let counter = 0;
// for (let i = 0; i < students.length ; i++)
// {
//     if (students[i].program
// }
for (let stud of students)
{
    if (stud.program === "CIT" && stud.GPA > 3)
    {
        counter++;
    }
    // console.log(stud)
}
console.log(counter)
