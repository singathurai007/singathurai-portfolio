# Singathurai C — Portfolio Website

Personal portfolio of **Singathurai C**, a Software · Cloud · DevOps Engineer.

**Live:** https://singathurai-portfolio.onrender.com/

## About

A fast, dependency-free portfolio built with plain HTML, CSS and JavaScript.
No frameworks, no build step — just open `index.html`.

## Features

- Responsive layout with a collapsible mobile navigation menu
- Dark / light theme toggle with `localStorage` persistence (no flash on load)
- Project screenshot lightbox with keyboard navigation (`Esc`, `←`, `→`)
- Interactive certificate showcase with detailed metadata
- Scroll-spy navigation, reveal-on-scroll animations and back-to-top control
- Accessibility: ARIA attributes, visible focus states, `prefers-reduced-motion` support
- SEO: Open Graph / Twitter cards, JSON-LD Person structured data

## Sections

`Home` · `About` · `Skills` · `Projects` · `Certifications` · `Contact`

## Featured Projects

| Project | Stack |
| --- | --- |
| DevSecOps + GitOps Pipeline | Jenkins, Docker, SonarQube, Trivy, GitOps |
| Terraform + Jenkins AWS | AWS, Terraform, Jenkins, EC2 |
| Prometheus + Grafana Monitoring | Prometheus, Grafana, Docker, Linux |
| GitHub Actions EC2 Deployment | GitHub Actions, AWS EC2, Nginx, CI/CD |

## Tech Stack

- **Software Engineering:** JavaScript, React, Node.js, HTML5, CSS3, Python, Java
- **Cloud Engineering:** AWS (EC2, S3, IAM, VPC), Linux
- **DevOps Engineering:** Docker, Kubernetes, Jenkins, Terraform, Ansible, GitHub Actions, Prometheus, Grafana

## Project Structure

```
.
├── index.html          # Page markup
├── style.css           # Theming and responsive styles
├── script.js           # Menu, theme, gallery, certificates
├── images/             # Profile, logo, project and certificate images
├── certificates/       # Certificate PDFs
├── resume.pdf          # Downloadable resume
└── .github/workflows/  # GitHub Pages deployment
```

## Run Locally

```bash
git clone https://github.com/singathurai007/singathurai-portfolio.git
cd singathurai-portfolio
# open index.html in a browser, or serve it:
python -m http.server 8000
```

## Deployment

The site is a static bundle with no build step, so it can be hosted anywhere.

- **Primary host:** https://singathurai-portfolio.onrender.com/
- Every push to `main` also triggers the **Deploy Portfolio to GitHub Pages** workflow,
  which publishes a mirror to GitHub Pages.

## Contact

- GitHub: https://github.com/singathurai007
- LinkedIn: https://www.linkedin.com/in/singathurai-c-168a49357
- Email: cmsingathurai@gmail.com
