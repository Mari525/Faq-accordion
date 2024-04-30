const items = document.querySelectorAll('.faq__item')

items.forEach((item) => {
  const btn = item.querySelector('.faq__btn')
  const answer = item.querySelector('.faq__answer')
  const question = item.querySelector('.faq__question')
  const btnOpen = item.querySelector('.faq__svg-plus')
  const btnClose = item.querySelector('.faq__svg-minus')

  btn.addEventListener('click', () => {
    answer.classList.toggle('faq__answer--active')
    question.classList.toggle('faq__question--active')
    btnOpen.classList.toggle('faq__btn--hide')
    btnClose.classList.toggle('faq__btn--hide')
  })
})