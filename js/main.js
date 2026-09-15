// Jason's Mobile Mechanics — shared site behavior
document.addEventListener("DOMContentLoaded", function () {

  // Scroll-appear header
  var header = document.querySelector(".site-header");
  if (header) {
    function onScroll() {
      if (window.scrollY > 80) {
        header.classList.add("header-visible");
      } else {
        header.classList.remove("header-visible");
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Dropdown nav
  var dropBtn = document.querySelector(".nav-dropdown-btn");
  var dropMenu = document.querySelector(".nav-dropdown-menu");
  if (dropBtn && dropMenu) {
    dropBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = dropBtn.getAttribute("aria-expanded") === "true";
      dropBtn.setAttribute("aria-expanded", isOpen ? "false" : "true");
      dropMenu.hidden = isOpen;
    });

    document.addEventListener("click", function () {
      dropBtn.setAttribute("aria-expanded", "false");
      dropMenu.hidden = true;
    });

    dropMenu.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

});
