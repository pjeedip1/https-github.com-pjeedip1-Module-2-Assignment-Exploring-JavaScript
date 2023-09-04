var students = [];
var student1 = {
    name: 'John Smith',
    birthYear: 1998,
    course: 'IFT 458',
    grade: 100,
    active: true,
    age: function calculate(){
        if(this.active){
            return 2023 - this.birthYear;
        }}}
var student2 = {
    name: 'Mary Comb',
    birthYear: 2001,
    course: 'IFT 458',
    grade: 90,
    active: false,
    age: function(){
        if(this.active){
            return 2023 - this.birthYear;
        }
        else{
            return 0;
        }}}
students.push(student1);
students.push(student2);
students.forEach((item)=> console.log(item.age()));
console.log(students);
// console.log(student1.age());
// console.log(student2.age());