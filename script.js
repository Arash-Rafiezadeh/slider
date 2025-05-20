/////////////////////////////////////////////

// SLIDERS

/////////////////////////////////////////////

//DATA

const slide1 = {
  headLine: 'Best financial decision ever!',
  mainText: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium quas quisquam non? Quas voluptate nulla minima
              deleniti optio ullam nesciunt, numquam corporis et asperiores
              laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus
              id alias reiciendis, perferendis facere pariatur dolore veniam
              autem esse non voluptatem saepe provident nihil molestiae.`,
  auther: 'Aarav Lynn',
  address: 'San Francisco, USA',
  img: `https://i.pravatar.cc/300`,
};

const slide2 = {
  headLine: 'The last step to becoming a complete minimalist',
  mainText: `Quisquam itaque deserunt ullam, quia ea repellendus provident,
              ducimus neque ipsam modi voluptatibus doloremque, corrupti
              laborum. Incidunt numquam perferendis veritatis neque repellendus.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              deserunt exercitationem deleniti.`,
  auther: 'Miyah Miles',
  address: 'London, UK',
  img: 'https://i.pravatar.cc/200',
};

const slide3 = {
  headLine: 'Finally free from old-school banks',
  mainText: `Debitis, nihil sit minus suscipit magni aperiam vel tenetur
              incidunt commodi architecto numquam omnis nulla autem,
              necessitatibus blanditiis modi similique quidem. Odio aliquam
              culpa dicta beatae quod maiores ipsa minus consequatur error sunt,
              deleniti saepe aliquid quos inventore sequi. Necessitatibus id
              alias reiciendis, perferendis facere.`,
  auther: 'Lisbon, Portugal',
  address: 'Francisco Gomes',
  img: 'https://i.pravatar.cc/100',
};

/////////////////////////////////////////////

// CREATE SLIDES FROM DATA

const containerSlider = document.querySelector('.slider');
const slides = [slide1, slide2, slide3];

slides.forEach(function (slide, i) {
  const html = ` <div class="slide slide--${i + 1}">
          <div class="testimonial">
            <h5 class="testimonial__header">${slide.headLine}</h5>
            <blockquote class="testimonial__text">
              ${slide.mainText}
            </blockquote>
            <address class="testimonial__author">
              <img
                src="${slide.img}"
                alt=""
                class="testimonial__photo"
              />
              <h6 class="testimonial__name">${slide.auther}</h6>
              <p class="testimonial__location">${slide.address}</p>
            </address>
          </div>
        </div>`;

  containerSlider.insertAdjacentHTML('afterbegin', html);
});

/////////////////////////////////////////////

const slider = function () {
  //ALL FUNCTIONS, VARIABLES, EVENT HANDLERS AND FUNCION CALLS ARE WRAPED IN THE SLIDER FUNCION

  // VARIABLES

  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let currSlide = 0;
  const maxSlide = slides.length;

  // FUNCTIONS

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
    console.log('hi');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
    );
  };

  const nextSlide = function () {
    if (currSlide === maxSlide - 1) {
      currSlide = 0;
    } else {
      currSlide++;
    }
    goToSlide(currSlide);
    activateDot(currSlide);
  };

  const prevSlide = function () {
    if (currSlide === 0) {
      currSlide = maxSlide - 1;
    } else {
      currSlide--;
    }
    goToSlide(currSlide);
    activateDot(currSlide);
  };

  // INITIAL

  const init = function () {
    createDots();
    activateDot(0);
    goToSlide(0);
  };

  init();

  //  EVENT HANDLERS

  btnRight.addEventListener('click', nextSlide);

  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowRight' && nextSlide();
    e.key === 'ArrowLeft' && prevSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      currSlide = Number(e.target.dataset.slide);
      goToSlide(currSlide);
      activateDot(currSlide);
    }
  });

  // SET THE INTERVAL TO 5 SECONDS

  setInterval(nextSlide, 5000);
};

slider();
/////////////////////////////////////////////
