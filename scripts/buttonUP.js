document.addEventListener('DOMContentLoaded', () => {

    let toTopBtn = document.querySelector('.button-up-a');
    toTopBtn.style.display = 'none'

    window.onscroll = function scrollTO() {
        if (window.scrollY > 600) {
            toTopBtn.style.display = 'block'
        } else {
            toTopBtn.style.display = 'none'
        }
    }
});
