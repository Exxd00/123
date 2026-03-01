export const LOCALES = [
  "en",
  "ar",
  "de",
  "fr",
  "es",
  "it",
  "pt",
  "nl",
  "tr",
  "ru",
  "hi",
  "id",
  "ja",
  "ko",
  "zh",
] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(x: string | undefined | null): x is Locale {
  if (!x) return false;
  return (LOCALES as readonly string[]).includes(x);
}

export function getDir(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

/**
 * Minimal UI dictionary.
 *
 * Notes:
 * - Content pages (articles/reviews Markdown) remain English by default.
 * - You can extend this dictionary over time or hook it to a CMS.
 */
const DICT: Record<Locale, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.reviews": "Reviews",
    "nav.compare": "Compare",
    "nav.freeGuide": "Free Guide",
    "nav.about": "About",
    "nav.terms": "Terms",
    "nav.privacy": "Privacy",
    "nav.disclaimer": "Disclaimer",
    "cookie.text":
      "We use cookies for analytics and to improve your experience. By continuing, you agree to our Privacy Policy.",
    "cookie.accept": "Accept",
    "cookie.reject": "Reject",
    "common.readMore": "Read →",
    "common.notFound": "Page not found",
    "common.backHome": "Back to home",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.blog": "المقالات",
    "nav.reviews": "المراجعات",
    "nav.compare": "مقارنة",
    "nav.freeGuide": "الدليل المجاني",
    "nav.about": "من نحن",
    "nav.terms": "الشروط",
    "nav.privacy": "الخصوصية",
    "nav.disclaimer": "إخلاء المسؤولية",
    "cookie.text":
      "نستخدم ملفات تعريف الارتباط للتحليلات وتحسين تجربتك. بالمتابعة، أنت توافق على سياسة الخصوصية.",
    "cookie.accept": "موافقة",
    "cookie.reject": "رفض",
    "common.readMore": "اقرأ →",
    "common.notFound": "الصفحة غير موجودة",
    "common.backHome": "العودة للرئيسية",
  },
  de: {
    "nav.home": "Start",
    "nav.blog": "Blog",
    "nav.reviews": "Reviews",
    "nav.compare": "Vergleich",
    "nav.freeGuide": "Gratis‑Guide",
    "nav.about": "Über uns",
    "nav.terms": "AGB",
    "nav.privacy": "Datenschutz",
    "nav.disclaimer": "Haftungsausschluss",
    "cookie.text":
      "Wir verwenden Cookies für Analysen und um Ihr Erlebnis zu verbessern. Mit der Nutzung stimmen Sie unserer Datenschutzerklärung zu.",
    "cookie.accept": "Akzeptieren",
    "cookie.reject": "Ablehnen",
    "common.readMore": "Lesen →",
    "common.notFound": "Seite nicht gefunden",
    "common.backHome": "Zur Startseite",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.blog": "Blog",
    "nav.reviews": "Avis",
    "nav.compare": "Comparer",
    "nav.freeGuide": "Guide gratuit",
    "nav.about": "À propos",
    "nav.terms": "Conditions",
    "nav.privacy": "Confidentialité",
    "nav.disclaimer": "Avertissement",
    "cookie.text":
      "Nous utilisons des cookies pour l’analyse et pour améliorer votre expérience. En continuant, vous acceptez notre politique de confidentialité.",
    "cookie.accept": "Accepter",
    "cookie.reject": "Refuser",
    "common.readMore": "Lire →",
    "common.notFound": "Page introuvable",
    "common.backHome": "Retour à l’accueil",
  },
  es: {
    "nav.home": "Inicio",
    "nav.blog": "Blog",
    "nav.reviews": "Reseñas",
    "nav.compare": "Comparar",
    "nav.freeGuide": "Guía gratis",
    "nav.about": "Acerca de",
    "nav.terms": "Términos",
    "nav.privacy": "Privacidad",
    "nav.disclaimer": "Aviso",
    "cookie.text":
      "Usamos cookies para analíticas y para mejorar tu experiencia. Al continuar, aceptas nuestra Política de Privacidad.",
    "cookie.accept": "Aceptar",
    "cookie.reject": "Rechazar",
    "common.readMore": "Leer →",
    "common.notFound": "Página no encontrada",
    "common.backHome": "Volver al inicio",
  },
  it: {
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.reviews": "Recensioni",
    "nav.compare": "Confronta",
    "nav.freeGuide": "Guida gratis",
    "nav.about": "Chi siamo",
    "nav.terms": "Termini",
    "nav.privacy": "Privacy",
    "nav.disclaimer": "Disclaimer",
    "cookie.text":
      "Usiamo i cookie per analisi e per migliorare la tua esperienza. Continuando, accetti la nostra Informativa sulla privacy.",
    "cookie.accept": "Accetta",
    "cookie.reject": "Rifiuta",
    "common.readMore": "Leggi →",
    "common.notFound": "Pagina non trovata",
    "common.backHome": "Torna alla home",
  },
  pt: {
    "nav.home": "Início",
    "nav.blog": "Blog",
    "nav.reviews": "Avaliações",
    "nav.compare": "Comparar",
    "nav.freeGuide": "Guia grátis",
    "nav.about": "Sobre",
    "nav.terms": "Termos",
    "nav.privacy": "Privacidade",
    "nav.disclaimer": "Aviso",
    "cookie.text":
      "Usamos cookies para análises e para melhorar sua experiência. Ao continuar, você concorda com nossa Política de Privacidade.",
    "cookie.accept": "Aceitar",
    "cookie.reject": "Rejeitar",
    "common.readMore": "Ler →",
    "common.notFound": "Página não encontrada",
    "common.backHome": "Voltar ao início",
  },
  nl: {
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.reviews": "Reviews",
    "nav.compare": "Vergelijken",
    "nav.freeGuide": "Gratis gids",
    "nav.about": "Over",
    "nav.terms": "Voorwaarden",
    "nav.privacy": "Privacy",
    "nav.disclaimer": "Disclaimer",
    "cookie.text":
      "We gebruiken cookies voor analytics en om je ervaring te verbeteren. Door verder te gaan, ga je akkoord met ons privacybeleid.",
    "cookie.accept": "Akkoord",
    "cookie.reject": "Weigeren",
    "common.readMore": "Lees →",
    "common.notFound": "Pagina niet gevonden",
    "common.backHome": "Terug naar home",
  },
  tr: {
    "nav.home": "Ana Sayfa",
    "nav.blog": "Blog",
    "nav.reviews": "İncelemeler",
    "nav.compare": "Karşılaştır",
    "nav.freeGuide": "Ücretsiz rehber",
    "nav.about": "Hakkında",
    "nav.terms": "Şartlar",
    "nav.privacy": "Gizlilik",
    "nav.disclaimer": "Sorumluluk reddi",
    "cookie.text":
      "Analiz ve deneyiminizi iyileştirmek için çerezler kullanıyoruz. Devam ederek Gizlilik Politikamızı kabul etmiş olursunuz.",
    "cookie.accept": "Kabul et",
    "cookie.reject": "Reddet",
    "common.readMore": "Oku →",
    "common.notFound": "Sayfa bulunamadı",
    "common.backHome": "Ana sayfaya dön",
  },
  ru: {
    "nav.home": "Главная",
    "nav.blog": "Блог",
    "nav.reviews": "Обзоры",
    "nav.compare": "Сравнение",
    "nav.freeGuide": "Бесплатный гид",
    "nav.about": "О нас",
    "nav.terms": "Условия",
    "nav.privacy": "Конфиденциальность",
    "nav.disclaimer": "Отказ от ответственности",
    "cookie.text":
      "Мы используем файлы cookie для аналитики и улучшения вашего опыта. Продолжая, вы соглашаетесь с нашей политикой конфиденциальности.",
    "cookie.accept": "Принять",
    "cookie.reject": "Отклонить",
    "common.readMore": "Читать →",
    "common.notFound": "Страница не найдена",
    "common.backHome": "На главную",
  },
  hi: {
    "nav.home": "होम",
    "nav.blog": "ब्लॉग",
    "nav.reviews": "रिव्यू",
    "nav.compare": "तुलना",
    "nav.freeGuide": "मुफ़्त गाइड",
    "nav.about": "हमारे बारे में",
    "nav.terms": "शर्तें",
    "nav.privacy": "गोपनीयता",
    "nav.disclaimer": "अस्वीकरण",
    "cookie.text":
      "हम विश्लेषण और अनुभव सुधारने के लिए कुकीज़ का उपयोग करते हैं। जारी रखने पर आप हमारी गोपनीयता नीति से सहमत हैं।",
    "cookie.accept": "स्वीकार",
    "cookie.reject": "अस्वीकार",
    "common.readMore": "पढ़ें →",
    "common.notFound": "पेज नहीं मिला",
    "common.backHome": "होम पर वापस",
  },
  id: {
    "nav.home": "Beranda",
    "nav.blog": "Blog",
    "nav.reviews": "Ulasan",
    "nav.compare": "Bandingkan",
    "nav.freeGuide": "Panduan gratis",
    "nav.about": "Tentang",
    "nav.terms": "Ketentuan",
    "nav.privacy": "Privasi",
    "nav.disclaimer": "Disclaimer",
    "cookie.text":
      "Kami menggunakan cookie untuk analitik dan meningkatkan pengalaman Anda. Dengan melanjutkan, Anda setuju dengan Kebijakan Privasi kami.",
    "cookie.accept": "Terima",
    "cookie.reject": "Tolak",
    "common.readMore": "Baca →",
    "common.notFound": "Halaman tidak ditemukan",
    "common.backHome": "Kembali ke beranda",
  },
  ja: {
    "nav.home": "ホーム",
    "nav.blog": "ブログ",
    "nav.reviews": "レビュー",
    "nav.compare": "比較",
    "nav.freeGuide": "無料ガイド",
    "nav.about": "概要",
    "nav.terms": "利用規約",
    "nav.privacy": "プライバシー",
    "nav.disclaimer": "免責事項",
    "cookie.text":
      "当サイトは分析と体験向上のためにCookieを使用します。続行するとプライバシーポリシーに同意したことになります。",
    "cookie.accept": "同意",
    "cookie.reject": "拒否",
    "common.readMore": "読む →",
    "common.notFound": "ページが見つかりません",
    "common.backHome": "ホームへ",
  },
  ko: {
    "nav.home": "홈",
    "nav.blog": "블로그",
    "nav.reviews": "리뷰",
    "nav.compare": "비교",
    "nav.freeGuide": "무료 가이드",
    "nav.about": "소개",
    "nav.terms": "이용약관",
    "nav.privacy": "개인정보",
    "nav.disclaimer": "면책",
    "cookie.text":
      "당사는 분석 및 경험 개선을 위해 쿠키를 사용합니다. 계속하면 개인정보 처리방침에 동의하게 됩니다.",
    "cookie.accept": "동의",
    "cookie.reject": "거부",
    "common.readMore": "읽기 →",
    "common.notFound": "페이지를 찾을 수 없습니다",
    "common.backHome": "홈으로",
  },
  zh: {
    "nav.home": "首页",
    "nav.blog": "博客",
    "nav.reviews": "评测",
    "nav.compare": "对比",
    "nav.freeGuide": "免费指南",
    "nav.about": "关于",
    "nav.terms": "条款",
    "nav.privacy": "隐私",
    "nav.disclaimer": "免责声明",
    "cookie.text":
      "我们使用 Cookie 进行分析并改进体验。继续浏览即表示您同意我们的隐私政策。",
    "cookie.accept": "接受",
    "cookie.reject": "拒绝",
    "common.readMore": "阅读 →",
    "common.notFound": "未找到页面",
    "common.backHome": "返回首页",
  },
};

export function t(locale: Locale, key: string): string {
  const table = DICT[locale] ?? DICT[DEFAULT_LOCALE];
  return table[key] ?? DICT[DEFAULT_LOCALE][key] ?? key;
}

/**
 * Accept-Language parsing (simple + robust).
 */
export function pickLocaleFromAcceptLanguage(
  header: string | null | undefined,
): Locale {
  if (!header) return DEFAULT_LOCALE;
  const parts = header
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => {
      const [tag, qPart] = p.split(";").map((x) => x.trim());
      const q = qPart?.startsWith("q=") ? Number(qPart.slice(2)) : 1;
      return { tag, q: Number.isFinite(q) ? q : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of parts) {
    const base = tag.toLowerCase().split("-")[0];
    if (isLocale(base)) return base;
  }
  return DEFAULT_LOCALE;
}
