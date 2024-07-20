const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });



    regForm.addEventListener('submit', handleRegistration);

    async function handleRegistration(e) {
        e.preventDefault();

        try {
            const userDetails = {
                name: regForm.name.value.trim(),
                email: regForm.email.value.trim(),
                password: regForm.password.value.trim(),
                
            }
            let confirmPassword = regForm.confirmPass.value;
            if (userDetails.email == '' || userDetails.password == '' || userDetails.name == '') {
                throw new Error('Ensure all fields are filled')
            }
            if (confirmPassword != userDetails.password) {
                throw new Error('Password does not match')
            }
            const res = await fetch('http://localhost:5158/Vendors', {
                method: 'POST',
                body : userDetails,
            })
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }