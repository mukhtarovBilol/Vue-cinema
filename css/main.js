const navBurger = document.querySelector(".nav__burger")
const navMenu = document.querySelector(".nav__menu")
const navBurgerLine = document.querySelector(".nav__burger-line")

navBurger.addEventListener("click", function () {
    navMenu.classList.toggle("active")
    
})
