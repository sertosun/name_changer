const personName = document.getElementById("name");
const personAlter = document.getElementById("alter");
var personInput = document.getElementById("person");
const personBtn = document.getElementById("personBtn");

const persons = [
  {
    name: "Mehmet",
    alter: 18,
  },
  {
    name: "Sadeddin",
    alter: 18,
  },
  {
    name: "Basri",
    alter: 18,
  },
  {
    name: "Ertugrul",
    alter: 18,
  },
  {
    name: "Hasan",
    alter: 18,
  },
  {
    name: "Eman",
    alter: 18,
  },
];

function getPerson() {
  const { name, alter } = persons[personInput.value];
  personName.innerHTML = name;
  personAlter.innerHTML = alter;
}
