const buttonEl = document.createElement("button");
buttonEl.textContent = "ボタン";
const divEl = document.querySelector(".container");
divEl.appendChild(buttonEl);

const h1El = document.getElementById("title");
const bodyEl = document.querySelector("body");
bodyEl.removeChild(h1El);

const bodyEl = document.querySelector("body");
bodyEl.textContent = null;