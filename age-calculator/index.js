let button = document.getElementById("btn");
let date = document.getElementById("date");
let result = document.getElementById("result");

const calculateAge = () => {
  const birthYear = date.value;
  if (date === " ") return;

  const age = getAge(birthYear);
  result.innerHTML = age;
};

const getAge = (birthYear) => {
  const currentDate = new Date();
  const birthDayDate = new Date(birthYear);

  const age = currentDate.getFullYear() - birthDayDate.getFullYear();
  const year = currentDate.getMonth() - birthDayDate.getMonth();

  return age;
};

button.addEventListener("click", calculateAge);
