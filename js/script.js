function validateEmail() {
    const emailField = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const email = emailField.value;
    const validDomains = ['gmail.com', 'outlook.com', 'hotmail.com'];

    const emailDomain = email.substring(email.lastIndexOf('@') + 1);

    if (!validDomains.includes(emailDomain)) {
        emailError.textContent = 'El correo electrónico debe ser de los siguientes dominios: gmail.com, outlook.com, hotmail.com';
        emailError.style.display = 'block';
        return false; 
    }

    emailError.style.display = 'none';
    return true;  
}


const images = [
   'img/imagen1.jpg',
   'img/imagen2.jpg',
   'img/imagen3.jpg',
   'img/imagen4.jpg',
   'img/imagen5.jpg',
   'img/imagen6.jpg',
   'img/imagen7.jpg',
   'img/imagen8.jpg',
   'img/imagen9.jpg',
   'img/imagen10.jpg',
   'img/imagen11.jpg'
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 11000);
window.onload = () => {
    changeBackground(); 
};
