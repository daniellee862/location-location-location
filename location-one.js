/* Location, Location, Location
This function will be called with an array of objects, each object representing a student on the Northcoders bootcamp. 
Some of the students have a specified location property which is a string of the office they will be attending during their time on the course, but for some students that property is missing.
Your function should return a *new array*, where all objects that were missing a location have been updated so that they now have a location property with a value of "remote". All other properties should remain as they were.

This function must be a *pure function*, i.e. it should have no side effects, and your test suite should reflect this.
 */

/* js
updateRemoteStudents([
  { name: 'Hypatia', age: 31, location: 'leeds' },
  { name: 'Ramanujan', age: 22 },
  { name: 'Tao', age: 47, location: 'manchester' }
]);

// should return

[
  { name: 'Hypatia', age: 31, location: 'leeds' },
  { name: 'Ramanujan', age: 22, location: 'remote' },
  { name: 'Tao', age: 47, location: 'manchester' }
]; */

//FOR LOOP
/* const updateRemoteStudents = (students) => {
  const updatedArr = [];

  for (let i = 0; i < students.length; i++) {
    const keys = Object.keys(students[i]);

    if (keys.includes("location")) {
      updatedArr.push(students[i]);
    } else {
      students[i].location = "remote";
      updatedArr.push(students[i]);
    }
  }

  return updatedArr;
}; */

//MAP FUNCTION
const updateRemoteStudents = (students) => {
  return students
    ? students.map((student) => {
        if (student.location === undefined) {
          student.location = "remote";
        }
        return student;
      })
    : students;
};

//RECURSISION lol
/* const updateRemoteStudents = (students) => {
  const newArr = [...students];
  const updatedArr = [];

  for (let i = 0; i < 1; i++) {
    console.log("echo");
    const keys = Object.keys(newArr[i]);
    if (keys.includes("location")) {
      newArr.slice(newArr[i], newArr[i] + 1);
      updatedArr.push(updateRemoteStudents(newArr));
    } else {
      newArr[i].location = "remote";
      updatedArr.push(updateRemoteStudents(newArr));
    }
  }

  return updatedArr;
}; */

module.exports = updateRemoteStudents;
