const button = document.querySelector("#btn");
const bulbImg = document.querySelector("#bulb");
console.log(bulbImg);

button.addEventListener("click", () => {
  if (bulbImg.src.match("off")) {
    bulbImg.src = "./on.jpeg";
    button.innerHTML = "trunoff";
  } else {
    bulbImg.src = "./off.jpeg";
    button.innerHTML = "trunOn";
  }
});
