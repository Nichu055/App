const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //Show/hide password and change icon
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

    //Appear signup and login form
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
            if (userDetails.email === '' || userDetails.password === '' || userDetails.name === '') {
                throw new Error('Ensure all fields are filled');
            }
            if (confirmPassword !== userDetails.password) {
                throw new Error('Password does not match');
            }
            
            // Axios request
            const res = await axios.post('http://localhost:5158/api/Vendors', userDetails, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(res);
            window.location.href = "reg_vendor.html";
        } catch (error) {
            console.log(error);
        }
    }

    // login
    
    logForm.addEventListener('submit', handleLogin);

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const userDetails = {
                email: logForm.email.value.trim(),
                password: logForm.password.value.trim(),
            }
            if (userDetails.email === '' || userDetails.password === '') {
                throw new Error('Ensure all fields are filled')
            }
            const res = await axios.post('http://localhost:5158/api/Vendors', userDetails, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(res);
            window.location.href = "../index.html";
        } catch (error) {
            console.log(error);
        }
    }