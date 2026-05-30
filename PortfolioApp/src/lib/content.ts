import type { Hackathon, Locale, Project, ProofItem, EventCard } from "@/types/content";

export const site = {
  name: "Hasan Kaşıkcı",
  domain: "https://hasankasikci.com.tr",
  email: "hasankasikci80@gmail.com",
  github: "https://github.com/hsankc",
  linkedin: "https://www.linkedin.com/in/hasankasikci0",
  instagramVenture: "https://www.instagram.com/ilion7.web/?hl=tr",
  profileImage: "/images/profile/hasan-kasikci.jpg"
};

export const stats = [
  { value: "14", label: { tr: "Proje", en: "Projects" } },
  { value: "7", label: { tr: "Hackathon", en: "Hackathons" } },
  { value: "13", label: { tr: "Sertifika", en: "Certificates" } },
  { value: "23", label: { tr: "Liderlik Kanıtı", en: "Leadership Proofs" } }
];

export const skills = [
  { category: { tr: "Diller", en: "Languages" }, items: ["TypeScript", "Solidity", "Move", "Rust", "Python", "C++"] },
  { category: { tr: "Frontend & UI", en: "Frontend & UI" }, items: ["Next.js", "React", "Tailwind CSS", "Astro"] },
  { category: { tr: "AI & ML", en: "AI & ML" }, items: ["OpenAI API", "Voice AI", "LLM Workflows", "Model Training"] },
  { category: { tr: "Web3 & DePIN", en: "Web3 & DePIN" }, items: ["Monad", "Sui", "Solana", "EVM Contracts"] },
  { category: { tr: "Sistem & Güvenlik", en: "System & Security" }, items: ["CCNA Networking", "Linux Admin", "Cyber Security"] },
  { category: { tr: "Havacılık & İHA", en: "Aviation & UAV" }, items: ["İHA-I Ticari Pilot", "Avionics", "Drone Operations"] }
];

const commonProblems = {
  tr:
    "Proje detayları ilk MVP için kısa tutuldu. Canlı linkler, repo bağlantıları ve bağlam güvenli şekilde yayında; fotoğraf ve derin teknik notlar daha sonra genişletilecek.",
  en:
    "Project details are intentionally concise for the first MVP. Live links, source links, and context are public; photos and deeper technical notes will be expanded later."
};

export const projects: Project[] = [
  {
    title: "NeuralAir",
    slug: "neuralair",
    category: "AI / Web3 / DePIN",
    status: ["Featured", "Live", "Awarded", "Hackathon Build"],
    featuredRank: 1,
    role: { tr: "Builder / geliştirici", en: "Builder / developer" },
    summary: {
      tr:
        "Monad Blitz İzmir’de 2.lik alan fikirden, SuperTeam x Colosseum Frontier için gelişmiş v2 sürümüne evrilen AI/Web3 projesi.",
      en:
        "An AI/Web3 project that evolved from a Monad Blitz Izmir 2nd-place build into an advanced v2 for SuperTeam x Colosseum Frontier."
    },
    problem: commonProblems,
    solution: {
      tr:
        "AI akışlarını Web3 bağlamıyla birleştiren, canlı yayına alınmış ve iterasyonla büyütülmüş bir ürün deneyimi.",
      en:
        "A live product experience combining AI workflows with Web3 context and improving through multiple hackathon iterations."
    },
    impact: {
      tr: "Monad Blitz İzmir 2.liği, Frontier katılım kanıtı ve canlı v2 yayını.",
      en: "Monad Blitz Izmir 2nd place, Frontier proof, and a live v2 deployment."
    },
    repoUrl: "https://github.com/hsankc/NeuralAir",
    liveUrl: "https://neuralair.vercel.app/",
    extraLinks: ["https://neural-air.vercel.app/"],
    versions: [
      {
        label: "v1",
        url: "https://neural-air.vercel.app/",
        note: {
          tr: "Monad Blitz İzmir'de 2.lik kazanan ilk sürüm.",
          en: "The first version that won 2nd place at Monad Blitz Izmir."
        }
      },
      {
        label: "v2",
        url: "https://neuralair.vercel.app/",
        note: {
          tr: "SuperTeam x Colosseum Frontier için geliştirilen yeni sürüm.",
          en: "The newer version built for SuperTeam x Colosseum Frontier."
        }
      }
    ],
    eventName: "Monad Blitz Izmir, SuperTeam x Colosseum Frontier",
    award: "Monad Blitz Izmir 2nd place",
    techStack: ["Next.js", "AI workflows", "Web3", "Monad", "DePIN"],
    accent: "blue",
    media: { src: "/images/proof/frontier-hsankc.png", alt: "Frontier Colosseum proof badge" }
  },
  {
    title: "News / Truva Haber",
    slug: "news-truva-haber",
    category: "Web / Product",
    status: ["Featured", "Live"],
    featuredRank: 2,
    role: { tr: "Builder / geliştirici", en: "Builder / developer" },
    summary: {
      tr: "Canlı yayındaki haber ürünü; içerik odaklı web deneyimi ve hızlı yayın akışı üzerine kurulu.",
      en: "A live news-style product built around content delivery and fast web publishing."
    },
    problem: commonProblems,
    solution: {
      tr: "Okunabilir, hızlı ve içerik merkezli bir haber arayüzü.",
      en: "A readable, fast, content-centered news interface."
    },
    impact: {
      tr: "Canlı ürün olarak yayınlandı ve portfolyoda üretim becerisi kanıtı olarak konumlandı.",
      en: "Shipped as a live product and positioned as proof of production web skills."
    },
    repoUrl: "https://github.com/hsankc/News",
    liveUrl: "https://truvahaber.vercel.app/",
    eventName: null,
    award: null,
    techStack: ["Web app", "Frontend", "Product UI"],
    accent: "teal"
  },
  {
    title: "ÇOMÜ Havacılık Website",
    slug: "comu-havacilik-site",
    category: "Club / Production Website",
    status: ["Featured", "Live", "Client Work"],
    featuredRank: 3,
    role: { tr: "Tasarımcı / geliştirici", en: "Designer / developer" },
    summary: {
      tr:
        "ÇOMÜ Havacılık Kulübü için tasarlanan ve yayınlanan üretim sitesi; teknik iş ile topluluk liderliğini birleştiriyor.",
      en:
        "A production website designed and shipped for COMU Aviation Club, connecting technical work with community leadership."
    },
    problem: commonProblems,
    solution: {
      tr: "Kulübün etkinlik, duyuru ve kurumsal görünürlüğünü taşıyan modern bir web varlığı.",
      en: "A modern web presence carrying the club's events, announcements, and public identity."
    },
    impact: {
      tr: "Topluluk yönetimi ve gerçek dünyada kullanılan web ürünü için güçlü kanıt.",
      en: "Strong proof of community ownership and real-world production website delivery."
    },
    repoUrl: null,
    liveUrl: "https://www.comuhavacilik.com.tr/",
    eventName: "ÇOMÜ Havacılık Kulübü",
    award: null,
    techStack: ["Web design", "Frontend", "Community systems"],
    accent: "amber"
  },
  {
    title: "QuakeGrid",
    slug: "quakegrid",
    category: "Web3 / Hackathon",
    status: ["Featured", "Live", "Hackathon Build"],
    featuredRank: 4,
    role: { tr: "Builder / geliştirici", en: "Builder / developer" },
    summary: {
      tr: "Monad Blitz Çanakkale hackathonu için geliştirilen Web3 projesi.",
      en: "A Web3 project built for Monad Blitz Canakkale."
    },
    problem: commonProblems,
    solution: {
      tr: "Hackathon süresinde konseptten canlı demoya taşınan Web3 ürün prototipi.",
      en: "A Web3 product prototype moved from concept to live demo within the hackathon window."
    },
    impact: {
      tr: "Monad ekosistemindeki üretim serisinin ilk güçlü halkalarından biri.",
      en: "One of the early public builds in the Monad-focused hackathon trail."
    },
    repoUrl: "https://github.com/hsankc/QuakeGrid",
    liveUrl: "https://quake-grid.vercel.app/",
    eventName: "Monad Blitz Canakkale",
    award: null,
    techStack: ["Web3", "Monad", "Frontend"],
    accent: "cyan"
  },
  {
    title: "AURA.AI",
    slug: "aura-ai",
    category: "AI / Hackathon",
    status: ["Hackathon Build", "Team Project"],
    featuredRank: null,
    role: { tr: "Takım üyesi / geliştirici", en: "Team member / developer" },
    summary: {
      tr: "BTK Akademi AI Hackathon için geliştirilen ekip projesi.",
      en: "A team project built for the BTK Akademi AI Hackathon."
    },
    problem: commonProblems,
    solution: {
      tr: "AI odaklı hackathon üretimi; takım çalışması ve hızlı prototipleme deneyimi.",
      en: "An AI-focused hackathon build showing teamwork and rapid prototyping."
    },
    impact: { tr: "BTK AI Hackathon katılım kanıtıyla destekleniyor.", en: "Backed by BTK AI Hackathon participation proof." },
    repoUrl: "https://github.com/hsankc/AURA.AI",
    liveUrl: null,
    eventName: "BTK Akademi AI Hackathon",
    award: null,
    techStack: ["AI", "Team build"],
    accent: "coral"
  },
  {
    title: "Call.ai",
    slug: "call-ai",
    category: "AI Product",
    status: ["Live", "MVP"],
    featuredRank: null,
    role: { tr: "Solo builder", en: "Solo builder" },
    summary: {
      tr: "Kişisel AI telefon asistanı ürünü; sesli AI ve otomasyon denemesi.",
      en: "A personal AI phone assistant product exploring voice AI and automation."
    },
    problem: commonProblems,
    solution: {
      tr: "Telefon görüşmesi ve AI ajan mantığını birleştiren MVP.",
      en: "An MVP connecting phone-call flows with AI agent behavior."
    },
    impact: { tr: "Canlı demo ve repo ile doğrulanabilir AI ürün denemesi.", en: "A verifiable AI product experiment with live demo and source." },
    repoUrl: "https://github.com/hsankc/Call.ai",
    liveUrl: "https://call-ai-nu.vercel.app/",
    eventName: null,
    award: null,
    techStack: ["Voice AI", "Automation", "Webhooks"],
    accent: "blue"
  },
  {
    title: "Hair Designer",
    slug: "hair-designer",
    category: "Client / Web",
    status: ["Live", "Client Work"],
    featuredRank: null,
    role: { tr: "Tasarımcı / geliştirici", en: "Designer / developer" },
    summary: {
      tr: "Müşteri odaklı web projesi; yerel işletme vitrini için yayına alınmış çalışma.",
      en: "A client-focused website shipped as a local business showcase."
    },
    problem: commonProblems,
    solution: {
      tr: "Modern, hızlı ve işletme kimliğine uygun frontend deneyimi.",
      en: "A modern and fast frontend experience aligned with a business identity."
    },
    impact: { tr: "Canlı müşteri işi ve ilion7.web çizgisi için kanıt.", en: "Proof of live client work and the ilion7.web direction." },
    repoUrl: "https://github.com/hsankc/Hair_Desinger",
    liveUrl: "https://cemdogan.vercel.app/",
    eventName: null,
    award: null,
    techStack: ["Web design", "Frontend"],
    accent: "amber"
  },
  {
    title: "TAK",
    slug: "tak",
    category: "Web Project",
    status: ["Live"],
    featuredRank: null,
    role: { tr: "Builder / geliştirici", en: "Builder / developer" },
    summary: {
      tr: "Canlı yayında olan web projesi; detayları sonraki içerik güncellemesinde genişletilecek.",
      en: "A live web project; details will be expanded in a later content update."
    },
    problem: commonProblems,
    solution: { tr: "Yayına alınmış web arayüzü.", en: "A shipped web interface." },
    impact: { tr: "Canlı link ile doğrulanabilir çalışma.", en: "A verifiable shipped build through its live link." },
    repoUrl: "https://github.com/hsankc/TAK",
    liveUrl: "https://tak-one.vercel.app/",
    eventName: null,
    award: null,
    techStack: ["Web app"],
    accent: "teal"
  },
  {
    title: "Vita-Sentinel",
    slug: "vita-sentinel",
    category: "Web3 / Hackathon",
    status: ["Hackathon Build"],
    featuredRank: null,
    role: { tr: "Builder / geliştirici", en: "Builder / developer" },
    summary: {
      tr: "Monad Blitz İstanbul hackathonu için geliştirilen projelerden biri.",
      en: "One of the projects built for Monad Blitz Istanbul."
    },
    problem: commonProblems,
    solution: { tr: "Monad ekosisteminde hızlı Web3 prototipleme.", en: "Rapid Web3 prototyping in the Monad ecosystem." },
    impact: { tr: "İstanbul ayağındaki üretim serisini tamamlıyor.", en: "Adds to the Istanbul leg of the build trail." },
    repoUrl: "https://github.com/hsankc/Vita-Sentinel",
    liveUrl: null,
    eventName: "Monad Blitz Istanbul",
    award: null,
    techStack: ["Monad", "Web3"],
    accent: "coral"
  },
  {
    title: "MonadCity",
    slug: "monadcity",
    category: "Web3 / Hackathon",
    status: ["Hackathon Build"],
    featuredRank: null,
    role: { tr: "Builder / geliştirici", en: "Builder / developer" },
    summary: {
      tr: "Monad Blitz İstanbul hackathonu için geliştirilen ikinci proje.",
      en: "A second project built for Monad Blitz Istanbul."
    },
    problem: commonProblems,
    solution: { tr: "Web3 fikirlerini hızlı ürün prototipine dönüştüren çalışma.", en: "A build turning Web3 ideas into a fast product prototype." },
    impact: { tr: "Vita-Sentinel ile birlikte İstanbul hackathon çizgisini güçlendiriyor.", en: "Strengthens the Istanbul hackathon track alongside Vita-Sentinel." },
    repoUrl: "https://github.com/hsankc/MonadCity",
    liveUrl: null,
    eventName: "Monad Blitz Istanbul",
    award: null,
    techStack: ["Monad", "Web3"],
    accent: "blue"
  },
  {
    title: "MONAI",
    slug: "monai",
    category: "Web3 / AI / Hackathon",
    status: ["Hackathon Build"],
    featuredRank: null,
    role: { tr: "Builder / geliştirici", en: "Builder / developer" },
    summary: {
      tr: "Monad Blitz Ankara hackathonu için geliştirilen AI/Web3 projesi.",
      en: "An AI/Web3 project built for Monad Blitz Ankara."
    },
    problem: commonProblems,
    solution: { tr: "Monad ve AI fikrini aynı prototipte birleştiren çalışma.", en: "A prototype combining Monad and AI concepts." },
    impact: { tr: "Monad Blitz serisinin Ankara ayağındaki üretim kanıtı.", en: "Proof of building in the Ankara leg of Monad Blitz." },
    repoUrl: "https://github.com/hsankc/MONAI",
    liveUrl: null,
    eventName: "Monad Blitz Ankara",
    award: null,
    techStack: ["Monad", "AI"],
    accent: "cyan"
  },
  {
    title: "Sharefy",
    slug: "sharefy",
    category: "Sui / Hackathon",
    status: ["Hackathon Build", "Team Project"],
    featuredRank: null,
    role: { tr: "Takım üyesi / geliştirici", en: "Team member / developer" },
    summary: {
      tr: "Sui Hackathon için geliştirilen ekip projesi.",
      en: "A team project built for a Sui Hackathon."
    },
    problem: commonProblems,
    solution: { tr: "Sui ve Move ekosistemiyle hızlı takım üretimi.", en: "A fast team build in the Sui and Move ecosystem." },
    impact: { tr: "Web3 yelpazesini Monad dışına taşıyan güçlü kanıt.", en: "Strong proof that the Web3 range extends beyond Monad." },
    repoUrl: "https://github.com/hsankc/Sharefy",
    liveUrl: null,
    eventName: "Sui Hackathon",
    award: null,
    techStack: ["Sui", "Move", "Web3"],
    accent: "teal"
  },
  {
    title: "Dental Clinic System",
    slug: "dental-clinic-system",
    category: "Academic / Desktop App",
    status: ["Academic"],
    featuredRank: null,
    role: { tr: "Geliştirici", en: "Developer" },
    summary: {
      tr: "Görsel Programlama final projesi olarak geliştirilen klinik yönetim sistemi.",
      en: "A clinic management system developed as a Visual Programming final project."
    },
    problem: commonProblems,
    solution: { tr: "Masaüstü uygulama mantığıyla hasta/klinik iş akışı denemesi.", en: "A desktop app experiment around patient and clinic workflow." },
    impact: { tr: "Akademik proje ve uygulamalı yazılım geliştirme kanıtı.", en: "Academic proof of applied software development." },
    repoUrl: "https://github.com/hsankc/Dental-Clinic-System",
    liveUrl: null,
    eventName: "Visual Programming Final",
    award: null,
    techStack: ["Desktop app", "Academic"],
    accent: "amber"
  },
  {
    title: "Teknofest Health AI Model",
    slug: "teknofest-health-ai",
    category: "AI / Competition",
    status: ["WIP", "Competition"],
    featuredRank: null,
    role: { tr: "Model eğitimi / geliştirici", en: "Model training / developer" },
    summary: {
      tr: "TEKNOFEST Sağlıkta Yapay Zeka kategorisinde devam eden model eğitimi projesi.",
      en: "An active model training project for the TEKNOFEST Health AI category."
    },
    problem: commonProblems,
    solution: { tr: "Detaylar güvenli hale geldiğinde içerik genişletilecek.", en: "Details will be expanded when they are safe to publish." },
    impact: { tr: "Devam eden yarışma çalışması olarak güncel üretim çizgisini gösteriyor.", en: "Shows the current build track as an active competition project." },
    repoUrl: null,
    liveUrl: null,
    eventName: "Teknofest Health AI",
    award: null,
    techStack: ["Machine learning", "Model training"],
    accent: "coral"
  }
];

