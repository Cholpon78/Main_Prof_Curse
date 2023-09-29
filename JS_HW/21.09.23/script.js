let infos = [
  {
    foto: "./assets/foto.png",
    name: "Steven",
    salary: 5000,
    user_number: 0,
  },
  {
    foto: "./assets/foto.png",
    name: "Peter",
    salary: 6500,
    user_number: 0,
  },
  {
    foto: "./assets/foto.png",
    name: "Ellen",
    salary: 6800,
    user_number: 0,
  },
  {
    foto: "./assets/foto.png",
    name: "Anry",
    salary: 5720,
    user_number: 0,
  },
  {
    foto: "./assets/foto.png",
    name: "Julius",
    salary: 5890,
    user_number: 0,
  },
  {
    foto: "./assets/foto.png",
    name: "Natali",
    salary: 2588,
    user_number: 0,
  },
];

const div_root = document.querySelector("#root");
const div_form = document.createElement("form");
const name_input = document.createElement("input");
const salary_input = document.createElement("input");
const btn_submit = document.createElement("button");

name_input.type = "text";
name_input.placeholder = "Your name";
salary_input.type = "number";
salary_input.placeholder = "Your salary";
btn_submit.innerText = "Add card";

div_root.before(div_form);
div_form.append(name_input, salary_input, btn_submit);

const localSt = localStorage.getItem("card");
if (localSt) {
  infos = JSON.parse(localSt);
  render(infos);
}



div_form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = name_input.value;
  const price = salary_input.value;

  const new_card = {
    id: Date.now(),
    name: name,
    salary: price,
    foto: "./assets/foto.png",
  };
  infos.push(new_card);

   localStorage.setItem("card", JSON.stringify(infos));
  
  render(infos);
  // очищаю форму после рендера
  name_input.value = "";
  salary_input.value = "";

});


function card_delete(event) {
  // console.log(event.target);
  const cardToRemove = event.currentTarget; // Получаем карточку на которую кликаем
  cardToRemove.remove(); // Удаляем элемент карточки из DOM
}

localStorage.setItem("card", JSON.stringify(infos));

// Создание карточек
function createCard(data) {
  const div_card = document.createElement("div");
  const image = document.createElement("img");
  const info_card = document.createElement("div");
  const user_name = document.createElement("h1");
  const salary = document.createElement("h3");
  const user_number = document.createElement("h3");

  div_card.className = "card_wrapper";
  image.className = "card_image";
  info_card.className = "info_card";
  user_name.className = "user_name";

  image.src = data.foto;
  user_name.innerText = `Name: ${data.name} `;
  salary.innerText = `Salary: ${data.salary}`;
  user_number.innerText = `User Number: ${Date.now()}`; // почему у всех один ID. он генерирует один и вставляет для всех?

  // Добавляем обработчик двойного клика к карточке
  div_card.addEventListener("dblclick", card_delete);

  div_card.append(info_card);
  div_card.prepend(image);
  info_card.append(user_name, salary, user_number);

  return div_card; // чтобы потом использовать, надо return
}

// Создание и добавление карточек в DOM
function render(array) {
  div_root.innerHTML = "";
  for (let elem of array) {
    const card = createCard(elem);
    div_root.append(card);
  }
}
render(infos);

// я не поняла как делать с LS при запуске снова все обновляется
// localStorage.setItem('card', JSON.stringify(infos))
