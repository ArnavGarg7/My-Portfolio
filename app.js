// Portfolio data
const portfolioData = {
  "portfolio_projects": [
    {
      "id": 1,
      "title": "E-Commerce Platform",
      "category": "web",
      "description": "Modern shopping platform with React and Node.js",
      "technologies": ["React", "Node.js", "MongoDB", "Stripe"],
      "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400"
    },
    {
      "id": 2,
      "title": "Mobile Banking App",
      "category": "mobile",
      "description": "Secure mobile banking solution with biometric auth",
      "technologies": ["React Native", "Express", "PostgreSQL"],
      "image": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400"
    },
    {
      "id": 3,
      "title": "Dashboard Analytics",
      "category": "web",
      "description": "Real-time analytics dashboard for business insights",
      "technologies": ["Vue.js", "D3.js", "Firebase"],
      "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400"
    },
    {
      "id": 4,
      "title": "AR Shopping Experience",
      "category": "ar",
      "description": "Augmented reality try-before-buy experience",
      "technologies": ["Three.js", "WebXR", "TensorFlow.js"],
      "image": "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400"
    }
  ],
  "testimonials": [
    {
      "id": 1,
      "name": "Sarah Johnson",
      "role": "CEO, TechCorp",
      "content": "Outstanding work! The team delivered a pixel-perfect website that exceeded our expectations. The attention to detail and modern design really made our brand stand out.",
      "avatar": "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
      "rating": 5
    },
    {
      "id": 2,
      "name": "Michael Chen",
      "role": "CTO, StartupX",
      "content": "Incredible technical expertise and creativity. The interactive animations and smooth user experience really impressed our users. Highly recommend!",
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      "rating": 5
    },
    {
      "id": 3,
      "name": "Emily Rodriguez",
      "role": "Product Manager, InnovateLab",
      "content": "Professional, responsive, and innovative. The dark mode implementation and scroll animations were exactly what we needed for our modern platform.",
      "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      "rating": 5
    }
  ],
  "services": [
    {
      "id": 1,
      "title": "Web Development",
      "description": "Modern, responsive websites built with cutting-edge technologies",
      "icon": "🌐",
      "features": ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatible"]
    },
    {
      "id": 2,
      "title": "Mobile Apps",
      "description": "Native and cross-platform mobile applications",
      "icon": "📱",
      "features": ["iOS & Android", "React Native", "Flutter", "PWA Development"]
    },
    {
      "id": 3,
      "title": "UI/UX Design",
      "description": "User-centered design with modern aesthetics and functionality",
      "icon": "🎨",
      "features": ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      "id": 4,
      "title": "E-Commerce",
      "description": "Complete online store solutions with payment integration",
      "icon": "🛒",
      "features": ["Payment Gateways", "Inventory Management", "Analytics", "Security"]
    }
  ],
  "statistics": [
    {
      "id": 1,
      "label": "Projects Completed",
      "value": 150,
      "suffix": "+",
      "icon": "🚀"
    },
    {
      "id": 2,
      "label": "Happy Clients",
      "value": 98,
      "suffix": "%",
      "icon": "😊"
    },
    {
      "id": 3,
      "label": "Years Experience",
      "value": 5,
      "suffix": "+",
      "icon": "💼"
    },
    {
      "id": 4,
      "label": "Code Commits",
      "value": 10000,
      "suffix": "+",
      "icon": "💻"
    }
  ],
  "skills": [
    {"name": "JavaScript", "level": 95},
    {"name": "React", "level": 90},
    {"name": "CSS/SCSS", "level": 92},
    {"name": "Node.js", "level": 85},
    {"name": "Python", "level": 80},
    {"name": "UI/UX Design", "level": 88}
  ],


};

// Global variables
let currentTestimonial = 0;
let testimonialInterval;
let portfolioFilter = 'all';

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    setupLoader();
    setupThemeToggle();
    setupNavigation();
    setupScrollAnimations();
    setupRippleEffects();
    populateContent();
    setupPortfolioFilter();
    setupTestimonialsCarousel();
    setupContactForm();
    setupMobileMenu();
}

// Loader functionality
function setupLoader() {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const loader = document.getElementById('loader');
            loader.classList.add('hidden');
            
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1500);
    });
}

// Theme Toggle
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-color-scheme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-color-scheme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-color-scheme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Navigation functionality
function setupNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    let lastScrollTop = 0;
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId.substring(1));
        });
    });
    
    // Active section highlighting and navbar hide/show
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
        
        // Update active navigation link
        updateActiveNavLink();
    });
    
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }
}

// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Scroll-triggered animations
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Animate skill bars
                if (entry.target.classList.contains('skill-item')) {
                    animateSkillBar(entry.target);
                }
                
                // Animate statistics counters
                if (entry.target.classList.contains('stat-item')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Animate skill bars
function animateSkillBar(skillItem) {
    const progressBar = skillItem.querySelector('.skill-progress');
    const percentage = skillItem.dataset.level;
    
    setTimeout(() => {
        progressBar.style.width = percentage + '%';
    }, 300);
}

// Animate counters
function animateCounter(statItem) {
    const valueElement = statItem.querySelector('.stat-value');
    const targetValue = parseInt(statItem.dataset.value);
    const suffix = statItem.dataset.suffix || '';
    const duration = 2000;
    const increment = targetValue / (duration / 16);
    
    let currentValue = 0;
    const counter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(counter);
        }
        valueElement.textContent = Math.floor(currentValue) + suffix;
    }, 16);
}

