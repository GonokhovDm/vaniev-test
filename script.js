const faqBtn = document.getElementsByClassName('faq-btn');
if (faqBtn) {
  const faqList = document.getElementsByClassName('faq__questions-item')
  for (let i = 0; i < faqBtn.length; i++) {
    faqBtn[i].addEventListener("click", function() {
      faqList[i].classList.toggle("active")
    })
  }
};

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 2,
  spaceBetween: 20,
  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

