/**
 * Shiv Sangam Pune College of Pharmacy
 * Vivekanand Yuvak Mandal (Latur / Pune) - Reg. No: MAHA/10600/Latur
 * Master Application Script: Bilingual Switcher, Eligibility Calculator,
 * Admission Form & Slip Generator, Lightbox, Prospectus Modal & Admin Portal
 */

// Bilingual Dictionaries
const translations = {
  mr: {
    trust_name: "विवेकानंद युवक मंडळ संचलित",
    trust_reg: "नोंदणी क्र.: MAHA/10600/Latur",
    trust_office: "मुख्यालय: शिवाजी रोड, गंज गोलाई, लातूर - ४१३५१२",
    nav_home: "मुख्यपृष्ठ",
    nav_about: "संस्थेविषयी",
    nav_programs: "अभ्यासक्रम",
    nav_facilities: "प्रयोगशाळा व लॅब",
    nav_admissions: "प्रवेश २०२६-२७",
    nav_contact: "संपर्क",
    btn_apply: "प्रवेश अर्ज करा",
    hero_badge: "शैक्षणिक वर्ष २०२६-२०२७ करिता प्रवेश प्रक्रिया सुरू",
    hero_desc: "विवेकानंद युवक मंडळ, लातूर संचलित 'शिव संगम पुणे कॉलेज ऑफ फार्मसी' - अत्याधुनिक प्रयोगशाळा, औद्योगिक मार्गदर्शन व गुणवत्तापूर्ण फार्मसी शिक्षण देणारे फुरसुंगी, पुणे येथील अग्रगण्य महाविद्यालय.",
    features_title: "महाविद्यालयाची प्रमुख वैशिष्ट्ये",
    features_sub: "गुणवत्तापूर्ण शिक्षण, आधुनिक लॅब आणि प्रगत फार्मास्युटिकल कौशल्यांचा संगम",
    sec_leadership_title: "सचिवांचे मनोगत",
    sec_leadership_name: "शिवलिंग जेवळे (Shivling Jevle)",
    sec_leadership_role: "सचिव, विवेकानंद युवक मंडळ, लातूर / पुणे",
    eligibility_check_title: "प्रवेश पात्रता तपासा (Eligibility Checker)",
    btn_check_eligibility: "पात्रता तपासा",
    form_title: "प्रवेश पूर्वनोंदणी व माहिती फॉर्म २०२६-२०२७",
    contact_pune_title: "महाविद्यालय परिसर (पुणे)",
    contact_latur_title: "संस्था मुख्यालय (लातूर)",
  },
  en: {
    trust_name: "Vivekanand Yuvak Mandal Managed",
    trust_reg: "Reg. No.: MAHA/10600/Latur",
    trust_office: "HQ: Shivaji Road, Ganj Golai, Latur - 413512",
    nav_home: "Home",
    nav_about: "About Us",
    nav_programs: "Courses",
    nav_facilities: "Laboratories",
    nav_admissions: "Admissions 2026-27",
    nav_contact: "Contact",
    btn_apply: "Apply Now",
    hero_badge: "Admissions Open for Academic Session 2026-2027",
    hero_desc: "Run by Vivekanand Yuvak Mandal, Latur (Reg. No: MAHA/10600/Latur). Shiv Sangam Pune College of Pharmacy brings cutting-edge formulation laboratories, industry-aligned training, and professional ethics to Phursungi, Pune.",
    features_title: "Why Choose Shiv Sangam College of Pharmacy?",
    features_sub: "Quality pharmaceutical education, state-of-the-art pilot labs, and industry mentorship.",
    sec_leadership_title: "From Secretary's Desk",
    sec_leadership_name: "Shivling Jevle",
    sec_leadership_role: "Secretary, Vivekanand Yuvak Mandal, Latur / Pune",
    eligibility_check_title: "Check Your Pharmacy Admission Eligibility",
    btn_check_eligibility: "Evaluate My Eligibility",
    form_title: "Admission Enquiry & Pre-Registration 2026-2027",
    contact_pune_title: "College Campus (Pune)",
    contact_latur_title: "Trust Head Office (Latur)",
  }
};

let currentLang = localStorage.getItem('sspcp_lang') || 'en';

// Set Language Mode
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('sspcp_lang', lang);
  
  if (lang === 'mr') {
    document.body.classList.add('marathi-mode');
  } else {
    document.body.classList.remove('marathi-mode');
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const btnEn = document.getElementById('lang-btn-en');
  const btnMr = document.getElementById('lang-btn-mr');
  if (btnEn && btnMr) {
    if (lang === 'mr') {
      btnMr.classList.add('bg-amber-500', 'text-white', 'font-bold');
      btnMr.classList.remove('text-slate-200');
      btnEn.classList.remove('bg-amber-500', 'text-white', 'font-bold');
      btnEn.classList.add('text-slate-200');
    } else {
      btnEn.classList.add('bg-amber-500', 'text-white', 'font-bold');
      btnEn.classList.remove('text-slate-200');
      btnMr.classList.remove('bg-amber-500', 'text-white', 'font-bold');
      btnMr.classList.add('text-slate-200');
    }
  }
}

// Mobile Menu Handler
function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-menu-close');
  
  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.add('hidden');
    });
  });
}

// Laboratory Department Tab Switcher
function setupDepartmentTabs() {
  const tabs = document.querySelectorAll('.dept-tab-btn');
  const panels = document.querySelectorAll('.dept-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-target');
      
      tabs.forEach(t => {
        t.classList.remove('bg-[#0A2540]', 'text-white', 'active');
        t.classList.add('bg-white', 'text-slate-700');
      });
      tab.classList.add('bg-[#0A2540]', 'text-white', 'active');
      tab.classList.remove('bg-white', 'text-slate-700');

      panels.forEach(p => {
        if (p.id === target) {
          p.classList.remove('hidden');
        } else {
          p.classList.add('hidden');
        }
      });
    });
  });
}

// Eligibility Calculator (D.Pharm & B.Pharm)
function setupEligibilityChecker() {
  const form = document.getElementById('eligibility-form');
  const resultBox = document.getElementById('eligibility-result');

  if (form && resultBox) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const course = document.getElementById('check-course').value;
      const category = document.getElementById('check-category').value;
      const marks = parseFloat(document.getElementById('check-pcb').value);
      const neet = document.getElementById('check-neet').value;

      const minMarks = (category === 'open') ? 45 : 40;
      const isMarksEligible = marks >= minMarks;
      
      let isEntranceOk = true;
      let courseName = "D.Pharm (Diploma in Pharmacy)";
      if (course === 'bpharm') {
        courseName = "B.Pharm (Bachelor of Pharmacy)";
        isEntranceOk = (neet === 'yes' || neet === 'appearing');
      } else if (course === 'bpth') {
        courseName = "B.P.Th (Physiotherapy)";
        isEntranceOk = (neet === 'yes' || neet === 'appearing');
      }

      resultBox.classList.remove('hidden');

      if (isMarksEligible && isEntranceOk) {
        resultBox.className = "p-5 rounded-2xl border border-emerald-400 bg-emerald-950/70 text-emerald-100 shadow-xl";
        resultBox.innerHTML = `
          <div class="flex items-start gap-3">
            <i class="fas fa-circle-check text-emerald-400 text-2xl mt-0.5"></i>
            <div>
              <h5 class="font-extrabold text-base text-white">Congratulations! You are Eligible for ${courseName}</h5>
              <p class="text-xs text-slate-200 mt-1 leading-relaxed">
                Your 12th score of <strong>${marks}%</strong> satisfies the minimum <strong>${minMarks}%</strong> requirement for <strong>${category.toUpperCase()}</strong> category under CET Cell and PCI guidelines.
              </p>
              <div class="mt-3 flex flex-wrap gap-2">
                <a href="#admissions" class="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-lg text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-all">
                  Fill Admission Enquiry Form <i class="fas fa-arrow-right text-[10px]"></i>
                </a>
                <a href="https://wa.me/918805029999?text=Hello%20College,%20my%2012th%20score%20is%20${marks}%25.%20I%20am%20eligible%20for%20${courseName}.%20Please%20guide%20me" target="_blank" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold inline-flex items-center gap-1.5 transition-all">
                  <i class="fab fa-whatsapp"></i> Chat with Counselor
                </a>
              </div>
            </div>
          </div>
        `;
      } else {
        resultBox.className = "p-5 rounded-2xl border border-rose-400 bg-rose-950/70 text-rose-100 shadow-xl";
        resultBox.innerHTML = `
          <div class="flex items-start gap-3">
            <i class="fas fa-triangle-exclamation text-rose-400 text-2xl mt-0.5"></i>
            <div>
              <h5 class="font-extrabold text-base text-white">Eligibility Status: Needs Review</h5>
              <p class="text-xs text-slate-200 mt-1 leading-relaxed">
                ${!isMarksEligible ? `• Minimum 12th aggregate required for ${category.toUpperCase()} category is ${minMarks}%. You entered ${marks}%.<br>` : ''}
                ${!isEntranceOk ? `• A valid non-zero score in MHT-CET or NEET is required for degree admissions in Maharashtra.<br>` : ''}
                For guidance regarding D.Pharm direct admissions or institutional category concessions, please contact our helpline at <strong>88050 29999</strong>.
              </p>
            </div>
          </div>
        `;
      }
    });
  }
}

