(function () {
  "use strict";

  const root = document.documentElement;
  const storageKey = "appsSiteLanguage";
  const supportedLanguages = ["ja", "en"];
  const japanesePattern = /[\u3040-\u30ff\u3400-\u9fff]/;

  const translations = {
    "common.about": { ja: "紹介ページ", en: "About" },
    "common.support": { ja: "サポート", en: "Support" },
    "common.privacy": { ja: "プライバシーポリシー", en: "Privacy Policy" },
    "common.contact": { ja: "お問い合わせ", en: "Contact" },
    "home.lead": {
      ja: "公開中アプリの紹介ページとプライバシーポリシーをまとめています。",
      en: "Explore the apps by Naoki Hotta, along with support and privacy information.",
    },
    "home.pdf.description": {
      ja: "PDFチケットやチケット画像を保存し、当日に必要なチケットを起動直後に表示できるiPhone/iPadアプリです。",
      en: "An iPhone and iPad app that keeps PDF and image tickets ready to show as soon as you open it.",
    },
    "home.fit.description": {
      ja: "フィットネスゲームのリザルト画面から運動時間と消費カロリーを読み取り、ヘルスケアへ保存するiPhoneアプリです。",
      en: "An iPhone app that reads workout time and calories from fitness-game result screens and saves them to Apple Health.",
    },
    "invoice.name": { ja: "登録番号検索くん", en: "Invoice Registry Checker" },
    "home.invoice.description": {
      ja: "請求書や領収書の画像から適格請求書発行事業者の登録番号を読み取り、検索できるiPhoneアプリです。",
      en: "An iPhone app that reads and looks up qualified invoice issuer registration numbers from invoices and receipts.",
    },
    "home.circle.description": {
      ja: "地図上にピンと半径円を配置して、距離感を視覚的に把握できるiPhoneアプリです。",
      en: "An iPhone app for placing pins and radius circles on a map to understand distances visually.",
    },
    "countdown.name": { ja: "あと何日？", en: "Countdown" },
    "home.countdown.description": {
      ja: "純正カレンダーと連携して、次の予定までの残り日数を表示するウィジェット中心のアプリです。",
      en: "A widget-first app that connects to Apple Calendar and shows the days remaining until your next event.",
    },
    "home.counter.description": {
      ja: "Apple Watchで素早く見やすく数えられる、シンプルなカウンターアプリです。",
      en: "A simple Apple Watch counter designed for quick use and easy reading.",
    },
    "circle.features.title": {
      ja: "距離の感覚を、地図の上で扱いやすく。",
      en: "Make distance easier to understand on a map.",
    },
    "circle.feature.search": {
      ja: "住所、施設名、場所名で検索して、見つけた地点へ移動したりピンとして保存したりできます。",
      en: "Search by address, venue, or place name, then move to the result or save it as a pin.",
    },
    "circle.feature.radius": {
      ja: "ピンを中心に複数の半径円を重ねられます。徒歩圏、集合範囲、周辺確認などの目安作りに使えます。",
      en: "Layer multiple radius circles around a pin to estimate walking areas, meeting zones, or nearby coverage.",
    },
    "circle.feature.map": {
      ja: "詳細マップと航空写真を切り替えて、街区や地形を確認しながら円の範囲を調整できます。",
      en: "Switch between detailed maps and satellite imagery while adjusting circles around streets or terrain.",
    },
    "circle.feature.longpress": {
      ja: "地図上の任意の場所を長押しして、検索を使わずにその場へピンを追加できます。",
      en: "Long-press anywhere on the map to add a pin without using search.",
    },
    "circle.feature.manage": {
      ja: "作成済みのピンや円を一覧から確認し、名前、メモ、半径、色をあとから編集できます。",
      en: "Review saved pins and circles in a list, then edit their names, notes, radii, and colors.",
    },
    "circle.feature.storage": {
      ja: "作成したピンと円の情報は端末内に保存されます。外部サーバーへの送信は行いません。",
      en: "Pins and circles are stored on your device and are not sent to the developer's external servers.",
    },
    "circle.screens.copy": {
      ja: "地図表示、検索、ピン詳細、円の追加、管理画面、設定画面の例です。",
      en: "Examples of the map, search, pin details, circle creation, management, and settings screens.",
    },
    "circle.privacy.title": {
      ja: "位置情報は、地図表示のために使用します。",
      en: "Location is used to provide the map experience.",
    },
    "circle.privacy.copy": {
      ja: "CircleMap は現在地表示や現在地を中心にした初期ピン作成のために位置情報を使用します。作成したピンと円は端末内に保存され、開発者の外部サーバーへ送信されません。",
      en: "CircleMap uses location to show your current position and create an initial pin around it. Your pins and circles stay on your device and are not sent to the developer's external servers.",
    },
    "countdown.hero.title": {
      ja: '<span class="hero-line">次の予定までを、</span><span class="hero-line">ホーム画面で</span><span class="hero-line">ひと目で。</span>',
      en: '<span class="hero-line">Your next event,</span><span class="hero-line">right on your</span><span class="hero-line">Home Screen.</span>',
    },
    "fit.hero.title": {
      ja: '<span class="hero-line">リザルト画面を、</span><span class="hero-line">ヘルスケアの</span><span class="hero-line">ワークアウトへ。</span>',
      en: '<span class="hero-line">Game results,</span><span class="hero-line">saved to Health</span><span class="hero-line">as workouts.</span>',
    },
    "invoice.hero.title": {
      ja: "登録番号を撮影・画像選択・手入力で検索",
      en: "Look up registration numbers from a photo, image, or manual entry",
    },
    "invoice.hero.lead": {
      ja: "登録番号検索くんは、請求書や領収書に記載された適格請求書発行事業者の登録番号を読み取り、登録情報を確認するためのiPhoneアプリです。",
      en: "Invoice Registry Checker is an iPhone app that reads qualified invoice issuer registration numbers from invoices and receipts so you can verify their registration details.",
    },
    "invoice.feature.image.title": { ja: "画像から読み取り", en: "Read from images" },
    "invoice.feature.image.copy": {
      ja: "カメラ撮影または写真ライブラリから選択した画像を、端末上のOCRで読み取ります。",
      en: "Use on-device OCR to read an image captured with the camera or selected from your photo library.",
    },
    "invoice.feature.manual.title": { ja: "手入力で検索", en: "Search manually" },
    "invoice.feature.manual.copy": {
      ja: "OCRで読み取れない場合でも、登録番号の数字部分を入力して検索できます。",
      en: "If OCR cannot read the number, enter its numeric portion to run the lookup.",
    },
    "invoice.feature.history.title": { ja: "履歴を保存", en: "Save history" },
    "invoice.feature.history.copy": {
      ja: "検索した登録番号と結果を端末内に保存し、あとから確認できます。",
      en: "Save looked-up registration numbers and results on your device for later review.",
    },
    "circle.privacy.date": { ja: "最終更新日: 2026年5月2日", en: "Last Updated: May 2, 2026" },
    "countdown.privacy.date": { ja: "最終更新日: 2026年4月19日", en: "Last Updated: April 19, 2026" },
    "fit.privacy.date": { ja: "最終更新日: 2026年6月7日", en: "Last Updated: June 7, 2026" },
    "invoice.privacy.date": { ja: "最終更新日: 2026年5月16日", en: "Last Updated: May 16, 2026" },
    "counter.features.title": { ja: "特長", en: "Features" },
    "counter.badge": { ja: "Apple Watch カウンターアプリ", en: "Apple Watch Counter App" },
    "counter.features.lead": {
      ja: "最小限の操作で、必要なことだけをすぐ使える構成です。",
      en: "A focused design that keeps every essential action close at hand.",
    },
    "counter.large.title": { ja: "大きく見やすいカウント", en: "Large, readable count" },
    "counter.large.copy": {
      ja: "大きな数字表示で、ひと目で現在のカウントを確認できます。",
      en: "See the current count at a glance with large, readable numbers.",
    },
    "counter.colors.title": { ja: "テーマカラー", en: "Theme colors" },
    "counter.colors.copy": {
      ja: "Blue / Green / Orange / Pink / Purple / Mono から好きな表示色を選べます。",
      en: "Choose from Blue, Green, Orange, Pink, Purple, and Mono themes.",
    },
    "counter.controls.title": { ja: "シンプルな操作", en: "Simple controls" },
    "counter.controls.copy": {
      ja: "増減・リセット・設定にすぐアクセスできる、シンプルな操作設計です。",
      en: "Quickly access increment, decrement, reset, and settings controls.",
    },
    "counter.screens.title": { ja: "スクリーンショット", en: "Screenshots" },
    "counter.screens.lead": {
      ja: "アプリ画面の例です。色テーマや設定画面を確認できます。",
      en: "See the available color themes and settings screens.",
    },
    "counter.support.title": { ja: "サポート", en: "Support" },
    "counter.support.lead": { ja: "お問い合わせ先とアプリ情報です。", en: "Contact details and app information." },
    "counter.contact.title": { ja: "お問い合わせ", en: "Contact" },
    "counter.contact.copy": {
      ja: "ご質問・不具合報告は以下までご連絡ください。",
      en: "Please use the email below for questions or bug reports.",
    },
    "counter.info.title": { ja: "アプリ情報", en: "App information" },
    "counter.privacy.title": { ja: "プライバシー", en: "Privacy" },
    "counter.back": { ja: "← サポートページへ戻る", en: "← Back to Support Page" },
    "counter.privacy.heading": { ja: "プライバシーポリシー", en: "Privacy Policy" },
    "counter.privacy.updated": { ja: "最終更新日: 2026-03-20", en: "Last updated: 2026-03-20" },
  };

  const pageMetadata = {
    "/": {
      ja: ["Naoki Hotta Apps", "Naoki Hotta が公開しているアプリの紹介ページとプライバシーポリシー一覧です。"],
      en: ["Naoki Hotta Apps", "Apps by Naoki Hotta, with support pages and privacy policies."],
    },
    "/CircleMap": {
      ja: ["CircleMap | 地図に半径円を描いて距離感をつかむアプリ", "CircleMapは、地図上にピンと半径円を配置して距離感を視覚的に把握できるiPhoneアプリです。"],
      en: ["CircleMap | Visualize distance with radius circles", "CircleMap is an iPhone app for placing pins and radius circles on a map to understand distance visually."],
    },
    "/CircleMap/privacy.html": {
      ja: ["プライバシーポリシー | CircleMap", "CircleMapのプライバシーポリシーです。"],
      en: ["Privacy Policy | CircleMap", "Privacy policy for CircleMap."],
    },
    "/CountdownCalendar": {
      ja: ["あと何日？ | 純正カレンダー連携のカウントダウンウィジェット", "純正カレンダーと連携するカウントダウンウィジェットアプリです。"],
      en: ["Countdown | Calendar countdown widgets", "A widget-first countdown app that connects to Apple Calendar."],
    },
    "/CountdownCalendar/privacy.html": {
      ja: ["プライバシーポリシー | あと何日？", "あと何日？のプライバシーポリシーです。"],
      en: ["Privacy Policy | Countdown", "Privacy policy for Countdown."],
    },
    "/FitResultImporter": {
      ja: ["FitResultImporter | フィットネスゲームのリザルトをヘルスケアへ", "フィットネスゲームのリザルトをAppleヘルスケアへ保存するアプリです。"],
      en: ["FitResultImporter | Save fitness game results to Apple Health", "Import fitness-game result screens as Apple Health workouts."],
    },
    "/FitResultImporter/privacy.html": {
      ja: ["プライバシーポリシー | FitResultImporter", "FitResultImporterのプライバシーポリシーです。"],
      en: ["Privacy Policy | FitResultImporter", "Privacy policy for FitResultImporter."],
    },
    "/InvoiceRegistryChecker": {
      ja: ["登録番号検索くん | サポート", "登録番号検索くんのサポートページです。"],
      en: ["Invoice Registry Checker | Support", "Support page for Invoice Registry Checker."],
    },
    "/InvoiceRegistryChecker/privacy.html": {
      ja: ["プライバシーポリシー | 登録番号検索くん", "登録番号検索くんのプライバシーポリシーです。"],
      en: ["Privacy Policy | Invoice Registry Checker", "Privacy policy for Invoice Registry Checker."],
    },
    "/PDFTicketHolder": {
      ja: ["PDFTicketHolder | PDFチケットをすぐ表示", "PDFや画像のチケットを必要なときにすぐ表示できるアプリです。"],
      en: ["PDFTicketHolder | PDF tickets, ready fast", "Keep PDF and image tickets ready when you need them."],
    },
    "/PDFTicketHolder/privacy.html": {
      ja: ["プライバシーポリシー | PDFTicketHolder", "PDFTicketHolderのプライバシーポリシーです。"],
      en: ["Privacy Policy | PDFTicketHolder", "Privacy policy for PDFTicketHolder."],
    },
    "/SimpleBigCounter": {
      ja: ["SimpleBigCounter | Apple Watchカウンター", "Apple Watchで素早く見やすく数えられるカウンターアプリです。"],
      en: ["SimpleBigCounter for Apple Watch", "A simple and easy-to-read counter app for Apple Watch."],
    },
    "/SimpleBigCounter/privacy.html": {
      ja: ["プライバシーポリシー | SimpleBigCounter", "SimpleBigCounterのプライバシーポリシーです。"],
      en: ["Privacy Policy | SimpleBigCounter", "Privacy policy for SimpleBigCounter."],
    },
  };

  function normalizePathname() {
    let path = window.location.pathname.replace(/\/index\.html$/, "").replace(/\/$/, "");
    const pageRoots = [
      "/CircleMap",
      "/CountdownCalendar",
      "/FitResultImporter",
      "/InvoiceRegistryChecker",
      "/PDFTicketHolder",
      "/SimpleBigCounter",
    ];
    const pageRoot = pageRoots.find((candidate) => path.includes(candidate));
    return pageRoot ? path.slice(path.indexOf(pageRoot)) : "/";
  }

  function languageFrom(value) {
    if (!value) return null;
    const normalized = String(value).toLowerCase().split("-")[0];
    return supportedLanguages.includes(normalized) ? normalized : null;
  }

  function readStoredLanguage(key) {
    try {
      return languageFrom(window.localStorage.getItem(key));
    } catch (_) {
      return null;
    }
  }

  function storeLanguage(language) {
    try {
      window.localStorage.setItem(storageKey, language);
    } catch (_) {
      // Language switching still works for the current page when storage is unavailable.
    }
  }

  function getInitialLanguage() {
    const requested = languageFrom(new URLSearchParams(window.location.search).get("lang"));
    if (requested) {
      storeLanguage(requested);
      return requested;
    }

    const saved = readStoredLanguage(storageKey);
    if (saved) return saved;

    const legacySaved = readStoredLanguage("pdfTicketHolderLanguage");
    if (legacySaved) return legacySaved;

    const browserLanguages = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language];
    return Array.from(browserLanguages).map(languageFrom).find(Boolean) || "en";
  }

  function hasJapanese(value) {
    return japanesePattern.test(value || "");
  }

  function wrapNode(node, language) {
    const wrapper = document.createElement("span");
    wrapper.dataset.lang = language;
    node.parentNode.insertBefore(wrapper, node);
    wrapper.appendChild(node);
  }

  function markEnglishConventions() {
    document.querySelectorAll(".en-block, .en-inline, .en-title, .en-paragraph, .hero-subtitle").forEach((element) => {
      if (!element.dataset.lang) element.dataset.lang = "en";
    });

    document.querySelectorAll(".subtle-inline").forEach((element) => {
      element.dataset.lang = "en";
      element.textContent = element.textContent.replace(/^\s*\/\s*/, "");
    });

    document.querySelectorAll(".en-block, .en-inline, .en-title, .subtle-inline").forEach((englishElement) => {
      const parent = englishElement.parentElement;
      if (!parent || parent.dataset.lang || !hasJapanese(parent.textContent.replace(englishElement.textContent, ""))) return;

      Array.from(parent.childNodes).forEach((node) => {
        if (node === englishElement || (node.nodeType === Node.TEXT_NODE && !node.textContent.trim())) return;
        if (node.nodeType === Node.ELEMENT_NODE && node.dataset && node.dataset.lang) return;
        wrapNode(node, "ja");
      });
    });
  }

  function splitBilingualTextNodes() {
    const selector = "a, li, h1, h2, h3, p, figcaption, .feature-label, .brand";
    document.querySelectorAll(selector).forEach((element) => {
      if (element.dataset.lang || element.dataset.i18n) return;
      Array.from(element.childNodes).forEach((node) => {
        if (node.nodeType !== Node.TEXT_NODE) return;
        const value = node.textContent;
        const matches = value.match(/\s+\/\s+/g);
        if (!matches || matches.length !== 1) return;

        const parts = value.trim().split(/\s+\/\s+/);
        if (parts.length !== 2 || hasJapanese(parts[0]) === hasJapanese(parts[1])) return;

        const leading = value.match(/^\s*/)[0];
        const trailing = value.match(/\s*$/)[0];
        const fragment = document.createDocumentFragment();
        fragment.append(leading);
        parts.forEach((part, index) => {
          const span = document.createElement("span");
          span.dataset.lang = hasJapanese(part) ? "ja" : "en";
          span.textContent = part;
          fragment.appendChild(span);
          if (index === 0) fragment.append(" ");
        });
        fragment.append(trailing);
        node.replaceWith(fragment);
      });
    });
  }

  function markPolicyParagraphPairs() {
    document.querySelectorAll(".policy-card > p:not(.contact-line)").forEach((paragraph) => {
      if (paragraph.dataset.lang || paragraph.querySelector("[data-lang]")) return;
      const text = paragraph.textContent.trim();
      if (!text) return;
      paragraph.dataset.lang = hasJapanese(text) ? "ja" : "en";
    });
  }

  function makeLanguageSwitch() {
    let switcher = document.querySelector(".language-switch, .apps-language-switch");
    if (!switcher) {
      switcher = document.createElement("div");
      switcher.innerHTML = [
        '<button type="button" data-language-button="ja">日本語</button>',
        '<button type="button" data-language-button="en">English</button>',
      ].join("");

      const nav = document.querySelector(".site-header .nav");
      const rootHeader = document.querySelector(".container > header");
      const wrap = document.querySelector(".wrap");
      if (nav) nav.appendChild(switcher);
      else if (rootHeader) rootHeader.prepend(switcher);
      else if (wrap) wrap.prepend(switcher);
      else document.body.prepend(switcher);
    }
    switcher.classList.add("apps-language-switch");
    switcher.setAttribute("role", "group");
    return switcher;
  }

  function applyTranslations(language) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const translation = translations[element.dataset.i18n];
      if (!translation || !translation[language]) return;
      element.innerHTML = translation[language];
    });
  }

  function updateScreenshotAlternatives(language) {
    document.querySelectorAll("figure img:not([alt=''])").forEach((image) => {
      if (!image.dataset.altEn) image.dataset.altEn = image.alt;
      if (!image.dataset.altJa) image.dataset.altJa = image.alt;
      if (language === "ja") {
        image.alt = image.dataset.altJa;
        return;
      }
      const caption = image.closest("figure")?.querySelector("figcaption [data-lang='en']");
      image.alt = caption ? `${caption.textContent.trim()} screen` : image.dataset.altEn;
    });
  }

  function updateMetadata(language) {
    const metadata = pageMetadata[normalizePathname()];
    if (!metadata || !metadata[language]) return;
    document.title = metadata[language][0];
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = metadata[language][1];
  }

  function applyLanguage(language, persist) {
    root.dataset.language = language;
    root.lang = language;
    if (persist) storeLanguage(language);

    applyTranslations(language);
    updateMetadata(language);
    updateScreenshotAlternatives(language);

    const switcher = document.querySelector(".apps-language-switch");
    if (switcher) switcher.setAttribute("aria-label", language === "ja" ? "表示言語" : "Display language");
    document.querySelectorAll("[data-language-button]").forEach((button) => {
      const isCurrent = button.dataset.languageButton === language;
      button.setAttribute("aria-pressed", String(isCurrent));
      button.setAttribute("aria-label", button.dataset.languageButton === "ja" ? "日本語で表示" : "Display in English");
    });
  }

  const initialLanguage = getInitialLanguage();
  root.dataset.language = initialLanguage;
  markEnglishConventions();
  splitBilingualTextNodes();
  markPolicyParagraphPairs();
  makeLanguageSwitch();

  document.querySelectorAll("[data-language-button]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.languageButton, true));
  });

  applyLanguage(initialLanguage, false);
})();
