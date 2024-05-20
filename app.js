const text = document.querySelector(".text");
const keyBox = document.querySelector(".key__box");
const keyNumber = document.querySelector(".key__number");
const keyCode = document.querySelector(".event__key__subtitle");
const keyDescription = document.querySelector(".description");
const button = document.querySelector(".btn");

document.addEventListener("keyup", (e) => {
  text.classList.add("hidden");
  keyNumber.textContent = e.keyCode;
  if (e.code == "Space") {
    keyCode.textContent = e.code;
  } else {
    keyCode.textContent = e.key;
  }
  keyBox.classList.remove("hidden");
  button.classList.remove("hidden");
  console.log(e);
});
button.addEventListener("click", () => {
  text.classList.remove("hidden");
  keyBox.classList.add("hidden");
  button.classList.add("hidden");
  console.log("hd");
});
