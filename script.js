// ========================================
// Shofiyatul Nur Ghilbah - Personal Website
// JavaScript Functionality
// ========================================

// ========== NAVBAR FUNCTIONALITY ==========
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking a link
  const navItems = navLinks.querySelectorAll('a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// ========== SKILL BARS ANIMATION ==========
const animateSkillBars = () => {
  const skillFills = document.querySelectorAll('.skill-fill');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const width = fill.getAttribute('data-width');
        fill.style.setProperty('--width', width + '%');
        fill.classList.add('animate');
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.5 });

  skillFills.forEach(fill => observer.observe(fill));
};

// ========== SKILL CIRCLES ANIMATION ==========
const animateSkillCircles = () => {
  const skillCircles = document.querySelectorAll('.skill-circle .progress');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const circle = entry.target;
        const percent = circle.getAttribute('data-percent');
        circle.style.setProperty('--percent', percent);
        circle.classList.add('animate');
        observer.unobserve(circle);
      }
    });
  }, { threshold: 0.5 });

  skillCircles.forEach(circle => observer.observe(circle));
};

// ========== CV SKILL BARS ANIMATION ==========
const animateCVSkillBars = () => {
  const cvSkillFills = document.querySelectorAll('.cv-skill-fill');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const width = fill.getAttribute('data-width');
        fill.style.setProperty('--width', width);
        fill.classList.add('animate');
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.5 });

  cvSkillFills.forEach(fill => observer.observe(fill));
};

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update active state
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    }
  });
});

// ========== UPDATE ACTIVE NAV ON SCROLL ==========
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= (sectionTop - 100)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ========== FADE IN ANIMATION ON SCROLL ==========
const fadeInElements = () => {
  const elements = document.querySelectorAll('.card-item, .project-card, .timeline-item, .hobi-item, .skills-category, .skill-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
  });
};

// ========== INITIALIZE ALL ANIMATIONS ==========
const initAnimations = () => {
  animateSkillBars();
  animateSkillCircles();
  animateCVSkillBars();
  fadeInElements();
};

// ========== PAGE LOAD ==========
window.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  
  // Set first nav link as active initially
  const firstNavLink = document.querySelector('.nav-links a[href^="#"]');
  if (firstNavLink) {
    firstNavLink.classList.add('active');
  }
});

// ========== SCROLL TO TOP BUTTON (Optional Enhancement) ==========
const createScrollToTop = () => {
  const scrollBtn = document.createElement('button');
  scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  scrollBtn.className = 'scroll-to-top';
  scrollBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--pastel-pink), var(--pastel-purple));
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 5px 20px rgba(244, 167, 185, 0.4);
    font-size: 1.2rem;
  `;
  
  document.body.appendChild(scrollBtn);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollBtn.style.opacity = '1';
      scrollBtn.style.visibility = 'visible';
    } else {
      scrollBtn.style.opacity = '0';
      scrollBtn.style.visibility = 'hidden';
    }
  });
  
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  scrollBtn.addEventListener('mouseenter', () => {
    scrollBtn.style.transform = 'translateY(-5px)';
  });
  
  scrollBtn.addEventListener('mouseleave', () => {
    scrollBtn.style.transform = 'translateY(0)';
  });
};

// Initialize scroll to top button
createScrollToTop();

// ========== TYPING EFFECT FOR TAGLINE (Optional Enhancement) ==========
const typingEffect = (element, text, speed = 100) => {
  if (!element) return;
  
  let i = 0;
  element.textContent = '';
  
  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };
  
  type();
};

// Apply typing effect to hero tagline on homepage
const heroTagline = document.querySelector('.hero-tagline');
if (heroTagline && window.location.pathname.includes('index.html') || window.location.pathname === '/') {
  const originalText = heroTagline.textContent;
  setTimeout(() => {
    typingEffect(heroTagline, originalText, 80);
  }, 500);
}

// ========== CONSOLE MESSAGE ==========
console.log('%c👋 Hello! Welcome to my website!', 'color: #1e3a8a; font-size: 20px; font-weight: bold;');
console.log('%c✨ Made with love by Shofiyatul Nur Ghilbah', 'color: #0ea5e9; font-size: 14px;');
console.log('%c🚀 just me, improving every day.', 'color: #f59e0b; font-size: 14px; font-style: italic;');

// ========== LANGUAGE SWITCHER ==========
const langBtn = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');

if (langBtn && langDropdown) {
  langBtn.addEventListener('click', () => {
    langDropdown.classList.toggle('active');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
      langDropdown.classList.remove('active');
    }
  });
}

// ========== PORTFOLIO SLIDER ==========
function changeSlide(button, direction) {
  const slider = button.closest('.portfolio-card-slider');
  const images = slider.querySelectorAll('.slider-img');
  const dots = slider.querySelectorAll('.dot');
  let currentIndex = 0;
  
  // Find current active image
  images.forEach((img, index) => {
    if (img.classList.contains('active')) {
      currentIndex = index;
    }
  });
  
  // Remove active class
  images[currentIndex].classList.remove('active');
  dots[currentIndex].classList.remove('active');
  
  // Calculate new index
  currentIndex += direction;
  if (currentIndex >= images.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = images.length - 1;
  
  // Add active class to new image
  images[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

function currentSlide(dot, index) {
  const slider = dot.closest('.portfolio-card-slider');
  const images = slider.querySelectorAll('.slider-img');
  const dots = slider.querySelectorAll('.dot');
  
  // Remove all active classes
  images.forEach(img => img.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  
  // Add active class to selected
  images[index].classList.add('active');
  dots[index].classList.add('active');
}
