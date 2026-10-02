
  (function () {
    var sections = document.querySelectorAll('section[data-i]');
    var sideItems = document.querySelectorAll('.side li[data-i]');
    var navLinks = document.querySelectorAll('.nav-links a');
    function setActive(i) {
      sideItems.forEach(function (el) { el.classList.toggle('on', el.dataset.i === String(i)); });
      navLinks.forEach(function (el) { el.classList.toggle('on', el.dataset.i === String(i)); });
    }
    setActive(0);
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) setActive(e.target.dataset.i); });
      }, { rootMargin: '-45% 0px -50% 0px' });
      sections.forEach(function (s) { io.observe(s); });
    }
  })();
