const nameOfHouses = [
  "Summer House",
  "Brick House",
  "Renovated",
  "Barn House",
  "Summer House",
  "Brick House",
  "Renovated",
  "Barn House",
];
const imgOfHauses = [
  "./assets/img/house2.jpg",
  "./assets/img/house3.jpg",
  "./assets/img/house4.jpg",
  "./assets/img/house5.jpg",
  "./assets/img/house2.jpg",
  "./assets/img/house3.jpg",
  "./assets/img/house4.jpg",
  "./assets/img/house5.jpg",
];

const parentHouse = document.querySelector(".project");

let houses = "";

for (let i = 0; i < imgOfHauses.length; i++) {
  parentHouse.innerHTML += ` 
<div class="house">

<img src="${imgOfHauses[i]}" alt=""/>
 <h3 class="nameOfHouse">${nameOfHouses[i]}</h3>
 </div>`;
}

const cardsInfo = [
  {
    foto: "./assets/img/foto1.jpg",
    name: "John Doe",
    position: "CEO & Founder",
    text: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
  },
  {
    foto: "./assets/img/foto2.jpg",
    name: "Jane Doe",
    position: "Architects",
    text: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
  },
  {
    foto: "./assets/img/foto3.jpg",
    name: "Mike Ross",
    position: "Architects",
    text: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
  },
  {
    foto: "./assets/img/foto4.jpg",
    name: "Dan Star",
    position: "Architects",
    text: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.",
  },
];

const parentCard = document.querySelector(".cards");
let cards = "";
for (let i = 0; i < cardsInfo.length; i++) {
  parentCard.innerHTML += `<div class="card">
  <img src="${cardsInfo[i].foto}" alt="">
  <h4>${cardsInfo[i].name}</h4>
  <h5>${cardsInfo[i].position}</h5>
  <p>${cardsInfo[i].text}</p>
  <p>
    <button>Contact</button>
  </p>
</div>`;
}
