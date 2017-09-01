var togler = document.querySelector(".main-nav__toggler");
var mainnav = document.querySelector(".main-nav__list");
var logoheader = document.querySelector(".page-header__logo");


mainnav.classList.add("main-nav--close");
logoheader.classList.remove("page-header__logo--close");

togler.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("нажата кнопка");
    mainnav.classList.toggle("main-nav--close");
    logoheader.classList.toggle("page-header__logo--close");
    togler.classList.toggle("toggler-switch__htx");

    // console.log("Клик по ссылке вход");
  });
