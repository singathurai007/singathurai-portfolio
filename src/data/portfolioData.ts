import { ProjectItem, CertificateItem, ServiceItem, SkillCategory, TestimonialItem, RoadmapPhase } from '../types/portfolio';

export const personalInfo = {
  name: "SINGATHURAI C",
  role: "Backend Developer & DevOps Engineer",
  location: "Gandhipuram, Coimbatore, Tamil Nadu, India",
  phone: "+91 8778457577",
  email: "cmsingathurai@gmail.com",
  github: "https://github.com/singathurai007",
  linkedin: "https://linkedin.com/in/singathuraic",
  leetcode: "https://leetcode.com/u/singathurai007/",
  resumePdf: "resume.pdf",
  summary: "Backend Developer and Software Engineer with hands-on experience building scalable server-side services (NestJS, TypeScript, Prisma ORM, PostgreSQL) and automating cloud-native deployments (AWS, Docker, DevSecOps CI/CD). Strong foundation in REST API architecture, multi-role authentication (RBAC, JWT, OAuth 2.0), relational database design, and infrastructure automation."
};

export const statsData = [
  { value: "1", suffix: " Live App", label: "tvrepaircoimbatore.in" },
  { value: "5", suffix: "+", label: "Production Projects & Stacks" },
  { value: "6", suffix: "+", label: "Verified Cloud Certifications" }
];

export const experienceData = [
  {
    role: "Full-Stack Developer Intern",
    company: "Bloogle",
    project: "tvrepaircoimbatore.in",
    projectUrl: "https://tvrepaircoimbatore.in",
    period: "Oct 2026 – Present",
    location: "Coimbatore, India",
    bullets: [
      "Engineered end-to-end full-stack web applications integrating React and Next.js responsive client interfaces with high-performance NestJS and TypeScript REST APIs for the live tvrepaircoimbatore.in platform.",
      "Architected relational database schemas and data migration pipelines using PostgreSQL and Prisma ORM, implementing connection pooling and Role-Based Access Control (RBAC).",
      "Built multi-role authentication workflows supporting Google OAuth 2.0 and JWT login with dynamic query filtering to match verified service vendors with real-time customer leads."
    ],
    tags: ["React.js", "Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma ORM", "Google OAuth 2.0", "JWT", "Tailwind CSS"]
  },
  {
    role: "Cloud & DevOps Intern",
    company: "SURE ProEd",
    companyUrl: "https://sureproed.com/",
    project: "Next-Gen Learning Platform",
    period: "Present",
    location: "Remote",
    bullets: [
      "Managing cloud infrastructure and containerized service deployments for the SURE ProEd Next-Gen Learning Platform across distributed cloud environments.",
      "Automating DevSecOps CI/CD delivery pipelines using Docker, GitHub Actions, and Linux automation for high-availability production uptime.",
      "Configuring system observability, health checks, and security access policies to safeguard modern educational application workloads."
    ],
    tags: ["AWS Cloud", "Docker", "DevOps", "CI/CD Pipelines", "Linux Administration", "Prometheus", "Grafana", "Cloud Security"]
  }
];

