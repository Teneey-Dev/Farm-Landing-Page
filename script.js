// 1. Find the switch (the icon) and the lightbulb (the menu)
    const hamburgerBtn = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('#mobile-menu');

    // 2. Listen for a click on the switch
    hamburgerBtn.addEventListener('click', () => {
        // 3. Flip the switch! This adds or removes the "active" CSS class.
        menuLinks.classList.toggle('active');
    });