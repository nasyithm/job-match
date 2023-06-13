import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";

document.addEventListener("DOMContentLoaded", async () => {
  const dataJson = await import("../DATA.json");
  const datas = dataJson.default.workers;
  let dataCard = "";
  datas.forEach(function (data) {
    dataCard += `
      <div class="card">
        <div class="card__header">
          <img class="card__thumb" src="images/profile-image.png" alt="${data.name}" title="${data.name}">
        </div>
        <div class="card__content">
          <h2><a href="#" class="card__title">${data.name}</a></h2>
          <p class="card__age"><b>Umur : </b>${data.age}</p>
          <p class="card__edu"><b>Pendidikan : </b>${data.education}</p>
          <p class="card__skill"><b>Keahlian : </b>${data.skill.slice(0, 150)}...</p>
        </div>
      </div>
      `;
  });
  document.querySelector("#restaurant-list").innerHTML = dataCard;
});

const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

main.addEventListener("click", function () {
  drawer.classList.remove("open");
});
