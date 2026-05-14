var buttons = document.querySelectorAll('button')

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var desc = this.nextElementSibling
        var isOpen = desc.classList.contains('open')

        // close all
        for (var a = 0; a < buttons.length; a++) {
            buttons[a].nextElementSibling.classList.remove('open')
        }

        // open this one only if it wasn't already open
        if (!isOpen) {
            desc.classList.add('open')
            this.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    })
}