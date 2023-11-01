let preloader = document.querySelector(".preloader");
let progressBar = document.querySelector(".progressBar");
let scrollTop = document.querySelector(".scrollTop");
let video = document.querySelector(".new .container > .box.image .video");
let popup = document.querySelector(".popup");
let close = document.querySelector(".popup .close");
let registerLink = document.querySelector(".registerLink");
let registerPage = document.querySelector(".register");
let closeReg = document.querySelector(".register .container .closer");
let registerForm = document.querySelector(".register .container .registerForm");
let registerSpan = document.querySelectorAll(".register .container .registerForm span");
let userNameRe = document.querySelector(".register .container .registerForm input[type='text']");
let emailRe = document.querySelector(".register .container .registerForm input[type='email']");
let passwordRe = document.querySelector(".register .container .registerForm input[type='password']");
let loginLink = document.querySelector(".loginLink");
let loginPage = document.querySelector(".loginPage");
let closeLogin = document.querySelector(".loginPage .container .closer");
let reLogin = document.querySelector(".register .container form .re-login");
let loginForm = document.querySelector(".loginPage .container .loginForm");
let registerDeletted = document.querySelector("header .container nav ul li.registerLi");
let loginDeleted = document.querySelector("header .container nav ul li.loginLi");
let customerName = document.querySelector("header .container nav ul li.customerName a");
let searchPage = document.querySelector(".search-page");
let searchColser = document.querySelector(".search-page .container .closer");
let titleHolder = document.querySelector('.landing .container .form form .inputs > div.title');
let titleInput = document.querySelector('.landing .container .form form .inputs > div input[name="title"]');
let jobTitle = document.querySelectorAll(".search-page .container .search-job .job h2");
let jobInput = document.querySelector(".search-page .container .search-bar input");


customerName.style.display = "none";

// Preloader
document.body.style.cssText = "overflow: hidden; height: 100%;";

setTimeout(() => {
  preloader.classList.add("hide");
  document.body.style.cssText = "overflow: visible; height: auto;";
}, 100)

// Create Progress Bar
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener(("scroll"), () => {
  progressBar.style.width = `${(window.scrollY / height) * 100}%`;
})

// Create Scroll Top Button
window.addEventListener(("scroll"), () => {
  window.scrollY >= 300 ? scrollTop.classList.add("show") : scrollTop.classList.remove("show");
})

scrollTop.addEventListener(("click"), () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
})

// Create Body Styles
function bodyStyles() {
  if (popup.classList.contains("show")) {
    document.body.style.cssText = "overflow: hidden; height: 100%;";
  } else {
    document.body.style.cssText = "overflow: visible; height: auto;";
  }
}

// Controlling Register Page
registerLink.addEventListener(("click"), () => {
  registerPage.classList.add("show");
  document.body.style.cssText = "overflow: hidden; height: 100%;";
})

closeReg.addEventListener(("click"), () => {
  registerPage.classList.remove("show");
  document.body.style.cssText = "overflow: visible; height: auto;";
})

// Create Validation For Register Form
let userNameInput = false;
let emailInput = false;
let passwordInput = false;
let userNameValue, emailValue, passwordValue, userNameLenght = 0, emailLength = 0, passwordLength = 0;

userNameRe.oninput = function () {
  userNameValue = userNameRe.value;
  userNameLenght = userNameRe.value.length;
  registerFormValidation();
}

emailRe.oninput = function () {
  emailValue = emailRe.value;
  emailLength = emailRe.value.length;
  registerFormValidation();
}

passwordRe.oninput = function () {
  passwordValue = passwordRe.value;
  passwordLength =  passwordRe.value.length;
  registerFormValidation();
}

function registerFormValidation() {
  if(userNameLenght == 0) {
    registerSpan[0].innerHTML = `*UserName Is Required`;
  } else {
    registerSpan[0].innerHTML = `*UserName Shoudn't Start With Numbers`;
  }
  if (emailLength == 0) {
    registerSpan[1].innerHTML = `*Email Is Required`;
  } else {
    registerSpan[1].innerHTML = `*Enter A Valid Email Ex: name@gmail.com`;
  }
  if (passwordLength == 0) {
    registerSpan[2].innerHTML = `*Password Is Required`;
  } else {
    registerSpan[2].innerHTML = `*Write Password Correctly(It Must Have At Least 8 Characters or Numbers Or Specials)`;
  }
  if (userNameLenght != 0 && /[0-9]\w+/ig.test(userNameValue) == false) {
    userNameInput = true;
  } else {
    userNameInput = false;
  }
  if (emailLength != 0 && /\w+@gmail.(com|net)/ig.test(emailValue) == true) {
    emailInput = true;
  } else {
    emailInput = false;
  }
  if (passwordLength != 0 && passwordLength > 7) {
    passwordInput = true;
  } else {
    passwordInput = false;
  }
  if (userNameInput == false && emailInput == false && passwordInput == false) {
    registerSpan.forEach((el) => {
      el.classList.add("show");
    });
  }
  if (userNameInput == false) {
    registerSpan[0].classList.add("show");
  } else {
    registerSpan[0].classList.remove("show");
  }
  if (emailInput == false) {
    registerSpan[1].classList.add("show");
  } else {
    registerSpan[1].classList.remove("show");
  }
  if (passwordInput == false) {
    registerSpan[2].classList.add("show");
  } else {
    registerSpan[2].classList.remove("show");
  }
}