export const featuredProjects = projects
  .filter((project) => project.featuredRank)
  .sort((a, b) => Number(a.featuredRank) - Number(b.featuredRank));

export const hackathons: Hackathon[] = [
  {
    title: "Sui Hackathon",
    date: "27 Aralık 2025",
    location: "Ankara",
    project: "Sharefy",
    projectSlug: "sharefy",
    summary: {
      tr: "Move/Sui ekosisteminde ekip projesiyle Web3 üretim alanı genişledi.",
      en: "The Web3 build range expanded through a team project in the Move/Sui ecosystem."
    },
    accent: "teal"
  },
  {
    title: "Monad Blitz Ankara",
    date: "31 Ocak 2026",
    location: "Ankara",
    project: "MONAI",
    projectSlug: "monai",
    summary: {
      tr: "AI ve Monad fikrini birleştiren hackathon projesi.",
      en: "A hackathon project combining AI and Monad ideas."
    },
    accent: "teal"
  },
  {
    title: "BTK Akademi AI Hackathon",
    date: "6 Şubat 2026",
    location: "Ankara",
    project: "AURA.AI",
    projectSlug: "aura-ai",
    summary: {
      tr: "AI odaklı ekip projesi ve resmi katılım kanıtı ile desteklenen hackathon deneyimi.",
      en: "An AI-focused team build backed by official participation proof."
    },
    accent: "coral"
  },
  {
    title: "Monad Blitz İstanbul",
    date: "28 Şubat 2026",
    location: "İstanbul",
    project: "Vita-Sentinel + MonadCity",
    summary: {
      tr: "Aynı hackathon çizgisinde iki farklı Web3 prototipi üretildi.",
      en: "Two separate Web3 prototypes were built within the same hackathon track."
    },
    accent: "coral"
  },
  {
    title: "Monad Blitz İzmir",
    date: "28 Nisan 2026",
    location: "İzmir",
    project: "NeuralAir v1",
    projectSlug: "neuralair",
    outcome: "2nd place",
    summary: {
      tr: "NeuralAir v1 ile 2.lik kazanıldı; proje daha sonra gelişmiş v2 sürümüne evrildi.",
      en: "NeuralAir v1 won 2nd place and later evolved into a more advanced v2."
    },
    accent: "blue"
  },
  {
    title: "Frontier / Colosseum / SuperTeam",
    date: "8-11 Mayıs 2026",
    location: "Online",
    project: "NeuralAir v2",
    projectSlug: "neuralair",
    summary: {
      tr: "NeuralAir’in gelişmiş v2 sürümü Frontier/Colosseum sürecine taşındı.",
      en: "The advanced v2 of NeuralAir was carried into the Frontier/Colosseum track."
    },
    accent: "amber"
  },
  {
    title: "Monad Blitz Çanakkale",
    date: "16 Mayıs 2026",
    location: "Çanakkale",
    project: "QuakeGrid",
    projectSlug: "quakegrid",
    summary: {
      tr: "Monad ekosistemindeki ilk görünür üretimlerden biri; QuakeGrid canlı demoya taşındı.",
      en: "One of the first visible Monad builds; QuakeGrid moved into a live demo."
    },
    accent: "cyan"
  }
];

