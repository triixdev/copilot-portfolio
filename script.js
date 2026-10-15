// Apply a saved theme before interaction and keep the control's accessible state in sync.
const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#2a0b13" : "#f5ecdf";
}

setTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));

// Save explicit choices so the next visit opens in the same color mode.
themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  localStorage.setItem("portfolio-theme", nextTheme);
});

// Keep the copyright year current without needing an annual content edit.
document.querySelector("#current-year").textContent = new Date().getFullYear();