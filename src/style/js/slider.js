const SliderClassName = 'slider';
const SliderDraggableClassName = 'slider-draggable';
const SliderLineClassName = 'slider-line';
const SliderLineContainerClassName = 'slider-line-container';
const SliderSlideClassName = 'slider-slide';
const SliderDotsClassName = 'slider-dots';
const SliderDotClassName = 'slider-dot';
const SliderDotActiveClassName = 'slider-dot-active';
const SliderNavClassName = 'slider-nav';
const SliderNavLeftClassName = 'slider-nav-left';
const SliderNavRightClassName = 'slider-nav-right';
const SliderNavDisabledClassName = 'slider-nav-disabled';


class Slider {
  constructor(element, optionts ={}) {
    this.containerNode = element;
    this.size = element.childElementCount;
    this.currentSlide = 0;
    this.currentSlideWasChanged = false;
    this.settings = {
      margin: optionts.margin || 0,
    };
    // console.log(this.containerNode)

    this.manageHTML = this.manageHTML.bind(this);
    this.setParameters = this.setParameters.bind(this);
    this.setEvents = this.setEvents.bind(this);
    this.resizeSlider = this.resizeSlider.bind(this);
    this.startDrag = this.startDrag.bind(this);
    this.stopDrag = this.stopDrag.bind(this);
    this.dragging = this.dragging.bind(this);
    this.setStylePosition = this.setStylePosition.bind(this);
    this.clickDots = this.clickDots.bind(this);
    this.moveToLeft = this.moveToLeft.bind(this);
    this.moveToRight = this.moveToRight.bind(this);
    this.changeCurrentSlide = this.changeCurrentSlide.bind(this);
    this.changeActiveDotClass = this.changeActiveDotClass.bind(this);
    this.changeDisabledNav = this.changeDisabledNav.bind(this);
    this.manageHTML();
    this.setParameters();
    this.setEvents();
    // this.destroyEvents();
  }

  manageHTML() {
    this.containerNode.classList.add(SliderClassName);
    this.containerNode.innerHTML = `
            <div class="${SliderLineContainerClassName}">
                <div class="${SliderLineClassName}">
                    ${this.containerNode.innerHTML}
                </div>
            </div>
            <div class = "${SliderNavClassName}">
                <svg class = "${SliderNavLeftClassName}" xmlns="http://www.w3.org/2000/svg" width="18" height="40" fill="none" viewBox="0 0 18 40"><path fill="#C4C4C4" d="M1.241 18.697L15.117.698c.455-.59 1.19-.588 1.645.003.453.591.452 1.55-.003 2.139L3.71 19.767l13.05 16.926c.456.59.457 1.547.003 2.139-.227.296-.525.445-.823.445-.298 0-.595-.148-.822-.442L1.241 20.838a1.766 1.766 0 01-.342-1.07c0-.402.124-.788.342-1.072z"/>
                </svg>
                <svg class = "${SliderNavRightClassName}" xmlns="http://www.w3.org/2000/svg" width="18" height="40" fill="none" viewBox="0 0 18 40"><path fill="#C4C4C4" d="M16.759 20.84L2.883 38.837c-.455.59-1.19.588-1.645-.003-.453-.591-.452-1.55.003-2.139L14.29 19.77 1.24 2.843C.785 2.253.783 1.296 1.237.704 1.465.408 1.763.26 2.06.26c.298 0 .595.147.822.441l13.876 17.997c.219.284.341.67.341 1.07 0 .403-.123.788-.341 1.072z"/>
                </svg>
            </div>
            <div class="${SliderDotsClassName}"></div>
            
        `;

    this.lineContainerNode = this.containerNode.querySelector(`.${SliderLineContainerClassName}`);
    this.lineNode = this.containerNode.querySelector(`.${SliderLineClassName}`);
    this.dotsNode = this.containerNode.querySelector(`.${SliderDotsClassName}`);

    this.slideNodes = Array.from(this.lineNode.children).map((childNode) =>
      wrapElementByDiv({
        element: childNode,
        className: SliderSlideClassName,
      })
    );

    this.dotsNode.innerHTML = Array.from(Array(this.size).keys()).map((key) => (
      `<button class = "${SliderDotClassName} ${key === this.currentSlide ?
                SliderDotActiveClassName: ''}">
            </button>`
    )).join('');

    this.dotNodes = this.dotsNode.querySelectorAll(`.${SliderDotClassName}`);
    this.navLeft = this.containerNode.querySelector(`.${SliderNavLeftClassName}`);
    this.navRight = this.containerNode.querySelector(`.${SliderNavRightClassName}`);
  }

  setParameters() {
    const coordsLineContainer = this.lineContainerNode.getBoundingClientRect();
    this.width = coordsLineContainer.width;
    this.maximumX = -(this.size - 1) * (this.width + this.settings.margin);
    console.log(this.width);
    this.x = -this.currentSlide * (this.width + this.settings.margin);

    this.setStyleTransition();
    this.lineNode.style.width = `${this.size * (this.width + this.settings.margin)}px`;
    this.setStylePosition();
    this.changeActiveDotClass();
    this.changeDisabledNav();

    Array.from(this.slideNodes).forEach((slideNodes) => {
      slideNodes.style.width = `${this.width}px`,
      slideNodes.style.marginRight = `${this.settings.margin}px`;
    });
  }