const leadershipTitles = [
  ["COMU KentFest - Stant Günleri", "COMU KentFest - Stand Days"],
  ["Kulüp Tanıtım Günleri", "Club Promotion Days"],
  ["29 Ekim Temalı Drone Uçuşu", "29 October Themed Drone Flight"],
  ["Kulüp Tanışma Etkinliği", "Club Introduction Event"],
  ["Film Gecesi I", "Film Night I"],
  ["Çanakkale Havalimanı Gezisi", "Canakkale Airport Visit"],
  ["Coffee Talk I", "Coffee Talk I"],
  ["Bandırma 6. Ana Jet Üssü Gezisi", "Bandirma 6th Main Jet Base Visit"],
  ["Coffee Talk II", "Coffee Talk II"],
  ["Çanakkale Deniz Hava Üs Komutanlığı Gezisi", "Canakkale Naval Air Base Visit"],
  ["İHA-I Ticari Pilot Lisansı Eğitimi I", "UAV-I Commercial Pilot License Training I"],
  ["Trakya Kariyer Fuarı - Stant Günleri", "Trakya Career Fair - Stand Days"],
  ["Kulüp Tanıtım ve Stant Günleri", "Club Promotion and Stand Days"],
  ["İHA-I Ticari Pilot Lisansı Eğitimi II", "UAV-I Commercial Pilot License Training II"],
  ["Dünya Havacı Kadınlar Haftası - Film Gecesi II", "Women in Aviation Week - Film Night II"],
  ["Dünya Havacı Kadınlar Haftası - Pembe Kağıt Uçaklar", "Women in Aviation Week - Pink Paper Planes"],
  ["Havacılıkta Kariyer Semineri", "Aviation Career Seminar"],
  ["Jandarma Çelik Kanatlar Söyleşisi", "Jandarma Celik Kanatlar Talk"],
  ["SOLOTÜRK Söyleşi ve İmza Günü", "SOLOTURK Talk and Signing Day"],
  ["23 Nisan Çocuk Etkinlikleri", "April 23 Children Activities"],
  ["İHA-I Ticari Pilot Lisansı Eğitimi III", "UAV-I Commercial Pilot License Training III"],
  ["Havacılık Temalı Seramik Atölyesi", "Aviation-Themed Ceramic Workshop"],
  ["UNIDES İstikbal Göklerdedir - Yamaç Paraşütü Şenliği", "UNIDES Paragliding Festival"]
] as const;

