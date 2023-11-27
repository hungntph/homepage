document.addEventListener('scroll', () => {
    const header = document.querySelector('nav');
    if (window.scrollY > 0) {
        header.classList.remove('header-down');
        header.classList.add('header-up');
    } else {
        header.classList.remove('header-up');
        header.classList.add('header-down');    
    }
});