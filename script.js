 document.addEventListener("DOMContentLoaded", function () {
      setTimeout(function () {
        var mainSection = document.querySelector(".main");
        var navBar = document.querySelector("nav")
        mainSection.classList.add("show");
        navBar.classList.add('show')
      }, 500);
    });
