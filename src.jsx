<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hawaii Juice Bar - Fresh Tropical Juices & Smoothies</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            background: #fafafa;
        }
        
        /* Navigation */
        .nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            z-index: 1000;
            padding: 20px 0;
        }
        
        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: #16a34a;
        }
        
        .nav-links {
            display: flex;
            gap: 40px;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        
        .nav-links a {
            text-decoration: none;
            color: #4b5563;
            font-weight: 500;
            transition: color 0.3s ease;
        }
        
        .nav-links a:hover {
            color: #16a34a;
        }
        
        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: white;
            position: relative;
            overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><radialGradient id="grad1" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:rgb(34,197,94);stop-opacity:0.1" /><stop offset="100%" style="stop-color:rgb(34,197,94);stop-opacity:0" /></radialGradient></defs><circle cx="20" cy="30" r="15" fill="url(%23grad1)"/><circle cx="80" cy="70" r="20" fill="url(%23grad1)"/></svg>');
            animation: float 15s infinite ease-in-out;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        .hero-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 40px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
            position: relative;
            z-index: 1;
        }
        
        .hero-text h1 {
            font-size: 4rem;
            font-weight: 700;
            margin-bottom: 24px;
            line-height: 1.1;
            background: linear-gradient(135deg, #ffffff 0%, #22c55e 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .hero-text p {
            font-size: 1.25rem;
            color: #cbd5e1;
            margin-bottom: 40px;
            font-weight: 300;
        }
        
        .hero-buttons {
            display: flex;
            gap: 20px;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
            color: white;
            padding: 16px 32px;
            border: none;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 40px rgba(34, 197, 94, 0.3);
        }
        
        .btn-secondary {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            padding: 16px 32px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            backdrop-filter: blur(10px);
        }
        
        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }
        
        .hero-visual {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }
        
        .juice-glass-svg {
            width: 300px;
            height: 400px;
            filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2));
        }
        
        /* Menu Section */
        .section {
            padding: 120px 0;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 40px;
        }
        
        .section-header {
            text-align: center;
            margin-bottom: 80px;
        }
        
        .section-header h2 {
            font-size: 3rem;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 16px;
        }
        
        .section-header p {
            font-size: 1.25rem;
            color: #6b7280;
            font-weight: 300;
        }
        
        .menu-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 32px;
        }
        
        .menu-card {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 24px;
            padding: 40px;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }
        
        .menu-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #22c55e, #3b82f6, #8b5cf6);
            transform: scaleX(0);
            transition: transform 0.4s ease;
        }
        
        .menu-card:hover::before {
            transform: scaleX(1);
        }
        
        .menu-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 32px 64px rgba(0, 0, 0, 0.1);
            background: rgba(255, 255, 255, 0.95);
        }
        
        .menu-icon {
            font-size: 3rem;
            margin-bottom: 24px;
            display: block;
        }
        
        .menu-card h3 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 12px;
        }
        
        .menu-card p {
            color: #6b7280;
            margin-bottom: 24px;
            font-weight: 400;
        }
        
        .menu-price {
            font-size: 1.5rem;
            font-weight: 700;
            color: #16a34a;
        }
        
        /* About Section */
        .about {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }
        
        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
        }
        
        .about-text h2 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 32px;
            text-align: left;
        }
        
        .about-text p {
            font-size: 1.125rem;
            color: #4b5563;
            margin-bottom: 24px;
            font-weight: 400;
        }
        
        .about-visual {
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(20px);
            border-radius: 32px;
            padding: 80px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .about-visual-icon {
            font-size: 8rem;
            margin-bottom: 24px;
            display: block;
        }
        
        /* Contact Section */
        .contact {
            background: #1a1a1a;
            color: white;
        }
        
        .contact .section-header h2 {
            color: white;
        }
        
        .contact .section-header p {
            color: #9ca3af;
        }
        
        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
            margin-bottom: 80px;
        }
        
        .contact-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 40px;
            text-align: center;
            transition: all 0.3s ease;
        }
        
        .contact-card:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-4px);
        }
        
        .contact-icon {
            font-size: 2.5rem;
            margin-bottom: 20px;
            display: block;
            color: #22c55e;
        }
        
        .contact-card h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 16px;
        }
        
        .social-links {
            display: flex;
            justify-content: center;
            gap: 24px;
        }
        
        .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            color: white;
            text-decoration: none;
            font-size: 1.5rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }
        
        .social-link:hover {
            background: #22c55e;
            border-color: #22c55e;
            transform: translateY(-2px);
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .nav-container {
                padding: 0 20px;
            }
            
            .nav-links {
                display: none;
            }
            
            .hero-content {
                grid-template-columns: 1fr;
                gap: 40px;
                padding: 0 20px;
                text-align: center;
            }
            
            .hero-text h1 {
                font-size: 2.5rem;
            }
            
            .hero-buttons {
                justify-content: center;
                flex-wrap: wrap;
            }
            
            .container {
                padding: 0 20px;
            }
            
            .section-header h2 {
                font-size: 2rem;
            }
            
            .menu-grid {
                grid-template-columns: 1fr;
            }
            
            .about-content {
                grid-template-columns: 1fr;
                gap: 40px;
            }
            
            .about-text h2 {
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="nav">
        <div class="nav-container">
            <div class="logo">🌺 Hawaii Juice Bar</div>
            <ul class="nav-links">
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <div class="hero-text">
                <h1>Fresh Tropical Juices & Smoothies</h1>
                <p>Experience the taste of paradise with our premium selection of fresh juices and smoothies, crafted with love and the spirit of Aloha.</p>
                <div class="hero-buttons">
                    <a href="#menu" class="btn-primary">Explore Menu</a>
                    <a href="#about" class="btn-secondary">Learn More</a>
                </div>
            </div>
            <div class="hero-visual">
                <svg class="juice-glass-svg" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
                    <!-- Glass -->
                    <defs>
                        <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:rgba(255,255,255,0.3);stop-opacity:1" />
                            <stop offset="100%" style="stop-color:rgba(255,255,255,0.1);stop-opacity:1" />
                        </linearGradient>
                        <linearGradient id="juiceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#ff6b35;stop-opacity:1" />
                            <stop offset="50%" style="stop-color:#f7931e;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#ffd23f;stop-opacity:1" />
                        </linearGradient>
                    </defs>
                    
                    <!-- Juice -->
                    <ellipse cx="100" cy="220" rx="45" ry="8" fill="url(#juiceGradient)" opacity="0.8"/>
                    <rect x="55" y="120" width="90" height="100" fill="url(#juiceGradient)" rx="5"/>
                    <ellipse cx="100" cy="120" rx="45" ry="8" fill="#ffed4e"/>
                    
                    <!-- Glass container -->
                    <path d="M 60 80 L 60 240 Q 60 260 80 260 L 120 260 Q 140 260 140 240 L 140 80 Z" 
                          fill="url(#glassGradient)" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
                    
                    <!-- Glass rim -->
                    <ellipse cx="100" cy="80" rx="40" ry="6" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="3"/>
                    
                    <!-- Straw -->
                    <rect x="120" y="40" width="4" height="100" fill="#ff6b6b" rx="2"/>
                    <rect x="118" y="35" width="8" height="15" fill="#ff6b6b" rx="4"/>
                    
                    <!-- Fruit garnish -->
                    <circle cx="85" cy="75" r="8" fill="#ff6b35"/>
                    <circle cx="115" cy="75" r="6" fill="#4ade80"/>
                    <path d="M 85 67 Q 90 60 95 67" stroke="#22c55e" stroke-width="2" fill="none"/>
                    
                    <!-- Bubbles -->
                    <circle cx="80" cy="150" r="3" fill="rgba(255,255,255,0.6)"/>
                    <circle cx="110" cy="180" r="2" fill="rgba(255,255,255,0.4)"/>
                    <circle cx="90" cy="200" r="2.5" fill="rgba(255,255,255,0.5)"/>
                </svg>
            </div>
        </div>
    </section>

    <!-- Menu Section -->
    <section class="section" id="menu">
        <div class="container">
            <div class="section-header">
                <h2>Our Signature Menu</h2>
                <p>Handcrafted with the finest tropical ingredients</p>
            </div>
            <div class="menu-grid">
                <div class="menu-card">
                    <span class="menu-icon">🥭</span>
                    <h3>Tropical Mango Smoothie</h3>
                    <p>Fresh mango, pineapple, coconut milk, and a touch of lime for the perfect tropical escape</p>
                    <div class="menu-price">$8.50</div>
                </div>
                
                <div class="menu-card">
                    <span class="menu-icon">🍍</span>
                    <h3>Pineapple Paradise</h3>
                    <p>Pure pineapple juice with fresh mint and coconut water, refreshing and energizing</p>
                    <div class="menu-price">$7.25</div>
                </div>
                
                <div class="menu-card">
                    <span class="menu-icon">🥥</span>
                    <h3>Coconut Dream</h3>
                    <p>Fresh coconut water, banana, and tropical fruits blended to creamy perfection</p>
                    <div class="menu-price">$7.75</div>
                </div>
                
                <div class="menu-card">
                    <span class="menu-icon">🍓</span>
                    <h3>Berry Blast</h3>
                    <p>Mixed berries, banana, and coconut milk packed with antioxidants and flavor</p>
                    <div class="menu-price">$8.00</div>
                </div>
                
                <div class="menu-card">
                    <span class="menu-icon">🥬</span>
                    <h3>Green Goddess</h3>
                    <p>Spinach, kale, apple, cucumber, and lemon for the ultimate health boost</p>
                    <div class="menu-price">$9.00</div>
                </div>
                
                <div class="menu-card">
                    <span class="menu-icon">🍊</span>
                    <h3>Sunrise Special</h3>
                    <p>Fresh orange, carrot, ginger, and turmeric to energize your morning</p>
                    <div class="menu-price">$7.50</div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="section about" id="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2>Crafted with Aloha</h2>
                    <p>At Hawaii Juice Bar, we believe that every sip should transport you to a tropical paradise. Our commitment to quality means we source only the freshest, most vibrant ingredients.</p>
                    <p>From hand-picked tropical fruits to locally sourced vegetables, every drink is a celebration of nature's bounty. We're not just serving beverages – we're sharing the spirit of Aloha, one glass at a time.</p>
                    <p>Join our ohana and discover why Hawaii Juice Bar has become the island's favorite destination for fresh, healthy, and delicious drinks.</p>
                </div>
                <div class="about-visual">
                    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <!-- Pineapple -->
                        <defs>
                            <linearGradient id="pineappleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#ffd23f;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#ff6b35;stop-opacity:1" />
                            </linearGradient>
                        </defs>
                        <ellipse cx="100" cy="130" rx="30" ry="45" fill="url(#pineappleGradient)"/>
                        <!-- Pineapple pattern -->
                        <path d="M 80 110 L 120 110 M 75 125 L 125 125 M 80 140 L 120 140 M 75 155 L 125 155" 
                              stroke="#e97317" stroke-width="2"/>
                        <path d="M 90 100 L 90 170 M 100 100 L 100 170 M 110 100 L 110 170" 
                              stroke="#e97317" stroke-width="2"/>
                        <!-- Pineapple leaves -->
                        <path d="M 85 85 Q 90 70 95 85 M 95 85 Q 100 70 105 85 M 105 85 Q 110 70 115 85" 
                              stroke="#22c55e" stroke-width="3" fill="none"/>
                        
                        <!-- Coconut -->
                        <circle cx="60" cy="80" r="20" fill="#8b4513"/>
                        <ellipse cx="60" cy="75" rx="8" ry="3" fill="#d2691e"/>
                        <circle cx="55" cy="75" r="2" fill="#654321"/>
                        <circle cx="60" cy="75" r="2" fill="#654321"/>
                        <circle cx="65" cy="75" r="2" fill="#654321"/>
                        
                        <!-- Mango -->
                        <ellipse cx="140" cy="90" rx="18" ry="25" fill="#ff6b35" transform="rotate(15 140 90)"/>
                        <ellipse cx="140" cy="90" rx="15" ry="22" fill="#ffa726" transform="rotate(15 140 90)"/>
                        
                        <!-- Leaves decoration -->
                        <path d="M 40 40 Q 50 30 60 40 Q 50 50 40 40" fill="#22c55e"/>
                        <path d="M 140 40 Q 150 30 160 40 Q 150 50 140 40" fill="#22c55e"/>
                    </svg>
                    <h3>Island Fresh</h3>
                    <p>Made with love in paradise</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="section contact" id="contact">
        <div class="container">
            <div class="section-header">
                <h2>Visit Our Paradise</h2>
                <p>Come experience the taste of the islands</p>
            </div>
            <div class="contact-grid">
                <div class="contact-card">
                    <span class="contact-icon">📍</span>
                    <h3>Location</h3>
                    <p>123 Aloha Street<br>Honolulu, HI 96815</p>
                </div>
                
                <div class="contact-card">
                    <span class="contact-icon">⏰</span>
                    <h3>Hours</h3>
                    <p>Mon-Sat: 7AM - 8PM<br>Sunday: 8AM - 6PM</p>
                </div>
                
                <div class="contact-card">
                    <span class="contact-icon">📞</span>
                    <h3>Contact</h3>
                    <p>(808) 555-JUICE<br>hello@hawaiijuicebar.com</p>
                </div>
            </div>
            
            <div class="social-links">
                <a href="https://www.instagram.com/hawaiijuicebar/" target="_blank" rel="noopener noreferrer" class="social-link">📷</a>
                <a href="#" class="social-link">📘</a>
                <a href="#" class="social-link">🐦</a>
            </div>
        </div>
    </section>

    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll effect to navigation
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                nav.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        });

        // Add intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe menu cards for animation
        document.querySelectorAll('.menu-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9849e5227445982b',t:'MTc1ODc5NjczOS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
