window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');
const logo = document.getElementById('logo-div');
const logoP = document.getElementById('logoP')


var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    addClasses();
  } else {
    removeClasses();
  }
}

const addClasses = () => {
  navbar.classList.add("sticky");
  link1.classList.add("link-sticky");
  link2.classList.add("link-sticky");
  link3.classList.add("link-sticky");
  link4.classList.add("link-sticky");
  logoP.classList.remove('opc1');
  logo.classList.add('logo');
}

const removeClasses = () => {
  navbar.classList.remove("sticky");
  link1.classList.remove("link-sticky");
  link2.classList.remove("link-sticky");
  link3.classList.remove("link-sticky");
  link4.classList.remove("link-sticky");
  logoP.classList.add('opc1');
  logo.classList.remove("logo");
}

particlesJS.load('particles-js', 'particlesjs.json');



/////////////////////////////////////////////

// List of sentences
var _CONTENT = [ 
	"I'm Web Developer.", 
	"I'm not a great programmer", 
	"I'm just a good programmer", 
	"with great habits."
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element 
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 2000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);




function animateValue(id, start, end, duration) {
    // assumes integer values for start and end
    
    var obj = document.getElementById(id);
    var range = end - start;
    // no timer shorter than 50ms (not really visible any way)
    var minTimer = 100;
    // calc step time to show all interediate values
    var stepTime = Math.abs(Math.floor(duration / range));
    
    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer);
    
    // get current time and calculate desired end time
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;
  
    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        obj.innerHTML = value;
        if (value == end) {
            clearInterval(timer);
        }
    }
    
    timer = setInterval(run, stepTime);
    run();
}




let isY = false;
let executed = false;
window.addEventListener('scroll', () => {
	const scrollY = window.scrollY;
	if (scrollY >= 1050 && scrollY <= 2000) {
		isY = true; 
	} else {
		isY = false;
	}
	if (!executed) {
		if (isY) {
			executed = true;
			animateValue("counter", 0, 448, 3000);
			animateValue("counter1", 0, 50, 3000);
			animateValue("counter2", 2790, 3540, 3000);
			animateValue("counter3", 0, 20, 3000);
		}
	}
})


$(document).ready(function(){
      linkScroll = $('.scroll');
  
  linkScroll.click(function(e){
      e.preventDefault();
      $('body, html').animate({
         scrollTop: $(this.hash).offset().top
      }, 500);
   });
});