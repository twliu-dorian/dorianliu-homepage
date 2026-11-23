// Theme preference is shared with the small pre-paint script in head.html.
let sessionTheme = null;
const colorPreference = window.matchMedia("(prefers-color-scheme: dark)");
const determineThemeSetting = () => {
  if (sessionTheme) return sessionTheme;
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
  } catch (error) {
    // Theme controls still work when browser storage is unavailable.
  }
  return "system";
};
const determineComputedTheme = () => {
  const setting = determineThemeSetting();
  return setting === "system" ? (colorPreference.matches ? "dark" : "light") : setting;
};
const setTheme = (theme = determineComputedTheme()) => {
  const dark = theme === "dark";
  document.documentElement.setAttribute("data-theme", theme);
  const button = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");
  if (button) button.setAttribute("aria-pressed", String(dark));
  if (icon) {
    icon.classList.toggle("fa-moon", dark);
    icon.classList.toggle("fa-sun", !dark);
  }
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.setAttribute("content", dark ? "#283649" : "#ffffff");
};
const toggleTheme = () => {
  sessionTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(sessionTheme);
  try { localStorage.setItem("theme", sessionTheme); } catch (error) {}
};

// Chart templates are fetched only on pages containing Plotly code blocks.
const plotlyElements = document.querySelectorAll("pre > code.language-plotly");
if (plotlyElements.length > 0) {
  const renderPlots = async () => {
    if (!window.Plotly) return;
    const { plotlyDarkLayout, plotlyLightLayout } = await import('./theme.js');
    for (const element of plotlyElements) {
      try {
        const data = JSON.parse(element.textContent);
        const chart = document.createElement("div");
        element.parentElement.after(chart);
        const template = determineComputedTheme() === "dark" ? plotlyDarkLayout : plotlyLightLayout;
        const layout = { template, ...data.layout };
        await Plotly.react(chart, data.data, layout, { responsive: true });
        element.parentElement.classList.add("hidden");
      } catch (error) {
        // Keep the source visible if a chart cannot be rendered.
      }
    }
  };
  if (document.readyState === "complete") renderPlots();
  else window.addEventListener("load", renderPlots, { once: true });
}

$(document).ready(function () {
  setTheme();
  colorPreference.addEventListener("change", () => {
    if (determineThemeSetting() === "system") setTheme();
  });
  document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);

  fitvids();

  const authorButton = $(".author__urls-wrapper button");
  const authorLinks = $(".author__urls");
  const desktop = window.matchMedia("(min-width: 925px)");
  const resetAuthorMenu = () => {
    authorButton.removeClass("open").attr("aria-expanded", String(desktop.matches));
    authorLinks.css("display", "");
  };
  authorButton.on("click", function () {
    const expanded = $(this).attr("aria-expanded") !== "true";
    $(this).toggleClass("open", expanded).attr("aria-expanded", String(expanded));
    authorLinks.toggle(expanded);
  });
  $(".author__urls-wrapper").on("keydown", function (event) {
    if (event.key === "Escape" && !desktop.matches && authorButton.attr("aria-expanded") === "true") {
      resetAuthorMenu();
      authorButton.trigger("focus");
    }
  });
  desktop.addEventListener("change", resetAuthorMenu);
  resetAuthorMenu();
});
