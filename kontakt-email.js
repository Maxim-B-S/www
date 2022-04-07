function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "maximbs04@gmail.com",
        Password : "Feliks010!",
        To : 'thesupergamers2004@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Message: " + document.getElementById("message")
    }).then(
    message => alert("Message Sent Succefully")
    );
}
