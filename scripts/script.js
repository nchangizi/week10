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

let input = "";

do {
  input = prompt("What is your name?");
  // prompt always returns string.
  //we need to convert the string to a number and check if it was successfully converted
} while (!isNaN(Number(input)));
// console.log(input);

// alert("Welcome " + input);
alert(`Welcome ${input}`)
