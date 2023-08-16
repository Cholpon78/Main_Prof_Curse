
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

const parentHouse = document.querySelector(".house");

let houses = "";

for (let i = 0; i < imgOfHauses.length; i++) {
  parentHouse.innerHTML += ` 
<div class="house">
                <img src="${imgOfHauses[i]}" alt="">
                <h3 class="nameOfHouse">${nameOfHouses[i]}</h3>
            </div>`;
}