// Validation Register Form On Submit
registerForm.onsubmit = function(e) {
  registerFormValidation();
  if(userNameInput == true && emailInput == true && passwordInput == true) {
    window.localStorage.setItem("userName", userNameValue);
    window.localStorage.setItem("email", emailValue);
    window.localStorage.setItem("password", passwordValue);
    registerDeletted.remove();
    loginDeleted.remove();
    customerName.innerHTML = `Hello: ${window.localStorage.getItem("userName")}`;
    customerName.style.display = "block";
    registerPage.classList.remove("show");
    document.body.style.cssText = "overflow: visible; height: auto;";
  }
  e.preventDefault();
}

// Moving Between Register And Login
reLogin.addEventListener(("click"), () => {
  registerPage.classList.remove("show");
  loginPage.classList.add("show");
})

// Controllin Login Page
loginLink.addEventListener(("click"), () => {
  loginPage.classList.add("show");
  document.body.style.cssText = "overflow: hidden; height: 100%;";
})

closeLogin.addEventListener(("click"), () => {
  loginPage.classList.remove("show");
  document.body.style.cssText = "overflow: visible; height: auto;";
})

// Create Validation For Login Form
let email = false;
let password = false;
let loginEmailInput = document.querySelector(".loginPage .container .loginForm input[type='email']");
let loginPasswordInput = document.querySelector(".loginPage .container .loginForm input[type='password']");
let loginSpan = document.querySelectorAll(".loginPage .container .loginForm span");
let loginEmailValue, loginEmailLength = 0, loginPasswordValue, loginPasswordLength = 0;

loginEmailInput.oninput = function () {
  loginEmailValue = loginEmailInput.value;
  loginEmailLength = loginEmailInput.value.length;
  loginFormVaidation();
}

loginPasswordInput.oninput = function () {
  loginPasswordValue = loginPasswordInput.value;
  loginPasswordLength = loginPasswordInput.value.length;
  loginFormVaidation();
}

function loginFormVaidation() {
  if(loginEmailLength == 0) {
    console.log("Empty");
    loginSpan[0].innerHTML = `*Email Is Required`;
  } else {
    loginSpan[0].innerHTML = `*Enter A Valid Email Ex: name@gmail.com`;
  }
  if(loginPasswordLength == 0) {
    loginSpan[1].innerHTML = `*Password Is Required`;
  } else {
    loginSpan[1].innerHTML = `*Write Password Correctly(It Must Have At Least 8 Characters, Numbers or Specials)`;
  }
  if (email == false && password == false) {
    loginSpan.forEach((span) => {
      span.classList.add("show");
    })
  }
  if (loginEmailLength != 0 && /\w+@gmail.(com|net)/ig.test(loginEmailValue) == true) {
    email = true;
    loginSpan[0].classList.remove("show");
  } else {
    email = false;
    loginSpan[0].classList.add("show");
  }
  if (loginPasswordLength > 7) {
    password = true;
    loginSpan[1].classList.remove("show");
  } else {
    password = false;
    loginSpan[1].classList.add("show");
  }
}

// Validation Login Form On Submit
loginForm.onsubmit = function (e) {
  loginFormVaidation();
  if (email == true && password == true) {
    window.localStorage.setItem("email", loginEmailValue);
    window.localStorage.setItem("password", loginPasswordValue);
    registerDeletted.remove();
    loginDeleted.remove();
    customerName.innerHTML = `Hello: Sir❤️`;
    customerName.style.display = "block";
    loginPage.classList.remove("show");
    document.body.style.cssText = "overflow: visible; height: auto;";
  }
  e.preventDefault();
}

// Show Pop Up For Video Window
video.addEventListener("click", () => {
  popup.classList.add("show");
  bodyStyles();
});

// Create Close Button For Video Window
close.addEventListener("click", () => {
  popup.classList.remove("show");
  bodyStyles();
});

// Increase Categories Numbers
let categories = document.querySelector(".categories");
let categoriesNumbers = document.querySelectorAll(".categories .container .boxes .box a span.number");

// Create Time For Increase Numbers
function startCounter(el) {
  let counter = setInterval(() => {
    el.innerHTML = parseInt(el.innerHTML) + 1;
    if (el.innerHTML == el.dataset.number) {
      clearInterval(counter);
    }
  }, 2000 / el.dataset.number)
}

// Controlling Search Page
titleHolder.addEventListener(("click"), () => {
  document.body.style.cssText = "overflow: hidden; height: 100%;";
  searchPage.classList.add("show");
})

searchColser.addEventListener(("click"), () => {
  document.body.style.cssText = "overflow: visible; height: auto;";
  searchPage.classList.remove("show");
})