// Admission Form Submission & Printable Acknowledgement Slip
function setupAdmissionForm() {
  const form = document.getElementById('admission-inquiry-form');
  const modal = document.getElementById('receipt-modal');
  const closeModalBtn = document.getElementById('close-receipt-modal');
  const receiptDetails = document.getElementById('receipt-details');
  const printBtn = document.getElementById('print-receipt-btn');
  const whatsappShareBtn = document.getElementById('whatsapp-share-receipt-btn');
  const directWaBtn = document.getElementById('form-whatsapp-direct');

  // Direct WhatsApp from form before submitting
  if (directWaBtn) {
    directWaBtn.addEventListener('click', () => {
      const name = document.getElementById('app-name').value.trim() || 'Student';
      const course = document.getElementById('app-course').value;
      const mobile = document.getElementById('app-mobile').value.trim();
      const city = document.getElementById('app-city').value.trim();
      const text = encodeURIComponent(`Hello Shiv Sangam Pune College of Pharmacy, I want admission in ${course}. Name: ${name}, Mobile: ${mobile}, City: ${city}. Please share details.`);
      window.open(`https://wa.me/918805029999?text=${text}`, '_blank');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('app-name').value.trim();
      const mobile = document.getElementById('app-mobile').value.trim();
      const email = document.getElementById('app-email').value.trim() || 'N/A';
      const course = document.getElementById('app-course').value;
      const pcb = document.getElementById('app-pcb').value.trim();
      const neet = document.getElementById('app-neet').value;
      const category = document.getElementById('app-category').value.toUpperCase();
      const city = document.getElementById('app-city').value.trim();
      const message = document.getElementById('app-message').value.trim() || 'No special remarks';

      const regId = 'SSPCP-2026-' + Math.floor(100000 + Math.random() * 900000);
      const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

      // Save inquiry to localStorage for Admin
      const newLead = {
        regId,
        fullName,
        mobile,
        email,
        course,
        pcb,
        neet,
        category,
        city,
        message,
        timestamp,
        status: 'New'
      };

      const existingLeads = JSON.parse(localStorage.getItem('sspcp_admission_leads') || '[]');
      existingLeads.unshift(newLead);
      localStorage.setItem('sspcp_admission_leads', JSON.stringify(existingLeads));

      // Refresh admin table if open
      renderAdminLeads();

      // Populate Receipt Modal
      if (receiptDetails) {
        receiptDetails.innerHTML = `
          <div class="border-b border-slate-200 pb-4 mb-4 text-center">
            <span class="inline-block px-3.5 py-1 bg-amber-100 text-amber-900 text-xs font-black rounded-full mb-2 uppercase tracking-wider">
              PROVISIONAL ADMISSION ENQUIRY ACKNOWLEDGEMENT
            </span>
            <h3 class="text-xl font-black text-slate-900">Shiv Sangam Pune College of Pharmacy</h3>
            <p class="text-xs text-slate-500">Run by Vivekanand Yuvak Mandal, Latur (Reg: MAHA/10600/Latur)</p>
            <p class="text-xs text-sky-800 font-bold mt-0.5">Campus: Phursungi, Tal. Haveli, Dist. Pune - 412308</p>
          </div>

          <div class="bg-amber-50 border border-amber-300 rounded-2xl p-4 text-center mb-4">
            <span class="text-[11px] font-bold text-amber-800 uppercase tracking-widest block">Candidate Registration ID</span>
            <div class="text-2xl font-black text-amber-950 tracking-wider my-0.5">${regId}</div>
            <div class="text-[11px] text-amber-700">Issued On: ${timestamp} IST</div>
          </div>

          <div class="grid grid-cols-2 gap-3 text-xs text-slate-700 mb-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div><span class="text-slate-500 block">Student Name:</span> <strong class="text-slate-900 text-sm">${fullName}</strong></div>
            <div><span class="text-slate-500 block">Registered Mobile:</span> <strong class="text-slate-900">${mobile}</strong></div>
            <div><span class="text-slate-500 block">Course Selected:</span> <strong class="text-sky-700 font-bold">${course}</strong></div>
            <div><span class="text-slate-500 block">12th Science %:</span> <strong class="text-amber-800 font-bold">${pcb}%</strong></div>
            <div><span class="text-slate-500 block">Category / Quota:</span> <strong>${category}</strong></div>
            <div><span class="text-slate-500 block">Entrance Exam:</span> <strong>${neet}</strong></div>
            <div><span class="text-slate-500 block">Candidate City:</span> <strong>${city}</strong></div>
            <div><span class="text-slate-500 block">Email:</span> <strong>${email}</strong></div>
          </div>

          <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 mb-2">
            <i class="fas fa-check-circle text-emerald-600 mr-1"></i>
            <strong>Next Steps:</strong> Our Admission Cell will contact you on <strong>${mobile}</strong>. Please bring your 10th, 12th marksheet, entrance scorecard, and domicile certificate for campus counseling.
          </div>
          
          <div class="text-center text-[11px] text-slate-500 pt-2">
            Campus Helpline: <strong>+91 88050 29999 / 94224 72393</strong> | Email: <strong>vivekanandym@gmail.com</strong>
          </div>
        `;
      }

      if (whatsappShareBtn) {
        whatsappShareBtn.onclick = () => {
          const msg = encodeURIComponent(`Hello Admission Cell, I have submitted my registration for Shiv Sangam Pune College of Pharmacy.\nReg ID: ${regId}\nName: ${fullName}\nCourse: ${course}\nMobile: ${mobile}\n12th%: ${pcb}%\nCity: ${city}`);
          window.open(`https://wa.me/918805029999?text=${msg}`, '_blank');
        };
      }

      if (modal) modal.classList.remove('hidden');
      form.reset();
    });
  }

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => modal.classList.add('hidden'));
  }
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }
}