export const leadershipProofs: ProofItem[] = leadershipTitles.map((title, index) => ({
  title: { tr: title[0], en: title[1] },
  date: index < 11 ? "2024" : "2025",
  category: "leadership",
  collection: "ÇOMÜ Havacılık Kulübü",
  thumb: `/images/proof/leadership/leadership-proof-${String(index + 1).padStart(2, "0")}.jpg`
}));

export const certificateGroups = [
  {
    title: { tr: "UAV & Aviation", en: "UAV & Aviation" },
    items: [
      "İHA Ticari Pilot",
      "İHA Bakım Onarım",
      "Radyo ve Haberleşme",
      "Havadan Görüntüleme Teknikleri",
      "UAV Bakım-Onarım Proje Çalıştayı"
    ]
  },
  {
    title: { tr: "Cisco / Network / Cybersecurity", en: "Cisco / Network / Cybersecurity" },
    items: ["CCNA Introduction to Networks", "Introduction to Cybersecurity", "Linux Unhatched"]
  },
  {
    title: { tr: "AI & Software", en: "AI & Software" },
    items: ["IEEE Tıpta Yapay Zeka", "BTK Akademi AI Hackathon"]
  },
  {
    title: { tr: "Programs & Events", en: "Programs & Events" },
    items: ["T3 KYS Katılım", "MEB Sertifika Bilgileri", "Mühendishane Gıda"]
  }
];

