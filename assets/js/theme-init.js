(function () {
  try {
    var savedTheme = localStorage.getItem("academic-site-theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      document.documentElement.dataset.theme = savedTheme;
    }
  } catch (error) {
    document.documentElement.removeAttribute("data-theme");
  }
})();
