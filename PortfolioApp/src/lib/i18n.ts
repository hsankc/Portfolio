import type { Locale } from "@/types/content";

export const locales: Locale[] = ["tr", "en"];
export const defaultLocale: Locale = "tr";

export function routeFor(locale: Locale, path = "") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === "tr") {
    return cleanPath === "/" ? "/" : cleanPath;
  }

  return cleanPath === "/" ? "/en" : `/en${cleanPath}`;
}

export function alternateLocale(locale: Locale) {
  return locale === "tr" ? "en" : "tr";
}

export const dictionary = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      projects: "Projeler",
      hackathons: "Hackathonlar",
      cards: "Kartlar",
      proof: "Sertifikalar",
      writing: "Yazılar",
      contact: "İletişim"
    },
    actions: {
      viewProjects: "Projeleri Gör",
      contact: "İletişime Geç",
      viewLive: "Canlı",
      source: "Kaynak",
      details: "Detaylar",
      backProjects: "Projelere Dön",
      switchLanguage: "English",
      theme: "Tema"
    },
    home: {
      eyebrow: "Software + AI/Web3 + UAV Leadership",
      title: "Hasan Kaşıkcı",
      subtitle:
        "Bilgisayar Mühendisliği öğrencisi. Çanakkale Teknopark ön kuluçkasındaki girişimi InterKey ve web stüdyosu ilion7.web ile projeler üreten; AI, Web3 ve ÇOMÜ Havacılık topluluğuna liderlik eden bir builder.",
      proofLine:
        "Sadece proje listesi değil; yarışmalar, canlı ürünler, kulüp liderliği ve sertifikalarla büyüyen uzun vadeli bir çalışma vitrini.",
      featured: "Öne Çıkan İşler",
      hackathonStrip: "Hackathon Rotası",
      leadership: "Liderlik Kanıtları Koleksiyonu",
      skillsTitle: "Teknolojik Yetkinlikler",
      venturesTitle: "Girişimler & Oluşumlar",
      interkeyDesc: "Çanakkale Teknopark ön kuluçka aşamasında yer alan, yenilikçi çözümler sunan teknoloji girişimi.",
      ilionDesc: "Modern, hızlı ve estetik web siteleri üreten kişisel web geliştirme girişimi."
    },
    pages: {
      projectsTitle: "Tüm Projeler",
      projectsLead:
        "AI, Web3, müşteri işleri, akademik projeler ve canlı ürünler tek yerde. Öne çıkanlar ilk sırada; diğerleri teknik derinliği tamamlıyor.",
      hackathonsTitle: "Hackathon Timeline",
      hackathonsLead:
        "Monad, Sui, Frontier ve BTK AI tarafındaki üretim çizgisi. Her etkinlik bir proje, bir rol ve bir öğrenme izi bırakıyor.",
      cardsTitle: "Kartlarım",
      cardsLead:
        "Katıldığım etkinliklerden kalan yaka kartları, rozetler ve program kartları. Hepsi askıya asılmış gibi, hatıra duvarında sergileniyor.",
      proofTitle: "Sertifikalar",
      proofLead:
        "Sertifika ve katılım belgeleri doğrudan PDF/JPG dosyalarıyla yayınlanır; her belge karttan açılabilir.",
      writingTitle: "Yazılar",
      writingLead:
        "Yakında teknik notlar, hackathon günlükleri ve proje postmortemleri burada yayınlanacak. Alan hazır, içerik düzenli eklenecek.",
      contactTitle: "İletişim",
      contactLead:
        "Staj, iş birliği, hackathon, kulüp/etkinlik ya da ürün fikri için kısa bir mesaj yeterli."
    }
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      hackathons: "Hackathons",
      cards: "Cards",
      proof: "Certificates",
      writing: "Writing",
      contact: "Contact"
    },
    actions: {
      viewProjects: "View Projects",
      contact: "Contact",
      viewLive: "Live",
      source: "Source",
      details: "Details",
      backProjects: "Back to Projects",
      switchLanguage: "Türkçe",
      theme: "Theme"
    },
    home: {
      eyebrow: "Software + AI/Web3 + UAV Leadership",
      title: "Hasan Kaşıkcı",
      subtitle:
        "Computer Engineering student. Building ventures like InterKey (Çanakkale Teknopark pre-incubation) and ilion7.web studio; active in AI, Web3, and leading the COMU Aviation community.",
      proofLine:
        "More than a project list: a long-term portfolio backed by competitions, live products, community leadership, and certificates.",
      featured: "Featured Work",
      hackathonStrip: "Hackathon Route",
      leadership: "Leadership Proof Collection",
      skillsTitle: "Tech Stack & Skills",
      venturesTitle: "Startups & Ventures",
      interkeyDesc: "A tech startup in Çanakkale Teknopark pre-incubation delivering innovative solutions.",
      ilionDesc: "Personal web development venture crafting modern, blazing-fast, and premium websites."
    },
    pages: {
      projectsTitle: "All Projects",
      projectsLead:
        "AI, Web3, client work, academic projects, and live products in one place. Featured work leads the page; the rest shows breadth.",
      hackathonsTitle: "Hackathon Timeline",
      hackathonsLead:
        "A build trail across Monad, Sui, Frontier, and BTK AI. Every event leaves a project, a role, and a learning record.",
      cardsTitle: "Cards",
      cardsLead:
        "Event badges, passes, and schedule cards collected along the way, displayed like a hanging memory wall.",
      proofTitle: "Certificates",
      proofLead:
        "Certificates and participation documents are published directly as PDF/JPG files; each document can be opened from its card.",
      writingTitle: "Writing",
      writingLead:
        "Technical notes, hackathon logs, and project postmortems will live here. The space is ready for regular publishing.",
      contactTitle: "Contact",
      contactLead:
        "For internships, collaborations, hackathons, community events, or product ideas, a short message is enough."
    }
  }
} as const;
