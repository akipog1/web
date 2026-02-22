/* ============================================================
   AB PAVING & LANDSCAPING — MAIN JAVASCRIPT
   main.js — shared across all pages
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ── MOBILE MENU ──────────────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ── SMOOTH SCROLL ────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ── ACTIVE NAV HIGHLIGHT (scroll spy) ────────────────
  var sections  = document.querySelectorAll('section[id]');
  var navLinks  = document.querySelectorAll('.nav-links a, .mobile-menu a');

  if (sections.length) {
    window.addEventListener('scroll', function () {
      var current = '';
      sections.forEach(function (s) {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      navLinks.forEach(function (a) {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current) a.classList.add('active');
      });
    });
  }

  // ── QUOTE FORM SUBMIT ─────────────────────────────────
  var formBtn = document.querySelector('.form-submit');
  if (formBtn) {
    formBtn.addEventListener('click', function (e) {
      e.preventDefault();
      // Basic validation
      var inputs = document.querySelectorAll('.qf-form input[type="text"], .qf-form input[type="tel"], .qf-form input[type="email"]');
      var valid  = true;
      inputs.forEach(function (inp) {
        if (!inp.value.trim()) {
          inp.style.borderColor = '#e53e3e';
          valid = false;
        } else {
          inp.style.borderColor = '';
        }
      });
      if (!valid) return;
      formBtn.textContent = '✓ Request Sent! We\'ll be in touch within 24 hours.';
      formBtn.classList.add('sent');
      formBtn.disabled = true;
    });
  }

  // ── GALLERY LIGHTBOX (gallery.html) ──────────────────
  var lightbox = document.getElementById('lightbox');
  var lbImg    = document.getElementById('lb-img');

  if (lightbox && lbImg) {
    var allGalImgs = [];

    // Collect all masonry images in order
    document.querySelectorAll('.m-item img').forEach(function (img) {
      allGalImgs.push(img.src);
    });

    var currentIdx = 0;

    // Open on item click
    document.querySelectorAll('.m-item').forEach(function (item, i) {
      item.addEventListener('click', function () {
        currentIdx = i;
        lbImg.src  = allGalImgs[i];
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    // Close
    function closeLb () {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLb();
    });
    document.getElementById('lb-close').addEventListener('click', closeLb);

    // Prev / Next
    function changeLb (dir) {
      currentIdx = (currentIdx + dir + allGalImgs.length) % allGalImgs.length;
      lbImg.src  = allGalImgs[currentIdx];
    }
    document.getElementById('lb-prev').addEventListener('click', function () { changeLb(-1); });
    document.getElementById('lb-next').addEventListener('click', function () { changeLb(1);  });

    // Keyboard
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape')     closeLb();
      if (e.key === 'ArrowLeft')  changeLb(-1);
      if (e.key === 'ArrowRight') changeLb(1);
    });

    // Gallery filter buttons
    document.querySelectorAll('.fbtn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.fbtn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var cat = btn.dataset.cat;
        document.querySelectorAll('.gal-section').forEach(function (s) {
          s.style.display = (cat === 'all' || s.dataset.cat === cat) ? 'block' : 'none';
        });
        // Re-collect images after filter
        allGalImgs = [];
        document.querySelectorAll('.m-item:not([style*="none"]) img, .gal-section:not([style*="none"]) .m-item img').forEach(function (img) {
          allGalImgs.push(img.src);
        });
      });
    });
  }

  // ── SCROLL REVEAL ─────────────────────────────────────
  // Lightweight fade-in on scroll (no library needed)
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  }

});