export const certificateProofs = [
  {
    title: { tr: "CCNA Introduction to Networks", en: "CCNA Introduction to Networks" },
    group: "Cisco / Network / Cybersecurity",
    date: "27 Mart 2026",
    document: "/images/certificates/01_CCNA_Introduction_to_Networks_Hasan_Kasikci_2026-03-27.png",
    type: "image"
  },
  {
    title: { tr: "Introduction to Cybersecurity", en: "Introduction to Cybersecurity" },
    group: "Cisco / Network / Cybersecurity",
    date: "2 Şubat 2026",
    document: "/images/certificates/02_Introduction_to_Cybersecurity_Hasan_Kasikci_2026-02-02.png",
    type: "image"
  },
  {
    title: { tr: "Linux Unhatched", en: "Linux Unhatched" },
    group: "Cisco / Network / Cybersecurity",
    date: "22 Şubat 2026",
    document: "/images/certificates/03_Linux_Unhatched_Hasan_Kasikci_2026-02-22.png",
    type: "image"
  },
  {
    title: { tr: "Havadan Görüntüleme Teknikleri Sertifikası", en: "Aerial Imaging Techniques Certificate" },
    group: "UAV & Aviation",
    date: "26-29 Aralık 2024",
    document: "/images/certificates/04_Havadan_Goruntuleme_Teknikleri_Sertifikasi_Hasan_Kasikci_2024-12-26_29_TC_Blurlu.png",
    type: "image"
  },
  {
    title: { tr: "İHA Bakım Onarım Sertifikası", en: "UAV Maintenance Certificate" },
    group: "UAV & Aviation",
    date: "26-29 Aralık 2024",
    document: "/images/certificates/05_IHA_Bakim_Onarim_Sertifikasi_Hasan_Kasikci_2024-12-26_29_TC_Blurlu.png",
    type: "image"
  },
  {
    title: { tr: "İHA Ticari Pilot Sertifikası", en: "UAV Commercial Pilot Certificate" },
    group: "UAV & Aviation",
    date: "26-29 Aralık 2024",
    document: "/images/certificates/06_IHA_Ticari_Pilot_Sertifikasi_Hasan_Kasikci_2024-12-26_29_TC_Blurlu.png",
    type: "image"
  },
  {
    title: { tr: "Radyo ve Haberleşme Eğitim Sertifikası", en: "Radio and Communication Training Certificate" },
    group: "UAV & Aviation",
    date: "26-29 Aralık 2024",
    document: "/images/certificates/07_Radyo_ve_Haberlesme_Egitim_Sertifikasi_Hasan_Kasikci_2024-12-26_29_TC_Blurlu.png",
    type: "image"
  },
  {
    title: { tr: "Tıpta Yapay Zeka Katılım Sertifikası", en: "AI in Medicine Participation Certificate" },
    group: "AI & Software",
    date: "2025",
    document: "/images/certificates/08_Tipta_Yapay_Zeka_Katilim_Sertifikasi_Hasan_Kasikci.png",
    type: "image"
  },
  {
    title: { tr: "TEKNOFEST 2024 Teknoloji Yarışmaları Katılım Belgesi", en: "TEKNOFEST 2024 Technology Competitions Participation Certificate" },
    group: "Programs & Events",
    date: "2024",
    document: "/images/certificates/09_TEKNOFEST_2024_Teknoloji_Yarismalari_Katilim_Belgesi.png",
    type: "image"
  },
  {
    title: { tr: "UAVET Proje Çalıştayı Teşekkür Belgesi", en: "UAVET Project Workshop Certificate of Appreciation" },
    group: "UAV & Aviation",
    date: "30 Mart 2026",
    document: "/images/certificates/10_UAVET_Project_Workshop_Certificate_of_Appreciation_Hasan_Kasikci.png",
    type: "image"
  }
];

