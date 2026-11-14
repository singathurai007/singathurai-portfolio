/* ==========================================================================
   SINGATHURAI C — ADVANCED PORTFOLIO JAVASCRIPT
   Interactive Backend/DevOps Terminal, Command Palette (Ctrl+K), Theme Switcher,
   Project Filters, Testimonial Adder, Lightbox & Certified Learning Viewer
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgressBar();
  initThemeSwitcher();
  initCommandPalette();
  initNavbar();
  initAmbientParticles();
  initCounters();
  initDevOpsTerminal();
  initProjectFilters();
  initJourneyTabs();
  initCertificates();
  initProjectLightbox();
  initTestimonialModal();
  initContactActions();
  initBackToTop();
  updateCurrentYear();
});

/* --- SCROLL PROGRESS BAR --- */
function initScrollProgressBar() {
  const bar = document.getElementById('scrollProgressBar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    bar.style.width = `${progress}%`;
  });
}

/* --- THEME SWITCHER (GOLD, EMERALD, BLUE, VIOLET) --- */
function initThemeSwitcher() {
  const dots = document.querySelectorAll('.theme-dot');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'gold';
  setTheme(savedTheme);

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const theme = dot.getAttribute('data-theme');
      setTheme(theme);
      showToast(`Accent theme updated to ${theme.toUpperCase()}`);
    });
  });

  function setTheme(theme) {
    if (theme === 'gold') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
    localStorage.setItem('portfolio-theme', theme);
  }
}

/* --- COMMAND PALETTE (CTRL + K / SEARCH) --- */
const paletteItems = [
  { title: 'Home — Introduction & Hero', tag: 'Navigation', icon: 'fa-house', action: () => scrollToSection('home') },
  { title: 'About — Professional Summary', tag: 'Resume', icon: 'fa-user', action: () => scrollToSection('about') },
  { title: 'Work Experience — Bloogle Backend Intern', tag: 'Experience', icon: 'fa-briefcase', action: () => scrollToSection('experience') },
  { title: 'Live Project: tvrepaircoimbatore.in', tag: 'Live App', icon: 'fa-globe', action: () => window.open('https://tvrepaircoimbatore.in', '_blank') },
  { title: 'Interactive DevOps/Backend Terminal', tag: 'CLI Widget', icon: 'fa-terminal', action: () => scrollToSection('devopsTerminal') },
  { title: 'Technical Arsenal — Skills Stack', tag: 'Skills', icon: 'fa-code', action: () => scrollToSection('skills') },
  { title: 'Projects — DevSecOps CI/CD Pipeline', tag: 'Project', icon: 'fa-shield-halved', action: () => scrollToSection('projects') },
  { title: 'Projects — AWS Infrastructure (Terraform & Ansible)', tag: 'Project', icon: 'fa-layer-group', action: () => scrollToSection('projects') },
  { title: 'Projects — AWS EC2 Monitoring Platform', tag: 'Project', icon: 'fa-chart-line', action: () => scrollToSection('projects') },
  { title: 'Projects — Automobile Repair Management System', tag: 'Project', icon: 'fa-car', action: () => scrollToSection('projects') },
  { title: 'Education — Kumaraguru College of Technology (CGPA 7.32)', tag: 'Education', icon: 'fa-graduation-cap', action: () => scrollToSection('journey') },
  { title: 'Credentials — AWS Cloud Practitioner Essentials', tag: 'Certificate', icon: 'fa-award', action: () => { scrollToSection('certifications'); window.selectCertificate(0); } },
  { title: 'Credentials — IBM Cloud Computing Fundamentals', tag: 'Certificate', icon: 'fa-award', action: () => { scrollToSection('certifications'); window.selectCertificate(1); } },
  { title: 'Credentials — Software Engineering UML (HKUST)', tag: 'Certificate', icon: 'fa-award', action: () => { scrollToSection('certifications'); window.selectCertificate(2); } },
  { title: 'Credentials — Security and Risk Management (Packt)', tag: 'Certificate', icon: 'fa-award', action: () => { scrollToSection('certifications'); window.selectCertificate(3); } },
  { title: 'Credentials — Interfacing with Arduino (UC Irvine)', tag: 'Certificate', icon: 'fa-award', action: () => { scrollToSection('certifications'); window.selectCertificate(4); } },
  { title: 'Credentials — IT Support Executive (Skill India)', tag: 'Certificate', icon: 'fa-award', action: () => { scrollToSection('certifications'); window.selectCertificate(5); } },
  { title: 'Download Official Resume PDF (Single Page)', tag: 'Download', icon: 'fa-file-pdf', action: () => window.open('resume.pdf', '_blank') },
  { title: 'Connect — Email: cmsingathurai@gmail.com', tag: 'Contact', icon: 'fa-envelope', action: () => window.location.href = 'mailto:cmsingathurai@gmail.com' },
  { title: 'Connect — WhatsApp (+91 8778457577)', tag: 'Contact', icon: 'fa-whatsapp', action: () => window.open('https://wa.me/918778457577', '_blank') },
  { title: 'GitHub: github.com/singathurai007', tag: 'Social', icon: 'fa-github', action: () => window.open('https://github.com/singathurai007', '_blank') },
  { title: 'LinkedIn: linkedin.com/in/singathuraic', tag: 'Social', icon: 'fa-linkedin', action: () => window.open('https://linkedin.com/in/singathuraic', '_blank') }
];

