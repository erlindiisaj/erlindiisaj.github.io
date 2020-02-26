window.onscroll = function() {myFunction()};
const links = document.querySelectorAll('.nav-links li')
var navbar = document.getElementById("navbar");
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');
const logo = document.getElementById('logo-div');
const logoP = document.getElementById('logoP');
const icon = document.getElementById('fb')
const icon1 = document.getElementById('tw')
const icon2 = document.getElementById('in')
const icon3 = document.getElementById('git')
const icon4 = document.getElementById('goo')
const bars = document.getElementById('fa-bars')
const icon19 = document.getElementById('fb1')
const icon11 = document.getElementById('tw1')
const icon21 = document.getElementById('in1')
const icon31 = document.getElementById('git1')
const icon41 = document.getElementById('goo1')




particlesJS.load('particles-js', 'particlesjs.json');
particlesJS.load('particles-js-2', 'particlesjs-2.json');

var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset > sticky) {
		addClasses();
	} else {
		removeClasses();
	}
};

const addClasses = () => {
  navbar.classList.add("sticky");
 
  link1.classList.add("link-sticky");
  link2.classList.add("link-sticky");
  link3.classList.add("link-sticky");
  link4.classList.add("link-sticky");
  logoP.classList.remove('opc1');
  bars.classList.add('fa-bars-1');
  logoP.classList.add('logo-p-1')
  
  

};

const removeClasses = () => {
  navbar.classList.remove("sticky");
  link1.classList.remove("link-sticky");
  link2.classList.remove("link-sticky");
  link3.classList.remove("link-sticky");
  link4.classList.remove("link-sticky");
  logoP.classList.add('opc1');
  bars.classList.remove('fa-bars-1');
  logoP.classList.remove('logo-p-1')

};




/////////////////////////////////////////////
//////////   Content Typing   ///////////////
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


	
/////////////////////////////////////////////
//////////   Content Typing   ///////////////
/////////////////////////////////////////////




let isY = false;
let executed = false;


window.addEventListener('scroll', () => {
	const scrollY = window.scrollY;
	if (scrollY >= 1050 && scrollY <= 2400) {
		isY = true; 
	} else {
		isY = false;
	}
	if (!executed) {
		if (isY) {
			executed = true;
			$('.count').each(function () {
				$(this).prop('Counter',0).animate({
					Counter: $(this).text()
				}, {
					duration: 4000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
		}
	}
});


$(document).ready(function() {

		const scrollY = window.scrollY;
		if (scrollY >= 1050 && scrollY <= 2400) {
			isY = true; 
		} else {
			isY = false;
		}
		if (!executed) {
			if (isY) {
				executed = true;
				$('.count').each(function () {
					$(this).prop('Counter',0).animate({
						Counter: $(this).text()
					}, {
						duration: 4000,
						easing: 'swing',
						step: function (now) {
							$(this).text(Math.ceil(now));
						}
					});
				});
			}
		}
});


$(window).resize(function() {
	let w = $(window).width();

	
	if(w<1024) {
		icon.classList.remove('fa-lg')
		icon1.classList.remove('fa-lg')
		icon2.classList.remove('fa-lg')
		icon3.classList.remove('fa-lg')
		icon4.classList.remove('fa-lg')
		icon19.classList.remove('fa-2x')
		icon11.classList.remove('fa-2x')
		icon21.classList.remove('fa-2x')
		icon31.classList.remove('fa-2x')
		icon41.classList.remove('fa-2x')
	} else {
		icon.classList.add('fa-lg')
		icon1.classList.add('fa-lg')
		icon2.classList.add('fa-lg')
		icon3.classList.add('fa-lg')
		icon4.classList.add('fa-lg')
		icon19.classList.add('fa-2x')
		icon11.classList.add('fa-2x')
		icon21.classList.add('fa-2x')
		icon31.classList.add('fa-2x')
		icon41.classList.add('fa-2x')
	}
});


$(document).ready(function(){
	let w = $(window).width();
	if(w<1024) {
		icon.classList.remove('fa-lg')
		icon1.classList.remove('fa-lg')
		icon2.classList.remove('fa-lg')
		icon3.classList.remove('fa-lg')
		icon4.classList.remove('fa-lg')
		icon19.classList.remove('fa-2x')
		icon11.classList.remove('fa-2x')
		icon21.classList.remove('fa-2x')
		icon31.classList.remove('fa-2x')
		icon41.classList.remove('fa-2x')
	} else {
		icon.classList.add('fa-lg')
		icon1.classList.add('fa-lg')
		icon2.classList.add('fa-lg')
		icon3.classList.add('fa-lg')
		icon4.classList.add('fa-lg')
		icon19.classList.add('fa-2x')
		icon11.classList.add('fa-2x')
		icon21.classList.add('fa-2x')
		icon31.classList.add('fa-2x')
		icon41.classList.add('fa-2x')
	}
	  linkScroll = $('.scroll');
  
  linkScroll.click(function(e){
      e.preventDefault();
      $('body, html').animate({
         scrollTop: $(this.hash).offset().top
      }, 900);
   });
});




$(window).on('scroll', function(){
	if ($('.nav-div ul').hasClass("active")) {
		if ($('.fa-bars').hasClass("fa-bars-1")) {
			
		} else {
			$(".fa-bars").toggleClass('fa-bars-1');
			$('#logoP').toggleClass('logo-p-1');
		}
	}

});

const active = () => {
	if (window.pageYOffset > sticky) {
			$(".nav-div ul").toggleClass("active");
			
		} else {
			$('#logoP').toggleClass('logo-p-1');
			$(".nav-div ul").toggleClass("active");
			$(".fa-bars").toggleClass('fa-bars-1');
		}
}

const lockScroll = () => {
	if ($('body').hasClass('lock-scroll')) {
		$('body').removeClass('lock-scroll');
	}
	else {
		$('body').addClass('lock-scroll');

	}
}


$(document).ready(function(){
	$(".fa-bars").click(function(){
		active();
		lockScroll();
		
	})
});

$(".navigation a").click(function () {
	$(".nav-div ul").removeClass('active');
	lockScroll();
});

$('#ul').click(function () {
	$(".nav-div ul").removeClass('active');
	lockScroll();
});









