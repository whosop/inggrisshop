// ========================================
// Multi-language Translation System
// ========================================

const translations = {
  en: {
    // Navbar
    nav_home: "Home",
    nav_skills: "Skills",
    nav_portfolio: "Projects",
    nav_certificates: "Certificates",
    nav_cv: "CV",
    
    // Homepage
    hero_greeting: "Hello, I'm",
    hero_tagline: "Striving for perfection through continuous improvement",
    hero_desc: "I'm on a journey to become the best version of myself, learning, trying new things, and growing every day.",
    btn_view_cv: "View CV",
    btn_portfolio: "Projects",
    
    // Quick Cards
    card_education_title: "Education",
    card_education_desc: "SMKN 7 Semarang<br/>IT & Network Systems",
    card_interests_title: "Interests",
    card_interests_desc: "Digital Creative<br/>Content Editing",
    card_hobbies_title: "Hobbies",
    card_hobbies_desc: "Watching Movies, Listening to Music<br/>& Baking",
    
    // Skills Page
    skills_title: "Skills",
    skills_subtitle: "Skills I continue to develop",
    skills_intro: "Here are the skills I have and continue to improve every day. Each skill is part of my learning journey.",
    
    // Skills Sections
    hard_skills_title: "Hard Skills",
    hard_skills_subtitle: "Technical competencies and tools",
    soft_skills_title: "Soft Skills",
    soft_skills_subtitle: "Personal and interpersonal competencies",
    
    // Hard Skills Categories
    category_web: "Web Development",
    category_networking: "Networking & System",
    category_tools: "Tools & Software",
    
    // Skills Items
    skill_html: "HTML",
    skill_css: "CSS",
    skill_js: "JavaScript",
    skill_cisco: "Cisco Packet Tracer",
    skill_debian: "Debian",
    skill_design: "Design & Editing",
    skill_design_desc: "Canva, Photo Editing",
    skill_office: "Microsoft Office",
    skill_office_desc: "Word, Excel, PowerPoint",
    
    // Skill Levels
    level_beginner: "Beginner",
    level_intermediate: "Intermediate",
    level_advanced: "Advanced",
    
    // Soft Skills
    soft_communication: "Communication",
    soft_communication_desc: "Able to convey ideas clearly and listen actively to build effective collaboration.",
    soft_leadership: "Leadership",
    soft_leadership_desc: "Experience leading teams and guiding members to achieve common goals.",
    soft_time: "Time Management",
    soft_time_desc: "Skilled at prioritizing tasks and managing time efficiently to meet deadlines.",
    soft_problem: "Problem Solving",
    soft_problem_desc: "Able to analyze situations and find creative solutions to challenges.",
    soft_teamwork: "Teamwork",
    soft_teamwork_desc: "Work well with others and contribute positively to team dynamics.",
    
    // Portfolio Page
    portfolio_title: "Projects",
    portfolio_subtitle: "Projects and works I've created",
    
    // Certificates Page
    certificates_title: "Certificates",
    certificates_subtitle: "Professional certifications and achievements",
    
    // Portfolio Items
    project1_title: "Mug Design",
    project1_desc: "Mug design concept inspired by favorite artist, packed with soft, cute, and aesthetic style.",
    project2_title: "Group Website",
    project2_desc: "Website for tracking game progress and sharing reviews with modern and interactive display.",
    project3_title: "Microsite Shop",
    project3_desc: "Simple digital store based on microsite using S.id platform that's practical and easy to use.",
    project4_title: "Digital Poster Collection",
    project4_desc: "Poster design collection with Adobe Illustrator, various themes and attractive visual concepts.",
    project5_title: "Network Topology - Dynamic Routing BGP & OSPF",
    project5_desc: "Design and implementation of network topology using dynamic routing protocols BGP (Border Gateway Protocol) and OSPF (Open Shortest Path First) in Cisco Packet Tracer.",
    project6_title: "Mencari Bukti Konfigurasi",
    project6_desc: "Network troubleshooting and configuration verification project using Cisco Packet Tracer. Practice identifying and documenting network configurations including routing, switching, and connectivity settings.",
    project5_title: "Cisco IT Essentials",
    project5_desc: "Cisco IT Essentials certificate demonstrating fundamental understanding of computer hardware, operating systems, and troubleshooting.",
    project6_title: "Paham AI - AI Literacy Certification",
    project6_desc: "AI Literacy competency certificate from Senopati Academy national program in collaboration with Indonesian Police (Polri) and Ministry of Education, achieved perfect score of 100/100.",
    
    // Portfolio Links
    link_view_website: "View Website",
    link_visit_shop: "Visit Shop",
    link_view_collection: "View Collection",
    link_view_certificate: "View Certificate",
    
    // CV Page
    cv_title: "Curriculum Vitae",
    cv_subtitle: "My complete profile",
    cv_download: "Download CV",
    
    cv_about_title: "ABOUT ME",
    cv_about_text: "Highly dedicated IT student with strong background in IT systems and leadership. Experienced in web journal design and Cisco/Oracle network configuration. Proven leadership and social responsibility through Student Council involvement.",
    
    cv_education_title: "EDUCATION",
    cv_internship_title: "INTERNSHIP/ORGANIZATIONAL EXPERIENCE",
    cv_project_title: "PROJECT EXPERIENCE",
    cv_additional_title: "ADDITIONAL INFORMATION",
    
    cv_skills_tech_title: "Technical & Non-Technical Skills:",
    cv_skills_tech: "Word, Excel, Web Development, HTML/CSS, 3D Storyboarding (Alice 3D), Cisco Packet Tracer, Database Fundamentals, Oracle SQL.",
    cv_skills_nontech: "Leadership, Logical Thinking, Creativity, Event Management, Communication, Problem Solving.",
    
    cv_cert_title: "Certification:",
    cv_cert1: "IT Essentials, Cisco Networking Academy & SMK Negeri 7 Semarang — February 4, 2025",
    cv_cert2: "Java Fundamentals, Oracle Academy & SMK Negeri 7 Semarang — August 26, 2026",
    cv_cert3: "Paham AI - Literasi Kecerdasan Artifisial, Senopati Academy, Polri & Kemendikdasmen — August 19, 2026",
    
    // Footer
    footer_copyright: "© 2026 Shofiyatul Nur Ghilbah",
  },
  
  id: {
    // Navbar
    nav_home: "Beranda",
    nav_skills: "Keahlian",
    nav_portfolio: "Portfolio",
    nav_certificates: "Sertifikat",
    nav_cv: "CV",
    
    // Homepage
    hero_greeting: "Halo, Saya",
    hero_tagline: "Berusaha mencapai kesempurnaan melalui perbaikan berkelanjutan",
    hero_desc: "Saya sedang dalam perjalanan menjadi versi terbaik diri sendiri, belajar, mencoba hal baru, dan berkembang setiap harinya.",
    btn_view_cv: "Lihat CV",
    btn_portfolio: "Portfolio",
    
    // Quick Cards
    card_education_title: "Pendidikan",
    card_education_desc: "SMKN 7 Semarang<br/>Sistem Informasi & Jaringan",
    card_interests_title: "Minat",
    card_interests_desc: "Kreatif Digital<br/>Editing Konten",
    card_hobbies_title: "Hobi",
    card_hobbies_desc: "Menonton Film, Mendengarkan Musik<br/>& Baking",
    
    // Skills Page
    skills_title: "Keahlian",
    skills_subtitle: "Kemampuan yang terus saya kembangkan",
    skills_intro: "Berikut adalah keahlian yang saya miliki dan terus saya tingkatkan setiap harinya. Setiap skill merupakan bagian dari perjalanan belajar saya.",
    
    // Skills Sections
    hard_skills_title: "Hard Skills",
    hard_skills_subtitle: "Kompetensi teknis dan tools",
    soft_skills_title: "Soft Skills",
    soft_skills_subtitle: "Kompetensi personal dan interpersonal",
    
    // Hard Skills Categories
    category_web: "Pengembangan Web",
    category_networking: "Jaringan & Sistem",
    category_tools: "Tools & Software",
    
    // Skills Items
    skill_html: "HTML",
    skill_css: "CSS",
    skill_js: "JavaScript",
    skill_cisco: "Cisco Packet Tracer",
    skill_debian: "Debian",
    skill_design: "Desain & Editing",
    skill_design_desc: "Canva, Photo Editing",
    skill_office: "Microsoft Office",
    skill_office_desc: "Word, Excel, PowerPoint",
    
    // Skill Levels
    level_beginner: "Pemula",
    level_intermediate: "Menengah",
    level_advanced: "Mahir",
    
    // Soft Skills
    soft_communication: "Komunikasi",
    soft_communication_desc: "Mampu menyampaikan ide dengan jelas dan mendengarkan secara aktif untuk membangun kolaborasi yang efektif.",
    soft_leadership: "Kepemimpinan",
    soft_leadership_desc: "Pengalaman memimpin tim dan membimbing anggota untuk mencapai tujuan bersama.",
    soft_time: "Manajemen Waktu",
    soft_time_desc: "Terampil dalam memprioritaskan tugas dan mengelola waktu secara efisien untuk memenuhi deadline.",
    soft_problem: "Pemecahan Masalah",
    soft_problem_desc: "Mampu menganalisis situasi dan menemukan solusi kreatif untuk tantangan.",
    soft_teamwork: "Kerja Tim",
    soft_teamwork_desc: "Bekerja dengan baik bersama orang lain dan berkontribusi positif dalam dinamika tim.",
    
    // Portfolio Page
    portfolio_title: "Portfolio",
    portfolio_subtitle: "Karya dan proyek yang telah saya buat",
    
    // Certificates Page
    certificates_title: "Sertifikat",
    certificates_subtitle: "Sertifikasi profesional dan pencapaian",
    
    // Portfolio Items
    project1_title: "Desain Mug",
    project1_desc: "Desain mug dengan konsep terinspirasi dari artis favorit, dikemas dengan gaya soft, lucu, dan aesthetic.",
    project2_title: "Website Kelompok",
    project2_desc: "Website untuk mencatat progres game dan berbagi review dengan tampilan modern dan interaktif.",
    project3_title: "Microsite Shop",
    project3_desc: "Toko digital sederhana berbasis microsite menggunakan platform S.id yang praktis dan mudah digunakan.",
    project4_title: "Koleksi Poster Digital",
    project4_desc: "Kumpulan desain poster dengan Adobe Illustrator, berbagai tema dan konsep visual yang menarik.",
    project5_title: "Topologi Jaringan - Routing Dinamis BGP & OSPF",
    project5_desc: "Perancangan dan implementasi topologi jaringan menggunakan protokol routing dinamis BGP (Border Gateway Protocol) dan OSPF (Open Shortest Path First) di Cisco Packet Tracer.",
    project6_title: "Mencari Bukti Konfigurasi",
    project6_desc: "Proyek troubleshooting dan verifikasi konfigurasi jaringan menggunakan Cisco Packet Tracer. Praktik mengidentifikasi dan mendokumentasikan konfigurasi jaringan termasuk routing, switching, dan pengaturan konektivitas.",
    project5_title: "Cisco IT Essentials",
    project5_desc: "Sertifikat Cisco IT Essentials yang menunjukkan pemahaman dasar tentang hardware komputer, sistem operasi, dan troubleshooting.",
    project6_title: "Paham AI - Sertifikasi Literasi AI",
    project6_desc: "Sertifikat kompetensi AI Literacy dari program nasional Senopati Academy bersama Polri dan Kemendikdasmen dengan nilai sempurna 100/100.",
    
    // Portfolio Links
    link_view_website: "Lihat Website",
    link_visit_shop: "Kunjungi Toko",
    link_view_collection: "Lihat Koleksi",
    link_view_certificate: "Lihat Sertifikat",
    
    // CV Page
    cv_title: "Curriculum Vitae",
    cv_subtitle: "Profil lengkap saya",
    cv_download: "Unduh CV",
    
    cv_about_title: "TENTANG SAYA",
    cv_about_text: "Mahasiswa IT yang berdedikasi tinggi dengan latar belakang kuat di sistem IT dan kepemimpinan. Berpengalaman dalam desain web journal dan konfigurasi jaringan Cisco/Oracle. Kepemimpinan dan tanggung jawab sosial terbukti melalui keterlibatan di Dewan Siswa.",
    
    cv_education_title: "PENDIDIKAN",
    cv_internship_title: "MAGANG/PENGALAMAN ORGANISASI",
    cv_project_title: "PENGALAMAN PROYEK",
    cv_additional_title: "INFORMASI TAMBAHAN",
    
    cv_skills_tech_title: "Kemampuan Teknis & Non-Teknis:",
    cv_skills_tech: "Word, Excel, Pengembangan Web, HTML/CSS, Storyboarding 3D (Alice 3D), Cisco Packet Tracer, Dasar Database, Oracle SQL.",
    cv_skills_nontech: "Kepemimpinan, Berpikir Logis, Kreativitas, Manajemen Acara, Komunikasi, Pemecahan Masalah.",
    
    cv_cert_title: "Sertifikasi:",
    cv_cert1: "IT Essentials, Cisco Networking Academy & SMK Negeri 7 Semarang — 4 Februari 2025",
    cv_cert2: "Java Fundamentals, Oracle Academy & SMK Negeri 7 Semarang — 26 Agustus 2026",
    cv_cert3: "Paham AI - Literasi Kecerdasan Artifisial, Senopati Academy, Polri & Kemendikdasmen — 19 Agustus 2026",
    
    // Footer
    footer_copyright: "© 2026 Shofiyatul Nur Ghilbah",
  }
};

// Get current language from localStorage or default to 'en'
let currentLang = localStorage.getItem('language') || 'en';

// Function to change language
function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  
  // Update button text
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.innerHTML = `<i class="fa-solid fa-globe"></i> ${lang.toUpperCase()}`;
  }
  
  // Update all translatable elements
  updatePageContent();
  
  // Close dropdown
  const dropdown = document.getElementById('lang-dropdown');
  if (dropdown) {
    dropdown.classList.remove('active');
  }
}

// Function to update page content
function updatePageContent() {
  const t = translations[currentLang];
  
  // Update all elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (t[key]) {
      element.innerHTML = t[key];
    }
  });
  
  // Update placeholders
  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (t[key]) {
      element.placeholder = t[key];
    }
  });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  // Set initial language button
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.innerHTML = `<i class="fa-solid fa-globe"></i> ${currentLang.toUpperCase()}`;
  }
  
  // Apply translations
  updatePageContent();
});
