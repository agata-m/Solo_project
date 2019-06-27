//sidebar

let navWrapper = document.querySelector('.nav-wrapper'),
	navToogler = document.querySelector('.nav-toogler')

navToogler.addEventListener('click', function (event) {
	navWrapper.classList.toggle('active')
})

//postback --- range slider

var slider = document.getElementById("rangeSlider");
var output = document.getElementById("rangeValue");
output.innerHTML = slider.value + ' hours';

slider.oninput = function () {
	output.innerHTML = this.value;
}

//closing modals

function closeModal() {
	document.getElementById('overlay').classList.remove('show')
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		e.preventDefault()
		closeModal()
	})
})

document.querySelector('#overlay').addEventListener('click', function (e) {
	if (e.target === this) {
		closeModal()
	}
})

document.addEventListener('keyup', function (e) {
	if (e.keyCode === 27) {
		closeModal()
	}
})

//opening modals

function openModal(modal) {
	document.querySelectorAll('#overlay > *').forEach(function (modal) {
		modal.classList.remove('show')
	})
	document.querySelector('#overlay').classList.add('show')
	document.querySelector(modal).classList.add('show')
}

//opening addUrlModal

document.querySelector('#addUrlModal') {
	btn.addEventListener('click', function () {
		openModal('#addUrlModal')
	})
}