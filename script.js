let observer = new IntersectionObserver((e) => {
  e.forEach((entry) => {
    entry.target.style.opacity = entry.isIntersecting ? 1 : 0;
  });
});

let warningObserver = new IntersectionObserver((e) => {
  e.forEach((entry) => {
    entry.target.style["position"] = entry.isIntersecting
      ? "fixed"
      : "absolute";
    entry.target.style["bottom"] = entry.isIntersecting ? "20px" : "-200px";
  });
  setTimeout(() => {
    e.forEach((entry) => {
      entry.target.style.display = "none";
    });
  }, 15000);
});

let about = document.querySelector("#about");
let promises = document.querySelector("#promises");
let thanksto = document.querySelector("#thanksto");
let history = document.querySelector("#history");

let warning = document.querySelector("#warning");

observer.observe(about);
observer.observe(promises);
observer.observe(thanksto);
observer.observe(history);

warningObserver.observe(warning);

if (typeof navigator.share === "undefined") {
  // 공유하기 버튼을 지원하지 않는 경우에 대한 폴백 처리
  document.querySelector("#share").hidden = true;
} else {
  document.querySelector("#share").addEventListener("click", () => {
    navigator.share({
      title: "전교 회장 후보 윤준상", // 공유될 제목
      url: "https://joonsang.netlify.app", // 공유될 URL
    });
  });
}
