/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

var countStudents = function (students, sandwiches) {
  let temp = -1;
  while (true) {
    if (sandwiches.length === 0) break;
    temp = students.findIndex((e) => e === sandwiches[0]);

    if (temp !== -1) {
      students[temp] = 2;
      sandwiches.shift();
    } else break;
  }

  return sandwiches.length;
};