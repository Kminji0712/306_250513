/* header */
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const logoImg = document.querySelector("#headerLogo");
  const search = document.querySelector(".search");
  // 헤더 색상 변경
  header.classList.add("on");
  logoImg.setAttribute("src", "image/logo01_c.png");
  search.classList.add("searchColor");
});

/* login */
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const signUpButton = document.getElementById("signup-btn");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    const userid = loginForm.userid.value;
    const password = loginForm.password.value;
    // 로그인 버튼
    if (userid === "userid" && password === "abc123") {
      alert("로그인에 성공하였습니다!");
      location.reload();
    } else {
      loginErrorMsg.style.opacity = 1;
    }
    // 회원가입 버튼
    signUpButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "index.html";
  });
});