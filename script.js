// hides navbar on scroll
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.currentScroll;
    if (currentScroll > lastScroll) {
        nav.style.top = '-8rem';
    } else {
        nav.style.top = '0';
    }
    lastScroll = currentScroll;
});


// displays navbar links
const hamburger = document.getElementById('hamburger');
const x = document.getElementById('x');
const navOverlay = document.getElementById('nav-overlay');
const body = document.getElementById('body');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show')
    x.classList.toggle('show');
    navOverlay.classList.toggle('show');
    x.classList.add('turn');
    body.classList.toggle('scroll');
});
x.addEventListener('click', () => {
    x.classList.toggle('show');
    hamburger.classList.toggle('show');
    navOverlay.classList.toggle('show');
    hamburger.classList.add('turn');
    body.classList.toggle('scroll');
});


// animates navbar arrows
const navLink1 = document.getElementById('nav-link-1');
const navArrow1 = document.getElementById('nav-arrow-1');
const navLink2 = document.getElementById('nav-link-2');
const navArrow2 = document.getElementById('nav-arrow-2');
const navLink3 = document.getElementById('nav-link-3');
const navArrow3 = document.getElementById('nav-arrow-3');
const navLink4 = document.getElementById('nav-link-4');
const navArrow4 = document.getElementById('nav-arrow-4');
const navLink5 = document.getElementById('nav-link-5');
const navArrow5 = document.getElementById('nav-arrow-5');

navLink1.addEventListener('mouseenter', () => {
    navArrow1.classList.toggle('move');
});
navLink1.addEventListener('mouseleave', () => {
    navArrow1.classList.toggle('move')
});
navLink2.addEventListener('mouseenter', () => {
    navArrow2.classList.toggle('move');
});
navLink2.addEventListener('mouseleave', () => {
    navArrow2.classList.toggle('move')
});
navLink3.addEventListener('mouseenter', () => {
    navArrow3.classList.toggle('move');
});
navLink3.addEventListener('mouseleave', () => {
    navArrow3.classList.toggle('move')
});
navLink4.addEventListener('mouseenter', () => {
    navArrow4.classList.toggle('move');
});
navLink4.addEventListener('mouseleave', () => {
    navArrow4.classList.toggle('move')
});
navLink5.addEventListener('mouseenter', () => {
    navArrow5.classList.toggle('move');
});
navLink5.addEventListener('mouseleave', () => {
    navArrow5.classList.toggle('move')
});


// creates interactive photo carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')

const init = (n) => {
  slides.forEach( (slide, index) => {
    slide.style.display = 'none'
    dots.forEach( (dot, index) => {
      dot.classList.remove('active')
    })
  })
  slides[n].style.display = 'block'
  dots[n].classList.add('active')
}

document.addEventListener('DOMContentLoaded', init(currentSlide))
const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
  init(currentSlide)
}

document.querySelector('.next').addEventListener('click', next)

document.querySelector('.prev').addEventListener('click', prev)

setInterval(() => {
  next()
}, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    console.log(currentSlide)
    init(i)
    currentSlide = i
  })
})