export const educationData = [
  {
    institution: "Kumaraguru College of Technology, Coimbatore",
    degree: "B.Tech in Information Technology",
    period: "2022 – Present",
    score: "CGPA: 7.11 (71.1%)",
    description: "Rigorous curriculum in Relational Database Management Systems (RDBMS), Operating Systems, Computer Networks, Software Engineering, Object-Oriented Modeling, and Cloud Systems."
  },
  {
    institution: "St. Corporation Hr Sec School, Coimbatore",
    degree: "Higher Secondary (Class XII)",
    period: "2021 – 2022",
    score: "91% Marks",
    description: "Completed Higher Secondary education with distinction in Science and Mathematics."
  },
  {
    institution: "St. Arulanandhar Hr Sec School, Ramanathapuram",
    degree: "Secondary School (Class X)",
    period: "2019 – 2020",
    score: "89% Marks",
    description: "Graduated secondary school education with 89% aggregate."
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "backend-api",
    num: "01",
    title: "Scalable REST APIs (NestJS)",
    description: "Engineering modular, enterprise-grade server-side applications in TypeScript with NestJS. Clean controllers, dependency injection, and data validation pipes.",
    tags: ["NestJS", "TypeScript", "Node.js", "REST APIs"],
    icon: "Server"
  },
  {
    id: "databases",
    num: "02",
    title: "PostgreSQL & Prisma ORM",
    description: "Relational database architecture, normalized schema design, Prisma ORM migrations, indexing, and high-performance SQL query optimization.",
    tags: ["PostgreSQL", "Prisma ORM", "MySQL", "Relational Schema"],
    icon: "Database"
  },
  {
    id: "auth",
    num: "03",
    title: "RBAC, Google OAuth & JWT",
    description: "Securing enterprise portals with multi-role access control (RBAC), stateless JWT token lifecycles, refresh tokens, and Google OAuth 2.0 single sign-on.",
    tags: ["Google OAuth 2.0", "JWT", "RBAC", "Guards & Middleware"],
    icon: "ShieldCheck"
  },
  {
    id: "devsecops",
    num: "04",
    title: "DevSecOps CI/CD Pipelines",
    description: "Automated build, test, and release pipelines using Jenkins and GitHub Webhooks. Shift-left security with SonarQube code gates and Trivy container vulnerability scans.",
    tags: ["Jenkins", "SonarQube", "Trivy", "GitHub Actions"],
    icon: "Code2"
  },
  {
    id: "iac",
    num: "05",
    title: "AWS Infrastructure as Code",
    description: "Provisioning reproducible AWS cloud resources (EC2, IAM, Security Groups) with Terraform and automating server configurations with Ansible Playbooks.",
    tags: ["Terraform", "Ansible", "AWS EC2", "IAM & VPC"],
    icon: "Cloud"
  },
  {
    id: "observability",
    num: "06",
    title: "Observability & Monitoring",
    description: "Full-stack system telemetry using Prometheus, Node Exporter, and customized Grafana visual dashboards with proactive 80% saturation alert notifications.",
    tags: ["Prometheus", "Grafana", "Alertmanager", "AWS SNS"],
    icon: "Activity"
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    category: "Frontend & Full-Stack",
    icon: "Layout",
    skills: [
      { name: "React.js", icon: "Code2" },
      { name: "Next.js", icon: "Boxes" },
      { name: "TypeScript", icon: "FileCode" },
      { name: "JavaScript (ES6+)", icon: "FileCode" },
      { name: "Tailwind CSS", icon: "Layers" },
      { name: "State & Hooks", icon: "Zap" },
      { name: "API Integration", icon: "Network" },
      { name: "Responsive UI", icon: "Table" }
    ]
  },
  {
    category: "Backend & Languages",
    icon: "Terminal",
    skills: [
      { name: "TypeScript", icon: "FileCode" },
      { name: "JavaScript (ES6+)", icon: "FileCode" },
      { name: "Node.js", icon: "Server" },
      { name: "NestJS Framework", icon: "Cpu" },
      { name: "REST API Design", icon: "Network" },
      { name: "Google OAuth 2.0", icon: "Key" },
      { name: "JWT Auth", icon: "Lock" },
      { name: "Python & Bash", icon: "Terminal" }
    ]
  },
  {
    category: "Databases & ORM",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", icon: "Database" },
      { name: "Prisma ORM", icon: "Boxes" },
      { name: "MySQL", icon: "Table" },
      { name: "Schema Design", icon: "GitFork" },
      { name: "Query Tuning", icon: "Zap" },
      { name: "SQL Migrations", icon: "FileText" }
    ]
  },
  {
    category: "Cloud & Containers",
    icon: "Cloud",
    skills: [
      { name: "AWS EC2", icon: "Server" },
      { name: "AWS IAM", icon: "Shield" },
      { name: "Security Groups", icon: "Lock" },
      { name: "AWS CloudWatch", icon: "Activity" },
      { name: "AWS SNS", icon: "Bell" },
      { name: "Docker Engine", icon: "Box" },
      { name: "Docker Compose", icon: "Boxes" },
      { name: "Linux (Ubuntu)", icon: "Terminal" }
    ]
  },
  {
    category: "DevSecOps & Tools",
    icon: "ShieldCheck",
    skills: [
      { name: "Jenkins CI/CD", icon: "Play" },
      { name: "GitHub Actions", icon: "GitBranch" },
      { name: "Terraform IaC", icon: "Layers" },
      { name: "Ansible", icon: "Workflow" },
      { name: "Prometheus", icon: "Activity" },
      { name: "Grafana", icon: "BarChart3" },
      { name: "SonarQube", icon: "CheckCircle2" },
      { name: "Trivy Scanner", icon: "ShieldAlert" },
      { name: "Postman", icon: "Send" },
      { name: "Git Version Control", icon: "GitCommit" }
    ]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "tv-repair-coimbatore",
    title: "Live TV Repair Lead Management System",
    windowTitle: "src/leads/lead.service.ts — NestJS & Prisma ORM",
    category: "backend",
    categoryLabel: "LIVE COMMERCIAL",
    description: "Live commercial production platform engineered during my Backend Internship at Bloogle. Designed REST APIs to capture, validate, and dynamically match customer service leads with verified repair shop owners in real time.",
    highlights: [
      "Engineered high-performance REST APIs using NestJS, TypeScript, Prisma ORM, and PostgreSQL",
      "Implemented Role-Based Access Control (RBAC) with Google OAuth 2.0 & JWT authentication",
      "Built Admin approval workflow & subscription-based dynamic lead filtering algorithms"
    ],
    tags: ["NestJS", "Prisma ORM", "PostgreSQL", "Google OAuth 2.0", "JWT Auth", "TypeScript", "RBAC"],
    liveUrl: "https://tvrepaircoimbatore.in",
    githubUrl: "https://github.com/singathurai007",
    codeFileName: "src/leads/lead.service.ts",
    codeLanguage: "TypeScript",
    codeSnippet: `@Injectable()
export class LeadService {
  constructor(private readonly prisma: PrismaService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SHOP_OWNER)
  async allocateLead(leadDto: CreateLeadDto) {
    const lead = await this.prisma.serviceLead.create({
      data: {
        customerName: leadDto.name,
        deviceIssue: leadDto.issue,
        pincode: leadDto.pincode,
        status: LeadStatus.PENDING_ALLOCATION,
      },
    });

    // Match verified vendors within geolocation radius
    return this.prisma.vendor.findMany({
      where: {
        operatingPincodes: { has: lead.pincode },
        isVerified: true,
        subscriptionStatus: 'ACTIVE',
      },
      orderBy: { completionRate: 'desc' },
      take: 5,
    });
  }
}`
  },
  {
    id: "devsecops-pipeline",
    title: "DevSecOps CI/CD Pipeline",
    windowTitle: "Jenkinsfile — SonarQube & Trivy Security Gates",
    category: "cicd",
    categoryLabel: "DEVSECOPS PIPELINE",
    description: "Designed and automated an end-to-end DevSecOps pipeline using Jenkins triggered via GitHub Webhooks, streamlining build, security testing, and container deployment workflows.",
    highlights: [
      "Enforced continuous code quality gates by integrating SonarQube static application security testing",
      "Trivy container image vulnerability scanning blocking high and critical CVEs before deployment",
      "Built multi-stage Docker images with automated container deployment onto AWS EC2 instances"
    ],
    tags: ["Jenkins CI/CD", "SonarQube SAST", "Trivy Scanner", "AWS EC2", "Docker Engine", "GitHub Webhooks"],
    githubUrl: "https://github.com/singathurai007/devsecops-gitops",
    codeFileName: "Jenkinsfile",
    codeLanguage: "Groovy / Jenkins",
    codeSnippet: `pipeline {
  agent any
  environment {
    IMAGE = "singathurai/production-api:\${BUILD_NUMBER}"
  }
  stages {
    stage('SAST Security Scan') {
      steps {
        withSonarQubeEnv('SonarQube-Server') {
          sh 'mvn sonar:sonar -Dsonar.projectKey=backend-api'
        }
        timeout(time: 5, unit: 'MINUTES') {
          waitForQualityGate abortPipeline: true
        }
      }
    }
    stage('Trivy Image Scan') {
      steps {
        sh 'trivy image --severity HIGH,CRITICAL --exit-code 1 \${IMAGE}'
      }
    }
    stage('Zero-Downtime Deploy') {
      steps {
        sh 'docker compose -f docker-compose.prod.yml up -d --force-recreate'
      }
    }
  }
}`
  },
  {
    id: "monitoring-platform",
    title: "AWS EC2 Infrastructure Monitoring Platform",
    windowTitle: "alert.rules.yml — Prometheus Saturation Alerts",
    category: "observability",
    categoryLabel: "CLOUD OBSERVABILITY",
    description: "Built a containerized full-stack observability platform using Docker Compose, Prometheus, Node Exporter, and Grafana with proactive alert saturation thresholds integrated with Alertmanager and AWS SNS.",
    highlights: [
      "Full-stack telemetry collecting CPU, memory, network, and disk I/O metrics in real time",
      "Proactive threshold alerts configured for 80% resource saturation with Alertmanager",
      "Integrated with AWS SNS and CloudWatch for automated mobile and email incident notifications"
    ],
    tags: ["Prometheus", "Grafana", "Alertmanager", "AWS SNS", "AWS CloudWatch", "Node Exporter"],
    githubUrl: "https://github.com/singathurai007",
    codeFileName: "prometheus/alert.rules.yml",
    codeLanguage: "YAML",
    codeSnippet: `groups:
  - name: ec2_infrastructure_alerts
    rules:
      - alert: HighCpuSaturation
        expr: 100 - (avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100) > 80
        for: 3m
        labels:
          severity: critical
          environment: production
        annotations:
          summary: "EC2 CPU saturation exceeds 80% on {{ $labels.instance }}"
          description: "Alertmanager dispatching webhook notification to AWS SNS topic."`
  },
  {
    id: "aws-terraform-ansible",
    title: "AWS Infrastructure Automation using Terraform & Ansible",
    windowTitle: "terraform/main.tf — Cloud Infrastructure as Code",
    category: "iac",
    categoryLabel: "INFRASTRUCTURE AS CODE",
    description: "Provisioned modular AWS cloud infrastructure (EC2 instances, IAM roles, Security Groups) as code using Terraform with remote state management for safe, repeatable deployments.",
    highlights: [
      "Declarative Infrastructure as Code (IaC) configuration on AWS with Terraform",
      "Automated server configuration and web server deployment with modular Ansible Playbooks",
      "Multi-environment rollout across Dev, QA, and Production environments"
    ],
    tags: ["AWS EC2", "Terraform IaC", "Ansible", "IAM", "Linux Administration", "Security Groups"],
    githubUrl: "https://github.com/singathurai007",
    codeFileName: "terraform/main.tf",
    codeLanguage: "HCL / Terraform",
    codeSnippet: `terraform {
  required_version = ">= 1.5.0"
  backend "s3" {
    bucket = "singathurai-tf-state-prod"
    key    = "aws-infra/terraform.tfstate"
    region = "ap-south-1"
  }
}

resource "aws_instance" "production_api" {
  ami                    = var.ubuntu_ami
  instance_type          = "t3.medium"
  vpc_security_group_ids = [aws_security_group.api_sg.id]
  key_name               = "singathurai-deployer"

  root_block_device {
    volume_size           = 30
    volume_type           = "gp3"
    encrypted             = true
    delete_on_termination = true
  }

  tags = {
    Name        = "api-production-node"
    Environment = "production"
    ManagedBy   = "Terraform"
  }
}`
  },
  {
    id: "cloud-web-app",
    title: "Cloud-Based Web Application & Linux Administration",
    windowTitle: "scripts/deploy.sh — Zero-Downtime Linux Automation",
    category: "backend",
    categoryLabel: "AWS & LINUX",
    description: "Developed and deployed a production-grade web application on AWS EC2 using Apache Web Server, with secure Linux administration, IAM policies, and CloudWatch performance monitoring.",
    highlights: [
      "Configured Ubuntu Linux server environments, Apache Web Server, and secure permissions",
      "Configured AWS Security Groups, IAM roles, and SSH key management for zero unauthorized access",
      "Monitored server health, CPU saturation, and uptime metrics using AWS CloudWatch"
    ],
    tags: ["Linux Administration", "AWS EC2", "Apache Server", "AWS CloudWatch", "IAM & Security Groups"],
    githubUrl: "https://github.com/singathurai007",
    codeFileName: "scripts/deploy.sh",
    codeLanguage: "Bash / Shell",
    codeSnippet: `#!/usr/bin/env bash
# Zero-Downtime Deployment & Health Verification
set -euo pipefail

echo "==> Pulling tested release container..."
docker pull singathurai/api-service:latest

echo "==> Executing graceful reload with systemd..."
sudo systemctl daemon-reload
sudo systemctl restart backend-api.service

echo "==> Probing API health check endpoint..."
STATUS_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/api/health)

if [ "$STATUS_CODE" -eq 200 ]; then
  echo "Deployment SUCCESS: HTTP 200 OK"
else
  echo "Deployment FAILED: HTTP $STATUS_CODE. Rolling back..."
  exit 1
fi`
  }
];

