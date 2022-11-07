const slides = [
  {
    imgsrc: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
    text: 'Caption Text 1'
  },
  {
    imgsrc: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
    text: 'Caption Text 2'
  },
  {
    imgsrc: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
    text: 'Caption Text 3'
  },
  {
    imgsrc: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
    text: 'Caption Text 3'
  },
  {
    imgsrc: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
    text: 'Caption Text 3'
  },
];

const sliderContainer = document.querySelector('.slider__container');
const sliderLeftbth = document.querySelector('.slider__left-bth');
const sliderRightbth = document.querySelector('.slider__right-bth');
const sliderCounter = document.querySelector('.slider__counter');
const sliderCaption = document.querySelector('.slider__caption');

class Slider {
  constructor(slides, id, params) {
    this.slides = slides;
    this.slider = document.getElementById(id);
    this.slideWidth = getComputedStyle(this.slider).width;
    this.currentSlide = 1;
  }

  _generateSlide(el) {
    const img = document.createElement('img');
    img.alt = el.text;
    img.src = el.imgsrc;

    img.classList.add('slider__image');
    img.style.width = this.slideWidth;

    sliderContainer.append(img);
  }

  addSlides() {
    this.slides.forEach(element => {
      this._generateSlide(element);
    });
    this._setSliderCaption(this.slides[0].text);
    this._setCliderCounter(1);
    this._addEventListenners();
  }

  _setSliderCaption(text) {
    sliderCaption.textContent = text;
  }

  _setCliderCounter(num) {
    sliderCounter.textContent = `${num}/${this.slides.length}`
  }

  _addEventListenners() {
    sliderRightbth.addEventListener('click', () => {
      if (this.currentSlide < this.slides.length) {
        sliderContainer.style.transform = `translateX(-${parseInt(this.slideWidth) * this.currentSlide}px)`;
        this.currentSlide += 1;
      } else {
        sliderContainer.style.transform = `translateX(0px)`;
        this.currentSlide = 1;
      }
    });

    sliderLeftbth.addEventListener('click', () => {
      if (this.currentSlide === 1) {
        sliderContainer.style.transform = `translateX(-${parseInt(this.slideWidth) * (this.slides.length - 1)}px)`;
        this.currentSlide = this.slides.length;
      } else {
        sliderContainer.style.transform = `translateX(-${parseInt(this.slideWidth) * (this.currentSlide - 2)}px)`;
        log
        this.currentSlide -= 1;
      }
    })
  }
};

export { slides, Slider };