jobInput.onkeyup = function () {
  let inputValue = jobInput.value.toLowerCase();
  jobTitle.forEach((h2) => {
    if (h2.innerHTML.toLowerCase().indexOf(inputValue) >= 0) {
      h2.parentElement.style.display = "";
    } else {
      h2.parentElement.style.display = "none";
    }
  })
}
jobTitle.forEach((h2) => {
  h2.onclick = function () {
    jobInput.value = h2.innerHTML;
  }
})

// Increase Numbers On Scrolling
let flag = true;

window.addEventListener(("scroll"), () => {
  if (window.scrollY >= categories.offsetTop) {
    if (flag) {
      categoriesNumbers.forEach((el) => startCounter(el));
    }
    flag = false;
  }
})

let obj = [
  {
    "img": "images/google.png",
    "title": "Technical Lead",
    "address": "Kuala, Malaysia",
    "time": "10 hours ago",
    "salary": "$20k",
    "link-1": "Internship",
    "link-2": "Freelance"
  },
  {
    "img": "images/apple.png",
    "title": "Business Director",
    "address": "California, USA",
    "time": "1 day ago",
    "salary": "$90k",
    "link-1": "Senior",
    "link-2": "Full Time"
  },
  {
    "img": "images/meta.png",
    "title": "Technical Lead",
    "address": "Tower, Paris",
    "time": "22 hours ago",
    "salary": "$50k",
    "link-1": "Junior",
    "link-2": "Contract"
  },
  {
    "img": "images/slack.png",
    "title": "Dev Ops",
    "address": "Bangkok, Thailand",
    "time": "40 minutes ago",
    "salary": "$75k - 80k",
    "link-1": "Senior",
    "link-2": "Part Time"
  },
  {
    "img": "images/creative-market.png",
    "title": "UX Designer",
    "address": "Bangkok, Thailand",
    "time": "2 hours ago",
    "salary": "$100k",
    "link-1": "Entry",
    "link-2": "Remote"
  }
];
let counter = 0;
let arrLength = obj.length;
let title = document.querySelector(".features .container .box .holder .content h3");
let image = document.querySelector(".features .container .box .holder .image img");
let address = document.querySelector(".features .container .box .holder .content li:nth-child(1) span");
let time = document.querySelector(".features .container .box .holder .content li:nth-child(2) span");
let salary = document.querySelector(".features .container .box .holder .content li:nth-child(3) span");
let link1 = document.querySelector(".features .container .box .holder .content li:nth-child(4) a:first-of-type");
let link2 = document.querySelector(".features .container .box .holder .content li:nth-child(4) a:last-of-type");
let prev = document.querySelector(".features .container .parent-holder .prev");
let next = document.querySelector(".features .container .parent-holder .next");
let bullets = document.querySelectorAll(".features .container .parent-holder .bullets ul li");

checker();

next.onclick = function () {
  if(counter < arrLength - 1) {
    counter++;
    checker();
  }
}

prev.onclick = function () {
  if(counter > 0) {
    --counter;
    checker();
  }
}

bullets.forEach((el) => {
  el.onclick = function () {
    counter = el.dataset.num - 1;
    checker();
  }
})

function checker () {
  counter == 0 ? prev.classList.add("disabled") : prev.classList.remove("disabled");
  counter == arrLength - 1 ? next.classList.add("disabled") : next.classList.remove("disabled");
  counter == 0 ? bullets[0].classList.add("active") : bullets[0].classList.remove("active");
  counter == arrLength - 1 ? bullets[arrLength - 1].classList.add("active") : bullets[arrLength - 1].classList.remove("active");
  image.setAttribute("src", obj[counter]["img"]);
  title.textContent = obj[counter]["title"];
  address.textContent = obj[counter]["address"];
  time.textContent = obj[counter]["time"];
  salary.textContent = obj[counter]["salary"];
  link1.textContent = obj[counter]["link-1"];
  link2.textContent = obj[counter]["link-2"];

  bullets.forEach((el) => {
    el.dataset.num == counter + 1 ? el.classList.add("active") : el.classList.remove("active");
  })
}

// Start Slider

let wrapper = document.querySelector(".wrapper");
let carousel = document.querySelector(".happy-customers .container");
let arrowBtns = document.querySelectorAll(".happy-customers > i");
let firstCardWidth = carousel.querySelector(".box").offsetWidth;
let carouselChildrens = [...carousel.children];
let cardPreview = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPreview).reverse().forEach(card => {
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
carouselChildrens.slice(0, cardPreview).forEach(card => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

let isDragging = false, startX, startScrollLeft, timeOutId;

arrowBtns.forEach(arrow => {
  arrow.addEventListener(("click"), (e) => {
    carousel.scrollLeft += arrow.id === "left" ? -firstCardWidth : firstCardWidth;
  })
})


let dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}

let dragging = (e) => {
  if(!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

let dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
}

let infiniteScroll = () => {
  if(Math.floor(carousel.scrollLeft)=== 15) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
    carousel.classList.remove("no-transition");
  } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
}

carousel.addEventListener(("mousedown"), dragStart);
carousel.addEventListener(("mousemove"), dragging);
document.addEventListener(("mouseup"), dragStop);
carousel.addEventListener(("scroll"), infiniteScroll);