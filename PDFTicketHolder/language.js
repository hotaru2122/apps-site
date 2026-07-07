(function () {
  const root = document.documentElement;
  const storageKey = "pdfTicketHolderLanguage";
  const titles = {
    ja: {
      "/privacy": "プライバシーポリシー | PDFTicketHolder",
      default: "PDFTicketHolder | PDFチケットをすぐ表示",
    },
    en: {
      "/privacy": "Privacy Policy | PDFTicketHolder",
      default: "PDFTicketHolder | PDF tickets, ready fast",
    },
  };

  function getInitialLanguage() {
    const requested = new URLSearchParams(window.location.search).get("lang");
    if (requested === "ja" || requested === "en") {
      return requested;
    }
    const saved = window.localStorage.getItem(storageKey);
    if (saved === "ja" || saved === "en") {
      return saved;
    }
    return navigator.language && navigator.language.toLowerCase().startsWith("ja") ? "ja" : "en";
  }

  function pageKey() {
    return window.location.pathname.endsWith("/privacy.html") ? "/privacy" : "default";
  }

  function applyLanguage(language) {
    root.dataset.language = language;
    root.lang = language;
    document.title = titles[language][pageKey()];
    window.localStorage.setItem(storageKey, language);

    document.querySelectorAll("[data-language-button]").forEach((button) => {
      const isCurrent = button.dataset.languageButton === language;
      button.setAttribute("aria-pressed", String(isCurrent));
    });
  }

  document.querySelectorAll("[data-language-button]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.languageButton));
  });

  applyLanguage(getInitialLanguage());
})();
