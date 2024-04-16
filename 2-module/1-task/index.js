function sumSalary(salaries) {
  let sum = 0;
  console.log(salaries);
  for (let key in salaries) {
    if (salaries[key] == "Infinity" || salaries[key] == "-Infinity") {
      continue;
    }
    if (isNaN(salaries[key])) {
      continue;
    }
    if (typeof salaries[key] !== "number") {
      continue;
    } else {
      sum += salaries[key];
    }
  }
  return sum;
}
