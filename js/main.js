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

  // Work photo carousel
  var workTrack = document.getElementById("workTrack");
  var workPrev = document.getElementById("workPrev");
  var workNext = document.getElementById("workNext");
  if (workTrack && workPrev && workNext) {
    function workCardWidth() {
      var card = workTrack.querySelector(".work-card");
      return card ? card.offsetWidth + 20 : 320;
    }
    workPrev.addEventListener("click", function () {
      workTrack.scrollBy({ left: -workCardWidth(), behavior: "smooth" });
    });
    workNext.addEventListener("click", function () {
      workTrack.scrollBy({ left: workCardWidth(), behavior: "smooth" });
    });
  }

  // Reviews carousel
  var revTrack = document.getElementById("revTrack");
  var revPrev = document.getElementById("revPrev");
  var revNext = document.getElementById("revNext");
  if (revTrack && revPrev && revNext) {
    function revCardWidth() {
      var card = revTrack.querySelector(".review-card");
      return card ? card.offsetWidth + 24 : 384;
    }
    revPrev.addEventListener("click", function () {
      revTrack.scrollBy({ left: -revCardWidth(), behavior: "smooth" });
    });
    revNext.addEventListener("click", function () {
      revTrack.scrollBy({ left: revCardWidth(), behavior: "smooth" });
    });
  }

  // Progressive quote form — later stages appear only once the prior
  // stage is filled in, so the form doesn't dump all 14 checkboxes and
  // every field on the visitor at once.
  var qfForm = document.querySelector(".qf-progressive");
  if (qfForm) {
    var qfName = document.getElementById("qf-name");
    var qfPhone = document.getElementById("qf-phone");
    var qfEmail = document.getElementById("qf-email");
    var qfStage2 = qfForm.querySelector('[data-stage="2"]');
    var qfStage3 = qfForm.querySelector('[data-stage="3"]');
    var qfStage4 = qfForm.querySelector('[data-stage="4"]');
    var qfChecks = qfForm.querySelectorAll('input[name="service"]');

    function qfReveal(stage) {
      if (!stage || !stage.hidden) return;
      stage.hidden = false;
      window.requestAnimationFrame(function () {
        stage.classList.add("qf-stage-visible");
      });
    }

    function qfCheckStage1() {
      if (qfName.value.trim() && qfPhone.value.trim()) qfReveal(qfStage2);
    }

    function qfCheckStage2() {
      if (qfEmail.value.trim().length > 3) qfReveal(qfStage3);
    }

    function qfCheckStage3() {
      var anyChecked = Array.prototype.some.call(qfChecks, function (cb) {
        return cb.checked;
      });
      if (anyChecked) qfReveal(qfStage4);
    }

    qfName.addEventListener("input", qfCheckStage1);
    qfPhone.addEventListener("input", qfCheckStage1);
    qfEmail.addEventListener("input", qfCheckStage2);
    for (var i = 0; i < qfChecks.length; i++) {
      qfChecks[i].addEventListener("change", qfCheckStage3);
    }
  }

  // Collapse long-form copy behind a Read More on phone widths.
  var cbQuery = window.matchMedia("(max-width: 640px)");

  function setupContentToggles() {
    if (!cbQuery.matches) return;
    var blocks = document.querySelectorAll(".content-block");
    for (var b = 0; b < blocks.length; b++) {
      var block = blocks[b];
      if (block.getAttribute("data-cb-init")) continue;
      if (block.scrollHeight < 480) continue;
      block.setAttribute("data-cb-init", "1");
      block.classList.add("cb-collapsed");
      addToggle(block);
    }
  }

  function addToggle(block) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cb-toggle";
    btn.textContent = "Read More";
    btn.setAttribute("aria-expanded", "false");
    block.insertAdjacentElement("afterend", btn);

    btn.addEventListener("click", function () {
      var collapsed = block.classList.toggle("cb-collapsed");
      btn.textContent = collapsed ? "Read More" : "Read Less";
      btn.setAttribute("aria-expanded", collapsed ? "false" : "true");
      if (collapsed) {
        block.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  }

  setupContentToggles();
  cbQuery.addEventListener("change", setupContentToggles);

});
