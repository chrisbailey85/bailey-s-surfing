const hamburger = document.querySelector('.hamburger')
const faqParagraph = document.querySelectorAll('.faq__paragraph')
const faqBtn = document.querySelectorAll('.faq__btn')
const nav = document.querySelector('.nav')
const sliderName = document.querySelector('.slider__name')
const slider = document.querySelector('.slider')
const sliderNext = document.querySelector('.slider__controls__next')
const sliderPrev = document.querySelector('.slider__controls__prev')
const dots = document.querySelectorAll('.dot')
const sliderImgs = {
  1: {
    img: '../assets/surfer-4234061_1920.jpg',
    name: 'Wade Warren',
  },
  2: {
    img: '../assets/pexels-parthiban-v-5400082.jpg',
    name: 'Craig David',
  },
  3: {
    img: '../assets/james-lee-d1PmX-GlhJU-unsplash.jpg',
    name: 'Theresa Webb',
  },
  4: {
    img: '../assets/guy-kawasaki-O_O5aEGargs-unsplash.jpg',
    name: 'Dianne Russell',
  },
}
AOS.init()
const nextSlide = () => {
  let index = +slider.dataset.slide
  if (index === 4) {
    return
  } else {
    slider.dataset.slide = index + 1
    sliderName.textContent = sliderImgs[slider.dataset.slide].name
    let img = sliderImgs[slider.dataset.slide].img
    slider.style.backgroundImage = `linear-gradient(
      0deg,
      rgba(28, 43, 61, 0.5),
      rgba(28, 43, 61, 0.5)
    ),
    url(${img})`
    dots.forEach((dot) => dot.classList.remove('active'))
    dots[slider.dataset.slide - 1].classList.add('active')
  }
}
const prevSlide = () => {
  let index = +slider.dataset.slide
  if (index === 1) {
    return
  } else {
    slider.dataset.slide = index - 1
    sliderName.textContent = sliderImgs[slider.dataset.slide].name
    let img = sliderImgs[slider.dataset.slide].img
    slider.style.backgroundImage = `linear-gradient(
      0deg,
      rgba(28, 43, 61, 0.5),
      rgba(28, 43, 61, 0.5)
    ),
    url(${img})`
    dots.forEach((dot) => dot.classList.remove('active'))
    dots[slider.dataset.slide - 1].classList.add('active')
  }
}

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open')
  hamburger.classList.toggle('is-active')
  nav.classList.contains('is-active')
    ? (hamburger.ariaExpanded = true)
    : (hamburger.ariaExpanded = false)
})

faqBtn.forEach((btn, idx) => {
  btn.addEventListener('click', (e) => {
    faqBtn.forEach((btn) => {
      btn.classList.remove('active')
    })
    faqParagraph.forEach((faqPara) => {
      faqPara.classList.remove('active')
    })
    e.target.classList.contains('active')
      ? (e.target.ariaExpanded = false)
      : (e.target.ariaExpanded = true)
    e.target.classList.toggle('active')
    faqParagraph[idx].classList.toggle('active')
  })
})

sliderNext.addEventListener('click', () => {
  nextSlide()
})
sliderPrev.addEventListener('click', () => {
  prevSlide()
})

dots.forEach((dot, idx) => {
  dot.addEventListener('click', (e) => {
    dots.forEach((dot) => dot.classList.remove('active'))
    e.target.classList.add('active')
    sliderName.textContent = sliderImgs[idx + 1].name
    let img = sliderImgs[idx + 1].img
    slider.style.backgroundImage = `linear-gradient(
      0deg,
      rgba(28, 43, 61, 0.5),
      rgba(28, 43, 61, 0.5)
    ),
    url(${img})`
    slider.dataset.slide = idx + 1
  })
})
