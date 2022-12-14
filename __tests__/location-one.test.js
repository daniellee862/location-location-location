const updateRemoteStudents = require("../location-one");

/* FUNCTION BEHAVIOUR 
.param for input array
.create updatedArray
.return array
.iterate over input array
.if element at the index of i is an object; object.keys
.check if array of object keys .includes(remote) 
.if true; push object to new array
.if false; arr[i].location = "remote", then push to updated array
.return updated arr.
*/

/* TEST-LIST
1. RETURN AN EMPTY ARRAY WHEN PASSED IN AN EMPTY ARRAY
2. TEST RETURN ARRAY IS A NEW ARRAY
3. TEST INPUT ARRAY AND RETURN ARRAY ARE THE SAME LENGTH
4. TEST THAT ALL RETURNED OBJECTS HAVE A LOCATION PROPERTY
5. TEST THAT THE INPUT ARRAY HASN'T BEEN MUTATED
 */

describe("updateRemoteStudents function tests", () => {
  // ARRANGE
  // ACT
  // ASSERT
  test("RETURN AN EMPTY ARRAY WHEN PASSED IN AN EMPTY ARRAY", () => {
    // ARRANGE
    const input = [];
    // ACT
    const returnValue = updateRemoteStudents(input);
    // ASSERT
    expect(input).toEqual(returnValue);
  });

  test("TEST RETURN ARRAY IS A NEW ARRAY", () => {
    // ARRANGE
    const input = [];
    // ACT
    const returnValue = updateRemoteStudents(input);
    // ASSERT
    expect(input).not.toBe(returnValue);
  });

  test("TEST INPUT ARRAY AND RETURN ARRAY ARE THE SAME LENGTH", () => {
    // ARRANGE
    const input = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    // ACT
    const returnValue = updateRemoteStudents(input);
    // ASSERT
    expect(input.length).toBe(returnValue.length);
  });

  test(" TEST THAT ALL RETURNED OBJECTS HAVE A LOCATION PROPERTY", () => {
    // ARRANGE
    const input = [
      { name: "Hypatia", age: 31 },
      { name: "Ramanujan", age: 22, location: "burnley" },
      { name: "Dave", age: 9, location: "manchester" },
      { name: "Barry", age: 103 },
      { name: "Bill", age: 24, location: "skipton" },
      { name: "Jackie", age: 56, location: "colne" },
    ];
    // ACT
    const returnValue = updateRemoteStudents(input);
    const studentsWithLocation = [];

    returnValue.forEach((student) => {
      const keys = Object.keys(student);
      if (keys.includes("location")) {
        studentsWithLocation.push(student);
      }
    });

    // ASSERT
    expect(returnValue).toEqual(studentsWithLocation);
  });

  test(" TEST INPUT HAS NOT BEEN MUTATED", () => {
    // ARRANGE
    const input = [
      { name: "Hypatia", age: 31, location: "burnley" },
      { name: "Ramanujan", age: 22, location: "burnley" },
      { name: "Dave", age: 9, location: "manchester" },
      { name: "Barry", age: 103, location: "burnley" },
      { name: "Bill", age: 24, location: "skipton" },
      { name: "Jackie", age: 56, location: "colne" },
    ];
    // ACT
    updateRemoteStudents(input);
    // ASSERT
    expect(input).toEqual([
      { name: "Hypatia", age: 31, location: "burnley" },
      { name: "Ramanujan", age: 22, location: "burnley" },
      { name: "Dave", age: 9, location: "manchester" },
      { name: "Barry", age: 103, location: "burnley" },
      { name: "Bill", age: 24, location: "skipton" },
      { name: "Jackie", age: 56, location: "colne" },
    ]);
  });
});
