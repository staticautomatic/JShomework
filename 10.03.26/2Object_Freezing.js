let student = {
    name: "Alex",
    course: 4  
};

Object.freeze(student);

student["age"] = 26; 
delete student.name;
student.course = 3;

console.log(student);

