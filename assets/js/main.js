(function () {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const themeIcon = document.querySelector("[data-theme-icon]");
  const themeLabel = document.querySelector("[data-theme-label]");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const themeStorageKey = "academic-site-theme";
  const systemTheme = typeof window.matchMedia === "function"
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : { matches: false };

  function getSavedTheme() {
    try {
      const savedTheme = localStorage.getItem(themeStorageKey);
      return savedTheme === "dark" || savedTheme === "light" ? savedTheme : null;
    } catch (error) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(themeStorageKey, theme);
    } catch (error) {
      return;
    }
  }

  function getSystemTheme() {
    return systemTheme.matches ? "dark" : "light";
  }

  function setTheme(theme, shouldSave) {
    document.documentElement.dataset.theme = theme;

    if (themeToggle && themeIcon && themeLabel) {
      const nextTheme = theme === "dark" ? "light" : "dark";
      const label = `Switch to ${nextTheme} theme`;
      themeToggle.setAttribute("aria-label", label);
      themeToggle.setAttribute("title", label);
      themeIcon.textContent = theme === "dark" ? "Light" : "Dark";
      themeLabel.textContent = label;
    }

    if (shouldSave) {
      saveTheme(theme);
    }
  }

  setTheme(getSavedTheme() || getSystemTheme(), false);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.dataset.theme || getSystemTheme();
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(nextTheme, true);
    });
  }

  const handleSystemThemeChange = () => {
    if (!getSavedTheme()) {
      setTheme(getSystemTheme(), false);
    }
  };

  if (typeof systemTheme.addEventListener === "function") {
    systemTheme.addEventListener("change", handleSystemThemeChange);
  } else if (typeof systemTheme.addListener === "function") {
    systemTheme.addListener(handleSystemThemeChange);
  }

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.addEventListener("click", (event) => {
      if (event.target.matches("a")) {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const filterButtons = document.querySelectorAll("[data-filter]");
  const publicationItems = document.querySelectorAll("[data-publication-list] li");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      publicationItems.forEach((item) => {
        const shouldShow = filter === "all" || item.dataset.category === filter;
        item.classList.toggle("hidden", !shouldShow);
      });
    });
  });

  const printButton = document.querySelector("[data-print]");
  if (printButton) {
    printButton.addEventListener("click", () => window.print());
  }

  const copyButton = document.querySelector("[data-copy-email]");
  const emailLink = document.querySelector("[data-email]");
  if (copyButton && emailLink) {
    copyButton.addEventListener("click", async () => {
      const email = emailLink.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        copyButton.textContent = "Copied";
        setTimeout(() => {
          copyButton.textContent = "Copy email";
        }, 1800);
      } catch (error) {
        window.location.href = `mailto:${email}`;
      }
    });
  }
})();
