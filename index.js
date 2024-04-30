const items = document.querySelectorAll('.faq__item')

items.forEach((item) => {
  const btn = item.querySelector(".faq__btn")
  const answer = item.querySelector(".faq__answer")

  btn.addEventListener('click', () => {
    answer.classList.toggle('faq__answer--active')
  })
})