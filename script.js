let observer = new IntersectionObserver((e) => {
  e.forEach((entry) => {
    entry.target.style.opacity = entry.isIntersecting ? 1 : 0;
  });
});

let about = document.querySelector("#about");
let promises = document.querySelector("#promises");
let thanksto = document.querySelector("#thanksto");

observer.observe(about);
observer.observe(promises);
observer.observe(thanksto);
