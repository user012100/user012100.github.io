var buttons = document.querySelectorAll('button')
var descriptions = document.querySelectorAll('.description')

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', () => {
		var isOpen = descriptions[i].classList.contains('open')
		// console.log(isOpen)
		for (var a = 0; a < descriptions.length; a++) {
			descriptions[a].classList.remove('open')
		}

		if (!isOpen) {
			descriptions[i].classList.add('open')
		}
	})
}