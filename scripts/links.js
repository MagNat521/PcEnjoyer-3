let anchors = document.querySelectorAll('a[href*="#"]');

for (anchor of anchors) {
    if (anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const anchorId = this.getAttribute('href');
            
            try {
                document.querySelector(anchorId).scrollIntoView({
                    behavior: 'smooth'
                })
            } catch (err) {
                console.log('не могу найти элемент')
            }
        })
    }
}