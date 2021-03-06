//postback --- range slider --- old version, not moving

var slider = document.getElementById("rangeSlider");
var output = document.getElementById("rangeValue");


if(slider) {
    output.innerHTML = slider.value + ' hours';
    slider.addEventListener('change', function() {
		output.innerHTML = slider.value + ' hours';
	})
}


// jQuery flags selector

function onChangeCallback(ctr) {
    console.log("The country was changed: " + ctr);
}

$(function() {
    new NiceCountryInput($("#flags")).init();
});


//general --- chart configuration

var dupa = document.getElementById('myChart');

if(dupa) {
    var ctx = dupa.getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar', // chart choice
        data: {
            labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"], //x axis labels
            datasets: [{ //chart series
                label: "Signups", //series label
                backgroundColor: '#8DBEC8', //series color
                borderColor: '#8DBEC8',
                data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ], //series dataset
            },
            {
                label: "FTD",
                backgroundColor: '#F29E4E',
                borderColor: '#F29E4E',
                data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
            },
            {
                label: "Earned",
                backgroundColor: '#71B374',
                borderColor: '#71B374',
                data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
                hidden: true, //series not visible on chart
            }]
        },
    });
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

var overlay = document.querySelector('#overlay');

if(overlay) {
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            closeModal()
        }
    })
}


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

var urlTop = document.querySelector('#addUrlModalTop');
var urlBottom = document.querySelector('#addUrlModalBottom');

if(urlTop) {
	urlTop.addEventListener('click', function () {
		openModal('#myModal')
	})
}

if(urlBottom) {
	urlBottom.addEventListener('click', function () {
		openModal('#myModal')
	})
}