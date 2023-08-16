<<<<<<< HEAD
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
const imgOfhausees = [
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

for (let i = 0; i < imgOfhausees.length; i++) {
  parentHouse.innerHTML += ` 
<div class="house">
                <img src="${imgOfhausees[i]}" alt=""></img>
                <h3 class="nameOfHouse">${nameOfHouses[i]}</h3>
            </div>`;
}

=======
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
const imgOfhausees = [
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

for (let i = 0; i < imgOfhausees.length; i++) {
  parentHouse.innerHTML += ` 
<div class="house">
                <img src="${imgOfhausees[i]}" alt=""></img>
                <h3 class="nameOfHouse">${nameOfHouses[i]}</h3>
            </div>`;
}

>>>>>>> 53a35eee47babea7724b1c14a835ba00fa0ec04d
