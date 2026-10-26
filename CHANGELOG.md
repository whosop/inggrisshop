# Changelog - Website Personal Branding

## Version 2.1 - Certificates Section & Network Project (Oktober 2026)

### Fitur Baru
1. **Certificates Section** 🎓
   - Section baru khusus untuk menampilkan sertifikat
   - Layout card yang professional dan modern
   - Badge animation untuk visual menarik
   - Detail issuer, tanggal, dan achievement

2. **New Projects Added** 🌐
   - **Project 5**: Network Topology - Dynamic Routing BGP & OSPF
   - **Project 6**: Mencari Bukti Konfigurasi (Configuration Verification)
   - Both using Cisco Packet Tracer
   - Complete documentation links to Google Drive
   - Projects section sekarang berisi 6 projects

3. **Reorganisasi Content**
   - Cisco IT Essentials dipindahkan dari Projects ke Certificates
   - Paham AI Certificate dipindahkan dari Projects ke Certificates
   - Java Fundamentals Certificate ditambahkan
   - Network Topology BGP & OSPF ditambahkan ke Projects
   - Mencari Bukti Konfigurasi ditambahkan ke Projects
   - Projects section: 6 projects (4 creative + 2 technical networking)
   - Certificates section: 3 certificates

3. **Navigation Update**
   - Menu navigasi ditambahkan: "Certificates"
   - Smooth scroll ke section #certificates
   - Multi-language support (EN: Certificates, ID: Sertifikat)

### Design Features
- Certificate cards dengan image preview
- Issuer badge dengan icon
- Date dan achievement details
- Colorful tags untuk skills/topics
- Hover effects dan smooth animations
- Responsive grid layout

### File yang Diubah
- `index.html`: Menambahkan Certificates section, update navigation
- `style.css`: CSS lengkap untuk certificate cards
- `translations.js`: Menambahkan terjemahan untuk Certificates

---

## Version 2.0 - Single Page Website (Oktober 2026)

### Perubahan Utama
- ✅ **Mengubah dari multi-page menjadi single-page website**
  - Semua konten (Home, Skills, Projects, CV) sekarang dalam satu halaman
  - Navigasi menggunakan smooth scroll ke section yang dituju
  - Tidak perlu lagi pindah halaman, cukup scroll

### Fitur Baru
1. **Smooth Scroll Navigation**
   - Klik menu navigasi akan scroll smooth ke section
   - Active state otomatis berubah saat scroll
   - Navbar tetap di atas dengan offset yang tepat

2. **Active Navigation Indicator**
   - Menu navigasi otomatis highlight section yang sedang aktif
   - Berubah dinamis saat user scroll

3. **Perubahan Terminologi**
   - "Portfolio" → "Projects" di menu navigasi
   - Lebih sesuai dengan konten yang ditampilkan

### Perubahan File

#### index.html
- Menggabungkan semua konten dari skills.html, portfolio.html, dan cv-new.html
- Menambahkan ID pada setiap section (#home, #skills, #projects, #cv)
- Mengubah link navigasi dari href="file.html" menjadi href="#section"
- Menambahkan class `page-header-inline` untuk header section

#### style.css
- Menambahkan `scroll-padding-top: 80px` untuk offset navbar
- Menambahkan style `.page-header-inline` untuk header di tengah halaman
- Memperbaiki print styles untuk CV
- Menambahkan media query untuk hide sections saat print

#### script.js
- Menambahkan active state management berdasarkan scroll position
- Update smooth scroll untuk single page
- Menghapus logika active state berdasarkan file name

#### translations.js
- Mengubah "Portfolio" menjadi "Projects" di bahasa Inggris
- Mempertahankan "Portfolio" di bahasa Indonesia

### File yang Masih Dipertahankan
- `skills.html` - Backup file lama
- `portfolio.html` - Backup file lama  
- `cv-new.html` - Backup file lama
- `about.html` - File lama yang tidak digunakan

### Cara Menggunakan
1. Buka `index.html` di browser
2. Gunakan menu navigasi atau scroll manual
3. Klik "Download CV" untuk print/save CV

### Testing Checklist
- ✅ Smooth scroll ke semua section
- ✅ Active state berubah saat scroll
- ✅ Mobile menu berfungsi dengan baik
- ✅ Print CV hanya menampilkan section CV
- ✅ Language switcher tetap berfungsi
- ✅ Semua link eksternal (portfolio items) masih berfungsi

### Browser Compatibility
- Chrome/Edge: ✅ Fully supported
- Firefox: ✅ Fully supported
- Safari: ✅ Fully supported
- Mobile browsers: ✅ Responsive

---

## Version 1.0 - Multi-page Website
- Website awal dengan halaman terpisah
- Navigasi antar halaman menggunakan link file
