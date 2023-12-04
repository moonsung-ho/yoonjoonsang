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