export const certificationsData: CertificateItem[] = [
  {
    id: "01",
    title: "AWS Cloud Practitioner Essentials",
    provider: "AWS Training & Certification",
    date: "June 17, 2024",
    label: "AWS TRAINING & CERTIFICATION",
    description: "Foundational validation of AWS Cloud concepts, security, core services (EC2, S3, RDS, IAM, VPC), pricing, and architectural best practices.",
    image: "images/certificates/aws.png",
    pdfLink: "certificates/aws-cloud-practitioner-essentials.pdf",
    verified: true
  },
  {
    id: "02",
    title: "Cloud Computing Fundamentals",
    provider: "IBM SkillsBuild",
    date: "June 06, 2024",
    label: "IBM SKILLSBUILD",
    description: "Deep dive into fundamental cloud computing paradigms: IaaS, PaaS, SaaS, virtualization, cloud storage, security models, and deployment architectures.",
    image: "images/certificates/cloud-computing.png",
    pdfLink: "https://www.credly.com/badges/9620b854-f6a3-417a-a9f9-052b85a7d683",
    verified: true
  },
  {
    id: "03",
    title: "Software Engineering: Modeling with UML",
    provider: "The Hong Kong University of Science and Technology",
    date: "March 18, 2025",
    label: "COURSERA VERIFIED",
    description: "Rigorous engineering methodologies for architectural modeling, component diagrams, statecharts, and structural design patterns in enterprise systems.",
    image: "images/certificates/software-engineering-uml.png",
    pdfLink: "certificates/software-engineering-uml.pdf",
    verified: true
  },
  {
    id: "04",
    title: "Security and Risk Management",
    provider: "Packt / Coursera",
    date: "March 18, 2025",
    label: "COURSERA VERIFIED",
    description: "Cybersecurity foundations, threat vector mitigation, security compliance frameworks, access control policies, and enterprise risk management protocols.",
    image: "images/certificates/security-risk-management.png",
    pdfLink: "certificates/security-risk-management.pdf",
    verified: true
  },
  {
    id: "05",
    title: "Interfacing with the Arduino",
    provider: "University of California, Irvine",
    date: "March 19, 2025",
    label: "COURSERA VERIFIED",
    description: "Hardware and firmware interfacing, sensor integration, serial protocol communications, embedded C/C++ control systems, and automated actuators.",
    image: "images/certificates/arduino.png",
    pdfLink: "certificates/arduino.pdf",
    verified: true
  },
  {
    id: "06",
    title: "IT Technical Support Executive",
    provider: "Skill India / NSDC",
    date: "Verified Credential",
    label: "SKILL INDIA / NSDC",
    description: "Enterprise IT infrastructure diagnostics, network troubleshooting, hardware maintenance, OS installations, and SLA-driven technical support.",
    image: "images/certificates/it-support-executive.png",
    pdfLink: "certificates/it-support-executive.pdf",
    verified: true
  }
];

