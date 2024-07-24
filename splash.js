setTimeout(() => {
    document.getElementById('splash').classList.toggle('fade'); }, 2000);

    document.getElementById("ven").addEventListener("click", function() {
        window.location.href = "vendor/register/reg_vendor.html";
    });
    document.getElementById("use").addEventListener("click", function() {
        window.location.href = "user/register/user.html";
    });