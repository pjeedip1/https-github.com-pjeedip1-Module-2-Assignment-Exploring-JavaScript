//function greetTheStudent(studentName){ //parameter //named function
//    return `Hello there ${studentName}`;
//}
//Donot Repeat Yourelf (DRY)

// const greetTheStudent = function(studentName){ //parameter //anonymous function //expression
//     return `Hello there ${studentName}`;
// }

//fat arrow function
//const greetTheStudent = studentName => `Hello there ${studentName}`;

// const fullName = function (firstName, middleName, lastName){
//     return `${lastName}, ${middleName}, ${firstName}`;
// }

const fullName = (firstName, middleName, lastName) => `${lastName}, ${middleName}, ${firstName}`;

// const student = 'Mary Jane';
// const greet = greetTheStudent(student); //argument
// console.log(greet);

const titleName = fullName('Mary', 'William', 'Joseph');
console.log(titleName);