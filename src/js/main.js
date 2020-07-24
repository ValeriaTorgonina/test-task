class Header {
  constructor() {
      this.header = document.querySelector('.main-header');
      this.headerMenu = this.header.querySelector('.main-nav');
      this.menuBtn = this.header.querySelector('.menu-button');
      this.menuIcon = this.menuBtn.querySelector('.menu-button__icon--menu');
      this.crossIcon = this.menuBtn.querySelector('.menu-button__icon--cross');
      this.info = this.header.querySelector('.main-header__info');

      this.addHandlerForMenuBtn();

      window.addEventListener('resize', () => this.onResize());
      this.onResize();
  }

  onResize(width = window.innerWidth) {
    if(width > 480) {
        this.header.insertAdjacentElement('afterbegin', this.info)
    } else {
        this.headerMenu.insertAdjacentElement('beforeend', this.info);
    }
  }

  addHandlerForMenuBtn() {
      this.menuBtn.onclick = () => {            
          this.headerMenu.classList.toggle('open');
          if(this.headerMenu.classList.contains('open')) {
              this.menuIcon.style.display = "none";
              this.crossIcon.style.display = "block";
          }else {
              this.crossIcon.style.display = "none";
              this.menuIcon.style.display = "block";
          }
      }
  }
};



document.addEventListener("DOMContentLoaded", function() {
    const header = new Header();
    const clientsSlider = new Swiper ('.clients__slider', {
        slidesPerView: 4,
        spaceBetween: 25,
        speed: 500,
        loop: true,
        loopedSlides: 4,
    
        navigation: {
          nextEl: '#clients-next',
          prevEl: '#clients-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            670: {
                slidesPerView: 3,
            },
            990: {
                slidesPerView: 4,
            },
          },
    });  
})
