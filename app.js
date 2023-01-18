//* Variables
const divList = document.querySelector(".div-list");
const input = document.getElementById("input");
const btnAdd = document.querySelector(".btn-add");
const btnClear = document.querySelector(".btn-clear");
const ul = document.querySelector("#ul")
// const li = document.createElement("li")

//*
btnAdd.addEventListener("click", () => {
    const li = document.createElement("li");
    // btnClear.after(li);
    ul.appendChild(li)
  li.innerHTML += `${input.value}`;
  input.value = "";
  li.addEventListener("click", () => {
    li.style.textDecoration = "line-through";
    li.style.opacity = 0.7
  });
  btnClear.addEventListener("click", () => {
    // li.innerHTML = "";
    ul.removeChild(li)

  });
});

input.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        btnAdd.click()
    }
})

window.addEventListener("load", () => {
    input.focus();
})