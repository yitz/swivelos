/* ============================================
   SWIVEL OFFICE SOLUTIONS — Premium Interactions
   Cinematic scroll reveals, smooth slider,
   validated forms, animated counters
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Mobile Navigation (Slide-out panel) ----
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');

  function openMobileMenu() {
    mobileMenu?.classList.add('open');
    mobileOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
    menuToggle?.setAttribute('aria-expanded', 'true');
    // Animate hamburger bars
    const bars = menuToggle?.querySelectorAll('.hamburger-bar');
    if (bars?.length === 3) {
      bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      bars[1].style.opacity = '0';
      bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    }
  }

  function closeMobileMenu() {
    mobileMenu?.classList.remove('open');
    mobileOverlay?.classList.remove('active');
    document.body.style.overflow = '';
    menuToggle?.setAttribute('aria-expanded', 'false');
    const bars = menuToggle?.querySelectorAll('.hamburger-bar');
    if (bars?.length === 3) {
      bars[0].style.transform = '';
      bars[1].style.opacity = '';
      bars[2].style.transform = '';
    }
  }

  menuToggle?.addEventListener('click', () => {
    mobileMenu?.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
  });

  mobileOverlay?.addEventListener('click', closeMobileMenu);

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu?.classList.contains('open')) closeMobileMenu();
  });

  // ---- Mobile Dropdown Toggles ----
  document.querySelectorAll('.mobile-dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.nextElementSibling;
      if (target) {
        const isHidden = target.classList.contains('hidden');
        target.classList.toggle('hidden');
        const arrow = btn.querySelector('.dropdown-arrow');
        if (arrow) arrow.style.transform = isHidden ? 'rotate(180deg)' : '';
      }
    });
  });

  // ---- Sticky Header ----
  const header = document.getElementById('main-header');
  let lastScroll = 0;

  if (header) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      header.classList.toggle('header-scrolled', y > 20);
      lastScroll = y;
    }, { passive: true });
  }

  // ---- Scroll Reveal Animations ----
  // Supports: .reveal, .reveal-left, .reveal-scale, .fade-up
  const revealSelectors = '.reveal, .reveal-left, .reveal-scale, .fade-up';
  const revealEls = document.querySelectorAll(revealSelectors);

  if (revealEls.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));
  }

  // ---- Animated Counters ----
  const statNumbers = document.querySelectorAll('[data-count]');

  if (statNumbers.length > 0) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => countObserver.observe(el));
  }

  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 2200;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo for premium feel
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(eased * target);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  // ---- Testimonials Slider ----
  const track = document.getElementById('testimonial-track');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');

  if (track && dots.length > 0) {
    let currentSlide = 0;
    let slidesPerView = getSlidesPerView();
    const totalCards = track.children.length;

    function getSlidesPerView() {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }

    function getMaxSlide() {
      return Math.max(0, totalCards - slidesPerView);
    }

    function goToSlide(index) {
      currentSlide = Math.max(0, Math.min(index, getMaxSlide()));
      const percentage = (currentSlide / totalCards) * 100;
      track.style.transform = `translateX(-${percentage}%)`;
      dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
    }

    prevBtn?.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn?.addEventListener('click', () => goToSlide(currentSlide + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => goToSlide(i)));

    window.addEventListener('resize', () => {
      slidesPerView = getSlidesPerView();
      goToSlide(Math.min(currentSlide, getMaxSlide()));
    });

    // Auto-advance
    let autoSlide = setInterval(() => {
      goToSlide(currentSlide >= getMaxSlide() ? 0 : currentSlide + 1);
    }, 5500);

    track.addEventListener('mouseenter', () => clearInterval(autoSlide));
    track.addEventListener('mouseleave', () => {
      autoSlide = setInterval(() => {
        goToSlide(currentSlide >= getMaxSlide() ? 0 : currentSlide + 1);
      }, 5500);
    });

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? goToSlide(currentSlide + 1) : goToSlide(currentSlide - 1);
      }
    }, { passive: true });
  }

  // ---- Contact Form Validation ----
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      // Clear previous errors
      contactForm.querySelectorAll('.form-input').forEach(input => {
        input.classList.remove('error');
      });

      // Required fields
      contactForm.querySelectorAll('[required]').forEach(input => {
        if (!input.value.trim()) {
          input.classList.add('error');
          valid = false;
        }
      });

      // Email validation
      const email = contactForm.querySelector('[type="email"]');
      if (email?.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('error');
        valid = false;
      }

      // Phone validation
      const phone = contactForm.querySelector('[name="phone"]');
      if (phone?.value && !/^[\d\s\-\(\)\+]{7,}$/.test(phone.value)) {
        phone.classList.add('error');
        valid = false;
      }

      if (valid) {
        const successMsg = document.getElementById('form-success');
        if (successMsg) {
          successMsg.classList.remove('hidden');
          contactForm.reset();
          setTimeout(() => successMsg.classList.add('hidden'), 6000);
        }
      }
    });
  }

  // ---- Tab System ----
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabGroup = btn.closest('.tab-group');
      if (!tabGroup) return;

      tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      tabGroup.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  // ---- Back to Top ----
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- Smooth Scroll for Anchor Links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        closeMobileMenu();
      }
    });
  });

});
