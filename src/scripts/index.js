// Any code you will write for your website (in the future!) should go here
const click = document.querySelector(".generate");
const showPassword = document.querySelector(".password");

click.onclick = function () {
  const newElement = document.createElement("p");
  // checking if I have already generated a password, if so clear the old one to generate the new one.
  showPassword.childNodes.length == 0
    ? null
    : showPassword.removeChild(showPassword.firstChild);
  //generating random password
  let numb = [0, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
  let alphaLc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let specialCharacters = ["!", "§", "$", "%", "&", "?", "@", "€"];
  let password = "";
  for (let i = 0; i < 30; i++) {
    let spChr =
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    let alpha = alphaLc[Math.floor(Math.random() * alphaLc.length)];
    let alphaUpper = alpha.toUpperCase();

    if (i % 2 == 0) {
      //((Math.floor(Math.random()) * 100) % 2 == 0)
      password += alpha;
    } else if (i % 3 == 0) {
      //((Math.floor(Math.random()) * 100) % 3 == 0)
      password += alphaUpper;
    } else if (i % 5 == 0) password += Math.floor(Math.random()) * 10;
    //((Math.floor(Math.random()) * 100) % 5 == 0)
    else {
      password += spChr;
    }
  }
  //inserting the new generated password into the "p"
  newElement.innerHTML = password;
  //appending the paragraph into the correct HTML to display it
  showPassword.appendChild(newElement);
};
