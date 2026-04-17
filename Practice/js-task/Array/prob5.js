const student = {
  name: "Ravi",
  age: 20,
  grade: "A",
};

console.log(student["name"]);

student.age = 21;
console.log(student.age);
student.name = "Ruhani";
console.log(student["name"]);

student.subject = "Maths";
student.city = "Pune";
console.log(student);
