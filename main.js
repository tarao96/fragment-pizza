function load_effect() {
  let element = document.getElementsByClassName("load-fade");
  if (!element) return;

  for (let i = 0; i < element.length; i++) {
    element[i].classList.add("is-show");
  }
}
setTimeout(load_effect, 600);

function scroll_effect(classNameArray) {
  classNameArray.forEach((className) => {
    let element = document.getElementsByClassName(className);
    if (!element) return;

    let scrollY = window.pageYOffset; // スクロール量を取得
    let windowH = window.innerHeight; // 画面の高さ
    var showTiming = 200; // 要素を表示するタイミング
    for (var i = 0; i < element.length; i++) {
      var elemClientRect = element[i].getBoundingClientRect();
      var elemY = scrollY + elemClientRect.top;
      if (scrollY > elemY - windowH + showTiming) {
        element[i].classList.add("is-show");
      }
    }
  });
}
window.addEventListener(
  "scroll",
  () => {
    scroll_effect([
      "scroll-down",
      "scroll-fast-down",
      "scroll-delay-down",
      "scroll-left",
      "scroll-right",
    ]);
  }
);

const documentBody = document.querySelector("body");
// body直下にオーバーレイの要素を作成
var newElement = document.createElement("div");
newElement.setAttribute("class", "progress-bar");
documentBody.prepend(newElement);
(function progressBar() {
  const bar = document.querySelector(".progress-bar");
  window.addEventListener("scroll", function updateBar() {
    const windowScroll = window.pageYOffset;
    const docHeight = document.body.clientHeight;
    const windowHeight = window.innerHeight;

    const scrollUnit = (windowScroll / (docHeight - windowHeight)) * 100;
    bar.style.height = scrollUnit + "%";
  });
})();
