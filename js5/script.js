const { getAllStudents, getSingleStudent, addNewStudent, deleteStudent, editStudent } = require('./students');

// 1. Прикажи ги сите студенти
console.log("Сите студенти:");
console.log(getAllStudents());

// 2. Прикажи еден студент по ID
console.log("Еден студент:");
console.log(getSingleStudent(2)); // пример ID

// 3. Додај три нови студенти
addNewStudent({ id: 4, name: "Aleksandar", year: 2026 });
addNewStudent({ id: 5, name: "Elena", year: 2025 });
addNewStudent({ id: 6, name: "Filip", year: 2024 });

console.log("После додавање:");
console.log(getAllStudents());

// 4. Избриши еден студент
deleteStudent(5);
console.log("После бришење:");
console.log(getAllStudents());

// 5. Едитирај еден студент
editStudent(6, { name: "Filip", year: 2026 });
console.log("После едитирање:");
console.log(getAllStudents());
