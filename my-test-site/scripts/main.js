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

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
    myHeading.textContent = 'Mobile phone is amazing, ${myName}';
    }
    
}
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mobile phone is amazing, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };

