/**
 * Curtain Factory - Luxury Curtain Manufacturing & Dealership
 * Vanilla JavaScript Implementation
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileDrawer();
  initScrollAnimations();
  initNavScrollSpy();
  initBackToTop();
  initEnquiryForm();
});

/* ==========================================================================
   1. STICKY HEADER & ELEVATION EFFECT
   ========================================================================== */
function initStickyHeader() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ==========================================================================
   2. MOBILE DRAWER NAVIGATION
   ========================================================================== */
function initMobileDrawer() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const closeBtn = document.getElementById('drawerCloseBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (!menuBtn || !drawer || !backdrop) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   3. SCROLL REVEAL (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  if (!fadeElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -36px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    fadeElements.forEach(el => el.classList.add('appear'));
  }
}

/* ==========================================================================
   4. ACTIVE NAVIGATION LINK SPY
   ========================================================================== */
function initNavScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  if (!sections.length || !navLinks.length) return;

  const onScroll = () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ==========================================================================
   5. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 360) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   6. COLLECTION MODAL DIALOG
   ========================================================================== */
let activeModalCategory = '';

window.openEnquiryModal = function(title, description) {
  activeModalCategory = title;
  const modal = document.getElementById('collectionModal');
  const modalTitle = document.getElementById('modalHeading');
  const modalDesc = document.getElementById('modalSpecText');

  if (modalTitle) modalTitle.textContent = title;
  if (modalDesc) modalDesc.textContent = description;

  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
};