// Lightbox Handler for Gallery Items
function setupGalleryLightbox() {
  const items = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('close-lightbox');
  const imgContainer = document.getElementById('lightbox-image-container');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');

  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      filterBtns.forEach(b => {
        b.classList.remove('bg-[#0A2540]', 'text-white', 'active');
        b.classList.add('bg-white', 'text-slate-700');
      });
      btn.classList.add('bg-[#0A2540]', 'text-white', 'active');
      btn.classList.remove('bg-white', 'text-slate-700');

      items.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // Lightbox click
  items.forEach(item => {
    item.addEventListener('click', () => {
      const title = item.getAttribute('data-title');
      const desc = item.getAttribute('data-desc');
      const previewHtml = item.querySelector('div').outerHTML;

      if (titleEl) titleEl.textContent = title;
      if (descEl) descEl.textContent = desc;
      if (imgContainer) imgContainer.innerHTML = previewHtml;
      if (modal) modal.classList.remove('hidden');
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }
}

// Digital Prospectus Modal
function setupProspectusModal() {
  const modal = document.getElementById('prospectus-modal');
  const closeBtn = document.getElementById('close-prospectus-modal');
  const openBtns = document.querySelectorAll('.open-prospectus-btn');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) modal.classList.remove('hidden');
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }
}

// Admin Portal Logic (Authentication, Lead Table, CSV Export, Notice Ticker)
function setupAdminPortal() {
  const openBtn = document.getElementById('open-admin-btn');
  const mobileOpenBtn = document.getElementById('mobile-open-admin-btn');
  const footerOpenBtn = document.getElementById('footer-admin-btn');
  const modal = document.getElementById('admin-modal');
  const closeBtn = document.getElementById('close-admin-modal');
  const loginForm = document.getElementById('admin-login-form');
  const loginView = document.getElementById('admin-login-view');
  const dashView = document.getElementById('admin-dashboard-view');
  const loginErr = document.getElementById('admin-login-error');
  const logoutBtn = document.getElementById('admin-logout-btn');
  const exportBtn = document.getElementById('admin-export-csv-btn');
  const clearBtn = document.getElementById('admin-clear-leads-btn');
  const noticeForm = document.getElementById('admin-notice-form');

  function openAdmin() {
    if (modal) {
      modal.classList.remove('hidden');
      const isAuth = sessionStorage.getItem('sspcp_admin_auth') === 'true';
      if (isAuth) {
        if (loginView) loginView.classList.add('hidden');
        if (dashView) dashView.classList.remove('hidden');
        renderAdminLeads();
      } else {
        if (loginView) loginView.classList.remove('hidden');
        if (dashView) dashView.classList.add('hidden');
      }
    }
  }

  if (openBtn) openBtn.addEventListener('click', openAdmin);
  if (mobileOpenBtn) mobileOpenBtn.addEventListener('click', openAdmin);
  if (footerOpenBtn) footerOpenBtn.addEventListener('click', openAdmin);

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  }

  // Check PIN/password
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const pass = document.getElementById('admin-pass').value.trim();
      // Safe default PIN for college administrative staff
      if (pass === '1234' || pass === 'shivsangam2026') {
        sessionStorage.setItem('sspcp_admin_auth', 'true');
        if (loginErr) loginErr.classList.add('hidden');
        if (loginView) loginView.classList.add('hidden');
        if (dashView) dashView.classList.remove('hidden');
        renderAdminLeads();
      } else {
        if (loginErr) loginErr.classList.remove('hidden');
      }
    });
  }

  // Logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('sspcp_admin_auth');
      if (loginView) loginView.classList.remove('hidden');
      if (dashView) dashView.classList.add('hidden');
    });
  }

  // Export CSV
  if (exportBtn) {
    exportBtn.addEventListener('click', exportLeadsToCSV);
  }

  // Clear leads
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear all student admission enquiries?')) {
        localStorage.removeItem('sspcp_admission_leads');
        renderAdminLeads();
      }
    });
  }

  // Add Notice
  if (noticeForm) {
    noticeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = document.getElementById('admin-new-notice-text').value.trim();
      if (text) {
        const ticker = document.getElementById('ticker-container');
        if (ticker) {
          const span = document.createElement('span');
          span.className = 'inline-flex items-center gap-2 text-rose-950 font-black';
          span.innerHTML = `<i class="fas fa-bullhorn text-rose-800"></i> ${text}`;
          ticker.prepend(span);
        }
        alert('Announcement successfully added to live website ticker!');
        document.getElementById('admin-new-notice-text').value = '';
      }
    });
  }
}

