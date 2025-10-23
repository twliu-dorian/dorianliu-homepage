(function () {
  const DESKTOP = "(min-width: 1024px)";

  function syncNav() {
    const nav = document.getElementById("site-nav");
    if (!nav) return;

    const visible = nav.querySelector(".visible-links");
    const hidden = nav.querySelector(".hidden-links");
    const btn = nav.querySelector("button");

    const isDesktop = window.matchMedia(DESKTOP).matches;

    if (isDesktop) {
      // 停用 GreedyNav：移除 class，避免 JS 再搬動元素
      nav.classList.remove("greedy-nav");

      // 把已被搬到 hidden 的 <li> 全部搬回 visible
      if (hidden && visible) {
        while (hidden.firstElementChild) {
          visible.appendChild(hidden.firstElementChild);
        }
      }

      // 桌機不需要漢堡鈕
      if (btn) btn.style.display = "none";
    } else {
      // 手機啟用 GreedyNav
      if (!nav.classList.contains("greedy-nav")) {
        nav.classList.add("greedy-nav");
      }
      if (btn) btn.style.display = "";
    }
  }

  window.addEventListener("load", syncNav);
  window.addEventListener("resize", syncNav);
})();
