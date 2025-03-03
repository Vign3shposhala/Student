document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        
        // Change icon based on menu state
        const icon = this.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Dark Mode Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.querySelector('i').classList.remove('fa-moon');
        themeToggle.querySelector('i').classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Update icon
        const icon = this.querySelector('i');
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Animate sections on scroll
    const sections = document.querySelectorAll('.section');
    
    // Initial check for sections in viewport
    checkSections();
    
    // Check sections on scroll
    window.addEventListener('scroll', checkSections);
    
    function checkSections() {
        const triggerBottom = window.innerHeight * 0.8;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
                section.classList.add('animate__animated');
                section.classList.add('animate__fadeInUp');
            }
        });
    }
    
    // View More Button Functionality
    document.querySelectorAll('.view-more-btn').forEach(button => {
        button.addEventListener('click', function() {
            const section = this.closest('.section');
            const category = section.getAttribute('data-category');
            
            // Toggle button text and icon
            if (this.innerHTML.includes('View More')) {
                this.innerHTML = 'View Less <i class="fas fa-chevron-up"></i>';
                
                // Add more items based on category
                if (category === 'learning') {
                    addMoreLearningPlatforms(section);
                } else if (category === 'coding') {
                    addMoreCodingPractice(section);
                } else if (category === 'youtube') {
                    addMoreYoutubeChannels(section);
                }
            } else {
                this.innerHTML = 'View More <i class="fas fa-chevron-down"></i>';
                
                // Remove the additional items
                const cardContainer = section.querySelector('.card-container');
                const cards = cardContainer.querySelectorAll('.card');
                
                // Keep only the first 4 cards
                for (let i = 4; i < cards.length; i++) {
                    cards[i].remove();
                }
            }
        });
    });
    
    // Function to add more learning platforms
    function addMoreLearningPlatforms(section) {
        const cardContainer = section.querySelector('.card-container');
        
        const newPlatforms = [
            {
                image: 'https://cdn.pixabay.com/photo/2018/05/19/00/53/online-3412473_1280.jpg',
                title: 'edX',
                description: 'Free courses from top universities and institutions around the world.',
                link: 'https://www.edx.org/'
            },
            {
                image: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg',
                title: 'Coursera',
                description: 'Online courses and specializations from top universities and companies.',
                link: 'https://www.coursera.org/'
            },
            {
                image: 'https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg',
                title: 'freeCodeCamp',
                description: 'Learn to code with free interactive tutorials and projects.',
                link: 'https://www.freecodecamp.org/'
            },
            {
                image: 'https://cdn.pixabay.com/photo/2018/03/27/12/16/analytics-3265840_1280.jpg',
                title: 'MIT OpenCourseWare',
                description: 'Free access to MIT course materials for self-study.',
                link: 'https://ocw.mit.edu/'
            }
        ];
        
        addNewCards(cardContainer, newPlatforms);
    }
    
    // Function to add more coding practice sites
    function addMoreCodingPractice(section) {
        const cardContainer = section.querySelector('.card-container');
        
        const newPractices = [
            {
                image: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg',
                title: 'TopCoder',
                description: 'Competitive programming challenges and contests for developers.',
                link: 'https://www.topcoder.com/'
            },
            {
                image: 'https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg',
                title: 'Project Euler',
                description: 'Series of challenging mathematical/computer programming problems.',
                link: 'https://projecteuler.net/'
            },
            {
                image: 'https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png',
                title: 'CodeSignal',
                description: 'Practice coding challenges and prepare for technical interviews.',
                link: 'https://codesignal.com/'
            },
            {
                image: 'https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550_1280.jpg',
                title: 'Coderbyte',
                description: 'Improve your coding skills with challenges and interview prep.',
                link: 'https://coderbyte.com/'
            }
        ];
        
        addNewCards(cardContainer, newPractices);
    }
    
    // Function to add more YouTube channels
    function addMoreYoutubeChannels(section) {
        const cardContainer = section.querySelector('.card-container');
        
        const newChannels = [
            {
                image: 'https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg',
                title: 'CS Dojo',
                description: 'Programming and computer science concepts explained clearly.',
                link: 'https://www.youtube.com/c/CSDojo'
            },
            {
                image: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg',
                title: 'Programming with Mosh',
                description: 'Comprehensive programming courses and tutorials.',
                link: 'https://www.youtube.com/c/ProgrammingwithMosh'
            },
            {
                image: 'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg',
                title: 'Academind',
                description: 'Web development tutorials and courses on various technologies.',
                link: 'https://www.youtube.com/c/Academind'
            },
            {
                image: 'https://cdn.pixabay.com/photo/2018/03/27/12/16/analytics-3265840_1280.jpg',
                title: 'Web Dev Simplified',
                description: 'Web development concepts explained in a simplified manner.',
                link: 'https://www.youtube.com/c/WebDevSimplified'
            }
        ];
        
        addNewCards(cardContainer, newChannels);
    }
    
    // Helper function to add new cards
    function addNewCards(container, items) {
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card animate__animated animate__fadeIn';
            
            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="${item.link}" target="_blank" class="card-link">Visit Site <i class="fas fa-external-link-alt"></i></a>
            `;
            
            container.appendChild(card);
        });
    }
    
    // Newsletter Form Submission (prevent default for demo)
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                // Show success message
                const formContainer = this.parentElement;
                this.style.display = 'none';
                
                const successMessage = document.createElement('div');
                successMessage.className = 'animate__animated animate__fadeIn';
                successMessage.innerHTML = `
                    <div style="background-color: rgba(255,255,255,0.2); padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                        <i class="fas fa-check-circle" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                        <h3>Thank You!</h3>
                        <p>You've been successfully subscribed to our newsletter.</p>
                    </div>
                `;
                
                formContainer.appendChild(successMessage);
                
                // Reset form
                emailInput.value = '';
            }
        });
    }
    
    // Add hover effects to cards
    document.querySelectorAll('.card, .strategy-card, .tool-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = 'var(--shadow-lg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Add animation to CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.classList.add('animate__animated', 'animate__pulse');
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            this.classList.remove('animate__animated', 'animate__pulse');
        });
        
        ctaButton.addEventListener('click', function() {
            // Scroll to first section
            const firstSection = document.querySelector('.section');
            if (firstSection) {
                window.scrollTo({
                    top: firstSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    }
});