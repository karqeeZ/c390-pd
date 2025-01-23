function sendEmail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }   
    emailjs.send("service_bm0ybqi", "template_c7s5vxw", parms).then(alert("Email Sent!"))
}