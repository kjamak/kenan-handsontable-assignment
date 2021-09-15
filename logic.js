var elementTarget,
  elementWatched,
  config = {
    selector: "p",
    dataAttr: "color",
    targetElem: "body",
    cssProp: "backgroundColor",
    threshold: 1.0,
  };

window.addEventListener(
  "load",
  function (event) {
    elementTarget = document.querySelector(config.targetElem);
    elementWatched = document.querySelectorAll(config.selector);
    initializeObserver();
  },
  false
);

function initializeObserver() {
  var observer;

  var options = {
    root: null,
    rootMargin: "0px",
    threshold: config.threshold,
  };

  observer = new IntersectionObserver(observeIntersection, options);

  elementWatched.forEach((elem) => {
    observer.observe(elem);
  });
}

function observeIntersection(entries) {
  entries.forEach(function (entry) {
    var newValue = entry.target.dataset[config.dataAttr];
    elementTarget.style[config.cssProp] = newValue;
  });
}
