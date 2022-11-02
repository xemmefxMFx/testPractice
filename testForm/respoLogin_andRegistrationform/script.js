const container = document.querySelector(".container");
const pwShowHide = document.querySelectorAll(".showHidePw");
const pwFields = document.querySelectorAll(".password");

// Show/hide password and change icon

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener('click', () => {
        pwFields.forEach(pwField => {
            if(pwField.type === "password") {
                pwField.type = "text"
                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye")
                })
            } else {
                pwField.type = "password"
                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash")
                })
            }
        })
    })
})