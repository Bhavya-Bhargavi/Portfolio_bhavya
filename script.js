// Interactive Features & AI Chat Console for Bhavya.engineer

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Theme Toggle (Light / Dark Mode)
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark'; // Default to dark for premium look

    // Set initial theme
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        updateThemeIcon('light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'light') {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                updateThemeIcon('dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                updateThemeIcon('light');
            }
        });
    }

    function updateThemeIcon(theme) {
        if (!themeToggleBtn) return;
        if (theme === 'dark') {
            // Sun icon for dark mode (to switch to light)
            themeToggleBtn.innerHTML = `
                <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
            `;
        } else {
            // Moon icon for light mode (to switch to dark)
            themeToggleBtn.innerHTML = `
                <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            `;
        }
    }


    // ==========================================
    // 2. Mobile Menu Toggle Drawer
    // ==========================================
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });


    // ==========================================
    // 3. Project Filter Interaction
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Toggle active filter button states
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active'); // Cleaned up typo here

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const attr = card.getAttribute('data-categories');
                const categories = attr ? attr.split(' ') : [];
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.style.display = 'flex';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    // ==========================================
    // 4. Sticky Header Shadow on Scroll
    // ==========================================
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.style.boxShadow = 'var(--shadow-md)';
                header.style.padding = '0.85rem 0';
            } else {
                header.style.boxShadow = 'none';
                header.style.padding = '1.25rem 0';
            }
        });
    }


    // ==========================================
    // 5. Scroll Active Navigation Highlights
    // ==========================================
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 180)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });


    // ==========================================
    // 6. AI Agent Chat Console (Mapped to Bhavya's Profile)
    // ==========================================
    const chatMessages = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const pillContainer = document.getElementById('pill-container');

    // AI Response Knowledge Base mapped exactly to Bhavya's real profile details
    const aiKnowledge = {
        about: "Bhavya Bhargavi is an accomplished Senior Software Engineer with over 8 years of professional web application engineering experience. She specializes in creating responsive, clean-coded interfaces and scalable architectures across Telecom, Healthcare, and E-commerce landscapes.",
        skills: "Bhavya's technical expertise covers full-stack web capabilities:\n• Frontend: ReactJS (4+ Yrs), Redux, TypeScript, Micro Frontends, JavaScript (ES6+), Material-UI, Bootstrap, HTML5/CSS3, jQuery\n• Backend: Node.js (2+ Yrs), Express JS, Python 3, FastAPI, RESTful APIs\n• Databases: PostgreSQL, MySQL\n• Environments: AWS, Agile/Scrum lifecycles, Cross-browser optimizations",
        experience: "Bhavya's career timeline reflects senior engineering roles at top firms:\n1. Capgemini (Senior Software Engineer): Developing scalable component systems for telecom ops.\n2. Infinite Computer Solutions (Senior Software Developer): Contracted for Verizon Corp. and Elevance Health (Anthem).\n3. Agreeya Solutions (Software Developer): Revamped e-commerce UIs.\n4. RIG Enterprise Applications (Web Developer): Managed full production life cycles.\n5. Graphycurry & Cloudmint Technologies: Early responsive design tracks.",
        projects: "Key enterprise and laboratory products delivered by Bhavya:\n1. Verizon NPP Portal: Programmed a decoupled micro frontend architecture using Python (FastAPI) and modular UI components, driving a 30% reduction in development cycles.\n2. Verizon ONEOPS: Built real-time operations dashboard portals using React and Material-UI backed by AWS cloud resources.\n3. Anthem Healthcare: Built feature sets handling medical data configurations to secure navigation tracks.\n4. Trademore: Upgraded frontend UI cards for a prominent tech trade-in market in the US.",
        ai_labs: "Beyond enterprise tracks, Bhavya designs interactive AI-Integrated Frontend Workflows:\n• Connects React-based interfaces with LLM-powered backend instances.\n• Builds Context-Aware RAG Sandboxes featuring text chunking, file ingestion, and vector embeddings.\n• Wireframes automated automation chains using tools like n8n and integrations like Google Sheets API.",
        education: "Bhavya holds the following qualifications:\n• Masters of Business Administration (MBA) from IGNOU (70% aggregate)\n• Bachelor of Science (B.Sc) from Andhra University (74% aggregate)\n• Multilingual fluency: English, Hindi, and Telugu.",
        contact: "You can reach Bhavya directly through:\n• Phone: +91 8618600812\n• Email: bhavyarobbi90@gmail.com\n• LinkedIn: linkedin.com/in/Bhavyasadhukhan\nShe is located in India and ready to discuss senior opportunities!",
        default: "Excellent inquiry! Bhavya Bhargavi is a Senior Software Engineer specializing in ReactJS, TypeScript, Node.js, and Micro Frontends. To learn more, feel free to ask about her 'skills', 'experience', 'projects', 'AI workflows', or 'contact' parameters."
    };

    // Keyword mapping specifically customized for your profile's focus terms
    const keywordMapping = {
        'bhavya': 'about', 'who': 'about', 'profile': 'about', 'bhargavi': 'about',
        'skills': 'skills', 'tech': 'skills', 'stack': 'skills', 'frontend': 'skills', 'backend': 'skills', 'react': 'skills', 'node': 'skills', 'typescript': 'skills',
        'experience': 'experience', 'career': 'experience', 'timeline': 'experience', 'capgemini': 'experience', 'infinite': 'experience',
        'projects': 'projects', 'work': 'projects', 'verizon': 'projects', 'npp': 'projects', 'oneops': 'projects', 'anthem': 'projects', 'trademore': 'projects',
        'ai': 'ai_labs', 'rag': 'ai_labs', 'llm': 'ai_labs', 'n8n': 'ai_labs', 'embeddings': 'ai_labs', 'automation': 'ai_labs',
        'education': 'education', 'degree': 'education', 'mba': 'education', 'bsc': 'education', 'university': 'education',
        'contact': 'contact', 'phone': 'contact', 'email': 'contact', 'linkedin': 'contact', 'reach': 'contact', 'call': 'contact'
    };

    // Form submit listener
    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!chatInput) return;
            const text = chatInput.value.trim();
            if (!text) return;

            // Output user bubble
            appendMessage('user', text, 'YOU');
            chatInput.value = '';

            // Handle reply
            processResponse(text);
        });
    }

    // Pill clicks
    if (pillContainer) {
        pillContainer.addEventListener('click', (e) => {
            const button = e.target.closest('.pill-btn');
            if (!button) return;

            const text = button.getAttribute('data-query');
            if (text) {
                appendMessage('user', text, 'YOU');
                processResponse(text);
            }
        });
    }

    // Append message element helper
    function appendMessage(sender, text, label) {
        if (!chatMessages) return;
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', sender);
        messageDiv.innerHTML = `<span class="msg-sender">[${label}]:</span> <span class="msg-text"></span>`;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        const textSpan = messageDiv.querySelector('.msg-text');
        
        if (sender === 'user' || sender === 'system') {
            if (textSpan) textSpan.textContent = text;
        } else {
            // Streaming/Typing effect for AI response
            if (textSpan) streamText(textSpan, text);
        }
    }

    // Text streaming character by character
    function streamText(element, text) {
        let index = 0;
        // Disable form input while typing
        if (chatInput) chatInput.disabled = true;
        
        function typeChar() {
            if (index < text.length) {
                const char = text.charAt(index);
                if (char === '\n') {
                    element.appendChild(document.createElement('br'));
                } else {
                    element.append(char);
                }
                index++;
                if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
                setTimeout(typeChar, 8); // Fast, realistic stream rate
            } else {
                if (chatInput) {
                    chatInput.disabled = false;
                    chatInput.focus();
                }
            }
        }
        typeChar();
    }

    // Select response based on keywords
    function processResponse(text) {
        if (!chatMessages) return;
        
        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('chat-message', 'system', 'typing-indicator');
        typingIndicator.innerHTML = `<span class="msg-sender">[Bhavya_AI]:</span> <em>thinking...</em>`;
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(() => {
            // Remove typing indicator
            typingIndicator.remove();

            const sanitizedText = text.toLowerCase().replace(/[^\w\s]/g, '');
            const words = sanitizedText.split(/\s+/);
            
            let matchedKey = 'default';
            
            // Look for matching keywords
            for (let word of words) {
                if (keywordMapping[word]) {
                    matchedKey = keywordMapping[word];
                    break;
                }
            }

            // Also check for composite sub-phrases if no single word matched
            if (matchedKey === 'default') {
                if (sanitizedText.includes('who is') || sanitizedText.includes('about')) {
                    matchedKey = 'about';
                } else if (sanitizedText.includes('tech') || sanitizedText.includes('skill') || sanitizedText.includes('stack')) {
                    matchedKey = 'skills';
                } else if (sanitizedText.includes('contact') || sanitizedText.includes('reach') || sanitizedText.includes('mail')) {
                    matchedKey = 'contact';
                } else if (sanitizedText.includes('verizon') || sanitizedText.includes('capgemini') || sanitizedText.includes('anthem')) {
                    matchedKey = 'experience';
                } else if (sanitizedText.includes('project') || sanitizedText.includes('portfolio') || sanitizedText.includes('npp')) {
                    matchedKey = 'projects';
                } else if (sanitizedText.includes('ai') || sanitizedText.includes('rag') || sanitizedText.includes('automation')) {
                    matchedKey = 'ai_labs';
                }
            }

            const responseText = aiKnowledge[matchedKey];
            appendMessage('ai', responseText, 'Bhavya_AI');

        }, 550); // Simulated latency
    }


   // ==========================================
    // 7. Contact Form Submission (Live Web3Forms Integration)
    // ==========================================
    const contactForm = document.getElementById('contact-form-element');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.form-submit-btn');
            const originalBtnText = submitBtn ? submitBtn.textContent : 'Send Message';
            
            // Set UI sending state
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending Message...';
            }
            
            if (formFeedback) {
                formFeedback.style.display = 'none';
                formFeedback.className = 'form-feedback-msg';
            }

            // Capture form element inputs dynamically
            const formData = new FormData(contactForm);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            // POST form parameters to endpoint API
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let res = await response.json();
                if (response.status === 200) {
                    // Success UI Feedback
                    if (formFeedback) {
                        formFeedback.textContent = 'Thank you! Your message was sent successfully. Bhavya will get back to you shortly.';
                        formFeedback.className = 'form-feedback-msg success';
                        formFeedback.style.display = 'block';
                    }
                    contactForm.reset(); // Clear input boxes
                } else {
                    // Endpoint error feedback
                    if (formFeedback) {
                        formFeedback.textContent = res.message || 'Something went wrong. Please try again.';
                        formFeedback.className = 'form-feedback-msg error';
                        formFeedback.style.display = 'block';
                    }
                }
            })
            .catch(error => {
                // Client network error fallback
                if (formFeedback) {
                    formFeedback.textContent = 'Network error. Could not reach server.';
                    formFeedback.className = 'form-feedback-msg error';
                    formFeedback.style.display = 'block';
                }
            })
            .then(() => {
                // Restore button state
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                }
                // Automatically clear message banner after 6 seconds
                setTimeout(() => {
                    if (formFeedback) formFeedback.style.display = 'none';
                }, 6000);
            });
        });
    }
});