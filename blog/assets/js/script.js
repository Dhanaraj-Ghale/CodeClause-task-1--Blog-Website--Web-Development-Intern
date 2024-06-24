'use strict';

document.addEventListener("DOMContentLoaded", function() {
    // Navbar variables
    const nav = document.querySelector('.mobile-nav');
    const navMenuBtn = document.querySelector('.nav-menu-btn');
    const navCloseBtn = document.querySelector('.nav-close-btn');

    // Navbar toggle function
    const navToggleFunc = function() { 
        nav.classList.toggle('active'); 
    }

    navMenuBtn.addEventListener('click', navToggleFunc);
    navCloseBtn.addEventListener('click', navToggleFunc);

    // Theme toggle variables
    const themeBtn = document.querySelectorAll('.theme-btn');

    themeBtn.forEach(button => {
        button.addEventListener('click', function() {
            document.body.classList.toggle('light-theme');
            document.body.classList.toggle('dark-theme');
            themeBtn.forEach(btn => {
                btn.classList.toggle('light');
                btn.classList.toggle('dark');
            });
        });
    });

    // Smooth scrolling for Contact link
    const contactLink = document.querySelector('.nav-link-contact');

    if (contactLink) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();

            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // Newsletter subscription form
    const newsletterForm = document.getElementById("newsletterForm");
    const emailInput = document.getElementById("emailInput");
    const subscriptionMessage = document.getElementById("subscriptionMessage");

    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = emailInput.value.trim();

        if (isValidEmail(email)) {
            subscriptionMessage.innerHTML = "<p>Subscription Successful!</p>";
            subscriptionMessage.classList.remove('error');
            subscriptionMessage.classList.add('success');
            
            // Optionally, clear the input field after submission
            emailInput.value = "";
            
            // Clear any previous error or success messages after 5 seconds
            setTimeout(() => {
                subscriptionMessage.innerHTML = "";
                subscriptionMessage.classList.remove('success');
            }, 5000);
        } else {
            subscriptionMessage.innerHTML = "<p>Please enter a valid email address.</p>";
            subscriptionMessage.classList.remove('success');
            subscriptionMessage.classList.add('error');
        }
    });

    function isValidEmail(email) {
        // Basic email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