// Render Leads in Admin Table
function renderAdminLeads() {
  const tbody = document.getElementById('admin-leads-table-body');
  const countBadge = document.getElementById('admin-leads-count');
  const kpiTotal = document.getElementById('kpi-total-enquiries');
  const kpiDpharm = document.getElementById('kpi-dpharm-leads');
  const kpiBpharm = document.getElementById('kpi-bpharm-leads');

  const leads = JSON.parse(localStorage.getItem('sspcp_admission_leads') || '[]');

  if (countBadge) countBadge.textContent = leads.length;
  if (kpiTotal) kpiTotal.textContent = leads.length;

  let dpharmCount = 0;
  let bpharmCount = 0;

  leads.forEach(l => {
    if (l.course && l.course.includes('D.Pharm')) dpharmCount++;
    if (l.course && l.course.includes('B.Pharm')) bpharmCount++;
  });

  if (kpiDpharm) kpiDpharm.textContent = dpharmCount;
  if (kpiBpharm) kpiBpharm.textContent = bpharmCount;

  if (!tbody) return;

  if (leads.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" class="p-6 text-center text-slate-400">
          No student enquiries registered yet. Test by submitting the admission form.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = leads.map((item, index) => `
    <tr class="hover:bg-slate-50 transition-colors">
      <td class="px-3 py-2 font-mono text-[11px] font-bold text-amber-700">${item.regId || 'N/A'}</td>
      <td class="px-3 py-2 font-bold text-slate-900">${item.fullName || 'N/A'}</td>
      <td class="px-3 py-2 font-mono">
        <a href="tel:${item.mobile}" class="hover:underline">${item.mobile || 'N/A'}</a>
      </td>
      <td class="px-3 py-2"><span class="px-2 py-0.5 rounded text-[10px] font-bold ${item.course && item.course.includes('D.Pharm') ? 'bg-amber-100 text-amber-800' : 'bg-sky-100 text-sky-800'}">${item.course || 'N/A'}</span></td>
      <td class="px-3 py-2 font-bold">${item.pcb}%</td>
      <td class="px-3 py-2">${item.category}</td>
      <td class="px-3 py-2">${item.city}</td>
      <td class="px-3 py-2 text-[10px] text-slate-500">${item.timestamp ? item.timestamp.split(',')[0] : 'Today'}</td>
      <td class="px-3 py-2 text-center">
        <a href="https://wa.me/91${item.mobile}?text=Hello%20${encodeURIComponent(item.fullName)},%20this%20is%20from%20Shiv%20Sangam%20College%20of%20Pharmacy%20regarding%20your%20admission%20enquiry" target="_blank" class="p-1.5 text-emerald-600 hover:text-emerald-800" title="WhatsApp Candidate">
          <i class="fab fa-whatsapp text-sm"></i>
        </a>
      </td>
    </tr>
  `).join('');
}

// Export Leads to CSV
function exportLeadsToCSV() {
  const leads = JSON.parse(localStorage.getItem('sspcp_admission_leads') || '[]');
  if (leads.length === 0) {
    alert('No admission leads to export.');
    return;
  }

  const headers = ['Registration ID', 'Candidate Name', 'Mobile', 'Email', 'Course', '12th PCB/PCM %', 'Entrance Status', 'Category', 'City', 'Remarks', 'Date'];
  const rows = leads.map(l => [
    `"${l.regId || ''}"`,
    `"${l.fullName || ''}"`,
    `"${l.mobile || ''}"`,
    `"${l.email || ''}"`,
    `"${l.course || ''}"`,
    `"${l.pcb || ''}"`,
    `"${l.neet || ''}"`,
    `"${l.category || ''}"`,
    `"${l.city || ''}"`,
    `"${(l.message || '').replace(/"/g, '""')}"`,
    `"${l.timestamp || ''}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `Shiv_Sangam_Admission_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  setupDepartmentTabs();
  setupEligibilityChecker();
  setupAdmissionForm();
  setupGalleryLightbox();
  setupProspectusModal();
  setupAdminPortal();

  // Language toggles
  const btnEn = document.getElementById('lang-btn-en');
  const btnMr = document.getElementById('lang-btn-mr');
  if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
  if (btnMr) btnMr.addEventListener('click', () => setLanguage('mr'));

  setLanguage(currentLang);
});
