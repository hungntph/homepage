let previousScroll = window.scrollY;

document.addEventListener('scroll', () => {
    const header = document.querySelector('nav');
    if (window.scrollY > previousScroll) {
        header.classList.remove('header-down');
        header.classList.add('header-up');
    } else {
        header.classList.remove('header-up');
        header.classList.add('header-down');    
    }
    previousScroll = window.scrollY;
});