export const eventCards: EventCard[] = [
  {
    "title": {
      "tr": "18 Mart Etkinlikleri Protokol Girişi",
      "en": "18 Mart Etkinlikleri Protokol Girişi"
    },
    "event": {
      "tr": "18 Mart Etkinlikleri Protokol Girişi",
      "en": "18 Mart Etkinlikleri Protokol Girişi"
    },
    "role": {
      "tr": "Katılımcı / Görevli",
      "en": "Participant / Staff"
    },
    "year": "2024-2026",
    "image": "/images/cards/cutouts/event-card-01.png",
    "sourceImage": "/images/cards/cutouts/event-card-01.png",
    "accent": "blue",
    "rotation": 2.2,
    "hanger": "double",
    "orientation": "portrait"
  },
  {
    "title": {
      "tr": "23 NİSAN ŞENLİKLERİ STAND GÖREVLİSİ",
      "en": "23 NİSAN ŞENLİKLERİ STAND GÖREVLİSİ"
    },
    "event": {
      "tr": "23 NİSAN ŞENLİKLERİ STAND GÖREVLİSİ",
      "en": "23 NİSAN ŞENLİKLERİ STAND GÖREVLİSİ"
    },
    "role": {
      "tr": "Katılımcı / Görevli",
      "en": "Participant / Staff"
    },
    "year": "2024-2026",
    "image": "/images/cards/cutouts/event-card-02.png",
    "sourceImage": "/images/cards/cutouts/event-card-02.png",
    "accent": "coral",
    "rotation": -1.5,
    "hanger": "single",
    "orientation": "portrait"
  },
  {
    "title": {
      "tr": "Ankara BTK ai hackathonu",
      "en": "Ankara BTK ai hackathonu"
    },
    "event": {
      "tr": "Ankara BTK ai hackathonu",
      "en": "Ankara BTK ai hackathonu"
    },
    "role": {
      "tr": "Katılımcı / Görevli",
      "en": "Participant / Staff"
    },
    "year": "2024-2026",
    "image": "/images/cards/cutouts/event-card-03.png",
    "sourceImage": "/images/cards/cutouts/event-card-03.png",
    "accent": "teal",
    "rotation": 3.1,
    "hanger": "double",
    "orientation": "portrait"
  },
  {
    "title": {
      "tr": "Ankara BTK Aİ Hackathonu",
      "en": "Ankara BTK Aİ Hackathonu"
    },
    "event": {
      "tr": "Ankara BTK Aİ Hackathonu",
      "en": "Ankara BTK Aİ Hackathonu"
    },
    "role": {
      "tr": "Katılımcı / Görevli",
      "en": "Participant / Staff"
    },
    "year": "2024-2026",
    "image": "/images/cards/cutouts/event-card-04.png",
    "sourceImage": "/images/cards/cutouts/event-card-04.png",
    "accent": "cyan",
    "rotation": -4,
    "hanger": "single",
    "orientation": "portrait"
  },
  {
    "title": {
      "tr": "ANKARA TUSAŞ GEZİSİ",
      "en": "ANKARA TUSAŞ GEZİSİ"
    },
    "event": {
      "tr": "ANKARA TUSAŞ GEZİSİ",
      "en": "ANKARA TUSAŞ GEZİSİ"
    },
    "role": {
      "tr": "Katılımcı / Görevli",
      "en": "Participant / Staff"
    },
    "year": "2024-2026",
    "image": "/images/cards/cutouts/event-card-05.png",
    "sourceImage": "/images/cards/cutouts/event-card-05.png",
    "accent": "amber",
    "rotation": -2.5,
    "hanger": "double",
    "orientation": "portrait"
  },
  {
    "title": {
      "tr": "BTK AKADEMİ ANKARA Aİ HACKATHON",
      "en": "BTK AKADEMİ ANKARA Aİ HACKATHON"
    },
    "event": {
      "tr": "BTK AKADEMİ ANKARA Aİ HACKATHON",
      "en": "BTK AKADEMİ ANKARA Aİ HACKATHON"
    },
    "role": {
      "tr": "Katılımcı / Görevli",
      "en": "Participant / Staff"
    },
    "year": "2024-2026",
    "image": "/images/cards/cutouts/event-card-06.png",
    "sourceImage": "/images/cards/cutouts/event-card-06.png",
    "accent": "blue",
    "rotation": 0.9,
    "hanger": "single",
    "orientation": "portrait"
  },
  {
    "title": {
      "tr": "GOOGLE DEVFEST 2023",
      "en": "GOOGLE DEVFEST 2023"
    },
    "event": {
      "tr": "GOOGLE DEVFEST 2023",
      "en": "GOOGLE DEVFEST 2023"
    },
    "role": {
      "tr": "Katılımcı / Görevli",
      "en": "Participant / Staff"
    },
    "year": "2024-2026",
    "image": "/images/cards/cutouts/event-card-07.png",
    "sourceImage": "/images/cards/cutouts/event-card-07.png",
    "accent": "coral",
    "rotation": 4.7,
    "hanger": "double",
    "orientation": "portrait"
  },
  {
    "title": {
      "tr": "GOOGLE DEVFEST 2024",
      "en": "GOOGLE DEVFEST 2024"
    },
    "event": {
      "tr": "GOOGLE DEVFEST 2024",
      "en": "GOOGLE DEVFEST 2024"
    },
    "role": {
      "tr": "Katılımcı / Görevli",
      "en": "Participant / Staff"
    },
    "year": "2024-2026",
    "image": "/images/cards/cutouts/event-card-08.png",
    "sourceImage": "/images/cards/cutouts/event-card-08.png",
    "accent": "teal",
    "rotation": 2.1,
    "hanger": "single",
    "orientation": "portrait"
  },
  {
    "title": {
      "tr": "JANDARMA ÇELİK KANATLAR SÖYLEŞİ KOORDİNATÖRÜ",
      "en": "JANDARMA ÇELİK KANATLAR SÖYLEŞİ KOORDİNATÖRÜ"
    },
    "event": {
      "tr": "JANDARMA ÇELİK KANATLAR SÖYLEŞİ KOORDİNATÖRÜ",
      "en": "JANDARMA ÇELİK KANATLAR SÖYLEŞİ KOORDİNATÖRÜ"
    },
    "role": {
      "tr": "Katılımcı / Görevli",
      "en": "Participant / Staff"
    },
    "year": "2024-2026",
    "image": "/images/cards/cutouts/event-card-09.png",
    "sourceImage": "/images/cards/cutouts/event-card-09.png",
    "accent": "cyan",
    "rotation": 3.8,
    "hanger": "double",
    "orientation": "portrait"
  },
  {
    "title": {
      "tr": "MONAD BLİTZ ANKARA",
      "en": "MONAD BLİTZ ANKARA"
    },
    "event": {
      "tr": "MONAD BLİTZ ANKARA",
      "en": "MONAD BLİTZ ANKARA"
    },
    "role": {
      "tr": "Katılımcı / Görevli",
      "en": "Participant / Staff"
    },
    "year": "2024-2026",
    "image": "/images/cards/cutouts/event-card-10.png",
    "sourceImage": "/images/cards/cutouts/event-card-10.png",
    "accent": "amber",
    "rotation": 0,
    "hanger": "single",
    "orientation": "portrait"
  },
  {
    "title": {
      "tr": "MONAD BLİTZ ÇANAKKALE",
      "en": "MONAD BLİTZ ÇANAKKALE"
    },
    "event": {
      "tr": "MONAD BLİTZ ÇANAKKALE",
      "en": "MONAD BLİTZ ÇANAKKALE"
    },
    "role": {
      "tr": "Katılımcı / Görevli",
      "en": "Participant / Staff"
    },
    "year": "2024-2026",
    "image": "/images/cards/cutouts/event-card-11.png",
    "sourceImage": "/images/cards/cutouts/event-card-11.png",
    "accent": "blue",
    "rotation": -4.6,
    "hanger": "double",
    "orientation": "portrait"
  },
  {
    "title": {
      "tr": "MONAD BLİTZ İSTANBUL",
      "en": "MONAD BLİTZ İSTANBUL"
    },
    "event": {
      "tr": "MONAD BLİTZ İSTANBUL",
      "en": "MONAD BLİTZ İSTANBUL"
    },
    "role": {
      "tr": "Katılımcı / Görevli",
      "en": "Participant / Staff"
    },
    "year": "2024-2026",
    "image": "/images/cards/cutouts/event-card-12.png",
    "sourceImage": "/images/cards/cutouts/event-card-12.png",
    "accent": "coral",
    "rotation": -0.9,
    "hanger": "single",
    "orientation": "portrait"
  },
  {
    "title": {
      "tr": "MONAD BLİTZ İZMİR",
      "en": "MONAD BLİTZ İZMİR"
    },
    "event": {
      "tr": "MONAD BLİTZ İZMİR",
      "en": "MONAD BLİTZ İZMİR"
    },
    "role": {
      "tr": "Katılımcı / Görevli",
      "en": "Participant / Staff"
    },
    "year": "2024-2026",
    "image": "/images/cards/cutouts/event-card-13.png",
    "sourceImage": "/images/cards/cutouts/event-card-13.png",
    "accent": "teal",
    "rotation": 1.2,
    "hanger": "double",
    "orientation": "portrait"
  },
  {
    "title": {
      "tr": "SOLOTÜRK SÖYLEŞİ KOORDİNATÖRÜ",
      "en": "SOLOTÜRK SÖYLEŞİ KOORDİNATÖRÜ"
    },
    "event": {
      "tr": "SOLOTÜRK SÖYLEŞİ KOORDİNATÖRÜ",
      "en": "SOLOTÜRK SÖYLEŞİ KOORDİNATÖRÜ"
    },
    "role": {
      "tr": "Katılımcı / Görevli",
      "en": "Participant / Staff"
    },
    "year": "2024-2026",
    "image": "/images/cards/cutouts/event-card-14.png",
    "sourceImage": "/images/cards/cutouts/event-card-14.png",
    "accent": "cyan",
    "rotation": 0.3,
    "hanger": "single",
    "orientation": "portrait"
  },
  {
    "title": {
      "tr": "TIPTA YAPAY ZEKA KONGRESİ",
      "en": "TIPTA YAPAY ZEKA KONGRESİ"
    },
    "event": {
      "tr": "TIPTA YAPAY ZEKA KONGRESİ",
      "en": "TIPTA YAPAY ZEKA KONGRESİ"
    },
    "role": {
      "tr": "Katılımcı / Görevli",
      "en": "Participant / Staff"
    },
    "year": "2024-2026",
    "image": "/images/cards/cutouts/event-card-15.png",
    "sourceImage": "/images/cards/cutouts/event-card-15.png",
    "accent": "amber",
    "rotation": 3.9,
    "hanger": "double",
    "orientation": "portrait"
  },
  {
    "title": {
      "tr": "UAVET PROJE ÇALIŞTAYI",
      "en": "UAVET PROJE ÇALIŞTAYI"
    },
    "event": {
      "tr": "UAVET PROJE ÇALIŞTAYI",
      "en": "UAVET PROJE ÇALIŞTAYI"
    },
    "role": {
      "tr": "Katılımcı / Görevli",
      "en": "Participant / Staff"
    },
    "year": "2024-2026",
    "image": "/images/cards/cutouts/event-card-16.png",
    "sourceImage": "/images/cards/cutouts/event-card-16.png",
    "accent": "blue",
    "rotation": -4.8,
    "hanger": "single",
    "orientation": "portrait"
  },
  {
    "title": {
      "tr": "ÇOMÜ HAVACILIK KULÜBÜ BAŞKANLIK",
      "en": "ÇOMÜ HAVACILIK KULÜBÜ BAŞKANLIK"
    },
    "event": {
      "tr": "ÇOMÜ HAVACILIK KULÜBÜ BAŞKANLIK",
      "en": "ÇOMÜ HAVACILIK KULÜBÜ BAŞKANLIK"
    },
    "role": {
      "tr": "Katılımcı / Görevli",
      "en": "Participant / Staff"
    },
    "year": "2024-2026",
    "image": "/images/cards/cutouts/event-card-17.png",
    "sourceImage": "/images/cards/cutouts/event-card-17.png",
    "accent": "coral",
    "rotation": -1.6,
    "hanger": "double",
    "orientation": "portrait"
  }
];

export function text(value: { tr: string; en: string }, locale: Locale) {
  return value[locale];
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

