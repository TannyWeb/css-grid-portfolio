 const portfolioContainer = document.querySelector('.portfolio-items')

 portfolioContainer.addEventListener('click', (e) => {
    e.preventDefault();

    const modelToggle = e.target.closest('.portfolio-link')

    if(!modelToggle) return;

    const modal = modelToggle.parentNode.nextElementSibling;

    const closeButton = modal.querySelector('.modal-close');

    const modelOpen = () => {
        modal.classList.add('is-open')
        modal.style.animation = "modalFadeIn 500ms forwards"
        document.body.style.overflowY = 'hidden'
    }

    const modalClose = () => {
        modal.classList.remove('is-open')
        modal.removeEventListener('animationend', modalClose);
        document.body.style.overflowY = 'scroll'
    }

    closeButton.addEventListener('click', () =>{
        
        modal.style.animation = "modalFadeOut 500ms forwards"
        modal.addEventListener('animationend', modalClose);
    })

    document.addEventListener('keydown', (e) =>{
        if(e.keyCode === 27 ){
            modal.style.animation = "modalFadeOut 500ms forwards"
            modal.addEventListener('animationend', modalClose);
        }
    })

    modelOpen();

 })