// Ripple effects
function setupRippleEffects() {
    const rippleElements = document.querySelectorAll('.ripple-effect');
    
    rippleElements.forEach(element => {
        element.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Populate content from data
function populateContent() {
    populateSkills();
    populateStatistics();
    populateServices();
    populatePortfolio();
    populateTestimonials();

}

// Populate skills
function populateSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    
    portfolioData.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item animate-on-scroll';
        skillItem.dataset.level = skill.level;
        
        skillItem.innerHTML = `
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-percentage">${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress"></div>
            </div>
        `;
        
        skillsGrid.appendChild(skillItem);
    });
}

// Populate statistics
function populateStatistics() {
    const statsGrid = document.getElementById('statsGrid');
    
    portfolioData.statistics.forEach(stat => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item animate-on-scroll';
        statItem.dataset.value = stat.value;
        statItem.dataset.suffix = stat.suffix;
        
        statItem.innerHTML = `
            <span class="stat-icon">${stat.icon}</span>
            <span class="stat-value">0</span>
            <span class="stat-label">${stat.label}</span>
        `;
        
        statsGrid.appendChild(statItem);
    });
}

// Populate services
function populateServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    
    portfolioData.services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card animate-on-scroll';
        
        const featuresHTML = service.features.map(feature => `<li>${feature}</li>`).join('');
        
        serviceCard.innerHTML = `
            <span class="service-icon">${service.icon}</span>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <ul class="service-features">
                ${featuresHTML}
            </ul>
        `;
        
        servicesGrid.appendChild(serviceCard);
    });
}

// Populate portfolio
function populatePortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    portfolioData.portfolio_projects.forEach(project => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item animate-on-scroll`;
        portfolioItem.dataset.category = project.category;
        
        const techHTML = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
        
        portfolioItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="portfolio-image">
            <div class="portfolio-content">
                <h3 class="portfolio-title">${project.title}</h3>
                <p class="portfolio-description">${project.description}</p>
                <div class="portfolio-tech">
                    ${techHTML}
                </div>
            </div>
        `;
        
        portfolioItem.addEventListener('click', () => openPortfolioModal(project));
        portfolioGrid.appendChild(portfolioItem);
    });
}
// Portfolio filter functionality
function setupPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Portfolio modal
function openPortfolioModal(project) {
    const modal = document.getElementById('portfolioModal');
    const modalBody = document.getElementById('modalBody');
    
    const techHTML = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
    
    modalBody.innerHTML = `
        <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;">
        <h2>${project.title}</h2>
        <p style="color: var(--color-text-secondary); margin-bottom: 20px;">${project.description}</p>
        <div style="margin-bottom: 20px;">
            <strong>Technologies:</strong>
            <div style="margin-top: 10px; display: flex; flex-wrap: wrap; gap: 8px;">
                ${techHTML}
            </div>
        </div>
        <p style="color: var(--color-text-secondary);">This project showcases modern web development practices with a focus on user experience and performance optimization.</p>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal functionality
document.getElementById('modalClose').addEventListener('click', closePortfolioModal);
document.querySelector('.modal-overlay').addEventListener('click', closePortfolioModal);

function closePortfolioModal() {
    const modal = document.getElementById('portfolioModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Populate testimonials
function populateTestimonials() {
    const testimonialsContainer = document.getElementById('testimonialsContainer');
    
    const track = document.createElement('div');
    track.className = 'testimonials-track';
    
    portfolioData.testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        
        testimonialCard.innerHTML = `
            <div class="testimonial-content">
                "${testimonial.content}"
            </div>
            <div class="testimonial-author">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p class="testimonial-role">${testimonial.role}</p>
                </div>
            </div>
        `;
        
        track.appendChild(testimonialCard);
    });
    
    testimonialsContainer.appendChild(track);
    
    // Create indicators
    const indicatorsContainer = document.getElementById('testimonialsIndicators');
    portfolioData.testimonials.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', () => goToTestimonial(index));
        indicatorsContainer.appendChild(indicator);
    });
}

// Testimonials carousel
function setupTestimonialsCarousel() {
    const prevButton = document.getElementById('testimonialsPrev');
    const nextButton = document.getElementById('testimonialsNext');
    
    prevButton.addEventListener('click', () => {
        currentTestimonial = currentTestimonial > 0 ? currentTestimonial - 1 : portfolioData.testimonials.length - 1;
        updateTestimonialCarousel();
    });
    
    nextButton.addEventListener('click', () => {
        currentTestimonial = currentTestimonial < portfolioData.testimonials.length - 1 ? currentTestimonial + 1 : 0;
        updateTestimonialCarousel();
    });
    
    // Auto-advance testimonials
    testimonialInterval = setInterval(() => {
        currentTestimonial = currentTestimonial < portfolioData.testimonials.length - 1 ? currentTestimonial + 1 : 0;
        updateTestimonialCarousel();
    }, 5000);
    
    // Pause auto-advance on hover
    const testimonialsSection = document.getElementById('testimonials');
    testimonialsSection.addEventListener('mouseenter', () => clearInterval(testimonialInterval));
    testimonialsSection.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(() => {
            currentTestimonial = currentTestimonial < portfolioData.testimonials.length - 1 ? currentTestimonial + 1 : 0;
            updateTestimonialCarousel();
        }, 5000);
    });
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialCarousel();
}

function updateTestimonialCarousel() {
    const track = document.querySelector('.testimonials-track');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentTestimonial);
    });
}

// Contact form
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Simulate form submission
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            submitButton.textContent = 'Message Sent!';
            submitButton.style.background = 'var(--color-success)';
            
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.background = '';
                this.reset();
            }, 2000);
        }, 1500);
    });
}

// Mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePortfolioModal();
    }
});

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js';
    document.head.appendChild(script);
}