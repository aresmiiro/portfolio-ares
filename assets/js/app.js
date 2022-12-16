document.addEventListener('DOMContentLoaded', () => {
  const bubblyButtons = document.querySelectorAll('.bubbly-btn')

  const animateButton = (e) => {
    const { target } = e
    target.classList.remove('animate')
    target.classList.add('animate')
    setTimeout(() => target.classList.remove('animate'), 700)
  }

  for (const btn of bubblyButtons) btn.addEventListener('click', animateButton)
})

document.addEventListener('DOMContentLoaded', () => {
  const bubblyButtons = document.querySelectorAll('.bubbly-btn')
  const menuToggle = document.querySelector('#menu-toggle')
  const navbar = document.querySelector('#navbar')

  menuToggle.addEventListener('click', () => navbar.classList.toggle('hidden'))

  const animateButton = (e) => {
    const { target } = e
    target.classList.remove('animate')
    target.classList.add('animate')
    setTimeout(() => target.classList.remove('animate'), 700)
  }

  for (const btn of bubblyButtons) btn.addEventListener('click', animateButton)
})

