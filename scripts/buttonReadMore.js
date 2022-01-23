
const parentContainer =  document.querySelector('.read-more-container');

parentContainer.addEventListener('click', event=>{
    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = current.parentNode.querySelector('.read-more-text');
    
    if (currentText.className.includes('read-more-text--show')) {
        currentText.classList.remove('read-more-text--show')
        current.textContent = "Подробнее";
    } else {
        currentText.classList.add('read-more-text--show')
        current.textContent = "Скрыть";   
    }
})