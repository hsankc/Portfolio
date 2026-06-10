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
      gallery: "Galeri",
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
        "ÇOMÜ'de Bilgisayar Mühendisliği 3. sınıf öğrencisi. Çanakkale Teknopark ön kuluçkasında motosikletler için akıllı gidon kontrolcüsü olan donanım girişimi InterKey'i geliştiriyor ve ilion7.web dijital stüdyosu ile modern çözümler üretiyor. Web3, yapay zeka ve modern web (Next.js) teknolojileriyle uçtan uca projeler inşa eden; aynı zamanda ÇOMÜ Havacılık Kulübü'ne başkanlık yapan tutkulu bir 'builder'.",
      proofLine:
        "Canlı ürünler, ödüllü hackathon projeleri, kulüp liderliği ve sertifikalarla desteklenen seçili işler.",
      featured: "Öne Çıkan İşler",
      hackathonStrip: "Hackathon Rotası",
      leadership: "Liderlik Kanıtları Koleksiyonu",
      skillsTitle: "Teknolojik Yetkinlikler",
      venturesTitle: "Girişimler & Oluşumlar",
      interkeyDesc: "Motosikletler için akıllı gidon kontrolcüsü geliştiren, Çanakkale Teknopark ön kuluçkasındaki donanım girişimi.",
      ilionDesc: "Modern web siteleri, dijital vitrinler ve hızlı ürün arayüzleri üreten kişisel dijital stüdyo."
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
      galleryTitle: "Galeri",
      galleryLead:
        "Hackathonlar, etkinlikler ve sahadan kalan görsel notlar. Fotoğraflar web için küçültülmüş kopyalarla hızlı yüklenecek şekilde yayınlanıyor.",
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
      gallery: "Gallery",
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
        "Third-year Computer Engineering student at ÇOMÜ. Building InterKey, a Çanakkale Teknopark pre-incubation hardware venture for smart motorcycle handlebar control, while shipping modern solutions through the ilion7.web digital studio. A passionate builder creating end-to-end projects with Web3, AI, and modern web technologies like Next.js, while also leading the ÇOMÜ Aviation Club.",
      proofLine:
        "Selected work backed by live products, award-winning hackathon builds, community leadership, and certificates.",
      featured: "Featured Work",
      hackathonStrip: "Hackathon Route",
      leadership: "Leadership Proof Collection",
      skillsTitle: "Tech Stack & Skills",
      venturesTitle: "Startups & Ventures",
      interkeyDesc: "A hardware venture in Çanakkale Teknopark pre-incubation building a smart motorcycle handlebar controller.",
      ilionDesc: "A personal digital studio shipping modern websites, digital showcases, and fast product interfaces."
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
      galleryTitle: "Gallery",
      galleryLead:
        "Visual notes from hackathons, events, and build days. The photos are published as web-sized copies so the page stays fast.",
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
