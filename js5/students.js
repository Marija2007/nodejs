let students = [
];

function getAllStudents() {
  return students;
}

function getSingleStudent(id) {
  return students.find(s => s.id === id);
}

function addNewStudent(student) {
  students.push(student);
}

function deleteStudent(id) {
  students = students.filter(s => s.id !== id);
}

function editStudent(id, newData) {
  const index = students.findIndex(s => s.id === id);
  if (index !== -1) students[index] = { ...students[index], ...newData };
}

module.exports = { getAllStudents, getSingleStudent, addNewStudent, deleteStudent, editStudent };
