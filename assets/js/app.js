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

  const darkModeToggle = document.querySelector('#dark-mode') // <- este es el input del toggle (Checkbox)

  // Esta parte solo se realiza al cargar la página
  if(window.localStorage.getItem('dark-mode') === null){ // comprobamos si tenemos valor guardado en local storage, si no lo tenemos...
    const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches // cocmprobamos la preferencia del usuario con media query
    window.localStorage.setItem('dark-mode', darkMode) // y guardamos el valor en el local storage
  }

  const darkMode = window.localStorage.getItem('dark-mode') // recogemos el valor del local stare ('true' o 'false')
  darkModeToggle.checked = darkMode === 'true' // marcamos la casilla del checkbox en caso de que el darkmode esté habilitado
  document.documentElement.classList.toggle('dark', darkMode === 'true') // añadimos o quitamos la clase dark del elemento html según el valor guardado en el localstorage
  // ///////////////////////

  // esta cuando el checkbox cambia de valor
  darkModeToggle.addEventListener('change', () => {
    const {checked} = darkModeToggle // leemos el valor del checkbox
    window.localStorage.setItem('dark-mode', checked) // guardamos el valor en el local storage
    document.documentElement.classList.toggle('dark', checked) // añadimos o quitamos la clase dark del elemento html según el valor guardado en el localstorage
  })
})