function initCommandPalette() {
  const backdrop = document.getElementById('commandPalette');
  const input = document.getElementById('paletteInput');
  const resultsList = document.getElementById('paletteResults');
  const triggerBtn = document.getElementById('cmdPaletteBtn');

  if (!backdrop || !input || !resultsList) return;

  let activeIndex = 0;
  let filteredItems = [...paletteItems];

  function renderResults() {
    resultsList.innerHTML = '';
    if (filteredItems.length === 0) {
      resultsList.innerHTML = `<li style="padding: 1.5rem; text-align: center; color: var(--text-dim); font-size: 0.9rem;">No matching results found</li>`;
      return;
    }

    filteredItems.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = `palette-item ${index === activeIndex ? 'active' : ''}`;
      li.innerHTML = `
        <div class="palette-item-left">
          <i class="fa ${item.icon}"></i>
          <span class="palette-item-title">${item.title}</span>
        </div>
        <span class="palette-item-tag">${item.tag}</span>
      `;

      li.addEventListener('click', () => {
        closePalette();
        item.action();
      });

      resultsList.appendChild(li);
    });
  }

  function openPalette() {
    backdrop.classList.add('open');
    input.value = '';
    filteredItems = [...paletteItems];
    activeIndex = 0;
    renderResults();
    setTimeout(() => input.focus(), 80);
    document.body.style.overflow = 'hidden';
  }

  function closePalette() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (triggerBtn) triggerBtn.addEventListener('click', openPalette);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closePalette();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (backdrop.classList.contains('open')) closePalette();
      else openPalette();
    }
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closePalette();
    }
  });

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase().trim();
    if (!query) {
      filteredItems = [...paletteItems];
    } else {
      filteredItems = paletteItems.filter(item => 
        item.title.toLowerCase().includes(query) || item.tag.toLowerCase().includes(query)
      );
    }
    activeIndex = 0;
    renderResults();
  });

  input.addEventListener('keydown', (e) => {
    if (filteredItems.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % filteredItems.length;
      renderResults();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex = (activeIndex - 1 + filteredItems.length) % filteredItems.length;
      renderResults();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[activeIndex]) {
        closePalette();
        filteredItems[activeIndex].action();
      }
    }
  });
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* --- NAVBAR & SCROLL SPY --- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileClose = document.getElementById('mobileClose');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
          else link.classList.remove('active');
        });
      }
    });
  }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });

  sections.forEach(sec => observer.observe(sec));

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    if (mobileClose) {
      mobileClose.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}

