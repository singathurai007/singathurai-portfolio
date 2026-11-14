export type Language = 'en' | 'ta';

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    roadmap: string;
    projects: string;
    terminal: string;
    contact: string;
    resume: string;
    askAi: string;
    langToggle: string;
  };
  hero: {
    status: string;
    greeting: string;
    iam: string;
    roles: string[];
    bio: string;
    explore: string;
    resumePdf: string;
    experienceBadge: string;
    educationBadge: string;
  };
  about: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    roleTitle: string;
    p1: string;
    p2: string;
    h1Title: string;
    h1Desc: string;
    h2Title: string;
    h2Desc: string;
    h3Title: string;
    h3Desc: string;
    h4Title: string;
    h4Desc: string;
    currentRoleLabel: string;
    currentRoleValue: string;
    liveProjectLabel: string;
    eduLabel: string;
    eduValue: string;
    locLabel: string;
    locValue: string;
    downloadResumeBtn: string;
  };
  experience: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    liveLabel: string;
  };
  skills: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    allPill: string;
    verifiedCount: string;
    tabSkills?: string;
    tabCurriculum?: string;
  };
  projects: {
    badge: string;
    title: string;
    titleHighlight: string;
    slide: string;
    archDiagramBtn: string;
    screenshotBtn: string;
    deliverables: string;
    liveBtn: string;
    codeBtn: string;
    fullscreen: string;
  };
  roadmap: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    allStages: string;
    taskLabel: string;
    outcomeLabel: string;
  };
  terminal: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    welcomeMsg: string;
    helpPrompt: string;
    placeholder: string;
    clearBtn: string;
  };
  ai: {
    widgetBtn: string;
    title: string;
    subtitle: string;
    onlineBadge: string;
    clearChat: string;
    close: string;
    greeting: string;
    greetingSub: string;
    promptSuggestionsLabel: string;
    suggestions: string[];
    inputPlaceholder: string;
    sendBtn: string;
    disclaimer: string;
  };
  contact: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    emailLabel: string;
    copyAddress: string;
    copied: string;
    phoneLabel: string;
    locLabel: string;
    locValue: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    emailInputLabel: string;
    msgLabel: string;
    sendBtn: string;
    successMsg: string;
  };
  footer: {
    role: string;
    builtWith: string;
    allRights: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills & Curriculum',
      roadmap: 'Roadmap',
      projects: 'Projects',
      terminal: 'Terminal',
      contact: 'Contact',
      resume: 'Resume',
      askAi: 'Ask AI',
      langToggle: 'தமிழ்',
    },
    hero: {
      status: 'Full-Stack & DevOps Intern • Open to Full-Time Roles',
      greeting: "Hello, I'm",
      iam: 'I am a',
      roles: [
        'Software Engineer',
        'Cloud Engineer',
        'DevOps Engineer',
        'Full-Stack Developer',
        'Backend Architect'
      ],
      bio: 'Backend Developer and Software Engineer with hands-on experience building scalable server-side services (NestJS, TypeScript, Prisma ORM, PostgreSQL) and automating cloud-native deployments (AWS, Docker, DevSecOps CI/CD).',
      explore: 'Explore My Work',
      resumePdf: 'Download Resume (PDF)',
      experienceBadge: 'Bloogle Backend Intern',
      educationBadge: 'Software Engineering & Cloud Architecture',
    },
    about: {
      badge: 'Professional Summary',
      title: 'Backend Architecture &',
      titleHighlight: 'Cloud Automation.',
      subtitle: 'Bridging scalable server-side development with automated infrastructure deployment.',
      roleTitle: 'Singathurai C — Backend Developer & DevOps Engineer',
      p1: 'Backend Developer and Software Engineer with hands-on experience building scalable server-side services (NestJS, TypeScript, Prisma ORM, PostgreSQL) and automating cloud deployments (AWS, Docker, DevSecOps CI/CD).',
      p2: 'Strong foundation in REST API architecture, multi-role authentication (RBAC, JWT, Google OAuth 2.0), relational database design, query optimization, and infrastructure automation, seeking to contribute to enterprise IT and software engineering teams.',
      h1Title: 'Backend & APIs',
      h1Desc: 'NestJS, TypeScript, REST, OAuth 2.0, JWT',
      h2Title: 'Databases & ORM',
      h2Desc: 'PostgreSQL, Prisma ORM, MySQL, Schemas',
      h3Title: 'Cloud & Containers',
      h3Desc: 'AWS (EC2, IAM, Security Groups), Docker',
      h4Title: 'DevSecOps & IaC',
      h4Desc: 'Jenkins, GitHub Actions, Terraform, Ansible',
      currentRoleLabel: 'Current Role',
      currentRoleValue: 'Backend Development Intern at Bloogle',
      liveProjectLabel: 'Live Commercial Project',
      eduLabel: 'Specialization',
      eduValue: 'Backend Engineering & Cloud Architecture',
      locLabel: 'Location',
      locValue: 'Gandhipuram, Coimbatore, Tamil Nadu, India',
      downloadResumeBtn: 'Download Official Resume (PDF)',
    },
    experience: {
      badge: 'Career Journey',
      title: 'Work',
      titleHighlight: 'Experience',
      subtitle: 'Production backend development and automated cloud infrastructure delivering reliable, enterprise-grade software.',
      liveLabel: 'Live Production',
    },
    skills: {
      badge: 'Technical Arsenal',
      title: 'Skills &',
      titleHighlight: 'Technologies',
      subtitle: 'Production-tested backend stacks, cloud virtualization engines, and structured full-stack learning curriculum.',
      allPill: 'All Technologies',
      verifiedCount: 'verified technologies',
      tabSkills: 'Core Technical Stack',
      tabCurriculum: 'Full-Stack Curriculum (9 Modules)',
    },
    projects: {
      badge: 'International-Standard Projects',
      title: 'Featured',
      titleHighlight: 'Projects',
      slide: 'Slide',
      archDiagramBtn: 'Architecture Diagram',
      screenshotBtn: 'App Screenshot',
      deliverables: 'Core Technical Deliverables:',
      liveBtn: 'Live Production',
      codeBtn: 'Source Code',
      fullscreen: 'Fullscreen Architecture',
    },
    roadmap: {
      badge: 'Full-Stack Development Curriculum',
      title: 'Engineering',
      titleHighlight: 'Roadmap',
      subtitle: 'Rigorous learning path: Frontend → Backend → Database → Full-Stack Integration, mastering end-to-end web engineering.',
      allStages: 'Complete Path (9 Modules)',
      taskLabel: 'Practical Task',
      outcomeLabel: 'Expected Engineering Outcome',
    },
    terminal: {
      badge: 'Interactive CLI Shell',
      title: 'Developer',
      titleHighlight: 'Terminal',
      subtitle: 'Type commands or click quick pills to explore architecture, skills, and credentials directly in an OLED dark shell.',
      welcomeMsg: "Welcome to Singathurai C's Backend & DevOps Shell [v3.0.0].",
      helpPrompt: "Type 'help' or click the command pills below to explore credentials.",
      placeholder: 'Type a command (e.g. help, stack, projects, about, sudo hire)...',
      clearBtn: 'Clear Screen',
    },
    ai: {
      widgetBtn: 'Ask AI Assistant',
      title: 'Singathurai AI',
      subtitle: 'Resume & Technical Assistant',
      onlineBadge: 'Online • Pre-trained on Resume',
      clearChat: 'Clear',
      close: 'Close',
      greeting: "Hello! I'm Singathurai's AI assistant.",
      greetingSub: 'Ask me anything about his backend development, AWS & DevOps experience, or hiring details.',
      promptSuggestionsLabel: 'Quick Questions for Recruiters:',
      suggestions: [
        'Why should our team hire Singathurai?',
        'Tell me about his live project tvrepaircoimbatore.in',
        'What is his backend & REST API stack?',
        'What DevOps and AWS tools does he know?',
        'Is he open for full-time engineering roles?',
      ],
      inputPlaceholder: 'Ask a question about Singathurai...',
      sendBtn: 'Send',
      disclaimer: 'Trained strictly on verified resume data (NestJS, AWS, DevSecOps, CGPA 7.11).',
    },
    contact: {
      badge: 'Get in Touch',
      title: "Let's Build Something",
      titleHighlight: 'Robust',
      subtitle: 'Open for Backend Developer, Cloud & DevOps roles. Reach out via email, phone, or instant message.',
      emailLabel: 'Primary Email',
      copyAddress: 'Copy Address',
      copied: 'Copied!',
      phoneLabel: 'Direct Contact & WhatsApp',
      locLabel: 'Location & Base',
      locValue: 'Gandhipuram, Coimbatore, Tamil Nadu, India',
      formTitle: 'Direct Message',
      formSubtitle: 'Leave a note with your requirements or interview invitation.',
      nameLabel: 'Your Name *',
      emailInputLabel: 'Your Email *',
      msgLabel: 'Message Details *',
      sendBtn: 'Send Message Directly',
      successMsg: 'Message sent! Thank you for reaching out.',
    },
    footer: {
      role: 'Backend Developer & DevOps Engineer',
      builtWith: 'Built with Next.js, React, TypeScript, Three.js & Tailwind CSS',
      allRights: 'All rights reserved.',
    },
  },
  ta: {
    nav: {
      home: 'முகப்பு',
      about: 'சுயவிவரம்',
      experience: 'அனுபவம்',
      skills: 'திறன்கள் & பாடத்திட்டம்',
      roadmap: 'கற்றல் பாதை',
      projects: 'திட்டங்கள்',
      terminal: 'டெர்மினல்',
      contact: 'தொடர்பு',
      resume: 'ரெஸ்யூம்',
      askAi: 'AI உதவி',
      langToggle: 'English',
    },
    hero: {
      status: 'முழு-அடுக்கு மற்றும் டெவொப்ஸ் இன்டர்ன் • முழுநேர பணிகளுக்கு தயார்',
      greeting: 'வணக்கம், நான்',
      iam: 'நான் ஒரு',
      roles: [
        'மென்பொருள் பொறியாளர்',
        'கிளவுட் பொறியாளர்',
        'டெவொப்ஸ் பொறியாளர்',
        'முழு-அடுக்கு டெவலப்பர்',
        'பேக்கெண்ட் ஆர்கிடெக்ட்'
      ],
      bio: 'Bloogle நிறுவனத்தில் பேக்கெண்ட் இன்டர்னாக NestJS, TypeScript, Prisma ORM, PostgreSQL மற்றும் AWS, Docker, DevSecOps CI/CD கொண்டு அளவிடக்கூடிய தயாரிப்பு செயலிகளை உருவாக்கும் நேரடி அனுபவம் கொண்ட மென்பொருள் பொறியாளர்.',
      explore: 'திட்டங்களை காண்க',
      resumePdf: 'ரெஸ்யூம் பதிவிறக்கு (PDF)',
      experienceBadge: 'ப்ளூகில் பேக்கெண்ட் இன்டர்ன்',
      educationBadge: 'மென்பொருள் பொறியியல் & கிளவுட் கட்டமைப்பு',
    },
    about: {
      badge: 'தொழில்முறை சுருக்கம்',
      title: 'பேக்கெண்ட் கட்டமைப்பு &',
      titleHighlight: 'கிளவுட் ஆட்டோமேஷன்.',
      subtitle: 'அளவிடக்கூடிய சேவையக மேம்பாட்டை தன்னியக்க கிளவுட் உள்கட்டமைப்போடு இணைக்கும் பொறியியல் நடைமுறை.',
      roleTitle: 'சிங்கதுரை சி — பேக்கெண்ட் டெவலப்பர் & டெவொப்ஸ் பொறியாளர்',
      p1: 'NestJS, TypeScript, Prisma ORM, PostgreSQL மூலம் நம்பகமான ஏபிஐ மற்றும் தரவுத்தள சேவைகளை உருவாக்கும் மென்பொருள் பொறியாளர்.',
      p2: 'REST API வடிவமைப்பு, பலநிலை அங்கீகாரம் (RBAC, JWT, Google OAuth 2.0), குவெரி ஆப்டிமைசேஷன், மற்றும் AWS, Docker, Jenkins DevSecOps தானியக்க உள்கட்டமைப்பில் ஆழ்ந்த அனுபவம்.',
      h1Title: 'பேக்கெண்ட் & APIs',
      h1Desc: 'NestJS, TypeScript, REST, OAuth 2.0, JWT',
      h2Title: 'தரவுத்தளம் & ORM',
      h2Desc: 'PostgreSQL, Prisma ORM, MySQL, Schemas',
      h3Title: 'கிளவுட் & கண்டெய்னர்கள்',
      h3Desc: 'AWS (EC2, IAM, Security Groups), Docker',
      h4Title: 'DevSecOps & IaC',
      h4Desc: 'Jenkins, GitHub Actions, Terraform, Ansible',
      currentRoleLabel: 'தற்போதைய பொறுப்பு',
      currentRoleValue: 'பேக்கெண்ட் டெவலப்மென்ட் இன்டர்ன், Bloogle',
      liveProjectLabel: 'நேரடி வணிக திட்டம்',
      eduLabel: 'சிறப்புத் துறை',
      eduValue: 'பேக்கெண்ட் பொறியியல் & கிளவுட் கட்டமைப்பு',
      locLabel: 'இருப்பிடம்',
      locValue: 'காந்திபுரம், கோயம்புத்தூர், தமிழ்நாடு, இந்தியா',
      downloadResumeBtn: 'அதிகாரப்பூர்வ ரெஸ்யூம் (PDF)',
    },
    experience: {
      badge: 'பணிப் பயணம்',
      title: 'தொழில்முறை',
      titleHighlight: 'அனுபவம்',
      subtitle: 'தயாரிப்பு தர பேக்கெண்ட் சேவைகள் மற்றும் தானியங்கு கிளவுட் உள்கட்டமைப்பை வெற்றிகரமாக நிர்வகிக்கும் அனுபவம்.',
      liveLabel: 'நேரடி தயாரிப்பு தளம்',
    },
    skills: {
      badge: 'தொழில்நுட்பக் கருவிகள்',
      title: 'திறன்கள் &',
      titleHighlight: 'தொழில்நுட்பங்கள்',
      subtitle: 'தயாரிப்பில் சோதிக்கப்பட்ட பேக்கெண்ட் ஸ்டாக், கிளவுட் தளங்கள் மற்றும் முழு-அடுக்கு கற்றல் பாடத்திட்டம்.',
      allPill: 'அனைத்து தொழில்நுட்பங்கள்',
      verifiedCount: 'சரிபார்க்கப்பட்ட தொழில்நுட்பங்கள்',
      tabSkills: 'முக்கிய தொழில்நுட்பத் திறன்கள்',
      tabCurriculum: 'முழு-அடுக்கு பாடத்திட்டம் (9 தொகுதிகள்)',
    },
    projects: {
      badge: 'சர்வதேச தர திட்டங்கள்',
      title: 'முக்கிய',
      titleHighlight: 'திட்டங்கள்',
      slide: 'ஸ்லைடு',
      archDiagramBtn: 'கட்டமைப்பு வரைபடம்',
      screenshotBtn: 'செயலி திரைப்படம்',
      deliverables: 'முக்கிய தொழில்நுட்ப அம்சங்கள்:',
      liveBtn: 'நேரடி தளம்',
      codeBtn: 'மூலக் குறியீடு',
      fullscreen: 'முழுத்திரை வரைபடம்',
    },
    roadmap: {
      badge: 'முழு-அடுக்கு பாடத்திட்டம்',
      title: 'பொறியியல்',
      titleHighlight: 'கற்றல் பாதை',
      subtitle: 'நேர்த்தியான கற்றல் படிநிலைகள்: பிரண்ட்-எண்ட் → பேக்கெண்ட் → தரவுத்தளம் → முழு-அடுக்கு ஒருங்கிணைப்பு.',
      allStages: 'முழுமையான பாதை (9 தொகுதிகள்)',
      taskLabel: 'நடைமுறை பணி',
      outcomeLabel: 'எதிர்பார்க்கப்படும் பொறியியல் திறன்',
    },
    terminal: {
      badge: 'ஊடாடும் சிஎல்ஐ ஷெல்',
      title: 'டெவலப்பர்',
      titleHighlight: 'டெர்மினல்',
      subtitle: 'கட்டளைகளை உள்ளிட்டு அல்லது கீழேயுள்ள பட்டன்களை அழுத்தி நேரடியாக எனது திறன்களையும் திட்டங்களையும் பார்வையிடவும்.',
      welcomeMsg: 'சிங்கதுரை சி-யின் பேக்கெண்ட் & டெவொப்ஸ் ஷெல்லுக்கு வருக [v3.0.0].',
      helpPrompt: "'help' என தட்டச்சு செய்யவும் அல்லது கீழேயுள்ள பட்டன்களைப் பயன்படுத்தவும்.",
      placeholder: 'கட்டளையை தட்டச்சு செய்க (எ.கா. help, stack, projects, about, sudo hire)...',
      clearBtn: 'திரையை அழி',
    },
    ai: {
      widgetBtn: 'AI உதவியாளரிடம் கேட்க',
      title: 'சிங்கதுரை AI',
      subtitle: 'ரெஸ்யூம் & தொழில்நுட்ப உதவியாளர்',
      onlineBadge: 'இணைப்பில் • ரெஸ்யூம் தகவல்கள் ஏற்றப்பட்டது',
      clearChat: 'அழி',
      close: 'மூடு',
      greeting: 'வணக்கம்! நான் சிங்கதுரையின் AI உதவியாளர்.',
      greetingSub: 'அவரது பேக்கெண்ட் பணி, AWS & டெவொப்ஸ் அனுபவம் அல்லது பணியமர்த்தல் பற்றி என்னிடம் கேளுங்கள்.',
      promptSuggestionsLabel: 'ரெக்ரூட்டர்களுக்கான விரைவு கேள்விகள்:',
      suggestions: [
        'சிங்கதுரையை எங்கள் குழுவிற்கு ஏன் தேர்வு செய்ய வேண்டும்?',
        'அவரது நேரடி tvrepaircoimbatore.in திட்டம் பற்றி கூறுங்கள்',
        'அவரது பேக்கெண்ட் மற்றும் REST API திறன்கள் என்ன?',
        'அவர் என்னென்ன டெவொப்ஸ் மற்றும் AWS கருவிகளை அறிவார்?',
        'அவர் முழுநேர மென்பொருள் பணிக்கு தயாராக உள்ளாரா?',
      ],
      inputPlaceholder: 'சிங்கதுரை பற்றி ஒரு கேள்வியைக் கேளுங்கள்...',
      sendBtn: 'அனுப்பு',
      disclaimer: 'உறுதிப்படுத்தப்பட்ட ரெஸ்யூம் தரவுகளிலிருந்து மட்டுமே பதிலளிக்கிறது (NestJS, AWS, DevSecOps, CGPA 7.11).',
    },
    contact: {
      badge: 'தொடர்பு கொள்ள',
      title: 'வலிமையான மென்பொருளை',
      titleHighlight: 'உருவாக்குவோம்',
      subtitle: 'பேக்கெண்ட் டெவலப்பர், கிளவுட் & டெவொப்ஸ் பணிகளுக்கு கிடைக்கும். மின்னஞ்சல், தொலைபேசி அல்லது வாட்ஸ்அப் மூலம் தொடர்பு கொள்ளலாம்.',
      emailLabel: 'முதன்மை மின்னஞ்சல்',
      copyAddress: 'முகவரியை நகலெடு',
      copied: 'நகலெடுக்கப்பட்டது!',
      phoneLabel: 'நேரடி அழைப்பு & வாட்ஸ்அப்',
      locLabel: 'இருப்பிடம்',
      locValue: 'காந்திபுரம், கோயம்புத்தூர், தமிழ்நாடு, இந்தியா',
      formTitle: 'நேரடி செய்தி',
      formSubtitle: 'உங்கள் திட்டத் தேவைகள் அல்லது நேர்காணல் விவரங்களை பகிரவும்.',
      nameLabel: 'உங்கள் பெயர் *',
      emailInputLabel: 'உங்கள் மின்னஞ்சல் *',
      msgLabel: 'செய்தி விவரங்கள் *',
      sendBtn: 'செய்தியை நேரடியாக அனுப்பு',
      successMsg: 'செய்தி அனுப்பப்பட்டது! தொடர்பு கொண்டதற்கு நன்றி.',
    },
    footer: {
      role: 'பேக்கெண்ட் டெவலப்பர் & டெவொப்ஸ் பொறியாளர்',
      builtWith: 'Next.js, React, TypeScript, Three.js & Tailwind CSS கொண்டு உருவாக்கப்பட்டது',
      allRights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    },
  },
};