window.closeEnquiryModal = function() {
  const modal = document.getElementById('collectionModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
};

window.proceedToContactFromModal = function() {
  closeEnquiryModal();

  const typeDropdown = document.getElementById('enquiryType');
  const messageInput = document.getElementById('messageText');

  if (typeDropdown && activeModalCategory) {
    for (let i = 0; i < typeDropdown.options.length; i++) {
      if (typeDropdown.options[i].value.toLowerCase().includes(activeModalCategory.toLowerCase().split(' ')[0])) {
        typeDropdown.selectedIndex = i;
        break;
      }
    }
  }

  if (messageInput && activeModalCategory) {
    messageInput.value = `I am interested in ${activeModalCategory}. Please share fabric swatch folders, bulk options, and pricing specifications.`;
  }

  const contactSec = document.getElementById('contact');
  if (contactSec) {
    contactSec.scrollIntoView({ behavior: 'smooth' });
  }

  setTimeout(() => {
    const nameInput = document.getElementById('fullName');
    if (nameInput) nameInput.focus();
  }, 700);
};

// Close modal when backdrop clicked
const colModal = document.getElementById('collectionModal');
if (colModal) {
  colModal.addEventListener('click', (e) => {
    if (e.target === colModal) {
      window.closeEnquiryModal();
    }
  });
}

/* ==========================================================================
   7. DEALERSHIP PRE-FILL HELPER
   ========================================================================== */
window.prefillDealershipForm = function() {
  const typeDropdown = document.getElementById('enquiryType');
  const messageInput = document.getElementById('messageText');

  if (typeDropdown) {
    for (let i = 0; i < typeDropdown.options.length; i++) {
      if (typeDropdown.options[i].value.includes('Dealership')) {
        typeDropdown.selectedIndex = i;
        break;
      }
    }
  }

  if (messageInput) {
    messageInput.value = `We are interested in exploring a dealership/distribution partnership for your curtain factory in the Dwarka–Najafgarh / Delhi NCR region. Please share catalog materials and wholesale terms.`;
  }

  const contactSec = document.getElementById('contact');
  if (contactSec) {
    contactSec.scrollIntoView({ behavior: 'smooth' });
  }

  setTimeout(() => {
    const nameInput = document.getElementById('fullName');
    if (nameInput) nameInput.focus();
  }, 700);
};

/* ==========================================================================
   8. DEALERSHIP ENQUIRY FORM VALIDATION & STATIC NOTICE
   ========================================================================== */
function initEnquiryForm() {
  const form = document.getElementById('dealershipEnquiryForm');
  const alertBox = document.getElementById('staticSubmissionAlert');
  const alertBody = document.getElementById('noticeSummaryText');
  const directLinks = document.getElementById('noticeDirectLinks');

  if (!form) return;

  const nameInput = document.getElementById('fullName');
  const phoneInput = document.getElementById('phoneNumber');
  const emailInput = document.getElementById('emailAddress');
  const areaInput = document.getElementById('areaLocation');
  const typeSelect = document.getElementById('enquiryType');
  const messageInput = document.getElementById('messageText');

  const nameError = document.getElementById('nameError');
  const phoneError = document.getElementById('phoneError');
  const emailError = document.getElementById('emailError');
  const areaError = document.getElementById('areaError');
  const messageError = document.getElementById('messageError');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/[\s\-()]/g, '');
    return /^(\+?91)?[6-9]\d{9}$/.test(cleaned) || cleaned.length >= 10;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Full Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameInput.classList.add('error');
      if (nameError) nameError.classList.add('visible');
      isValid = false;
    } else {
      nameInput.classList.remove('error');
      if (nameError) nameError.classList.remove('visible');
    }

    // Phone Number
    if (!phoneInput.value.trim() || !validatePhone(phoneInput.value.trim())) {
      phoneInput.classList.add('error');
      if (phoneError) phoneError.classList.add('visible');
      isValid = false;
    } else {
      phoneInput.classList.remove('error');
      if (phoneError) phoneError.classList.remove('visible');
    }

    // Email Address
    if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
      emailInput.classList.add('error');
      if (emailError) emailError.classList.add('visible');
      isValid = false;
    } else {
      emailInput.classList.remove('error');
      if (emailError) emailError.classList.remove('visible');
    }

    // Area / Location
    if (!areaInput.value.trim() || areaInput.value.trim().length < 2) {
      areaInput.classList.add('error');
      if (areaError) areaError.classList.add('visible');
      isValid = false;
    } else {
      areaInput.classList.remove('error');
      if (areaError) areaError.classList.remove('visible');
    }

    // Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 5) {
      messageInput.classList.add('error');
      if (messageError) messageError.classList.add('visible');
      isValid = false;
    } else {
      messageInput.classList.remove('error');
      if (messageError) messageError.classList.remove('visible');
    }

    if (!isValid) return;

    const submitBtn = document.getElementById('submitEnquiryBtn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Formatting Enquiry...</span>';
    }

    setTimeout(() => {
      const clientName = nameInput.value.trim();
      const clientPhone = phoneInput.value.trim();
      const clientEmail = emailInput.value.trim();
      const clientArea = areaInput.value.trim();
      const clientType = typeSelect ? typeSelect.value : 'Dealership Enquiry';
      const clientMessage = messageInput.value.trim();

      const encodedBody = encodeURIComponent(
        `Curtain Factory Enquiry\n\nName: ${clientName}\nPhone: ${clientPhone}\nEmail: ${clientEmail}\nArea/Location: ${clientArea}\nType: ${clientType}\nMessage:\n${clientMessage}`
      );

      const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${encodedBody}`;
      const mailtoUrl = `mailto:xyzcurtains@gmail.com?subject=${encodeURIComponent('Enquiry from ' + clientName + ' (' + clientArea + ')')}&body=${encodedBody}`;

      if (alertBox && alertBody && directLinks) {
        alertBody.innerHTML = `
          Thank you, <strong>${escapeHtml(clientName)}</strong> (${escapeHtml(clientArea)})!<br>
          Your details for <em>${escapeHtml(clientType)}</em> have been validated.
          <br><br>
          <em>Note: This is a static informational showcase without a backend database.</em><br>
          To deliver this enquiry directly to Curtain Factory, select an option below:
        `;

        directLinks.innerHTML = `
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-whatsapp">
            Send via WhatsApp
          </a>
          <a href="${mailtoUrl}" class="btn btn-sm btn-gold">
            Send via Email App
          </a>
          <a href="tel:+91XXXXXXXXXX" class="btn btn-sm btn-outline-dark">
            Direct Call Desk
          </a>
        `;

        alertBox.style.display = 'flex';
      }

      form.style.display = 'none';

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Submit Enquiry</span>';
      }
    }, 500);
  });
}

window.resetEnquiryForm = function() {
  const form = document.getElementById('dealershipEnquiryForm');
  const alertBox = document.getElementById('staticSubmissionAlert');
  if (form) {
    form.reset();
    form.style.display = 'flex';
  }
  if (alertBox) {
    alertBox.style.display = 'none';
  }
};

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}
