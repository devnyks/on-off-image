let images = document.querySelectorAll('.image');

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
        removeActiveClasses()
        images[i].classList.add('active')
    })
}

function removeActiveClasses() {
    for (let a = 0; a < images.length; a++) {
        images[a].classList.remove('active')
    }
}