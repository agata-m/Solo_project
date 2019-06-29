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

// slider ---- moving value bubble

function modifyOffset() {
    var el, newPoint, newPlace, offset, siblings, k;
    width    = this.offsetWidth;
    newPoint = (this.value - this.getAttribute("min")) / (this.getAttribute("max") - this.getAttribute("min"));
    offset   = -1;
    if (newPoint < 0) { newPlace = 0;  }
    else if (newPoint > 1) { newPlace = width; }
    else { newPlace = width * newPoint + offset; offset -= newPoint;}
    siblings = this.parentNode.childNodes;
    for (var i = 0; i < siblings.length; i++) {
        sibling = siblings[i];
        if (sibling.id == this.id) { k = true; }
        if ((k == true) && (sibling.nodeName == "OUTPUT")) {
            outputTag = sibling;
        }
    }
    outputTag.style.left       = newPlace + "px";
    outputTag.style.marginLeft = offset + "%";
    outputTag.innerHTML        = this.value;
}

function modifyInputs() {
    
    var inputs = document.getElementById("rangeSlider");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].getAttribute("type") == "range") {
			inputs[i].onchange = modifyOffset;
			
            if ("fireEvent" in inputs[i]) {
                inputs[i].fireEvent("onchange");
            } else {
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                inputs[i].dispatchEvent(evt);
            }
        }
    }
}

modifyInputs();

/*
//postback --- range slider --- old version, not moving

var slider = document.getElementById("rangeSlider");
var output = document.getElementById("rangeValue");
output.innerHTML = slider.value;

if(slider) {
	slider.addEventListener('change', function() {
		output.innerHTML = slider.value;
	})
}
*/

//general --- chart configuration

var ctx = document.getElementById('myChart').getContext('2d');
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