export const initialTestimonials: TestimonialItem[] = [
  {
    id: "1",
    quote: "Singathurai's NestJS backend and Prisma ORM schema for tvrepaircoimbatore.in was structured flawlessly. Clean controllers, rock-solid RBAC, and seamless API performance.",
    author: "Bloogle Tech Lead",
    role: "Lead Backend Architect at Bloogle",
    initials: "BL",
    rating: 5
  },
  {
    id: "2",
    quote: "Outstanding Terraform and AWS expertise. Clean, modular Infrastructure as Code scripts that spin up environments without a single hitch. Highly recommended for any engineering role.",
    author: "Arun Kumar",
    role: "Senior Software Engineer",
    initials: "AK",
    rating: 5
  },
  {
    id: "3",
    quote: "His Prometheus and Grafana dashboards gave our team complete visibility into server load, memory spikes, and disk latency. Extremely thorough and proactive engineering mindset.",
    author: "Manoj S.",
    role: "Systems Operations Lead",
    initials: "MS",
    rating: 5
  }
];

export const roadmapData: RoadmapPhase[] = [
  {
    id: "js",
    num: "01",
    title: "JavaScript",
    stage: "Frontend",
    status: "Completed",
    topics: [
      "JavaScript fundamentals & data types",
      "Functions, arrow functions & scopes",
      "Arrays, objects & modern array methods",
      "Destructuring & spread/rest operators",
      "ES6+ modern language features",
      "DOM manipulation basics",
      "Asynchronous JS: Promises, Async/Await",
      "Error handling & modular export/import"
    ],
    expectedOutcome: "Strong foundation in writing complex JavaScript logic and asynchronous event-driven flows."
  },
  {
    id: "ts",
    num: "02",
    title: "TypeScript",
    stage: "Frontend",
    status: "In Progress",
    topics: [
      "TypeScript fundamentals & type annotations",
      "Interfaces, type aliases & custom contracts",
      "Functions with type signatures & returns",
      "Union & intersection types",
      "Generics & reusable polymorphic types",
      "Enums, type narrowing & optional properties",
      "tsconfig.json compiler configuration",
      "Using TypeScript across React & Node.js"
    ],
    task: "Convert JavaScript applications into strictly typed, production-ready TypeScript projects.",
    expectedOutcome: "Write type-safe enterprise TypeScript code for scalable full-stack applications."
  },
  {
    id: "react",
    num: "03",
    title: "React.js",
    stage: "Frontend",
    status: "Core Stack",
    topics: [
      "React architecture & JSX syntax",
      "Components, props & state management",
      "Event handling & conditional rendering",
      "Lists, unique keys & reconciliation",
      "Forms, controlled inputs & validations",
      "Hooks: useState, useEffect, useRef, useContext",
      "Custom hooks & component reusability",
      "REST API integration, loading & error states"
    ],
    task: "Build responsive React applications with multi-component trees, state hooks, and API integration.",
    expectedOutcome: "Develop functional, dynamic, and reactive frontend client applications using React."
  },
  {
    id: "nextjs",
    num: "04",
    title: "Next.js",
    stage: "Frontend",
    status: "Core Stack",
    topics: [
      "Next.js App Router & project architecture",
      "File-based routing & dynamic routes",
      "Nested layouts & template wrappers",
      "Server Components (RSC) vs Client Components",
      "Server-side data fetching & caching",
      "API route handlers & environment variables",
      "Loading states, error boundaries & streaming",
      "Production build optimization & deployment"
    ],
    task: "Build a multi-page full-stack web application using Next.js connected to backend API services.",
    expectedOutcome: "Architect production-oriented, SEO-friendly web applications using Next.js."
  },
  {
    id: "nodejs",
    num: "05",
    title: "Node.js",
    stage: "Backend",
    status: "Completed",
    topics: [
      "Node.js runtime architecture & event loop",
      "npm dependency management & scripts",
      "CommonJS & ES Modules (ESM)",
      "File system (fs) & OS system utilities",
      "Environment configuration (.env)",
      "HTTP module & server lifecycle",
      "Request/Response pipelines & headers",
      "Middleware pipelines & error handlers",
      "REST API architecture fundamentals"
    ],
    task: "Engineer a high-throughput REST API using Node.js with modular middleware pipelines.",
    expectedOutcome: "Deep comprehension of backend servers, asynchronous I/O, and REST API lifecycles."
  },
  {
    id: "nestjs",
    num: "06",
    title: "NestJS Framework",
    stage: "Backend",
    status: "Core Stack",
    topics: [
      "Modular enterprise project structure",
      "Controllers (routing & HTTP handlers)",
      "Services & business logic layer",
      "Dependency Injection (DI) & IoC container",
      "Data Transfer Objects (DTOs) with class-validator",
      "Pipes for payload transformation & sanitization",
      "Guards for RBAC authentication & authorization",
      "Interceptors, Exception Filters & Middleware"
    ],
    task: "Build structured, enterprise-grade backend services using NestJS (e.g. tvrepaircoimbatore.in).",
    expectedOutcome: "Develop scalable, maintainable, and type-safe server-side microservices and APIs."
  },
  {
    id: "rest-api",
    num: "07",
    title: "REST API Development",
    stage: "Backend",
    status: "Completed",
    topics: [
      "Standard HTTP verbs (GET, POST, PUT, PATCH, DELETE)",
      "Route parameters, query strings & request bodies",
      "HTTP status codes (2xx, 4xx, 5xx) semantics",
      "Standardized JSON response schemas",
      "Input validation, sanitization & security",
      "Token authentication (JWT, Bearer) & Google OAuth",
      "Role-Based Access Control (RBAC) authorization",
      "Automated testing & debugging using Postman"
    ],
    task: "Design, test, and document CRUD APIs and connect them with React/Next.js client portals.",
    expectedOutcome: "Design, develop, test, and document enterprise REST APIs with zero vulnerability tolerance."
  },
  {
    id: "postgres",
    num: "08",
    title: "PostgreSQL & SQL",
    stage: "Database",
    status: "Completed",
    topics: [
      "Relational Database Management Systems (RDBMS)",
      "Normalized schema design & relational tables",
      "Primary keys, foreign keys & unique constraints",
      "CRUD SQL queries (INSERT, SELECT, UPDATE, DELETE)",
      "Filtering & grouping (WHERE, ORDER BY, GROUP BY)",
      "Multi-table relational JOINs (INNER, LEFT, RIGHT)",
      "Aggregate functions (COUNT, SUM, AVG, MAX)",
      "Database indexing, B-Tree scans & query optimization",
      "Prisma ORM schema modeling & migrations",
      "ACID transactions & concurrency safety"
    ],
    task: "Design a normalized database schema and execute high-performance query operations with Prisma ORM.",
    expectedOutcome: "Architect scalable relational database schemas and optimize PostgreSQL queries for high loads."
  },
  {
    id: "integration",
    num: "09",
    title: "Full-Stack Integration",
    stage: "Full-Stack Integration",
    status: "Core Stack",
    topics: [
      "End-to-End Pipeline: Next.js → REST API → NestJS → PostgreSQL",
      "Interactive responsive user interface (React/Next.js)",
      "Client-side form state & live input validation",
      "Stateless JWT authentication & session lifecycle",
      "Secure API communication with error handling",
      "PostgreSQL relational persistence via Prisma ORM",
      "Containerized deployment via Docker & AWS EC2"
    ],
    task: "Build and deploy an integrated commercial full-stack platform (e.g., tvrepaircoimbatore.in lead marketplace).",
    expectedOutcome: "Deliver complete end-to-end full-stack web applications from database schema to interactive UI."
  }
];

