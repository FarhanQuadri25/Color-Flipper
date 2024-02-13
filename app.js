const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "rgb(0, 0, 0)","crimson","#F72798", "#EBF400","#211951" ,"836FFF","#15F5BA","720455","3C0753"];
const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  //get random number between 0 - 3
  const randomNumber = getRandomNumber();
  console.log(getRandomNumber());
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
let getRandomNumber = () => Math.floor(Math.random() * colors.length);