/* --- AMBIENT PARTICLES --- */
function initAmbientParticles() {
  const canvas = document.getElementById('ambientCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 25), 55);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.8 + 0.6,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  let mouseX = -1000;
  let mouseY = -1000;
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        p.x -= (dx / dist) * 0.6;
        p.y -= (dy / dist) * 0.6;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(250, 204, 21, ${p.alpha * 0.45})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const pDist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (pDist < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.04 * (1 - pDist / 100)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* --- STATS COUNTERS --- */
function initCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(num => {
          const target = parseFloat(num.getAttribute('data-target'));
          const suffix = num.getAttribute('data-suffix') || '';
          const prefix = num.getAttribute('data-prefix') || '';
          const isDecimal = target % 1 !== 0;
          let current = 0;
          const duration = 1800;
          const stepTime = 30;
          const increment = target / (duration / stepTime);

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            num.innerHTML = `${prefix}${isDecimal ? current.toFixed(2) : Math.floor(current)}<span>${suffix}</span>`;
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-grid');
  if (statsSection) observer.observe(statsSection);
}

/* --- INTERACTIVE BACKEND & DEVOPS TERMINAL --- */
function initDevOpsTerminal() {
  const terminalInput = document.getElementById('terminalInput');
  const terminalHistory = document.getElementById('terminalHistory');
  const quickCmds = document.querySelectorAll('.cmd-pill');

  if (!terminalInput || !terminalHistory) return;

  const commands = {
    help: () => `
Available Commands:
  • <span class="term-line-highlight">experience</span>      - Current role at Bloogle & live projects
  • <span class="term-line-highlight">skills</span>          - Technical skills (NestJS, Postgres, AWS, CI/CD)
  • <span class="term-line-highlight">projects</span>        - Featured resume projects & live links
  • <span class="term-line-highlight">education</span>       - Degree from Kumaraguru College of Technology
  • <span class="term-line-highlight">certs</span>           - Verified industry certifications
  • <span class="term-line-highlight">whoami</span>          - Professional bio & summary
  • <span class="term-line-highlight">cat resume.txt</span>  - Plain text resume snapshot
  • <span class="term-line-highlight">contact</span>         - Contact channels & social links
  • <span class="term-line-highlight">sudo hire</span>       - Jump to contact desk
  • <span class="term-line-highlight">clear</span>           - Clear terminal window
    `,
    experience: () => `
[WORK EXPERIENCE]
  Company:   Bloogle (Oct 2026 – Present)
  Role:      Backend Development Intern
  Project:   tvrepaircoimbatore.in (Live in Production)
  Impact:
    • Built REST APIs with NestJS, TypeScript, Prisma ORM, and PostgreSQL.
    • Implemented RBAC authentication with Google OAuth 2.0 and JWT.
    • Engineered Admin approval workflow and dynamic lead query matching.
    `,
    skills: () => `
[TECHNICAL SKILLS]
  Backend:     TypeScript, JavaScript (ES6+), Node.js, NestJS, REST APIs, OAuth 2.0, JWT, Python/Bash
  Databases:   PostgreSQL, Prisma ORM, MySQL, Relational Schema Design, Query Optimization, SQL
  Cloud:       AWS (EC2, IAM, Security Groups, CloudWatch, SNS, S3, VPC), Docker, Docker Compose, Linux
  DevSecOps:   Jenkins, GitHub Actions, Terraform, Ansible, Prometheus, Grafana, SonarQube, Trivy, Git
    `,
    projects: () => `
[KEY PROJECTS]
  1. DevSecOps CI/CD Pipeline (Jenkins, GitHub, Docker, SonarQube, Trivy, AWS EC2)
  2. AWS Infrastructure Automation using Terraform & Ansible (EC2, IAM, Ansible Playbooks)
  3. AWS EC2 Infrastructure Monitoring Platform (Prometheus, Node Exporter, Grafana, SNS)
  4. TV Repair Coimbatore Lead Marketplace (Live Commercial App: tvrepaircoimbatore.in)
  5. Automobile Repair Management System (HTML5, CSS3, JavaScript, MySQL, Apache)
    `,
    education: () => `
[EDUCATION]
  • B.Tech in Information Technology — Kumaraguru College of Technology, Coimbatore
    Year: 2022 – 2026 | CGPA: 7.32 (71.1%)
  • Higher Secondary (Class XII) — St. Corporation Hr Sec School, Coimbatore (91%)
  • Secondary School (Class X) — St. Arulanandhar Hr Sec School, Ramanathapuram (89%)
    `,
    certs: () => `
[VERIFIED CREDENTIALS]
  01. AWS Cloud Practitioner Essentials (AWS Training & Certification)
  02. Cloud Computing Fundamentals (IBM SkillsBuild)
  03. Software Engineering: Modeling Software Systems using UML (HKUST / Coursera)
  04. Security and Risk Management (Packt / Coursera)
  05. Interfacing with the Arduino (UC Irvine / Coursera)
  06. IT Technical Support Executive (Skill India / NSDC)
    `,
    whoami: () => `
SINGATHURAI C — Backend Developer & DevOps Engineer.
2026 B.Tech IT graduate from Kumaraguru College of Technology, Coimbatore.
Currently Backend Development Intern at Bloogle, building scalable services with NestJS and AWS.
    `,
    'cat resume.txt': () => `
SINGATHURAI C | Coimbatore, Tamil Nadu | +91 8778457577 | cmsingathurai@gmail.com
LinkedIn: linkedin.com/in/singathuraic | GitHub: github.com/singathurai007

SUMMARY:
2026 B.Tech IT graduate (Kumaraguru) and Backend Development Intern (Bloogle) building scalable
NestJS/TypeScript server-side architectures and automated AWS cloud deployments.

EXPERIENCE:
• Backend Development Intern | Bloogle (Live Project: tvrepaircoimbatore.in) | Oct 2026 – Present

EDUCATION:
• B.Tech IT — Kumaraguru College of Technology (CGPA: 7.32) | 2022–2026
• HSC (Class XII) — 91% | SSLC (Class X) — 89%
    `,
    contact: () => `
[CONTACT CHANNELS]
  Email:     cmsingathurai@gmail.com
  Phone:     +91 8778457577
  LinkedIn:  https://linkedin.com/in/singathuraic
  GitHub:    https://github.com/singathurai007
  Location:  Gandhipuram, Coimbatore, Tamil Nadu, India
    `,
    'sudo hire': () => {
      setTimeout(() => scrollToSection('contact'), 500);
      return `<span class="term-line-success">[SUCCESS] Access Granted! Redirecting to contact desk...</span>`;
    },
    hire: () => {
      setTimeout(() => scrollToSection('contact'), 500);
      return `<span class="term-line-success">[SUCCESS] Redirecting to contact desk...</span>`;
    }
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    
    const promptLine = document.createElement('div');
    promptLine.className = 'terminal-prompt-row';
    promptLine.innerHTML = `<span class="term-prompt-label">singathurai@cloud:~$</span> <span>${rawCmd}</span>`;
    terminalHistory.appendChild(promptLine);

    if (cmd === 'clear') {
      terminalHistory.innerHTML = '';
      return;
    }

    const outputLine = document.createElement('div');
    outputLine.className = 'term-line-output';

    if (commands[cmd]) {
      outputLine.innerHTML = commands[cmd]();
    } else if (cmd === '') {
      return;
    } else {
      outputLine.innerHTML = `command not found: ${cmd}. Type <span class="term-line-highlight">'help'</span> for available commands.`;
    }

    terminalHistory.appendChild(outputLine);
    terminalHistory.scrollTop = terminalHistory.scrollHeight;
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = terminalInput.value;
      terminalInput.value = '';
      executeCommand(cmd);
    }
  });

  quickCmds.forEach(pill => {
    pill.addEventListener('click', () => {
      const cmd = pill.getAttribute('data-cmd');
      executeCommand(cmd);
    });
  });
}

/* --- PROJECTS FILTER --- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
}

/* --- JOURNEY TABS (EXPERIENCE / EDUCATION) --- */
function initJourneyTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const experienceList = document.getElementById('experienceList');
  const educationList = document.getElementById('educationList');

  if (!tabBtns.length || !experienceList || !educationList) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-tab');
      if (target === 'experience') {
        experienceList.style.display = 'block';
        educationList.style.display = 'none';
      } else {
        experienceList.style.display = 'none';
        educationList.style.display = 'block';
      }
    });
  });
}

