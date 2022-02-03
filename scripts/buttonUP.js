document.addEventListener('DOMContentLoaded', () => {

    let toTopBtn = document.querySelector('.button-up-a');
    toTopBtn.style.display = 'none'

    window.onscroll = function () {
        if (window.scrollY > 800) {
            toTopBtn.style.display = 'block'
            toTopBtn.style.transition = "all 200ms ease-out";
        } else {
            toTopBtn.style.display = 'none'
        }
    }
});
