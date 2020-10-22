const registerForm = document.getElementById("register");
const registerInput = registerForm.querySelectorAll("input");
const registerButton = document.getElementById("registerButton");
const loginForm = document.getElementById("loginForm");
const loginInput = loginForm.querySelectorAll("input");
const loginButton = document.getElementById("loginButton");
const homeHead = document.getElementById("homeHeader");
const loginHead = document.getElementById("loginHeader");
const mainSection = document.getElementById("loginRegister");
const logoutButton = document.getElementById("logout");
const homeContent = document.getElementById('home');

const registerUser = [];

const clearRegisterInput = () => {
  for (const input of registerInput) {
    input.value = "";
  }
};

const clearLoginInput = () => {
  for (const input of loginInput) {
    input.value = "";
  }
};

const loginHandler = () => {
  const loginEmail = loginInput[0].value;
  const loginPassword = loginInput[1].value;
  if(loginEmail.trim() === '' || loginPassword.trim() === ''){
    alert("Please Enter Email and Password.");
  }
  let userIndex = 0;
  for (const value of registerUser) {
    if (loginEmail === value.email && loginPassword === value.password) {
      const loginUserName = value.name;
      const createUser = document.createElement("li");
      createUser.innerHTML = `
        <a href="#">${loginUserName}</a>
        `;
      const home = document.getElementById("homeHeader");
      const homeUL = home.querySelector("ul");
      homeUL.append(createUser);
      homeHead.classList.replace("invisible", "visible");
      loginHead.classList.replace("visible", "invisible");
      mainSection.classList.replace("main", "invisible");
      homeContent.classList.replace('invisible','visible');
      break;
    }
    if(loginEmail != value.email || loginPassword != value.password){
      alert("Wrong email or passoword.")
    }
    userIndex++;
  }
  clearLoginInput();
};

const registrationHandler = () => {
  const name = registerInput[0].value;
  const email = registerInput[1].value;
  const password = registerInput[2].value;
  const confirmPassword = registerInput[3].value;

  if (
    name.trim() === "" ||
    email.trim() === "" ||
    password.trim() === "" ||
    confirmPassword.trim() === ""
  ) {
    alert("Please Provide Authentic Information to Register. Thank You!");
    return;
  } else if (password != confirmPassword) {
    alert("Your Password should match.");
    return;
  } else {
    alert("Registration Successful!")
  }
  const newUser = {
    id: Math.random().toString(),
    name: name,
    email: email,
    password: password
  };
  console.log(newUser);
  registerUser.push(newUser);
  console.log(registerUser);
  clearRegisterInput();
};

const logoutHandler = () => {
  homeHead.classList.replace("visible", "invisible");
  loginHead.classList.replace("invisible", "visible");
  mainSection.classList.replace("invisible", "main");
  homeContent.classList.replace('visible','invisible');
  const home = document.getElementById("homeHeader");
  const homeUL = home.querySelector("ul");
  homeUL.lastElementChild.remove();
};

registerButton.addEventListener("click", registrationHandler);
loginButton.addEventListener("click", loginHandler);
logoutButton.addEventListener("click", logoutHandler);