/* --- CERTIFICATES INTERACTIVE SELECTOR --- */
const certificatesData = [
  {
    id: '01',
    title: 'AWS Cloud Practitioner Essentials',
    provider: 'AWS Training & Certification',
    date: 'June 17, 2026',
    label: 'AWS TRAINING & CERTIFICATION',
    description: 'Foundational validation of AWS Cloud concepts, security, core services (EC2, S3, RDS, IAM, VPC), pricing, and architectural best practices.',
    image: 'images/certificates/aws.png',
    link: 'certificates/aws-cloud-practitioner-essentials.pdf',
    verified: true
  },
  {
    id: '02',
    title: 'Cloud Computing Fundamentals',
    provider: 'IBM SkillsBuild',
    date: 'June 06, 2026',
    label: 'IBM SKILLSBUILD',
    description: 'Deep dive into fundamental cloud computing paradigms: IaaS, PaaS, SaaS, virtualization, cloud storage, security models, and deployment architectures.',
    image: 'images/certificates/cloud-computing.png',
    link: 'https://www.credly.com/badges/9620b854-f6a3-417a-a9f9-052b85a7d683',
    verified: true
  },
  {
    id: '03',
    title: 'Software Engineering: Modeling with UML',
    provider: 'The Hong Kong University of Science and Technology',
    date: 'March 18, 2025',
    label: 'COURSERA VERIFIED',
    description: 'Rigorous engineering methodologies for architectural modeling, component diagrams, statecharts, and structural design patterns in enterprise systems.',
    image: 'images/certificates/software-engineering-uml.png',
    link: 'certificates/software-engineering-uml.pdf',
    verified: true
  },
  {
    id: '04',
    title: 'Security and Risk Management',
    provider: 'Packt / Coursera',
    date: 'March 18, 2025',
    label: 'COURSERA VERIFIED',
    description: 'Cybersecurity foundations, threat vector mitigation, security compliance frameworks, access control policies, and enterprise risk management protocols.',
    image: 'images/certificates/security-risk-management.png',
    link: 'certificates/security-risk-management.pdf',
    verified: true
  },
  {
    id: '05',
    title: 'Interfacing with the Arduino',
    provider: 'University of California, Irvine',
    date: 'March 19, 2025',
    label: 'COURSERA VERIFIED',
    description: 'Hardware and firmware interfacing, sensor integration, serial protocol communications, embedded C/C++ control systems, and automated actuators.',
    image: 'images/certificates/arduino.png',
    link: 'certificates/arduino.pdf',
    verified: true
  },
  {
    id: '06',
    title: 'IT Technical Support Executive',
    provider: 'Skill India / NSDC',
    date: 'Verified Certification',
    label: 'SKILL INDIA / NSDC',
    description: 'Enterprise IT infrastructure diagnostics, network troubleshooting, hardware maintenance, OS installations, and SLA-driven technical support.',
    image: 'images/certificates/it-support-executive.png',
    link: 'certificates/it-support-executive.pdf',
    verified: true
  }
];