  setEvents() {
    this.debounceResizeSlider = debounce(this.resizeSlider);
    window.addEventListener('resize', this.debounceResizeSlider);
    this.lineNode.addEventListener('pointerdown', this.startDrag);
    window.addEventListener('pointerup', this.stopDrag);
    window.addEventListener('pointercancel', this.stopDrag);

    this.dotsNode.addEventListener('click', this.clickDots);
    this.navLeft.addEventListener('click', this.moveToLeft);
    this.navRight.addEventListener('click', this.moveToRight);
  }

  destroyEvents() {
    window.removeEventListener('resize', this.debounceResizeSlider);
    this.lineNode.removeEventListener('pointerdown', this.startDrag);
    window.removeEventListener('pointerup', this.stopDrag);
    window.removeEventListener('pointercancel', this.stopDrag);

    this.dotsNode.removeEventListener('click', this.clickDots);
    this.navLeft.removeEventListener('click', this.moveToLeft);
    this.navRight.removeEventListener('click', this.moveToRight);
  }

  resizeSlider() {
    this.setParameters();
  }

  startDrag(evt) {
    this.currentSlideWasChanged = false;
    this.clickX = evt.pageX;
    this.startX = this.x;

    this.resetStyleTransition();

    this.containerNode.classList.add(SliderDraggableClassName);
    window.addEventListener('pointermove', this.dragging);
  }

  stopDrag() {
    window.removeEventListener('pointermove', this.dragging);

    this.containerNode.classList.remove(SliderDraggableClassName);
    this.changeCurrentSlide();
  }

  dragging(evt) {
    this.dragX = evt.pageX;
    const dragShift = this.dragX - this.clickX;
    const easing = dragShift / 5;
    this.x = Math.max(Math.min(this.startX + dragShift, easing), this.maximumX + easing);
    this.setStylePosition();


    if (
      dragShift > 20 &&
      dragShift > 0 &&
      !this.currentSlideWasChanged &&
      this.currentSlide > 0
    ) {
      this.currentSlideWasChanged = true;
      this.currentSlide = this.currentSlide - 1;
    }

    if (
      dragShift < -20 &&
      dragShift < 0 &&
      !this.currentSlideWasChanged &&
      this.currentSlide < this.size - 1
    ) {
      this.currentSlideWasChanged = true;
      this.currentSlide = this.currentSlide + 1;
    }
  }

  clickDots(evt) {
    const dotNode = evt.target.closest('button');
    if (!dotNode) {
      return;
    }

    let dotNumber;
    for (let i = 0; i<this.dotNodes.length; i++) {
      if (this.dotNodes[i] === dotNode) {
        dotNumber = i;
        break;
      }
    }

    if (dotNumber === this.currentSlide) {
      return;
    }

    const countSwipes = Math.abs(this.currentSlide - dotNumber);
    this.currentSlide = dotNumber;
    this.changeCurrentSlide(countSwipes);
  }

  moveToLeft() {
    if (this.currentSlide <= 0) {
      return;
    }

    this.currentSlide -= 1;
    this.changeCurrentSlide();
  }

  moveToRight() {
    if (this.currentSlide >= this.size - 1) {
      return;
    }
    this.currentSlide += 1;
    this.changeCurrentSlide();
  }

  changeCurrentSlide(countSwipes) {
    this.x = -this.currentSlide * (this.width + this.settings.margin);
    this.setStylePosition();
    this.setStyleTransition(countSwipes);
    this.changeActiveDotClass();
    this.changeDisabledNav();
  }

  changeActiveDotClass() {
    for (let i = 0; i < this.dotNodes.length; i++) {
      this.dotNodes[i].classList.remove(SliderDotActiveClassName);
    }

    this.dotNodes[this.currentSlide].classList.add(SliderDotActiveClassName);
  }

  changeDisabledNav() {
    if (this.currentSlide === 0) {
      this.navLeft.classList.add(SliderNavDisabledClassName);
    } else {
      this.navLeft.classList.remove(SliderNavDisabledClassName);
    }
    if (this.currentSlide >= this.size - 1 ) {
      this.navRight.classList.add(SliderNavDisabledClassName);
    } else {
      this.navRight.classList.remove(SliderNavDisabledClassName);
    }
  }

  setStylePosition() {
    this.lineNode.style.transform = `translate3d(${this.x}px, 0, 0)`;
  }

  setStyleTransition(countSwipes =1) {
    this.lineNode.style.transition = `all ${countSwipes*0.25}s ease 0s`;
  }

  resetStyleTransition() {
    this.lineNode.style.transition = `all 0s ease 0s`;
  }
}


function wrapElementByDiv({element, className}) {
  const wrapperNode = document.createElement('div');
  wrapperNode.classList.add(className);

  element.parentNode.insertBefore(wrapperNode, element);
  wrapperNode.appendChild(element);

  return wrapperNode;
}

function debounce(func, time = 100) {
  let timer;
  return function(event) {
    clearTimeout(timer);
    timer = setTimeout(func, time, event);
  };
}

new Slider(document.getElementById('slider'), {
  margin: 0,
});
