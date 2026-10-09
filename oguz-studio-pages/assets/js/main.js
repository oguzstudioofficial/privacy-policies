(() => {
  const translations = {
    tr: {
      skip:"İçeriğe geç", nav_apps:"Uygulamalar", nav_studio:"Stüdyo", nav_contact:"İletişim", nav_cta:"Projeleri keşfet",
      hero_eyebrow:"BAĞIMSIZ YAZILIM STÜDYOSU", hero_title:'Fikirlerden<br>gerçek <span class="gradient-text">deneyimlere.</span>',
      hero_lead:"Günlük yaşamı kolaylaştıran, hedeflere odaklanmayı destekleyen ve boş zamanlara eğlence katan dijital ürünler geliştiriyoruz.",
      hero_primary:"Uygulamaları keşfet", hero_secondary:"Bizi tanı", hero_meta:"Üç proje · Android için geliştiriliyor", code_footer:"Özenle geliştiriliyor",
      chip_un:"Daha iyi alışkanlıklar", chip_tet:"Oyna ve düşün", apps_eyebrow:"PROJELERİMİZ / 001—003", apps_title:"Her fikrin bir amacı var.",
      apps_intro:"Farklı ihtiyaçlar için tasarlanan üç uygulama. Projeleri incele ve Google Play kapalı test sayfasına göz at.",
      vit_tagline:"Sağlığını tanı. İlerlemeni takip et.", vit_desc:"Fitness hedeflerini, günlük kayıtlarını ve gelişimini daha anlaşılır şekilde takip etmene yardımcı olan kişisel sağlık ve fitness aracı.",
      vit_tag1:"Günlük takip",vit_tag2:"Hedefler",vit_tag3:"İstatistikler",un_tagline:"Daha bilinçli seçimler. Her gün.",
      un_desc:"Sigarayı bırakma yolculuğunda ilerlemeyi görünür kılmaya, hedeflerini hatırlamaya ve motivasyonunu korumaya odaklanan bir yardımcı.",
      un_tag1:"İlerleme",un_tag2:"Hedef takibi",un_tag3:"Motivasyon",tet_tagline:"Yerleştir. Planla. Rekorunu geliştir.",
      tet_desc:"Blokları stratejik şekilde yerleştirmeye dayanan, kısa oyun seanslarıyla düşünme ve skorunu geliştirme deneyimi sunan bulmaca oyunu.",
      tet_tag1:"Bulmaca",tet_tag2:"Strateji",tet_tag3:"Skor",join_test:"Kapalı teste katıl",privacy:"Gizlilik politikası",
      disclaimer:"Test bağlantıları Google Play kapalı test sayfalarına gider. Teste katılım, uygunluk ve uygulamayı yükleme koşulları Google Play tarafından belirlenir.",
      about_eyebrow:"STÜDYO HAKKINDA",about_title:'Az karmaşa.<br><span class="gradient-text">Daha iyi yazılım.</span>',independent:"Bağımsız geliştirici",
      about_lead:"Oguz Studio, gerçek ihtiyaçlardan yola çıkan dijital ürünler geliştiren bağımsız bir yazılım stüdyosudur.",
      about_p1:"Amacımız; özenli arayüzleri, anlaşılır deneyimleri ve işe yarayan özellikleri bir araya getirerek insanların günlük hayatına değer katan uygulamalar üretmek.",
      about_p2:"Ürünlerimizi geliştirirken kullanılabilirliğe, görsel tutarlılığa ve kullanıcı geri bildirimlerine önem veriyoruz. Her proje, daha iyi bir deneyime doğru atılan yeni bir adım.",
      value1:"İşe yarar tasarım",value2:"Özenle geliştirildi",value3:"Sürekli gelişim",contact_eyebrow:"İLETİŞİM KURALIM",
      contact_title:'Bir sonraki iyi fikir<br>bir mesajla başlayabilir.',contact_desc:"Geri bildirim, hata bildirimi veya iş birliği için bize ulaş.",
      send_email:"E-posta gönder",footer_tagline:"Fikirlerden uygulamalara. Özenle geliştirildi.",rights:"Tüm hakları saklıdır.",back_top:"Yukarı dön ↑"
    },
    en: {
      skip:"Skip to content", nav_apps:"Apps", nav_studio:"Studio", nav_contact:"Contact", nav_cta:"Explore projects",
      hero_eyebrow:"INDEPENDENT SOFTWARE STUDIO", hero_title:'From ideas to<br>real <span class="gradient-text">experiences.</span>',
      hero_lead:"We build digital products that simplify everyday life, support personal goals, and bring a little more fun to your downtime.",
      hero_primary:"Explore the apps", hero_secondary:"Meet the studio", hero_meta:"Three projects · Built for Android", code_footer:"Built with care",
      chip_un:"Build better habits", chip_tet:"Play & think", apps_eyebrow:"OUR PROJECTS / 001—003", apps_title:"Every idea has a purpose.",
      apps_intro:"Three apps built for different needs. Explore each project and visit its Google Play closed-testing page.",
      vit_tagline:"Know your health. Track your progress.", vit_desc:"A personal health and fitness companion to help you track fitness goals, daily records, and progress in a clearer way.",
      vit_tag1:"Daily tracking",vit_tag2:"Goals",vit_tag3:"Statistics",un_tagline:"More mindful choices. Every day.",
      un_desc:"A companion for the quit-smoking journey, designed to make progress visible, help you remember your goals, and stay motivated.",
      un_tag1:"Progress",un_tag2:"Goal tracking",un_tag3:"Motivation",tet_tagline:"Place. Plan. Beat your best.",
      tet_desc:"A block-placement puzzle game built around strategic moves, with short sessions focused on thinking ahead and improving your score.",
      tet_tag1:"Puzzle",tet_tag2:"Strategy",tet_tag3:"High scores",join_test:"Join closed test",privacy:"Privacy policy",
      disclaimer:"These links lead to Google Play closed-testing pages. Eligibility, joining the test, and app installation are managed by Google Play.",
      about_eyebrow:"ABOUT THE STUDIO",about_title:'Less complexity.<br><span class="gradient-text">Better software.</span>',independent:"Independent developer",
      about_lead:"Oguz Studio is an independent software studio creating digital products shaped by real-world needs.",
      about_p1:"Our goal is to combine thoughtful interfaces, clear experiences, and useful features to create apps that add value to everyday life.",
      about_p2:"We care about usability, visual consistency, and user feedback as we build our products. Every project is another step toward a better experience.",
      value1:"Useful by design",value2:"Built with care",value3:"Always improving",contact_eyebrow:"LET'S CONNECT",
      contact_title:'The next good idea<br>could start with a message.',contact_desc:"Reach out with feedback, bug reports, or collaboration ideas.",
      send_email:"Send an email",footer_tagline:"Ideas into apps. Built with care.",rights:"All rights reserved.",back_top:"Back to top ↑"
    }
  };

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  const year = document.querySelector('#year');
  const langButtons = document.querySelectorAll('.lang-button');

  if (year) year.textContent = new Date().getFullYear();

  function setLanguage(lang) {
    const dictionary = translations[lang] || translations.tr;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.innerHTML = dictionary[key];
      }
    });
    langButtons.forEach((button) => {
      const active = button.dataset.lang === lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    document.title = lang === 'en' ? 'Oguz Studio — Ideas into apps' : 'Oguz Studio — Fikirlerden uygulamalara';
    try { localStorage.setItem('oguz-studio-language', lang); } catch (_) {}
  }

  langButtons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });

  let initialLanguage = 'tr';
  try {
    const saved = localStorage.getItem('oguz-studio-language');
    if (saved === 'tr' || saved === 'en') initialLanguage = saved;
    else if (navigator.language && navigator.language.toLowerCase().startsWith('en')) initialLanguage = 'en';
  } catch (_) {}
  setLanguage(initialLanguage);

  if (toggle && nav) {
    const closeMenu = () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', document.documentElement.lang === 'en' ? 'Open menu' : 'Menüyü aç');
    };
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open
        ? (document.documentElement.lang === 'en' ? 'Close menu' : 'Menüyü kapat')
        : (document.documentElement.lang === 'en' ? 'Open menu' : 'Menüyü aç'));
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); });
  }
})();