function initCertificates() {
  const thumbBtns = document.querySelectorAll('.cert-thumb-btn');
  const mainImage = document.getElementById('mainCertImage');
  const mainTitle = document.getElementById('mainCertTitle');
  const mainProvider = document.getElementById('mainCertProvider');
  const mainCounter = document.getElementById('mainCertCounter');
  const mainLabel = document.getElementById('mainCertLabel');
  const mainLink = document.getElementById('mainCertLink');

  if (!thumbBtns.length || !mainImage) return;

  window.selectCertificate = function(index) {
    const cert = certificatesData[index];
    if (!cert) return;

    mainImage.style.opacity = '0';
    mainImage.style.transform = 'scale(0.95)';

    setTimeout(() => {
      mainImage.src = cert.image;
      mainImage.alt = cert.title;
      mainTitle.textContent = cert.title;
      mainProvider.textContent = `${cert.provider} • ${cert.date}`;
      mainCounter.textContent = `${cert.id} / 06`;
      if (mainLabel) mainLabel.textContent = cert.label;
      mainLink.href = cert.link;

      mainImage.style.opacity = '1';
      mainImage.style.transform = 'scale(1)';
    }, 180);

    thumbBtns.forEach((btn, idx) => {
      if (idx === index) btn.classList.add('active');
      else btn.classList.remove('active');
    });
  };

  thumbBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => window.selectCertificate(index));
  });
}

/* --- LIGHTBOX MODAL FOR SCREENSHOTS --- */
const projectGalleries = {
  devsecops: {
    title: 'DevSecOps CI/CD Pipeline (SonarQube, Trivy, Jenkins)',
    images: [
      'images/projects/devsecops/devsecops-1.png',
      'images/projects/devsecops/devsecops-2.png',
      'images/projects/devsecops/devsecops-3.png',
      'images/projects/devsecops/devsecops-4.png'
    ]
  },
  terraform: {
    title: 'AWS Infrastructure Automation (Terraform & Ansible)',
    images: [
      'images/projects/terraform-jenkins/terraform-jenkins-1.png',
      'images/projects/terraform-jenkins/terraform-jenkins-2.png'
    ]
  },
  monitoring: {
    title: 'AWS EC2 Infrastructure Monitoring (Prometheus & Grafana)',
    images: [
      'images/projects/monitoring/monitoring-1.png',
      'images/projects/monitoring/monitoring-2.png'
    ]
  },
  githubactions: {
    title: 'Automobile Repair Management System & Deployments',
    images: [
      'images/projects/github-actions/github-actions-1.png',
      'images/projects/github-actions/github-actions-2.png'
    ]
  }
};

