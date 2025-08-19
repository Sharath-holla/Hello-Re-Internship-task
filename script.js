document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const formMessages = document.getElementById('form-messages');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        formMessages.innerHTML = '';
        formMessages.className = 'form-messages';

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let errors = [];

        if (name === '') {
            errors.push('Name is required.');
        }

        if (email === '') {
            errors.push('Email is required.');
        } else if (!isValidEmail(email)) {
            errors.push('Please enter a valid email address.');
        }

        if (message === '') {
            errors.push('Message is required.');
        }

        if (errors.length > 0) {
            formMessages.classList.add('error');
            formMessages.innerHTML = errors.join('<br>');
        } else {
            formMessages.classList.add('success');
            formMessages.innerHTML = 'Thank you! Your message has been sent.';
            contactForm.reset();
        }
    });

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});