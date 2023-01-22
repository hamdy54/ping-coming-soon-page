const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const submitBtn = document.querySelector("#submitBtn"),
  errText = document.querySelector(".err__txt"),
  emailInput = document.querySelector("#email");

submitBtn.addEventListener("click", (e) => {
  if (emailInput.value === "") {
    e.preventDefault();
    errText.textContent = "Whoops! It looks like you forgot to add your email";
    emailInput.classList.add("err");
    errText.classList.add("show");
  }
  else if (!emailInput.value.match(regExp)) {
    e.preventDefault();
    errText.textContent = "Please provide a valid email address";
    emailInput.classList.add("err");
    errText.classList.add("show");
  }
  else {
    emailInput.classList.remove("err");
    errText.classList.remove("show");
  }
})