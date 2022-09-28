const links = document.querySelectorAll('.nav-links li'),
  bars = document.getElementById('fa-bars'),
  logo = document.getElementById('logo-div');
var navbar = document.getElementById('navbar');
const link1 = document.getElementById('link1'),
  link2 = document.getElementById('link2'),
  link3 = document.getElementById('link3'),
  link4 = document.getElementById('link4'),
  link5 = document.getElementById('link5'),
  logoP = document.getElementById('logoP'),
  icon41 = document.getElementById('goo1'),
  icon31 = document.getElementById('git1'),
  icon19 = document.getElementById('fb1'),
  icon21 = document.getElementById('in1'),
  icon11 = document.getElementById('tw1'),
  icon3 = document.getElementById('git'),
  icon2 = document.getElementById('in'),
  icon1 = document.getElementById('tw'),
  icon = document.getElementById('fb');

let sticky = navbar.offsetTop,
  executed = !1,
  isY = !1;
particlesJS.load('particles-js', 'particlesjs.json'),
  particlesJS.load('particles2-js', 'particlesjs-2.json');
const myFunction = () => {
    window.pageYOffset > sticky ? addClasses() : removeClasses();
  },
  addClasses = () => {
    navbar.classList.add('sticky'),
      link1.classList.add('link-sticky'),
      link2.classList.add('link-sticky'),
      link3.classList.add('link-sticky'),
      link4.classList.add('link-sticky'),
      link5.classList.add('link-sticky'),
      logoP.classList.remove('opc1'),
      logoP.classList.add('logo-p-1'),
      bars.classList.add('fa-bars-1');
  },
  removeClasses = () => {
    navbar.classList.remove('sticky'),
      link1.classList.remove('link-sticky'),
      link2.classList.remove('link-sticky'),
      link3.classList.remove('link-sticky'),
      link4.classList.remove('link-sticky'),
      link5.classList.remove('link-sticky'),
      logoP.classList.remove('logo-p-1'),
      bars.classList.remove('fa-bars-1'),
      logoP.classList.add('opc1');
  },
  counting = () => {
    const a = window.scrollY;
    (isY = !!(1050 <= a && 2400 >= a)),
      !executed &&
        isY &&
        ((executed = !0),
        $('.count').each(function () {
          $(this)
            .prop('Counter', 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 4e3,
                easing: 'swing',
                step: function (a) {
                  $(this).text(Math.ceil(a));
                },
              }
            );
        }));
  },
  resIcon = () => {
    let a = $(window).width();
    1024 > a
      ? (icon.classList.remove('fa-lg'),
        icon1.classList.remove('fa-lg'),
        icon2.classList.remove('fa-lg'),
        icon3.classList.remove('fa-lg'),
        icon19.classList.remove('fa-2x'),
        icon11.classList.remove('fa-2x'),
        icon21.classList.remove('fa-2x'),
        icon31.classList.remove('fa-2x'))
      : (icon.classList.add('fa-lg'),
        icon1.classList.add('fa-lg'),
        icon2.classList.add('fa-lg'),
        icon3.classList.add('fa-lg'),
        icon19.classList.add('fa-2x'),
        icon11.classList.add('fa-2x'),
        icon21.classList.add('fa-2x'),
        icon31.classList.add('fa-2x'));
  },
  active = () => {
    window.pageYOffset > sticky
      ? $('.nav-div ul').toggleClass('active')
      : ($('.nav-div ul').toggleClass('active'),
        $('#logoP').toggleClass('logo-p-1'),
        $('.fa-bars').toggleClass('fa-bars-1'));
  },
  lockScroll = () => {
    $('body').hasClass('lock-scroll') && $('html').hasClass('lock-scroll')
      ? ($('body').removeClass('lock-scroll'),
        $('html').removeClass('lock-scroll'))
      : ($('body').addClass('lock-scroll'), $('html').addClass('lock-scroll'));
  },
  scrRm = () => {
    window.pageYOffset > sticky
      ? $('.nav-div ul').removeClass('active')
      : ($('.nav-div ul').removeClass('active'),
        $('#logoP').removeClass('logo-p-1'),
        $('.fa-bars').removeClass('fa-bars-1'));
  };
$(window).resize(function () {
  resIcon();
}),
  $(window).on('scroll', function () {
    counting(),
      myFunction(),
      $('.nav-div ul').hasClass('active') &&
        ($('.fa-bars').hasClass('fa-bars-1') ||
          ($('.fa-bars').toggleClass('fa-bars-1'),
          $('#logoP').toggleClass('logo-p-1')));
  }),
  $(document).ready(function () {
    resIcon(),
      counting(),
      myFunction(),
      (linkScroll = $('.scroll')),
      linkScroll.click(function (a) {
        a.preventDefault(),
          $('body, html').animate(
            {
              scrollTop: $(this.hash).offset().top,
            },
            1500
          );
      }),
      $('.fa-bars').click(function () {
        active(), lockScroll();
      });
  }),
  $(window).on('load', function () {
    $('.preloader').fadeOut(1e3, function () {
      $('html').removeClass('loading'), $('body').removeClass('loading');
    });
  }),
  $('#ul').click(function () {
    let a = $(window).width();
    768 > a && (scrRm(), lockScroll());
  });
var _INTERVAL_VAL,
  _CONTENT = [
    "I'm Web Developer.",
    "I'm not a great programmer",
    "I'm just a good programmer",
    'with great habits.',
  ],
  _PART = 0,
  _PART_INDEX = 0,
  _ELEMENT = document.querySelector('#text'),
  _CURSOR = document.querySelector('#cursor');

function Type() {
  var a = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
  (_ELEMENT.innerHTML = a),
    _PART_INDEX++,
    a === _CONTENT[_PART] &&
      ((_CURSOR.style.display = 'none'),
      clearInterval(_INTERVAL_VAL),
      setTimeout(function () {
        _INTERVAL_VAL = setInterval(Delete, 50);
      }, 2e3));
}

function Delete() {
  var a = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  (_ELEMENT.innerHTML = a),
    _PART_INDEX--,
    '' === a &&
      (clearInterval(_INTERVAL_VAL),
      _PART == _CONTENT.length - 1 ? (_PART = 0) : _PART++,
      (_PART_INDEX = 0),
      setTimeout(function () {
        (_CURSOR.style.display = 'inline-block'),
          (_INTERVAL_VAL = setInterval(Type, 100));
      }, 200));
}
_INTERVAL_VAL = setInterval(Type, 100);
