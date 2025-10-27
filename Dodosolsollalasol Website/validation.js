
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
          
    
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};