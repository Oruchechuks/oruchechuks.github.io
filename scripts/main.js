const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/phone.jpeg") {
    myImage.setAttribute("src", "images/phone2.jpg");
  } else {
    myImage.setAttribute("src", "phone.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("p");