let currentGalleryKey = null;
let currentGalleryIndex = 0;

function initProjectLightbox() {
  const modal = document.getElementById('lightboxModal');
  const modalTitle = document.getElementById('lightboxTitle');
  const modalImg = document.getElementById('lightboxImg');
  const modalCounter = document.getElementById('lightboxCounter');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  if (!modal || !modalImg) return;

  function updateLightbox() {
    const gallery = projectGalleries[currentGalleryKey];
    if (!gallery) return;

    modalImg.src = gallery.images[currentGalleryIndex];
    modalTitle.textContent = gallery.title;
    modalCounter.textContent = `${currentGalleryIndex + 1} / ${gallery.images.length}`;
  }

  window.openProjectGallery = function(key) {
    if (!projectGalleries[key]) return;
    currentGalleryKey = key;
    currentGalleryIndex = 0;
    updateLightbox();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeLightbox() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const gallery = projectGalleries[currentGalleryKey];
    if (!gallery) return;
    currentGalleryIndex = (currentGalleryIndex - 1 + gallery.images.length) % gallery.images.length;
    updateLightbox();
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const gallery = projectGalleries[currentGalleryKey];
    if (!gallery) return;
    currentGalleryIndex = (currentGalleryIndex + 1) % gallery.images.length;
    updateLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
  });
}

/* --- ADD TESTIMONIAL MODAL --- */
function initTestimonialModal() {
  const modalBackdrop = document.getElementById('testimonialModal');
  const openBtn = document.getElementById('openAddTestimonialBtn');
  const closeBtn = document.getElementById('closeAddTestimonialBtn');
  const form = document.getElementById('testimonialForm');
  const grid = document.querySelector('.testimonials-grid');
  const stars = document.querySelectorAll('.star-rating-select i');
  let selectedRating = 5;

  if (!modalBackdrop || !openBtn) return;

  openBtn.addEventListener('click', () => {
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  function closeModal() {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const val = parseInt(star.getAttribute('data-value'), 10);
      selectedRating = val;
      stars.forEach(s => {
        const sVal = parseInt(s.getAttribute('data-value'), 10);
        if (sVal <= val) s.classList.add('selected');
        else s.classList.remove('selected');
      });
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('testiName').value.trim();
      const role = document.getElementById('testiRole').value.trim();
      const message = document.getElementById('testiMessage').value.trim();

      if (!name || !message) {
        showToast('Name and recommendation are required.');
        return;
      }

      const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'SC';

      let starsHtml = '';
      for (let i = 0; i < selectedRating; i++) starsHtml += `<i class="fas fa-star"></i>`;

      const card = document.createElement('div');
      card.className = 'testimonial-card';
      card.innerHTML = `
        <div>
          <div class="testi-stars">${starsHtml}</div>
          <p class="testi-quote">"${message}"</p>
        </div>
        <div class="testi-author">
          <div class="author-avatar">${initials}</div>
          <div class="author-info">
            <strong>${name}</strong>
            <span>${role || 'Colleague / Engineer'}</span>
          </div>
        </div>
      `;

      if (grid) grid.prepend(card);
      form.reset();
      closeModal();
      showToast('Thank you! Your recommendation has been added.');
    });
  }
}

/* --- CONTACT ACTIONS & TOAST NOTIFICATION --- */
function initContactActions() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = 'cmsingathurai@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied: cmsingathurai@gmail.com');
      }).catch(() => {
        showToast('cmsingathurai@gmail.com');
      });
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const message = document.getElementById('formMessage').value.trim();

      if (!name || !email || !message) {
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = 'Please fill out all fields before sending.';
        return;
      }

      const subject = encodeURIComponent(`Engineering Inquiry from ${name}`);
      const body = encodeURIComponent(`Hi Singathurai,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:cmsingathurai@gmail.com?subject=${subject}&body=${body}`;

      formFeedback.className = 'form-feedback success';
      formFeedback.textContent = 'Opening your email client to send your message. Thank you!';
      contactForm.reset();
      showToast('Redirecting to email client...');
    });
  }
}

function showToast(msg) {
  const toast = document.getElementById('toastNotice');
  if (!toast) return;
  toast.querySelector('.toast-text').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* --- BACK TO TOP BUTTON --- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) backToTopBtn.classList.add('visible');
    else backToTopBtn.classList.remove('visible');
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --- CURRENT YEAR --- */
function updateCurrentYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
