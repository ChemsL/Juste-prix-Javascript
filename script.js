let resultat = document.getElementById("resultat");
let mynbrInput = document.getElementById("mynbr");

function nbraleatoire(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const randomNumber = nbraleatoire(100);

console.log(randomNumber);

let numeroTentative = 0;
let container = document.querySelector("#container");
const divProposition = document.createElement("div");

container.appendChild(divProposition);

document.getElementById("Valider").addEventListener("click", function () {
  let mynbr = parseInt(mynbrInput.value);
  const tryagain = document.querySelector("#tryagain");
  const imgLose = document.querySelector("#imgLose");
  const imgWin = document.querySelector("imgWin")
  if (mynbr < randomNumber) {
    annonce.textContent = "Plus";
  } else if (mynbr > randomNumber) {
    annonce.textContent = "Moins";
  } else {
    annonce.textContent = "Bravo! C'est le bon nombre.";
    tryagain.style.visibility = "visible";
    Valider.style.visibility = "hidden";
    annonce.style.color = "green"
  }
  numeroTentative += 1;
  divProposition.textContent = "Tentative " + numeroTentative;

  if (numeroTentative >= 11) {
    Valider.style.visibility = "hidden";
    tryagain.style.visibility = "visible";
    imgLose.style.visibility = "visible";
    divProposition.style.visibility = "hidden"

  }

});


let imgArray = [
"img1.png",
"img2.png",
"img3.png",
"img4.png",
"img5.png",
]

function getRandomImg() {
  randomIndex = Math.floor(Math.random() * imgArray.length)
  selectImg = imgArray[randomIndex]
  document.getElementById('photo').innerHTML = `<img src="A7/image-juste-prix/${selectImg}" alt="image" style="width:300px; height: 300px">`
}

getRandomImg()