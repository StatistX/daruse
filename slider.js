const slides = [
  {
    imgsrc: './images/1.jpg',
    text: 'Caption Text 1'
  },
  {
    imgsrc: './images/2.jpg',
    text: 'Caption Text 2'
  },
  {
    imgsrc: './images/3.jpg',
    text: 'Caption Text 3'
  },
  {
    imgsrc: './images/4.jpg',
    text: 'Caption Text 4'
  },
  {
    imgsrc: './images/5.jpg',
    text: 'Caption Text 5'
  },
];

const sliderContainer = document.querySelector('.slider__container'),
  sliderLeftbth = document.querySelector('.slider__left-bth'),
  sliderRightbth = document.querySelector('.slider__right-bth'),
  sliderCounter = document.querySelector('.slider__counter'),
  sliderCaption = document.querySelector('.slider__caption'),
  dotsContainer = document.querySelector('.dots-container');

class Slider {
  constructor(slides, id, props) {
    this.slides = slides;
    this.slider = document.getElementById(id);
    this.slideWidth = getComputedStyle(this.slider).width;
    this.currentSlide = 1;
    this.loop = props.loop;
    this.navs = props.navs;
    this.pags = props.pags;
    this.auto = props.auto;
    this.delay = props.delay;
  }

  _generateSlide(el) {
    const img = document.createElement('img');
    img.alt = el.text;
    img.src = el.imgsrc;
    img.classList.add('slider__image');
    img.style.width = this.slideWidth;
    sliderContainer.append(img);

    // generate dots
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotsContainer.append(dot);
  }

  addSlides() {
    this.slides.forEach(element => {
      this._generateSlide(element);
    });
    this._setSliderCaption(this.slides[0].text);
    this._setSliderCounter(1);
    this._addEventListenners();

    if (!this.delay) this.delay = 5000;

    if (this.delay) {
      this._setTimer();
    }
  }

  _setTimer() {
    if (this.auto) {
      this.timer = setInterval(() => {
        this._slideToRight();
      }, this.delay);
    }
  }

  _setSliderCaption(text) {
    sliderCaption.textContent = text;
  }

  _setSliderCounter(num) {
    if (this.pags) sliderCounter.textContent = `${num}/${this.slides.length}`
  }

  _slideToRight() {
    if (this.currentSlide < this.slides.length) {
      sliderContainer.style.transform = `translateX(-${parseInt(this.slideWidth) * this.currentSlide}px)`;
      this.currentSlide += 1;
    } else {
      sliderContainer.style.transform = `translateX(0px)`;
      this.currentSlide = 1;
    }
    this._setSliderCounter(this.currentSlide);
    this._setSliderCaption(this.slides[this.currentSlide - 1].text);
  }

  _slideToLeft() {
    if (this.currentSlide === 1) {
      sliderContainer.style.transform = `translateX(-${parseInt(this.slideWidth) * (this.slides.length - 1)}px)`;
      this.currentSlide = this.slides.length;
    } else {
      sliderContainer.style.transform = `translateX(-${parseInt(this.slideWidth) * (this.currentSlide - 2)}px)`;
      this.currentSlide -= 1;
    }
    this._setSliderCounter(this.currentSlide);
    this._setSliderCaption(this.slides[this.currentSlide - 1].text);
  }

  _addEventListenners() {
    sliderRightbth.addEventListener('click', () => {
      clearTimeout(this.timer);
      this._slideToRight();
      this._setTimer();
    });

    sliderLeftbth.addEventListener('click', () => {
      clearTimeout(this.timer);
      this._slideToLeft();
      this._setTimer();
    });

    dotsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('dots-container')) return;

      clearTimeout(this.timer);
      const dots = dotsContainer.querySelectorAll('.dot');
      const ind = Array.from(dots).findIndex(item => item === e.target);

      if ((ind + 1) > this.currentSlide) {
        while (this.currentSlide !== (ind + 1)) {
          this._slideToRight();
        }
      } else {
        while (this.currentSlide !== (ind + 1)) {
          this._slideToLeft();
        }
      }
      this._setTimer();
    });

    // stopMouseHover 
    sliderContainer.addEventListener('mouseover', () => {
      clearTimeout(this.timer);
    });

    sliderContainer.addEventListener('mouseout', () => {
      this._setTimer();
    });
  }
};

export { slides, Slider };