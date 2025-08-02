// Main JavaScript functionality

/* ===================================
   PRODUCT DATA STRUCTURE
   =================================== */

// Product data following the design model structure
const productsData = {
    jugos: [
        {
            id: 'jugo-naranja',
            name: 'Jugo de Naranja',
            description: 'Jugo 100% natural de naranjas frescas, rico en vitamina C',
            price: 15.00,
            category: 'jugos',
            image: './images/products/jugo-naranja.jpg',
            badges: ['100% Natural', 'Popular'],
            available: true,
            ingredients: ['Naranjas frescas', 'Sin azúcar añadida']
        },
        {
            id: 'jugo-manzana',
            name: 'Jugo de Manzana',
            description: 'Delicioso jugo natural de manzanas rojas y verdes',
            price: 14.00,
            category: 'jugos',
            image: './images/products/jugo-manzana.jpg',
            badges: ['100% Natural'],
            available: true,
            ingredients: ['Manzanas rojas', 'Manzanas verdes', 'Sin conservantes']
        },
        {
            id: 'jugo-zanahoria',
            name: 'Jugo de Zanahoria',
            description: 'Nutritivo jugo de zanahoria fresca, ideal para la salud',
            price: 16.00,
            category: 'jugos',
            image: './images/products/jugo-zanahoria.jpg',
            badges: ['100% Natural', 'Nutritivo'],
            available: true,
            ingredients: ['Zanahorias frescas', 'Jengibre natural']
        },
        {
            id: 'jugo-verde',
            name: 'Jugo Verde Detox',
            description: 'Mezcla energizante de vegetales verdes y frutas',
            price: 18.00,
            category: 'jugos',
            image: './images/products/jugo-verde.jpg',
            badges: ['100% Natural', 'Detox', 'Popular'],
            available: true,
            ingredients: ['Espinaca', 'Apio', 'Manzana verde', 'Limón', 'Jengibre']
        },
        {
            id: 'jugo-mixto',
            name: 'Jugo Mixto Tropical',
            description: 'Combinación tropical de piña, mango y maracuyá',
            price: 17.00,
            category: 'jugos',
            image: './images/products/jugo-mixto.jpg',
            badges: ['100% Natural', 'Tropical'],
            available: true,
            ingredients: ['Piña', 'Mango', 'Maracuyá', 'Sin azúcar añadida']
        }
    ],
    frappuccinos: [
        {
            id: 'frapp-vainilla',
            name: 'Frappuccino de Vainilla',
            description: 'Cremoso frappuccino con sabor a vainilla y crema batida',
            price: 22.00,
            category: 'frappuccinos',
            image: './images/products/frapp-vainilla.jpg',
            badges: ['Popular', 'Cremoso'],
            available: true
        },
        {
            id: 'frapp-chocolate',
            name: 'Frappuccino de Chocolate',
            description: 'Delicioso frappuccino con chocolate belga y crema',
            price: 24.00,
            category: 'frappuccinos',
            image: './images/products/frapp-chocolate.jpg',
            badges: ['Premium', 'Popular'],
            available: true
        },
        {
            id: 'frapp-caramelo',
            name: 'Frappuccino de Caramelo',
            description: 'Suave frappuccino con caramelo dulce y crema batida',
            price: 23.00,
            category: 'frappuccinos',
            image: './images/products/frapp-caramelo.jpg',
            badges: ['Dulce'],
            available: true
        },
        {
            id: 'frapp-fresa',
            name: 'Frappuccino de Fresa',
            description: 'Refrescante frappuccino con fresas naturales',
            price: 21.00,
            category: 'frappuccinos',
            image: './images/products/frapp-fresa.jpg',
            badges: ['Frutal', 'Refrescante'],
            available: true
        }
    ],
    cafe: [
        {
            id: 'cafe-americano',
            name: 'Café Americano',
            description: 'Café negro tradicional, fuerte y aromático',
            price: 12.00,
            category: 'cafe',
            image: './images/products/cafe-americano.jpg',
            badges: ['Clásico'],
            available: true
        },
        {
            id: 'cafe-latte',
            name: 'Café Latte',
            description: 'Suave combinación de espresso con leche vaporizada',
            price: 16.00,
            category: 'cafe',
            image: './images/products/cafe-latte.jpg',
            badges: ['Popular', 'Cremoso'],
            available: true
        },
        {
            id: 'cafe-cappuccino',
            name: 'Cappuccino',
            description: 'Espresso con leche vaporizada y espuma de leche',
            price: 15.00,
            category: 'cafe',
            image: './images/products/cafe-cappuccino.jpg',
            badges: ['Clásico', 'Espumoso'],
            available: true
        },
        {
            id: 'cafe-mocha',
            name: 'Café Mocha',
            description: 'Deliciosa mezcla de café, chocolate y crema batida',
            price: 18.00,
            category: 'cafe',
            image: './images/products/cafe-mocha.jpg',
            badges: ['Chocolate', 'Premium'],
            available: true
        },
        {
            id: 'cafe-frio',
            name: 'Café Frío',
            description: 'Café helado perfecto para días calurosos',
            price: 14.00,
            category: 'cafe',
            image: './images/products/cafe-frio.jpg',
            badges: ['Refrescante', 'Helado'],
            available: true
        }
    ]
};

// Business information data
const businessInfo = {
    name: 'Jugos Naturales Fresh',
    description: 'Jugos 100% naturales, frappuccinos y café de la más alta calidad',
    phone: '+52-555-123-4567',
    whatsapp: '+52-555-123-4567',
    address: {
        street: 'Av. Revolución 123, Col. Centro',
        city: 'Ciudad de México, CDMX',
        coordinates: { lat: 19.4326, lng: -99.1332 }
    },
    hours: {
        'Lunes': { open: '07:00', close: '20:00' },
        'Martes': { open: '07:00', close: '20:00' },
        'Miércoles': { open: '07:00', close: '20:00' },
        'Jueves': { open: '07:00', close: '20:00' },
        'Viernes': { open: '07:00', close: '21:00' },
        'Sábado': { open: '08:00', close: '21:00' },
        'Domingo': { open: '08:00', close: '19:00' }
    },
    socialMedia: {
        instagram: '@jugosnaturalesfresh',
        facebook: 'JugosNaturalesFresh'
    }
};

// Utility functions for product data
const ProductUtils = {
    // Get all products from a specific category
    getProductsByCategory: function (category) {
        return productsData[category] || [];
    },

    // Get all available products from a category
    getAvailableProductsByCategory: function (category) {
        const products = this.getProductsByCategory(category);
        return products.filter(product => product.available);
    },

    // Get a single product by ID
    getProductById: function (productId) {
        for (const category in productsData) {
            const product = productsData[category].find(p => p.id === productId);
            if (product) return product;
        }
        return null;
    },

    // Get all categories
    getCategories: function () {
        return Object.keys(productsData);
    },

    // Get products with specific badge
    getProductsByBadge: function (badge) {
        const results = [];
        for (const category in productsData) {
            const categoryProducts = productsData[category].filter(
                product => product.badges && product.badges.includes(badge)
            );
            results.push(...categoryProducts);
        }
        return results;
    },

    // Format price for display
    formatPrice: function (price) {
        return Utils.formatPrice(price);
    },

    // Get category display name in Spanish
    getCategoryDisplayName: function (category) {
        const categoryNames = {
            'jugos': 'Jugos Naturales',
            'frappuccinos': 'Frappuccinos',
            'cafe': 'Café'
        };
        return categoryNames[category] || category;
    }
};

/* ===================================
   MOBILE NAVIGATION FUNCTIONALITY
   =================================== */

document.addEventListener('DOMContentLoaded', function () {
    // Get navigation elements
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');

    // Show mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    }

    // Hide mobile menu
    if (navClose) {
        navClose.addEventListener('click', function () {
            navMenu.classList.remove('show');
            document.body.style.overflow = 'auto'; // Restore scrolling
        });
    }

    // Close mobile menu when clicking on navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('show');
            document.body.style.overflow = 'auto'; // Restore scrolling
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnToggle = navToggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });

    // Handle escape key to close mobile menu
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });

    /* ===================================
       STICKY HEADER FUNCTIONALITY
       =================================== */

    const header = document.getElementById('header');
    let scrollThreshold = 100; // Pixels to scroll before header changes

    // Sticky header on scroll
    function handleScroll() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        // Add scrolled class when scrolling down past threshold
        if (scrollTop > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Throttle scroll events for better performance
    let ticking = false;

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    }

    function finishTick() {
        ticking = false;
    }

    // Add scroll event listener with throttling
    window.addEventListener('scroll', function () {
        requestTick();
        setTimeout(finishTick, 16); // ~60fps
    });

    /* ===================================
       SMOOTH SCROLLING NAVIGATION
       =================================== */

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Check if it's an internal anchor link
            if (href.startsWith('#')) {
                e.preventDefault();

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Calculate offset to account for fixed header
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20; // 20px extra padding

                    // Smooth scroll to target
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Update active navigation link
                    updateActiveNavLink(href);
                }
            }
        });
    });

    // Update active navigation link based on current section
    function updateActiveNavLink(activeHref) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === activeHref) {
                link.classList.add('active');
            }
        });
    }

    // Highlight current section in navigation on scroll
    function highlightCurrentSection() {
        const sections = document.querySelectorAll('section[id]');
        const headerHeight = header.offsetHeight;
        const scrollPosition = window.scrollY + headerHeight + 100; // Offset for better detection

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = '#' + section.getAttribute('id');
            }
        });

        if (currentSection) {
            updateActiveNavLink(currentSection);
        }
    }

    // Add scroll listener for section highlighting
    window.addEventListener('scroll', function () {
        highlightCurrentSection();
    });

    // Initialize active section on page load
    highlightCurrentSection();

    /* ===================================
       HERO SECTION ENHANCEMENTS
       =================================== */

    // Legacy function removed - functionality moved to handleHeroImageLoadingEnhanced

    // Parallax effect for hero background (optional enhancement)
    function handleHeroParallax() {
        const heroBackground = document.querySelector('.hero__background');
        if (heroBackground && window.innerWidth > 768) { // Only on desktop
            const scrolled = window.scrollY || document.documentElement.scrollTop;
            const parallaxSpeed = 0.5;
            heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    }

    // Add scroll listener for parallax effect
    let parallaxTicking = false;
    function requestParallaxTick() {
        if (!parallaxTicking) {
            requestAnimationFrame(handleHeroParallax);
            parallaxTicking = true;
        }
    }

    function finishParallaxTick() {
        parallaxTicking = false;
    }

    // Initialize enhanced hero enhancements
    handleHeroImageLoadingEnhanced();

    // Add parallax scroll listener (only if user doesn't prefer reduced motion)
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('scroll', function () {
            requestParallaxTick();
            setTimeout(finishParallaxTick, 16);
        });
    }

    // Set initial enhanced viewport height
    handleViewportHeightEnhanced();

    // Update on resize and orientation change with enhanced handling
    window.addEventListener('resize', function () {
        handleViewportHeightEnhanced();
        // Debounce the optimization to avoid excessive calls
        clearTimeout(window.heroOptimizeTimeout);
        window.heroOptimizeTimeout = setTimeout(optimizeHeroForDevice, 150);
    });

    window.addEventListener('orientationchange', function () {
        // Delay to ensure proper viewport calculation after orientation change
        setTimeout(() => {
            handleViewportHeightEnhanced();
            optimizeHeroForDevice();
        }, 200);
    });

    /* ===================================
       ENHANCED RESPONSIVE HERO OPTIMIZATIONS
       =================================== */

    // Enhanced hero optimization for all screen sizes
    function optimizeHeroForDevice() {
        const hero = document.querySelector('.hero');
        const heroBackground = document.querySelector('.hero__background');
        const heroContainer = document.querySelector('.hero__container');

        if (hero && heroBackground && heroContainer) {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const isLandscape = screenWidth > screenHeight;
            const isMobile = screenWidth <= 767;
            const isTablet = screenWidth >= 768 && screenWidth <= 1023;
            const isDesktop = screenWidth >= 1024;
            const isExtraSmall = screenWidth <= 320;
            const isLargeDesktop = screenWidth >= 1440;

            // Remove existing device classes
            hero.classList.remove(
                'mobile-device', 'tablet-device', 'desktop-device',
                'landscape-mode', 'extra-small', 'large-desktop'
            );

            // Add appropriate device classes
            if (isExtraSmall) {
                hero.classList.add('extra-small');
            }

            if (isMobile) {
                hero.classList.add('mobile-device');
            } else if (isTablet) {
                hero.classList.add('tablet-device');
            } else if (isDesktop) {
                hero.classList.add('desktop-device');
            }

            if (isLargeDesktop) {
                hero.classList.add('large-desktop');
            }

            // Add landscape class for mobile/tablet
            if (isLandscape && (isMobile || isTablet)) {
                hero.classList.add('landscape-mode');
            }

            // Enhanced background optimization based on device and screen size
            // Don't override parallax transforms on desktop
            const hasParallax = hero.classList.contains('parallax-enabled');

            if (isExtraSmall) {
                heroBackground.style.backgroundPosition = 'center 40%';
                heroBackground.style.backgroundSize = 'cover';
                if (!hasParallax) {
                    heroBackground.style.transform = 'scale(1.02)';
                }
            } else if (isMobile) {
                heroBackground.style.backgroundPosition = 'center center';
                heroBackground.style.backgroundSize = 'cover';
                if (!hasParallax) {
                    heroBackground.style.transform = 'scale(1.01)';
                }
            } else if (isTablet) {
                heroBackground.style.backgroundPosition = 'center center';
                heroBackground.style.backgroundSize = 'cover';
                if (!hasParallax) {
                    heroBackground.style.transform = 'none';
                }
            } else {
                heroBackground.style.backgroundPosition = 'center center';
                heroBackground.style.backgroundSize = 'cover';
                // Don't reset transform on desktop if parallax is enabled
                if (!hasParallax) {
                    heroBackground.style.transform = 'none';
                }
            }

            // Optimize container height for different devices
            const headerHeight = document.getElementById('header')?.offsetHeight || 60;
            if (isMobile) {
                heroContainer.style.minHeight = `calc(100vh - ${headerHeight}px)`;
            }

            // Log optimization for debugging
            console.log(`Hero optimized for: ${screenWidth}x${screenHeight}, Device: ${isExtraSmall ? 'Extra Small' :
                isMobile ? 'Mobile' :
                    isTablet ? 'Tablet' :
                        'Desktop'
                }, Landscape: ${isLandscape}`);
        }
    }

    // Enhanced background image loading with loading states
    function handleHeroImageLoadingEnhanced() {
        const heroBackground = document.querySelector('.hero__background');
        if (heroBackground) {
            // Add loading state
            heroBackground.classList.add('image-loading');

            // Create a new image element to test loading
            const testImage = new Image();

            // Set up loading timeout (increased for slower connections)
            const loadingTimeout = setTimeout(() => {
                // Hero image loading timeout, using fallback
                heroBackground.classList.remove('image-loading');
                heroBackground.classList.add('image-fallback');
                heroBackground.classList.remove('image-loaded');
            }, 8000); // 8 second timeout for slower connections

            testImage.onload = function () {
                clearTimeout(loadingTimeout);
                heroBackground.classList.remove('image-loading');
                heroBackground.classList.add('image-loaded');
                heroBackground.classList.remove('image-fallback');
                // Hero background image loaded successfully

                // Optimize background after image loads
                setTimeout(optimizeHeroForDevice, 100);
            };

            testImage.onerror = function () {
                clearTimeout(loadingTimeout);
                heroBackground.classList.remove('image-loading');
                heroBackground.classList.add('image-fallback');
                heroBackground.classList.remove('image-loaded');
                // Hero background image failed to load, using fallback gradient

                // Still optimize for device even with fallback
                setTimeout(optimizeHeroForDevice, 100);
            };

            // Set the source to trigger loading
            testImage.src = './images/hero-juice.svg';

            // Preload for better performance on subsequent visits
            if ('requestIdleCallback' in window) {
                requestIdleCallback(() => {
                    const preloadLink = document.createElement('link');
                    preloadLink.rel = 'preload';
                    preloadLink.as = 'image';
                    preloadLink.href = './images/hero-juice.svg';
                    document.head.appendChild(preloadLink);
                });
            }
        }
    }

    // Enhanced viewport height handling for mobile browsers
    function handleViewportHeightEnhanced() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        // Also handle iOS Safari specific issues
        if (window.navigator.userAgent.includes('Safari') &&
            window.navigator.userAgent.includes('Mobile')) {
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.minHeight = '-webkit-fill-available';
            }
        }

        // Re-optimize hero after viewport change
        setTimeout(optimizeHeroForDevice, 100);
    }

    // Initialize enhanced hero optimization
    setTimeout(optimizeHeroForDevice, 100); // Small delay to ensure DOM is ready

    // Handle touch events for better mobile interaction
    function handleHeroTouchEvents() {
        const heroButtons = document.querySelectorAll('.hero__btn');

        heroButtons.forEach(button => {
            // Add touch feedback
            button.addEventListener('touchstart', function () {
                this.style.transform = 'translateY(-1px) scale(0.98)';
            });

            button.addEventListener('touchend', function () {
                this.style.transform = '';
            });

            button.addEventListener('touchcancel', function () {
                this.style.transform = '';
            });
        });
    }

    // Initialize touch events for mobile
    if ('ontouchstart' in window) {
        handleHeroTouchEvents();
    }

    // Preload hero image for better performance
    function preloadHeroImage() {
        const heroImage = new Image();
        heroImage.src = './images/hero-juice.svg';

        // Optional: Add to cache for faster loading
        heroImage.onload = function () {
            // Hero image preloaded successfully
        };

        heroImage.onerror = function () {
            // Hero image preload failed, fallback will be used
        };
    }

    // Preload image on page load
    preloadHeroImage();

    /* ===================================
       SCROLL ANIMATIONS WITH INTERSECTION OBSERVER
       =================================== */

    // Initialize scroll animations
    if (typeof initializeScrollAnimations === 'function') {
        initializeScrollAnimations();
    }

    /* ===================================
       BUTTON MICRO-INTERACTIONS
       =================================== */

    // Initialize button micro-interactions
    if (typeof initializeButtonInteractions === 'function') {
        initializeButtonInteractions();
    }

    /* ===================================
       PARALLAX EFFECTS
       =================================== */

    // Initialize parallax effects
    if (typeof initializeParallaxEffects === 'function') {
        initializeParallaxEffects();
    }

    /* ===================================
       MENU/PRODUCTS SECTION FUNCTIONALITY
       =================================== */

    // Initialize menu functionality
    if (typeof initializeMenu === 'function') {
        initializeMenu();
    }
});

/* ===================================
   PARALLAX EFFECTS FUNCTIONALITY
   =================================== */

function initializeParallaxEffects() {
    // Check if device supports parallax
    if (!shouldEnableParallax()) {
        return;
    }

    // Initialize smooth parallax for hero section
    initializeHeroParallax();

    // Initialize floating elements
    initializeFloatingElements();

    // Initialize scroll indicator
    initializeScrollIndicator();

    // Parallax effects initialized
}

function shouldEnableParallax() {
    // Disable on mobile devices for performance
    if (window.innerWidth <= 768) {
        return false;
    }

    // Disable if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return false;
    }

    // Disable on older/slower devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        return false;
    }

    // Check for low-end devices
    if (navigator.deviceMemory && navigator.deviceMemory < 4) {
        return false;
    }

    // Check connection speed (if available)
    if (navigator.connection && navigator.connection.effectiveType) {
        const slowConnections = ['slow-2g', '2g', '3g'];
        if (slowConnections.includes(navigator.connection.effectiveType)) {
            return false;
        }
    }

    // Check if device supports hardware acceleration
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
        return false;
    }

    return true;
}

// Performance monitoring for parallax
function monitorParallaxPerformance() {
    let frameCount = 0;
    let lastTime = performance.now();
    let fps = 60;

    function measureFPS() {
        frameCount++;
        const currentTime = performance.now();

        if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
            lastTime = currentTime;

            // Disable parallax if FPS drops too low
            if (fps < 30) {
                console.warn('Low FPS detected, considering disabling parallax');
                // Could automatically disable parallax here
            }
        }

        requestAnimationFrame(measureFPS);
    }

    // Start monitoring only if parallax is enabled
    const hero = document.querySelector('.hero');
    if (hero && hero.classList.contains('parallax-enabled')) {
        measureFPS();
    }
}

function initializeHeroParallax() {
    const hero = document.querySelector('.hero');
    const heroBackground = document.querySelector('.hero__background');
    const heroContent = document.querySelector('.hero__content');
    const heroTitle = document.querySelector('.hero__title');
    const heroSubtitle = document.querySelector('.hero__subtitle');
    const heroDescription = document.querySelector('.hero__description');
    const heroActions = document.querySelector('.hero__actions');

    if (!hero || !heroBackground) {
        return;
    }

    // Enable parallax class
    hero.classList.add('parallax-enabled');

    // Parallax scroll handler
    let parallaxTicking = false;

    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;
        const scrollProgress = Math.min(scrolled / heroHeight, 1);

        // Background parallax (slower movement)
        const backgroundOffset = scrolled * 0.5;
        heroBackground.style.transform = `translate3d(0, ${backgroundOffset}px, 0)`;

        // Content layers parallax (different speeds for depth)
        if (heroTitle) {
            const titleOffset = scrolled * 0.2;
            heroTitle.style.transform = `translate3d(0, ${titleOffset}px, 0)`;
        }

        if (heroSubtitle) {
            const subtitleOffset = scrolled * 0.15;
            heroSubtitle.style.transform = `translate3d(0, ${subtitleOffset}px, 0)`;
        }

        if (heroDescription) {
            const descriptionOffset = scrolled * 0.1;
            heroDescription.style.transform = `translate3d(0, ${descriptionOffset}px, 0)`;
        }

        if (heroActions) {
            const actionsOffset = scrolled * 0.25;
            heroActions.style.transform = `translate3d(0, ${actionsOffset}px, 0)`;
        }

        // Fade out content as user scrolls
        if (heroContent) {
            const opacity = Math.max(1 - scrollProgress * 1.5, 0);
            heroContent.style.opacity = opacity;
        }

        parallaxTicking = false;
    }

    function requestParallaxUpdate() {
        if (!parallaxTicking) {
            requestAnimationFrame(updateParallax);
            parallaxTicking = true;
        }
    }

    // Add scroll listener
    window.addEventListener('scroll', requestParallaxUpdate);

    // Hero parallax initialized
}

function initializeFloatingElements() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Create floating elements
    const floatingElements = [
        { emoji: '🍊', className: 'hero__floating-element--1' },
        { emoji: '🥤', className: 'hero__floating-element--2' },
        { emoji: '☕', className: 'hero__floating-element--3' }
    ];

    floatingElements.forEach(element => {
        const floatingEl = document.createElement('div');
        floatingEl.className = `hero__floating-element ${element.className}`;
        floatingEl.textContent = element.emoji;
        hero.appendChild(floatingEl);
    });

    // Parallax effect for floating elements
    let floatingTicking = false;

    function updateFloatingElements() {
        const scrolled = window.pageYOffset;
        const floatingEls = document.querySelectorAll('.hero__floating-element');

        floatingEls.forEach((el, index) => {
            const speed = 0.3 + (index * 0.1); // Different speeds
            const yOffset = scrolled * speed;
            const rotation = scrolled * 0.05 * (index + 1);

            el.style.transform = `translate3d(0, ${yOffset}px, 0) rotate(${rotation}deg)`;
        });

        floatingTicking = false;
    }

    function requestFloatingTick() {
        if (!floatingTicking) {
            requestAnimationFrame(updateFloatingElements);
            floatingTicking = true;
        }
    }

    // Add scroll listener
    window.addEventListener('scroll', requestFloatingTick);

    // Floating elements initialized
}

function initializeScrollIndicator() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Create scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'hero__scroll-indicator';
    scrollIndicator.innerHTML = `
        <div class="hero__scroll-indicator__text">Desliza para explorar</div>
        <div class="hero__scroll-indicator__arrow">↓</div>
    `;

    hero.appendChild(scrollIndicator);

    // Hide indicator on scroll
    let indicatorTicking = false;

    function updateScrollIndicator() {
        const scrolled = window.pageYOffset;
        const opacity = Math.max(1 - scrolled / 200, 0);
        scrollIndicator.style.opacity = opacity;

        indicatorTicking = false;
    }

    function requestIndicatorTick() {
        if (!indicatorTicking) {
            requestAnimationFrame(updateScrollIndicator);
            indicatorTicking = true;
        }
    }

    window.addEventListener('scroll', requestIndicatorTick, { passive: true });

    // Click handler for smooth scroll
    scrollIndicator.addEventListener('click', function () {
        const nextSection = document.querySelector('section:not(.hero)');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Scroll indicator initialized
}

// Parallax control functions removed - functionality consolidated

// Handle resize events
window.addEventListener('resize', function () {
    // Disable parallax if screen becomes too small
    if (window.innerWidth <= 768) {
        disableParallax();
    } else if (shouldEnableParallax()) {
        // Re-enable if conditions are met
        const hero = document.querySelector('.hero');
        if (hero && !hero.classList.contains('parallax-enabled')) {
            enableParallax();
        }
    }
});

/* ===================================
   BUTTON MICRO-INTERACTIONS FUNCTIONALITY
   =================================== */

function initializeButtonInteractions() {
    // Initialize ripple effects for all modern buttons
    initializeRippleEffects();

    // Initialize magnetic effects for large buttons
    initializeMagneticEffects();

    // Initialize loading states for form buttons
    initializeLoadingStates();

    // Initialize pulse effects for CTA buttons
    initializePulseEffects();

    // Button micro-interactions initialized
}

function initializeRippleEffects() {
    const modernButtons = document.querySelectorAll('.btn-modern, .hero__btn, .nav__contact-btn, .menu__order-btn, .form__submit-btn');

    modernButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Add ripple class
            this.classList.add('ripple');

            // Remove ripple class after animation
            setTimeout(() => {
                this.classList.remove('ripple');
            }, 600);
        });

        // Add modern class if not present
        if (!button.classList.contains('btn-modern')) {
            button.classList.add('btn-modern');
        }
    });
}

function initializeMagneticEffects() {
    const magneticButtons = document.querySelectorAll('.hero__btn, .btn-magnetic');

    magneticButtons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.classList.add('btn-magnetic');
        });

        button.addEventListener('mousemove', function (e) {
            if (window.innerWidth > 768) { // Only on desktop
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                // Apply subtle magnetic effect
                const moveX = x * 0.1;
                const moveY = y * 0.1;

                this.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
            }
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });
}

function initializeLoadingStates() {
    // Form submit buttons
    const formButtons = document.querySelectorAll('.form__submit-btn');

    formButtons.forEach(button => {
        const form = button.closest('form');
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();

                // Add loading state
                button.classList.add('loading');
                button.disabled = true;

                // Simulate form processing
                setTimeout(() => {
                    button.classList.remove('loading');
                    button.classList.add('success');
                    button.disabled = false;

                    // Remove success state after 3 seconds
                    setTimeout(() => {
                        button.classList.remove('success');
                    }, 3000);
                }, 2000);
            });
        }
    });

    // Menu order buttons
    const orderButtons = document.querySelectorAll('.menu__order-btn');

    orderButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            // Add loading state
            this.classList.add('loading');
            this.disabled = true;

            // Simulate order processing
            setTimeout(() => {
                this.classList.remove('loading');
                this.classList.add('success');
                this.disabled = false;

                // Remove success state after 2 seconds
                setTimeout(() => {
                    this.classList.remove('success');
                }, 2000);
            }, 1500);
        });
    });
}

function initializePulseEffects() {
    // Add pulse effect to primary CTA buttons
    const ctaButtons = document.querySelectorAll('.hero__btn--primary');

    ctaButtons.forEach(button => {
        // Add pulse class after page load
        setTimeout(() => {
            button.classList.add('btn-pulse');
        }, 2000);

        // Remove pulse on interaction
        button.addEventListener('mouseenter', function () {
            this.classList.remove('btn-pulse');
        });

        button.addEventListener('click', function () {
            this.classList.remove('btn-pulse');
        });
    });
}

// Function to manually trigger button loading state
function triggerButtonLoading(button, duration = 2000) {
    if (!button) return;

    button.classList.add('loading');
    button.disabled = true;

    setTimeout(() => {
        button.classList.remove('loading');
        button.classList.add('success');
        button.disabled = false;

        setTimeout(() => {
            button.classList.remove('success');
        }, 1000);
    }, duration);
}

// Function to add ripple effect programmatically
function addRippleEffect(button) {
    if (!button) return;

    button.classList.add('ripple');
    setTimeout(() => {
        button.classList.remove('ripple');
    }, 600);
}

// Enhanced touch feedback for mobile devices
function initializeTouchFeedback() {
    if ('ontouchstart' in window) {
        const touchButtons = document.querySelectorAll('.btn-modern, .hero__btn, .nav__contact-btn, .menu__order-btn');

        touchButtons.forEach(button => {
            button.addEventListener('touchstart', function () {
                this.style.transform = 'translateY(-1px) scale(0.98)';
            });

            button.addEventListener('touchend', function () {
                this.style.transform = '';
            });

            button.addEventListener('touchcancel', function () {
                this.style.transform = '';
            });
        });
    }
}

// Initialize touch feedback
initializeTouchFeedback();

/* ===================================
   SCROLL ANIMATIONS FUNCTIONALITY
   =================================== */

function initializeScrollAnimations() {
    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
        // Intersection Observer not supported, showing all elements
        // Fallback: show all elements immediately
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(element => {
            element.classList.add('animate-in');
        });
        return;
    }

    // Create intersection observer with optimized options
    const observerOptions = {
        root: null, // Use viewport as root
        rootMargin: '-10% 0px -10% 0px', // Trigger when element is 10% visible
        threshold: [0, 0.1, 0.3, 0.5] // Multiple thresholds for better control
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const element = entry.target;

            // Check if element is intersecting and has sufficient visibility
            if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
                // Add animation class
                element.classList.add('animate-in');

                // Handle staggered animations for child elements
                handleStaggeredAnimations(element);

                // Stop observing this element to improve performance
                observer.unobserve(element);

                // Log animation for debugging
                // Element animated
            }
        });
    }, observerOptions);

    // Find all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Start observing each element
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Handle special cases for elements that should animate together
    handleGroupAnimations();

    // Scroll animations initialized
}

function handleStaggeredAnimations(parentElement) {
    // Find child elements with stagger classes
    const staggeredChildren = parentElement.querySelectorAll('[class*="stagger-"]');

    staggeredChildren.forEach(child => {
        // Add animation class to staggered children
        setTimeout(() => {
            child.classList.add('animate-in');
        }, 50); // Small delay to ensure parent animation starts first
    });
}

function handleGroupAnimations() {
    // Special handling for menu tabs that should animate together
    const menuTabs = document.querySelectorAll('.menu__tab');
    if (menuTabs.length > 0) {
        menuTabs.forEach((tab, index) => {
            tab.classList.add('animate-on-scroll', 'slide-up', `stagger-${index + 1}`);
        });
    }

    // Special handling for testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    if (testimonialCards.length > 0) {
        testimonialCards.forEach((card, index) => {
            card.classList.add('animate-on-scroll', 'fade-in', `stagger-${index + 1}`);
        });
    }

    // Special handling for blog cards
    const blogCards = document.querySelectorAll('.blog__card');
    if (blogCards.length > 0) {
        blogCards.forEach((card, index) => {
            card.classList.add('animate-on-scroll', 'slide-up', `stagger-${Math.min(index + 1, 6)}`);
        });
    }

    // Special handling for feature items
    const featureItems = document.querySelectorAll('.feature');
    if (featureItems.length > 0) {
        featureItems.forEach((feature, index) => {
            feature.classList.add('animate-on-scroll', 'scale', `stagger-${index + 1}`);
        });
    }

    // Special handling for contact items
    const contactItems = document.querySelectorAll('.contact__item');
    if (contactItems.length > 0) {
        contactItems.forEach((item, index) => {
            item.classList.add('animate-on-scroll', 'slide-right', `stagger-${index + 1}`);
        });
    }
}

// Function to manually trigger animations (useful for dynamic content)
function triggerScrollAnimation(element) {
    if (element && !element.classList.contains('animate-in')) {
        element.classList.add('animate-in');
        handleStaggeredAnimations(element);
    }
}

// Reset animations function removed - not used in production

/* ===================================
   MENU CATEGORY TABS FUNCTIONALITY
   =================================== */

function initializeMenu() {
    const menuTabs = document.querySelectorAll('.menu__tab');
    const menuGrid = document.getElementById('menu-grid');

    if (!menuTabs.length || !menuGrid) {
        console.log('Menu elements not found, skipping menu initialization');
        return;
    }

    // Add click event listeners to tabs
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const category = this.getAttribute('data-tab');
            switchMenuCategory(category);
            setActiveTab(this);
        });
    });

    // Load initial category (jugos)
    switchMenuCategory('jugos');
}

function setActiveTab(activeTab) {
    const menuTabs = document.querySelectorAll('.menu__tab');

    // Remove active class from all tabs
    menuTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Add active class to clicked tab
    activeTab.classList.add('active');
}

function switchMenuCategory(category) {
    const menuGrid = document.getElementById('menu-grid');

    if (!menuGrid) {
        console.error('Menu grid not found');
        return;
    }

    // Add loading state
    menuGrid.classList.add('loading');

    // Get products for the selected category
    const products = ProductUtils.getAvailableProductsByCategory(category);

    // Clear current products with fade effect
    menuGrid.style.opacity = '0';

    setTimeout(() => {
        // Clear the grid
        menuGrid.innerHTML = '';

        if (products.length === 0) {
            // Show no products message
            menuGrid.innerHTML = `
                <div class="menu__no-products">
                    <p>No hay productos disponibles en esta categoría.</p>
                </div>
            `;
        } else {
            // Create product cards
            products.forEach(product => {
                const productCard = createProductCard(product);
                menuGrid.appendChild(productCard);
            });
        }

        // Remove loading state and fade in
        menuGrid.classList.remove('loading');
        menuGrid.style.opacity = '1';

        // Re-initialize animations for new products
        setTimeout(() => {
            const newProductCards = menuGrid.querySelectorAll('.menu__card');
            newProductCards.forEach((card, index) => {
                card.classList.add(`stagger-${Math.min(index + 1, 6)}`);
                triggerScrollAnimation(card);
            });
        }, 100);

        // Log category switch for debugging
        console.log(`Switched to category: ${category}, showing ${products.length} products`);
    }, 150); // Small delay for smooth transition
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'menu__card animate-on-scroll fade-in';
    card.setAttribute('data-product-id', product.id);

    // Create badges HTML
    const badgesHTML = product.badges && product.badges.length > 0
        ? `<div class="menu__badges">
            ${product.badges.map(badge => `<span class="menu__badge menu__badge--${badge.toLowerCase().replace(/[^a-z0-9]/g, '-')}">${badge}</span>`).join('')}
           </div>`
        : '';

    // Create ingredients HTML (only for jugos)
    const ingredientsHTML = product.ingredients && product.ingredients.length > 0
        ? `<div class="menu__ingredients">
            <small>Ingredientes: ${product.ingredients.join(', ')}</small>
           </div>`
        : '';

    card.innerHTML = `
        <div class="menu__card-image">
            <img src="${product.image}" alt="${product.name}" class="menu__image" loading="lazy" 
                 onerror="this.src='./images/placeholder-product.jpg'; this.onerror=null;">
            ${badgesHTML}
        </div>
        <div class="menu__card-content">
            <h3 class="menu__card-title">${product.name}</h3>
            <p class="menu__card-description">${product.description}</p>
            ${ingredientsHTML}
            <div class="menu__card-footer">
                <span class="menu__price">${ProductUtils.formatPrice(product.price)}</span>
                <button class="menu__order-btn" onclick="handleProductOrder('${product.id}')">
                    Ordenar
                </button>
            </div>
        </div>
    `;

    return card;
}

// Handle product order button click
function handleProductOrder(productId) {
    const product = ProductUtils.getProductById(productId);

    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    // Create WhatsApp message
    const message = `Hola! Me interesa ordenar: ${product.name} - ${ProductUtils.formatPrice(product.price)}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Track order attempt
    Utils.trackEvent('order_initiated', { product: product.name });
}

// Keyboard navigation for tabs
document.addEventListener('keydown', function (event) {
    const menuTabs = document.querySelectorAll('.menu__tab');
    const activeTab = document.querySelector('.menu__tab.active');

    if (!activeTab || menuTabs.length === 0) return;

    let currentIndex = Array.from(menuTabs).indexOf(activeTab);
    let newIndex = currentIndex;

    // Handle arrow key navigation
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        newIndex = currentIndex > 0 ? currentIndex - 1 : menuTabs.length - 1;
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        newIndex = currentIndex < menuTabs.length - 1 ? currentIndex + 1 : 0;
    } else if (event.key === 'Enter' || event.key === ' ') {
        // Tab is already focused, just ensure it's activated
        event.preventDefault();
        return;
    }

    if (newIndex !== currentIndex) {
        const newTab = menuTabs[newIndex];
        newTab.focus();
        newTab.click();
    }
});
/* ==
=================================
   TESTIMONIALS FUNCTIONALITY
   =================================== */

// Initialize testimonials when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeTestimonials();
});

function initializeTestimonials() {
    const testimonialImages = document.querySelectorAll('.testimonial-card__img');

    testimonialImages.forEach(img => {
        // Handle image loading errors
        img.addEventListener('error', function () {
            handleTestimonialImageError(this);
        });

        // Check if image source exists and is valid
        if (!img.src || img.src.includes('testimonials/')) {
            handleTestimonialImageError(img);
        }
    });
}

function handleTestimonialImageError(img) {
    // Create initials from alt text
    const altText = img.alt || 'Usuario';
    const initials = getInitials(altText);

    // Remove the src to prevent further error events
    img.removeAttribute('src');

    // Create a text node with initials
    img.style.display = 'flex';
    img.style.alignItems = 'center';
    img.style.justifyContent = 'center';
    img.style.fontSize = 'var(--font-size-base)';
    img.style.fontWeight = 'var(--font-weight-semibold)';
    img.style.color = 'var(--white)';
    img.style.fontFamily = 'var(--font-heading)';

    // Set background based on name
    const backgroundColor = getBackgroundColorForName(altText);
    img.style.background = backgroundColor;

    // Add initials as text content
    img.textContent = initials;
}

function getInitials(name) {
    return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .slice(0, 2)
        .join('');
}

function getBackgroundColorForName(name) {
    const colors = [
        'linear-gradient(135deg, #E91E63, #FF5722)', // Pink to Red
        'linear-gradient(135deg, #2196F3, #00BCD4)', // Blue to Cyan
        'linear-gradient(135deg, #9C27B0, #673AB7)', // Purple to Deep Purple
        'linear-gradient(135deg, #FF9800, #FF5722)', // Orange to Red
        'linear-gradient(135deg, #4CAF50, #2E7D32)', // Green to Dark Green
        'linear-gradient(135deg, #607D8B, #455A64)'  // Blue Grey to Dark Blue Grey
    ];

    // Simple hash function to consistently assign colors based on name
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    return colors[Math.abs(hash) % colors.length];
}

/* ===================================
   TESTIMONIALS ANIMATION
   =================================== */

// Add intersection observer for testimonial animations
function initializeTestimonialAnimations() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        testimonialCards.forEach(card => {
            // Set initial state
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

            observer.observe(card);
        });
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add a small delay to ensure styles are loaded
    setTimeout(initializeTestimonialAnimations, 100);
});

/* ===================================
   TESTIMONIALS ACCESSIBILITY
   =================================== */

// Add keyboard navigation support for testimonials
function initializeTestimonialAccessibility() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    testimonialCards.forEach(card => {
        // Make cards focusable
        card.setAttribute('tabindex', '0');

        // Add ARIA labels
        const authorName = card.querySelector('.testimonial-card__name')?.textContent;
        if (authorName) {
            card.setAttribute('aria-label', `Testimonio de ${authorName}`);
        }

        // Add keyboard interaction
        card.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Focus on the card content for screen readers
                const content = card.querySelector('.testimonial-card__text');
                if (content) {
                    content.focus();
                }
            }
        });
    });
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', function () {
    initializeTestimonialAccessibility();
});
/* ==
=================================
   CONTACT FORM FUNCTIONALITY
   =================================== */

// Initialize contact form when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeContactForm();
});

function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (!contactForm) {
        console.log('Contact form not found, skipping form initialization');
        return;
    }

    // Add form submission event listener
    contactForm.addEventListener('submit', handleFormSubmission);

    // Add real-time validation to form fields
    const formFields = contactForm.querySelectorAll('input, select, textarea');
    formFields.forEach(field => {
        // Validate on blur (when user leaves field)
        field.addEventListener('blur', function () {
            validateField(this);
        });

        // Clear errors on input (when user starts typing)
        field.addEventListener('input', function () {
            clearFieldError(this);
        });
    });

    console.log('Contact form initialized successfully');
}

function handleFormSubmission(event) {
    event.preventDefault();

    const form = event.target;
    const submitBtn = document.getElementById('submit-btn');
    const formSuccess = document.getElementById('form-success');

    // Validate all fields
    const isValid = validateForm(form);

    if (!isValid) {
        // Focus on first error field
        const firstErrorField = form.querySelector('.error');
        if (firstErrorField) {
            firstErrorField.focus();
        }
        return;
    }

    // Show loading state
    setFormLoadingState(submitBtn, true);

    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
        // Hide loading state
        setFormLoadingState(submitBtn, false);

        // Show success message
        showFormSuccess(formSuccess);

        // Reset form
        form.reset();
        clearAllFieldErrors(form);

        // Log form submission for debugging
        console.log('Contact form submitted successfully');

        // Optional: Send form data to server
        // submitFormToServer(getFormData(form));

    }, 2000); // Simulate 2 second processing time
}

function validateForm(form) {
    const fields = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;

    fields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });

    // Also validate optional phone field if filled
    const phoneField = form.querySelector('#phone');
    if (phoneField && phoneField.value.trim()) {
        if (!validateField(phoneField)) {
            isValid = false;
        }
    }

    return isValid;
}

function validateField(field) {
    const fieldType = field.type;
    const fieldName = field.name;
    const fieldValue = field.value.trim();
    const isRequired = field.hasAttribute('required');

    // Clear previous error
    clearFieldError(field);

    // Check if required field is empty
    if (isRequired && !fieldValue) {
        showFieldError(field, 'Este campo es obligatorio');
        return false;
    }

    // Skip validation if field is empty and not required
    if (!fieldValue && !isRequired) {
        return true;
    }

    // Validate based on field type and name
    switch (fieldName) {
        case 'name':
            return validateName(field, fieldValue);
        case 'email':
            return validateEmail(field, fieldValue);
        case 'phone':
            return validatePhone(field, fieldValue);
        case 'subject':
            return validateSubject(field, fieldValue);
        case 'message':
            return validateMessage(field, fieldValue);
        default:
            return true;
    }
}

function validateName(field, value) {
    // Name should be at least 2 characters and contain only letters and spaces
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/;

    if (value.length < 2) {
        showFieldError(field, 'El nombre debe tener al menos 2 caracteres');
        return false;
    }

    if (value.length > 50) {
        showFieldError(field, 'El nombre no puede tener más de 50 caracteres');
        return false;
    }

    if (!nameRegex.test(value)) {
        showFieldError(field, 'El nombre solo puede contener letras y espacios');
        return false;
    }

    return true;
}

function validateEmail(field, value) {
    if (!Utils.isValidEmail(value)) {
        showFieldError(field, 'Por favor ingresa un correo electrónico válido');
        return false;
    }

    if (value.length > 100) {
        showFieldError(field, 'El correo electrónico es demasiado largo');
        return false;
    }

    return true;
}

function validatePhone(field, value) {
    if (!Utils.isValidPhone(value)) {
        showFieldError(field, 'Por favor ingresa un número de teléfono válido');
        return false;
    }

    // Remove non-numeric characters to check length
    const numericOnly = value.replace(/[^0-9]/g, '');
    if (numericOnly.length < 10) {
        showFieldError(field, 'El número de teléfono debe tener al menos 10 dígitos');
        return false;
    }

    return true;
}

function validateSubject(field, value) {
    if (!value) {
        showFieldError(field, 'Por favor selecciona un asunto');
        return false;
    }

    return true;
}

function validateMessage(field, value) {
    if (value.length < 10) {
        showFieldError(field, 'El mensaje debe tener al menos 10 caracteres');
        return false;
    }

    if (value.length > 1000) {
        showFieldError(field, 'El mensaje no puede tener más de 1000 caracteres');
        return false;
    }

    return true;
}

function showFieldError(field, message) {
    const errorElement = document.getElementById(field.name + '-error');

    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    field.classList.add('error');
    field.classList.remove('success');
}

function clearFieldError(field) {
    const errorElement = document.getElementById(field.name + '-error');

    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }

    field.classList.remove('error');

    // Add success class if field has value and is valid
    if (field.value.trim()) {
        field.classList.add('success');
    } else {
        field.classList.remove('success');
    }
}

function clearAllFieldErrors(form) {
    const fields = form.querySelectorAll('input, select, textarea');
    fields.forEach(field => {
        clearFieldError(field);
        field.classList.remove('success');
    });
}

function setFormLoadingState(submitBtn, isLoading) {
    const btnText = submitBtn.querySelector('.btn__text');
    const btnLoading = submitBtn.querySelector('.btn__loading');

    if (isLoading) {
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        if (btnText) btnText.style.display = 'none';
        if (btnLoading) btnLoading.style.display = 'inline-block';
    } else {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        if (btnText) btnText.style.display = 'inline-block';
        if (btnLoading) btnLoading.style.display = 'none';
    }
}

function showFormSuccess(successElement) {
    if (successElement) {
        successElement.classList.add('show');
        successElement.style.display = 'block';

        // Scroll to success message
        successElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
            successElement.classList.remove('show');
            setTimeout(() => {
                successElement.style.display = 'none';
            }, 300);
        }, 5000);
    }
}

function getFormData(form) {
    const formData = new FormData(form);
    const data = {};

    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }

    return data;
}

// Optional: Function to submit form data to server
function submitFormToServer(formData) {
    // This function can be implemented to send data to your backend
    console.log('Form data to submit:', formData);

    // Example implementation:
    /*
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Form submitted successfully:', data);
    })
    .catch(error => {
        console.error('Form submission error:', error);
    });
    */
}

// Accessibility enhancements for form
function enhanceFormAccessibility() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Add ARIA labels and descriptions
    const fields = form.querySelectorAll('input, select, textarea');
    fields.forEach(field => {
        const label = form.querySelector(`label[for="${field.id}"]`);
        const errorElement = document.getElementById(field.name + '-error');

        if (label && !field.getAttribute('aria-label')) {
            field.setAttribute('aria-label', label.textContent);
        }

        if (errorElement) {
            field.setAttribute('aria-describedby', errorElement.id);
        }

        // Add required indicator for screen readers
        if (field.hasAttribute('required')) {
            field.setAttribute('aria-required', 'true');
        }
    });
}

// Initialize accessibility enhancements when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    enhanceFormAccessibility();
});

/* ===================================
   FORM KEYBOARD NAVIGATION
   =================================== */

// Enhanced keyboard navigation for form
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Handle Enter key in form fields
    form.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const target = event.target;

            // Allow Enter in textarea
            if (target.tagName === 'TEXTAREA') {
                return;
            }

            // Prevent form submission on Enter in other fields
            if (target.tagName === 'INPUT' || target.tagName === 'SELECT') {
                event.preventDefault();

                // Move to next field
                const fields = Array.from(form.querySelectorAll('input, select, textarea, button'));
                const currentIndex = fields.indexOf(target);
                const nextField = fields[currentIndex + 1];

                if (nextField) {
                    nextField.focus();
                }
            }
        }
    });
});
/*
 ===================================
   BLOG SECTION FUNCTIONALITY
   =================================== */

// Blog data structure
const blogData = [
    {
        id: 'beneficios-jugos-naturales',
        title: '5 Beneficios Increíbles de los Jugos Naturales para tu Salud',
        excerpt: 'Descubre cómo los jugos naturales pueden transformar tu bienestar diario. Desde fortalecer tu sistema inmunológico hasta mejorar tu digestión...',
        category: 'Salud',
        author: 'María Nutricionista',
        date: '2025-01-15',
        image: './images/blog/beneficios-jugos-naturales.jpg',
        views: 1200,
        likes: 89,
        featured: true
    },
    {
        id: 'recetas-detox',
        title: '3 Recetas Detox Perfectas para Empezar el Año',
        excerpt: 'Renueva tu cuerpo con estas deliciosas recetas detox. Combinaciones perfectas de frutas y verduras que te ayudarán a sentirte mejor...',
        category: 'Detox',
        author: 'Chef Carlos',
        date: '2025-01-12',
        image: './images/blog/recetas-detox.jpg',
        views: 856,
        likes: 67,
        featured: false
    },
    {
        id: 'cafe-vs-frappuccino',
        title: 'Café Tradicional vs Frappuccino: ¿Cuál Elegir?',
        excerpt: 'Exploramos las diferencias entre estas dos opciones populares. Conoce los beneficios de cada uno y cuál se adapta mejor a tu estilo de vida...',
        category: 'Café',
        author: 'Ana Barista',
        date: '2025-01-10',
        image: './images/blog/cafe-vs-frappuccino.jpg',
        views: 2100,
        likes: 156,
        featured: true
    },
    {
        id: 'ingredientes-temporada',
        title: 'Frutas de Temporada: Enero es el Mes de los Cítricos',
        excerpt: 'Aprovecha al máximo los cítricos de temporada. Te contamos cuáles son las mejores frutas de enero y cómo incorporarlas en tus jugos favoritos...',
        category: 'Ingredientes',
        author: 'Equipo Jugos Naturales',
        date: '2025-01-08',
        image: './images/blog/ingredientes-temporada.jpg',
        views: 743,
        likes: 92,
        featured: false
    },
    {
        id: 'hidratacion-ejercicio',
        title: 'La Importancia de la Hidratación Natural Durante el Ejercicio',
        excerpt: '¿Sabías que los jugos naturales pueden ser tus mejores aliados durante el ejercicio? Descubre cómo mantener una hidratación óptima de forma natural...',
        category: 'Fitness',
        author: 'Dr. Roberto Fitness',
        date: '2025-01-05',
        image: './images/blog/hidratacion-ejercicio.jpg',
        views: 1500,
        likes: 203,
        featured: true
    },
    {
        id: 'conservacion-jugos',
        title: 'Cómo Conservar Jugos Naturales: Guía Completa',
        excerpt: 'Aprende las mejores técnicas para mantener tus jugos frescos por más tiempo. Tips profesionales para conservar todos los nutrientes y el sabor...',
        category: 'Tips',
        author: 'Equipo Jugos Naturales',
        date: '2025-01-03',
        image: './images/blog/conservacion-jugos.jpg',
        views: 967,
        likes: 134,
        featured: false
    }
];

// Blog utility functions
const BlogUtils = {
    // Get all blog posts
    getAllPosts: function () {
        return blogData.sort((a, b) => new Date(b.date) - new Date(a.date));
    },

    // Get featured blog posts
    getFeaturedPosts: function () {
        return blogData.filter(post => post.featured)
            .sort((a, b) => new Date(b.date) - new Date(a.date));
    },

    // Get posts by category
    getPostsByCategory: function (category) {
        return blogData.filter(post => post.category.toLowerCase() === category.toLowerCase())
            .sort((a, b) => new Date(b.date) - new Date(a.date));
    },

    // Get a single post by ID
    getPostById: function (postId) {
        return blogData.find(post => post.id === postId);
    },

    // Format date for display
    formatDate: function (date) {
        return Utils.formatDate(date);
    },

    // Format numbers for display (views, likes)
    formatNumber: function (num) {
        return Utils.formatNumber(num);
    },

    // Get category color class
    getCategoryClass: function (category) {
        const categoryClasses = {
            'Salud': '',
            'Detox': 'blog__category-tag--detox',
            'Café': 'blog__category-tag--cafe',
            'Ingredientes': 'blog__category-tag--ingredientes',
            'Fitness': 'blog__category-tag--fitness',
            'Tips': 'blog__category-tag--tips'
        };
        return categoryClasses[category] || '';
    }
};

// Initialize blog functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeBlog();
});

function initializeBlog() {
    // Add click handlers for blog cards
    const blogCards = document.querySelectorAll('.blog__card');
    blogCards.forEach(card => {
        card.addEventListener('click', function (e) {
            // Don't trigger if clicking on specific interactive elements
            if (e.target.classList.contains('blog__read-more') ||
                e.target.classList.contains('blog__link')) {
                return;
            }

            // Get the blog link and trigger click
            const blogLink = card.querySelector('.blog__link');
            if (blogLink) {
                handleBlogPostClick(blogLink.href, e);
            }
        });

        // Add hover effect for better UX
        card.addEventListener('mouseenter', function () {
            this.style.cursor = 'pointer';
        });
    });

    // Add click handlers for read more buttons
    const readMoreButtons = document.querySelectorAll('.blog__read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            handleBlogPostClick(this.href, e);
        });
    });

    // Add click handler for "Ver todos los artículos" button
    const viewAllButton = document.querySelector('.blog__view-all');
    if (viewAllButton) {
        viewAllButton.addEventListener('click', function (e) {
            e.preventDefault();
            handleViewAllPosts();
        });
    }

    // Initialize blog image lazy loading
    initializeBlogImageLazyLoading();

    // Blog analytics handled by Utils.trackEvent
}

function handleBlogPostClick(href, event) {
    event.preventDefault();

    // For now, show a modal or redirect to blog post
    // In a real implementation, this would navigate to the full blog post
    showBlogPostPreview(href);
}

function showBlogPostPreview(href) {
    // Extract post ID from href (assuming format like #post-id or /blog/post-id)
    const postId = href.split('#')[1] || href.split('/').pop();
    const post = BlogUtils.getPostById(postId);

    if (post) {
        // Create and show modal with blog post preview
        const modal = createBlogModal(post);
        document.body.appendChild(modal);

        // Show modal with animation
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);

        // Track blog post view
        trackBlogEvent('post_preview', post.id);
    } else {
        // Fallback: show coming soon message
        showComingSoonMessage();
    }
}

function createBlogModal(post) {
    const modal = document.createElement('div');
    modal.className = 'blog-modal';
    modal.innerHTML = `
        <div class="blog-modal__overlay"></div>
        <div class="blog-modal__content">
            <div class="blog-modal__header">
                <button class="blog-modal__close" aria-label="Cerrar">&times;</button>
            </div>
            <div class="blog-modal__body">
                <div class="blog-modal__image">
                    <img src="${post.image}" alt="${post.title}" class="blog-modal__img">
                    <div class="blog-modal__category">
                        <span class="blog__category-tag ${BlogUtils.getCategoryClass(post.category)}">${post.category}</span>
                    </div>
                </div>
                <div class="blog-modal__text">
                    <div class="blog-modal__meta">
                        <span class="blog__date">${BlogUtils.formatDate(post.date)}</span>
                        <span class="blog__author">Por ${post.author}</span>
                    </div>
                    <h2 class="blog-modal__title">${post.title}</h2>
                    <p class="blog-modal__excerpt">${post.excerpt}</p>
                    <div class="blog-modal__stats">
                        <span class="blog__views">👁️ ${BlogUtils.formatNumber(post.views)}</span>
                        <span class="blog__likes">❤️ ${BlogUtils.formatNumber(post.likes)}</span>
                    </div>
                    <div class="blog-modal__actions">
                        <button class="blog-modal__read-full" onclick="handleReadFullPost('${post.id}')">
                            Leer artículo completo
                        </button>
                        <button class="blog-modal__share" onclick="handleSharePost('${post.id}')">
                            Compartir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Modal styles are now in CSS file

    // Add event listeners
    const closeButton = modal.querySelector('.blog-modal__close');
    const overlay = modal.querySelector('.blog-modal__overlay');

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    }

    closeButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Close on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    return modal;
}

function handleReadFullPost(postId) {
    // In a real implementation, this would navigate to the full blog post
    showComingSoonMessage('El artículo completo estará disponible próximamente.');
    trackBlogEvent('read_full_post', postId);
}

function handleSharePost(postId) {
    const post = BlogUtils.getPostById(postId);
    if (post && navigator.share) {
        navigator.share({
            title: post.title,
            text: post.excerpt,
            url: window.location.href + '#blog-' + postId
        });
    } else {
        // Fallback: copy to clipboard
        const url = window.location.href + '#blog-' + postId;
        navigator.clipboard.writeText(url).then(() => {
            showNotification('Enlace copiado al portapapeles');
        });
    }
    trackBlogEvent('share_post', postId);
}

function handleViewAllPosts() {
    // In a real implementation, this would navigate to the blog page
    showComingSoonMessage('La página completa del blog estará disponible próximamente.');
    trackBlogEvent('view_all_posts');
}

function showComingSoonMessage(message = 'Esta funcionalidad estará disponible próximamente.') {
    const notification = document.createElement('div');
    notification.className = 'blog-notification';
    notification.innerHTML = `
        <div class="blog-notification__content">
            <span class="blog-notification__icon">🚀</span>
            <span class="blog-notification__message">${message}</span>
        </div>
    `;

    // Notification styles are now in CSS file

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    // Hide notification after 4 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Función eliminada - usar Utils.showNotification

function initializeBlogImageLazyLoading() {
    const blogImages = document.querySelectorAll('.blog__img');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        blogImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Blog analytics consolidated in Utils.trackEvent

// Export blog utilities for external use
window.BlogUtils = BlogUtils;
/* ===================================
   SCROLL ANIMATIONS - FASE 1 MODERNIZACIÓN
   =================================== */

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeScrollAnimations();

    // Initialize parallax effects
    initializeParallaxEffects();

    // Start performance monitoring
    setTimeout(() => {
        monitorParallaxPerformance();
    }, 2000);
});

function initializeScrollAnimations() {
    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // If user prefers reduced motion, show all elements immediately
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(element => {
            element.classList.add('animate-in');
        });
        return;
    }

    // Create intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element comes into view
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element comes into view
                entry.target.classList.add('animate-in');

                // Optional: Stop observing this element after animation
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .fade-in, .slide-up, .slide-left, .slide-right, .scale-in');

    animatedElements.forEach(element => {
        scrollObserver.observe(element);
    });

    // Special handling for staggered animations
    initializeStaggeredAnimations();
}

function initializeStaggeredAnimations() {
    // Handle menu cards with staggered animation
    const menuGrid = document.getElementById('menu-grid');
    if (menuGrid) {
        const menuObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.menu__card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate-on-scroll', 'scale-in', 'animate-in');
                        }, index * 100); // 100ms delay between each card
                    });
                    menuObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        menuObserver.observe(menuGrid);
    }

    // Handle blog cards with staggered animation
    const blogGrid = document.querySelector('.blog__grid');
    if (blogGrid) {
        const blogObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.blog__card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate-on-scroll', 'slide-up', 'animate-in');
                        }, index * 150); // 150ms delay between each card
                    });
                    blogObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        blogObserver.observe(blogGrid);
    }

    // Handle testimonials with staggered animation
    const testimonialsGrid = document.querySelector('.testimonials__grid');
    if (testimonialsGrid) {
        const testimonialsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.testimonial-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate-on-scroll', 'fade-in', 'animate-in');
                        }, index * 200); // 200ms delay between each testimonial
                    });
                    testimonialsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        testimonialsObserver.observe(testimonialsGrid);
    }
}

// Enhanced scroll animations for hero elements
function initializeHeroAnimations() {
    const heroElements = {
        title: document.querySelector('.hero__title'),
        subtitle: document.querySelector('.hero__subtitle'),
        description: document.querySelector('.hero__description'),
        actions: document.querySelector('.hero__actions')
    };

    // Animate hero elements with staggered timing
    Object.values(heroElements).forEach((element, index) => {
        if (element) {
            setTimeout(() => {
                element.classList.add('animate-on-scroll', 'slide-up', 'animate-in');
            }, index * 200 + 500); // Start after 500ms, then 200ms between each
        }
    });
}

// Initialize hero animations after page load
window.addEventListener('load', function () {
    setTimeout(initializeHeroAnimations, 300); // Small delay to ensure everything is loaded
});

// Performance optimization: Pause animations when tab is not visible
document.addEventListener('visibilitychange', function () {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if (document.hidden) {
        // Pause animations when tab is hidden
        animatedElements.forEach(element => {
            element.style.animationPlayState = 'paused';
        });
    } else {
        // Resume animations when tab becomes visible
        animatedElements.forEach(element => {
            element.style.animationPlayState = 'running';
        });
    }
});

// Utility function to manually trigger animations (useful for dynamic content)
function triggerScrollAnimation(element, animationType = 'fade-in') {
    if (element && !element.classList.contains('animate-in')) {
        element.classList.add('animate-on-scroll', animationType);

        // Use requestAnimationFrame for smooth animation
        requestAnimationFrame(() => {
            element.classList.add('animate-in');
        });
    }
}

// Export for external use
window.ScrollAnimations = {
    trigger: triggerScrollAnimation,
    initialize: initializeScrollAnimations
};

/* ===================================
   MENU FUNCTIONALITY WITH GLASSMORPHISM
   =================================== */

// Enhanced product data for glassmorphism demo
const menuProducts = {
    jugos: [
        {
            id: 'jugo-naranja',
            name: 'Jugo de Naranja Premium',
            description: 'Jugo 100% natural de naranjas frescas, rico en vitamina C y antioxidantes naturales',
            price: 15.00,
            image: './images/products/jugo-naranja.jpg',
            badges: ['100% Natural', 'Popular'],
            ingredients: ['Naranjas frescas', 'Sin azúcar añadida'],
            available: true
        },
        {
            id: 'jugo-verde',
            name: 'Green Detox Supreme',
            description: 'Mezcla energizante de vegetales verdes y frutas para una desintoxicación natural',
            price: 18.00,
            image: './images/products/jugo-verde.jpg',
            badges: ['100% Natural', 'Detox', 'Premium'],
            ingredients: ['Espinaca', 'Apio', 'Manzana verde', 'Limón', 'Jengibre'],
            available: true
        },
        {
            id: 'jugo-tropical',
            name: 'Tropical Paradise',
            description: 'Combinación tropical de piña, mango y maracuyá que te transporta al paraíso',
            price: 17.00,
            image: './images/products/jugo-tropical.jpg',
            badges: ['100% Natural', 'Tropical'],
            ingredients: ['Piña', 'Mango', 'Maracuyá', 'Coco'],
            available: true
        }
    ],
    frappuccinos: [
        {
            id: 'frapp-vainilla',
            name: 'Vanilla Dream Frappuccino',
            description: 'Cremoso frappuccino con vainilla premium y crema batida artesanal',
            price: 22.00,
            image: './images/products/frapp-vainilla.jpg',
            badges: ['Popular', 'Cremoso'],
            available: true
        },
        {
            id: 'frapp-chocolate',
            name: 'Chocolate Indulgence',
            description: 'Delicioso frappuccino con chocolate belga y crema de cacao premium',
            price: 24.00,
            image: './images/products/frapp-chocolate.jpg',
            badges: ['Premium', 'Popular'],
            available: true
        },
        {
            id: 'frapp-caramelo',
            name: 'Salted Caramel Bliss',
            description: 'Suave frappuccino con caramelo salado y crema batida con toque de sal marina',
            price: 23.00,
            image: './images/products/frapp-caramelo.jpg',
            badges: ['Premium', 'Dulce'],
            available: true
        }
    ],
    cafe: [
        {
            id: 'cafe-americano',
            name: 'Americano Clásico',
            description: 'Café negro tradicional, fuerte y aromático con granos seleccionados',
            price: 12.00,
            image: './images/products/cafe-americano.jpg',
            badges: ['Clásico'],
            available: true
        },
        {
            id: 'cafe-latte',
            name: 'Latte Artesanal',
            description: 'Suave combinación de espresso con leche vaporizada y arte latte',
            price: 16.00,
            image: './images/products/cafe-latte.jpg',
            badges: ['Popular', 'Cremoso'],
            available: true
        },
        {
            id: 'cafe-cappuccino',
            name: 'Cappuccino Perfetto',
            description: 'Espresso italiano con leche vaporizada y espuma de leche perfecta',
            price: 15.00,
            image: './images/products/cafe-cappuccino.jpg',
            badges: ['Clásico', 'Premium'],
            available: true
        }
    ]
};

// Initialize menu functionality
function initializeMenu() {
    const menuTabs = document.querySelectorAll('.menu__tab');
    const menuGrid = document.getElementById('menu-grid');

    if (!menuTabs.length || !menuGrid) {
        console.log('Menu elements not found');
        return;
    }

    // Add click event listeners to tabs
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const category = this.getAttribute('data-tab');
            switchMenuCategory(category);
            setActiveTab(this);
        });
    });

    // Load initial category
    switchMenuCategory('jugos');

    console.log('Menu with glassmorphism initialized');
}

function setActiveTab(activeTab) {
    const menuTabs = document.querySelectorAll('.menu__tab');

    menuTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    activeTab.classList.add('active');
}

function switchMenuCategory(category) {
    const menuGrid = document.getElementById('menu-grid');

    if (!menuGrid) {
        console.error('Menu grid not found');
        return;
    }

    // Add loading state
    menuGrid.classList.add('loading');

    // Get products for the selected category
    const products = menuProducts[category] || [];

    // Clear current products with fade effect
    menuGrid.style.opacity = '0';

    setTimeout(() => {
        // Clear the grid
        menuGrid.innerHTML = '';

        if (products.length === 0) {
            // Show no products message
            menuGrid.innerHTML = `
                <div class="menu__no-products">
                    <p>No hay productos disponibles en esta categoría.</p>
                </div>
            `;
        } else {
            // Create product cards with glassmorphism
            products.forEach((product, index) => {
                const productCard = createGlassmorphismProductCard(product);
                menuGrid.appendChild(productCard);

                // Staggered animation
                setTimeout(() => {
                    productCard.classList.add('animate-in');
                }, index * 100);
            });
        }

        // Remove loading state and fade in
        menuGrid.classList.remove('loading');
        menuGrid.style.opacity = '1';

        console.log(`Switched to category: ${category}, showing ${products.length} products`);
    }, 300);
}

function createGlassmorphismProductCard(product) {
    const card = document.createElement('div');
    card.className = 'menu__card animate-on-scroll fade-in';
    card.setAttribute('data-product-id', product.id);

    // Create badges HTML
    const badgesHTML = product.badges && product.badges.length > 0
        ? `<div class="menu__badges">
            ${product.badges.map(badge => {
            const badgeClass = getBadgeClass(badge);
            return `<span class="menu__badge ${badgeClass}">${badge}</span>`;
        }).join('')}
           </div>`
        : '';

    // Create ingredients HTML (only for jugos)
    const ingredientsHTML = product.ingredients && product.ingredients.length > 0
        ? `<div class="menu__ingredients">
            <small>Ingredientes: ${product.ingredients.join(', ')}</small>
           </div>`
        : '';

    card.innerHTML = `
        <div class="menu__card-image">
            <img src="${product.image}" alt="${product.name}" class="menu__image" loading="lazy" 
                 onerror="this.src='./images/placeholder-product.jpg'; this.onerror=null;">
            ${badgesHTML}
        </div>
        <div class="menu__card-content">
            <h3 class="menu__card-title">${product.name}</h3>
            <p class="menu__card-description">${product.description}</p>
            ${ingredientsHTML}
            <div class="menu__card-footer">
                <span class="menu__price">${product.price.toFixed(2)}</span>
                <button class="menu__order-btn btn-modern" onclick="handleProductOrder('${product.id}')">
                    Ordenar
                </button>
            </div>
        </div>
    `;

    // Add hover effects
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = '';
    });

    return card;
}

function getBadgeClass(badge) {
    const badgeClasses = {
        'Popular': 'menu__badge--popular',
        '100% Natural': 'menu__badge--natural',
        'Premium': 'menu__badge--premium',
        'Detox': 'menu__badge--natural',
        'Cremoso': 'menu__badge--premium',
        'Clásico': '',
        'Tropical': 'menu__badge--natural',
        'Dulce': 'menu__badge--popular'
    };
    return badgeClasses[badge] || '';
}

function handleProductOrder(productId) {
    // Find the product
    let product = null;
    for (const category in menuProducts) {
        product = menuProducts[category].find(p => p.id === productId);
        if (product) break;
    }

    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    // Get the button that was clicked
    const button = event.target;

    // Add loading state
    button.classList.add('loading');
    button.disabled = true;
    button.textContent = 'Procesando...';

    // Simulate order processing
    setTimeout(() => {
        button.classList.remove('loading');
        button.classList.add('success');
        button.textContent = '¡Agregado!';
        button.disabled = false;

        // Show success notification
        showOrderNotification(product);

        // Reset button after 2 seconds
        setTimeout(() => {
            button.classList.remove('success');
            button.textContent = 'Ordenar';
        }, 2000);
    }, 1500);

    console.log('Product ordered:', product.name);
}

function showOrderNotification(product) {
    const notification = document.createElement('div');
    notification.className = 'order-notification';
    notification.innerHTML = `
        <div class="order-notification__content">
            <span class="order-notification__icon">✅</span>
            <div class="order-notification__text">
                <strong>${product.name}</strong> agregado al pedido
            </div>
        </div>
    `;

    // Order notification styles are now in CSS file

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 400);
    }, 3000);
}

// Initialize menu when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Small delay to ensure other initializations are complete
    setTimeout(() => {
        initializeMenu();
    }, 100);
});

/* ===================================
   STICKY NAVIGATION WITH BLUR FUNCTIONALITY
   =================================== */
function initializeStickyNavigation() {
    const header = document.querySelector('.header');
    let scrollProgress;
    let scrollToTopBtn;

    if (!header) {
        console.warn('Header element not found for sticky navigation');
        return;
    }

    let lastScrollY = window.scrollY;
    let ticking = false;

    // Create scroll progress indicator
    function createScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        header.appendChild(progressBar);
        return progressBar;
    }

    // Create scroll to top button
    function createScrollToTopButton() {
        const button = document.createElement('button');
        button.className = 'scroll-to-top';
        button.innerHTML = '↑';
        button.setAttribute('aria-label', 'Volver arriba');
        button.setAttribute('title', 'Volver arriba');

        button.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        document.body.appendChild(button);
        return button;
    }

    // Update header state based on scroll
    function updateHeaderState() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Calculate scroll progress
        const scrollProgressValue = (scrollY / (documentHeight - windowHeight)) * 100;

        // Update progress bar
        if (scrollProgress) {
            scrollProgress.style.transform = `scaleX(${Math.min(scrollProgressValue / 100, 1)})`;
        }

        // Toggle sticky class
        if (scrollY > 100) {
            header.classList.add('sticky');
            if (scrollToTopBtn) scrollToTopBtn.classList.add('visible');
        } else {
            header.classList.remove('sticky');
            if (scrollToTopBtn) scrollToTopBtn.classList.remove('visible');
        }

        lastScrollY = scrollY;
        ticking = false;
    }

    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Throttled scroll handler
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateHeaderState);
            ticking = true;
        }
    }

    // Smooth scroll for navigation links
    function initializeSmoothScroll() {
        const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    const mobileMenu = document.querySelector('.nav__menu');
                    const navToggle = document.querySelector('.nav__toggle');

                    if (mobileMenu && mobileMenu.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                        navToggle.classList.remove('active');
                    }
                }
            });
        });
    }

    // Enhanced Mobile menu functionality
    function initializeMobileMenu() {
        const navToggle = document.querySelector('.nav__toggle');
        const navMenu = document.querySelector('.nav__menu');

        if (!navToggle || !navMenu) return;

        // Create mobile menu overlay
        const overlay = document.createElement('div');
        overlay.className = 'nav__overlay';
        document.body.appendChild(overlay);

        // Create mobile menu header
        const menuHeader = document.createElement('div');
        menuHeader.className = 'nav__menu-header';
        menuHeader.innerHTML = `
            <h3 class="nav__menu-title">Navegación</h3>
            <p class="nav__menu-subtitle">Fres-Kuras</p>
        `;
        navMenu.insertBefore(menuHeader, navMenu.firstChild);

        // Create close button
        const closeButton = document.createElement('button');
        closeButton.className = 'nav__close';
        closeButton.innerHTML = '×';
        closeButton.setAttribute('aria-label', 'Cerrar menú');
        navMenu.appendChild(closeButton);

        // Create divider
        const divider = document.createElement('div');
        divider.className = 'nav__divider';

        // Insert divider before contact button
        const contactBtn = navMenu.querySelector('.nav__contact-btn');
        if (contactBtn) {
            navMenu.insertBefore(divider, contactBtn);
        }

        // Toggle menu function
        function toggleMenu(show = null) {
            const isCurrentlyOpen = navMenu.classList.contains('active');
            const shouldOpen = show !== null ? show : !isCurrentlyOpen;

            if (shouldOpen) {
                openMenu();
            } else {
                closeMenu();
            }
        }

        // Open menu with animations
        function openMenu() {
            navToggle.classList.add('active');
            navMenu.classList.add('active');
            overlay.classList.add('active');

            // Update aria attributes
            navToggle.setAttribute('aria-expanded', 'true');

            // Prevent body scroll
            document.body.style.overflow = 'hidden';

            // Focus management
            setTimeout(() => {
                const firstLink = navMenu.querySelector('.nav__link');
                if (firstLink) firstLink.focus();
            }, 300);

            // Add swipe gesture support
            addSwipeSupport();
        }

        // Close menu with animations
        function closeMenu() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            overlay.classList.remove('active');

            // Update aria attributes
            navToggle.setAttribute('aria-expanded', 'false');

            // Restore body scroll
            document.body.style.overflow = '';

            // Return focus to toggle button
            navToggle.focus();

            // Remove swipe support
            removeSwipeSupport();
        }

        // Swipe gesture support
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        function addSwipeSupport() {
            navMenu.addEventListener('touchstart', handleTouchStart, { passive: true });
            navMenu.addEventListener('touchmove', handleTouchMove, { passive: false });
            navMenu.addEventListener('touchend', handleTouchEnd, { passive: true });
        }

        function removeSwipeSupport() {
            navMenu.removeEventListener('touchstart', handleTouchStart);
            navMenu.removeEventListener('touchmove', handleTouchMove);
            navMenu.removeEventListener('touchend', handleTouchEnd);
        }

        function handleTouchStart(e) {
            startX = e.touches[0].clientX;
            isDragging = true;
            navMenu.style.transition = 'none';
        }

        function handleTouchMove(e) {
            if (!isDragging) return;

            e.preventDefault();
            currentX = e.touches[0].clientX;
            const deltaX = currentX - startX;

            // Only allow swiping to the right (closing)
            if (deltaX > 0) {
                const translateX = Math.min(deltaX, 280);
                navMenu.style.transform = `translateX(${translateX}px)`;

                // Update overlay opacity
                const opacity = Math.max(0, 1 - (deltaX / 280));
                overlay.style.opacity = opacity;
            }
        }

        function handleTouchEnd(e) {
            if (!isDragging) return;

            isDragging = false;
            navMenu.style.transition = '';

            const deltaX = currentX - startX;

            // Close menu if swiped more than 50% or with sufficient velocity
            if (deltaX > 140) {
                closeMenu();
            } else {
                // Snap back to open position
                navMenu.style.transform = '';
                overlay.style.opacity = '';
            }
        }

        // Event listeners
        navToggle.addEventListener('click', () => toggleMenu());
        closeButton.addEventListener('click', () => closeMenu());
        overlay.addEventListener('click', () => closeMenu());

        // Close menu when clicking on nav links
        const navLinks = navMenu.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(() => closeMenu(), 100);
            });
        });

        // Enhanced keyboard navigation
        document.addEventListener('keydown', function (e) {
            if (!navMenu.classList.contains('active')) return;

            switch (e.key) {
                case 'Escape':
                    e.preventDefault();
                    closeMenu();
                    break;
                case 'Tab':
                    // Trap focus within menu
                    trapFocus(e);
                    break;
            }
        });

        // Focus trap function
        function trapFocus(e) {
            const focusableElements = navMenu.querySelectorAll(
                'a[href], button, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }

        // Handle window resize
        window.addEventListener('resize', function () {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });

        // Preload menu animations
        function preloadAnimations() {
            navMenu.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            overlay.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        }

        // Initialize
        preloadAnimations();

        console.log('Enhanced mobile menu initialized');
    }

    // Keyboard navigation enhancement
    function enhanceKeyboardNavigation() {
        const navLinks = document.querySelectorAll('.nav__link');

        navLinks.forEach((link, index) => {
            link.addEventListener('keydown', function (e) {
                let targetIndex;

                switch (e.key) {
                    case 'ArrowRight':
                    case 'ArrowDown':
                        e.preventDefault();
                        targetIndex = (index + 1) % navLinks.length;
                        navLinks[targetIndex].focus();
                        break;
                    case 'ArrowLeft':
                    case 'ArrowUp':
                        e.preventDefault();
                        targetIndex = (index - 1 + navLinks.length) % navLinks.length;
                        navLinks[targetIndex].focus();
                        break;
                    case 'Home':
                        e.preventDefault();
                        navLinks[0].focus();
                        break;
                    case 'End':
                        e.preventDefault();
                        navLinks[navLinks.length - 1].focus();
                        break;
                }
            });
        });
    }

    // Intersection Observer for better performance
    function initializeIntersectionObserver() {
        const sections = document.querySelectorAll('section[id]');

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

                    // Remove active class from all links
                    document.querySelectorAll('.nav__link').forEach(link => {
                        link.classList.remove('active');
                    });

                    // Add active class to current link
                    if (navLink) {
                        navLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // Initialize all navigation features
    function initialize() {
        // Create UI elements
        scrollProgress = createScrollProgress();
        scrollToTopBtn = createScrollToTopButton();

        // Set up scroll listener
        window.addEventListener('scroll', onScroll, { passive: true });

        // Initialize smooth scrolling
        initializeSmoothScroll();

        // Initialize mobile menu
        initializeMobileMenu();

        // Enhance keyboard navigation
        enhanceKeyboardNavigation();

        // Initialize intersection observer for active links
        initializeIntersectionObserver();

        // Initial state update
        updateHeaderState();

        console.log('Sticky navigation with blur effect initialized');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }
}

// Auto-initialize sticky navigation
document.addEventListener('DOMContentLoaded', function () {
    initializeStickyNavigation();
});/* =
==================================
   QUICK ACTIONS FLOTANTES FUNCTIONALITY
   =================================== */
function initializeQuickActions() {
    // Create quick actions container
    const quickActionsContainer = createQuickActionsContainer();

    // Initialize scroll behavior
    initializeScrollBehavior();

    // Initialize WhatsApp integration
    initializeWhatsAppIntegration();

    // Initialize contact actions
    initializeContactActions();

    console.log('Quick actions flotantes initialized');
}

function createQuickActionsContainer() {
    // Create main container
    const container = document.createElement('div');
    container.className = 'quick-actions';
    container.id = 'quick-actions';

    // Create overlay for closing menu
    const overlay = document.createElement('div');
    overlay.className = 'quick-actions-overlay';
    overlay.id = 'quick-actions-overlay';

    // Create quick action buttons
    const actions = [
        {
            id: 'whatsapp-action',
            class: 'quick-action--whatsapp',
            icon: '💬',
            tooltip: 'WhatsApp',
            action: 'whatsapp'
        },
        {
            id: 'contact-action',
            class: 'quick-action--contact',
            icon: '📧',
            tooltip: 'Contacto',
            action: 'contact'
        },
        {
            id: 'call-action',
            class: 'quick-action--call',
            icon: '📞',
            tooltip: 'Llamar',
            action: 'call'
        },
        {
            id: 'scroll-top-action',
            class: 'quick-action--scroll-top',
            icon: '↑',
            tooltip: 'Ir arriba',
            action: 'scroll-top'
        }
    ];

    // Create action buttons
    actions.forEach((actionData, index) => {
        const button = document.createElement('button');
        button.id = actionData.id;
        button.className = `quick-action ${actionData.class}`;
        button.innerHTML = `
            ${actionData.icon}
            <div class="quick-action-tooltip">${actionData.tooltip}</div>
        `;
        button.setAttribute('aria-label', actionData.tooltip);
        button.setAttribute('title', actionData.tooltip);

        // Add click handler
        button.addEventListener('click', () => handleQuickAction(actionData.action));

        container.appendChild(button);
    });

    // Create toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'quick-actions-toggle';
    toggleButton.id = 'quick-actions-toggle';
    toggleButton.innerHTML = '+';
    toggleButton.setAttribute('aria-label', 'Abrir acciones rápidas');
    toggleButton.setAttribute('aria-expanded', 'false');

    // Add toggle functionality
    toggleButton.addEventListener('click', toggleQuickActions);
    overlay.addEventListener('click', closeQuickActions);

    container.appendChild(toggleButton);

    // Add to DOM
    document.body.appendChild(overlay);
    document.body.appendChild(container);

    return container;
}

function toggleQuickActions() {
    const container = document.getElementById('quick-actions');
    const overlay = document.getElementById('quick-actions-overlay');
    const toggle = document.getElementById('quick-actions-toggle');

    const isExpanded = container.classList.contains('expanded');

    if (isExpanded) {
        closeQuickActions();
    } else {
        openQuickActions();
    }
}

function openQuickActions() {
    const container = document.getElementById('quick-actions');
    const overlay = document.getElementById('quick-actions-overlay');
    const toggle = document.getElementById('quick-actions-toggle');

    container.classList.add('expanded');
    overlay.classList.add('active');
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Cerrar acciones rápidas');

    // Add keyboard support
    document.addEventListener('keydown', handleQuickActionsKeyboard);
}

function closeQuickActions() {
    const container = document.getElementById('quick-actions');
    const overlay = document.getElementById('quick-actions-overlay');
    const toggle = document.getElementById('quick-actions-toggle');

    container.classList.remove('expanded');
    overlay.classList.remove('active');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir acciones rápidas');

    // Remove keyboard support
    document.removeEventListener('keydown', handleQuickActionsKeyboard);
}

function handleQuickActionsKeyboard(e) {
    if (e.key === 'Escape') {
        closeQuickActions();
    }
}

function handleQuickAction(action) {
    switch (action) {
        case 'whatsapp':
            openWhatsApp();
            break;
        case 'contact':
            openContactModal();
            break;
        case 'call':
            initiateCall();
            break;
        case 'scroll-top':
            scrollToTop();
            break;
        default:
            console.log('Unknown quick action:', action);
    }

    // Close menu after action
    closeQuickActions();
}

function initializeScrollBehavior() {
    const scrollTopButton = document.getElementById('scroll-top-action');

    if (!scrollTopButton) return;

    // Show/hide scroll to top button based on scroll position
    function updateScrollTopVisibility() {
        const scrollY = window.scrollY;
        const shouldShow = scrollY > 300;

        if (shouldShow) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    }

    // Throttled scroll handler
    let scrollTicking = false;
    function onScroll() {
        if (!scrollTicking) {
            requestAnimationFrame(() => {
                updateScrollTopVisibility();
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    updateScrollTopVisibility(); // Initial check
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Add visual feedback
    const button = document.getElementById('scroll-top-action');
    button.style.transform = 'scale(0.9)';
    setTimeout(() => {
        button.style.transform = '';
    }, 150);
}

function initializeWhatsAppIntegration() {
    // WhatsApp configuration
    const whatsappConfig = {
        number: '+573001234567', // Replace with actual WhatsApp number
        defaultMessage: '¡Hola! Me interesa conocer más sobre los jugos naturales de Fres-Kuras 🍹'
    };

    // Store config globally
    window.whatsappConfig = whatsappConfig;

    // Add notification badge to WhatsApp button (optional)
    addNotificationBadge('whatsapp-action', '!');
}

function openWhatsApp(customMessage = null) {
    const config = window.whatsappConfig;
    const message = customMessage || config.defaultMessage;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${config.number.replace('+', '')}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Track interaction (optional)
    console.log('WhatsApp opened with message:', message);

    // Remove notification badge after interaction
    removeNotificationBadge('whatsapp-action');
}

function initializeContactActions() {
    // Contact configuration
    const contactConfig = {
        email: 'contacto@freskuras.com',
        phone: '+573001234567',
        subject: 'Consulta desde sitio web'
    };

    window.contactConfig = contactConfig;
}

function openContactModal() {
    // Use existing modal system if available
    if (window.ModalSystem) {
        window.ModalSystem.open('contact-form');
    } else {
        // Fallback to email
        const config = window.contactConfig;
        const mailtoUrl = `mailto:${config.email}?subject=${encodeURIComponent(config.subject)}`;
        window.location.href = mailtoUrl;
    }
}

function initiateCall() {
    const config = window.contactConfig;
    const telUrl = `tel:${config.phone}`;
    window.location.href = telUrl;

    // Visual feedback
    const button = document.getElementById('call-action');
    button.style.transform = 'scale(0.9)';
    setTimeout(() => {
        button.style.transform = '';
    }, 150);
}

function addNotificationBadge(buttonId, content = '') {
    const button = document.getElementById(buttonId);
    if (!button) return;

    // Remove existing badge
    const existingBadge = button.querySelector('.quick-action-badge');
    if (existingBadge) {
        existingBadge.remove();
    }

    // Create new badge
    const badge = document.createElement('div');
    badge.className = 'quick-action-badge';
    badge.textContent = content;
    button.appendChild(badge);
}

function removeNotificationBadge(buttonId) {
    const button = document.getElementById(buttonId);
    if (!button) return;

    const badge = button.querySelector('.quick-action-badge');
    if (badge) {
        badge.style.animation = 'none';
        badge.style.transform = 'scale(0)';
        setTimeout(() => badge.remove(), 200);
    }
}

// Utility functions for quick actions
function showQuickActionFeedback(buttonId, message) {
    const button = document.getElementById(buttonId);
    if (!button) return;

    // Create temporary feedback element
    const feedback = document.createElement('div');
    feedback.className = 'quick-action-feedback';
    feedback.textContent = message;
    feedback.style.cssText = `
        position: absolute;
        right: 70px;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(46, 125, 50, 0.9);
        color: white;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 12px;
        white-space: nowrap;
        z-index: 1003;
        animation: quickActionFeedback 2s ease-out forwards;
    `;

    // Add animation keyframes if not exists
    if (!document.querySelector('#quick-action-feedback-styles')) {
        const style = document.createElement('style');
        style.id = 'quick-action-feedback-styles';
        style.textContent = `
            @keyframes quickActionFeedback {
                0% { opacity: 0; transform: translateY(-50%) translateX(10px); }
                20% { opacity: 1; transform: translateY(-50%) translateX(0); }
                80% { opacity: 1; transform: translateY(-50%) translateX(0); }
                100% { opacity: 0; transform: translateY(-50%) translateX(-10px); }
            }
        `;
        document.head.appendChild(style);
    }

    button.appendChild(feedback);

    // Remove after animation
    setTimeout(() => {
        if (feedback.parentNode) {
            feedback.remove();
        }
    }, 2000);
}

// Enhanced WhatsApp functions for different contexts
function openWhatsAppForProduct(productName, productPrice) {
    const message = `¡Hola! Me interesa el producto "${productName}" por $${productPrice}. ¿Podrían darme más información? 🍹`;
    openWhatsApp(message);
    showQuickActionFeedback('whatsapp-action', 'Abriendo WhatsApp...');
}

function openWhatsAppForOrder(items) {
    let message = '¡Hola! Me gustaría hacer el siguiente pedido:\n\n';
    items.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - $${item.price}\n`;
    });
    message += '\n¿Cuál sería el tiempo de entrega? 🚚';

    openWhatsApp(message);
    showQuickActionFeedback('whatsapp-action', 'Enviando pedido...');
}

function openWhatsAppForSupport() {
    const message = 'Hola, necesito ayuda con mi pedido. ¿Podrían asistirme? 🙋‍♂️';
    openWhatsApp(message);
    showQuickActionFeedback('whatsapp-action', 'Contactando soporte...');
}

// Auto-initialize quick actions
document.addEventListener('DOMContentLoaded', function () {
    initializeQuickActions();

    // Add global functions for external use
    window.QuickActions = {
        openWhatsApp: openWhatsApp,
        openWhatsAppForProduct: openWhatsAppForProduct,
        openWhatsAppForOrder: openWhatsAppForOrder,
        openWhatsAppForSupport: openWhatsAppForSupport,
        openContactModal: openContactModal,
        initiateCall: initiateCall,
        scrollToTop: scrollToTop,
        addNotificationBadge: addNotificationBadge,
        removeNotificationBadge: removeNotificationBadge,
        showFeedback: showQuickActionFeedback
    };
});/* ==
=================================
   SCROLL ANIMATIONS WITH INTERSECTION OBSERVER
   =================================== */
function initializeScrollAnimations() {
    // Configuration for different animation types
    const animationConfig = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        animationDelay: 100,
        staggerDelay: 150
    };

    // Initialize different types of observers
    initializeBasicAnimations();
    initializeStaggeredAnimations();
    initializeCounterAnimations();
    initializeProgressBars();
    initializeParallaxElements();

    console.log('Scroll animations with Intersection Observer initialized');
}

function initializeBasicAnimations() {
    // Basic animation observer
    const basicObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;

                // Add animation class with delay
                setTimeout(() => {
                    element.classList.add('animate', 'in-view');
                }, getAnimationDelay(element));

                // Optional: unobserve after animation
                if (!element.hasAttribute('data-repeat')) {
                    basicObserver.unobserve(element);
                }
            } else if (entry.target.hasAttribute('data-repeat')) {
                // Remove animation class for repeatable animations
                entry.target.classList.remove('animate', 'in-view');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all animation elements
    const animationElements = document.querySelectorAll(`
        .animate-on-scroll,
        .fade-in,
        .slide-up,
        .slide-down,
        .slide-left,
        .slide-right,
        .scale-in,
        .scale-out,
        .rotate-in,
        .flip-in,
        .bounce-in,
        .slide-fade-up,
        .slide-fade-left,
        .slide-fade-right,
        .scale-fade,
        .observe-fade,
        .observe-slide-up,
        .observe-slide-left,
        .observe-slide-right,
        .observe-scale
    `);

    animationElements.forEach(element => {
        basicObserver.observe(element);
    });
}

function initializeStaggeredAnimations() {
    // Staggered animation observer
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const container = entry.target;
                const children = container.querySelectorAll('.stagger-item');

                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate', 'in-view');
                    }, index * 150); // 150ms delay between items
                });

                staggerObserver.unobserve(container);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -30px 0px'
    });

    // Observe stagger containers
    const staggerContainers = document.querySelectorAll('.stagger-container');
    staggerContainers.forEach(container => {
        staggerObserver.observe(container);
    });
}

function initializeCounterAnimations() {
    // Counter animation observer
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                counterObserver.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });

    // Observe counter elements
    const counters = document.querySelectorAll('.counter[data-count]');
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = parseInt(element.getAttribute('data-duration')) || 2000;
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    element.classList.add('animate');

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

function initializeProgressBars() {
    // Progress bar observer
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const percentage = progressBar.getAttribute('data-percentage') || 100;

                setTimeout(() => {
                    progressBar.classList.add('animate');
                    progressBar.style.setProperty('--progress', `${percentage}%`);
                }, 200);

                progressObserver.unobserve(progressBar);
            }
        });
    }, {
        threshold: 0.3
    });

    // Observe progress bars
    const progressBars = document.querySelectorAll('.progress-bar[data-percentage]');
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

function initializeParallaxElements() {
    // Parallax observer for performance
    const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast');

    if (parallaxElements.length === 0) return;

    let ticking = false;

    function updateParallax() {
        const scrollY = window.scrollY;

        parallaxElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const speed = getParallaxSpeed(element);
            const yPos = -(scrollY * speed);

            if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
                element.style.transform = `translateY(${yPos}px)`;
            }
        });

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    // Only add scroll listener if user prefers motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('scroll', onScroll, { passive: true });
    }
}

function getParallaxSpeed(element) {
    if (element.classList.contains('parallax-slow')) return 0.2;
    if (element.classList.contains('parallax-medium')) return 0.5;
    if (element.classList.contains('parallax-fast')) return 0.8;
    return 0.3;
}

function getAnimationDelay(element) {
    // Check for custom delay attribute
    const customDelay = element.getAttribute('data-delay');
    if (customDelay) return parseInt(customDelay);

    // Check for stagger classes
    for (let i = 1; i <= 8; i++) {
        if (element.classList.contains(`stagger-${i}`)) {
            return i * 100;
        }
    }

    return 0;
}

// Utility functions for manual animation control
function animateElement(element, animationType = 'fade-in') {
    element.classList.add(animationType);

    setTimeout(() => {
        element.classList.add('animate');
    }, 50);
}

function resetAnimation(element) {
    element.classList.remove('animate', 'in-view');

    // Force reflow
    element.offsetHeight;

    // Re-observe if needed
    setTimeout(() => {
        element.classList.add('animate', 'in-view');
    }, 50);
}

// Batch animation functions
function animateSection(sectionSelector, animationType = 'slide-up', staggerDelay = 150) {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const elements = section.querySelectorAll('.animate-item');

    elements.forEach((element, index) => {
        element.classList.add(animationType);

        setTimeout(() => {
            element.classList.add('animate');
        }, index * staggerDelay);
    });
}

// Auto-apply animations to common elements
function autoApplyAnimations() {
    // Auto-apply to common selectors
    const autoAnimations = [
        { selector: '.hero h1', animation: 'slide-fade-up', delay: 200 },
        { selector: '.hero p', animation: 'slide-fade-up', delay: 400 },
        { selector: '.hero .btn', animation: 'scale-in', delay: 600 },
        { selector: '.section-title', animation: 'slide-up', delay: 0 },
        { selector: '.card', animation: 'scale-fade', delay: 0 },
        { selector: '.feature-item', animation: 'slide-fade-up', delay: 0 },
        { selector: '.testimonial', animation: 'slide-fade-left', delay: 0 },
        { selector: '.blog-card', animation: 'slide-fade-up', delay: 0 },
        { selector: '.contact-form', animation: 'slide-fade-right', delay: 0 }
    ];

    autoAnimations.forEach(({ selector, animation, delay }) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            if (!element.classList.contains('animate-on-scroll')) {
                element.classList.add(animation);
                element.setAttribute('data-delay', delay + (index * 100));
            }
        });
    });
}

// Reveal text animation
function initializeTextReveal() {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const revealTexts = document.querySelectorAll('.reveal-text');
    revealTexts.forEach(text => {
        revealObserver.observe(text);
    });
}

// Typewriter effect
function initializeTypewriter() {
    const typewriterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const text = element.textContent;
                const speed = parseInt(element.getAttribute('data-speed')) || 50;

                element.textContent = '';
                element.classList.add('typewriter');

                let i = 0;
                const typeInterval = setInterval(() => {
                    element.textContent += text.charAt(i);
                    i++;
                    if (i > text.length) {
                        clearInterval(typeInterval);
                        element.classList.remove('typewriter');
                    }
                }, speed);

                typewriterObserver.unobserve(element);
            }
        });
    }, {
        threshold: 0.5
    });

    const typewriterElements = document.querySelectorAll('.typewriter-effect');
    typewriterElements.forEach(element => {
        typewriterObserver.observe(element);
    });
}

// Performance monitoring
function monitorAnimationPerformance() {
    if (!window.performance || !window.performance.mark) return;

    const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
            if (entry.name.includes('animation')) {
                console.log(`Animation performance: ${entry.name} took ${entry.duration}ms`);
            }
        });
    });

    observer.observe({ entryTypes: ['measure'] });
}

// Global animation controls
window.ScrollAnimations = {
    animate: animateElement,
    reset: resetAnimation,
    animateSection: animateSection,
    autoApply: autoApplyAnimations
};

// Auto-initialize scroll animations
document.addEventListener('DOMContentLoaded', function () {
    // Small delay to ensure styles are loaded
    setTimeout(() => {
        initializeScrollAnimations();
        autoApplyAnimations();
        initializeTextReveal();
        initializeTypewriter();

        // Monitor performance in development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            monitorAnimationPerformance();
        }
    }, 100);
});/* ======
=============================
   MICRO-INTERACCIONES EN BOTONES
   =================================== */
function initializeButtonMicroInteractions() {
    // Initialize ripple effects
    initializeRippleEffect();

    // Initialize magnetic effects
    initializeMagneticEffect();

    // Initialize loading states
    initializeLoadingStates();

    // Initialize button groups
    initializeButtonGroups();

    // Initialize toggle buttons
    initializeToggleButtons();

    // Button micro-interactions initialized
}

function initializeRippleEffect() {
    // Enhanced ripple effect for all modern buttons
    const buttons = document.querySelectorAll('.btn-modern');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Don't add ripple if button is disabled or loading
            if (this.disabled || this.classList.contains('btn-loading')) return;

            // Remove existing ripples
            const existingRipples = this.querySelectorAll('.ripple');
            existingRipples.forEach(ripple => ripple.remove());

            // Create ripple element
            const ripple = document.createElement('span');
            ripple.className = 'ripple';

            // Calculate ripple size and position
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            // Style the ripple
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: rippleAnimation 0.6s linear;
                pointer-events: none;
                z-index: 1;
            `;

            // Add ripple animation keyframes if not exists
            if (!document.querySelector('#ripple-styles')) {
                const style = document.createElement('style');
                style.id = 'ripple-styles';
                style.textContent = `
                    @keyframes rippleAnimation {
                        to {
                            transform: scale(2);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
            }

            // Add ripple to button
            this.appendChild(ripple);

            // Remove ripple after animation
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.remove();
                }
            }, 600);
        });
    });
}

function initializeMagneticEffect() {
    const magneticButtons = document.querySelectorAll('.btn-magnetic');

    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Calculate magnetic strength (max 10px movement)
            const strength = 0.3;
            const moveX = x * strength;
            const moveY = y * strength;

            this.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'translate(0, 0)';
        });
    });
}

function initializeLoadingStates() {
    // Function to set button loading state
    window.setButtonLoading = function (button, loading = true) {
        if (typeof button === 'string') {
            button = document.querySelector(button);
        }

        if (!button) return;

        if (loading) {
            button.classList.add('btn-loading');
            button.disabled = true;
            button.setAttribute('data-original-text', button.textContent);
        } else {
            button.classList.remove('btn-loading');
            button.disabled = false;
            const originalText = button.getAttribute('data-original-text');
            if (originalText) {
                button.textContent = originalText;
                button.removeAttribute('data-original-text');
            }
        }
    };

    // Function to set button success state
    window.setButtonSuccess = function (button, duration = 2000) {
        if (typeof button === 'string') {
            button = document.querySelector(button);
        }

        if (!button) return;

        button.classList.remove('btn-loading');
        button.classList.add('btn-success');
        button.disabled = true;

        setTimeout(() => {
            button.classList.remove('btn-success');
            button.disabled = false;
            const originalText = button.getAttribute('data-original-text');
            if (originalText) {
                button.textContent = originalText;
                button.removeAttribute('data-original-text');
            }
        }, duration);
    };

    // Function to set button error state
    window.setButtonError = function (button, duration = 2000) {
        if (typeof button === 'string') {
            button = document.querySelector(button);
        }

        if (!button) return;

        button.classList.remove('btn-loading');
        button.classList.add('btn-error');

        setTimeout(() => {
            button.classList.remove('btn-error');
            button.disabled = false;
            const originalText = button.getAttribute('data-original-text');
            if (originalText) {
                button.textContent = originalText;
                button.removeAttribute('data-original-text');
            }
        }, duration);
    };
}

function initializeButtonGroups() {
    const buttonGroups = document.querySelectorAll('.btn-group');

    buttonGroups.forEach(group => {
        const buttons = group.querySelectorAll('.btn-modern');

        buttons.forEach(button => {
            button.addEventListener('click', function () {
                // Remove active class from all buttons in group
                buttons.forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                // Trigger custom event
                const event = new CustomEvent('buttonGroupChange', {
                    detail: {
                        group: group,
                        activeButton: this,
                        value: this.getAttribute('data-value') || this.textContent
                    }
                });
                group.dispatchEvent(event);
            });
        });
    });
}

function initializeToggleButtons() {
    const toggleButtons = document.querySelectorAll('.btn-toggle');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('active');

            // Update aria-pressed for accessibility
            const isPressed = this.classList.contains('active');
            this.setAttribute('aria-pressed', isPressed);

            // Trigger custom event
            const event = new CustomEvent('buttonToggle', {
                detail: {
                    button: this,
                    active: isPressed,
                    value: this.getAttribute('data-value') || this.textContent
                }
            });
            this.dispatchEvent(event);
        });
    });
}

// Advanced button animations
function animateButtonSequence(buttons, delay = 200) {
    if (typeof buttons === 'string') {
        buttons = document.querySelectorAll(buttons);
    }

    buttons.forEach((button, index) => {
        setTimeout(() => {
            button.style.animation = 'buttonSlideIn 0.5s ease-out forwards';
        }, index * delay);
    });

    // Add animation keyframes if not exists
    if (!document.querySelector('#button-sequence-styles')) {
        const style = document.createElement('style');
        style.id = 'button-sequence-styles';
        style.textContent = `
            @keyframes buttonSlideIn {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Button hover sound effect (optional)
function addButtonSounds() {
    const buttons = document.querySelectorAll('.btn-modern');

    // Create audio context (only if user interacts first)
    let audioContext;
    let hasInteracted = false;

    function initAudio() {
        if (!hasInteracted) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            hasInteracted = true;
        }
    }

    function playTone(frequency, duration) {
        if (!audioContext) return;

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    }

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            initAudio();
            playTone(800, 0.1);
        });

        button.addEventListener('click', () => {
            initAudio();
            playTone(1000, 0.1);
        });
    });
}

// Button performance monitoring
function monitorButtonPerformance() {
    const buttons = document.querySelectorAll('.btn-modern');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const startTime = performance.now();

            // Monitor animation performance
            const observer = new MutationObserver(() => {
                const endTime = performance.now();
                const duration = endTime - startTime;

                if (duration > 16) { // More than one frame at 60fps
                    console.warn(`Button animation took ${duration}ms`, this);
                }

                observer.disconnect();
            });

            observer.observe(this, { attributes: true, attributeFilter: ['class'] });
        });
    });
}

// Utility functions for external use
function createButton(options = {}) {
    const {
        text = 'Button',
        type = 'primary',
        size = 'normal',
        icon = null,
        onClick = null,
        disabled = false,
        loading = false
    } = options;

    const button = document.createElement('button');
    button.className = `btn-modern btn-${type}`;

    if (size !== 'normal') {
        button.classList.add(`btn-${size}`);
    }

    if (icon) {
        button.classList.add('btn-icon');
        button.innerHTML = `<span class="icon">${icon}</span>${text}`;
    } else {
        button.textContent = text;
    }

    if (disabled) {
        button.disabled = true;
    }

    if (loading) {
        button.classList.add('btn-loading');
    }

    if (onClick) {
        button.addEventListener('click', onClick);
    }

    return button;
}

// Auto-enhance existing buttons
function autoEnhanceButtons() {
    // Find buttons that don't have modern classes
    const buttons = document.querySelectorAll('button:not(.btn-modern), input[type="submit"]:not(.btn-modern), input[type="button"]:not(.btn-modern)');

    buttons.forEach(button => {
        // Skip if already enhanced or is a special button
        if (button.classList.contains('btn-modern') ||
            button.classList.contains('nav__toggle') ||
            button.classList.contains('quick-action')) {
            return;
        }

        // Add modern button class
        button.classList.add('btn-modern');

        // Determine button type based on context
        if (button.type === 'submit' || button.classList.contains('primary')) {
            button.classList.add('btn-primary');
        } else if (button.classList.contains('secondary')) {
            button.classList.add('btn-secondary');
        } else if (button.classList.contains('outline')) {
            button.classList.add('btn-outline');
        } else {
            button.classList.add('btn-primary'); // Default
        }
    });
}

// Export functions for global use
window.ButtonInteractions = {
    setLoading: window.setButtonLoading,
    setSuccess: window.setButtonSuccess,
    setError: window.setButtonError,
    create: createButton,
    animateSequence: animateButtonSequence,
    autoEnhance: autoEnhanceButtons
};

// Auto-initialize button micro-interactions
document.addEventListener('DOMContentLoaded', function () {
    initializeButtonMicroInteractions();
    autoEnhanceButtons();

    // Optional: Add sound effects (uncomment if desired)
    // addButtonSounds();

    // Monitor performance in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        monitorButtonPerformance();
    }
});/*
 ===================================
   PARALLAX SUAVE EN HERO SECTION
   =================================== */
function initializeHeroParallax() {
    const heroSection = document.querySelector('.hero-parallax');
    if (!heroSection) {
        console.warn('Hero parallax section not found');
        return;
    }

    // Initialize different parallax effects
    initializeBasicParallax();
    initializeMouseParallax();
    initializeParticleSystem();
    initializeScrollIndicator();

    // Performance monitoring
    monitorParallaxPerformance();

    console.log('Hero parallax effects initialized');
}

function initializeBasicParallax() {
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    const heroSection = document.querySelector('.hero-parallax');

    if (parallaxLayers.length === 0) return;

    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    let ticking = false;
    let lastScrollY = 0;

    // Parallax speeds for different layers
    const parallaxSpeeds = {
        'parallax-bg': 0.5,
        'parallax-decorative': 0.3,
        'parallax-particles': 0.8,
        'parallax-content': 0.1
    };

    function updateParallax() {
        const scrollY = window.scrollY;
        const heroRect = heroSection.getBoundingClientRect();

        // Only apply parallax when hero is visible
        if (heroRect.bottom < 0 || heroRect.top > window.innerHeight) {
            ticking = false;
            return;
        }

        parallaxLayers.forEach(layer => {
            const speed = getParallaxSpeed(layer, parallaxSpeeds);
            const yPos = scrollY * speed;

            // Use transform3d for hardware acceleration
            layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });

        // Update decorative shapes
        updateDecorativeShapes(scrollY);

        lastScrollY = scrollY;
        ticking = false;
    }

    function getParallaxSpeed(layer, speeds) {
        for (const [className, speed] of Object.entries(speeds)) {
            if (layer.classList.contains(className)) {
                return speed;
            }
        }
        return 0.2; // Default speed
    }

    function updateDecorativeShapes(scrollY) {
        const shapes = document.querySelectorAll('.parallax-shape');
        shapes.forEach((shape, index) => {
            const speed = 0.1 + (index * 0.05);
            const rotation = scrollY * 0.1;
            const yPos = scrollY * speed;

            shape.style.transform = `translate3d(0, ${yPos}px, 0) rotate(${rotation}deg)`;
        });
    }

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    // Add scroll listener with passive option for better performance
    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial update
    updateParallax();
}

function initializeMouseParallax() {
    const heroSection = document.querySelector('.hero-parallax');
    const parallaxContent = document.querySelector('.parallax-content');

    if (!heroSection || !parallaxContent) return;

    // Check if device supports hover (not touch-only)
    if (!window.matchMedia('(hover: hover)').matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let isMouseInside = false;

    function updateMouseParallax() {
        if (!isMouseInside) return;

        const rect = heroSection.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate relative position (-1 to 1)
        const relativeX = (mouseX - centerX) / centerX;
        const relativeY = (mouseY - centerY) / centerY;

        // Apply subtle tilt effect
        const tiltX = relativeY * 5; // Max 5 degrees
        const tiltY = relativeX * -5; // Max 5 degrees (inverted)

        // Apply transform to content
        parallaxContent.style.transform = `
            perspective(1000px) 
            rotateX(${tiltX}deg) 
            rotateY(${tiltY}deg) 
            translateZ(0)
        `;

        // Update decorative elements
        updateMouseDecorativeElements(relativeX, relativeY);
    }

    function updateMouseDecorativeElements(relativeX, relativeY) {
        const shapes = document.querySelectorAll('.parallax-shape');
        shapes.forEach((shape, index) => {
            const intensity = 0.5 + (index * 0.2);
            const moveX = relativeX * 20 * intensity;
            const moveY = relativeY * 20 * intensity;

            shape.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        });
    }

    function resetMouseParallax() {
        parallaxContent.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';

        const shapes = document.querySelectorAll('.parallax-shape');
        shapes.forEach(shape => {
            shape.style.transform = 'translate3d(0, 0, 0)';
        });
    }

    // Mouse event listeners
    heroSection.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        isMouseInside = true;

        requestAnimationFrame(updateMouseParallax);
    });

    heroSection.addEventListener('mouseenter', function () {
        isMouseInside = true;
    });

    heroSection.addEventListener('mouseleave', function () {
        isMouseInside = false;
        resetMouseParallax();
    });
}

function initializeParticleSystem() {
    const particlesContainer = document.querySelector('.parallax-particles');
    if (!particlesContainer) return;

    // Check performance and device capabilities
    if (window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    const particleCount = Math.min(50, Math.floor(window.innerWidth / 20));

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random animation delay
        particle.style.animationDelay = Math.random() * 3 + 's';

        // Random size variation
        const size = 2 + Math.random() * 4;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        return particle;
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        const particle = createParticle();
        particlesContainer.appendChild(particle);
    }

    // Animate particles on scroll
    function animateParticles() {
        const particles = particlesContainer.querySelectorAll('.particle');
        const scrollY = window.scrollY;

        particles.forEach((particle, index) => {
            const speed = 0.5 + (index % 3) * 0.2;
            const yPos = scrollY * speed;

            particle.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    }

    let particleTicking = false;
    function onParticleScroll() {
        if (!particleTicking) {
            requestAnimationFrame(animateParticles);
            particleTicking = true;
            setTimeout(() => { particleTicking = false; }, 16);
        }
    }

    window.addEventListener('scroll', onParticleScroll, { passive: true });
}

function initializeScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (!scrollIndicator) return;

    // Hide indicator when user starts scrolling
    let hideTimeout;

    function hideIndicator() {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.transform = 'translateX(-50%) translateY(20px)';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.transform = 'translateX(-50%) translateY(0)';
        }
    }

    // Smooth scroll when clicking indicator
    scrollIndicator.addEventListener('click', function () {
        const nextSection = document.querySelector('.hero-parallax').nextElementSibling;
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    window.addEventListener('scroll', hideIndicator, { passive: true });
    hideIndicator(); // Initial check
}

function monitorParallaxPerformance() {
    if (!window.performance || window.location.hostname === 'localhost') return;

    let frameCount = 0;
    let lastTime = performance.now();

    function measureFPS() {
        frameCount++;
        const currentTime = performance.now();

        if (currentTime - lastTime >= 1000) {
            const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));

            if (fps < 30) {
                console.warn(`Parallax performance warning: ${fps} FPS`);
                // Optionally disable some effects
                disableHeavyEffects();
            }

            frameCount = 0;
            lastTime = currentTime;
        }

        requestAnimationFrame(measureFPS);
    }

    requestAnimationFrame(measureFPS);
}

function disableHeavyEffects() {
    // Disable particles on low-performance devices
    const particles = document.querySelector('.parallax-particles');
    if (particles) {
        particles.style.display = 'none';
    }

    // Reduce decorative shapes
    const shapes = document.querySelectorAll('.parallax-shape');
    shapes.forEach((shape, index) => {
        if (index > 1) {
            shape.style.display = 'none';
        }
    });

    console.log('Heavy parallax effects disabled for better performance');
}

// Utility functions for external use
function createHeroParallax(options = {}) {
    const {
        backgroundImage = 'images/hero-bg.jpg',
        title = 'Bienvenido',
        subtitle = 'Descubre nuestros productos',
        particles = true,
        shapes = true
    } = options;

    const heroHTML = `
        <section class="hero-parallax">
            <div class="parallax-layer parallax-bg" style="background-image: linear-gradient(135deg, rgba(46, 125, 50, 0.8), rgba(255, 143, 0, 0.6)), url('${backgroundImage}')"></div>
            
            ${shapes ? `
            <div class="parallax-layer parallax-decorative">
                <div class="parallax-shape"></div>
                <div class="parallax-shape"></div>
                <div class="parallax-shape"></div>
            </div>
            ` : ''}
            
            ${particles ? '<div class="parallax-layer parallax-particles"></div>' : ''}
            
            <div class="parallax-overlay"></div>
            
            <div class="parallax-content">
                <h1 class="hero-title">${title}</h1>
                <p class="hero-subtitle">${subtitle}</p>
                <div class="hero-cta">
                    <button class="btn-modern btn-primary btn-large">Ver Productos</button>
                    <button class="btn-modern btn-outline btn-large">Contactar</button>
                </div>
            </div>
            
            <div class="scroll-indicator"></div>
        </section>
    `;

    return heroHTML;
}

// Intersection Observer for performance optimization
function initializeParallaxObserver() {
    const heroSection = document.querySelector('.hero-parallax');
    if (!heroSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Enable parallax effects
                heroSection.classList.add('parallax-active');
            } else {
                // Disable parallax effects when not visible
                heroSection.classList.remove('parallax-active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px 0px'
    });

    observer.observe(heroSection);
}

// Export functions for global use
window.HeroParallax = {
    create: createHeroParallax,
    disable: disableHeavyEffects,
    init: initializeHeroParallax
};

// Auto-initialize hero parallax
document.addEventListener('DOMContentLoaded', function () {
    // Small delay to ensure other systems are loaded
    setTimeout(() => {
        initializeHeroParallax();
        initializeParallaxObserver();
    }, 100);
});/* =======
============================
   BLOG CARDS CON GLASSMORPHISM
   =================================== */
function initializeBlogCards() {
    // Initialize blog card interactions
    initializeBlogCardHover();
    initializeBlogCardLazyLoading();
    initializeBlogCardFiltering();
    initializeBlogCardSharing();

    console.log('Blog cards with glassmorphism initialized');
}

function initializeBlogCardHover() {
    const blogCards = document.querySelectorAll('.blog-card');

    blogCards.forEach(card => {
        // Enhanced hover effects
        card.addEventListener('mouseenter', function () {
            this.classList.add('hovered');

            // Add subtle tilt effect
            this.addEventListener('mousemove', handleCardTilt);
        });

        card.addEventListener('mouseleave', function () {
            this.classList.remove('hovered');
            this.removeEventListener('mousemove', handleCardTilt);

            // Reset tilt
            this.style.transform = '';
        });

        // Click handling
        card.addEventListener('click', function (e) {
            // Don't trigger if clicking on interactive elements
            if (e.target.closest('.blog-card__read-more, .blog-card__tag, .blog-card__category')) {
                return;
            }

            handleBlogCardClick(this);
        });
    });
}

function handleCardTilt(e) {
    if (window.innerWidth < 768) return; // Disable on mobile

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / rect.height) * -10; // Max 10 degrees
    const rotateY = (mouseX / rect.width) * 10;

    card.style.transform = `
        translateY(-8px) scale(1.02) 
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
    `;
}

function handleBlogCardClick(card) {
    const title = card.querySelector('.blog-card__title')?.textContent;
    const url = card.getAttribute('data-url') || '#';

    // Add click animation
    card.style.transform = 'translateY(-4px) scale(1.01)';

    setTimeout(() => {
        if (url !== '#') {
            window.open(url, '_blank');
        } else {
            console.log('Blog card clicked:', title);
            // Here you could open a modal or navigate to the blog post
        }
    }, 150);

    setTimeout(() => {
        card.style.transform = '';
    }, 300);
}

function initializeBlogCardLazyLoading() {
    const blogImages = document.querySelectorAll('.blog-card__image img[data-src]');

    if (blogImages.length === 0) return;

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const card = img.closest('.blog-card');

                // Add loading state
                card.classList.add('blog-card--loading');

                // Load image
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');

                img.onload = () => {
                    card.classList.remove('blog-card--loading');
                    img.style.opacity = '1';
                };

                img.onerror = () => {
                    card.classList.remove('blog-card--loading');
                    img.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><rect width="400" height="200" fill="%23f0f0f0"/><text x="200" y="100" text-anchor="middle" fill="%23999">Image not found</text></svg>';
                };

                imageObserver.unobserve(img);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px 0px'
    });

    blogImages.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        imageObserver.observe(img);
    });
}

function initializeBlogCardFiltering() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const blogCards = document.querySelectorAll('.blog-card');

    if (filterButtons.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter cards
            filterBlogCards(filter, blogCards);
        });
    });
}

function filterBlogCards(filter, cards) {
    cards.forEach((card, index) => {
        const category = card.querySelector('.blog-card__category')?.textContent.toLowerCase();
        const shouldShow = filter === 'all' || category === filter.toLowerCase();

        if (shouldShow) {
            card.style.display = 'block';
            card.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s both`;
        } else {
            card.style.animation = 'fadeOut 0.3s ease both';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });

    // Add animation keyframes if not exists
    if (!document.querySelector('#blog-filter-animations')) {
        const style = document.createElement('style');
        style.id = 'blog-filter-animations';
        style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            @keyframes fadeOut {
                from {
                    opacity: 1;
                    transform: translateY(0);
                }
                to {
                    opacity: 0;
                    transform: translateY(-30px);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

function initializeBlogCardSharing() {
    const shareButtons = document.querySelectorAll('.blog-card__share');

    shareButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();

            const card = this.closest('.blog-card');
            const title = card.querySelector('.blog-card__title')?.textContent;
            const url = card.getAttribute('data-url') || window.location.href;

            if (navigator.share) {
                navigator.share({
                    title: title,
                    url: url
                }).catch(console.error);
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(url).then(() => {
                    showBlogNotification('Link copied to clipboard!');
                }).catch(() => {
                    showBlogNotification('Unable to copy link');
                });
            }
        });
    });
}

function showBlogNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'blog-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(46, 125, 50, 0.9);
        backdrop-filter: blur(10px);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 10000;
        animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 2.7s;
    `;

    // Add animation styles
    if (!document.querySelector('#blog-notification-styles')) {
        const style = document.createElement('style');
        style.id = 'blog-notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Utility functions for blog cards
function createBlogCard(data) {
    const {
        title = 'Blog Post Title',
        excerpt = 'Blog post excerpt...',
        category = 'General',
        categoryClass = '',
        author = 'Author',
        date = new Date().toLocaleDateString(),
        image = '',
        url = '#',
        tags = [],
        featured = false
    } = data;

    const cardHTML = `
        <article class="blog-card ${featured ? 'blog-card--featured' : ''}" data-url="${url}">
            <div class="blog-card__image">
                <img src="${image}" alt="${title}" loading="lazy">
            </div>
            <div class="blog-card__content">
                <span class="blog-card__category ${categoryClass}">${category}</span>
                <h3 class="blog-card__title">${title}</h3>
                <p class="blog-card__excerpt">${excerpt}</p>
                <div class="blog-card__meta">
                    <div class="blog-card__date">
                        <span>📅</span>
                        <span>${date}</span>
                    </div>
                    <div class="blog-card__author">
                        <div class="blog-card__author-avatar">${author.charAt(0)}</div>
                        <span>${author}</span>
                    </div>
                </div>
                <a href="${url}" class="blog-card__read-more">
                    Leer más
                    <span>→</span>
                </a>
                ${tags.length > 0 ? `
                    <div class="blog-card__tags">
                        ${tags.map(tag => `<span class="blog-card__tag">${tag}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
        </article>
    `;

    return cardHTML;
}

function loadMoreBlogPosts() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;

    // Simulate loading more posts
    const loadingCard = document.createElement('div');
    loadingCard.className = 'blog-card blog-card--loading';
    loadingCard.innerHTML = '<div style="height: 300px; display: flex; align-items: center; justify-content: center;">Loading...</div>';

    blogGrid.appendChild(loadingCard);

    // Simulate API call
    setTimeout(() => {
        loadingCard.remove();

        // Add new cards (this would come from your API)
        const newPosts = [
            {
                title: 'New Blog Post',
                excerpt: 'This is a new blog post loaded dynamically...',
                category: 'News',
                author: 'Admin',
                image: 'https://via.placeholder.com/400x200',
                tags: ['New', 'Dynamic']
            }
        ];

        newPosts.forEach(post => {
            const cardElement = document.createElement('div');
            cardElement.innerHTML = createBlogCard(post);
            const card = cardElement.firstElementChild;

            blogGrid.appendChild(card);

            // Initialize interactions for new card
            initializeBlogCardHover();
        });
    }, 1500);
}

// Search functionality
function searchBlogPosts(query) {
    const blogCards = document.querySelectorAll('.blog-card');
    const searchTerm = query.toLowerCase();

    blogCards.forEach(card => {
        const title = card.querySelector('.blog-card__title')?.textContent.toLowerCase() || '';
        const excerpt = card.querySelector('.blog-card__excerpt')?.textContent.toLowerCase() || '';
        const category = card.querySelector('.blog-card__category')?.textContent.toLowerCase() || '';

        const matches = title.includes(searchTerm) ||
            excerpt.includes(searchTerm) ||
            category.includes(searchTerm);

        if (matches) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.3s ease both';
        } else {
            card.style.animation = 'fadeOut 0.3s ease both';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Filter functionality
function filterBlogCards(category) {
    const blogCards = document.querySelectorAll('.blog-card');

    blogCards.forEach(card => {
        const cardCategory = card.querySelector('.blog-card__category')?.textContent.toLowerCase() || '';

        if (category === 'all' || cardCategory.includes(category.toLowerCase())) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.3s ease both';
        } else {
            card.style.animation = 'fadeOut 0.3s ease both';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Export functions for global use
window.BlogCards = {
    create: createBlogCard,
    loadMore: loadMoreBlogPosts,
    search: searchBlogPosts,
    filter: filterBlogCards,
    init: initializeBlogCards
};

// Auto-initialize blog cards
document.addEventListener('DOMContentLoaded', function () {
    initializeBlogCards();
});

/* ===================================
   PRODUCT QUICK VIEW MODALS - FASE 2
   =================================== */

// Product Quick View System
const ProductQuickView = {
    currentModal: null,
    currentProduct: null,
    currentQuantity: 1,

    // Initialize the quick view system
    init: function () {
        this.bindEvents();
        this.createModalContainer();
        console.log('Product Quick View system initialized');
    },

    // Bind events to product cards
    bindEvents: function () {
        // Add quick view buttons to existing product cards
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('product-quick-view-btn') ||
                e.target.closest('.product-quick-view-btn')) {
                e.preventDefault();
                e.stopPropagation();

                const button = e.target.closest('.product-quick-view-btn') || e.target;
                const productId = button.getAttribute('data-product-id');
                this.openQuickView(productId);
            }
        });

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.currentModal) {
                this.closeQuickView();
            }
        });
    },

    // Create modal container
    createModalContainer: function () {
        if (document.getElementById('product-quick-view-modal')) return;

        const modalHTML = `
            <div id="product-quick-view-modal" class="product-quick-view">
                <div class="product-quick-view__container">
                    <div class="product-quick-view__header">
                        <button class="product-quick-view__close" aria-label="Cerrar">&times;</button>
                    </div>
                    <div class="product-quick-view__content">
                        <div class="product-quick-view__loading">
                            Cargando producto...
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Bind close events
        const modal = document.getElementById('product-quick-view-modal');
        const closeBtn = modal.querySelector('.product-quick-view__close');

        closeBtn.addEventListener('click', () => this.closeQuickView());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeQuickView();
            }
        });
    },

    // Open quick view modal
    openQuickView: function (productId) {
        const product = this.getProductData(productId);
        if (!product) {
            console.error('Product not found:', productId);
            return;
        }

        this.currentProduct = product;
        this.currentQuantity = 1;
        this.currentModal = document.getElementById('product-quick-view-modal');

        // Show modal with loading state
        this.currentModal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Simulate loading delay for better UX
        setTimeout(() => {
            this.renderProductContent(product);
        }, 300);

        // Track analytics
        Utils.trackEvent('quick_view_opened', { productId });
    },

    // Close quick view modal
    closeQuickView: function () {
        if (!this.currentModal) return;

        this.currentModal.classList.remove('active');
        document.body.style.overflow = '';

        // Reset state
        setTimeout(() => {
            this.currentModal = null;
            this.currentProduct = null;
            this.currentQuantity = 1;
        }, 400);
    },

    // Get product data
    getProductData: function (productId) {
        // Try to get from existing ProductUtils first
        if (window.ProductUtils) {
            const product = ProductUtils.getProductById(productId);
            if (product) return product;
        }

        // Fallback to menuProducts if available
        if (window.menuProducts) {
            for (const category in menuProducts) {
                const product = menuProducts[category].find(p => p.id === productId);
                if (product) return product;
            }
        }

        // Fallback to productsData
        for (const category in productsData) {
            const product = productsData[category].find(p => p.id === productId);
            if (product) return product;
        }

        return null;
    },

    // Render product content in modal
    renderProductContent: function (product) {
        const content = this.currentModal.querySelector('.product-quick-view__content');

        // Generate multiple images for gallery (simulate variants)
        const images = [
            product.image,
            product.image, // Duplicate for demo
            product.image  // Duplicate for demo
        ];

        // Generate nutritional info (sample data)
        const nutrition = {
            calories: Math.floor(Math.random() * 200) + 50,
            sugar: Math.floor(Math.random() * 30) + 5,
            vitamin_c: Math.floor(Math.random() * 100) + 20,
            fiber: Math.floor(Math.random() * 10) + 2
        };

        const contentHTML = `
            <div class="product-quick-view__gallery">
                <div class="product-quick-view__main-image">
                    <img src="${images[0]}" alt="${product.name}" id="main-product-image">
                </div>
                <div class="product-quick-view__thumbnails">
                    ${images.map((img, index) => `
                        <div class="product-quick-view__thumbnail ${index === 0 ? 'active' : ''}" 
                             data-image="${img}">
                            <img src="${img}" alt="${product.name} vista ${index + 1}">
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="product-quick-view__details">
                <div class="product-quick-view__badges">
                    ${product.badges ? product.badges.map(badge => `
                        <span class="product-quick-view__badge ${this.getBadgeClass(badge)}">${badge}</span>
                    `).join('') : ''}
                </div>
                
                <h2 class="product-quick-view__title">${product.name}</h2>
                <div class="product-quick-view__price">$${product.price.toFixed(2)}</div>
                <p class="product-quick-view__description">${product.description}</p>
                
                ${product.ingredients ? `
                    <div class="product-quick-view__ingredients">
                        <h3 class="product-quick-view__ingredients-title">Ingredientes</h3>
                        <div class="product-quick-view__ingredients-list">
                            ${product.ingredients.map(ingredient => `
                                <span class="product-quick-view__ingredient">${ingredient}</span>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <div class="product-quick-view__quantity">
                    <label class="product-quick-view__quantity-label">Cantidad</label>
                    <div class="product-quick-view__quantity-controls">
                        <button class="product-quick-view__quantity-btn" data-action="decrease">-</button>
                        <input type="number" class="product-quick-view__quantity-input" 
                               value="1" min="1" max="10" id="product-quantity">
                        <button class="product-quick-view__quantity-btn" data-action="increase">+</button>
                    </div>
                </div>
                
                <div class="product-quick-view__actions">
                    <button class="product-quick-view__btn product-quick-view__btn--primary" 
                            id="add-to-cart-btn">
                        Agregar al Carrito
                    </button>
                    <button class="product-quick-view__btn product-quick-view__btn--secondary" 
                            id="whatsapp-order-btn">
                        Ordenar por WhatsApp
                    </button>
                </div>
                
                <div class="product-quick-view__nutrition">
                    <h3 class="product-quick-view__nutrition-title">Información Nutricional</h3>
                    <div class="product-quick-view__nutrition-grid">
                        <div class="product-quick-view__nutrition-item">
                            <span>Calorías</span>
                            <span class="product-quick-view__nutrition-value">${nutrition.calories}</span>
                        </div>
                        <div class="product-quick-view__nutrition-item">
                            <span>Azúcar</span>
                            <span class="product-quick-view__nutrition-value">${nutrition.sugar}g</span>
                        </div>
                        <div class="product-quick-view__nutrition-item">
                            <span>Vitamina C</span>
                            <span class="product-quick-view__nutrition-value">${nutrition.vitamin_c}%</span>
                        </div>
                        <div class="product-quick-view__nutrition-item">
                            <span>Fibra</span>
                            <span class="product-quick-view__nutrition-value">${nutrition.fiber}g</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        content.innerHTML = contentHTML;

        // Bind events for the rendered content
        this.bindModalEvents();
    },

    // Bind events for modal content
    bindModalEvents: function () {
        const modal = this.currentModal;

        // Thumbnail navigation
        const thumbnails = modal.querySelectorAll('.product-quick-view__thumbnail');
        const mainImage = modal.querySelector('#main-product-image');

        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                thumbnails.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                mainImage.src = thumb.getAttribute('data-image');
            });
        });

        // Quantity controls
        const quantityInput = modal.querySelector('#product-quantity');
        const quantityBtns = modal.querySelectorAll('.product-quick-view__quantity-btn');

        quantityBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.getAttribute('data-action');
                let currentValue = parseInt(quantityInput.value);

                if (action === 'increase' && currentValue < 10) {
                    currentValue++;
                } else if (action === 'decrease' && currentValue > 1) {
                    currentValue--;
                }

                quantityInput.value = currentValue;
                this.currentQuantity = currentValue;
            });
        });

        quantityInput.addEventListener('change', () => {
            this.currentQuantity = parseInt(quantityInput.value);
        });

        // Action buttons
        const addToCartBtn = modal.querySelector('#add-to-cart-btn');
        const whatsappBtn = modal.querySelector('#whatsapp-order-btn');

        addToCartBtn.addEventListener('click', () => {
            this.handleAddToCart();
        });

        whatsappBtn.addEventListener('click', () => {
            this.handleWhatsAppOrder();
        });
    },

    // Handle add to cart
    handleAddToCart: function () {
        const btn = this.currentModal.querySelector('#add-to-cart-btn');

        // Add loading state
        btn.classList.add('btn-loading');
        btn.textContent = 'Agregando...';
        btn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            btn.classList.remove('btn-loading');
            btn.classList.add('btn-success');
            btn.textContent = '¡Agregado!';

            // Show success notification
            this.showNotification(`${this.currentProduct.name} agregado al carrito (${this.currentQuantity})`);

            // Reset button after delay
            setTimeout(() => {
                btn.classList.remove('btn-success');
                btn.textContent = 'Agregar al Carrito';
                btn.disabled = false;
            }, 2000);

        }, 1000);

        // Track analytics
        Utils.trackEvent('add_to_cart', { productId: this.currentProduct.id, quantity: this.currentQuantity });
    },

    // Handle WhatsApp order
    handleWhatsAppOrder: function () {
        const product = this.currentProduct;
        const quantity = this.currentQuantity;
        const total = (product.price * quantity).toFixed(2);

        const message = `¡Hola! Me interesa ordenar:\n\n` +
            `🍹 ${product.name}\n` +
            `💰 Precio: $${product.price.toFixed(2)}\n` +
            `📦 Cantidad: ${quantity}\n` +
            `💵 Total: $${total}\n\n` +
            `¿Podrían confirmar disponibilidad y tiempo de entrega?`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');

        // Show feedback
        this.showNotification('Abriendo WhatsApp...');

        // Track analytics
        Utils.trackEvent('whatsapp_order', { productId: product.id, quantity });
    },

    // Get badge class for styling
    getBadgeClass: function (badge) {
        const badgeClasses = {
            'Popular': 'product-quick-view__badge--popular',
            'Premium': 'product-quick-view__badge--premium',
            'Detox': '',
            '100% Natural': '',
            'Tropical': '',
            'Cremoso': 'product-quick-view__badge--popular',
            'Clásico': ''
        };
        return badgeClasses[badge] || '';
    },

    // Show notification
    showNotification: function (message, type) {
        return Utils.showNotification(message, type);
    },

    // Analytics tracking consolidated in Utils.trackEvent
};

// Auto-enhance existing product cards with quick view buttons
function enhanceProductCardsWithQuickView() {
    const productCards = document.querySelectorAll('.menu__card');

    productCards.forEach(card => {
        const productId = card.getAttribute('data-product-id');
        if (!productId) return;

        // Check if quick view button already exists
        if (card.querySelector('.product-quick-view-btn')) return;

        // Create quick view button
        const quickViewBtn = document.createElement('button');
        quickViewBtn.className = 'product-quick-view-btn';
        quickViewBtn.setAttribute('data-product-id', productId);
        quickViewBtn.innerHTML = '👁️ Vista Rápida';
        quickViewBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: var(--primary-green);
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 500;
            cursor: pointer;
            opacity: 0;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            z-index: 2;
        `;

        // Add to card image container
        const imageContainer = card.querySelector('.menu__card-image');
        if (imageContainer) {
            imageContainer.style.position = 'relative';
            imageContainer.appendChild(quickViewBtn);

            // Show button on card hover
            card.addEventListener('mouseenter', () => {
                quickViewBtn.style.opacity = '1';
                quickViewBtn.style.transform = 'translateY(0)';
            });

            card.addEventListener('mouseleave', () => {
                quickViewBtn.style.opacity = '0';
                quickViewBtn.style.transform = 'translateY(-10px)';
            });
        }
    });
}

// Initialize Product Quick View system
document.addEventListener('DOMContentLoaded', function () {
    ProductQuickView.init();

    // Enhance existing cards
    setTimeout(() => {
        enhanceProductCardsWithQuickView();
    }, 500);

    // Re-enhance cards when menu category changes
    document.addEventListener('menuCategoryChanged', () => {
        setTimeout(() => {
            enhanceProductCardsWithQuickView();
        }, 300);
    });
});

// Export for global use
window.ProductQuickView = ProductQuickView;/*
 ===================================
   IMAGE ZOOM FUNCTIONALITY - FASE 2
   =================================== */

// Image Zoom System
const ImageZoom = {
    currentZoom: 1,
    maxZoom: 3,
    minZoom: 1,
    zoomStep: 0.5,

    // Initialize image zoom system
    init: function () {
        this.createMobileZoomModal();
        this.enhanceProductImages();
        this.bindEvents();
        console.log('Image Zoom system initialized');
    },

    // Create mobile zoom modal
    createMobileZoomModal: function () {
        if (document.getElementById('mobile-zoom-modal')) return;

        const modalHTML = `
            <div id="mobile-zoom-modal" class="mobile-zoom-modal">
                <div class="mobile-zoom-content">
                    <button class="mobile-zoom-close" aria-label="Cerrar zoom">&times;</button>
                    <img class="mobile-zoom-img" src="" alt="">
                    <div class="zoom-controls">
                        <button class="zoom-btn" id="zoom-out-btn" aria-label="Alejar">-</button>
                        <button class="zoom-btn" id="zoom-reset-btn" aria-label="Restablecer">⌂</button>
                        <button class="zoom-btn" id="zoom-in-btn" aria-label="Acercar">+</button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Bind modal events
        this.bindModalEvents();
    },

    // Enhance existing product images with zoom
    enhanceProductImages: function () {
        // Enhance menu card images
        const menuImages = document.querySelectorAll('.menu__card-image');
        menuImages.forEach(imageContainer => {
            this.enhanceImageContainer(imageContainer);
        });

        // Enhance quick view images
        const quickViewImages = document.querySelectorAll('.product-quick-view__main-image');
        quickViewImages.forEach(imageContainer => {
            this.enhanceImageContainer(imageContainer, true);
        });
    },

    // Enhance individual image container
    enhanceImageContainer: function (container, isQuickView = false) {
        if (container.classList.contains('zoom-enabled')) return;

        container.classList.add('zoom-enabled');

        const img = container.querySelector('img');
        if (!img) return;

        // Add zoom functionality based on device
        if (this.isMobileDevice()) {
            this.addMobileZoom(container, img);
        } else {
            this.addDesktopZoom(container, img, isQuickView);
        }
    },

    // Add mobile zoom functionality
    addMobileZoom: function (container, img) {
        container.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.openMobileZoom(img.src, img.alt);
        });

        // Add pinch zoom support
        this.addPinchZoom(container, img);
    },

    // Add desktop zoom functionality
    addDesktopZoom: function (container, img, isQuickView = false) {
        // Create zoom elements
        const overlay = document.createElement('div');
        overlay.className = 'image-zoom-overlay';

        const lens = document.createElement('div');
        lens.className = 'image-zoom-lens';

        const indicator = document.createElement('div');
        indicator.className = 'zoom-indicator';
        indicator.textContent = 'Hover para zoom';

        container.appendChild(overlay);
        container.appendChild(lens);
        container.appendChild(indicator);

        // Add hover zoom effect
        container.addEventListener('mouseenter', () => {
            this.startDesktopZoom(container, img, lens);
        });

        container.addEventListener('mouseleave', () => {
            this.stopDesktopZoom(container, img);
        });

        container.addEventListener('mousemove', (e) => {
            this.updateDesktopZoom(e, container, img, lens);
        });

        // Add click to open full zoom (for quick view)
        if (isQuickView) {
            container.addEventListener('click', (e) => {
                e.preventDefault();
                this.openMobileZoom(img.src, img.alt);
            });
        }
    },

    // Start desktop zoom
    startDesktopZoom: function (container, img, lens) {
        img.style.transform = 'scale(1.2)';
        lens.style.opacity = '1';
    },

    // Stop desktop zoom
    stopDesktopZoom: function (container, img) {
        img.style.transform = 'scale(1)';
    },

    // Update desktop zoom position
    updateDesktopZoom: function (e, container, img, lens) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Update lens position
        const lensSize = 100;
        const lensX = Math.max(lensSize / 2, Math.min(x, rect.width - lensSize / 2));
        const lensY = Math.max(lensSize / 2, Math.min(y, rect.height - lensSize / 2));

        lens.style.left = (lensX - lensSize / 2) + 'px';
        lens.style.top = (lensY - lensSize / 2) + 'px';

        // Update image transform origin
        const originX = (x / rect.width) * 100;
        const originY = (y / rect.height) * 100;
        img.style.transformOrigin = `${originX}% ${originY}%`;
    },

    // Add pinch zoom support for mobile
    addPinchZoom: function (container, img) {
        let scale = 1;
        let startDistance = 0;
        let startScale = 1;

        container.classList.add('pinch-zoom-container');
        img.classList.add('pinch-zoom-img');

        container.addEventListener('touchstart', (e) => {
            if (e.touches.length === 2) {
                e.preventDefault();
                startDistance = this.getDistance(e.touches[0], e.touches[1]);
                startScale = scale;
            }
        }, { passive: false });

        container.addEventListener('touchmove', (e) => {
            if (e.touches.length === 2) {
                e.preventDefault();
                const currentDistance = this.getDistance(e.touches[0], e.touches[1]);
                const scaleChange = currentDistance / startDistance;
                scale = Math.max(1, Math.min(3, startScale * scaleChange));

                img.style.transform = `scale(${scale})`;
            }
        }, { passive: false });

        container.addEventListener('touchend', (e) => {
            if (e.touches.length < 2) {
                // Reset zoom if scale is close to 1
                if (scale < 1.1) {
                    scale = 1;
                    img.style.transform = 'scale(1)';
                }
            }
        });
    },

    // Get distance between two touch points
    getDistance: function (touch1, touch2) {
        const dx = touch1.clientX - touch2.clientX;
        const dy = touch1.clientY - touch2.clientY;
        return Math.sqrt(dx * dx + dy * dy);
    },

    // Open mobile zoom modal
    openMobileZoom: function (imageSrc, imageAlt) {
        const modal = document.getElementById('mobile-zoom-modal');
        const img = modal.querySelector('.mobile-zoom-img');

        img.src = imageSrc;
        img.alt = imageAlt;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        this.currentZoom = 1;
        this.updateZoomControls();
        this.updateMobileZoomImage();
    },

    // Close mobile zoom modal
    closeMobileZoom: function () {
        const modal = document.getElementById('mobile-zoom-modal');
        modal.classList.remove('active');
        document.body.style.overflow = '';

        this.currentZoom = 1;
    },

    // Update mobile zoom image
    updateMobileZoomImage: function () {
        const img = document.querySelector('.mobile-zoom-img');
        if (img) {
            img.style.transform = `scale(${this.currentZoom})`;
        }
        this.updateZoomControls();
    },

    // Update zoom controls state
    updateZoomControls: function () {
        const zoomInBtn = document.getElementById('zoom-in-btn');
        const zoomOutBtn = document.getElementById('zoom-out-btn');

        if (zoomInBtn) {
            zoomInBtn.disabled = this.currentZoom >= this.maxZoom;
        }

        if (zoomOutBtn) {
            zoomOutBtn.disabled = this.currentZoom <= this.minZoom;
        }
    },

    // Zoom in
    zoomIn: function () {
        if (this.currentZoom < this.maxZoom) {
            this.currentZoom = Math.min(this.maxZoom, this.currentZoom + this.zoomStep);
            this.updateMobileZoomImage();
        }
    },

    // Zoom out
    zoomOut: function () {
        if (this.currentZoom > this.minZoom) {
            this.currentZoom = Math.max(this.minZoom, this.currentZoom - this.zoomStep);
            this.updateMobileZoomImage();
        }
    },

    // Reset zoom
    resetZoom: function () {
        this.currentZoom = 1;
        this.updateMobileZoomImage();
    },

    // Bind modal events
    bindModalEvents: function () {
        const modal = document.getElementById('mobile-zoom-modal');
        const closeBtn = modal.querySelector('.mobile-zoom-close');
        const zoomInBtn = document.getElementById('zoom-in-btn');
        const zoomOutBtn = document.getElementById('zoom-out-btn');
        const resetBtn = document.getElementById('zoom-reset-btn');

        // Close events
        closeBtn.addEventListener('click', () => this.closeMobileZoom());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeMobileZoom();
            }
        });

        // Zoom controls
        zoomInBtn.addEventListener('click', () => this.zoomIn());
        zoomOutBtn.addEventListener('click', () => this.zoomOut());
        resetBtn.addEventListener('click', () => this.resetZoom());

        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (!modal.classList.contains('active')) return;

            switch (e.key) {
                case 'Escape':
                    this.closeMobileZoom();
                    break;
                case '+':
                case '=':
                    e.preventDefault();
                    this.zoomIn();
                    break;
                case '-':
                    e.preventDefault();
                    this.zoomOut();
                    break;
                case '0':
                    e.preventDefault();
                    this.resetZoom();
                    break;
            }
        });

        // Mouse wheel zoom
        const zoomContent = modal.querySelector('.mobile-zoom-content');
        zoomContent.addEventListener('wheel', (e) => {
            e.preventDefault();

            if (e.deltaY < 0) {
                this.zoomIn();
            } else {
                this.zoomOut();
            }
        }, { passive: false });
    },

    // Bind general events
    bindEvents: function () {
        // Re-enhance images when new content is loaded
        document.addEventListener('menuCategoryChanged', () => {
            setTimeout(() => {
                this.enhanceProductImages();
            }, 300);
        });

        // Re-enhance when quick view opens
        document.addEventListener('quickViewOpened', () => {
            setTimeout(() => {
                this.enhanceProductImages();
            }, 500);
        });
    },

    // Check if device is mobile
    isMobileDevice: function () {
        return window.innerWidth <= 768 || 'ontouchstart' in window;
    },

    // Enhance specific image programmatically
    enhanceImage: function (imageSelector) {
        const containers = document.querySelectorAll(imageSelector);
        containers.forEach(container => {
            this.enhanceImageContainer(container);
        });
    }
};

// Auto-enhance existing images with zoom
function autoEnhanceImagesWithZoom() {
    // Enhance menu cards
    const menuCards = document.querySelectorAll('.menu__card-image');
    menuCards.forEach(card => {
        if (!card.classList.contains('zoom-enabled')) {
            ImageZoom.enhanceImageContainer(card);
        }
    });

    // Enhance blog images
    const blogImages = document.querySelectorAll('.blog-card__image');
    blogImages.forEach(image => {
        if (!image.classList.contains('zoom-enabled')) {
            ImageZoom.enhanceImageContainer(image);
        }
    });
}

// Initialize Image Zoom system
document.addEventListener('DOMContentLoaded', function () {
    ImageZoom.init();

    // Auto-enhance existing images
    setTimeout(() => {
        autoEnhanceImagesWithZoom();
    }, 500);
});

// Export for global use
window.ImageZoom = ImageZoom;/* =====
==============================
   FILTROS DINÁMICOS PARA MENÚ - FASE 2
   =================================== */

// Dynamic Menu Filters System
const MenuFilters = {
    currentFilters: {
        search: '',
        category: 'all',
        priceMin: 0,
        priceMax: 100,
        ingredients: [],
        sortBy: 'name'
    },

    allProducts: [],
    filteredProducts: [],

    // Initialize the filter system
    init: function () {
        this.loadAllProducts();
        this.createFilterUI();
        this.bindEvents();
        this.applyFilters();
        console.log('Dynamic Menu Filters initialized');
    },

    // Load all products from data
    loadAllProducts: function () {
        this.allProducts = [];

        // Load from productsData
        for (const category in productsData) {
            const categoryProducts = productsData[category].map(product => ({
                ...product,
                category: category
            }));
            this.allProducts.push(...categoryProducts);
        }

        console.log(`Loaded ${this.allProducts.length} products for filtering`);
    },

    // Create filter UI
    createFilterUI: function () {
        const menuSection = document.querySelector('.menu') || document.querySelector('#menu');
        if (!menuSection) return;

        // Check if filters already exist
        if (document.querySelector('.menu-filters')) return;

        const filtersHTML = this.generateFiltersHTML();

        // Insert filters before menu grid
        const menuGrid = document.getElementById('menu-grid');
        if (menuGrid) {
            menuGrid.insertAdjacentHTML('beforebegin', filtersHTML);
        }
    },

    // Generate filters HTML
    generateFiltersHTML: function () {
        const categories = this.getUniqueCategories();
        const ingredients = this.getUniqueIngredients();
        const priceRange = this.getPriceRange();

        return `
            <div class="menu-filters" id="menu-filters">
                <button class="menu-filters__toggle" onclick="MenuFilters.toggleFilters()">
                    🔍 Filtros y Búsqueda
                </button>
                
                <div class="menu-filters__content expanded" id="filters-content">
                    <div class="menu-filters__header">
                        <h3 class="menu-filters__title">Filtrar Productos</h3>
                        <button class="menu-filters__clear" onclick="MenuFilters.clearAllFilters()">
                            Limpiar Filtros
                        </button>
                    </div>
                    
                    <!-- Search Filter -->
                    <div class="menu-filters__section">
                        <div class="menu-filters__section-title">
                            <span class="menu-filters__section-icon">🔍</span>
                            Búsqueda
                        </div>
                        <div class="menu-filters__search">
                            <input type="text" 
                                   class="menu-filters__search-input" 
                                   id="search-input"
                                   placeholder="Buscar productos, ingredientes..."
                                   value="${this.currentFilters.search}">
                            <span class="menu-filters__search-icon">🔍</span>
                            <button class="menu-filters__search-clear" onclick="MenuFilters.clearSearch()">×</button>
                        </div>
                    </div>
                    
                    <!-- Category Filter -->
                    <div class="menu-filters__section">
                        <div class="menu-filters__section-title">
                            <span class="menu-filters__section-icon">📂</span>
                            Categorías
                        </div>
                        <div class="menu-filters__categories">
                            <button class="menu-filters__category ${this.currentFilters.category === 'all' ? 'active' : ''}" 
                                    data-category="all">
                                Todos
                            </button>
                            ${categories.map(category => `
                                <button class="menu-filters__category ${this.currentFilters.category === category ? 'active' : ''}" 
                                        data-category="${category}">
                                    ${this.getCategoryDisplayName(category)}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Price Range Filter -->
                    <div class="menu-filters__section">
                        <div class="menu-filters__section-title">
                            <span class="menu-filters__section-icon">💰</span>
                            Rango de Precio
                        </div>
                        <div class="menu-filters__price-range">
                            <input type="number" 
                                   class="menu-filters__price-input" 
                                   id="price-min"
                                   placeholder="Min"
                                   min="0"
                                   max="${priceRange.max}"
                                   value="${this.currentFilters.priceMin}">
                            <span class="menu-filters__price-separator">-</span>
                            <input type="number" 
                                   class="menu-filters__price-input" 
                                   id="price-max"
                                   placeholder="Max"
                                   min="0"
                                   max="${priceRange.max}"
                                   value="${this.currentFilters.priceMax}">
                        </div>
                    </div>
                    
                    <!-- Ingredients Filter -->
                    <div class="menu-filters__section">
                        <div class="menu-filters__section-title">
                            <span class="menu-filters__section-icon">🌿</span>
                            Ingredientes
                        </div>
                        <div class="menu-filters__ingredients">
                            ${ingredients.slice(0, 12).map(ingredient => `
                                <button class="menu-filters__ingredient ${this.currentFilters.ingredients.includes(ingredient) ? 'active' : ''}" 
                                        data-ingredient="${ingredient}">
                                    ${ingredient}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Sort Options -->
                    <div class="menu-filters__section">
                        <div class="menu-filters__section-title">
                            <span class="menu-filters__section-icon">🔄</span>
                            Ordenar por
                        </div>
                        <div class="menu-filters__sort">
                            <select class="menu-filters__sort-select" id="sort-select">
                                <option value="name" ${this.currentFilters.sortBy === 'name' ? 'selected' : ''}>Nombre A-Z</option>
                                <option value="name-desc" ${this.currentFilters.sortBy === 'name-desc' ? 'selected' : ''}>Nombre Z-A</option>
                                <option value="price-asc" ${this.currentFilters.sortBy === 'price-asc' ? 'selected' : ''}>Precio: Menor a Mayor</option>
                                <option value="price-desc" ${this.currentFilters.sortBy === 'price-desc' ? 'selected' : ''}>Precio: Mayor a Menor</option>
                                <option value="popular" ${this.currentFilters.sortBy === 'popular' ? 'selected' : ''}>Más Popular</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <!-- Results Info -->
                <div class="menu-filters__results" id="filter-results" style="display: none;">
                    <div class="menu-filters__results-count">
                        Mostrando <span id="results-count">0</span> productos
                    </div>
                    <div class="menu-filters__results-time">
                        Filtrado en <span id="filter-time">0</span>ms
                    </div>
                </div>
            </div>
        `;
    },

    // Bind events
    bindEvents: function () {
        // Search input
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            let searchTimeout;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.currentFilters.search = e.target.value;
                    this.applyFilters();
                }, 300); // Debounce search
            });
        }

        // Category buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('menu-filters__category')) {
                const category = e.target.getAttribute('data-category');
                this.setCategory(category);
            }
        });

        // Ingredient buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('menu-filters__ingredient')) {
                const ingredient = e.target.getAttribute('data-ingredient');
                this.toggleIngredient(ingredient);
            }
        });

        // Price inputs
        const priceMin = document.getElementById('price-min');
        const priceMax = document.getElementById('price-max');

        if (priceMin) {
            priceMin.addEventListener('change', (e) => {
                this.currentFilters.priceMin = parseFloat(e.target.value) || 0;
                this.applyFilters();
            });
        }

        if (priceMax) {
            priceMax.addEventListener('change', (e) => {
                this.currentFilters.priceMax = parseFloat(e.target.value) || 100;
                this.applyFilters();
            });
        }

        // Sort select
        const sortSelect = document.getElementById('sort-select');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.currentFilters.sortBy = e.target.value;
                this.applyFilters();
            });
        }
    },

    // Set category filter
    setCategory: function (category) {
        this.currentFilters.category = category;

        // Update active state
        document.querySelectorAll('.menu-filters__category').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');

        this.applyFilters();
    },

    // Toggle ingredient filter
    toggleIngredient: function (ingredient) {
        const index = this.currentFilters.ingredients.indexOf(ingredient);

        if (index > -1) {
            this.currentFilters.ingredients.splice(index, 1);
        } else {
            this.currentFilters.ingredients.push(ingredient);
        }

        // Update active state
        const button = document.querySelector(`[data-ingredient="${ingredient}"]`);
        button.classList.toggle('active');

        this.applyFilters();
    },

    // Apply all filters
    applyFilters: function () {
        const startTime = performance.now();

        // Show loading state
        const filtersContainer = document.getElementById('menu-filters');
        if (filtersContainer) {
            filtersContainer.classList.add('loading');
        }

        // Filter products
        this.filteredProducts = this.allProducts.filter(product => {
            return this.matchesSearch(product) &&
                this.matchesCategory(product) &&
                this.matchesPrice(product) &&
                this.matchesIngredients(product);
        });

        // Sort products
        this.sortProducts();

        // Update UI
        setTimeout(() => {
            this.updateProductDisplay();
            this.updateResultsInfo(performance.now() - startTime);

            if (filtersContainer) {
                filtersContainer.classList.remove('loading');
            }
        }, 100); // Small delay for better UX
    },

    // Check if product matches search
    matchesSearch: function (product) {
        if (!this.currentFilters.search) return true;

        const searchTerm = this.currentFilters.search.toLowerCase();
        const searchableText = [
            product.name,
            product.description,
            ...(product.ingredients || [])
        ].join(' ').toLowerCase();

        return searchableText.includes(searchTerm);
    },

    // Check if product matches category
    matchesCategory: function (product) {
        if (this.currentFilters.category === 'all') return true;
        return product.category === this.currentFilters.category;
    },

    // Check if product matches price range
    matchesPrice: function (product) {
        return product.price >= this.currentFilters.priceMin &&
            product.price <= this.currentFilters.priceMax;
    },

    // Check if product matches ingredients
    matchesIngredients: function (product) {
        if (this.currentFilters.ingredients.length === 0) return true;
        if (!product.ingredients) return false;

        return this.currentFilters.ingredients.every(ingredient =>
            product.ingredients.some(productIngredient =>
                productIngredient.toLowerCase().includes(ingredient.toLowerCase())
            )
        );
    },

    // Sort products
    sortProducts: function () {
        const sortBy = this.currentFilters.sortBy;

        this.filteredProducts.sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'name-desc':
                    return b.name.localeCompare(a.name);
                case 'price-asc':
                    return a.price - b.price;
                case 'price-desc':
                    return b.price - a.price;
                case 'popular':
                    // Sort by badges (Popular first)
                    const aPopular = a.badges && a.badges.includes('Popular') ? 1 : 0;
                    const bPopular = b.badges && b.badges.includes('Popular') ? 1 : 0;
                    return bPopular - aPopular;
                default:
                    return 0;
            }
        });
    },

    // Update product display
    updateProductDisplay: function () {
        const menuGrid = document.getElementById('menu-grid');
        if (!menuGrid) return;

        // Clear current products
        menuGrid.innerHTML = '';

        if (this.filteredProducts.length === 0) {
            this.showNoResults(menuGrid);
            return;
        }

        // Create product cards
        this.filteredProducts.forEach((product, index) => {
            const productCard = this.createProductCard(product);
            menuGrid.appendChild(productCard);

            // Staggered animation
            setTimeout(() => {
                productCard.classList.add('filtered-in');
            }, index * 50);
        });

        // Re-enhance cards with existing functionality
        setTimeout(() => {
            if (window.enhanceProductCardsWithQuickView) {
                enhanceProductCardsWithQuickView();
            }
            if (window.ImageZoom) {
                ImageZoom.enhanceProductImages();
            }
        }, 200);
    },

    // Show no results message
    showNoResults: function (container) {
        container.innerHTML = `
            <div class="menu-filters__no-results">
                <div class="menu-filters__no-results-icon">🔍</div>
                <h3 class="menu-filters__no-results-title">No se encontraron productos</h3>
                <p class="menu-filters__no-results-text">
                    Intenta ajustar los filtros o buscar con otros términos
                </p>
            </div>
        `;
    },

    // Create product card
    createProductCard: function (product) {
        const card = document.createElement('div');
        card.className = 'menu__card animate-on-scroll fade-in';
        card.setAttribute('data-product-id', product.id);

        const badgesHTML = product.badges && product.badges.length > 0
            ? `<div class="menu__badges">
                ${product.badges.map(badge => `<span class="menu__badge menu__badge--${badge.toLowerCase().replace(/[^a-z0-9]/g, '-')}">${badge}</span>`).join('')}
               </div>`
            : '';

        const ingredientsHTML = product.ingredients && product.ingredients.length > 0
            ? `<div class="menu__ingredients">
                <small>Ingredientes: ${product.ingredients.join(', ')}</small>
               </div>`
            : '';

        card.innerHTML = `
            <div class="menu__card-image">
                <img src="${product.image}" alt="${product.name}" class="menu__image" loading="lazy" 
                     onerror="this.src='./images/placeholder-product.jpg'; this.onerror=null;">
                ${badgesHTML}
            </div>
            <div class="menu__card-content">
                <h3 class="menu__card-title">${product.name}</h3>
                <p class="menu__card-description">${product.description}</p>
                ${ingredientsHTML}
                <div class="menu__card-footer">
                    <span class="menu__price">$${product.price.toFixed(2)}</span>
                    <button class="menu__order-btn btn-modern" onclick="handleProductOrder('${product.id}')">
                        Ordenar
                    </button>
                </div>
            </div>
        `;

        return card;
    },

    // Update results info
    updateResultsInfo: function (filterTime) {
        const resultsContainer = document.getElementById('filter-results');
        const countElement = document.getElementById('results-count');
        const timeElement = document.getElementById('filter-time');

        if (resultsContainer && countElement && timeElement) {
            countElement.textContent = this.filteredProducts.length;
            timeElement.textContent = Math.round(filterTime);
            resultsContainer.style.display = 'flex';
        }
    },

    // Clear all filters
    clearAllFilters: function () {
        this.currentFilters = {
            search: '',
            category: 'all',
            priceMin: 0,
            priceMax: 100,
            ingredients: [],
            sortBy: 'name'
        };

        // Update UI
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.value = '';

        const priceMin = document.getElementById('price-min');
        if (priceMin) priceMin.value = '0';

        const priceMax = document.getElementById('price-max');
        if (priceMax) priceMax.value = '100';

        const sortSelect = document.getElementById('sort-select');
        if (sortSelect) sortSelect.value = 'name';

        // Reset active states
        document.querySelectorAll('.menu-filters__category').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector('[data-category="all"]')?.classList.add('active');

        document.querySelectorAll('.menu-filters__ingredient').forEach(btn => {
            btn.classList.remove('active');
        });

        this.applyFilters();
    },

    // Clear search
    clearSearch: function () {
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.value = '';
            this.currentFilters.search = '';
            this.applyFilters();
        }
    },

    // Toggle filters on mobile
    toggleFilters: function () {
        const content = document.getElementById('filters-content');
        if (content) {
            content.classList.toggle('collapsed');
            content.classList.toggle('expanded');
        }
    },

    // Get unique categories
    getUniqueCategories: function () {
        return [...new Set(this.allProducts.map(product => product.category))];
    },

    // Get unique ingredients
    getUniqueIngredients: function () {
        const allIngredients = [];
        this.allProducts.forEach(product => {
            if (product.ingredients) {
                allIngredients.push(...product.ingredients);
            }
        });
        return [...new Set(allIngredients)].sort();
    },

    // Get price range
    getPriceRange: function () {
        const prices = this.allProducts.map(product => product.price);
        return {
            min: Math.min(...prices),
            max: Math.max(...prices)
        };
    },

    // Get category display name
    getCategoryDisplayName: function (category) {
        const categoryNames = {
            'jugos': 'Jugos',
            'frappuccinos': 'Frappuccinos',
            'cafe': 'Café'
        };
        return categoryNames[category] || category;
    }
};

// Initialize Menu Filters when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Small delay to ensure other systems are loaded
    setTimeout(() => {
        MenuFilters.init();
    }, 800);
});

// Export for global use
window.MenuFilters = MenuFilters;
/* ===================================
   FORMULARIO DE CONTACTO MODERNIZADO - FASE 2
   =================================== */

// Modern Contact Form System
const ModernContactForm = {
    currentStep: 1,
    totalSteps: 3,
    formData: {},
    validationRules: {},

    // Initialize the modern contact form
    init: function () {
        this.setupValidationRules();
        this.createFormStructure();
        this.bindEvents();
        this.initializeAutoComplete();
        console.log('Modern Contact Form initialized');
    },

    // Setup validation rules
    setupValidationRules: function () {
        this.validationRules = {
            name: {
                required: true,
                minLength: 2,
                maxLength: 50,
                pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                message: 'Nombre debe contener solo letras y espacios'
            },
            email: {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Ingresa un email válido'
            },
            phone: {
                required: false,
                pattern: /^[\+]?[0-9\s\-\(\)]{10,15}$/,
                message: 'Número de teléfono inválido'
            },
            company: {
                required: false,
                maxLength: 100
            },
            subject: {
                required: true,
                minLength: 5,
                maxLength: 100,
                message: 'El asunto debe tener entre 5 y 100 caracteres'
            },
            message: {
                required: true,
                minLength: 20,
                maxLength: 1000,
                message: 'El mensaje debe tener entre 20 y 1000 caracteres'
            },
            budget: {
                required: false
            },
            timeline: {
                required: false
            }
        };
    },

    // Create modern form structure
    createFormStructure: function () {
        const contactSection = document.querySelector('#contact') || document.querySelector('.contact');
        if (!contactSection) return;

        // Check if modern form already exists
        if (document.querySelector('.modern-contact-form')) return;

        const formHTML = this.generateFormHTML();

        // Replace existing form or add new one
        const existingForm = contactSection.querySelector('form');
        if (existingForm) {
            existingForm.outerHTML = formHTML;
        } else {
            contactSection.insertAdjacentHTML('beforeend', formHTML);
        }
    },

    // Generate complete form HTML
    generateFormHTML: function () {
        return `
            <form class="modern-contact-form" id="modern-contact-form" novalidate>
                <div class="modern-contact-form__header">
                    <h2 class="modern-contact-form__title">Contáctanos</h2>
                    <p class="modern-contact-form__subtitle">
                        Nos encantaría conocer tu proyecto. Completa el formulario y te responderemos pronto.
                    </p>
                </div>
                
                <!-- Progress Bar -->
                <div class="form-progress">
                    <div class="form-progress-bar" id="progress-bar"></div>
                </div>
                
                <!-- Steps Indicator -->
                <div class="form-steps">
                    <div class="form-step active" data-step="1">1</div>
                    <div class="form-step" data-step="2">2</div>
                    <div class="form-step" data-step="3">3</div>
                </div>
                
                <!-- Step 1: Personal Information -->
                <div class="form-section active" data-section="1">
                    <h3 class="form-section__title">Información Personal</h3>
                    
                    <div class="form-group half-width">
                        <div class="form-input-group">
                            <input type="text" id="name" name="name" class="form-input" placeholder=" " required>
                            <label for="name" class="form-label floating required">Nombre completo</label>
                            <span class="form-input-icon">👤</span>
                        </div>
                        <div class="form-error" id="name-error"></div>
                        <div class="form-success" id="name-success">✓ Nombre válido</div>
                    </div>
                    
                    <div class="form-group half-width">
                        <div class="form-input-group">
                            <input type="email" id="email" name="email" class="form-input" placeholder=" " required>
                            <label for="email" class="form-label floating required">Correo electrónico</label>
                            <span class="form-input-icon">📧</span>
                        </div>
                        <div class="form-error" id="email-error"></div>
                        <div class="form-success" id="email-success">✓ Email válido</div>
                    </div>
                    
                    <div class="form-group half-width">
                        <div class="form-input-group">
                            <input type="tel" id="phone" name="phone" class="form-input" placeholder=" ">
                            <label for="phone" class="form-label floating">Teléfono (opcional)</label>
                            <span class="form-input-icon">📱</span>
                        </div>
                        <div class="form-error" id="phone-error"></div>
                        <div class="form-success" id="phone-success">✓ Teléfono válido</div>
                    </div>
                    
                    <div class="form-group half-width">
                        <div class="form-input-group">
                            <input type="text" id="company" name="company" class="form-input" placeholder=" ">
                            <label for="company" class="form-label floating">Empresa (opcional)</label>
                            <span class="form-input-icon">🏢</span>
                        </div>
                        <div class="form-suggestions" id="company-suggestions"></div>
                    </div>
                </div>
                
                <!-- Step 2: Project Details -->
                <div class="form-section" data-section="2">
                    <h3 class="form-section__title">Detalles del Proyecto</h3>
                    
                    <div class="form-group">
                        <div class="form-input-group">
                            <input type="text" id="subject" name="subject" class="form-input" placeholder=" " required>
                            <label for="subject" class="form-label floating required">Asunto</label>
                            <span class="form-input-icon">📝</span>
                        </div>
                        <div class="form-error" id="subject-error"></div>
                        <div class="form-success" id="subject-success">✓ Asunto válido</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="message" class="form-label required">Mensaje</label>
                        <div style="position: relative;">
                            <textarea id="message" name="message" class="form-textarea" 
                                      placeholder="Cuéntanos sobre tu proyecto, necesidades específicas, objetivos..." 
                                      required></textarea>
                            <div class="form-counter" id="message-counter">0/1000</div>
                        </div>
                        <div class="form-error" id="message-error"></div>
                        <div class="form-success" id="message-success">✓ Mensaje válido</div>
                    </div>
                    
                    <div class="form-group half-width">
                        <label for="budget" class="form-label">Presupuesto estimado</label>
                        <select id="budget" name="budget" class="form-select">
                            <option value="">Seleccionar rango</option>
                            <option value="under-1000">Menos de $1,000</option>
                            <option value="1000-5000">$1,000 - $5,000</option>
                            <option value="5000-10000">$5,000 - $10,000</option>
                            <option value="10000-25000">$10,000 - $25,000</option>
                            <option value="over-25000">Más de $25,000</option>
                        </select>
                    </div>
                    
                    <div class="form-group half-width">
                        <label for="timeline" class="form-label">Tiempo estimado</label>
                        <select id="timeline" name="timeline" class="form-select">
                            <option value="">Seleccionar tiempo</option>
                            <option value="asap">Lo antes posible</option>
                            <option value="1-month">1 mes</option>
                            <option value="2-3-months">2-3 meses</option>
                            <option value="3-6-months">3-6 meses</option>
                            <option value="flexible">Flexible</option>
                        </select>
                    </div>
                </div>
                
                <!-- Step 3: Additional Information -->
                <div class="form-section" data-section="3">
                    <h3 class="form-section__title">Información Adicional</h3>
                    
                    <div class="form-group">
                        <label for="attachment" class="form-label">Archivos adjuntos (opcional)</label>
                        <div class="form-file-upload" id="file-upload">
                            <input type="file" id="attachment" name="attachment" class="form-file-input" 
                                   multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png">
                            <div class="form-file-content">
                                <div class="form-file-icon">📎</div>
                                <div class="form-file-text">Arrastra archivos aquí o haz click para seleccionar</div>
                                <div class="form-file-subtext">PDF, DOC, JPG, PNG (máx. 5MB cada uno)</div>
                            </div>
                        </div>
                        <div id="file-list"></div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">¿Cómo nos conociste?</label>
                        <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 0.5rem;">
                            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                <input type="radio" name="source" value="google" style="margin: 0;">
                                <span>Google</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                <input type="radio" name="source" value="social" style="margin: 0;">
                                <span>Redes Sociales</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                <input type="radio" name="source" value="referral" style="margin: 0;">
                                <span>Recomendación</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                <input type="radio" name="source" value="other" style="margin: 0;">
                                <span>Otro</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                            <input type="checkbox" id="newsletter" name="newsletter" style="margin: 0;">
                            <span>Quiero recibir noticias y actualizaciones por email</span>
                        </label>
                    </div>
                    
                    <div class="form-group">
                        <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                            <input type="checkbox" id="terms" name="terms" required style="margin: 0;">
                            <span>Acepto los <a href="#" style="color: var(--primary-green);">términos y condiciones</a> y la <a href="#" style="color: var(--primary-green);">política de privacidad</a></span>
                        </label>
                        <div class="form-error" id="terms-error">Debes aceptar los términos y condiciones</div>
                    </div>
                </div>
                
                <!-- Navigation -->
                <div class="form-navigation">
                    <button type="button" class="form-nav-btn form-nav-btn--back" id="back-btn" style="display: none;">
                        ← Anterior
                    </button>
                    <div style="flex: 1;"></div>
                    <button type="button" class="form-nav-btn form-nav-btn--next" id="next-btn">
                        Siguiente →
                    </button>
                    <button type="submit" class="form-nav-btn form-nav-btn--submit" id="submit-btn" style="display: none;">
                        Enviar Mensaje
                    </button>
                </div>
                
                <!-- Success Message -->
                <div id="form-success-message" style="display: none; text-align: center; padding: 2rem; background: rgba(76, 175, 80, 0.1); border-radius: 1rem; margin-top: 2rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
                    <h3 style="color: #4CAF50; margin-bottom: 1rem;">¡Mensaje enviado exitosamente!</h3>
                    <p style="color: var(--text-dark);">Gracias por contactarnos. Te responderemos pronto.</p>
                </div>
            </form>
        `;
    },

    // Bind all events
    bindEvents: function () {
        const form = document.getElementById('modern-contact-form');
        if (!form) return;

        // Form submission
        form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Navigation buttons
        document.getElementById('next-btn').addEventListener('click', () => this.nextStep());
        document.getElementById('back-btn').addEventListener('click', () => this.prevStep());

        // Real-time validation
        const inputs = form.querySelectorAll('.form-input, .form-textarea, .form-select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });

        // Character counter for message
        const messageField = document.getElementById('message');
        if (messageField) {
            messageField.addEventListener('input', () => this.updateCharacterCounter(messageField));
        }

        // File upload
        this.initializeFileUpload();

        // Auto-save form data
        inputs.forEach(input => {
            input.addEventListener('input', () => this.saveFormData());
        });

        // Load saved data
        this.loadFormData();
    },

    // Initialize auto-complete
    initializeAutoComplete: function () {
        const companyField = document.getElementById('company');
        if (!companyField) return;

        const suggestions = [
            'Google', 'Microsoft', 'Apple', 'Amazon', 'Facebook',
            'Netflix', 'Spotify', 'Uber', 'Airbnb', 'Tesla'
        ];

        companyField.addEventListener('input', (e) => {
            this.showSuggestions(e.target, suggestions);
        });

        companyField.addEventListener('blur', () => {
            setTimeout(() => this.hideSuggestions(), 200);
        });
    },

    // Show auto-complete suggestions
    showSuggestions: function (input, suggestions) {
        const value = input.value.toLowerCase();
        if (value.length < 2) {
            this.hideSuggestions();
            return;
        }

        const filtered = suggestions.filter(item =>
            item.toLowerCase().includes(value)
        );

        if (filtered.length === 0) {
            this.hideSuggestions();
            return;
        }

        const suggestionsContainer = document.getElementById('company-suggestions');
        suggestionsContainer.innerHTML = filtered.map(item =>
            `<div class="form-suggestion" onclick="ModernContactForm.selectSuggestion('${item}')">${item}</div>`
        ).join('');

        suggestionsContainer.classList.add('show');
    },

    // Hide suggestions
    hideSuggestions: function () {
        const suggestionsContainer = document.getElementById('company-suggestions');
        suggestionsContainer.classList.remove('show');
    },

    // Select suggestion
    selectSuggestion: function (value) {
        document.getElementById('company').value = value;
        this.hideSuggestions();
    },

    // Initialize file upload
    initializeFileUpload: function () {
        const fileUpload = document.getElementById('file-upload');
        const fileInput = document.getElementById('attachment');

        if (!fileUpload || !fileInput) return;

        // Drag and drop
        fileUpload.addEventListener('dragover', (e) => {
            e.preventDefault();
            fileUpload.classList.add('dragover');
        });

        fileUpload.addEventListener('dragleave', () => {
            fileUpload.classList.remove('dragover');
        });

        fileUpload.addEventListener('drop', (e) => {
            e.preventDefault();
            fileUpload.classList.remove('dragover');

            const files = Array.from(e.dataTransfer.files);
            this.handleFiles(files);
        });

        // File input change
        fileInput.addEventListener('change', (e) => {
            const files = Array.from(e.target.files);
            this.handleFiles(files);
        });
    },

    // Handle file uploads
    handleFiles: function (files) {
        const fileList = document.getElementById('file-list');
        fileList.innerHTML = '';

        files.forEach((file, index) => {
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                this.showNotification('Archivo demasiado grande: ' + file.name, 'error');
                return;
            }

            const fileItem = document.createElement('div');
            fileItem.style.cssText = `
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.5rem;
                background: rgba(46, 125, 50, 0.1);
                border-radius: 0.5rem;
                margin-top: 0.5rem;
            `;

            fileItem.innerHTML = `
                <span>📎 ${file.name} (${this.formatFileSize(file.size)})</span>
                <button type="button" onclick="this.parentElement.remove()" 
                        style="background: none; border: none; color: #f44336; cursor: pointer;">×</button>
            `;

            fileList.appendChild(fileItem);
        });
    },

    // Format file size
    formatFileSize: function (size) {
        return Utils.formatFileSize(size);
    },

    // Next step
    nextStep: function () {
        if (!this.validateCurrentStep()) return;

        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
            this.updateStepDisplay();
            this.updateProgress();
        }
    },

    // Previous step
    prevStep: function () {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateStepDisplay();
            this.updateProgress();
        }
    },

    // Update step display
    updateStepDisplay: function () {
        // Hide all sections
        document.querySelectorAll('.form-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show current section
        document.querySelector(`[data-section="${this.currentStep}"]`).classList.add('active');

        // Update step indicators
        document.querySelectorAll('.form-step').forEach((step, index) => {
            step.classList.remove('active', 'completed');
            if (index + 1 < this.currentStep) {
                step.classList.add('completed');
            } else if (index + 1 === this.currentStep) {
                step.classList.add('active');
            }
        });

        // Update navigation buttons
        const backBtn = document.getElementById('back-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');

        backBtn.style.display = this.currentStep > 1 ? 'flex' : 'none';
        nextBtn.style.display = this.currentStep < this.totalSteps ? 'flex' : 'none';
        submitBtn.style.display = this.currentStep === this.totalSteps ? 'flex' : 'none';
    },

    // Update progress bar
    updateProgress: function () {
        const progressBar = document.getElementById('progress-bar');
        const progress = (this.currentStep / this.totalSteps) * 100;
        progressBar.style.width = progress + '%';
    },

    // Validate current step
    validateCurrentStep: function () {
        const currentSection = document.querySelector(`[data-section="${this.currentStep}"]`);
        const inputs = currentSection.querySelectorAll('.form-input, .form-textarea, .form-select');

        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        // Special validation for step 3
        if (this.currentStep === 3) {
            const termsCheckbox = document.getElementById('terms');
            if (!termsCheckbox.checked) {
                document.getElementById('terms-error').style.display = 'block';
                isValid = false;
            }
        }

        return isValid;
    },

    // Validate individual field
    validateField: function (field) {
        const fieldName = field.name;
        const value = field.value.trim();
        const rules = this.validationRules[fieldName];

        if (!rules) return true;

        const group = field.closest('.form-group');
        const errorElement = document.getElementById(fieldName + '-error');

        // Clear previous states
        group.classList.remove('valid', 'error');
        if (errorElement) errorElement.style.display = 'none';

        // Required validation
        if (rules.required && !value) {
            this.showFieldError(group, errorElement, 'Este campo es obligatorio');
            return false;
        }

        // Skip other validations if field is empty and not required
        if (!value && !rules.required) {
            return true;
        }

        // Length validation
        if (rules.minLength && value.length < rules.minLength) {
            this.showFieldError(group, errorElement, `Mínimo ${rules.minLength} caracteres`);
            return false;
        }

        if (rules.maxLength && value.length > rules.maxLength) {
            this.showFieldError(group, errorElement, `Máximo ${rules.maxLength} caracteres`);
            return false;
        }

        // Pattern validation
        if (rules.pattern && !rules.pattern.test(value)) {
            this.showFieldError(group, errorElement, rules.message || 'Formato inválido');
            return false;
        }

        // Field is valid
        group.classList.add('valid');
        return true;
    },

    // Show field error
    showFieldError: function (group, errorElement, message) {
        group.classList.add('error');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    },

    // Clear field error
    clearFieldError: function (field) {
        const group = field.closest('.form-group');
        const errorElement = document.getElementById(field.name + '-error');

        group.classList.remove('error');
        if (errorElement) errorElement.style.display = 'none';
    },

    // Update character counter
    updateCharacterCounter: function (field) {
        const counter = document.getElementById('message-counter');
        const maxLength = 1000;
        const currentLength = field.value.length;

        counter.textContent = `${currentLength}/${maxLength}`;

        counter.classList.remove('warning', 'error');
        if (currentLength > maxLength * 0.8) {
            counter.classList.add('warning');
        }
        if (currentLength > maxLength) {
            counter.classList.add('error');
        }
    },

    // Save form data to localStorage
    saveFormData: function () {
        const form = document.getElementById('modern-contact-form');
        const formData = new FormData(form);
        const data = {};

        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        localStorage.setItem('contactFormData', JSON.stringify(data));
    },

    // Load form data from localStorage
    loadFormData: function () {
        const savedData = localStorage.getItem('contactFormData');
        if (!savedData) return;

        try {
            const data = JSON.parse(savedData);

            Object.keys(data).forEach(key => {
                const field = document.getElementById(key) || document.querySelector(`[name="${key}"]`);
                if (field) {
                    if (field.type === 'checkbox' || field.type === 'radio') {
                        field.checked = data[key] === field.value;
                    } else {
                        field.value = data[key];
                    }
                }
            });
        } catch (e) {
            console.error('Error loading form data:', e);
        }
    },

    // Handle form submission
    handleSubmit: function (e) {
        e.preventDefault();

        if (!this.validateCurrentStep()) return;

        const submitBtn = document.getElementById('submit-btn');
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            this.showSuccessMessage();
            this.clearFormData();

            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }, 2000);
    },

    // Show success message
    showSuccessMessage: function () {
        const form = document.getElementById('modern-contact-form');
        const successMessage = document.getElementById('form-success-message');

        form.style.display = 'none';
        successMessage.style.display = 'block';

        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    },

    // Clear form data
    clearFormData: function () {
        localStorage.removeItem('contactFormData');
    },

    // Show notification
    showNotification: function (message, type) {
        return Utils.showNotification(message, type);
    }
};

// Initialize Modern Contact Form when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        ModernContactForm.init();
    }, 1000);
});

// Export for global use
window.ModernContactForm = ModernContactForm;/* ==
=================================
   SMART SUGGESTIONS SYSTEM - FASE 2
   =================================== */

// Smart Suggestions System
const SmartSuggestions = {
    isVisible: false,
    userLocation: null,
    userPreferences: {},
    suggestionHistory: [],
    currentContext: 'general',

    // Initialize smart suggestions
    init: function () {
        this.loadUserPreferences();
        this.detectUserLocation();
        this.createSuggestionsUI();
        this.bindEvents();
        this.startContextualAnalysis();
        console.log('Smart Suggestions system initialized');
    },

    // Load user preferences from localStorage
    loadUserPreferences: function () {
        const saved = localStorage.getItem('userPreferences');
        if (saved) {
            try {
                this.userPreferences = JSON.parse(saved);
            } catch (e) {
                this.userPreferences = {};
            }
        }

        // Default preferences
        this.userPreferences = {
            favoriteCategories: ['jugos'],
            priceRange: { min: 0, max: 50 },
            dietaryRestrictions: [],
            visitFrequency: 'regular',
            preferredTime: 'morning',
            ...this.userPreferences
        };
    },

    // Detect user location (mock implementation)
    detectUserLocation: function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        city: 'Ciudad de México', // Mock city
                        weather: 'sunny' // Mock weather
                    };
                    this.updateLocationBasedSuggestions();
                },
                () => {
                    // Fallback location
                    this.userLocation = {
                        city: 'Ciudad de México',
                        weather: 'sunny'
                    };
                }
            );
        }
    },

    // Create suggestions UI
    createSuggestionsUI: function () {
        if (document.getElementById('smart-suggestions')) return;

        const suggestionsHTML = `
            <button class="suggestions-toggle" id="suggestions-toggle" aria-label="Abrir sugerencias">
                💡
                <span class="suggestions-badge" id="suggestions-badge">3</span>
            </button>
            
            <div class="smart-suggestions" id="smart-suggestions">
                <div class="smart-suggestions__header">
                    <h3 class="smart-suggestions__title">
                        <span>🤖</span>
                        Sugerencias Inteligentes
                    </h3>
                    <p class="smart-suggestions__subtitle">
                        Recomendaciones personalizadas basadas en tu ubicación y preferencias
                    </p>
                    <button class="smart-suggestions__close" id="suggestions-close" aria-label="Cerrar">×</button>
                </div>
                
                <div class="smart-suggestions__content" id="suggestions-content">
                    <!-- Suggestions will be populated here -->
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', suggestionsHTML);

        // Initial suggestions load
        this.updateSuggestions();
    },

    // Bind events
    bindEvents: function () {
        const toggle = document.getElementById('suggestions-toggle');
        const close = document.getElementById('suggestions-close');
        const suggestions = document.getElementById('smart-suggestions');

        if (toggle) {
            toggle.addEventListener('click', () => this.toggleSuggestions());
        }

        if (close) {
            close.addEventListener('click', () => this.hideSuggestions());
        }

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (this.isVisible && !suggestions.contains(e.target) && !toggle.contains(e.target)) {
                this.hideSuggestions();
            }
        });

        // Context change detection
        this.bindContextDetection();

        // Search enhancement
        this.enhanceSearchFields();
    },

    // Bind context detection
    bindContextDetection: function () {
        // Detect when user is on different sections
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    this.updateContext(sectionId);
                }
            });
        }, { threshold: 0.5 });

        // Observe main sections
        const sections = document.querySelectorAll('#hero, #menu, #about, #contact, #blog');
        sections.forEach(section => observer.observe(section));

        // Detect user interactions
        document.addEventListener('click', (e) => {
            this.analyzeUserInteraction(e);
        });
    },

    // Enhance search fields with smart suggestions
    enhanceSearchFields: function () {
        const searchInputs = document.querySelectorAll('input[type="search"], .menu-filters__search-input');

        searchInputs.forEach(input => {
            this.addSmartSearchToField(input);
        });
    },

    // Add smart search to specific field
    addSmartSearchToField: function (input) {
        const container = input.parentElement;
        container.style.position = 'relative';

        // Create suggestions container
        const suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'search-suggestions';
        suggestionsContainer.id = `search-suggestions-${Date.now()}`;
        container.appendChild(suggestionsContainer);

        let searchTimeout;

        input.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.showSearchSuggestions(e.target, suggestionsContainer);
            }, 300);
        });

        input.addEventListener('blur', () => {
            setTimeout(() => {
                suggestionsContainer.classList.remove('show');
            }, 200);
        });

        input.addEventListener('focus', () => {
            if (input.value.length > 0) {
                this.showSearchSuggestions(input, suggestionsContainer);
            }
        });
    },

    // Show search suggestions
    showSearchSuggestions: function (input, container) {
        const query = input.value.toLowerCase();
        if (query.length < 2) {
            container.classList.remove('show');
            return;
        }

        const suggestions = this.generateSearchSuggestions(query);

        if (suggestions.length === 0) {
            container.classList.remove('show');
            return;
        }

        container.innerHTML = suggestions.map(suggestion => `
            <div class="search-suggestion" onclick="SmartSuggestions.selectSearchSuggestion('${suggestion.text}', '${input.id}')">
                <span class="search-suggestion__icon">${suggestion.icon}</span>
                <div class="search-suggestion__text">${suggestion.text}</div>
                <div class="search-suggestion__category">${suggestion.category}</div>
            </div>
        `).join('');

        container.classList.add('show');
    },

    // Generate search suggestions
    generateSearchSuggestions: function (query) {
        const suggestions = [];

        // Product suggestions
        const products = [
            { text: 'Jugo de Naranja', category: 'Jugos', icon: '🍊' },
            { text: 'Green Detox', category: 'Jugos', icon: '🥬' },
            { text: 'Frappuccino Vainilla', category: 'Frappuccinos', icon: '🥤' },
            { text: 'Café Americano', category: 'Café', icon: '☕' },
            { text: 'Smoothie Tropical', category: 'Smoothies', icon: '🥭' }
        ];

        products.forEach(product => {
            if (product.text.toLowerCase().includes(query)) {
                suggestions.push(product);
            }
        });

        // Ingredient suggestions
        const ingredients = [
            { text: 'Espinaca', category: 'Ingredientes', icon: '🌿' },
            { text: 'Manzana verde', category: 'Ingredientes', icon: '🍏' },
            { text: 'Jengibre', category: 'Ingredientes', icon: '🫚' },
            { text: 'Limón', category: 'Ingredientes', icon: '🍋' }
        ];

        ingredients.forEach(ingredient => {
            if (ingredient.text.toLowerCase().includes(query)) {
                suggestions.push(ingredient);
            }
        });

        // Popular searches
        const popularSearches = [
            { text: 'Jugos detox', category: 'Popular', icon: '🔥' },
            { text: 'Sin azúcar', category: 'Popular', icon: '🚫' },
            { text: 'Proteína', category: 'Popular', icon: '💪' },
            { text: 'Antioxidantes', category: 'Popular', icon: '✨' }
        ];

        popularSearches.forEach(search => {
            if (search.text.toLowerCase().includes(query)) {
                suggestions.push(search);
            }
        });

        return suggestions.slice(0, 6); // Limit to 6 suggestions
    },

    // Select search suggestion
    selectSearchSuggestion: function (text, inputId) {
        const input = document.getElementById(inputId);
        if (input) {
            input.value = text;
            input.dispatchEvent(new Event('input'));

            // Hide suggestions
            const container = input.parentElement.querySelector('.search-suggestions');
            if (container) {
                container.classList.remove('show');
            }
        }

        // Track suggestion usage
        this.trackSuggestionUsage('search', text);
    },

    // Update context based on current section
    updateContext: function (sectionId) {
        this.currentContext = sectionId || 'general';
        this.updateSuggestions();
    },

    // Analyze user interaction
    analyzeUserInteraction: function (event) {
        const target = event.target;

        // Track product interests
        if (target.closest('.menu__card')) {
            const productId = target.closest('.menu__card').getAttribute('data-product-id');
            this.trackProductInterest(productId);
        }

        // Track category preferences
        if (target.classList.contains('menu-filters__category')) {
            const category = target.getAttribute('data-category');
            this.trackCategoryInterest(category);
        }

        // Track search behavior
        if (target.classList.contains('menu-filters__search-input')) {
            this.trackSearchBehavior(target.value);
        }
    },

    // Track product interest
    trackProductInterest: function (productId) {
        if (!productId) return;

        const product = ProductUtils?.getProductById(productId);
        if (product) {
            // Update preferences
            if (!this.userPreferences.recentlyViewed) {
                this.userPreferences.recentlyViewed = [];
            }

            // Add to recently viewed (keep last 10)
            this.userPreferences.recentlyViewed = [
                productId,
                ...this.userPreferences.recentlyViewed.filter(id => id !== productId)
            ].slice(0, 10);

            // Update favorite categories
            if (product.category) {
                if (!this.userPreferences.favoriteCategories.includes(product.category)) {
                    this.userPreferences.favoriteCategories.push(product.category);
                }
            }

            this.saveUserPreferences();
            this.updateSuggestions();
        }
    },

    // Track category interest
    trackCategoryInterest: function (category) {
        if (!category || category === 'all') return;

        if (!this.userPreferences.favoriteCategories.includes(category)) {
            this.userPreferences.favoriteCategories.unshift(category);
            this.userPreferences.favoriteCategories = this.userPreferences.favoriteCategories.slice(0, 3);
        }

        this.saveUserPreferences();
        this.updateSuggestions();
    },

    // Track search behavior
    trackSearchBehavior: function (query) {
        if (!query || query.length < 3) return;

        if (!this.userPreferences.searchHistory) {
            this.userPreferences.searchHistory = [];
        }

        this.userPreferences.searchHistory = [
            query,
            ...this.userPreferences.searchHistory.filter(q => q !== query)
        ].slice(0, 10);

        this.saveUserPreferences();
    },

    // Save user preferences
    saveUserPreferences: function () {
        localStorage.setItem('userPreferences', JSON.stringify(this.userPreferences));
    },

    // Toggle suggestions visibility
    toggleSuggestions: function () {
        if (this.isVisible) {
            this.hideSuggestions();
        } else {
            this.showSuggestions();
        }
    },

    // Show suggestions
    showSuggestions: function () {
        const suggestions = document.getElementById('smart-suggestions');
        const toggle = document.getElementById('suggestions-toggle');

        suggestions.classList.add('show');
        toggle.classList.add('active');
        this.isVisible = true;

        // Update suggestions when shown
        this.updateSuggestions();

        // Hide badge
        const badge = document.getElementById('suggestions-badge');
        if (badge) badge.style.display = 'none';
    },

    // Hide suggestions
    hideSuggestions: function () {
        const suggestions = document.getElementById('smart-suggestions');
        const toggle = document.getElementById('suggestions-toggle');

        suggestions.classList.remove('show');
        toggle.classList.remove('active');
        this.isVisible = false;
    },

    // Update suggestions based on context
    updateSuggestions: function () {
        const content = document.getElementById('suggestions-content');
        if (!content) return;

        const suggestions = this.generateContextualSuggestions();

        content.innerHTML = suggestions.map(category => `
            <div class="suggestion-category">
                <h4 class="suggestion-category__title">
                    <span class="suggestion-category__icon">${category.icon}</span>
                    ${category.title}
                </h4>
                ${category.items.map(item => `
                    <div class="suggestion-item ${item.type || ''}" 
                         onclick="SmartSuggestions.applySuggestion('${item.id}', '${item.action}', '${item.data || ''}')"
                         tabindex="0">
                        <div class="suggestion-item__header">
                            <div class="suggestion-item__icon">${item.icon}</div>
                            <div class="suggestion-item__content">
                                <div class="suggestion-item__title">${item.title}</div>
                                <div class="suggestion-item__description">${item.description}</div>
                                <div class="suggestion-item__action">${item.actionText}</div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `).join('');

        // Update badge count
        const totalSuggestions = suggestions.reduce((sum, cat) => sum + cat.items.length, 0);
        const badge = document.getElementById('suggestions-badge');
        if (badge) {
            badge.textContent = totalSuggestions;
            badge.style.display = totalSuggestions > 0 ? 'flex' : 'none';
        }
    },

    // Generate contextual suggestions
    generateContextualSuggestions: function () {
        const suggestions = [];

        // Location-based suggestions
        if (this.userLocation) {
            suggestions.push({
                title: 'Basado en tu ubicación',
                icon: '📍',
                items: this.getLocationBasedSuggestions()
            });
        }

        // Personalized recommendations
        suggestions.push({
            title: 'Recomendado para ti',
            icon: '⭐',
            items: this.getPersonalizedSuggestions()
        });

        // Context-specific suggestions
        const contextSuggestions = this.getContextSpecificSuggestions();
        if (contextSuggestions.length > 0) {
            suggestions.push({
                title: 'Sugerencias actuales',
                icon: '💡',
                items: contextSuggestions
            });
        }

        // AI-powered suggestions
        suggestions.push({
            title: 'Sugerencias inteligentes',
            icon: '🤖',
            items: this.getAIPoweredSuggestions()
        });

        return suggestions.filter(cat => cat.items.length > 0);
    },

    // Get location-based suggestions
    getLocationBasedSuggestions: function () {
        const suggestions = [];

        if (this.userLocation?.weather === 'sunny') {
            suggestions.push({
                id: 'weather-cold-drinks',
                icon: '☀️',
                title: 'Bebidas refrescantes',
                description: 'Perfecto para el clima soleado de hoy',
                actionText: 'Ver jugos fríos',
                action: 'filter',
                data: 'cold-drinks',
                type: 'location-suggestion'
            });
        }

        if (this.userLocation?.city === 'Ciudad de México') {
            suggestions.push({
                id: 'local-delivery',
                icon: '🚚',
                title: 'Entrega rápida disponible',
                description: 'Entrega en 30 min en tu zona',
                actionText: 'Ver opciones',
                action: 'show-delivery',
                type: 'location-suggestion'
            });
        }

        return suggestions;
    },

    // Get personalized suggestions
    getPersonalizedSuggestions: function () {
        const suggestions = [];

        // Based on favorite categories
        if (this.userPreferences.favoriteCategories?.includes('jugos')) {
            suggestions.push({
                id: 'favorite-category',
                icon: '🍊',
                title: 'Nuevos jugos naturales',
                description: 'Basado en tus preferencias de jugos',
                actionText: 'Explorar jugos',
                action: 'filter',
                data: 'jugos',
                type: 'personal-suggestion'
            });
        }

        // Based on recently viewed
        if (this.userPreferences.recentlyViewed?.length > 0) {
            suggestions.push({
                id: 'recently-viewed',
                icon: '👁️',
                title: 'Continúa explorando',
                description: 'Productos similares a los que viste',
                actionText: 'Ver similares',
                action: 'show-similar',
                data: this.userPreferences.recentlyViewed[0],
                type: 'personal-suggestion'
            });
        }

        // Time-based suggestions
        const hour = new Date().getHours();
        if (hour >= 6 && hour <= 11) {
            suggestions.push({
                id: 'morning-boost',
                icon: '🌅',
                title: 'Energía matutina',
                description: 'Jugos energizantes para empezar el día',
                actionText: 'Ver opciones',
                action: 'filter',
                data: 'energy-boost',
                type: 'personal-suggestion'
            });
        }

        return suggestions;
    },

    // Get context-specific suggestions
    getContextSpecificSuggestions: function () {
        const suggestions = [];

        switch (this.currentContext) {
            case 'menu':
                suggestions.push({
                    id: 'menu-filters',
                    icon: '🔍',
                    title: 'Usa filtros inteligentes',
                    description: 'Encuentra productos más rápido',
                    actionText: 'Abrir filtros',
                    action: 'show-filters'
                });
                break;

            case 'contact':
                suggestions.push({
                    id: 'quick-contact',
                    icon: '💬',
                    title: 'Contacto rápido por WhatsApp',
                    description: 'Respuesta inmediata a tus preguntas',
                    actionText: 'Abrir WhatsApp',
                    action: 'open-whatsapp'
                });
                break;

            case 'hero':
                suggestions.push({
                    id: 'explore-menu',
                    icon: '📋',
                    title: 'Explora nuestro menú',
                    description: 'Descubre todos nuestros productos',
                    actionText: 'Ver menú',
                    action: 'scroll-to',
                    data: 'menu'
                });
                break;
        }

        return suggestions;
    },

    // Get AI-powered suggestions
    getAIPoweredSuggestions: function () {
        const suggestions = [];

        // Simulate AI recommendations
        suggestions.push({
            id: 'ai-combo',
            icon: '🎯',
            title: 'Combo personalizado',
            description: 'IA sugiere: Jugo Verde + Café Americano',
            actionText: 'Ver combo',
            action: 'create-combo',
            data: 'green-juice,americano',
            type: 'ai-suggestion'
        });

        suggestions.push({
            id: 'ai-health',
            icon: '💚',
            title: 'Recomendación saludable',
            description: 'Basado en tendencias de salud actuales',
            actionText: 'Ver opciones',
            action: 'filter',
            data: 'healthy',
            type: 'ai-suggestion'
        });

        return suggestions;
    },

    // Apply suggestion
    applySuggestion: function (id, action, data) {
        console.log(`Applying suggestion: ${id}, action: ${action}, data: ${data}`);

        // Mark as applied
        const suggestionElement = event.target.closest('.suggestion-item');
        if (suggestionElement) {
            suggestionElement.classList.add('applied');
        }

        // Execute action
        switch (action) {
            case 'filter':
                this.applyFilter(data);
                break;
            case 'scroll-to':
                this.scrollToSection(data);
                break;
            case 'open-whatsapp':
                this.openWhatsApp();
                break;
            case 'show-filters':
                this.showFilters();
                break;
            case 'show-delivery':
                this.showDeliveryInfo();
                break;
            case 'show-similar':
                this.showSimilarProducts(data);
                break;
            case 'create-combo':
                this.createCombo(data);
                break;
        }

        // Track suggestion usage
        this.trackSuggestionUsage(action, id);

        // Hide suggestions after applying
        setTimeout(() => {
            this.hideSuggestions();
        }, 1000);
    },

    // Apply filter
    applyFilter: function (filterType) {
        if (window.MenuFilters) {
            switch (filterType) {
                case 'jugos':
                    MenuFilters.setCategory('jugos');
                    break;
                case 'cold-drinks':
                    MenuFilters.currentFilters.search = 'frío';
                    MenuFilters.applyFilters();
                    break;
                case 'energy-boost':
                    MenuFilters.currentFilters.search = 'energía';
                    MenuFilters.applyFilters();
                    break;
                case 'healthy':
                    MenuFilters.currentFilters.search = 'natural';
                    MenuFilters.applyFilters();
                    break;
            }
        }

        // Scroll to menu section
        this.scrollToSection('menu');
    },

    // Scroll to section
    scrollToSection: function (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },

    // Open WhatsApp
    openWhatsApp: function () {
        if (window.QuickActions) {
            QuickActions.openWhatsApp();
        } else {
            const message = '¡Hola! Me interesa conocer más sobre sus productos.';
            const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }
    },

    // Show filters
    showFilters: function () {
        const filtersToggle = document.querySelector('.menu-filters__toggle');
        if (filtersToggle) {
            filtersToggle.click();
        }

        this.scrollToSection('menu');
    },

    // Show delivery info
    showDeliveryInfo: function () {
        this.showNotification('🚚 Entrega disponible en 30 minutos en tu zona. ¡Haz tu pedido!', 'info');
    },

    // Show similar products
    showSimilarProducts: function (productId) {
        const product = ProductUtils?.getProductById(productId);
        if (product && window.MenuFilters) {
            MenuFilters.setCategory(product.category);
            this.scrollToSection('menu');
        }
    },

    // Create combo
    createCombo: function (productIds) {
        const ids = productIds.split(',');
        this.showNotification(`🎯 Combo sugerido: ${ids.join(' + ')}. ¡Ahorra 15%!`, 'success');
    },

    // Track suggestion usage
    trackSuggestionUsage: function (action, suggestionId) {
        if (!this.suggestionHistory) {
            this.suggestionHistory = [];
        }

        this.suggestionHistory.push({
            id: suggestionId,
            action: action,
            timestamp: Date.now(),
            context: this.currentContext
        });

        // Keep last 50 interactions
        this.suggestionHistory = this.suggestionHistory.slice(-50);

        console.log(`Suggestion used: ${suggestionId} (${action})`);
    },

    // Update location-based suggestions
    updateLocationBasedSuggestions: function () {
        if (this.isVisible) {
            this.updateSuggestions();
        }
    },

    // Start contextual analysis
    startContextualAnalysis: function () {
        // Analyze page content periodically
        setInterval(() => {
            this.analyzePageContext();
        }, 10000); // Every 10 seconds

        // Analyze user behavior
        this.startBehaviorAnalysis();
    },

    // Analyze page context
    analyzePageContext: function () {
        // Check if user is idle
        const lastActivity = Date.now() - (this.lastActivity || Date.now());
        if (lastActivity > 30000) { // 30 seconds idle
            this.suggestReEngagement();
        }

        // Check scroll behavior
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent > 80) {
            this.suggestNextAction();
        }
    },

    // Start behavior analysis
    startBehaviorAnalysis: function () {
        let lastActivity = Date.now();

        ['click', 'scroll', 'mousemove', 'keypress'].forEach(event => {
            document.addEventListener(event, () => {
                lastActivity = Date.now();
                this.lastActivity = lastActivity;
            }, { passive: true });
        });
    },

    // Suggest re-engagement
    suggestReEngagement: function () {
        // Add suggestion to re-engage user
        console.log('User seems idle, suggesting re-engagement');
    },

    // Suggest next action
    suggestNextAction: function () {
        // Suggest what to do next based on current page position
        console.log('User reached bottom, suggesting next action');
    },

    // Show notification
    showNotification: function (message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'rgba(76, 175, 80, 0.9)' :
                type === 'error' ? 'rgba(244, 67, 54, 0.9)' :
                    'rgba(33, 150, 243, 0.9)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            font-size: 0.9rem;
            z-index: 10002;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 300px;
            backdrop-filter: blur(10px);
        `;

        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);

        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }
};

// Initialize Smart Suggestions when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        SmartSuggestions.init();
    }, 1500);
});

// Export for global use
window.SmartSuggestions = SmartSuggestions;
/* ==================================
 PROGRESS INDICATORS SYSTEM - FASE 2
 =================================== */

// Progress Indicators System
const ProgressSystem = {
    // Progress Bar Component
    ProgressBar: class {
        constructor(element, options = {}) {
            this.element = element;
            this.options = {
                min: 0,
                max: 100,
                value: 0,
                animated: true,
                showText: true,
                ...options
            };

            this.init();
        }

        init() {
            this.element.innerHTML = `
                <div class="progress-bar">
                    <div class="progress-bar__fill" style="width: 0%"></div>
                </div>
                ${this.options.showText ? '<div class="progress-bar__text">0%</div>' : ''}
            `;

            this.fillElement = this.element.querySelector('.progress-bar__fill');
            this.textElement = this.element.querySelector('.progress-bar__text');

            this.setValue(this.options.value);
        }

        setValue(value) {
            const clampedValue = Math.max(this.options.min, Math.min(this.options.max, value));
            const percentage = ((clampedValue - this.options.min) / (this.options.max - this.options.min)) * 100;

            if (this.options.animated) {
                this.fillElement.style.width = `${percentage}%`;
            } else {
                this.fillElement.style.transition = 'none';
                this.fillElement.style.width = `${percentage}%`;
                setTimeout(() => {
                    this.fillElement.style.transition = '';
                }, 10);
            }

            if (this.textElement) {
                this.textElement.textContent = `${Math.round(percentage)}%`;
            }

            this.options.value = clampedValue;
        }

        getValue() {
            return this.options.value;
        }

        increment(amount = 1) {
            this.setValue(this.options.value + amount);
        }

        decrement(amount = 1) {
            this.setValue(this.options.value - amount);
        }
    },

    // Circular Progress Component
    CircularProgress: class {
        constructor(element, options = {}) {
            this.element = element;
            this.options = {
                size: 80,
                strokeWidth: 8,
                value: 0,
                max: 100,
                showText: true,
                ...options
            };

            this.init();
        }

        init() {
            const { size, strokeWidth } = this.options;
            const radius = (size - strokeWidth) / 2;
            const circumference = 2 * Math.PI * radius;

            this.element.innerHTML = `
                <div class="progress-circle">
                    <svg class="progress-circle__svg" width="${size}" height="${size}">
                        <defs>
                            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style="stop-color:var(--primary-green)"/>
                                <stop offset="100%" style="stop-color:var(--secondary-orange)"/>
                            </linearGradient>
                        </defs>
                        <circle class="progress-circle__background" 
                                cx="${size / 2}" cy="${size / 2}" r="${radius}"/>
                        <circle class="progress-circle__fill" 
                                cx="${size / 2}" cy="${size / 2}" r="${radius}"
                                style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${circumference}"/>
                    </svg>
                    ${this.options.showText ? '<div class="progress-circle__text">0%</div>' : ''}
                </div>
            `;

            this.fillElement = this.element.querySelector('.progress-circle__fill');
            this.textElement = this.element.querySelector('.progress-circle__text');
            this.circumference = circumference;

            this.setValue(this.options.value);
        }

        setValue(value) {
            const clampedValue = Math.max(0, Math.min(this.options.max, value));
            const percentage = (clampedValue / this.options.max) * 100;
            const offset = this.circumference - (percentage / 100) * this.circumference;

            this.fillElement.style.strokeDashoffset = offset;

            if (this.textElement) {
                this.textElement.textContent = `${Math.round(percentage)}%`;
            }

            this.options.value = clampedValue;
        }

        getValue() {
            return this.options.value;
        }
    },

    // Step Progress Component
    StepProgress: class {
        constructor(element, steps, options = {}) {
            this.element = element;
            this.steps = steps;
            this.currentStep = 0;
            this.options = {
                clickable: true,
                showLabels: true,
                ...options
            };

            this.init();
        }

        init() {
            const stepsHTML = this.steps.map((step, index) => `
                <div class="step-progress__step ${index === 0 ? 'active' : ''}" 
                     data-step="${index}" 
                     ${this.options.clickable ? 'style="cursor: pointer;"' : ''}>
                    <div class="step-progress__circle">${index + 1}</div>
                    ${this.options.showLabels ? `<div class="step-progress__label">${step.label}</div>` : ''}
                </div>
            `).join('');
            this.element.innerHTML = `
                <div class="step-progress">
                    <div class="step-progress__line" style="width: 0%"></div>
                    ${stepsHTML}
                </div>
            `;

            this.lineElement = this.element.querySelector('.step-progress__line');
            this.stepElements = this.element.querySelectorAll('.step-progress__step');

            if (this.options.clickable) {
                this.bindEvents();
            }

            this.updateProgress();
        }

        bindEvents() {
            this.stepElements.forEach((stepElement, index) => {
                stepElement.addEventListener('click', () => {
                    if (this.options.onStepClick) {
                        this.options.onStepClick(index, this.steps[index]);
                    }
                    this.goToStep(index);
                });
            });
        }
    } // <-- Closing brace for StepProgress class
}; // <-- Closing ProgressSystem object

/* ================================
WHATSAPP BUSINESS INTEGRATION - FASE 2
=================================== */

// WhatsApp Business Integration System
WhatsAppBusiness = {
    config: {
        businessNumber: '+525551234567', // Replace with actual business number
        businessName: 'Fres-Kuras',
        welcomeMessage: '¡Hola! 👋 Bienvenido a Fres-Kuras. ¿En qué podemos ayudarte hoy?',
        workingHours: {
            start: 9,
            end: 20,
            timezone: 'America/Mexico_City'
        },
        autoResponses: true,
        trackClicks: true
    },

    isOpen: false,
    chatWidget: null,
    statusIndicator: null,
    orderCart: [],
    clickCount: 0,

    // Initialize WhatsApp Business integration
    init: function () {
        this.createFloatingButton();
        this.createChatWidget();
        this.createStatusIndicator();
        this.addContextualButtons();
        this.bindEvents();
        this.updateBusinessStatus();
        this.loadOrderCart();
    },

    // Create floating WhatsApp button
    createFloatingButton: function () {
        const floatingButton = document.createElement('div');
        floatingButton.className = 'whatsapp-floating';
        floatingButton.innerHTML = `
            <button class="whatsapp-floating__button" title="Contactar por WhatsApp">
                <i class="ri-whatsapp-line"></i>
                <span class="whatsapp-floating__text">WhatsApp</span>
            </button>
        `;
        document.body.appendChild(floatingButton);
    },

    // Create chat widget
    createChatWidget: function () {
        // Placeholder for chat widget creation
        console.log('WhatsApp chat widget created');
    },

    // Create status indicator
    createStatusIndicator: function () {
        // Placeholder for status indicator
        console.log('WhatsApp status indicator created');
    },

    // Add contextual buttons
    addContextualButtons: function () {
        // Placeholder for contextual buttons
        console.log('WhatsApp contextual buttons added');
    },

    // Bind events
    bindEvents: function () {
        const floatingButton = document.querySelector('.whatsapp-floating__button');
        if (floatingButton) {
            floatingButton.addEventListener('click', () => {
                this.openWhatsApp();
            });
        }
    },

    // Update business status
    updateBusinessStatus: function () {
        // Placeholder for business status update
        console.log('WhatsApp business status updated');
    },

    // Load order cart
    loadOrderCart: function () {
        // Placeholder for order cart loading
        console.log('WhatsApp order cart loaded');
    },

    // Open WhatsApp
    openWhatsApp: function () {
        const message = encodeURIComponent(this.config.welcomeMessage);
        const whatsappUrl = `https://wa.me/${this.config.businessNumber.replace(/[^0-9]/g, '')}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    }
}; // Fixed WhatsApp Business object

/* ===================================
   FAQ ACCORDION INTERACTIVE SYSTEM
   =================================== */

// FAQ Data Structure
const faqData = {
    general: [
        {
            id: 'faq-1',
            question: '¿Qué hace únicos a los jugos de Fres-Kuras?',
            answer: 'Nuestros jugos son 100% naturales, preparados con frutas y verduras frescas seleccionadas diariamente. No utilizamos conservantes artificiales, colorantes ni azúcares añadidos. Cada jugo se prepara al momento para garantizar máxima frescura y valor nutricional.',
            category: 'general',
            tags: ['natural', 'fresco', 'calidad', 'ingredientes'],
            popular: true
        },
        {
            id: 'faq-2',
            question: '¿Cuáles son sus horarios de atención?',
            answer: 'Estamos abiertos de lunes a viernes de 7:00 AM a 8:00 PM, sábados de 8:00 AM a 9:00 PM y domingos de 8:00 AM a 7:00 PM. También puedes hacer pedidos por WhatsApp fuera del horario para entrega al día siguiente.',
            category: 'general',
            tags: ['horarios', 'atención', 'pedidos'],
            popular: true
        },
        {
            id: 'faq-3',
            question: '¿Hacen entregas a domicilio?',
            answer: 'Sí, realizamos entregas a domicilio en un radio de 10 km. El costo de envío varía según la distancia. Entregas gratuitas para pedidos mayores a $300. Tiempo estimado de entrega: 30-45 minutos.',
            category: 'general',
            tags: ['entrega', 'domicilio', 'envío', 'costo'],
            popular: true
        }
    ],
    productos: [
        {
            id: 'faq-4',
            question: '¿Cuánto tiempo duran frescos los jugos?',
            answer: 'Nuestros jugos naturales se mantienen frescos por 24-48 horas refrigerados. Recomendamos consumirlos el mismo día para obtener el máximo beneficio nutricional. Los frappuccinos y cafés deben consumirse inmediatamente.',
            category: 'productos',
            tags: ['frescura', 'duración', 'refrigeración', 'conservación'],
            popular: false
        },
        {
            id: 'faq-5',
            question: '¿Pueden personalizar los jugos según mis necesidades?',
            answer: 'Absolutamente. Podemos ajustar los ingredientes según tus preferencias, alergias o necesidades nutricionales. También ofrecemos jugos detox personalizados y mezclas especiales para deportistas.',
            category: 'productos',
            tags: ['personalización', 'alergias', 'detox', 'deportistas'],
            popular: true
        },
        {
            id: 'faq-6',
            question: '¿Qué información nutricional proporcionan?',
            answer: 'Cada producto incluye información completa: calorías, vitaminas, minerales, azúcares naturales y beneficios para la salud. También indicamos alérgenos y proporcionamos recomendaciones de consumo.',
            category: 'productos',
            tags: ['nutrición', 'calorías', 'vitaminas', 'alérgenos'],
            popular: false
        }
    ],
    pedidos: [
        {
            id: 'faq-7',
            question: '¿Cómo puedo hacer un pedido?',
            answer: 'Puedes hacer pedidos de 3 formas: 1) Directamente en nuestra tienda, 2) Por WhatsApp enviando tu lista, 3) Llamando por teléfono. Para pedidos grandes recomendamos avisar con 2 horas de anticipación.',
            category: 'pedidos',
            tags: ['pedidos', 'whatsapp', 'teléfono', 'anticipación'],
            popular: true
        },
        {
            id: 'faq-8',
            question: '¿Cuáles son las formas de pago?',
            answer: 'Aceptamos efectivo, tarjetas de débito/crédito, transferencias bancarias y pagos móviles (Apple Pay, Google Pay). Para entregas a domicilio también aceptamos pago contra entrega.',
            category: 'pedidos',
            tags: ['pago', 'tarjetas', 'efectivo', 'transferencia'],
            popular: true
        },
        {
            id: 'faq-9',
            question: '¿Puedo cancelar o modificar mi pedido?',
            answer: 'Sí, puedes cancelar o modificar tu pedido hasta 15 minutos después de confirmarlo. Para pedidos en preparación, contacta inmediatamente por WhatsApp. Las cancelaciones se procesan en 24-48 horas.',
            category: 'pedidos',
            tags: ['cancelación', 'modificación', 'tiempo', 'reembolso'],
            popular: false
        }
    ],
    salud: [
        {
            id: 'faq-10',
            question: '¿Los jugos son aptos para diabéticos?',
            answer: 'Ofrecemos opciones especiales para diabéticos con bajo índice glucémico, usando principalmente vegetales verdes y frutas bajas en azúcar. Siempre recomendamos consultar con tu médico antes de incluir jugos en tu dieta.',
            category: 'salud',
            tags: ['diabetes', 'azúcar', 'glucémico', 'médico'],
            popular: false
        },
        {
            id: 'faq-11',
            question: '¿Tienen opciones para personas con alergias?',
            answer: 'Sí, manejamos cuidadosamente las alergias alimentarias. Tenemos opciones sin lácteos, sin gluten, sin frutos secos. Siempre informa sobre tus alergias al hacer el pedido para evitar contaminación cruzada.',
            category: 'salud',
            tags: ['alergias', 'lácteos', 'gluten', 'contaminación'],
            popular: true
        },
        {
            id: 'faq-12',
            question: '¿Los jugos ayudan con la pérdida de peso?',
            answer: 'Nuestros jugos detox y verdes pueden complementar una dieta balanceada para pérdida de peso. Son ricos en nutrientes y bajos en calorías, pero no son sustitutos de comidas completas. Recomendamos asesoría nutricional.',
            category: 'salud',
            tags: ['pérdida', 'peso', 'detox', 'nutrición'],
            popular: true
        }
    ]
};

// FAQ System Class
class FAQAccordion {
    constructor() {
        this.faqs = faqData;
        this.currentCategory = 'all';
        this.searchTerm = '';
        this.container = null;
        this.searchInput = null;
        this.categoryFilters = null;
        this.resultsInfo = null;
        this.expandedItems = new Set();
        this.animationDuration = 300;

        this.init();
    }

    init() {
        this.createFAQSection();
        this.bindEvents();
        this.renderFAQs();
        console.log('FAQ Accordion initialized');
    }

    createFAQSection() {
        // Find or create FAQ section
        let faqSection = document.getElementById('faq');
        if (!faqSection) {
            faqSection = document.createElement('section');
            faqSection.id = 'faq';
            faqSection.className = 'faq section';

            // Insert before contact section or at the end
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.parentNode.insertBefore(faqSection, contactSection);
            } else {
                document.body.appendChild(faqSection);
            }
        }

        faqSection.innerHTML = `
            <div class="faq__container container">
                <div class="faq__header">
                    <h2 class="faq__title">Preguntas Frecuentes</h2>
                    <p class="faq__subtitle">Encuentra respuestas rápidas a las preguntas más comunes</p>
                </div>
                
                <div class="faq__controls">
                    <div class="faq__search-container">
                        <input type="text" 
                               class="faq__search" 
                               placeholder="Buscar en preguntas frecuentes..." 
                               id="faq-search">
                        <i class="ri-search-line faq__search-icon"></i>
                    </div>
                    
                    <div class="faq__categories">
                        <button class="faq__category-btn active" data-category="all">
                            <i class="ri-apps-line"></i>
                            Todas
                        </button>
                        <button class="faq__category-btn" data-category="general">
                            <i class="ri-information-line"></i>
                            General
                        </button>
                        <button class="faq__category-btn" data-category="productos">
                            <i class="ri-product-hunt-line"></i>
                            Productos
                        </button>
                        <button class="faq__category-btn" data-category="pedidos">
                            <i class="ri-shopping-cart-line"></i>
                            Pedidos
                        </button>
                        <button class="faq__category-btn" data-category="salud">
                            <i class="ri-heart-pulse-line"></i>
                            Salud
                        </button>
                    </div>
                </div>
                
                <div class="faq__results-info" id="faq-results-info">
                    <span class="faq__results-count"></span>
                    <span class="faq__results-time"></span>
                </div>
                
                <div class="faq__content" id="faq-content">
                    <!-- FAQ items will be rendered here -->
                </div>
                
                <div class="faq__no-results" id="faq-no-results" style="display: none;">
                    <i class="ri-search-line"></i>
                    <h3>No se encontraron resultados</h3>
                    <p>Intenta con otros términos de búsqueda o selecciona una categoría diferente</p>
                    <button class="faq__clear-search btn btn--primary">Limpiar búsqueda</button>
                </div>
                
                <div class="faq__contact-cta">
                    <h3>¿No encontraste lo que buscabas?</h3>
                    <p>Contáctanos directamente y te ayudaremos con gusto</p>
                    <div class="faq__contact-buttons">
                        <a href="#contact" class="btn btn--primary">
                            <i class="ri-mail-line"></i>
                            Contactar
                        </a>
                        <a href="https://wa.me/525551234567" class="btn btn--secondary" target="_blank">
                            <i class="ri-whatsapp-line"></i>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        `;

        this.container = document.getElementById('faq-content');
        this.searchInput = document.getElementById('faq-search');
        this.categoryFilters = document.querySelectorAll('.faq__category-btn');
        this.resultsInfo = document.getElementById('faq-results-info');
    }

    bindEvents() {
        // Search functionality with debounce
        let searchTimeout;
        this.searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.searchTerm = e.target.value.toLowerCase().trim();
                this.renderFAQs();
            }, 300);
        });

        // Category filtering
        this.categoryFilters.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Update active category button
                this.categoryFilters.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');

                // Update current category and render
                this.currentCategory = e.target.dataset.category;
                this.renderFAQs();
            });
        });

        // Clear search button
        const clearSearchBtn = document.querySelector('.faq__clear-search');
        if (clearSearchBtn) {
            clearSearchBtn.addEventListener('click', () => {
                this.searchInput.value = '';
                this.searchTerm = '';
                this.renderFAQs();
                this.searchInput.focus();
            });
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.searchInput === document.activeElement) {
                this.searchInput.blur();
            }
        });
    }

    getFilteredFAQs() {
        let allFAQs = [];

        // Collect all FAQs from categories
        for (const category in this.faqs) {
            allFAQs.push(...this.faqs[category]);
        }

        // Filter by category
        if (this.currentCategory !== 'all') {
            allFAQs = allFAQs.filter(faq => faq.category === this.currentCategory);
        }

        // Filter by search term
        if (this.searchTerm) {
            allFAQs = allFAQs.filter(faq => {
                const searchableText = `${faq.question} ${faq.answer} ${faq.tags.join(' ')}`.toLowerCase();
                return searchableText.includes(this.searchTerm);
            });
        }

        // Sort by popularity and then alphabetically
        allFAQs.sort((a, b) => {
            if (a.popular && !b.popular) return -1;
            if (!a.popular && b.popular) return 1;
            return a.question.localeCompare(b.question);
        });

        return allFAQs;
    }

    renderFAQs() {
        const startTime = performance.now();
        const filteredFAQs = this.getFilteredFAQs();
        const endTime = performance.now();

        // Update results info
        this.updateResultsInfo(filteredFAQs.length, endTime - startTime);

        // Show/hide no results message
        const noResultsDiv = document.getElementById('faq-no-results');
        if (filteredFAQs.length === 0) {
            this.container.style.display = 'none';
            noResultsDiv.style.display = 'block';
            return;
        } else {
            this.container.style.display = 'block';
            noResultsDiv.style.display = 'none';
        }

        // Render FAQ items
        this.container.innerHTML = filteredFAQs.map(faq => this.createFAQItem(faq)).join('');

        // Bind accordion events
        this.bindAccordionEvents();

        // Animate in new items
        this.animateItems();
    }

    createFAQItem(faq) {
        const isExpanded = this.expandedItems.has(faq.id);
        const popularBadge = faq.popular ? '<span class="faq__popular-badge"><i class="ri-fire-line"></i>Popular</span>' : '';

        return `
            <div class="faq__item ${isExpanded ? 'expanded' : ''}" data-faq-id="${faq.id}">
                <div class="faq__question" role="button" tabindex="0" aria-expanded="${isExpanded}">
                    <div class="faq__question-content">
                        <h3 class="faq__question-text">${this.highlightSearchTerm(faq.question)}</h3>
                        ${popularBadge}
                    </div>
                    <div class="faq__toggle">
                        <i class="ri-add-line faq__toggle-icon"></i>
                    </div>
                </div>
                <div class="faq__answer" style="max-height: ${isExpanded ? 'none' : '0'}">
                    <div class="faq__answer-content">
                        <p>${this.highlightSearchTerm(faq.answer)}</p>
                        <div class="faq__tags">
                            ${faq.tags.map(tag => `<span class="faq__tag">${tag}</span>`).join('')}
                        </div>
                        <div class="faq__actions">
                            <button class="faq__helpful-btn" data-helpful="yes">
                                <i class="ri-thumb-up-line"></i>
                                Útil
                            </button>
                            <button class="faq__helpful-btn" data-helpful="no">
                                <i class="ri-thumb-down-line"></i>
                                No útil
                            </button>
                            <button class="faq__share-btn">
                                <i class="ri-share-line"></i>
                                Compartir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    highlightSearchTerm(text) {
        if (!this.searchTerm) return text;

        const regex = new RegExp(`(${this.searchTerm})`, 'gi');
        return text.replace(regex, '<mark class="faq__highlight">$1</mark>');
    }

    bindAccordionEvents() {
        const faqItems = this.container.querySelectorAll('.faq__item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq__question');
            const answer = item.querySelector('.faq__answer');
            const faqId = item.dataset.faqId;

            // Click event for accordion toggle
            question.addEventListener('click', () => {
                this.toggleFAQ(item, answer, faqId);
            });

            // Keyboard event for accessibility
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleFAQ(item, answer, faqId);
                }
            });

            // Helpful buttons
            const helpfulBtns = item.querySelectorAll('.faq__helpful-btn');
            helpfulBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.handleHelpfulClick(btn, faqId);
                });
            });

            // Share button
            const shareBtn = item.querySelector('.faq__share-btn');
            shareBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.shareFAQ(faqId);
            });
        });
    }

    toggleFAQ(item, answer, faqId) {
        const isExpanded = item.classList.contains('expanded');
        const question = item.querySelector('.faq__question');

        if (isExpanded) {
            // Collapse
            this.collapseFAQ(item, answer, faqId);
        } else {
            // Expand
            this.expandFAQ(item, answer, faqId);
        }

        // Update ARIA attribute
        question.setAttribute('aria-expanded', !isExpanded);

        // Track interaction
        this.trackFAQInteraction(faqId, !isExpanded ? 'expand' : 'collapse');
    }

    expandFAQ(item, answer, faqId) {
        item.classList.add('expanded');
        this.expandedItems.add(faqId);

        // Calculate height for smooth animation
        const content = answer.querySelector('.faq__answer-content');
        const height = content.scrollHeight;

        answer.style.maxHeight = height + 'px';

        // Reset to auto after animation
        setTimeout(() => {
            if (item.classList.contains('expanded')) {
                answer.style.maxHeight = 'none';
            }
        }, this.animationDuration);
    }

    collapseFAQ(item, answer, faqId) {
        // Set explicit height first for smooth animation
        answer.style.maxHeight = answer.scrollHeight + 'px';

        // Force reflow
        answer.offsetHeight;

        // Collapse
        answer.style.maxHeight = '0';
        item.classList.remove('expanded');
        this.expandedItems.delete(faqId);
    }

    handleHelpfulClick(btn, faqId) {
        const isHelpful = btn.dataset.helpful === 'yes';
        const allBtns = btn.parentNode.querySelectorAll('.faq__helpful-btn');

        // Remove active state from all buttons
        allBtns.forEach(b => b.classList.remove('active'));

        // Add active state to clicked button
        btn.classList.add('active');

        // Show feedback message
        this.showFeedbackMessage(isHelpful);

        // Track feedback
        this.trackFAQFeedback(faqId, isHelpful);
    }

    showFeedbackMessage(isHelpful) {
        const message = isHelpful ?
            '¡Gracias por tu feedback! 👍' :
            'Gracias por tu feedback. Mejoraremos esta respuesta. 👎';

        // Create temporary message
        const messageDiv = document.createElement('div');
        messageDiv.className = 'faq__feedback-message';
        messageDiv.textContent = message;

        // Insert after FAQ section
        const faqSection = document.getElementById('faq');
        faqSection.appendChild(messageDiv);

        // Remove after 3 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }

    shareFAQ(faqId) {
        const faq = this.findFAQById(faqId);
        if (!faq) return;

        const shareData = {
            title: `FAQ: ${faq.question}`,
            text: faq.answer,
            url: `${window.location.href}#faq-${faqId}`
        };

        if (navigator.share) {
            navigator.share(shareData);
        } else {
            // Fallback: copy to clipboard
            const shareText = `${faq.question}\n\n${faq.answer}\n\n${shareData.url}`;
            navigator.clipboard.writeText(shareText).then(() => {
                this.showFeedbackMessage(true);
            });
        }

        this.trackFAQInteraction(faqId, 'share');
    }

    findFAQById(faqId) {
        for (const category in this.faqs) {
            const faq = this.faqs[category].find(f => f.id === faqId);
            if (faq) return faq;
        }
        return null;
    }

    updateResultsInfo(count, searchTime) {
        const countSpan = this.resultsInfo.querySelector('.faq__results-count');
        const timeSpan = this.resultsInfo.querySelector('.faq__results-time');

        countSpan.textContent = `${count} pregunta${count !== 1 ? 's' : ''} encontrada${count !== 1 ? 's' : ''}`;
        timeSpan.textContent = `(${searchTime.toFixed(1)}ms)`;

        // Show/hide results info
        this.resultsInfo.style.display = this.searchTerm || this.currentCategory !== 'all' ? 'block' : 'none';
    }

    animateItems() {
        const items = this.container.querySelectorAll('.faq__item');
        items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';

            setTimeout(() => {
                item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }

    trackFAQInteraction(faqId, action) {
        Utils.trackEvent('faq_interaction', {
            faqId,
            action,
            category: this.currentCategory,
            searchTerm: this.searchTerm
        });
    }

    trackFAQFeedback(faqId, isHelpful) {
        Utils.trackEvent('faq_feedback', {
            faqId,
            isHelpful,
            category: this.currentCategory
        });
    }

    // Public API methods
    expandAll() {
        const items = this.container.querySelectorAll('.faq__item');
        items.forEach(item => {
            const faqId = item.dataset.faqId;
            const answer = item.querySelector('.faq__answer');
            if (!item.classList.contains('expanded')) {
                this.expandFAQ(item, answer, faqId);
            }
        });
    }

    collapseAll() {
        const items = this.container.querySelectorAll('.faq__item');
        items.forEach(item => {
            const faqId = item.dataset.faqId;
            const answer = item.querySelector('.faq__answer');
            if (item.classList.contains('expanded')) {
                this.collapseFAQ(item, answer, faqId);
            }
        });
    }

    searchFAQ(term) {
        this.searchInput.value = term;
        this.searchTerm = term.toLowerCase().trim();
        this.renderFAQs();
    }

    filterByCategory(category) {
        const categoryBtn = document.querySelector(`[data-category="${category}"]`);
        if (categoryBtn) {
            categoryBtn.click();
        }
    }
}

// Initialize systems when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Initialize WhatsApp Business system
    if (typeof WhatsAppBusiness !== 'undefined') {
        WhatsAppBusiness.init();
    }

    // Initialize FAQ system
    if (typeof window.faqAccordion === 'undefined') {
        window.faqAccordion = new FAQAccordion();
    }
});

// Export for global access
window.FAQAccordion = FAQAccordion;
window.WhatsAppBusiness = WhatsAppBusiness;
/* ===================================
   CUSTOMER REVIEWS WITH PHOTOS SYSTEM
   =================================== */

// Reviews Data Structure
const reviewsData = [
    {
        id: 'review-1',
        customerName: 'María González',
        customerAvatar: './images/testimonials/maria-gonzalez.jpg',
        rating: 5,
        date: '2024-01-15',
        verified: true,
        productId: 'jugo-verde',
        productName: 'Jugo Verde Detox',
        reviewText: 'Increíble sabor y súper nutritivo. He estado tomando este jugo verde por 3 semanas y me siento con mucha más energía. La combinación de ingredientes es perfecta.',
        photos: [
            './images/reviews/review-1-photo-1.jpg',
            './images/reviews/review-1-photo-2.jpg'
        ],
        helpful: 24,
        tags: ['energía', 'nutritivo', 'sabor'],
        location: 'Ciudad de México'
    },
    {
        id: 'review-2',
        customerName: 'Carlos Mendoza',
        customerAvatar: './images/testimonials/carlos-mendoza.jpg',
        rating: 5,
        date: '2024-01-12',
        verified: true,
        productId: 'frapp-chocolate',
        productName: 'Frappuccino de Chocolate',
        reviewText: 'El mejor frappuccino que he probado. La textura es cremosa y el sabor a chocolate es auténtico. Perfecto para las tardes calurosas.',
        photos: [
            './images/reviews/review-2-photo-1.jpg'
        ],
        helpful: 18,
        tags: ['cremoso', 'chocolate', 'refrescante'],
        location: 'Guadalajara'
    },
    {
        id: 'review-3',
        customerName: 'Ana Rodríguez',
        customerAvatar: './images/testimonials/ana-rodriguez.jpg',
        rating: 4,
        date: '2024-01-10',
        verified: true,
        productId: 'jugo-naranja',
        productName: 'Jugo de Naranja',
        reviewText: 'Muy fresco y natural. Se nota que usan naranjas de calidad. El único detalle es que me gustaría que fuera un poco más dulce, pero entiendo que es 100% natural.',
        photos: [],
        helpful: 12,
        tags: ['fresco', 'natural', 'calidad'],
        location: 'Monterrey'
    },
    {
        id: 'review-4',
        customerName: 'Luis Herrera',
        customerAvatar: './images/testimonials/luis-herrera.jpg',
        rating: 5,
        date: '2024-01-08',
        verified: true,
        productId: 'cafe-latte',
        productName: 'Café Latte',
        reviewText: 'Excelente café, la espuma de leche está perfecta y el sabor es balanceado. El servicio también es muy bueno, siempre amables.',
        photos: [
            './images/reviews/review-4-photo-1.jpg',
            './images/reviews/review-4-photo-2.jpg',
            './images/reviews/review-4-photo-3.jpg'
        ],
        helpful: 31,
        tags: ['café', 'espuma', 'servicio'],
        location: 'Puebla'
    },
    {
        id: 'review-5',
        customerName: 'Sofia Martínez',
        customerAvatar: './images/testimonials/sofia-martinez.jpg',
        rating: 5,
        date: '2024-01-05',
        verified: true,
        productId: 'jugo-mixto',
        productName: 'Jugo Mixto Tropical',
        reviewText: 'Me transporta a la playa con cada sorbo. La mezcla de frutas tropicales es deliciosa y muy refrescante. Definitivamente mi favorito.',
        photos: [
            './images/reviews/review-5-photo-1.jpg'
        ],
        helpful: 27,
        tags: ['tropical', 'refrescante', 'delicioso'],
        location: 'Cancún'
    },
    {
        id: 'review-6',
        customerName: 'Roberto Silva',
        customerAvatar: './images/testimonials/roberto-silva.jpg',
        rating: 4,
        date: '2024-01-03',
        verified: false,
        productId: 'jugo-zanahoria',
        productName: 'Jugo de Zanahoria',
        reviewText: 'Muy bueno para la salud. El sabor es agradable y se nota la frescura de las zanahorias. Lo recomiendo para quienes buscan opciones saludables.',
        photos: [],
        helpful: 8,
        tags: ['saludable', 'fresco', 'zanahoria'],
        location: 'Tijuana'
    }
];

// Customer Reviews System Class
class CustomerReviews {
    constructor() {
        this.reviews = reviewsData;
        this.currentFilter = 'all';
        this.currentSort = 'newest';
        this.currentRatingFilter = 'all';
        this.container = null;
        this.lightbox = null;
        this.currentPhotoIndex = 0;
        this.currentPhotoSet = [];

        this.init();
    }

    init() {
        this.createReviewsSection();
        this.createLightbox();
        this.bindEvents();
        this.renderReviews();
        console.log('Customer Reviews system initialized');
    }

    createReviewsSection() {
        // Find or create reviews section
        let reviewsSection = document.getElementById('reviews');
        if (!reviewsSection) {
            reviewsSection = document.createElement('section');
            reviewsSection.id = 'reviews';
            reviewsSection.className = 'reviews section';

            // Insert before FAQ section or contact
            const faqSection = document.getElementById('faq');
            const contactSection = document.getElementById('contact');
            const insertBefore = faqSection || contactSection;

            if (insertBefore) {
                insertBefore.parentNode.insertBefore(reviewsSection, insertBefore);
            } else {
                document.body.appendChild(reviewsSection);
            }
        }

        reviewsSection.innerHTML = `
            <div class="reviews__container container">
                <div class="reviews__header">
                    <h2 class="reviews__title">Reseñas de Clientes</h2>
                    <p class="reviews__subtitle">Descubre lo que dicen nuestros clientes sobre nuestros productos</p>
                    
                    <div class="reviews__stats">
                        <div class="reviews__stat">
                            <span class="reviews__stat-number">4.8</span>
                            <div class="reviews__stat-stars">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                            </div>
                            <span class="reviews__stat-label">Promedio de calificación</span>
                        </div>
                        <div class="reviews__stat">
                            <span class="reviews__stat-number">${this.reviews.length}</span>
                            <span class="reviews__stat-label">Reseñas totales</span>
                        </div>
                        <div class="reviews__stat">
                            <span class="reviews__stat-number">${this.reviews.filter(r => r.verified).length}</span>
                            <span class="reviews__stat-label">Compras verificadas</span>
                        </div>
                    </div>
                </div>
                
                <div class="reviews__controls">
                    <div class="reviews__filters">
                        <select class="reviews__filter-select" id="reviews-product-filter">
                            <option value="all">Todos los productos</option>
                            <option value="jugos">Jugos Naturales</option>
                            <option value="frappuccinos">Frappuccinos</option>
                            <option value="cafe">Café</option>
                        </select>
                        
                        <select class="reviews__filter-select" id="reviews-rating-filter">
                            <option value="all">Todas las calificaciones</option>
                            <option value="5">5 estrellas</option>
                            <option value="4">4 estrellas</option>
                            <option value="3">3 estrellas</option>
                            <option value="2">2 estrellas</option>
                            <option value="1">1 estrella</option>
                        </select>
                        
                        <select class="reviews__sort-select" id="reviews-sort">
                            <option value="newest">Más recientes</option>
                            <option value="oldest">Más antiguos</option>
                            <option value="highest">Mejor calificados</option>
                            <option value="lowest">Menor calificados</option>
                            <option value="helpful">Más útiles</option>
                        </select>
                    </div>
                    
                    <div class="reviews__view-toggle">
                        <button class="reviews__view-btn active" data-view="grid">
                            <i class="ri-grid-line"></i>
                        </button>
                        <button class="reviews__view-btn" data-view="list">
                            <i class="ri-list-check"></i>
                        </button>
                    </div>
                </div>
                
                <div class="reviews__content" id="reviews-content">
                    <!-- Reviews will be rendered here -->
                </div>
                
                <div class="reviews__load-more">
                    <button class="reviews__load-btn btn btn--primary" id="load-more-reviews">
                        <i class="ri-add-line"></i>
                        Cargar más reseñas
                    </button>
                </div>
                
                <div class="reviews__write-cta">
                    <h3>¿Ya probaste nuestros productos?</h3>
                    <p>Comparte tu experiencia y ayuda a otros clientes</p>
                    <button class="btn btn--secondary" id="write-review-btn">
                        <i class="ri-edit-line"></i>
                        Escribir reseña
                    </button>
                </div>
            </div>
        `;

        this.container = document.getElementById('reviews-content');
    }

    createLightbox() {
        const lightboxHTML = `
            <div class="reviews__lightbox" id="reviews-lightbox">
                <div class="reviews__lightbox-overlay"></div>
                <div class="reviews__lightbox-content">
                    <button class="reviews__lightbox-close">
                        <i class="ri-close-line"></i>
                    </button>
                    
                    <div class="reviews__lightbox-nav">
                        <button class="reviews__lightbox-prev">
                            <i class="ri-arrow-left-line"></i>
                        </button>
                        <button class="reviews__lightbox-next">
                            <i class="ri-arrow-right-line"></i>
                        </button>
                    </div>
                    
                    <div class="reviews__lightbox-image-container">
                        <img class="reviews__lightbox-image" src="" alt="">
                        <div class="reviews__lightbox-loading">
                            <i class="ri-loader-4-line"></i>
                        </div>
                    </div>
                    
                    <div class="reviews__lightbox-info">
                        <div class="reviews__lightbox-counter">
                            <span class="reviews__lightbox-current">1</span>
                            /
                            <span class="reviews__lightbox-total">1</span>
                        </div>
                        <div class="reviews__lightbox-caption"></div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
        this.lightbox = document.getElementById('reviews-lightbox');
    }

    bindEvents() {
        // Filter and sort controls
        const productFilter = document.getElementById('reviews-product-filter');
        const ratingFilter = document.getElementById('reviews-rating-filter');
        const sortSelect = document.getElementById('reviews-sort');

        productFilter.addEventListener('change', (e) => {
            this.currentFilter = e.target.value;
            this.renderReviews();
        });

        ratingFilter.addEventListener('change', (e) => {
            this.currentRatingFilter = e.target.value;
            this.renderReviews();
        });

        sortSelect.addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.renderReviews();
        });

        // View toggle
        const viewBtns = document.querySelectorAll('.reviews__view-btn');
        viewBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                viewBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');

                const view = e.target.dataset.view;
                this.container.className = `reviews__content reviews__content--${view}`;
            });
        });

        // Write review button
        const writeReviewBtn = document.getElementById('write-review-btn');
        writeReviewBtn.addEventListener('click', () => {
            this.openWriteReviewModal();
        });

        // Lightbox events
        this.bindLightboxEvents();
    }

    bindLightboxEvents() {
        const lightbox = this.lightbox;
        const closeBtn = lightbox.querySelector('.reviews__lightbox-close');
        const overlay = lightbox.querySelector('.reviews__lightbox-overlay');
        const prevBtn = lightbox.querySelector('.reviews__lightbox-prev');
        const nextBtn = lightbox.querySelector('.reviews__lightbox-next');

        // Close lightbox
        [closeBtn, overlay].forEach(element => {
            element.addEventListener('click', () => {
                this.closeLightbox();
            });
        });

        // Navigation
        prevBtn.addEventListener('click', () => {
            this.showPreviousPhoto();
        });

        nextBtn.addEventListener('click', () => {
            this.showNextPhoto();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;

            switch (e.key) {
                case 'Escape':
                    this.closeLightbox();
                    break;
                case 'ArrowLeft':
                    this.showPreviousPhoto();
                    break;
                case 'ArrowRight':
                    this.showNextPhoto();
                    break;
            }
        });
    }

    getFilteredAndSortedReviews() {
        let filteredReviews = [...this.reviews];

        // Filter by product category
        if (this.currentFilter !== 'all') {
            filteredReviews = filteredReviews.filter(review => {
                const productCategory = this.getProductCategory(review.productId);
                return productCategory === this.currentFilter;
            });
        }

        // Filter by rating
        if (this.currentRatingFilter !== 'all') {
            const targetRating = parseInt(this.currentRatingFilter);
            filteredReviews = filteredReviews.filter(review => review.rating === targetRating);
        }

        // Sort reviews
        filteredReviews.sort((a, b) => {
            switch (this.currentSort) {
                case 'newest':
                    return new Date(b.date) - new Date(a.date);
                case 'oldest':
                    return new Date(a.date) - new Date(b.date);
                case 'highest':
                    return b.rating - a.rating;
                case 'lowest':
                    return a.rating - b.rating;
                case 'helpful':
                    return b.helpful - a.helpful;
                default:
                    return 0;
            }
        });

        return filteredReviews;
    }

    getProductCategory(productId) {
        if (productId.startsWith('jugo-')) return 'jugos';
        if (productId.startsWith('frapp-')) return 'frappuccinos';
        if (productId.startsWith('cafe-')) return 'cafe';
        return 'other';
    }

    renderReviews() {
        const reviews = this.getFilteredAndSortedReviews();

        if (reviews.length === 0) {
            this.container.innerHTML = `
                <div class="reviews__no-results">
                    <i class="ri-emotion-sad-line"></i>
                    <h3>No se encontraron reseñas</h3>
                    <p>Intenta cambiar los filtros para ver más reseñas</p>
                </div>
            `;
            return;
        }

        this.container.innerHTML = reviews.map(review => this.createReviewCard(review)).join('');
        this.bindReviewEvents();
    }

    createReviewCard(review) {
        const starsHTML = this.generateStarsHTML(review.rating);
        const photosHTML = this.generatePhotosHTML(review.photos, review.id);
        const verifiedBadge = review.verified ? '<span class="reviews__verified"><i class="ri-verified-badge-fill"></i>Compra verificada</span>' : '';
        const tagsHTML = review.tags.map(tag => `<span class="reviews__tag">${tag}</span>`).join('');

        return `
            <div class="reviews__card" data-review-id="${review.id}">
                <div class="reviews__card-header">
                    <div class="reviews__customer-info">
                        <img class="reviews__customer-avatar" 
                             src="${review.customerAvatar}" 
                             alt="${review.customerName}"
                             onerror="this.src='./images/placeholder-avatar.jpg'">
                        <div class="reviews__customer-details">
                            <h4 class="reviews__customer-name">${review.customerName}</h4>
                            <div class="reviews__customer-meta">
                                <span class="reviews__location">
                                    <i class="ri-map-pin-line"></i>
                                    ${review.location}
                                </span>
                                ${verifiedBadge}
                            </div>
                        </div>
                    </div>
                    
                    <div class="reviews__rating-date">
                        <div class="reviews__rating">
                            ${starsHTML}
                        </div>
                        <span class="reviews__date">${this.formatDate(review.date)}</span>
                    </div>
                </div>
                
                <div class="reviews__product-info">
                    <i class="ri-product-hunt-line"></i>
                    <span>${review.productName}</span>
                </div>
                
                <div class="reviews__content">
                    <p class="reviews__text">${review.reviewText}</p>
                    
                    ${photosHTML}
                    
                    <div class="reviews__tags">
                        ${tagsHTML}
                    </div>
                </div>
                
                <div class="reviews__actions">
                    <button class="reviews__helpful-btn" data-review-id="${review.id}">
                        <i class="ri-thumb-up-line"></i>
                        Útil (${review.helpful})
                    </button>
                    <button class="reviews__share-btn" data-review-id="${review.id}">
                        <i class="ri-share-line"></i>
                        Compartir
                    </button>
                    <button class="reviews__report-btn" data-review-id="${review.id}">
                        <i class="ri-flag-line"></i>
                        Reportar
                    </button>
                </div>
            </div>
        `;
    }

    generateStarsHTML(rating) {
        return Utils.generateStarsHTML(rating);
    }

    generatePhotosHTML(photos, reviewId) {
        if (!photos || photos.length === 0) return '';

        const photosHTML = photos.map((photo, index) => `
            <img class="reviews__photo" 
                 src="${photo}" 
                 alt="Foto de reseña ${index + 1}"
                 data-review-id="${reviewId}"
                 data-photo-index="${index}"
                 onerror="this.style.display='none'">
        `).join('');

        return `
            <div class="reviews__photos">
                ${photosHTML}
                ${photos.length > 3 ? `<div class="reviews__photos-more">+${photos.length - 3}</div>` : ''}
            </div>
        `;
    }

    bindReviewEvents() {
        // Photo click events
        const photos = this.container.querySelectorAll('.reviews__photo');
        photos.forEach(photo => {
            photo.addEventListener('click', (e) => {
                const reviewId = e.target.dataset.reviewId;
                const photoIndex = parseInt(e.target.dataset.photoIndex);
                this.openLightbox(reviewId, photoIndex);
            });
        });

        // Action buttons
        const helpfulBtns = this.container.querySelectorAll('.reviews__helpful-btn');
        const shareBtns = this.container.querySelectorAll('.reviews__share-btn');
        const reportBtns = this.container.querySelectorAll('.reviews__report-btn');

        helpfulBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const reviewId = e.target.dataset.reviewId;
                this.markAsHelpful(reviewId, btn);
            });
        });

        shareBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const reviewId = e.target.dataset.reviewId;
                this.shareReview(reviewId);
            });
        });

        reportBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const reviewId = e.target.dataset.reviewId;
                this.reportReview(reviewId);
            });
        });
    }

    openLightbox(reviewId, photoIndex = 0) {
        const review = this.reviews.find(r => r.id === reviewId);
        if (!review || !review.photos || review.photos.length === 0) return;

        this.currentPhotoSet = review.photos;
        this.currentPhotoIndex = photoIndex;

        this.updateLightboxImage();
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    updateLightboxImage() {
        const image = this.lightbox.querySelector('.reviews__lightbox-image');
        const loading = this.lightbox.querySelector('.reviews__lightbox-loading');
        const current = this.lightbox.querySelector('.reviews__lightbox-current');
        const total = this.lightbox.querySelector('.reviews__lightbox-total');
        const caption = this.lightbox.querySelector('.reviews__lightbox-caption');

        // Show loading
        loading.style.display = 'flex';
        image.style.opacity = '0';

        // Update counters
        current.textContent = this.currentPhotoIndex + 1;
        total.textContent = this.currentPhotoSet.length;

        // Load image
        const newImage = new Image();
        newImage.onload = () => {
            image.src = newImage.src;
            image.style.opacity = '1';
            loading.style.display = 'none';
        };

        newImage.onerror = () => {
            loading.style.display = 'none';
            caption.textContent = 'Error al cargar la imagen';
        };

        newImage.src = this.currentPhotoSet[this.currentPhotoIndex];

        // Update navigation buttons
        const prevBtn = this.lightbox.querySelector('.reviews__lightbox-prev');
        const nextBtn = this.lightbox.querySelector('.reviews__lightbox-next');

        prevBtn.style.display = this.currentPhotoIndex > 0 ? 'flex' : 'none';
        nextBtn.style.display = this.currentPhotoIndex < this.currentPhotoSet.length - 1 ? 'flex' : 'none';
    }

    showPreviousPhoto() {
        if (this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            this.updateLightboxImage();
        }
    }

    showNextPhoto() {
        if (this.currentPhotoIndex < this.currentPhotoSet.length - 1) {
            this.currentPhotoIndex++;
            this.updateLightboxImage();
        }
    }

    markAsHelpful(reviewId, button) {
        const review = this.reviews.find(r => r.id === reviewId);
        if (!review) return;

        // Simulate marking as helpful
        review.helpful++;
        button.innerHTML = `<i class="ri-thumb-up-fill"></i>Útil (${review.helpful})`;
        button.classList.add('active');
        button.disabled = true;

        // Track interaction
        this.trackReviewInteraction(reviewId, 'helpful');
    }

    shareReview(reviewId) {
        const review = this.reviews.find(r => r.id === reviewId);
        if (!review) return;

        const shareData = {
            title: `Reseña de ${review.customerName}`,
            text: `"${review.reviewText}" - ${review.rating} estrellas para ${review.productName}`,
            url: `${window.location.href}#review-${reviewId}`
        };

        if (navigator.share) {
            navigator.share(shareData);
        } else {
            // Fallback: copy to clipboard
            const shareText = `${shareData.text}\n\n${shareData.url}`;
            navigator.clipboard.writeText(shareText).then(() => {
                this.showNotification('Enlace copiado al portapapeles');
            });
        }

        this.trackReviewInteraction(reviewId, 'share');
    }

    reportReview(reviewId) {
        // Simple report functionality
        const confirmed = confirm('¿Estás seguro de que quieres reportar esta reseña?');
        if (confirmed) {
            this.showNotification('Reseña reportada. Será revisada por nuestro equipo.');
            this.trackReviewInteraction(reviewId, 'report');
        }
    }

    openWriteReviewModal() {
        // This would open a modal for writing reviews
        // For now, redirect to contact or WhatsApp
        const message = encodeURIComponent('Hola, me gustaría escribir una reseña sobre mi experiencia con sus productos.');
        window.open(`https://wa.me/525551234567?text=${message}`, '_blank');
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return date.toLocaleDateString('es-ES', options);
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'reviews__notification';
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    trackReviewInteraction(reviewId, action) {
        Utils.trackEvent('review_interaction', {
            reviewId,
            action,
            filter: this.currentFilter,
            sort: this.currentSort
        });
    }

    // Public API methods
    filterByProduct(productCategory) {
        const productFilter = document.getElementById('reviews-product-filter');
        productFilter.value = productCategory;
        this.currentFilter = productCategory;
        this.renderReviews();
    }

    filterByRating(rating) {
        const ratingFilter = document.getElementById('reviews-rating-filter');
        ratingFilter.value = rating.toString();
        this.currentRatingFilter = rating.toString();
        this.renderReviews();
    }

    sortBy(sortType) {
        const sortSelect = document.getElementById('reviews-sort');
        sortSelect.value = sortType;
        this.currentSort = sortType;
        this.renderReviews();
    }
}

// Initialize Customer Reviews when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Initialize reviews system
    if (typeof window.customerReviews === 'undefined') {
        window.customerReviews = new CustomerReviews();
    }
});

// Export for global access
window.CustomerReviews = CustomerReviews;/* ==
=================================
   NUTRITIONAL CALCULATOR SYSTEM
   =================================== */

// Nutritional data for ingredients and products
const nutritionalData = {
    ingredients: {
        'naranja': {
            name: 'Naranja',
            calories: 47,
            carbs: 11.8,
            protein: 0.9,
            fat: 0.1,
            fiber: 2.4,
            sugar: 9.4,
            vitaminC: 53.2,
            calcium: 40,
            potassium: 181,
            benefits: ['Alto en vitamina C', 'Antioxidante', 'Fortalece inmunidad'],
            unit: '100g'
        },
        'manzana': {
            name: 'Manzana',
            calories: 52,
            carbs: 13.8,
            protein: 0.3,
            fat: 0.2,
            fiber: 2.4,
            sugar: 10.4,
            vitaminC: 4.6,
            calcium: 6,
            potassium: 107,
            benefits: ['Rica en fibra', 'Antioxidante', 'Digestiva'],
            unit: '100g'
        },
        'zanahoria': {
            name: 'Zanahoria',
            calories: 41,
            carbs: 9.6,
            protein: 0.9,
            fat: 0.2,
            fiber: 2.8,
            sugar: 4.7,
            vitaminA: 835,
            vitaminC: 5.9,
            calcium: 33,
            potassium: 320,
            benefits: ['Rica en vitamina A', 'Buena para la vista', 'Antioxidante'],
            unit: '100g'
        },
        'espinaca': {
            name: 'Espinaca',
            calories: 23,
            carbs: 3.6,
            protein: 2.9,
            fat: 0.4,
            fiber: 2.2,
            sugar: 0.4,
            vitaminA: 469,
            vitaminC: 28.1,
            vitaminK: 483,
            iron: 2.7,
            calcium: 99,
            potassium: 558,
            benefits: ['Rica en hierro', 'Alta en vitaminas', 'Detox natural'],
            unit: '100g'
        },
        'apio': {
            name: 'Apio',
            calories: 16,
            carbs: 3.0,
            protein: 0.7,
            fat: 0.2,
            fiber: 1.6,
            sugar: 1.3,
            vitaminC: 3.1,
            vitaminK: 29.3,
            calcium: 40,
            potassium: 260,
            benefits: ['Bajo en calorías', 'Diurético natural', 'Anti-inflamatorio'],
            unit: '100g'
        },
        'jengibre': {
            name: 'Jengibre',
            calories: 80,
            carbs: 17.8,
            protein: 1.8,
            fat: 0.8,
            fiber: 2.0,
            sugar: 1.7,
            vitaminC: 5.0,
            calcium: 16,
            potassium: 415,
            benefits: ['Anti-inflamatorio', 'Digestivo', 'Antioxidante'],
            unit: '100g'
        },
        'piña': {
            name: 'Piña',
            calories: 50,
            carbs: 13.1,
            protein: 0.5,
            fat: 0.1,
            fiber: 1.4,
            sugar: 9.9,
            vitaminC: 47.8,
            calcium: 13,
            potassium: 109,
            benefits: ['Rica en enzimas', 'Digestiva', 'Anti-inflamatoria'],
            unit: '100g'
        },
        'mango': {
            name: 'Mango',
            calories: 60,
            carbs: 15.0,
            protein: 0.8,
            fat: 0.4,
            fiber: 1.6,
            sugar: 13.7,
            vitaminA: 54,
            vitaminC: 36.4,
            calcium: 11,
            potassium: 168,
            benefits: ['Rico en vitamina A', 'Antioxidante', 'Energizante'],
            unit: '100g'
        },
        'limon': {
            name: 'Limón',
            calories: 29,
            carbs: 9.3,
            protein: 1.1,
            fat: 0.3,
            fiber: 2.8,
            sugar: 1.5,
            vitaminC: 53.0,
            calcium: 26,
            potassium: 138,
            benefits: ['Alto en vitamina C', 'Alcalinizante', 'Detox'],
            unit: '100g'
        }
    },

    products: {
        'jugo-naranja': {
            name: 'Jugo de Naranja',
            ingredients: [
                { name: 'naranja', amount: 200 }
            ],
            servingSize: 250,
            category: 'jugos'
        },
        'jugo-manzana': {
            name: 'Jugo de Manzana',
            ingredients: [
                { name: 'manzana', amount: 180 }
            ],
            servingSize: 250,
            category: 'jugos'
        },
        'jugo-zanahoria': {
            name: 'Jugo de Zanahoria',
            ingredients: [
                { name: 'zanahoria', amount: 200 },
                { name: 'jengibre', amount: 5 }
            ],
            servingSize: 250,
            category: 'jugos'
        },
        'jugo-verde': {
            name: 'Jugo Verde Detox',
            ingredients: [
                { name: 'espinaca', amount: 50 },
                { name: 'apio', amount: 80 },
                { name: 'manzana', amount: 100 },
                { name: 'limon', amount: 30 },
                { name: 'jengibre', amount: 3 }
            ],
            servingSize: 300,
            category: 'jugos'
        },
        'jugo-mixto': {
            name: 'Jugo Mixto Tropical',
            ingredients: [
                { name: 'piña', amount: 100 },
                { name: 'mango', amount: 80 },
                { name: 'naranja', amount: 70 }
            ],
            servingSize: 300,
            category: 'jugos'
        }
    }
};

// Nutritional Calculator Class
class NutritionalCalculator {
    constructor() {
        this.nutritionalData = nutritionalData;
        this.currentProduct = null;
        this.customIngredients = [];
        this.userProfile = {
            age: 30,
            gender: 'male',
            weight: 70,
            height: 175,
            activityLevel: 'moderate',
            goals: ['general-health']
        };

        this.init();
    }

    init() {
        this.createCalculatorSection();
        this.bindEvents();
        this.loadUserProfile();
        console.log('Nutritional Calculator initialized');
    }

    createCalculatorSection() {
        // Find or create calculator section
        let calculatorSection = document.getElementById('nutrition-calculator');
        if (!calculatorSection) {
            calculatorSection = document.createElement('section');
            calculatorSection.id = 'nutrition-calculator';
            calculatorSection.className = 'nutrition-calculator section';

            // Insert before reviews section or contact
            const reviewsSection = document.getElementById('reviews');
            const contactSection = document.getElementById('contact');
            const insertBefore = reviewsSection || contactSection;

            if (insertBefore) {
                insertBefore.parentNode.insertBefore(calculatorSection, insertBefore);
            } else {
                document.body.appendChild(calculatorSection);
            }
        }

        calculatorSection.innerHTML = `
            <div class="nutrition-calculator__container container">
                <div class="nutrition-calculator__header">
                    <h2 class="nutrition-calculator__title">Calculadora Nutricional</h2>
                    <p class="nutrition-calculator__subtitle">Descubre el valor nutricional de nuestros productos y crea mezclas personalizadas</p>
                </div>
                
                <div class="nutrition-calculator__tabs">
                    <button class="nutrition-calculator__tab active" data-tab="products">
                        <i class="ri-product-hunt-line"></i>
                        Productos
                    </button>
                    <button class="nutrition-calculator__tab" data-tab="custom">
                        <i class="ri-flask-line"></i>
                        Mezcla Personalizada
                    </button>
                    <button class="nutrition-calculator__tab" data-tab="profile">
                        <i class="ri-user-heart-line"></i>
                        Mi Perfil
                    </button>
                </div>
                
                <div class="nutrition-calculator__content">
                    <!-- Products Tab -->
                    <div class="nutrition-calculator__tab-content active" id="products-tab">
                        <div class="nutrition-calculator__products">
                            <h3>Selecciona un producto para ver su información nutricional</h3>
                            <div class="nutrition-calculator__product-grid">
                                ${this.renderProductCards()}
                            </div>
                        </div>
                        
                        <div class="nutrition-calculator__results" id="product-results" style="display: none;">
                            <!-- Product nutrition results will be shown here -->
                        </div>
                    </div>
                    
                    <!-- Custom Mix Tab -->
                    <div class="nutrition-calculator__tab-content" id="custom-tab">
                        <div class="nutrition-calculator__custom-builder">
                            <h3>Crea tu mezcla personalizada</h3>
                            <div class="nutrition-calculator__ingredient-selector">
                                <select class="nutrition-calculator__ingredient-select" id="ingredient-select">
                                    <option value="">Selecciona un ingrediente</option>
                                    ${this.renderIngredientOptions()}
                                </select>
                                <input type="number" 
                                       class="nutrition-calculator__amount-input" 
                                       id="ingredient-amount" 
                                       placeholder="Cantidad (g)" 
                                       min="1" 
                                       max="500">
                                <button class="nutrition-calculator__add-btn" id="add-ingredient-btn">
                                    <i class="ri-add-line"></i>
                                    Agregar
                                </button>
                            </div>
                            
                            <div class="nutrition-calculator__custom-ingredients" id="custom-ingredients">
                                <!-- Custom ingredients will be shown here -->
                            </div>
                        </div>
                        
                        <div class="nutrition-calculator__results" id="custom-results" style="display: none;">
                            <!-- Custom mix nutrition results will be shown here -->
                        </div>
                    </div>
                    
                    <!-- Profile Tab -->
                    <div class="nutrition-calculator__tab-content" id="profile-tab">
                        <div class="nutrition-calculator__profile-form">
                            <h3>Información Personal</h3>
                            <div class="nutrition-calculator__form-grid">
                                <div class="nutrition-calculator__form-group">
                                    <label for="user-age">Edad</label>
                                    <input type="number" id="user-age" min="10" max="100" value="${this.userProfile.age}">
                                </div>
                                
                                <div class="nutrition-calculator__form-group">
                                    <label for="user-gender">Género</label>
                                    <select id="user-gender">
                                        <option value="male" ${this.userProfile.gender === 'male' ? 'selected' : ''}>Masculino</option>
                                        <option value="female" ${this.userProfile.gender === 'female' ? 'selected' : ''}>Femenino</option>
                                    </select>
                                </div>
                                
                                <div class="nutrition-calculator__form-group">
                                    <label for="user-weight">Peso (kg)</label>
                                    <input type="number" id="user-weight" min="30" max="200" value="${this.userProfile.weight}">
                                </div>
                                
                                <div class="nutrition-calculator__form-group">
                                    <label for="user-height">Altura (cm)</label>
                                    <input type="number" id="user-height" min="100" max="250" value="${this.userProfile.height}">
                                </div>
                                
                                <div class="nutrition-calculator__form-group">
                                    <label for="user-activity">Nivel de Actividad</label>
                                    <select id="user-activity">
                                        <option value="sedentary" ${this.userProfile.activityLevel === 'sedentary' ? 'selected' : ''}>Sedentario</option>
                                        <option value="light" ${this.userProfile.activityLevel === 'light' ? 'selected' : ''}>Ligero</option>
                                        <option value="moderate" ${this.userProfile.activityLevel === 'moderate' ? 'selected' : ''}>Moderado</option>
                                        <option value="active" ${this.userProfile.activityLevel === 'active' ? 'selected' : ''}>Activo</option>
                                        <option value="very-active" ${this.userProfile.activityLevel === 'very-active' ? 'selected' : ''}>Muy Activo</option>
                                    </select>
                                </div>
                                
                                <div class="nutrition-calculator__form-group full-width">
                                    <label>Objetivos de Salud</label>
                                    <div class="nutrition-calculator__goals">
                                        <label class="nutrition-calculator__goal-option">
                                            <input type="checkbox" value="weight-loss" ${this.userProfile.goals.includes('weight-loss') ? 'checked' : ''}>
                                            <span>Pérdida de peso</span>
                                        </label>
                                        <label class="nutrition-calculator__goal-option">
                                            <input type="checkbox" value="muscle-gain" ${this.userProfile.goals.includes('muscle-gain') ? 'checked' : ''}>
                                            <span>Ganancia muscular</span>
                                        </label>
                                        <label class="nutrition-calculator__goal-option">
                                            <input type="checkbox" value="energy-boost" ${this.userProfile.goals.includes('energy-boost') ? 'checked' : ''}>
                                            <span>Más energía</span>
                                        </label>
                                        <label class="nutrition-calculator__goal-option">
                                            <input type="checkbox" value="detox" ${this.userProfile.goals.includes('detox') ? 'checked' : ''}>
                                            <span>Detox</span>
                                        </label>
                                        <label class="nutrition-calculator__goal-option">
                                            <input type="checkbox" value="general-health" ${this.userProfile.goals.includes('general-health') ? 'checked' : ''}>
                                            <span>Salud general</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            
                            <button class="nutrition-calculator__save-profile btn btn--primary" id="save-profile-btn">
                                <i class="ri-save-line"></i>
                                Guardar Perfil
                            </button>
                        </div>
                        
                        <div class="nutrition-calculator__recommendations" id="profile-recommendations">
                            <!-- Personalized recommendations will be shown here -->
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderProductCards() {
        return Object.entries(this.nutritionalData.products).map(([id, product]) => `
            <div class="nutrition-calculator__product-card" data-product-id="${id}">
                <div class="nutrition-calculator__product-image">
                    <img src="./images/products/${id}.jpg" alt="${product.name}" onerror="this.src='./images/placeholder-product.jpg'">
                </div>
                <h4 class="nutrition-calculator__product-name">${product.name}</h4>
                <p class="nutrition-calculator__product-serving">Porción: ${product.servingSize}ml</p>
                <button class="nutrition-calculator__analyze-btn">
                    <i class="ri-bar-chart-line"></i>
                    Analizar
                </button>
            </div>
        `).join('');
    }

    renderIngredientOptions() {
        return Object.entries(this.nutritionalData.ingredients).map(([id, ingredient]) => `
            <option value="${id}">${ingredient.name}</option>
        `).join('');
    }

    bindEvents() {
        // Tab switching
        const tabs = document.querySelectorAll('.nutrition-calculator__tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                const tabName = e.target.dataset.tab;
                this.switchTab(tabName);
            });
        });

        // Product analysis
        const productCards = document.querySelectorAll('.nutrition-calculator__product-card');
        productCards.forEach(card => {
            const analyzeBtn = card.querySelector('.nutrition-calculator__analyze-btn');
            analyzeBtn.addEventListener('click', () => {
                const productId = card.dataset.productId;
                this.analyzeProduct(productId);
            });
        });

        // Custom ingredient builder
        const addIngredientBtn = document.getElementById('add-ingredient-btn');
        addIngredientBtn.addEventListener('click', () => {
            this.addCustomIngredient();
        });

        // Profile saving
        const saveProfileBtn = document.getElementById('save-profile-btn');
        saveProfileBtn.addEventListener('click', () => {
            this.saveUserProfile();
        });

        // Real-time profile updates
        const profileInputs = document.querySelectorAll('#profile-tab input, #profile-tab select');
        profileInputs.forEach(input => {
            input.addEventListener('change', () => {
                this.updateUserProfile();
            });
        });
    }

    switchTab(tabName) {
        // Update tab buttons
        const tabs = document.querySelectorAll('.nutrition-calculator__tab');
        tabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.tab === tabName) {
                tab.classList.add('active');
            }
        });

        // Update tab content
        const tabContents = document.querySelectorAll('.nutrition-calculator__tab-content');
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        const activeContent = document.getElementById(`${tabName}-tab`);
        if (activeContent) {
            activeContent.classList.add('active');
        }

        // Load tab-specific content
        if (tabName === 'profile') {
            this.generateRecommendations();
        }
    }

    analyzeProduct(productId) {
        const product = this.nutritionalData.products[productId];
        if (!product) return;

        this.currentProduct = productId;
        const nutrition = this.calculateProductNutrition(product);

        const resultsContainer = document.getElementById('product-results');
        resultsContainer.innerHTML = this.renderNutritionResults(product.name, nutrition, product.servingSize);
        resultsContainer.style.display = 'block';

        // Scroll to results
        resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Track analysis
        this.trackNutritionAnalysis(productId, 'product');
    }

    calculateProductNutrition(product) {
        let totalNutrition = {
            calories: 0,
            carbs: 0,
            protein: 0,
            fat: 0,
            fiber: 0,
            sugar: 0,
            vitaminC: 0,
            vitaminA: 0,
            vitaminK: 0,
            calcium: 0,
            potassium: 0,
            iron: 0,
            benefits: new Set()
        };

        product.ingredients.forEach(ingredient => {
            const ingredientData = this.nutritionalData.ingredients[ingredient.name];
            if (ingredientData) {
                const multiplier = ingredient.amount / 100; // Convert to per 100g basis

                totalNutrition.calories += (ingredientData.calories || 0) * multiplier;
                totalNutrition.carbs += (ingredientData.carbs || 0) * multiplier;
                totalNutrition.protein += (ingredientData.protein || 0) * multiplier;
                totalNutrition.fat += (ingredientData.fat || 0) * multiplier;
                totalNutrition.fiber += (ingredientData.fiber || 0) * multiplier;
                totalNutrition.sugar += (ingredientData.sugar || 0) * multiplier;
                totalNutrition.vitaminC += (ingredientData.vitaminC || 0) * multiplier;
                totalNutrition.vitaminA += (ingredientData.vitaminA || 0) * multiplier;
                totalNutrition.vitaminK += (ingredientData.vitaminK || 0) * multiplier;
                totalNutrition.calcium += (ingredientData.calcium || 0) * multiplier;
                totalNutrition.potassium += (ingredientData.potassium || 0) * multiplier;
                totalNutrition.iron += (ingredientData.iron || 0) * multiplier;

                // Collect benefits
                if (ingredientData.benefits) {
                    ingredientData.benefits.forEach(benefit => totalNutrition.benefits.add(benefit));
                }
            }
        });

        // Convert benefits set to array
        totalNutrition.benefits = Array.from(totalNutrition.benefits);

        return totalNutrition;
    }

    addCustomIngredient() {
        const ingredientSelect = document.getElementById('ingredient-select');
        const amountInput = document.getElementById('ingredient-amount');

        const ingredientId = ingredientSelect.value;
        const amount = parseFloat(amountInput.value);

        if (!ingredientId || !amount || amount <= 0) {
            this.showNotification('Por favor selecciona un ingrediente y cantidad válida', 'error');
            return;
        }

        // Check if ingredient already exists
        const existingIndex = this.customIngredients.findIndex(ing => ing.id === ingredientId);
        if (existingIndex >= 0) {
            this.customIngredients[existingIndex].amount += amount;
        } else {
            this.customIngredients.push({
                id: ingredientId,
                name: this.nutritionalData.ingredients[ingredientId].name,
                amount: amount
            });
        }

        // Reset inputs
        ingredientSelect.value = '';
        amountInput.value = '';

        // Update display
        this.renderCustomIngredients();
        this.calculateCustomNutrition();
    }

    renderCustomIngredients() {
        const container = document.getElementById('custom-ingredients');

        if (this.customIngredients.length === 0) {
            container.innerHTML = '<p class="nutrition-calculator__empty">No hay ingredientes agregados</p>';
            return;
        }

        container.innerHTML = `
            <h4>Ingredientes seleccionados:</h4>
            <div class="nutrition-calculator__ingredient-list">
                ${this.customIngredients.map((ingredient, index) => `
                    <div class="nutrition-calculator__ingredient-item">
                        <span class="nutrition-calculator__ingredient-name">${ingredient.name}</span>
                        <span class="nutrition-calculator__ingredient-amount">${ingredient.amount}g</span>
                        <button class="nutrition-calculator__remove-ingredient" data-index="${index}">
                            <i class="ri-close-line"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
            <div class="nutrition-calculator__custom-actions">
                <button class="nutrition-calculator__clear-all btn btn--secondary" id="clear-custom-ingredients">
                    <i class="ri-delete-bin-line"></i>
                    Limpiar todo
                </button>
                <button class="nutrition-calculator__calculate-custom btn btn--primary" id="calculate-custom-nutrition">
                    <i class="ri-calculator-line"></i>
                    Calcular nutrición
                </button>
            </div>
        `;

        // Bind remove ingredient events
        const removeButtons = container.querySelectorAll('.nutrition-calculator__remove-ingredient');
        removeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                this.removeCustomIngredient(index);
            });
        });

        // Bind action buttons
        const clearAllBtn = document.getElementById('clear-custom-ingredients');
        const calculateBtn = document.getElementById('calculate-custom-nutrition');

        clearAllBtn.addEventListener('click', () => {
            this.clearCustomIngredients();
        });

        calculateBtn.addEventListener('click', () => {
            this.calculateCustomNutrition();
        });
    }

    removeCustomIngredient(index) {
        this.customIngredients.splice(index, 1);
        this.renderCustomIngredients();

        if (this.customIngredients.length === 0) {
            document.getElementById('custom-results').style.display = 'none';
        } else {
            this.calculateCustomNutrition();
        }
    }

    clearCustomIngredients() {
        this.customIngredients = [];
        this.renderCustomIngredients();
        document.getElementById('custom-results').style.display = 'none';
    }

    calculateCustomNutrition() {
        if (this.customIngredients.length === 0) return;

        const customProduct = {
            name: 'Mezcla Personalizada',
            ingredients: this.customIngredients.map(ing => ({
                name: ing.id,
                amount: ing.amount
            })),
            servingSize: this.customIngredients.reduce((sum, ing) => sum + ing.amount, 0)
        };

        const nutrition = this.calculateProductNutrition(customProduct);

        const resultsContainer = document.getElementById('custom-results');
        resultsContainer.innerHTML = this.renderNutritionResults(customProduct.name, nutrition, customProduct.servingSize);
        resultsContainer.style.display = 'block';

        // Scroll to results
        resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Track analysis
        this.trackNutritionAnalysis('custom-mix', 'custom');
    }

    renderNutritionResults(productName, nutrition, servingSize) {
        const dailyValues = this.calculateDailyValues(nutrition);

        return `
            <div class="nutrition-calculator__results-header">
                <h3>${productName}</h3>
                <p>Información nutricional por porción (${servingSize}${typeof servingSize === 'number' && servingSize > 50 ? 'ml' : 'g'})</p>
            </div>
            
            <div class="nutrition-calculator__nutrition-grid">
                <div class="nutrition-calculator__macros">
                    <h4>Macronutrientes</h4>
                    <div class="nutrition-calculator__macro-item">
                        <span class="nutrition-calculator__macro-label">Calorías</span>
                        <span class="nutrition-calculator__macro-value">${Math.round(nutrition.calories)} kcal</span>
                        <div class="nutrition-calculator__macro-bar">
                            <div class="nutrition-calculator__macro-fill" style="width: ${Math.min(nutrition.calories / 20, 100)}%"></div>
                        </div>
                    </div>
                    
                    <div class="nutrition-calculator__macro-item">
                        <span class="nutrition-calculator__macro-label">Carbohidratos</span>
                        <span class="nutrition-calculator__macro-value">${nutrition.carbs.toFixed(1)}g</span>
                        <div class="nutrition-calculator__macro-bar">
                            <div class="nutrition-calculator__macro-fill" style="width: ${Math.min(nutrition.carbs / 0.5, 100)}%"></div>
                        </div>
                    </div>
                    
                    <div class="nutrition-calculator__macro-item">
                        <span class="nutrition-calculator__macro-label">Proteínas</span>
                        <span class="nutrition-calculator__macro-value">${nutrition.protein.toFixed(1)}g</span>
                        <div class="nutrition-calculator__macro-bar">
                            <div class="nutrition-calculator__macro-fill" style="width: ${Math.min(nutrition.protein / 0.3, 100)}%"></div>
                        </div>
                    </div>
                    
                    <div class="nutrition-calculator__macro-item">
                        <span class="nutrition-calculator__macro-label">Grasas</span>
                        <span class="nutrition-calculator__macro-value">${nutrition.fat.toFixed(1)}g</span>
                        <div class="nutrition-calculator__macro-bar">
                            <div class="nutrition-calculator__macro-fill" style="width: ${Math.min(nutrition.fat / 0.2, 100)}%"></div>
                        </div>
                    </div>
                    
                    <div class="nutrition-calculator__macro-item">
                        <span class="nutrition-calculator__macro-label">Fibra</span>
                        <span class="nutrition-calculator__macro-value">${nutrition.fiber.toFixed(1)}g</span>
                        <div class="nutrition-calculator__macro-bar">
                            <div class="nutrition-calculator__macro-fill" style="width: ${Math.min(nutrition.fiber / 0.25, 100)}%"></div>
                        </div>
                    </div>
                    
                    <div class="nutrition-calculator__macro-item">
                        <span class="nutrition-calculator__macro-label">Azúcares</span>
                        <span class="nutrition-calculator__macro-value">${nutrition.sugar.toFixed(1)}g</span>
                        <div class="nutrition-calculator__macro-bar">
                            <div class="nutrition-calculator__macro-fill" style="width: ${Math.min(nutrition.sugar / 0.5, 100)}%"></div>
                        </div>
                    </div>
                </div>
                
                <div class="nutrition-calculator__vitamins">
                    <h4>Vitaminas y Minerales</h4>
                    ${nutrition.vitaminC > 0 ? `
                        <div class="nutrition-calculator__vitamin-item">
                            <span class="nutrition-calculator__vitamin-label">Vitamina C</span>
                            <span class="nutrition-calculator__vitamin-value">${nutrition.vitaminC.toFixed(1)}mg</span>
                            <span class="nutrition-calculator__vitamin-dv">(${dailyValues.vitaminC}% VD)</span>
                        </div>
                    ` : ''}
                    
                    ${nutrition.vitaminA > 0 ? `
                        <div class="nutrition-calculator__vitamin-item">
                            <span class="nutrition-calculator__vitamin-label">Vitamina A</span>
                            <span class="nutrition-calculator__vitamin-value">${nutrition.vitaminA.toFixed(1)}μg</span>
                            <span class="nutrition-calculator__vitamin-dv">(${dailyValues.vitaminA}% VD)</span>
                        </div>
                    ` : ''}
                    
                    ${nutrition.calcium > 0 ? `
                        <div class="nutrition-calculator__vitamin-item">
                            <span class="nutrition-calculator__vitamin-label">Calcio</span>
                            <span class="nutrition-calculator__vitamin-value">${nutrition.calcium.toFixed(1)}mg</span>
                            <span class="nutrition-calculator__vitamin-dv">(${dailyValues.calcium}% VD)</span>
                        </div>
                    ` : ''}
                    
                    ${nutrition.potassium > 0 ? `
                        <div class="nutrition-calculator__vitamin-item">
                            <span class="nutrition-calculator__vitamin-label">Potasio</span>
                            <span class="nutrition-calculator__vitamin-value">${nutrition.potassium.toFixed(1)}mg</span>
                            <span class="nutrition-calculator__vitamin-dv">(${dailyValues.potassium}% VD)</span>
                        </div>
                    ` : ''}
                    
                    ${nutrition.iron > 0 ? `
                        <div class="nutrition-calculator__vitamin-item">
                            <span class="nutrition-calculator__vitamin-label">Hierro</span>
                            <span class="nutrition-calculator__vitamin-value">${nutrition.iron.toFixed(1)}mg</span>
                            <span class="nutrition-calculator__vitamin-dv">(${dailyValues.iron}% VD)</span>
                        </div>
                    ` : ''}
                </div>
            </div>
            
            ${nutrition.benefits.length > 0 ? `
                <div class="nutrition-calculator__benefits">
                    <h4>Beneficios para la salud</h4>
                    <div class="nutrition-calculator__benefits-list">
                        ${nutrition.benefits.map(benefit => `
                            <span class="nutrition-calculator__benefit-tag">
                                <i class="ri-heart-pulse-line"></i>
                                ${benefit}
                            </span>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="nutrition-calculator__actions">
                <button class="nutrition-calculator__share-nutrition btn btn--secondary">
                    <i class="ri-share-line"></i>
                    Compartir
                </button>
                <button class="nutrition-calculator__save-nutrition btn btn--primary">
                    <i class="ri-bookmark-line"></i>
                    Guardar
                </button>
            </div>
        `;
    }

    calculateDailyValues(nutrition) {
        // Based on standard daily values for adults
        return {
            vitaminC: Math.round((nutrition.vitaminC / 90) * 100),
            vitaminA: Math.round((nutrition.vitaminA / 900) * 100),
            calcium: Math.round((nutrition.calcium / 1000) * 100),
            potassium: Math.round((nutrition.potassium / 3500) * 100),
            iron: Math.round((nutrition.iron / 18) * 100)
        };
    }

    updateUserProfile() {
        this.userProfile = {
            age: parseInt(document.getElementById('user-age').value) || 30,
            gender: document.getElementById('user-gender').value,
            weight: parseInt(document.getElementById('user-weight').value) || 70,
            height: parseInt(document.getElementById('user-height').value) || 175,
            activityLevel: document.getElementById('user-activity').value,
            goals: Array.from(document.querySelectorAll('.nutrition-calculator__goal-option input:checked')).map(cb => cb.value)
        };

        this.generateRecommendations();
    }

    saveUserProfile() {
        this.updateUserProfile();

        // Save to localStorage
        localStorage.setItem('nutritionProfile', JSON.stringify(this.userProfile));

        this.showNotification('Perfil guardado exitosamente', 'success');
        this.trackNutritionAnalysis('profile', 'save');
    }

    loadUserProfile() {
        const savedProfile = localStorage.getItem('nutritionProfile');
        if (savedProfile) {
            this.userProfile = { ...this.userProfile, ...JSON.parse(savedProfile) };
        }
    }

    generateRecommendations() {
        const recommendations = this.getPersonalizedRecommendations();
        const container = document.getElementById('profile-recommendations');

        if (!container) return;

        container.innerHTML = `
            <div class="nutrition-calculator__recommendations-content">
                <h3>Recomendaciones Personalizadas</h3>
                
                <div class="nutrition-calculator__daily-needs">
                    <h4>Necesidades Diarias Estimadas</h4>
                    <div class="nutrition-calculator__needs-grid">
                        <div class="nutrition-calculator__need-item">
                            <span class="nutrition-calculator__need-label">Calorías</span>
                            <span class="nutrition-calculator__need-value">${recommendations.dailyCalories} kcal</span>
                        </div>
                        <div class="nutrition-calculator__need-item">
                            <span class="nutrition-calculator__need-label">Proteínas</span>
                            <span class="nutrition-calculator__need-value">${recommendations.dailyProtein}g</span>
                        </div>
                        <div class="nutrition-calculator__need-item">
                            <span class="nutrition-calculator__need-label">Carbohidratos</span>
                            <span class="nutrition-calculator__need-value">${recommendations.dailyCarbs}g</span>
                        </div>
                        <div class="nutrition-calculator__need-item">
                            <span class="nutrition-calculator__need-label">Grasas</span>
                            <span class="nutrition-calculator__need-value">${recommendations.dailyFats}g</span>
                        </div>
                    </div>
                </div>
                
                <div class="nutrition-calculator__product-recommendations">
                    <h4>Productos Recomendados</h4>
                    <div class="nutrition-calculator__recommended-products">
                        ${recommendations.recommendedProducts.map(product => `
                            <div class="nutrition-calculator__recommended-product">
                                <img src="./images/products/${product.id}.jpg" alt="${product.name}" onerror="this.src='./images/placeholder-product.jpg'">
                                <div class="nutrition-calculator__recommended-info">
                                    <h5>${product.name}</h5>
                                    <p>${product.reason}</p>
                                    <div class="nutrition-calculator__recommended-match">
                                        <span class="nutrition-calculator__match-score">${product.matchScore}% compatible</span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="nutrition-calculator__tips">
                    <h4>Consejos Personalizados</h4>
                    <ul class="nutrition-calculator__tips-list">
                        ${recommendations.tips.map(tip => `
                            <li class="nutrition-calculator__tip-item">
                                <i class="ri-lightbulb-line"></i>
                                ${tip}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    getPersonalizedRecommendations() {
        const bmr = this.calculateBMR();
        const dailyCalories = Math.round(bmr * this.getActivityMultiplier());

        const recommendations = {
            dailyCalories: dailyCalories,
            dailyProtein: Math.round(this.userProfile.weight * 0.8),
            dailyCarbs: Math.round(dailyCalories * 0.5 / 4),
            dailyFats: Math.round(dailyCalories * 0.25 / 9),
            recommendedProducts: [],
            tips: []
        };

        // Generate product recommendations based on goals
        const allProducts = Object.entries(this.nutritionalData.products);

        this.userProfile.goals.forEach(goal => {
            switch (goal) {
                case 'weight-loss':
                    recommendations.recommendedProducts.push({
                        id: 'jugo-verde',
                        name: 'Jugo Verde Detox',
                        reason: 'Bajo en calorías, alto en nutrientes',
                        matchScore: 95
                    });
                    recommendations.tips.push('Los jugos verdes son ideales para la pérdida de peso por su bajo contenido calórico');
                    break;

                case 'energy-boost':
                    recommendations.recommendedProducts.push({
                        id: 'jugo-naranja',
                        name: 'Jugo de Naranja',
                        reason: 'Rico en vitamina C y azúcares naturales',
                        matchScore: 90
                    });
                    recommendations.tips.push('La vitamina C ayuda a combatir la fatiga y aumentar la energía');
                    break;

                case 'detox':
                    recommendations.recommendedProducts.push({
                        id: 'jugo-zanahoria',
                        name: 'Jugo de Zanahoria',
                        reason: 'Antioxidante natural con jengibre',
                        matchScore: 88
                    });
                    recommendations.tips.push('El jengibre tiene propiedades desintoxicantes y anti-inflamatorias');
                    break;

                case 'general-health':
                    recommendations.recommendedProducts.push({
                        id: 'jugo-mixto',
                        name: 'Jugo Mixto Tropical',
                        reason: 'Variedad de vitaminas y antioxidantes',
                        matchScore: 85
                    });
                    recommendations.tips.push('Varía tus jugos para obtener un espectro completo de nutrientes');
                    break;
            }
        });

        // Remove duplicates
        recommendations.recommendedProducts = recommendations.recommendedProducts.filter((product, index, self) =>
            index === self.findIndex(p => p.id === product.id)
        );

        // Add general tips based on profile
        if (this.userProfile.age > 50) {
            recommendations.tips.push('A tu edad, es importante mantener una buena ingesta de calcio y vitamina D');
        }

        if (this.userProfile.activityLevel === 'very-active') {
            recommendations.tips.push('Como persona muy activa, necesitas más antioxidantes para la recuperación muscular');
        }

        return recommendations;
    }

    calculateBMR() {
        // Mifflin-St Jeor Equation
        if (this.userProfile.gender === 'male') {
            return (10 * this.userProfile.weight) + (6.25 * this.userProfile.height) - (5 * this.userProfile.age) + 5;
        } else {
            return (10 * this.userProfile.weight) + (6.25 * this.userProfile.height) - (5 * this.userProfile.age) - 161;
        }
    }

    getActivityMultiplier() {
        const multipliers = {
            'sedentary': 1.2,
            'light': 1.375,
            'moderate': 1.55,
            'active': 1.725,
            'very-active': 1.9
        };

        return multipliers[this.userProfile.activityLevel] || 1.55;
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `nutrition-calculator__notification nutrition-calculator__notification--${type}`;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    trackNutritionAnalysis(productId, type) {
        Utils.trackEvent('nutrition_analysis', {
            productId,
            type,
            userGoals: this.userProfile.goals.join(',')
        });
    }

    // Public API methods
    analyzeProductById(productId) {
        this.analyzeProduct(productId);
        this.switchTab('products');
    }

    addIngredientToCustom(ingredientId, amount) {
        const ingredientSelect = document.getElementById('ingredient-select');
        const amountInput = document.getElementById('ingredient-amount');

        ingredientSelect.value = ingredientId;
        amountInput.value = amount;

        this.addCustomIngredient();
        this.switchTab('custom');
    }

    updateProfile(profileData) {
        this.userProfile = { ...this.userProfile, ...profileData };
        this.saveUserProfile();
        this.switchTab('profile');
    }
}

// Initialize Nutritional Calculator when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Initialize nutrition calculator
    if (typeof window.nutritionalCalculator === 'undefined') {
        window.nutritionalCalculator = new NutritionalCalculator();
    }
});

// Export for global access
window.NutritionalCalculator = NutritionalCalculator;/* ======
=============================
   ADVANCED IMAGE CAROUSEL SYSTEM
   =================================== */

// Carousel data structure
const carouselData = {
    hero: {
        id: 'hero-carousel',
        type: 'hero',
        autoplay: true,
        interval: 5000,
        showThumbnails: false,
        showDots: true,
        showArrows: true,
        slides: [
            {
                id: 'slide-1',
                image: './images/carousel/hero-slide-1.jpg',
                title: 'Jugos 100% Naturales',
                subtitle: 'Frescura que puedes sentir',
                description: 'Descubre nuestra selección de jugos naturales preparados con las mejores frutas y verduras.',
                cta: {
                    text: 'Ver Menú',
                    link: '#menu',
                    style: 'primary'
                },
                overlay: 'dark'
            },
            {
                id: 'slide-2',
                image: './images/carousel/hero-slide-2.jpg',
                title: 'Frappuccinos Cremosos',
                subtitle: 'El placer en cada sorbo',
                description: 'Disfruta de nuestros frappuccinos artesanales con ingredientes premium.',
                cta: {
                    text: 'Ordenar Ahora',
                    link: '#contact',
                    style: 'secondary'
                },
                overlay: 'gradient'
            },
            {
                id: 'slide-3',
                image: './images/carousel/hero-slide-3.jpg',
                title: 'Café de Especialidad',
                subtitle: 'Despierta tus sentidos',
                description: 'Café tostado artesanalmente para los verdaderos amantes del buen café.',
                cta: {
                    text: 'Conocer Más',
                    link: '#about',
                    style: 'outline'
                },
                overlay: 'light'
            }
        ]
    },

    products: {
        id: 'products-carousel',
        type: 'products',
        autoplay: false,
        interval: 0,
        showThumbnails: true,
        showDots: false,
        showArrows: true,
        slides: [
            {
                id: 'product-1',
                image: './images/carousel/product-jugo-verde.jpg',
                thumbnail: './images/carousel/thumbs/product-jugo-verde-thumb.jpg',
                title: 'Jugo Verde Detox',
                price: '$18.00',
                description: 'Mezcla energizante de vegetales verdes y frutas',
                badges: ['100% Natural', 'Detox', 'Popular'],
                rating: 5
            },
            {
                id: 'product-2',
                image: './images/carousel/product-frapp-chocolate.jpg',
                thumbnail: './images/carousel/thumbs/product-frapp-chocolate-thumb.jpg',
                title: 'Frappuccino de Chocolate',
                price: '$24.00',
                description: 'Delicioso frappuccino con chocolate belga y crema',
                badges: ['Premium', 'Popular'],
                rating: 5
            },
            {
                id: 'product-3',
                image: './images/carousel/product-cafe-latte.jpg',
                thumbnail: './images/carousel/thumbs/product-cafe-latte-thumb.jpg',
                title: 'Café Latte',
                price: '$16.00',
                description: 'Suave combinación de espresso con leche vaporizada',
                badges: ['Popular', 'Cremoso'],
                rating: 4
            },
            {
                id: 'product-4',
                image: './images/carousel/product-jugo-naranja.jpg',
                thumbnail: './images/carousel/thumbs/product-jugo-naranja-thumb.jpg',
                title: 'Jugo de Naranja',
                price: '$15.00',
                description: 'Jugo 100% natural de naranjas frescas, rico en vitamina C',
                badges: ['100% Natural', 'Popular'],
                rating: 5
            },
            {
                id: 'product-5',
                image: './images/carousel/product-jugo-mixto.jpg',
                thumbnail: './images/carousel/thumbs/product-jugo-mixto-thumb.jpg',
                title: 'Jugo Mixto Tropical',
                price: '$17.00',
                description: 'Combinación tropical de piña, mango y maracuyá',
                badges: ['100% Natural', 'Tropical'],
                rating: 4
            }
        ]
    },

    testimonials: {
        id: 'testimonials-carousel',
        type: 'testimonials',
        autoplay: true,
        interval: 6000,
        showThumbnails: false,
        showDots: true,
        showArrows: false,
        slides: [
            {
                id: 'testimonial-1',
                image: './images/carousel/testimonial-bg-1.jpg',
                avatar: './images/testimonials/maria-gonzalez.jpg',
                name: 'María González',
                role: 'Cliente Frecuente',
                location: 'Ciudad de México',
                rating: 5,
                text: 'Los mejores jugos naturales que he probado. La calidad es excepcional y el sabor es increíble. Definitivamente mi lugar favorito.',
                verified: true
            },
            {
                id: 'testimonial-2',
                image: './images/carousel/testimonial-bg-2.jpg',
                avatar: './images/testimonials/carlos-mendoza.jpg',
                name: 'Carlos Mendoza',
                role: 'Nutricionista',
                location: 'Guadalajara',
                rating: 5,
                text: 'Como nutricionista, recomiendo Fres-Kuras a mis pacientes. Sus productos son realmente naturales y nutritivos.',
                verified: true
            },
            {
                id: 'testimonial-3',
                image: './images/carousel/testimonial-bg-3.jpg',
                avatar: './images/testimonials/ana-rodriguez.jpg',
                name: 'Ana Rodríguez',
                role: 'Deportista',
                location: 'Monterrey',
                rating: 5,
                text: 'Perfecto para mi rutina de entrenamiento. Los jugos verdes me dan la energía que necesito para mis entrenamientos.',
                verified: true
            }
        ]
    }
};

// Advanced Image Carousel Class
class AdvancedImageCarousel {
    constructor(containerId, config) {
        this.containerId = containerId;
        this.config = { ...carouselData[config] } || config;
        this.currentSlide = 0;
        this.isPlaying = this.config.autoplay;
        this.autoplayTimer = null;
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.isDragging = false;
        this.dragStartX = 0;
        this.dragCurrentX = 0;
        this.container = null;
        this.slidesContainer = null;
        this.slides = [];
        this.thumbnails = [];
        this.dots = [];
        this.isTransitioning = false;

        this.init();
    }

    init() {
        this.createCarousel();
        this.bindEvents();
        this.startAutoplay();
        console.log(`Advanced Carousel initialized: ${this.config.id}`);
    }

    createCarousel() {
        this.container = document.getElementById(this.containerId);
        if (!this.container) {
            console.error(`Carousel container not found: ${this.containerId}`);
            return;
        }

        const carouselHTML = `
            <div class="advanced-carousel" data-carousel-id="${this.config.id}">
                <div class="advanced-carousel__main">
                    <div class="advanced-carousel__slides-container">
                        <div class="advanced-carousel__slides" id="${this.config.id}-slides">
                            ${this.renderSlides()}
                        </div>
                        
                        ${this.config.showArrows ? this.renderArrows() : ''}
                        
                        <div class="advanced-carousel__loading">
                            <div class="advanced-carousel__spinner">
                                <i class="ri-loader-4-line"></i>
                            </div>
                        </div>
                    </div>
                    
                    ${this.config.showDots ? this.renderDots() : ''}
                </div>
                
                ${this.config.showThumbnails ? this.renderThumbnails() : ''}
                
                <div class="advanced-carousel__controls">
                    ${this.config.autoplay ? this.renderPlayPause() : ''}
                    <div class="advanced-carousel__counter">
                        <span class="advanced-carousel__current">1</span>
                        /
                        <span class="advanced-carousel__total">${this.config.slides.length}</span>
                    </div>
                    <button class="advanced-carousel__fullscreen" title="Pantalla completa">
                        <i class="ri-fullscreen-line"></i>
                    </button>
                </div>
            </div>
        `;

        this.container.innerHTML = carouselHTML;
        this.slidesContainer = document.getElementById(`${this.config.id}-slides`);
        this.slides = this.container.querySelectorAll('.advanced-carousel__slide');

        if (this.config.showThumbnails) {
            this.thumbnails = this.container.querySelectorAll('.advanced-carousel__thumbnail');
        }

        if (this.config.showDots) {
            this.dots = this.container.querySelectorAll('.advanced-carousel__dot');
        }

        // Set initial active states
        this.updateActiveStates();
    }

    renderSlides() {
        return this.config.slides.map((slide, index) => {
            switch (this.config.type) {
                case 'hero':
                    return this.renderHeroSlide(slide, index);
                case 'products':
                    return this.renderProductSlide(slide, index);
                case 'testimonials':
                    return this.renderTestimonialSlide(slide, index);
                default:
                    return this.renderBasicSlide(slide, index);
            }
        }).join('');
    }

    renderHeroSlide(slide, index) {
        return `
            <div class="advanced-carousel__slide advanced-carousel__slide--hero ${index === 0 ? 'active' : ''}" 
                 data-slide-index="${index}">
                <div class="advanced-carousel__slide-bg">
                    <img src="${slide.image}" 
                         alt="${slide.title}" 
                         class="advanced-carousel__slide-image"
                         loading="${index === 0 ? 'eager' : 'lazy'}">
                    <div class="advanced-carousel__slide-overlay advanced-carousel__slide-overlay--${slide.overlay}"></div>
                </div>
                
                <div class="advanced-carousel__slide-content">
                    <div class="advanced-carousel__slide-text">
                        <h2 class="advanced-carousel__slide-title">${slide.title}</h2>
                        <h3 class="advanced-carousel__slide-subtitle">${slide.subtitle}</h3>
                        <p class="advanced-carousel__slide-description">${slide.description}</p>
                        
                        <div class="advanced-carousel__slide-actions">
                            <a href="${slide.cta.link}" 
                               class="advanced-carousel__slide-cta btn btn--${slide.cta.style}">
                                ${slide.cta.text}
                                <i class="ri-arrow-right-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderProductSlide(slide, index) {
        const starsHTML = this.generateStarsHTML(slide.rating);
        const badgesHTML = slide.badges.map(badge => `<span class="advanced-carousel__badge">${badge}</span>`).join('');

        return `
            <div class="advanced-carousel__slide advanced-carousel__slide--product ${index === 0 ? 'active' : ''}" 
                 data-slide-index="${index}">
                <div class="advanced-carousel__slide-image-container">
                    <img src="${slide.image}" 
                         alt="${slide.title}" 
                         class="advanced-carousel__slide-image"
                         loading="${index === 0 ? 'eager' : 'lazy'}">
                    
                    <div class="advanced-carousel__slide-badges">
                        ${badgesHTML}
                    </div>
                    
                    <div class="advanced-carousel__slide-zoom">
                        <button class="advanced-carousel__zoom-btn" title="Ver en detalle">
                            <i class="ri-zoom-in-line"></i>
                        </button>
                    </div>
                </div>
                
                <div class="advanced-carousel__slide-info">
                    <h3 class="advanced-carousel__slide-title">${slide.title}</h3>
                    <div class="advanced-carousel__slide-rating">
                        ${starsHTML}
                    </div>
                    <p class="advanced-carousel__slide-description">${slide.description}</p>
                    <div class="advanced-carousel__slide-price">${slide.price}</div>
                    
                    <div class="advanced-carousel__slide-actions">
                        <button class="advanced-carousel__add-to-cart btn btn--primary">
                            <i class="ri-shopping-cart-line"></i>
                            Agregar
                        </button>
                        <button class="advanced-carousel__quick-view btn btn--secondary">
                            <i class="ri-eye-line"></i>
                            Vista Rápida
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    renderTestimonialSlide(slide, index) {
        const starsHTML = this.generateStarsHTML(slide.rating);
        const verifiedBadge = slide.verified ? '<span class="advanced-carousel__verified"><i class="ri-verified-badge-fill"></i>Verificado</span>' : '';

        return `
            <div class="advanced-carousel__slide advanced-carousel__slide--testimonial ${index === 0 ? 'active' : ''}" 
                 data-slide-index="${index}">
                <div class="advanced-carousel__slide-bg">
                    <img src="${slide.image}" 
                         alt="Testimonial background" 
                         class="advanced-carousel__slide-image"
                         loading="${index === 0 ? 'eager' : 'lazy'}">
                    <div class="advanced-carousel__slide-overlay advanced-carousel__slide-overlay--testimonial"></div>
                </div>
                
                <div class="advanced-carousel__slide-content">
                    <div class="advanced-carousel__testimonial-content">
                        <div class="advanced-carousel__quote-icon">
                            <i class="ri-double-quotes-l"></i>
                        </div>
                        
                        <blockquote class="advanced-carousel__testimonial-text">
                            "${slide.text}"
                        </blockquote>
                        
                        <div class="advanced-carousel__testimonial-author">
                            <img src="${slide.avatar}" 
                                 alt="${slide.name}" 
                                 class="advanced-carousel__author-avatar"
                                 onerror="this.src='./images/placeholder-avatar.jpg'">
                            
                            <div class="advanced-carousel__author-info">
                                <h4 class="advanced-carousel__author-name">${slide.name}</h4>
                                <p class="advanced-carousel__author-role">${slide.role}</p>
                                <p class="advanced-carousel__author-location">
                                    <i class="ri-map-pin-line"></i>
                                    ${slide.location}
                                </p>
                                <div class="advanced-carousel__author-rating">
                                    ${starsHTML}
                                </div>
                                ${verifiedBadge}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderBasicSlide(slide, index) {
        return `
            <div class="advanced-carousel__slide ${index === 0 ? 'active' : ''}" 
                 data-slide-index="${index}">
                <img src="${slide.image}" 
                     alt="${slide.title || `Slide ${index + 1}`}" 
                     class="advanced-carousel__slide-image"
                     loading="${index === 0 ? 'eager' : 'lazy'}">
                
                ${slide.title ? `
                    <div class="advanced-carousel__slide-content">
                        <h3 class="advanced-carousel__slide-title">${slide.title}</h3>
                        ${slide.description ? `<p class="advanced-carousel__slide-description">${slide.description}</p>` : ''}
                    </div>
                ` : ''}
            </div>
        `;
    }

    renderArrows() {
        return `
            <button class="advanced-carousel__arrow advanced-carousel__arrow--prev" title="Anterior">
                <i class="ri-arrow-left-line"></i>
            </button>
            <button class="advanced-carousel__arrow advanced-carousel__arrow--next" title="Siguiente">
                <i class="ri-arrow-right-line"></i>
            </button>
        `;
    }

    renderDots() {
        const dotsHTML = this.config.slides.map((_, index) => `
            <button class="advanced-carousel__dot ${index === 0 ? 'active' : ''}" 
                    data-slide-index="${index}"
                    title="Ir a slide ${index + 1}">
            </button>
        `).join('');

        return `
            <div class="advanced-carousel__dots">
                ${dotsHTML}
            </div>
        `;
    }

    renderThumbnails() {
        const thumbnailsHTML = this.config.slides.map((slide, index) => `
            <button class="advanced-carousel__thumbnail ${index === 0 ? 'active' : ''}" 
                    data-slide-index="${index}"
                    title="${slide.title}">
                <img src="${slide.thumbnail || slide.image}" 
                     alt="${slide.title}" 
                     class="advanced-carousel__thumbnail-image">
                <div class="advanced-carousel__thumbnail-overlay"></div>
            </button>
        `).join('');

        return `
            <div class="advanced-carousel__thumbnails">
                <div class="advanced-carousel__thumbnails-container">
                    ${thumbnailsHTML}
                </div>
            </div>
        `;
    }

    renderPlayPause() {
        return `
            <button class="advanced-carousel__play-pause ${this.isPlaying ? 'playing' : 'paused'}" 
                    title="${this.isPlaying ? 'Pausar' : 'Reproducir'}">
                <i class="ri-${this.isPlaying ? 'pause' : 'play'}-line"></i>
            </button>
        `;
    }

    generateStarsHTML(rating) {
        return Utils.generateStarsHTML(rating);
    }

    bindEvents() {
        // Arrow navigation
        const prevArrow = this.container.querySelector('.advanced-carousel__arrow--prev');
        const nextArrow = this.container.querySelector('.advanced-carousel__arrow--next');

        if (prevArrow) {
            prevArrow.addEventListener('click', () => this.previousSlide());
        }

        if (nextArrow) {
            nextArrow.addEventListener('click', () => this.nextSlide());
        }

        // Dot navigation
        this.dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideIndex = parseInt(e.target.dataset.slideIndex);
                this.goToSlide(slideIndex);
            });
        });

        // Thumbnail navigation
        this.thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', (e) => {
                const slideIndex = parseInt(e.target.dataset.slideIndex);
                this.goToSlide(slideIndex);
            });
        });

        // Play/Pause button
        const playPauseBtn = this.container.querySelector('.advanced-carousel__play-pause');
        if (playPauseBtn) {
            playPauseBtn.addEventListener('click', () => this.toggleAutoplay());
        }

        // Fullscreen button
        const fullscreenBtn = this.container.querySelector('.advanced-carousel__fullscreen');
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
        }

        // Touch/Swipe events
        this.bindTouchEvents();

        // Mouse drag events (for desktop)
        this.bindDragEvents();

        // Keyboard navigation
        this.bindKeyboardEvents();

        // Pause on hover
        this.container.addEventListener('mouseenter', () => {
            if (this.isPlaying) {
                this.pauseAutoplay();
            }
        });

        this.container.addEventListener('mouseleave', () => {
            if (this.config.autoplay && !this.container.classList.contains('paused-by-user')) {
                this.startAutoplay();
            }
        });

        // Image loading events
        this.bindImageLoadingEvents();
    }

    bindTouchEvents() {
        this.slidesContainer.addEventListener('touchstart', (e) => {
            this.touchStartX = e.touches[0].clientX;
            this.pauseAutoplay();
        }, { passive: true });

        this.slidesContainer.addEventListener('touchmove', (e) => {
            this.touchEndX = e.touches[0].clientX;
        }, { passive: true });

        this.slidesContainer.addEventListener('touchend', () => {
            this.handleSwipe();
            if (this.config.autoplay && !this.container.classList.contains('paused-by-user')) {
                this.startAutoplay();
            }
        });
    }

    bindDragEvents() {
        this.slidesContainer.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            this.dragStartX = e.clientX;
            this.slidesContainer.style.cursor = 'grabbing';
            this.pauseAutoplay();
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (!this.isDragging) return;

            this.dragCurrentX = e.clientX;
            const dragDistance = this.dragCurrentX - this.dragStartX;

            // Visual feedback during drag
            this.slidesContainer.style.transform = `translateX(calc(-${this.currentSlide * 100}% + ${dragDistance}px))`;
        });

        document.addEventListener('mouseup', () => {
            if (!this.isDragging) return;

            this.isDragging = false;
            this.slidesContainer.style.cursor = 'grab';

            const dragDistance = this.dragCurrentX - this.dragStartX;
            const threshold = 50; // Minimum drag distance to trigger slide change

            if (Math.abs(dragDistance) > threshold) {
                if (dragDistance > 0) {
                    this.previousSlide();
                } else {
                    this.nextSlide();
                }
            } else {
                // Reset position if drag wasn't far enough
                this.updateSlidePosition();
            }

            if (this.config.autoplay && !this.container.classList.contains('paused-by-user')) {
                this.startAutoplay();
            }
        });
    }

    bindKeyboardEvents() {
        document.addEventListener('keydown', (e) => {
            // Only handle keyboard events if this carousel is in focus
            if (!this.container.contains(document.activeElement)) return;

            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.previousSlide();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.nextSlide();
                    break;
                case ' ':
                    e.preventDefault();
                    this.toggleAutoplay();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToSlide(0);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToSlide(this.config.slides.length - 1);
                    break;
            }
        });
    }

    bindImageLoadingEvents() {
        const images = this.container.querySelectorAll('.advanced-carousel__slide-image');
        let loadedImages = 0;

        const checkAllImagesLoaded = () => {
            loadedImages++;
            if (loadedImages === images.length) {
                this.hideLoading();
            }
        };

        images.forEach(img => {
            if (img.complete) {
                checkAllImagesLoaded();
            } else {
                img.addEventListener('load', checkAllImagesLoaded);
                img.addEventListener('error', () => {
                    console.warn(`Failed to load carousel image: ${img.src}`);
                    checkAllImagesLoaded();
                });
            }
        });
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = this.touchStartX - this.touchEndX;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                this.nextSlide();
            } else {
                this.previousSlide();
            }
        }
    }

    nextSlide() {
        if (this.isTransitioning) return;

        const nextIndex = (this.currentSlide + 1) % this.config.slides.length;
        this.goToSlide(nextIndex);
    }

    previousSlide() {
        if (this.isTransitioning) return;

        const prevIndex = this.currentSlide === 0 ? this.config.slides.length - 1 : this.currentSlide - 1;
        this.goToSlide(prevIndex);
    }

    goToSlide(index) {
        if (this.isTransitioning || index === this.currentSlide) return;

        this.isTransitioning = true;
        this.currentSlide = index;

        this.updateSlidePosition();
        this.updateActiveStates();
        this.updateCounter();

        // Reset transition flag after animation
        setTimeout(() => {
            this.isTransitioning = false;
        }, 500);

        // Track slide change
        this.trackSlideChange(index);
    }

    updateSlidePosition() {
        const translateX = -this.currentSlide * 100;
        this.slidesContainer.style.transform = `translateX(${translateX}%)`;
    }

    updateActiveStates() {
        // Update slides
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentSlide);
        });

        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });

        // Update thumbnails
        this.thumbnails.forEach((thumbnail, index) => {
            thumbnail.classList.toggle('active', index === this.currentSlide);
        });
    }

    updateCounter() {
        const currentSpan = this.container.querySelector('.advanced-carousel__current');
        if (currentSpan) {
            currentSpan.textContent = this.currentSlide + 1;
        }
    }

    startAutoplay() {
        if (!this.config.autoplay || this.autoplayTimer) return;

        this.isPlaying = true;
        this.autoplayTimer = setInterval(() => {
            this.nextSlide();
        }, this.config.interval);

        this.updatePlayPauseButton();
    }

    pauseAutoplay() {
        if (this.autoplayTimer) {
            clearInterval(this.autoplayTimer);
            this.autoplayTimer = null;
        }

        this.isPlaying = false;
        this.updatePlayPauseButton();
    }

    toggleAutoplay() {
        if (this.isPlaying) {
            this.pauseAutoplay();
            this.container.classList.add('paused-by-user');
        } else {
            this.startAutoplay();
            this.container.classList.remove('paused-by-user');
        }
    }

    updatePlayPauseButton() {
        const playPauseBtn = this.container.querySelector('.advanced-carousel__play-pause');
        if (!playPauseBtn) return;

        const icon = playPauseBtn.querySelector('i');

        if (this.isPlaying) {
            playPauseBtn.classList.add('playing');
            playPauseBtn.classList.remove('paused');
            playPauseBtn.title = 'Pausar';
            icon.className = 'ri-pause-line';
        } else {
            playPauseBtn.classList.add('paused');
            playPauseBtn.classList.remove('playing');
            playPauseBtn.title = 'Reproducir';
            icon.className = 'ri-play-line';
        }
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            this.container.requestFullscreen().then(() => {
                this.container.classList.add('fullscreen');
                this.updateFullscreenButton(true);
            }).catch(err => {
                console.warn('Could not enter fullscreen:', err);
            });
        } else {
            document.exitFullscreen().then(() => {
                this.container.classList.remove('fullscreen');
                this.updateFullscreenButton(false);
            });
        }
    }

    updateFullscreenButton(isFullscreen) {
        const fullscreenBtn = this.container.querySelector('.advanced-carousel__fullscreen');
        if (!fullscreenBtn) return;

        const icon = fullscreenBtn.querySelector('i');

        if (isFullscreen) {
            icon.className = 'ri-fullscreen-exit-line';
            fullscreenBtn.title = 'Salir de pantalla completa';
        } else {
            icon.className = 'ri-fullscreen-line';
            fullscreenBtn.title = 'Pantalla completa';
        }
    }

    hideLoading() {
        const loading = this.container.querySelector('.advanced-carousel__loading');
        if (loading) {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.style.display = 'none';
            }, 300);
        }
    }

    trackSlideChange(slideIndex) {
        Utils.trackEvent('carousel_slide_change', {
            carouselId: this.config.id,
            slideIndex,
            slideId: this.config.slides[slideIndex].id
        });
    }

    // Public API methods
    play() {
        this.startAutoplay();
        this.container.classList.remove('paused-by-user');
    }

    pause() {
        this.pauseAutoplay();
        this.container.classList.add('paused-by-user');
    }

    next() {
        this.nextSlide();
    }

    previous() {
        this.previousSlide();
    }

    goTo(index) {
        if (index >= 0 && index < this.config.slides.length) {
            this.goToSlide(index);
        }
    }

    getCurrentSlide() {
        return this.currentSlide;
    }

    getTotalSlides() {
        return this.config.slides.length;
    }

    destroy() {
        this.pauseAutoplay();

        // Remove event listeners
        // Note: In a production environment, you'd want to store references to bound functions
        // and remove them specifically to prevent memory leaks

        this.container.innerHTML = '';
        console.log(`Carousel ${this.config.id} destroyed`);
    }
}

// Carousel Manager for multiple carousels
class CarouselManager {
    constructor() {
        this.carousels = new Map();
        this.init();
    }

    init() {
        this.createCarouselSections();
        this.initializeCarousels();
        console.log('Carousel Manager initialized');
    }

    createCarouselSections() {
        // Create hero carousel section if it doesn't exist
        this.createCarouselSection('hero-carousel-section', 'hero', 'Hero Carousel');

        // Create products carousel section
        this.createCarouselSection('products-carousel-section', 'products', 'Productos Destacados');

        // Create testimonials carousel section
        this.createCarouselSection('testimonials-carousel-section', 'testimonials', 'Lo que Dicen Nuestros Clientes');
    }

    createCarouselSection(sectionId, carouselType, title) {
        let section = document.getElementById(sectionId);
        if (!section) {
            section = document.createElement('section');
            section.id = sectionId;
            section.className = `carousel-section carousel-section--${carouselType}`;

            // Insert in appropriate location
            const insertLocation = this.getInsertLocation(carouselType);
            if (insertLocation) {
                insertLocation.parentNode.insertBefore(section, insertLocation);
            } else {
                document.body.appendChild(section);
            }
        }

        if (carouselType !== 'hero') {
            section.innerHTML = `
                <div class="container">
                    <div class="carousel-section__header">
                        <h2 class="carousel-section__title">${title}</h2>
                    </div>
                    <div id="${carouselType}-carousel-container" class="carousel-section__container">
                        <!-- Carousel will be inserted here -->
                    </div>
                </div>
            `;
        } else {
            section.innerHTML = `
                <div id="${carouselType}-carousel-container" class="carousel-section__container">
                    <!-- Hero carousel will be inserted here -->
                </div>
            `;
        }
    }

    getInsertLocation(carouselType) {
        switch (carouselType) {
            case 'hero':
                return document.querySelector('.about') || document.querySelector('main') || document.body.firstChild;
            case 'products':
                return document.querySelector('.menu') || document.querySelector('.about');
            case 'testimonials':
                return document.querySelector('.nutrition-calculator') || document.querySelector('.reviews') || document.querySelector('.contact');
            default:
                return null;
        }
    }

    initializeCarousels() {
        // Initialize hero carousel
        this.createCarousel('hero-carousel-container', 'hero');

        // Initialize products carousel
        this.createCarousel('products-carousel-container', 'products');

        // Initialize testimonials carousel
        this.createCarousel('testimonials-carousel-container', 'testimonials');
    }

    createCarousel(containerId, configKey) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Carousel container not found: ${containerId}`);
            return;
        }

        const carousel = new AdvancedImageCarousel(containerId, configKey);
        this.carousels.set(configKey, carousel);

        return carousel;
    }

    getCarousel(carouselId) {
        return this.carousels.get(carouselId);
    }

    getAllCarousels() {
        return Array.from(this.carousels.values());
    }

    pauseAll() {
        this.carousels.forEach(carousel => carousel.pause());
    }

    playAll() {
        this.carousels.forEach(carousel => carousel.play());
    }

    destroyAll() {
        this.carousels.forEach(carousel => carousel.destroy());
        this.carousels.clear();
    }
}

// Initialize Carousel Manager when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Initialize carousel manager
    if (typeof window.carouselManager === 'undefined') {
        window.carouselManager = new CarouselManager();
    }
});

// Export for global access
window.AdvancedImageCarousel = AdvancedImageCarousel;
window.CarouselManager = CarouselManager;/* 
===================================
   INSTAGRAM FEED INTEGRATION SYSTEM
   =================================== */

// Instagram feed data structure (simulated API response)
const instagramFeedData = {
    account: {
        username: 'jugosnaturalesfresh',
        displayName: 'Jugos Naturales Fresh',
        profilePicture: './images/instagram/profile-picture.jpg',
        followers: 15420,
        following: 892,
        posts: 347,
        verified: false,
        bio: '🥤 Jugos 100% naturales | 🌱 Ingredientes frescos | 📍 CDMX | 🚚 Entregas a domicilio'
    },

    posts: [
        {
            id: 'post-1',
            type: 'image',
            imageUrl: './images/instagram/post-1.jpg',
            thumbnailUrl: './images/instagram/thumbs/post-1-thumb.jpg',
            caption: '🌱 Nuestro jugo verde detox es perfecto para comenzar el día con energía! Espinaca, apio, manzana verde y un toque de jengibre. ¿Ya probaste el tuyo? #JugosNaturales #Detox #Saludable #VidaSana',
            hashtags: ['JugosNaturales', 'Detox', 'Saludable', 'VidaSana', 'Energia', 'Natural'],
            likes: 234,
            comments: 18,
            timestamp: '2024-01-20T10:30:00Z',
            location: 'Ciudad de México',
            permalink: 'https://instagram.com/p/example1'
        },
        {
            id: 'post-2',
            type: 'image',
            imageUrl: './images/instagram/post-2.jpg',
            thumbnailUrl: './images/instagram/thumbs/post-2-thumb.jpg',
            caption: '☕ Frappuccino de chocolate belga recién preparado! La cremosidad perfecta para estos días calurosos. ¡Ven por el tuyo! #Frappuccino #Chocolate #Cremoso #Refrescante',
            hashtags: ['Frappuccino', 'Chocolate', 'Cremoso', 'Refrescante', 'Cafe', 'Delicioso'],
            likes: 189,
            comments: 12,
            timestamp: '2024-01-19T15:45:00Z',
            location: 'Ciudad de México',
            permalink: 'https://instagram.com/p/example2'
        },
        {
            id: 'post-3',
            type: 'carousel',
            imageUrl: './images/instagram/post-3.jpg',
            thumbnailUrl: './images/instagram/thumbs/post-3-thumb.jpg',
            carouselImages: [
                './images/instagram/post-3-1.jpg',
                './images/instagram/post-3-2.jpg',
                './images/instagram/post-3-3.jpg'
            ],
            caption: '🍊🥕🍎 Proceso de preparación de nuestros jugos naturales. Desde la selección de ingredientes hasta el vaso final. Todo 100% natural y fresco! #ProcesoNatural #Frescura #Calidad',
            hashtags: ['ProcesoNatural', 'Frescura', 'Calidad', 'JugosNaturales', 'Ingredientes', 'Artesanal'],
            likes: 312,
            comments: 25,
            timestamp: '2024-01-18T12:20:00Z',
            location: 'Ciudad de México',
            permalink: 'https://instagram.com/p/example3'
        },
        {
            id: 'post-4',
            type: 'video',
            imageUrl: './images/instagram/post-4.jpg',
            thumbnailUrl: './images/instagram/thumbs/post-4-thumb.jpg',
            videoUrl: './images/instagram/post-4-video.mp4',
            caption: '🎥 Así preparamos nuestro famoso jugo mixto tropical! Piña, mango y maracuyá en perfecta armonía. ¿Cuál es tu combinación favorita? #JugoTropical #Preparacion #Video',
            hashtags: ['JugoTropical', 'Preparacion', 'Video', 'Tropical', 'Mango', 'Piña', 'Maracuya'],
            likes: 445,
            comments: 31,
            timestamp: '2024-01-17T09:15:00Z',
            location: 'Ciudad de México',
            permalink: 'https://instagram.com/p/example4',
            duration: 45
        },
        {
            id: 'post-5',
            type: 'image',
            imageUrl: './images/instagram/post-5.jpg',
            thumbnailUrl: './images/instagram/thumbs/post-5-thumb.jpg',
            caption: '🌟 Cliente feliz = nuestro mejor premio! Gracias María por elegirnos para tu rutina saludable diaria. #ClienteFeliz #Testimonial #Agradecimiento #Saludable',
            hashtags: ['ClienteFeliz', 'Testimonial', 'Agradecimiento', 'Saludable', 'Rutina', 'Bienestar'],
            likes: 156,
            comments: 8,
            timestamp: '2024-01-16T16:30:00Z',
            location: 'Ciudad de México',
            permalink: 'https://instagram.com/p/example5'
        },
        {
            id: 'post-6',
            type: 'image',
            imageUrl: './images/instagram/post-6.jpg',
            thumbnailUrl: './images/instagram/thumbs/post-6-thumb.jpg',
            caption: '🥤 Nuevos vasos eco-friendly! Ahora puedes disfrutar tus jugos favoritos cuidando el medio ambiente. #EcoFriendly #Sustentable #MedioAmbiente #Responsabilidad',
            hashtags: ['EcoFriendly', 'Sustentable', 'MedioAmbiente', 'Responsabilidad', 'Verde', 'Ecologico'],
            likes: 203,
            comments: 14,
            timestamp: '2024-01-15T11:45:00Z',
            location: 'Ciudad de México',
            permalink: 'https://instagram.com/p/example6'
        },
        {
            id: 'post-7',
            type: 'image',
            imageUrl: './images/instagram/post-7.jpg',
            thumbnailUrl: './images/instagram/thumbs/post-7-thumb.jpg',
            caption: '☕ Café latte art del día! Nuestros baristas crean verdaderas obras de arte en cada taza. #LatteArt #Cafe #Arte #Barista #Creatividad',
            hashtags: ['LatteArt', 'Cafe', 'Arte', 'Barista', 'Creatividad', 'Espresso'],
            likes: 278,
            comments: 19,
            timestamp: '2024-01-14T08:20:00Z',
            location: 'Ciudad de México',
            permalink: 'https://instagram.com/p/example7'
        },
        {
            id: 'post-8',
            type: 'image',
            imageUrl: './images/instagram/post-8.jpg',
            thumbnailUrl: './images/instagram/thumbs/post-8-thumb.jpg',
            caption: '🎉 ¡Celebramos 2 años sirviendo los mejores jugos naturales! Gracias a todos nuestros clientes por su confianza. #Aniversario #Celebracion #Agradecimiento #2Años',
            hashtags: ['Aniversario', 'Celebracion', 'Agradecimiento', '2Años', 'Gracias', 'Clientes'],
            likes: 567,
            comments: 42,
            timestamp: '2024-01-13T14:00:00Z',
            location: 'Ciudad de México',
            permalink: 'https://instagram.com/p/example8'
        }
    ]
};

// Instagram Feed Integration Class
class InstagramFeedIntegration {
    constructor() {
        this.feedData = instagramFeedData;
        this.currentFilter = 'all';
        this.currentSort = 'newest';
        this.visiblePosts = 6;
        this.loadMoreIncrement = 3;
        this.container = null;
        this.lightbox = null;
        this.currentLightboxPost = null;
        this.isLoading = false;

        this.init();
    }

    init() {
        this.createInstagramSection();
        this.createLightbox();
        this.bindEvents();
        this.renderFeed();
        console.log('Instagram Feed Integration initialized');
    }

    createInstagramSection() {
        // Find or create Instagram section
        let instagramSection = document.getElementById('instagram-feed');
        if (!instagramSection) {
            instagramSection = document.createElement('section');
            instagramSection.id = 'instagram-feed';
            instagramSection.className = 'instagram-feed section';

            // Insert before contact section or at the end
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.parentNode.insertBefore(instagramSection, contactSection);
            } else {
                document.body.appendChild(instagramSection);
            }
        }

        instagramSection.innerHTML = `
            <div class="instagram-feed__container container">
                <div class="instagram-feed__header">
                    <div class="instagram-feed__profile">
                        <img src="${this.feedData.account.profilePicture}" 
                             alt="${this.feedData.account.displayName}" 
                             class="instagram-feed__profile-picture"
                             onerror="this.src='./images/placeholder-avatar.jpg'">
                        
                        <div class="instagram-feed__profile-info">
                            <h2 class="instagram-feed__title">
                                <i class="ri-instagram-line"></i>
                                @${this.feedData.account.username}
                                ${this.feedData.account.verified ? '<i class="ri-verified-badge-fill instagram-feed__verified"></i>' : ''}
                            </h2>
                            <p class="instagram-feed__bio">${this.feedData.account.bio}</p>
                            
                            <div class="instagram-feed__stats">
                                <div class="instagram-feed__stat">
                                    <span class="instagram-feed__stat-number">${this.formatNumber(this.feedData.account.posts)}</span>
                                    <span class="instagram-feed__stat-label">Publicaciones</span>
                                </div>
                                <div class="instagram-feed__stat">
                                    <span class="instagram-feed__stat-number">${this.formatNumber(this.feedData.account.followers)}</span>
                                    <span class="instagram-feed__stat-label">Seguidores</span>
                                </div>
                                <div class="instagram-feed__stat">
                                    <span class="instagram-feed__stat-number">${this.formatNumber(this.feedData.account.following)}</span>
                                    <span class="instagram-feed__stat-label">Siguiendo</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="instagram-feed__follow-btn-container">
                            <a href="https://instagram.com/${this.feedData.account.username}" 
                               target="_blank" 
                               class="instagram-feed__follow-btn btn btn--primary">
                                <i class="ri-instagram-line"></i>
                                Seguir en Instagram
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="instagram-feed__controls">
                    <div class="instagram-feed__filters">
                        <button class="instagram-feed__filter-btn active" data-filter="all">
                            <i class="ri-apps-line"></i>
                            Todas
                        </button>
                        <button class="instagram-feed__filter-btn" data-filter="JugosNaturales">
                            <i class="ri-drop-line"></i>
                            Jugos
                        </button>
                        <button class="instagram-feed__filter-btn" data-filter="Cafe">
                            <i class="ri-cup-line"></i>
                            Café
                        </button>
                        <button class="instagram-feed__filter-btn" data-filter="Saludable">
                            <i class="ri-heart-pulse-line"></i>
                            Saludable
                        </button>
                        <button class="instagram-feed__filter-btn" data-filter="Video">
                            <i class="ri-video-line"></i>
                            Videos
                        </button>
                    </div>
                    
                    <div class="instagram-feed__sort">
                        <select class="instagram-feed__sort-select" id="instagram-sort">
                            <option value="newest">Más recientes</option>
                            <option value="oldest">Más antiguos</option>
                            <option value="popular">Más populares</option>
                            <option value="comments">Más comentados</option>
                        </select>
                    </div>
                </div>
                
                <div class="instagram-feed__grid" id="instagram-grid">
                    <!-- Posts will be rendered here -->
                </div>
                
                <div class="instagram-feed__load-more">
                    <button class="instagram-feed__load-btn btn btn--secondary" id="load-more-posts">
                        <i class="ri-add-line"></i>
                        Ver más publicaciones
                    </button>
                </div>
                
                <div class="instagram-feed__cta">
                    <h3>¡Síguenos para más contenido!</h3>
                    <p>No te pierdas nuestras últimas creaciones y promociones especiales</p>
                    <a href="https://instagram.com/${this.feedData.account.username}" 
                       target="_blank" 
                       class="btn btn--primary">
                        <i class="ri-instagram-line"></i>
                        Seguir @${this.feedData.account.username}
                    </a>
                </div>
            </div>
        `;

        this.container = document.getElementById('instagram-grid');
    }

    createLightbox() {
        const lightboxHTML = `
            <div class="instagram-feed__lightbox" id="instagram-lightbox">
                <div class="instagram-feed__lightbox-overlay"></div>
                <div class="instagram-feed__lightbox-content">
                    <button class="instagram-feed__lightbox-close">
                        <i class="ri-close-line"></i>
                    </button>
                    
                    <div class="instagram-feed__lightbox-post">
                        <div class="instagram-feed__lightbox-media">
                            <!-- Media content will be inserted here -->
                        </div>
                        
                        <div class="instagram-feed__lightbox-info">
                            <div class="instagram-feed__lightbox-header">
                                <img src="${this.feedData.account.profilePicture}" 
                                     alt="${this.feedData.account.displayName}" 
                                     class="instagram-feed__lightbox-avatar">
                                <div class="instagram-feed__lightbox-user">
                                    <h4>@${this.feedData.account.username}</h4>
                                    <span class="instagram-feed__lightbox-time"></span>
                                </div>
                            </div>
                            
                            <div class="instagram-feed__lightbox-caption">
                                <!-- Caption will be inserted here -->
                            </div>
                            
                            <div class="instagram-feed__lightbox-hashtags">
                                <!-- Hashtags will be inserted here -->
                            </div>
                            
                            <div class="instagram-feed__lightbox-stats">
                                <div class="instagram-feed__lightbox-stat">
                                    <i class="ri-heart-line"></i>
                                    <span class="instagram-feed__lightbox-likes"></span>
                                </div>
                                <div class="instagram-feed__lightbox-stat">
                                    <i class="ri-chat-3-line"></i>
                                    <span class="instagram-feed__lightbox-comments"></span>
                                </div>
                            </div>
                            
                            <div class="instagram-feed__lightbox-actions">
                                <a href="#" class="instagram-feed__lightbox-view-btn btn btn--primary" target="_blank">
                                    <i class="ri-external-link-line"></i>
                                    Ver en Instagram
                                </a>
                                <button class="instagram-feed__lightbox-share-btn btn btn--secondary">
                                    <i class="ri-share-line"></i>
                                    Compartir
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
        this.lightbox = document.getElementById('instagram-lightbox');
    }

    bindEvents() {
        // Filter buttons
        const filterBtns = document.querySelectorAll('.instagram-feed__filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Update active filter button
                filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');

                // Update current filter and render
                this.currentFilter = e.target.dataset.filter;
                this.visiblePosts = 6; // Reset visible posts
                this.renderFeed();
            });
        });

        // Sort select
        const sortSelect = document.getElementById('instagram-sort');
        sortSelect.addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.renderFeed();
        });

        // Load more button
        const loadMoreBtn = document.getElementById('load-more-posts');
        loadMoreBtn.addEventListener('click', () => {
            this.loadMorePosts();
        });

        // Lightbox events
        this.bindLightboxEvents();
    }

    bindLightboxEvents() {
        const lightbox = this.lightbox;
        const closeBtn = lightbox.querySelector('.instagram-feed__lightbox-close');
        const overlay = lightbox.querySelector('.instagram-feed__lightbox-overlay');

        // Close lightbox
        [closeBtn, overlay].forEach(element => {
            element.addEventListener('click', () => {
                this.closeLightbox();
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') {
                this.closeLightbox();
            }
        });

        // Share button
        lightbox.addEventListener('click', (e) => {
            if (e.target.closest('.instagram-feed__lightbox-share-btn')) {
                this.sharePost(this.currentLightboxPost);
            }
        });
    }

    getFilteredAndSortedPosts() {
        let filteredPosts = [...this.feedData.posts];

        // Filter by hashtag
        if (this.currentFilter !== 'all') {
            filteredPosts = filteredPosts.filter(post =>
                post.hashtags.includes(this.currentFilter)
            );
        }

        // Sort posts
        filteredPosts.sort((a, b) => {
            switch (this.currentSort) {
                case 'newest':
                    return new Date(b.timestamp) - new Date(a.timestamp);
                case 'oldest':
                    return new Date(a.timestamp) - new Date(b.timestamp);
                case 'popular':
                    return b.likes - a.likes;
                case 'comments':
                    return b.comments - a.comments;
                default:
                    return 0;
            }
        });

        return filteredPosts;
    }

    renderFeed() {
        const posts = this.getFilteredAndSortedPosts();
        const visiblePosts = posts.slice(0, this.visiblePosts);

        if (visiblePosts.length === 0) {
            this.container.innerHTML = `
                <div class="instagram-feed__no-posts">
                    <i class="ri-image-line"></i>
                    <h3>No hay publicaciones</h3>
                    <p>No se encontraron publicaciones con el filtro seleccionado</p>
                </div>
            `;
            this.updateLoadMoreButton(false);
            return;
        }

        this.container.innerHTML = visiblePosts.map(post => this.createPostCard(post)).join('');
        this.bindPostEvents();

        // Update load more button
        this.updateLoadMoreButton(visiblePosts.length < posts.length);

        // Animate in new posts
        this.animatePosts();
    }

    createPostCard(post) {
        const timeAgo = this.getTimeAgo(post.timestamp);
        const mediaIcon = this.getMediaIcon(post.type);

        return `
            <div class="instagram-feed__post" data-post-id="${post.id}">
                <div class="instagram-feed__post-media">
                    <img src="${post.thumbnailUrl || post.imageUrl}" 
                         alt="Instagram post" 
                         class="instagram-feed__post-image"
                         loading="lazy"
                         onerror="this.src='./images/placeholder-instagram.jpg'">
                    
                    <div class="instagram-feed__post-overlay">
                        <div class="instagram-feed__post-stats">
                            <div class="instagram-feed__post-stat">
                                <i class="ri-heart-fill"></i>
                                <span>${this.formatNumber(post.likes)}</span>
                            </div>
                            <div class="instagram-feed__post-stat">
                                <i class="ri-chat-3-fill"></i>
                                <span>${this.formatNumber(post.comments)}</span>
                            </div>
                        </div>
                        
                        <div class="instagram-feed__post-type">
                            ${mediaIcon}
                        </div>
                    </div>
                    
                    <button class="instagram-feed__post-view" title="Ver publicación">
                        <i class="ri-eye-line"></i>
                    </button>
                </div>
                
                <div class="instagram-feed__post-info">
                    <div class="instagram-feed__post-caption">
                        ${this.truncateText(post.caption, 80)}
                    </div>
                    
                    <div class="instagram-feed__post-meta">
                        <span class="instagram-feed__post-time">
                            <i class="ri-time-line"></i>
                            ${timeAgo}
                        </span>
                        ${post.location ? `
                            <span class="instagram-feed__post-location">
                                <i class="ri-map-pin-line"></i>
                                ${post.location}
                            </span>
                        ` : ''}
                    </div>
                    
                    <div class="instagram-feed__post-hashtags">
                        ${post.hashtags.slice(0, 3).map(tag => `
                            <span class="instagram-feed__hashtag" data-hashtag="${tag}">#${tag}</span>
                        `).join('')}
                        ${post.hashtags.length > 3 ? `<span class="instagram-feed__hashtag-more">+${post.hashtags.length - 3}</span>` : ''}
                    </div>
                    
                    <div class="instagram-feed__post-actions">
                        <button class="instagram-feed__post-like" data-post-id="${post.id}">
                            <i class="ri-heart-line"></i>
                        </button>
                        <button class="instagram-feed__post-comment" data-post-id="${post.id}">
                            <i class="ri-chat-3-line"></i>
                        </button>
                        <a href="${post.permalink}" target="_blank" class="instagram-feed__post-external">
                            <i class="ri-external-link-line"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    bindPostEvents() {
        // Post click events
        const posts = this.container.querySelectorAll('.instagram-feed__post');
        posts.forEach(post => {
            const viewBtn = post.querySelector('.instagram-feed__post-view');
            const postMedia = post.querySelector('.instagram-feed__post-media');

            [viewBtn, postMedia].forEach(element => {
                element.addEventListener('click', (e) => {
                    e.preventDefault();
                    const postId = post.dataset.postId;
                    this.openLightbox(postId);
                });
            });
        });

        // Hashtag click events
        const hashtags = this.container.querySelectorAll('.instagram-feed__hashtag');
        hashtags.forEach(hashtag => {
            hashtag.addEventListener('click', (e) => {
                const tag = e.target.dataset.hashtag;
                this.filterByHashtag(tag);
            });
        });

        // Action buttons
        const likeButtons = this.container.querySelectorAll('.instagram-feed__post-like');
        const commentButtons = this.container.querySelectorAll('.instagram-feed__post-comment');

        likeButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleLike(btn.dataset.postId, btn);
            });
        });

        commentButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const postId = btn.dataset.postId;
                const post = this.feedData.posts.find(p => p.id === postId);
                if (post) {
                    window.open(post.permalink, '_blank');
                }
            });
        });
    }

    openLightbox(postId) {
        const post = this.feedData.posts.find(p => p.id === postId);
        if (!post) return;

        this.currentLightboxPost = post;

        // Update lightbox content
        this.updateLightboxContent(post);

        // Show lightbox
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Track view
        this.trackPostView(postId);
    }

    updateLightboxContent(post) {
        const mediaContainer = this.lightbox.querySelector('.instagram-feed__lightbox-media');
        const captionContainer = this.lightbox.querySelector('.instagram-feed__lightbox-caption');
        const hashtagsContainer = this.lightbox.querySelector('.instagram-feed__lightbox-hashtags');
        const timeContainer = this.lightbox.querySelector('.instagram-feed__lightbox-time');
        const likesContainer = this.lightbox.querySelector('.instagram-feed__lightbox-likes');
        const commentsContainer = this.lightbox.querySelector('.instagram-feed__lightbox-comments');
        const viewBtn = this.lightbox.querySelector('.instagram-feed__lightbox-view-btn');

        // Update media
        if (post.type === 'video') {
            mediaContainer.innerHTML = `
                <video class="instagram-feed__lightbox-video" controls poster="${post.imageUrl}">
                    <source src="${post.videoUrl}" type="video/mp4">
                    Tu navegador no soporta el elemento video.
                </video>
            `;
        } else if (post.type === 'carousel') {
            mediaContainer.innerHTML = `
                <div class="instagram-feed__lightbox-carousel">
                    ${post.carouselImages.map((img, index) => `
                        <img src="${img}" 
                             alt="Carousel image ${index + 1}" 
                             class="instagram-feed__lightbox-carousel-image ${index === 0 ? 'active' : ''}"
                             loading="lazy">
                    `).join('')}
                    <div class="instagram-feed__lightbox-carousel-dots">
                        ${post.carouselImages.map((_, index) => `
                            <button class="instagram-feed__lightbox-carousel-dot ${index === 0 ? 'active' : ''}" 
                                    data-index="${index}"></button>
                        `).join('')}
                    </div>
                </div>
            `;

            // Bind carousel events
            this.bindLightboxCarouselEvents();
        } else {
            mediaContainer.innerHTML = `
                <img src="${post.imageUrl}" 
                     alt="Instagram post" 
                     class="instagram-feed__lightbox-image"
                     loading="lazy">
            `;
        }

        // Update content
        captionContainer.textContent = post.caption;
        hashtagsContainer.innerHTML = post.hashtags.map(tag =>
            `<span class="instagram-feed__lightbox-hashtag">#${tag}</span>`
        ).join('');
        timeContainer.textContent = this.getTimeAgo(post.timestamp);
        likesContainer.textContent = this.formatNumber(post.likes);
        commentsContainer.textContent = this.formatNumber(post.comments);
        viewBtn.href = post.permalink;
    }

    bindLightboxCarouselEvents() {
        const dots = this.lightbox.querySelectorAll('.instagram-feed__lightbox-carousel-dot');
        const images = this.lightbox.querySelectorAll('.instagram-feed__lightbox-carousel-image');

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                // Update active states
                dots.forEach(d => d.classList.remove('active'));
                images.forEach(img => img.classList.remove('active'));

                dot.classList.add('active');
                images[index].classList.add('active');
            });
        });
    }

    closeLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        this.currentLightboxPost = null;
    }

    loadMorePosts() {
        if (this.isLoading) return;

        this.isLoading = true;
        const loadBtn = document.getElementById('load-more-posts');
        const originalText = loadBtn.innerHTML;

        // Show loading state
        loadBtn.innerHTML = '<i class="ri-loader-4-line"></i> Cargando...';
        loadBtn.disabled = true;

        // Simulate loading delay
        setTimeout(() => {
            this.visiblePosts += this.loadMoreIncrement;
            this.renderFeed();

            // Reset button state
            loadBtn.innerHTML = originalText;
            loadBtn.disabled = false;
            this.isLoading = false;
        }, 1000);
    }

    updateLoadMoreButton(hasMore) {
        const loadBtn = document.getElementById('load-more-posts');
        const loadMoreContainer = loadBtn.parentElement;

        if (hasMore) {
            loadMoreContainer.style.display = 'block';
        } else {
            loadMoreContainer.style.display = 'none';
        }
    }

    filterByHashtag(hashtag) {
        // Update filter button
        const filterBtns = document.querySelectorAll('.instagram-feed__filter-btn');
        filterBtns.forEach(btn => btn.classList.remove('active'));

        // Find matching filter button or use 'all'
        const matchingBtn = Array.from(filterBtns).find(btn => btn.dataset.filter === hashtag);
        if (matchingBtn) {
            matchingBtn.classList.add('active');
            this.currentFilter = hashtag;
        } else {
            filterBtns[0].classList.add('active'); // 'all' button
            this.currentFilter = 'all';
        }

        this.visiblePosts = 6; // Reset visible posts
        this.renderFeed();

        // Scroll to feed
        document.getElementById('instagram-feed').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    toggleLike(postId, button) {
        const post = this.feedData.posts.find(p => p.id === postId);
        if (!post) return;

        // Simulate like toggle
        const icon = button.querySelector('i');
        const isLiked = icon.classList.contains('ri-heart-fill');

        if (isLiked) {
            icon.classList.remove('ri-heart-fill');
            icon.classList.add('ri-heart-line');
            post.likes--;
        } else {
            icon.classList.remove('ri-heart-line');
            icon.classList.add('ri-heart-fill');
            post.likes++;

            // Add animation
            button.style.transform = 'scale(1.2)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);
        }

        // Update like count in overlay
        const postElement = button.closest('.instagram-feed__post');
        const likeCount = postElement.querySelector('.instagram-feed__post-stat span');
        if (likeCount) {
            likeCount.textContent = this.formatNumber(post.likes);
        }

        // Track interaction
        this.trackPostInteraction(postId, isLiked ? 'unlike' : 'like');
    }

    sharePost(post) {
        if (!post) return;

        const shareData = {
            title: `Instagram - @${this.feedData.account.username}`,
            text: post.caption.substring(0, 100) + '...',
            url: post.permalink
        };

        if (navigator.share) {
            navigator.share(shareData);
        } else {
            // Fallback: copy to clipboard
            const shareText = `${shareData.text}\n\n${shareData.url}`;
            navigator.clipboard.writeText(shareText).then(() => {
                this.showNotification('Enlace copiado al portapapeles');
            });
        }

        this.trackPostInteraction(post.id, 'share');
    }

    animatePosts() {
        const posts = this.container.querySelectorAll('.instagram-feed__post');
        posts.forEach((post, index) => {
            post.style.opacity = '0';
            post.style.transform = 'translateY(20px)';

            setTimeout(() => {
                post.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                post.style.opacity = '1';
                post.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Utility functions
    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

getTimeAgo(date) {
    return Utils.getTimeAgo(date);
}

getMediaIcon(type) {
    switch (type) {
        case 'video':
            return '<i class="ri-play-circle-fill"></i>';
        case 'carousel':
            return '<i class="ri-stack-fill"></i>';
        default:
            return '';
    }
}

truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'instagram-feed__notification';
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

trackPostView(postId) {
    Utils.trackEvent('instagram_post_view', { postId, source: 'lightbox' });
}

trackPostInteraction(postId, action) {
    Utils.trackEvent('instagram_post_interaction', {
        postId,
        action,
        filter: this.currentFilter
    });
}

// Public API methods
filterPosts(hashtag) {
    this.filterByHashtag(hashtag);
}

sortPosts(sortType) {
    const sortSelect = document.getElementById('instagram-sort');
    sortSelect.value = sortType;
    this.currentSort = sortType;
    this.renderFeed();
}

refreshFeed() {
    this.visiblePosts = 6;
    this.renderFeed();
}

getTotalPosts() {
    return this.feedData.posts.length;
}

getVisiblePosts() {
    return this.getFilteredAndSortedPosts().slice(0, this.visiblePosts).length;
}


// Initialize Instagram Feed when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Instagram feed
    if (typeof window.instagramFeed === 'undefined') {
        window.instagramFeed = new InstagramFeedIntegration();
    }
});

// Export for global access
window.InstagramFeedIntegration = InstagramFeedIntegration;

/* ===================================
   VIDEO BACKGROUNDS SUTILES SYSTEM
   =================================== */

// Video backgrounds data structure
const videoBackgroundsData = {
    hero: {
        id: 'hero-video-bg',
        videoSources: [
            {
                src: './videos/hero-juice-making.mp4',
                type: 'video/mp4',
                quality: 'hd'
            },
            {
                src: './videos/hero-juice-making-720p.mp4',
                type: 'video/mp4',
                quality: 'md'
            },
            {
                src: './videos/hero-juice-making-480p.mp4',
                type: 'video/mp4',
                quality: 'sd'
            }
        ],
        fallbackImage: './images/hero-video-fallback.jpg',
        poster: './images/hero-video-poster.jpg',
        overlay: 'dark',
        autoplay: true,
        loop: true,
        muted: true,
        playbackRate: 1.0,
        startTime: 0,
        endTime: null,
        fadeInDuration: 2000,
        priority: 'high'
    },

    about: {
        id: 'about-video-bg',
        videoSources: [
            {
                src: './videos/ingredients-preparation.mp4',
                type: 'video/mp4',
                quality: 'hd'
            },
            {
                src: './videos/ingredients-preparation-720p.mp4',
                type: 'video/mp4',
                quality: 'md'
            }
        ],
        fallbackImage: './images/about-video-fallback.jpg',
        poster: './images/about-video-poster.jpg',
        overlay: 'light',
        autoplay: true,
        loop: true,
        muted: true,
        playbackRate: 0.8,
        startTime: 5,
        endTime: 35,
        fadeInDuration: 1500,
        priority: 'medium'
    },

    testimonials: {
        id: 'testimonials-video-bg',
        videoSources: [
            {
                src: './videos/happy-customers.mp4',
                type: 'video/mp4',
                quality: 'hd'
            }
        ],
        fallbackImage: './images/testimonials-video-fallback.jpg',
        poster: './images/testimonials-video-poster.jpg',
        overlay: 'gradient',
        autoplay: true,
        loop: true,
        muted: true,
        playbackRate: 1.2,
        startTime: 0,
        endTime: null,
        fadeInDuration: 1000,
        priority: 'low'
    }
};

// Video Background System Class
class VideoBackgroundSystem {
    constructor() {
        this.videoBackgrounds = new Map();
        this.connectionSpeed = 'unknown';
        this.deviceCapabilities = {
            supportsVideo: true,
            supportsAutoplay: true,
            isLowPowerMode: false,
            hasSlowConnection: false
        };
        this.globalSettings = {
            enabled: true,
            respectDataSaver: true,
            respectReducedMotion: true,
            respectBatteryLevel: true,
            maxConcurrentVideos: 2,
            qualityThreshold: 'md'
        };
        this.activeVideos = 0;
        this.intersectionObserver = null;

        this.init();
    }

    init() {
        this.detectDeviceCapabilities();
        this.detectConnectionSpeed();
        this.createIntersectionObserver();
        this.initializeVideoBackgrounds();
        this.bindGlobalEvents();
        console.log('Video Background System initialized');
    }

    detectDeviceCapabilities() {
        // Check video support
        const video = document.createElement('video');
        this.deviceCapabilities.supportsVideo = video.canPlayType && video.canPlayType('video/mp4');

        // Check autoplay support
        this.checkAutoplaySupport().then(supported => {
            this.deviceCapabilities.supportsAutoplay = supported;
        });

        // Check for low power mode indicators
        this.deviceCapabilities.isLowPowerMode = this.detectLowPowerMode();

        // Check for reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.globalSettings.enabled = false;
            console.log('Video backgrounds disabled due to reduced motion preference');
        }

        // Check for data saver mode
        if (navigator.connection && navigator.connection.saveData) {
            this.deviceCapabilities.hasSlowConnection = true;
            this.globalSettings.qualityThreshold = 'sd';
            console.log('Data saver mode detected, using lower quality videos');
        }

        // Check battery level
        if ('getBattery' in navigator) {
            navigator.getBattery().then(battery => {
                if (battery.level < 0.2 || battery.charging === false) {
                    this.deviceCapabilities.isLowPowerMode = true;
                    console.log('Low battery detected, optimizing video playback');
                }
            });
        }
    }

    async checkAutoplaySupport() {
        const video = document.createElement('video');
        video.muted = true;
        video.autoplay = true;
        video.src = 'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMWF2YzEAAAAIZnJlZQAAAr1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE1MiByMjg1NCBlOWE1OTAzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNyAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTMgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAKxEAAAIAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ//hAAr+yP/C5YEAAAMAAQAAAwAIPFi2WAEABmjr48siwAAAABhzdHRzAAAAAAAAAAEAAAABAAAACAAAAAEAAAQAAAABAAAAGHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAAAAAAABAAAAEwAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYnVkdGEAAABabWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAtaWxzdAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ny44My4xMDA=';

        try {
            await video.play();
            return true;
        } catch (error) {
            return false;
        }
    }

    detectLowPowerMode() {
        // Check various indicators of low power mode
        const indicators = [
            navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4,
            navigator.deviceMemory && navigator.deviceMemory < 4,
            window.screen && window.screen.width < 768,
            navigator.connection && navigator.connection.effectiveType &&
            ['slow-2g', '2g', '3g'].includes(navigator.connection.effectiveType)
        ];

        return indicators.filter(Boolean).length >= 2;
    }

    detectConnectionSpeed() {
        if (navigator.connection) {
            const connection = navigator.connection;
            this.connectionSpeed = connection.effectiveType || 'unknown';

            // Adjust quality based on connection
            switch (connection.effectiveType) {
                case 'slow-2g':
                case '2g':
                    this.globalSettings.enabled = false;
                    break;
                case '3g':
                    this.globalSettings.qualityThreshold = 'sd';
                    this.globalSettings.maxConcurrentVideos = 1;
                    break;
                case '4g':
                    this.globalSettings.qualityThreshold = 'md';
                    break;
                default:
                    this.globalSettings.qualityThreshold = 'hd';
            }

            console.log(`Connection speed: ${connection.effectiveType}, Quality threshold: ${this.globalSettings.qualityThreshold}`);
        }
    }

    createIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        };

        this.intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const videoId = entry.target.dataset.videoId;
                const videoBackground = this.videoBackgrounds.get(videoId);

                if (entry.isIntersecting) {
                    this.loadVideoBackground(videoBackground);
                } else {
                    this.pauseVideoBackground(videoBackground);
                }
            });
        }, options);
    }

    initializeVideoBackgrounds() {
        Object.entries(videoBackgroundsData).forEach(([key, config]) => {
            this.createVideoBackground(key, config);
        });
    }

    createVideoBackground(sectionKey, config) {
        // Find target section
        const targetSection = this.findTargetSection(sectionKey);
        if (!targetSection) {
            console.warn(`Target section not found for video background: ${sectionKey}`);
            return;
        }

        // Create video background instance
        const videoBackground = new VideoBackground(targetSection, config, this);
        this.videoBackgrounds.set(config.id, videoBackground);

        // Add to intersection observer
        this.intersectionObserver.observe(targetSection);
        targetSection.dataset.videoId = config.id;

        console.log(`Video background created for section: ${sectionKey}`);
    }

    findTargetSection(sectionKey) {
        // Try different selectors based on section key
        const selectors = [
            `#${sectionKey}`,
            `.${sectionKey}`,
            `[data-section="${sectionKey}"]`,
            `.${sectionKey}-section`,
            `#${sectionKey}-section`
        ];

        for (const selector of selectors) {
            const element = document.querySelector(selector);
            if (element) return element;
        }

        // Special cases
        switch (sectionKey) {
            case 'hero':
                return document.querySelector('.hero') ||
                    document.querySelector('#hero-carousel-section') ||
                    document.querySelector('section:first-of-type');
            case 'about':
                return document.querySelector('.about') ||
                    document.querySelector('#about');
            case 'testimonials':
                return document.querySelector('#testimonials-carousel-section') ||
                    document.querySelector('.testimonials');
            default:
                return null;
        }
    }

    loadVideoBackground(videoBackground) {
        if (!this.globalSettings.enabled || !videoBackground) return;

        // Check if we can load another video
        if (this.activeVideos >= this.globalSettings.maxConcurrentVideos) {
            console.log('Max concurrent videos reached, queuing video background');
            return;
        }

        videoBackground.load();
    }

    pauseVideoBackground(videoBackground) {
        if (videoBackground) {
            videoBackground.pause();
        }
    }

    bindGlobalEvents() {
        // Handle visibility change
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAllVideos();
            } else {
                this.resumeVisibleVideos();
            }
        });

        // Handle connection change
        if (navigator.connection) {
            navigator.connection.addEventListener('change', () => {
                this.detectConnectionSpeed();
                this.adjustVideoQuality();
            });
        }

        // Handle battery change
        if ('getBattery' in navigator) {
            navigator.getBattery().then(battery => {
                battery.addEventListener('levelchange', () => {
                    if (battery.level < 0.15) {
                        this.enablePowerSaveMode();
                    }
                });
            });
        }

        // Handle resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });
    }

    pauseAllVideos() {
        this.videoBackgrounds.forEach(videoBackground => {
            videoBackground.pause();
        });
    }

    resumeVisibleVideos() {
        this.videoBackgrounds.forEach(videoBackground => {
            if (videoBackground.isVisible) {
                videoBackground.resume();
            }
        });
    }

    adjustVideoQuality() {
        this.videoBackgrounds.forEach(videoBackground => {
            videoBackground.adjustQuality(this.globalSettings.qualityThreshold);
        });
    }

    enablePowerSaveMode() {
        console.log('Enabling power save mode for video backgrounds');
        this.globalSettings.maxConcurrentVideos = 1;
        this.globalSettings.qualityThreshold = 'sd';

        // Pause non-critical videos
        this.videoBackgrounds.forEach(videoBackground => {
            if (videoBackground.config.priority !== 'high') {
                videoBackground.pause();
            }
        });
    }

    handleResize() {
        this.videoBackgrounds.forEach(videoBackground => {
            videoBackground.handleResize();
        });
    }

    // Public API methods
    enableVideoBackground(videoId) {
        const videoBackground = this.videoBackgrounds.get(videoId);
        if (videoBackground) {
            videoBackground.enable();
        }
    }

    disableVideoBackground(videoId) {
        const videoBackground = this.videoBackgrounds.get(videoId);
        if (videoBackground) {
            videoBackground.disable();
        }
    }

    toggleVideoBackground(videoId) {
        const videoBackground = this.videoBackgrounds.get(videoId);
        if (videoBackground) {
            videoBackground.toggle();
        }
    }

    setGlobalEnabled(enabled) {
        this.globalSettings.enabled = enabled;

        if (enabled) {
            this.resumeVisibleVideos();
        } else {
            this.pauseAllVideos();
        }
    }

    getVideoBackground(videoId) {
        return this.videoBackgrounds.get(videoId);
    }

    getAllVideoBackgrounds() {
        return Array.from(this.videoBackgrounds.values());
    }

    destroy() {
        this.pauseAllVideos();
        this.videoBackgrounds.forEach(videoBackground => {
            videoBackground.destroy();
        });
        this.videoBackgrounds.clear();

        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
        }

        console.log('Video Background System destroyed');
    }
}

// Individual Video Background Class
class VideoBackground {
    constructor(targetElement, config, system) {
        this.targetElement = targetElement;
        this.config = config;
        this.system = system;
        this.videoElement = null;
        this.containerElement = null;
        this.overlayElement = null;
        this.controlsElement = null;
        this.isLoaded = false;
        this.isPlaying = false;
        this.isVisible = false;
        this.isEnabled = true;
        this.currentQuality = 'md';
        this.loadTimeout = null;
        this.retryCount = 0;
        this.maxRetries = 3;

        this.createVideoBackground();
    }

    createVideoBackground() {
        // Create container
        this.containerElement = document.createElement('div');
        this.containerElement.className = 'video-background';
        this.containerElement.dataset.videoId = this.config.id;

        // Create video element
        this.videoElement = document.createElement('video');
        this.videoElement.className = 'video-background__video';
        this.videoElement.muted = this.config.muted;
        this.videoElement.loop = this.config.loop;
        this.videoElement.autoplay = false; // We'll handle autoplay manually
        this.videoElement.playsInline = true;
        this.videoElement.preload = 'none';
        this.videoElement.poster = this.config.poster;

        // Set playback rate
        if (this.config.playbackRate !== 1.0) {
            this.videoElement.playbackRate = this.config.playbackRate;
        }

        // Create overlay
        this.overlayElement = document.createElement('div');
        this.overlayElement.className = `video-background__overlay video-background__overlay--${this.config.overlay}`;

        // Create controls
        this.createControls();

        // Assemble structure
        this.containerElement.appendChild(this.videoElement);
        this.containerElement.appendChild(this.overlayElement);
        this.containerElement.appendChild(this.controlsElement);

        // Insert into target element
        this.targetElement.style.position = 'relative';
        this.targetElement.insertBefore(this.containerElement, this.targetElement.firstChild);

        // Bind events
        this.bindEvents();

        console.log(`Video background container created: ${this.config.id}`);
    }

    createControls() {
        this.controlsElement = document.createElement('div');
        this.controlsElement.className = 'video-background__controls';

        this.controlsElement.innerHTML = `
            <button class="video-background__control video-background__play-pause" title="Reproducir/Pausar">
                <i class="ri-play-line"></i>
            </button>
            <button class="video-background__control video-background__mute" title="Silenciar/Activar sonido">
                <i class="ri-volume-mute-line"></i>
            </button>
            <button class="video-background__control video-background__quality" title="Calidad de video">
                <i class="ri-hd-line"></i>
            </button>
            <button class="video-background__control video-background__toggle" title="Activar/Desactivar video">
                <i class="ri-eye-line"></i>
            </button>
        `;
    }

    bindEvents() {
        // Video events
        this.videoElement.addEventListener('loadstart', () => {
            console.log(`Video loading started: ${this.config.id}`);
        });

        this.videoElement.addEventListener('canplay', () => {
            this.handleVideoCanPlay();
        });

        this.videoElement.addEventListener('play', () => {
            this.isPlaying = true;
            this.system.activeVideos++;
            this.updatePlayPauseButton();
        });

        this.videoElement.addEventListener('pause', () => {
            this.isPlaying = false;
            this.system.activeVideos--;
            this.updatePlayPauseButton();
        });

        this.videoElement.addEventListener('error', (e) => {
            this.handleVideoError(e);
        });

        this.videoElement.addEventListener('ended', () => {
            if (this.config.loop) {
                this.videoElement.currentTime = this.config.startTime || 0;
                this.videoElement.play();
            }
        });

        // Control events
        const playPauseBtn = this.controlsElement.querySelector('.video-background__play-pause');
        const muteBtn = this.controlsElement.querySelector('.video-background__mute');
        const qualityBtn = this.controlsElement.querySelector('.video-background__quality');
        const toggleBtn = this.controlsElement.querySelector('.video-background__toggle');

        playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        muteBtn.addEventListener('click', () => this.toggleMute());
        qualityBtn.addEventListener('click', () => this.cycleQuality());
        toggleBtn.addEventListener('click', () => this.toggle());

        // Show/hide controls on hover
        this.containerElement.addEventListener('mouseenter', () => {
            this.controlsElement.classList.add('visible');
        });

        this.containerElement.addEventListener('mouseleave', () => {
            this.controlsElement.classList.remove('visible');
        });
    }

    load() {
        if (this.isLoaded || !this.isEnabled) return;

        this.isVisible = true;

        // Select appropriate video source based on quality threshold
        const videoSource = this.selectVideoSource();
        if (!videoSource) {
            this.showFallbackImage();
            return;
        }

        // Set video source
        this.videoElement.src = videoSource.src;
        this.videoElement.preload = 'metadata';
        this.currentQuality = videoSource.quality;

        // Set loading timeout
        this.loadTimeout = setTimeout(() => {
            if (!this.isLoaded) {
                console.warn(`Video loading timeout: ${this.config.id}`);
                this.handleVideoError();
            }
        }, 10000); // 10 second timeout

        // Start loading
        this.videoElement.load();

        console.log(`Loading video background: ${this.config.id} (${videoSource.quality})`);
    }

    selectVideoSource() {
        const qualityPriority = ['hd', 'md', 'sd'];
        const maxQualityIndex = qualityPriority.indexOf(this.system.globalSettings.qualityThreshold);

        // Filter sources by quality threshold
        const availableSources = this.config.videoSources.filter(source => {
            const qualityIndex = qualityPriority.indexOf(source.quality);
            return qualityIndex >= maxQualityIndex;
        });

        // Return best available source
        return availableSources[0] || this.config.videoSources[this.config.videoSources.length - 1];
    }

    handleVideoCanPlay() {
        if (this.loadTimeout) {
            clearTimeout(this.loadTimeout);
            this.loadTimeout = null;
        }

        this.isLoaded = true;

        // Set start time if specified
        if (this.config.startTime) {
            this.videoElement.currentTime = this.config.startTime;
        }

        // Set playback rate
        this.videoElement.playbackRate = this.config.playbackRate;

        // Fade in video
        this.fadeInVideo();

        // Auto-play if enabled and supported
        if (this.config.autoplay && this.system.deviceCapabilities.supportsAutoplay) {
            this.play();
        }

        console.log(`Video background ready: ${this.config.id}`);
    }

    handleVideoError(error) {
        console.error(`Video background error: ${this.config.id}`, error);

        this.retryCount++;
        if (this.retryCount < this.maxRetries) {
            console.log(`Retrying video load: ${this.config.id} (attempt ${this.retryCount + 1})`);
            setTimeout(() => {
                this.load();
            }, 2000 * this.retryCount);
        } else {
            console.warn(`Max retries reached for video: ${this.config.id}, showing fallback`);
            this.showFallbackImage();
        }
    }

    showFallbackImage() {
        this.containerElement.classList.add('fallback');
        this.containerElement.style.backgroundImage = `url(${this.config.fallbackImage})`;
        this.videoElement.style.display = 'none';

        console.log(`Showing fallback image for: ${this.config.id}`);
    }

    fadeInVideo() {
        this.videoElement.style.opacity = '0';
        this.videoElement.style.transition = `opacity ${this.config.fadeInDuration}ms ease`;

        // Force reflow
        this.videoElement.offsetHeight;

        // Fade in
        this.videoElement.style.opacity = '1';
    }

    play() {
        if (!this.isLoaded || !this.isEnabled) return;

        const playPromise = this.videoElement.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log(`Video background playing: ${this.config.id}`);
            }).catch(error => {
                console.warn(`Video autoplay failed: ${this.config.id}`, error);
                // Show play button or handle gracefully
                this.handleAutoplayFailure();
            });
        }
    }

    pause() {
        if (this.videoElement && !this.videoElement.paused) {
            this.videoElement.pause();
        }
        this.isVisible = false;
    }

    resume() {
        if (this.isLoaded && this.isEnabled && this.isVisible) {
            this.play();
        }
    }

    togglePlayPause() {
        if (this.videoElement.paused) {
            this.play();
        } else {
            this.videoElement.pause();
        }
    }

    toggleMute() {
        this.videoElement.muted = !this.videoElement.muted;
        this.updateMuteButton();
    }

    cycleQuality() {
        const qualities = ['sd', 'md', 'hd'];
        const currentIndex = qualities.indexOf(this.currentQuality);
        const nextIndex = (currentIndex + 1) % qualities.length;
        const nextQuality = qualities[nextIndex];

        this.adjustQuality(nextQuality);
    }

    adjustQuality(targetQuality) {
        if (this.currentQuality === targetQuality) return;

        const videoSource = this.config.videoSources.find(source => source.quality === targetQuality);
        if (!videoSource) return;

        const currentTime = this.videoElement.currentTime;
        const wasPlaying = !this.videoElement.paused;

        this.videoElement.src = videoSource.src;
        this.currentQuality = targetQuality;

        this.videoElement.addEventListener('canplay', () => {
            this.videoElement.currentTime = currentTime;
            if (wasPlaying) {
                this.play();
            }
        }, { once: true });

        this.videoElement.load();
        this.updateQualityButton();

        console.log(`Video quality changed to: ${targetQuality} for ${this.config.id}`);
    }

    toggle() {
        this.isEnabled = !this.isEnabled;

        if (this.isEnabled) {
            this.containerElement.style.display = 'block';
            if (this.isVisible) {
                this.resume();
            }
        } else {
            this.containerElement.style.display = 'none';
            this.pause();
        }

        this.updateToggleButton();
    }

    enable() {
        this.isEnabled = true;
        this.containerElement.style.display = 'block';
        this.updateToggleButton();
    }

    disable() {
        this.isEnabled = false;
        this.pause();
        this.containerElement.style.display = 'none';
        this.updateToggleButton();
    }

    handleAutoplayFailure() {
        // Show a subtle play button overlay
        const playOverlay = document.createElement('div');
        playOverlay.className = 'video-background__play-overlay';
        playOverlay.innerHTML = `
            <button class="video-background__play-overlay-btn">
                <i class="ri-play-circle-line"></i>
                <span>Reproducir video</span>
            </button>
        `;

        playOverlay.addEventListener('click', () => {
            this.play();
            playOverlay.remove();
        });

        this.containerElement.appendChild(playOverlay);
    }

    handleResize() {
        // Adjust video dimensions if needed
        if (this.videoElement && this.isLoaded) {
            // Force video to maintain aspect ratio
            this.videoElement.style.width = '100%';
            this.videoElement.style.height = '100%';
        }
    }

    updatePlayPauseButton() {
        const btn = this.controlsElement.querySelector('.video-background__play-pause i');
        if (this.isPlaying) {
            btn.className = 'ri-pause-line';
        } else {
            btn.className = 'ri-play-line';
        }
    }

    updateMuteButton() {
        const btn = this.controlsElement.querySelector('.video-background__mute i');
        if (this.videoElement.muted) {
            btn.className = 'ri-volume-mute-line';
        } else {
            btn.className = 'ri-volume-up-line';
        }
    }

    updateQualityButton() {
        const btn = this.controlsElement.querySelector('.video-background__quality i');
        switch (this.currentQuality) {
            case 'hd':
                btn.className = 'ri-hd-line';
                break;
            case 'md':
                btn.className = 'ri-video-line';
                break;
            case 'sd':
                btn.className = 'ri-video-download-line';
                break;
        }
    }

    updateToggleButton() {
        const btn = this.controlsElement.querySelector('.video-background__toggle i');
        if (this.isEnabled) {
            btn.className = 'ri-eye-line';
        } else {
            btn.className = 'ri-eye-off-line';
        }
    }

    destroy() {
        this.pause();

        if (this.loadTimeout) {
            clearTimeout(this.loadTimeout);
        }

        if (this.containerElement && this.containerElement.parentNode) {
            this.containerElement.parentNode.removeChild(this.containerElement);
        }

        console.log(`Video background destroyed: ${this.config.id}`);
    }
}

// Initialize Video Background System when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Initialize video background system
    if (typeof window.videoBackgroundSystem === 'undefined') {
        window.videoBackgroundSystem = new VideoBackgroundSystem();
    }
});

// Export for global access
window.VideoBackgroundSystem = VideoBackgroundSystem;
window.VideoBackground = VideoBackground;
/* ===================================
   VIDEO BACKGROUNDS SYSTEM (DUPLICATE - REMOVED)
   =================================== */

// Note: videoBackgroundsData already declared above - using existing declaration
// Removed duplicate declaration to fix "Cannot redeclare block-scoped variable" error

// Duplicate VideoBackgroundSystem class removed to fix "Cannot redeclare block-scoped variable" error
// The original VideoBackgroundSystem class is already declared above in the file
/* ===================================
   NEWSLETTER SIGNUP MODERN SYSTEM
   =================================== */

// Newsletter configuration and data
const newsletterConfig = {
    // Timing settings
    timing: {
        showAfterSeconds: 30,
        showAfterScrollPercent: 50,
        showAfterPageViews: 2,
        showAfterInactivity: 45,
        hideAfterSeconds: 300,
        reminderAfterDays: 7
    },

    // Behavior settings
    behavior: {
        showOnExit: true,
        showOnMobile: true,
        showOnReturn: true,
        respectDoNotTrack: true,
        maxShowsPerSession: 2,
        maxShowsPerDay: 3
    },

    // Incentives and offers
    incentives: [
        {
            id: 'welcome-discount',
            title: '¡Bienvenido a Fres-Kuras!',
            subtitle: 'Obtén 15% de descuento en tu primera orden',
            description: 'Suscríbete a nuestro newsletter y recibe ofertas exclusivas, recetas saludables y tips de nutrición.',
            discount: '15%',
            code: 'WELCOME15',
            validDays: 30,
            icon: 'ri-gift-line',
            color: '#4CAF50'
        },
        {
            id: 'health-tips',
            title: 'Tips de Salud Semanales',
            subtitle: 'Recibe consejos de nutrición personalizados',
            description: 'Únete a más de 5,000 personas que ya reciben nuestros consejos de salud y recetas exclusivas.',
            discount: null,
            code: null,
            validDays: null,
            icon: 'ri-heart-pulse-line',
            color: '#FF5722'
        },
        {
            id: 'early-access',
            title: 'Acceso Anticipado',
            subtitle: 'Sé el primero en conocer nuevos productos',
            description: 'Acceso exclusivo a nuevos sabores, promociones especiales y eventos privados.',
            discount: null,
            code: null,
            validDays: null,
            icon: 'ri-vip-crown-line',
            color: '#9C27B0'
        }
    ],

    // Email marketing integration
    emailService: {
        provider: 'mailchimp', // mailchimp, sendinblue, etc.
        apiEndpoint: '/api/newsletter/subscribe',
        listId: 'fres-kuras-main',
        doubleOptIn: true,
        sendWelcomeEmail: true,
        tags: ['website-signup', 'juice-lovers']
    }
};

// Newsletter Signup System Class
class NewsletterSignupSystem {
    constructor() {
        this.config = newsletterConfig;
        this.isVisible = false;
        this.hasBeenShown = false;
        this.showCount = 0;
        this.currentIncentive = null;
        this.userInteractions = {
            scrollPercent: 0,
            timeOnPage: 0,
            pageViews: this.getPageViews(),
            lastActivity: Date.now(),
            hasInteracted: false
        };
        this.modal = null;
        this.exitIntentListener = null;
        this.timers = {
            showTimer: null,
            hideTimer: null,
            inactivityTimer: null
        };

        this.init();
    }

    init() {
        // Check if should show newsletter popup
        if (!this.shouldShowNewsletter()) {
            console.log('Newsletter popup disabled by user preferences or limits');
            return;
        }

        this.createNewsletterModal();
        this.bindEvents();
        this.startTracking();
        this.scheduleShow();

        console.log('Newsletter Signup System initialized');
    }

    shouldShowNewsletter() {
        // Check Do Not Track preference
        if (this.config.behavior.respectDoNotTrack && navigator.doNotTrack === '1') {
            return false;
        }

        // Check if already subscribed
        if (localStorage.getItem('newsletter-subscribed') === 'true') {
            return false;
        }

        // Check if dismissed recently
        const lastDismissed = localStorage.getItem('newsletter-dismissed');
        if (lastDismissed) {
            const daysSinceDismissed = (Date.now() - parseInt(lastDismissed)) / (1000 * 60 * 60 * 24);
            if (daysSinceDismissed < this.config.timing.reminderAfterDays) {
                return false;
            }
        }

        // Check daily show limit
        const todayShows = this.getTodayShows();
        if (todayShows >= this.config.behavior.maxShowsPerDay) {
            return false;
        }

        // Check mobile setting
        if (!this.config.behavior.showOnMobile && this.isMobileDevice()) {
            return false;
        }

        return true;
    }

    createNewsletterModal() {
        // Select random incentive or use default
        this.currentIncentive = this.selectIncentive();

        const modalHTML = `
            <div class="newsletter-modal" id="newsletter-modal">
                <div class="newsletter-modal__overlay"></div>
                <div class="newsletter-modal__container">
                    <button class="newsletter-modal__close" title="Cerrar">
                        <i class="ri-close-line"></i>
                    </button>
                    
                    <div class="newsletter-modal__content">
                        <div class="newsletter-modal__header">
                            <div class="newsletter-modal__icon" style="color: ${this.currentIncentive.color}">
                                <i class="${this.currentIncentive.icon}"></i>
                            </div>
                            <h2 class="newsletter-modal__title">${this.currentIncentive.title}</h2>
                            <h3 class="newsletter-modal__subtitle">${this.currentIncentive.subtitle}</h3>
                        </div>
                        
                        <div class="newsletter-modal__body">
                            <p class="newsletter-modal__description">${this.currentIncentive.description}</p>
                            
                            ${this.currentIncentive.discount ? `
                                <div class="newsletter-modal__offer">
                                    <div class="newsletter-modal__discount">${this.currentIncentive.discount} OFF</div>
                                    <div class="newsletter-modal__code">
                                        Código: <strong>${this.currentIncentive.code}</strong>
                                    </div>
                                </div>
                            ` : ''}
                            
                            <form class="newsletter-modal__form" id="newsletter-form">
                                <div class="newsletter-modal__input-group">
                                    <input type="email" 
                                           class="newsletter-modal__input" 
                                           id="newsletter-email"
                                           placeholder="tu@email.com" 
                                           required>
                                    <label for="newsletter-email" class="newsletter-modal__label">Email</label>
                                </div>
                                
                                <div class="newsletter-modal__input-group">
                                    <input type="text" 
                                           class="newsletter-modal__input" 
                                           id="newsletter-name"
                                           placeholder="Tu nombre">
                                    <label for="newsletter-name" class="newsletter-modal__label">Nombre (opcional)</label>
                                </div>
                                
                                <div class="newsletter-modal__preferences">
                                    <h4>Intereses (opcional):</h4>
                                    <div class="newsletter-modal__checkboxes">
                                        <label class="newsletter-modal__checkbox">
                                            <input type="checkbox" value="jugos-naturales" checked>
                                            <span class="newsletter-modal__checkbox-text">Jugos Naturales</span>
                                        </label>
                                        <label class="newsletter-modal__checkbox">
                                            <input type="checkbox" value="recetas-saludables">
                                            <span class="newsletter-modal__checkbox-text">Recetas Saludables</span>
                                        </label>
                                        <label class="newsletter-modal__checkbox">
                                            <input type="checkbox" value="tips-nutricion">
                                            <span class="newsletter-modal__checkbox-text">Tips de Nutrición</span>
                                        </label>
                                        <label class="newsletter-modal__checkbox">
                                            <input type="checkbox" value="ofertas-especiales">
                                            <span class="newsletter-modal__checkbox-text">Ofertas Especiales</span>
                                        </label>
                                    </div>
                                </div>
                                
                                <button type="submit" class="newsletter-modal__submit btn btn--primary">
                                    <i class="ri-mail-send-line"></i>
                                    <span class="newsletter-modal__submit-text">Suscribirme Ahora</span>
                                    <div class="newsletter-modal__submit-loader">
                                        <i class="ri-loader-4-line"></i>
                                    </div>
                                </button>
                                
                                <p class="newsletter-modal__privacy">
                                    <i class="ri-shield-check-line"></i>
                                    No spam. Puedes cancelar tu suscripción en cualquier momento.
                                </p>
                            </form>
                        </div>
                        
                        <div class="newsletter-modal__footer">
                            <button class="newsletter-modal__later" id="newsletter-later">
                                Recordármelo después
                            </button>
                            <button class="newsletter-modal__never" id="newsletter-never">
                                No mostrar de nuevo
                            </button>
                        </div>
                    </div>
                    
                    <div class="newsletter-modal__success" id="newsletter-success" style="display: none;">
                        <div class="newsletter-modal__success-icon">
                            <i class="ri-check-double-line"></i>
                        </div>
                        <h2 class="newsletter-modal__success-title">¡Gracias por suscribirte!</h2>
                        <p class="newsletter-modal__success-message">
                            Hemos enviado un email de confirmación a tu bandeja de entrada. 
                            ${this.currentIncentive.discount ? `Tu código de descuento <strong>${this.currentIncentive.code}</strong> estará disponible después de confirmar tu suscripción.` : ''}
                        </p>
                        <button class="newsletter-modal__success-close btn btn--primary">
                            <i class="ri-close-line"></i>
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modal = document.getElementById('newsletter-modal');
    }

    selectIncentive() {
        // Select incentive based on user behavior or randomly
        const incentives = this.config.incentives;

        // If user has been on site for a while, show discount
        if (this.userInteractions.timeOnPage > 60) {
            return incentives.find(i => i.id === 'welcome-discount') || incentives[0];
        }

        // If user has high scroll engagement, show health tips
        if (this.userInteractions.scrollPercent > 70) {
            return incentives.find(i => i.id === 'health-tips') || incentives[1];
        }

        // If returning visitor, show early access
        if (this.userInteractions.pageViews > 3) {
            return incentives.find(i => i.id === 'early-access') || incentives[2];
        }

        // Default to first incentive
        return incentives[0];
    }

    bindEvents() {
        if (!this.modal) return;

        // Close button
        const closeBtn = this.modal.querySelector('.newsletter-modal__close');
        closeBtn.addEventListener('click', () => {
            this.hideModal('close-button');
        });

        // Overlay click
        const overlay = this.modal.querySelector('.newsletter-modal__overlay');
        overlay.addEventListener('click', () => {
            this.hideModal('overlay-click');
        });

        // Form submission
        const form = this.modal.querySelector('#newsletter-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission(form);
        });

        // Later button
        const laterBtn = this.modal.querySelector('#newsletter-later');
        laterBtn.addEventListener('click', () => {
            this.hideModal('remind-later');
        });

        // Never show button
        const neverBtn = this.modal.querySelector('#newsletter-never');
        neverBtn.addEventListener('click', () => {
            this.hideModal('never-show');
        });

        // Success close button
        const successCloseBtn = this.modal.querySelector('.newsletter-modal__success-close');
        successCloseBtn.addEventListener('click', () => {
            this.hideModal('success-close');
        });

        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isVisible) {
                this.hideModal('escape-key');
            }
        });

        // Exit intent detection
        if (this.config.behavior.showOnExit) {
            this.bindExitIntent();
        }
    }

    bindExitIntent() {
        this.exitIntentListener = (e) => {
            // Check if mouse is leaving the top of the page
            if (e.clientY <= 0 && !this.hasBeenShown) {
                this.showModal('exit-intent');
            }
        };

        document.addEventListener('mouseleave', this.exitIntentListener);
    }

    startTracking() {
        // Track scroll percentage
        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round(
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
            );
            this.userInteractions.scrollPercent = Math.max(this.userInteractions.scrollPercent, scrollPercent);
            this.userInteractions.lastActivity = Date.now();
            this.userInteractions.hasInteracted = true;
        });

        // Track time on page
        setInterval(() => {
            this.userInteractions.timeOnPage++;
        }, 1000);

        // Track user activity
        ['click', 'mousemove', 'keypress', 'scroll'].forEach(event => {
            document.addEventListener(event, () => {
                this.userInteractions.lastActivity = Date.now();
                this.userInteractions.hasInteracted = true;
            });
        });

        // Track inactivity
        this.startInactivityTimer();
    }

    startInactivityTimer() {
        this.timers.inactivityTimer = setInterval(() => {
            const inactiveTime = (Date.now() - this.userInteractions.lastActivity) / 1000;

            if (inactiveTime >= this.config.timing.showAfterInactivity &&
                !this.hasBeenShown &&
                this.userInteractions.hasInteracted) {
                this.showModal('inactivity');
            }
        }, 5000);
    }

    scheduleShow() {
        // Show after time
        this.timers.showTimer = setTimeout(() => {
            if (!this.hasBeenShown) {
                this.showModal('time-based');
            }
        }, this.config.timing.showAfterSeconds * 1000);

        // Check scroll-based trigger
        const checkScrollTrigger = () => {
            if (this.userInteractions.scrollPercent >= this.config.timing.showAfterScrollPercent &&
                !this.hasBeenShown) {
                this.showModal('scroll-based');
            }
        };

        window.addEventListener('scroll', checkScrollTrigger);

        // Check page views trigger
        if (this.userInteractions.pageViews >= this.config.timing.showAfterPageViews &&
            !this.hasBeenShown) {
            setTimeout(() => {
                this.showModal('page-views');
            }, 5000);
        }
    }

    showModal(trigger) {
        if (this.isVisible || this.hasBeenShown) return;

        // Check session and daily limits
        if (this.showCount >= this.config.behavior.maxShowsPerSession) return;

        const todayShows = this.getTodayShows();
        if (todayShows >= this.config.behavior.maxShowsPerDay) return;

        this.isVisible = true;
        this.hasBeenShown = true;
        this.showCount++;

        // Update show counts
        this.updateShowCounts();

        // Show modal with animation
        this.modal.classList.add('newsletter-modal--show');
        document.body.style.overflow = 'hidden';

        // Auto-hide timer
        this.timers.hideTimer = setTimeout(() => {
            if (this.isVisible) {
                this.hideModal('auto-hide');
            }
        }, this.config.timing.hideAfterSeconds * 1000);

        // Track show event
        this.trackEvent('newsletter_popup_shown', {
            trigger: trigger,
            incentive: this.currentIncentive.id,
            time_on_page: this.userInteractions.timeOnPage,
            scroll_percent: this.userInteractions.scrollPercent,
            page_views: this.userInteractions.pageViews
        });

        console.log(`Newsletter modal shown (trigger: ${trigger})`);
    }

    hideModal(reason) {
        if (!this.isVisible) return;

        this.isVisible = false;
        this.modal.classList.remove('newsletter-modal--show');
        document.body.style.overflow = 'auto';

        // Clear timers
        Object.values(this.timers).forEach(timer => {
            if (timer) clearTimeout(timer);
        });

        // Handle different close reasons
        switch (reason) {
            case 'remind-later':
                // Set reminder for later
                localStorage.setItem('newsletter-remind-later', Date.now().toString());
                break;

            case 'never-show':
                // Never show again
                localStorage.setItem('newsletter-dismissed', Date.now().toString());
                break;

            case 'success-close':
                // Mark as subscribed
                localStorage.setItem('newsletter-subscribed', 'true');
                break;
        }

        // Track hide event
        this.trackEvent('newsletter_popup_hidden', {
            reason: reason,
            time_visible: Date.now() - this.showTime,
            incentive: this.currentIncentive.id
        });

        console.log(`Newsletter modal hidden (reason: ${reason})`);
    }

    async handleFormSubmission(form) {
        const submitBtn = form.querySelector('.newsletter-modal__submit');
        const submitText = submitBtn.querySelector('.newsletter-modal__submit-text');
        const submitLoader = submitBtn.querySelector('.newsletter-modal__submit-loader');

        // Show loading state
        submitBtn.disabled = true;
        submitText.style.opacity = '0';
        submitLoader.style.display = 'block';

        try {
            // Collect form data
            const formData = this.collectFormData(form);

            // Submit to email service
            const result = await this.submitToEmailService(formData);

            if (result.success) {
                this.showSuccessState();
                this.trackEvent('newsletter_subscription_success', {
                    incentive: this.currentIncentive.id,
                    interests: formData.interests,
                    has_name: !!formData.name
                });
            } else {
                throw new Error(result.message || 'Subscription failed');
            }

        } catch (error) {
            console.error('Newsletter subscription error:', error);
            this.showErrorState(error.message);
            this.trackEvent('newsletter_subscription_error', {
                error: error.message,
                incentive: this.currentIncentive.id
            });
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            submitText.style.opacity = '1';
            submitLoader.style.display = 'none';
        }
    }

    collectFormData(form) {
        const email = form.querySelector('#newsletter-email').value;
        const name = form.querySelector('#newsletter-name').value;
        const interests = Array.from(form.querySelectorAll('input[type="checkbox"]:checked'))
            .map(cb => cb.value);

        return {
            email: email,
            name: name || null,
            interests: interests,
            incentive: this.currentIncentive.id,
            source: 'website-popup',
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            referrer: document.referrer,
            pageUrl: window.location.href
        };
    }

    async submitToEmailService(formData) {
        // Simulate API call - replace with actual email service integration
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simulate success/failure
                const success = Math.random() > 0.1; // 90% success rate

                if (success) {
                    resolve({
                        success: true,
                        message: 'Subscription successful',
                        subscriberId: 'sub_' + Date.now()
                    });
                } else {
                    resolve({
                        success: false,
                        message: 'Email already subscribed or invalid'
                    });
                }
            }, 2000);
        });

        // Real implementation would look like:
        /*
        try {
            const response = await fetch(this.config.emailService.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    listId: this.config.emailService.listId,
                    doubleOptIn: this.config.emailService.doubleOptIn,
                    tags: this.config.emailService.tags
                })
            });
            
            return await response.json();
        } catch (error) {
            throw new Error('Network error: ' + error.message);
        }
        */
    }

    showSuccessState() {
        const content = this.modal.querySelector('.newsletter-modal__content');
        const success = this.modal.querySelector('.newsletter-modal__success');

        content.style.display = 'none';
        success.style.display = 'block';

        // Auto-close after success
        setTimeout(() => {
            this.hideModal('success-close');
        }, 5000);
    }

    showErrorState(message) {
        // Create error message element
        const form = this.modal.querySelector('#newsletter-form');
        let errorDiv = form.querySelector('.newsletter-modal__error');

        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'newsletter-modal__error';
            form.insertBefore(errorDiv, form.querySelector('.newsletter-modal__submit'));
        }

        errorDiv.innerHTML = `
            <i class="ri-error-warning-line"></i>
            <span>${message || 'Ocurrió un error. Por favor intenta de nuevo.'}</span>
        `;

        errorDiv.style.display = 'flex';

        // Hide error after 5 seconds
        setTimeout(() => {
            errorDiv.style.display = 'none';
        }, 5000);
    }

    // Utility methods
    getPageViews() {
        const views = localStorage.getItem('page-views');
        return views ? parseInt(views) + 1 : 1;
    }

    getTodayShows() {
        const today = new Date().toDateString();
        const showsData = localStorage.getItem('newsletter-shows-today');

        if (showsData) {
            const data = JSON.parse(showsData);
            if (data.date === today) {
                return data.count;
            }
        }

        return 0;
    }

    updateShowCounts() {
        // Update page views
        localStorage.setItem('page-views', this.userInteractions.pageViews.toString());

        // Update today's shows
        const today = new Date().toDateString();
        const currentShows = this.getTodayShows();

        localStorage.setItem('newsletter-shows-today', JSON.stringify({
            date: today,
            count: currentShows + 1
        }));
    }

    isMobileDevice() {
        return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    trackEvent(eventName, properties) {
        Utils.trackEvent(eventName, properties);
    }

    // Public API methods
    show(trigger = 'manual') {
        this.showModal(trigger);
    }

    hide(reason = 'manual') {
        this.hideModal(reason);
    }

    isCurrentlyVisible() {
        return this.isVisible;
    }

    getStats() {
        return {
            hasBeenShown: this.hasBeenShown,
            showCount: this.showCount,
            currentIncentive: this.currentIncentive.id,
            userInteractions: this.userInteractions,
            todayShows: this.getTodayShows()
        };
    }

    destroy() {
        // Clear timers
        Object.values(this.timers).forEach(timer => {
            if (timer) clearTimeout(timer);
        });

        // Remove exit intent listener
        if (this.exitIntentListener) {
            document.removeEventListener('mouseleave', this.exitIntentListener);
        }

        // Remove modal
        if (this.modal) {
            this.modal.remove();
        }

        console.log('Newsletter Signup System destroyed');
    }
}

// Initialize Newsletter Signup System when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Initialize newsletter system with delay to ensure page is fully loaded
    setTimeout(() => {
        if (typeof window.newsletterSignup === 'undefined') {
            window.newsletterSignup = new NewsletterSignupSystem();
        }
    }, 2000);
});

// Export for global access
window.NewsletterSignupSystem = NewsletterSignupSystem;/* ====
===============================
   LOYALTY PROGRAM SHOWCASE SYSTEM
   =================================== */

// Loyalty program data structure
const loyaltyProgramData = {
    program: {
        name: 'Fresh Rewards',
        description: 'Programa de lealtad que te recompensa por cada compra',
        currency: 'puntos',
        currencySymbol: '⭐',
        levels: [
            {
                id: 'bronze',
                name: 'Bronce',
                minPoints: 0,
                maxPoints: 499,
                color: '#CD7F32',
                icon: 'ri-medal-line',
                benefits: [
                    'Puntos por cada compra',
                    'Ofertas especiales mensuales',
                    'Acceso a recetas exclusivas'
                ],
                multiplier: 1
            },
            {
                id: 'silver',
                name: 'Plata',
                minPoints: 500,
                maxPoints: 1499,
                color: '#C0C0C0',
                icon: 'ri-medal-2-line',
                benefits: [
                    'Todos los beneficios Bronce',
                    '1.5x puntos por compra',
                    'Descuentos exclusivos 10%',
                    'Envío gratis en pedidos +$200'
                ],
                multiplier: 1.5
            },
            {
                id: 'gold',
                name: 'Oro',
                minPoints: 1500,
                maxPoints: 2999,
                color: '#FFD700',
                icon: 'ri-vip-crown-line',
                benefits: [
                    'Todos los beneficios Plata',
                    '2x puntos por compra',
                    'Descuentos exclusivos 15%',
                    'Acceso anticipado a nuevos productos',
                    'Consulta nutricional gratuita'
                ],
                multiplier: 2
            },
            {
                id: 'platinum',
                name: 'Platino',
                minPoints: 3000,
                maxPoints: Infinity,
                color: '#E5E4E2',
                icon: 'ri-vip-diamond-line',
                benefits: [
                    'Todos los beneficios Oro',
                    '3x puntos por compra',
                    'Descuentos exclusivos 20%',
                    'Productos personalizados',
                    'Eventos VIP exclusivos',
                    'Concierge de bienestar personal'
                ],
                multiplier: 3
            }
        ],

        rewards: [
            {
                id: 'free-juice',
                name: 'Jugo Gratis',
                description: 'Cualquier jugo natural de 250ml',
                points: 100,
                category: 'products',
                icon: 'ri-drop-line',
                image: './images/rewards/free-juice.jpg'
            },
            {
                id: 'discount-10',
                name: '10% Descuento',
                description: 'En tu próxima compra',
                points: 150,
                category: 'discounts',
                icon: 'ri-percent-line',
                image: './images/rewards/discount-10.jpg'
            },
            {
                id: 'free-frappuccino',
                name: 'Frappuccino Gratis',
                description: 'Cualquier frappuccino de nuestra carta',
                points: 200,
                category: 'products',
                icon: 'ri-cup-line',
                image: './images/rewards/free-frappuccino.jpg'
            },
            {
                id: 'nutrition-consultation',
                name: 'Consulta Nutricional',
                description: 'Sesión de 30 min con nutricionista',
                points: 300,
                category: 'services',
                icon: 'ri-heart-pulse-line',
                image: './images/rewards/nutrition-consultation.jpg'
            },
            {
                id: 'monthly-subscription',
                name: 'Suscripción Mensual',
                description: '1 mes de jugos diarios gratis',
                points: 500,
                category: 'subscriptions',
                icon: 'ri-calendar-line',
                image: './images/rewards/monthly-subscription.jpg'
            },
            {
                id: 'vip-event',
                name: 'Evento VIP',
                description: 'Acceso a evento exclusivo de degustación',
                points: 750,
                category: 'experiences',
                icon: 'ri-vip-crown-line',
                image: './images/rewards/vip-event.jpg'
            }
        ],

        activities: [
            { action: 'purchase', points: 10, description: 'Por cada $10 de compra' },
            { action: 'review', points: 25, description: 'Por escribir una reseña' },
            { action: 'referral', points: 100, description: 'Por referir un amigo' },
            { action: 'social_share', points: 15, description: 'Por compartir en redes sociales' },
            { action: 'birthday', points: 50, description: 'En tu cumpleaños' },
            { action: 'newsletter', points: 20, description: 'Por suscribirse al newsletter' }
        ]
    },

    // Simulated user data
    user: {
        id: 'user123',
        name: 'María González',
        email: 'maria@example.com',
        joinDate: '2024-01-15',
        totalPoints: 1250,
        availablePoints: 850,
        usedPoints: 400,
        currentLevel: 'silver',
        nextLevel: 'gold',
        pointsToNextLevel: 250,
        totalPurchases: 45,
        totalSpent: 1250,
        referrals: 3,
        reviews: 8
    }
};

// Loyalty Program Showcase Class
class LoyaltyProgramShowcase {
    constructor() {
        this.programData = loyaltyProgramData;
        this.currentUser = this.programData.user;
        this.currentLevel = this.getCurrentLevel();
        this.nextLevel = this.getNextLevel();
        this.isVisible = false;

        this.init();
    }

    init() {
        this.createLoyaltySection();
        this.bindEvents();
        this.startAnimations();
        console.log('Loyalty Program Showcase initialized');
    }

    getCurrentLevel() {
        return this.programData.program.levels.find(level =>
            this.currentUser.totalPoints >= level.minPoints &&
            this.currentUser.totalPoints <= level.maxPoints
        );
    }

    getNextLevel() {
        const currentLevelIndex = this.programData.program.levels.findIndex(level => level.id === this.currentLevel.id);
        return this.programData.program.levels[currentLevelIndex + 1] || null;
    }

    createLoyaltySection() {
        // Find or create loyalty section
        let loyaltySection = document.getElementById('loyalty-program');
        if (!loyaltySection) {
            loyaltySection = document.createElement('section');
            loyaltySection.id = 'loyalty-program';
            loyaltySection.className = 'loyalty-program section';

            // Insert before contact section
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.parentNode.insertBefore(loyaltySection, contactSection);
            } else {
                document.body.appendChild(loyaltySection);
            }
        }

        loyaltySection.innerHTML = `
            <div class="loyalty-program__container container">
                <div class="loyalty-program__header">
                    <h2 class="loyalty-program__title">
                        <i class="ri-vip-crown-line"></i>
                        ${this.programData.program.name}
                    </h2>
                    <p class="loyalty-program__subtitle">${this.programData.program.description}</p>
                </div>
                
                <div class="loyalty-program__user-status">
                    <div class="loyalty-program__user-card">
                        <div class="loyalty-program__user-info">
                            <div class="loyalty-program__user-avatar">
                                <img src="./images/user-avatar.jpg" alt="${this.currentUser.name}" onerror="this.src='./images/placeholder-avatar.jpg'">
                                <div class="loyalty-program__level-badge" style="background: ${this.currentLevel.color}">
                                    <i class="${this.currentLevel.icon}"></i>
                                </div>
                            </div>
                            <div class="loyalty-program__user-details">
                                <h3 class="loyalty-program__user-name">${this.currentUser.name}</h3>
                                <p class="loyalty-program__user-level">Nivel ${this.currentLevel.name}</p>
                                <p class="loyalty-program__user-since">Miembro desde ${this.formatDate(this.currentUser.joinDate)}</p>
                            </div>
                        </div>
                        
                        <div class="loyalty-program__points-summary">
                            <div class="loyalty-program__points-available">
                                <span class="loyalty-program__points-number">${this.currentUser.availablePoints}</span>
                                <span class="loyalty-program__points-label">Puntos Disponibles</span>
                            </div>
                            <div class="loyalty-program__points-total">
                                <span class="loyalty-program__points-number">${this.currentUser.totalPoints}</span>
                                <span class="loyalty-program__points-label">Puntos Totales</span>
                            </div>
                        </div>
                    </div>
                    
                    ${this.nextLevel ? `
                        <div class="loyalty-program__progress">
                            <div class="loyalty-program__progress-header">
                                <span>Progreso a ${this.nextLevel.name}</span>
                                <span>${this.currentUser.pointsToNextLevel} puntos restantes</span>
                            </div>
                            <div class="loyalty-program__progress-bar">
                                <div class="loyalty-program__progress-fill" 
                                     style="width: ${this.calculateProgressPercentage()}%"></div>
                            </div>
                            <div class="loyalty-program__progress-levels">
                                <span style="color: ${this.currentLevel.color}">${this.currentLevel.name}</span>
                                <span style="color: ${this.nextLevel.color}">${this.nextLevel.name}</span>
                            </div>
                        </div>
                    ` : ''}
                </div>
                
                <div class="loyalty-program__levels">
                    <h3 class="loyalty-program__section-title">Niveles del Programa</h3>
                    <div class="loyalty-program__levels-grid">
                        ${this.renderLevels()}
                    </div>
                </div>
                
                <div class="loyalty-program__rewards">
                    <h3 class="loyalty-program__section-title">Recompensas Disponibles</h3>
                    <div class="loyalty-program__rewards-grid">
                        ${this.renderRewards()}
                    </div>
                </div>
                
                <div class="loyalty-program__earn-points">
                    <h3 class="loyalty-program__section-title">Cómo Ganar Puntos</h3>
                    <div class="loyalty-program__activities-grid">
                        ${this.renderActivities()}
                    </div>
                </div>
                
                <div class="loyalty-program__stats">
                    <h3 class="loyalty-program__section-title">Tus Estadísticas</h3>
                    <div class="loyalty-program__stats-grid">
                        ${this.renderUserStats()}
                    </div>
                </div>
                
                <div class="loyalty-program__cta">
                    <h3>¿Listo para comenzar a ganar puntos?</h3>
                    <p>Únete a nuestro programa de lealtad y comienza a disfrutar de beneficios exclusivos</p>
                    <div class="loyalty-program__cta-buttons">
                        <button class="loyalty-program__join-btn btn btn--primary">
                            <i class="ri-vip-crown-line"></i>
                            Unirse al Programa
                        </button>
                        <button class="loyalty-program__learn-more btn btn--secondary">
                            <i class="ri-information-line"></i>
                            Más Información
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    renderLevels() {
        return this.programData.program.levels.map(level => {
            const isCurrentLevel = level.id === this.currentLevel.id;
            const isUnlocked = this.currentUser.totalPoints >= level.minPoints;

            return `
                <div class="loyalty-program__level-card ${isCurrentLevel ? 'current' : ''} ${isUnlocked ? 'unlocked' : 'locked'}">
                    <div class="loyalty-program__level-header" style="background: ${level.color}">
                        <i class="${level.icon}"></i>
                        <h4>${level.name}</h4>
                        ${isCurrentLevel ? '<span class="loyalty-program__current-badge">Actual</span>' : ''}
                    </div>
                    
                    <div class="loyalty-program__level-content">
                        <div class="loyalty-program__level-range">
                            ${level.minPoints} - ${level.maxPoints === Infinity ? '∞' : level.maxPoints} puntos
                        </div>
                        
                        <div class="loyalty-program__level-multiplier">
                            ${level.multiplier}x puntos por compra
                        </div>
                        
                        <ul class="loyalty-program__level-benefits">
                            ${level.benefits.map(benefit => `
                                <li><i class="ri-check-line"></i>${benefit}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderRewards() {
        return this.programData.program.rewards.map(reward => {
            const canAfford = this.currentUser.availablePoints >= reward.points;

            return `
                <div class="loyalty-program__reward-card ${canAfford ? 'affordable' : 'expensive'}">
                    <div class="loyalty-program__reward-image">
                        <img src="${reward.image}" alt="${reward.name}" onerror="this.src='./images/placeholder-reward.jpg'">
                        <div class="loyalty-program__reward-points">
                            ${reward.points} ${this.programData.program.currencySymbol}
                        </div>
                    </div>
                    
                    <div class="loyalty-program__reward-content">
                        <h4 class="loyalty-program__reward-name">${reward.name}</h4>
                        <p class="loyalty-program__reward-description">${reward.description}</p>
                        
                        <button class="loyalty-program__redeem-btn ${canAfford ? 'btn btn--primary' : 'btn btn--disabled'}" 
                                ${canAfford ? '' : 'disabled'}
                                data-reward-id="${reward.id}">
                            <i class="${reward.icon}"></i>
                            ${canAfford ? 'Canjear' : 'Insuficientes puntos'}
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    renderActivities() {
        return this.programData.program.activities.map(activity => `
            <div class="loyalty-program__activity-card">
                <div class="loyalty-program__activity-points">
                    +${activity.points} ${this.programData.program.currencySymbol}
                </div>
                <div class="loyalty-program__activity-description">
                    ${activity.description}
                </div>
            </div>
        `).join('');
    }

    renderUserStats() {
        return `
            <div class="loyalty-program__stat-card">
                <div class="loyalty-program__stat-icon">
                    <i class="ri-shopping-cart-line"></i>
                </div>
                <div class="loyalty-program__stat-content">
                    <span class="loyalty-program__stat-number">${this.currentUser.totalPurchases}</span>
                    <span class="loyalty-program__stat-label">Compras Totales</span>
                </div>
            </div>
            
            <div class="loyalty-program__stat-card">
                <div class="loyalty-program__stat-icon">
                    <i class="ri-money-dollar-circle-line"></i>
                </div>
                <div class="loyalty-program__stat-content">
                    <span class="loyalty-program__stat-number">$${this.currentUser.totalSpent}</span>
                    <span class="loyalty-program__stat-label">Total Gastado</span>
                </div>
            </div>
            
            <div class="loyalty-program__stat-card">
                <div class="loyalty-program__stat-icon">
                    <i class="ri-group-line"></i>
                </div>
                <div class="loyalty-program__stat-content">
                    <span class="loyalty-program__stat-number">${this.currentUser.referrals}</span>
                    <span class="loyalty-program__stat-label">Amigos Referidos</span>
                </div>
            </div>
            
            <div class="loyalty-program__stat-card">
                <div class="loyalty-program__stat-icon">
                    <i class="ri-star-line"></i>
                </div>
                <div class="loyalty-program__stat-content">
                    <span class="loyalty-program__stat-number">${this.currentUser.reviews}</span>
                    <span class="loyalty-program__stat-label">Reseñas Escritas</span>
                </div>
            </div>
        `;
    }

    bindEvents() {
        // Redeem buttons
        const redeemButtons = document.querySelectorAll('.loyalty-program__redeem-btn');
        redeemButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const rewardId = e.target.dataset.rewardId;
                if (rewardId && !button.disabled) {
                    this.redeemReward(rewardId);
                }
            });
        });

        // Join program button
        const joinBtn = document.querySelector('.loyalty-program__join-btn');
        if (joinBtn) {
            joinBtn.addEventListener('click', () => {
                this.joinProgram();
            });
        }

        // Learn more button
        const learnMoreBtn = document.querySelector('.loyalty-program__learn-more');
        if (learnMoreBtn) {
            learnMoreBtn.addEventListener('click', () => {
                this.showProgramDetails();
            });
        }
    }

    redeemReward(rewardId) {
        const reward = this.programData.program.rewards.find(r => r.id === rewardId);
        if (!reward) return;

        if (this.currentUser.availablePoints >= reward.points) {
            // Simulate redemption
            this.currentUser.availablePoints -= reward.points;
            this.currentUser.usedPoints += reward.points;

            this.showRedemptionSuccess(reward);
            this.updatePointsDisplay();
            this.trackRedemption(rewardId, reward.points);
        } else {
            this.showError('No tienes suficientes puntos para esta recompensa');
        }
    }

    showRedemptionSuccess(reward) {
        const modal = document.createElement('div');
        modal.className = 'loyalty-program__redemption-modal';
        modal.innerHTML = `
            <div class="loyalty-program__redemption-overlay"></div>
            <div class="loyalty-program__redemption-content">
                <div class="loyalty-program__redemption-success">
                    <i class="ri-check-line"></i>
                </div>
                <h3>¡Recompensa Canjeada!</h3>
                <p>Has canjeado exitosamente: <strong>${reward.name}</strong></p>
                <p>Se han descontado ${reward.points} puntos de tu cuenta.</p>
                <button class="loyalty-program__redemption-close btn btn--primary">Continuar</button>
            </div>
        `;

        document.body.appendChild(modal);

        // Show modal
        setTimeout(() => {
            modal.classList.add('active');
        }, 100);

        // Close modal
        const closeBtn = modal.querySelector('.loyalty-program__redemption-close');
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
            }, 300);
        });
    }

    updatePointsDisplay() {
        const availablePointsElements = document.querySelectorAll('.loyalty-program__points-number');
        if (availablePointsElements[0]) {
            availablePointsElements[0].textContent = this.currentUser.availablePoints;
        }

        // Update redeem buttons
        const redeemButtons = document.querySelectorAll('.loyalty-program__redeem-btn');
        redeemButtons.forEach(button => {
            const rewardId = button.dataset.rewardId;
            const reward = this.programData.program.rewards.find(r => r.id === rewardId);

            if (reward) {
                const canAfford = this.currentUser.availablePoints >= reward.points;
                button.disabled = !canAfford;
                button.className = `loyalty-program__redeem-btn ${canAfford ? 'btn btn--primary' : 'btn btn--disabled'}`;
                button.innerHTML = `
                    <i class="${reward.icon}"></i>
                    ${canAfford ? 'Canjear' : 'Insuficientes puntos'}
                `;
            }
        });
    }

    joinProgram() {
        // Simulate joining the program
        this.showJoinSuccess();
        this.trackEvent('program_joined');
    }

    showJoinSuccess() {
        const notification = document.createElement('div');
        notification.className = 'loyalty-program__notification';
        notification.innerHTML = `
            <i class="ri-check-line"></i>
            <span>¡Bienvenido al programa Fresh Rewards! Has ganado 20 puntos de bienvenida.</span>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 4000);
    }

    showProgramDetails() {
        // This could open a detailed modal or redirect to a dedicated page
        console.log('Showing program details...');
        this.trackEvent('learn_more_clicked');
    }

    showError(message) {
        const notification = document.createElement('div');
        notification.className = 'loyalty-program__notification loyalty-program__notification--error';
        notification.innerHTML = `
            <i class="ri-error-warning-line"></i>
            <span>${message}</span>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    calculateProgressPercentage() {
        if (!this.nextLevel) return 100;

        const currentLevelPoints = this.currentLevel.minPoints;
        const nextLevelPoints = this.nextLevel.minPoints;
        const userPoints = this.currentUser.totalPoints;

        const progress = ((userPoints - currentLevelPoints) / (nextLevelPoints - currentLevelPoints)) * 100;
        return Math.min(Math.max(progress, 0), 100);
    }

    startAnimations() {
        // Animate progress bar
        setTimeout(() => {
            const progressBar = document.querySelector('.loyalty-program__progress-fill');
            if (progressBar) {
                progressBar.style.width = this.calculateProgressPercentage() + '%';
            }
        }, 1000);

        // Animate stats counters
        this.animateCounters();
    }

    animateCounters() {
        const counters = document.querySelectorAll('.loyalty-program__stat-number');

        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''));
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = counter.textContent.replace(/[0-9]+/, target);
                    clearInterval(timer);
                } else {
                    counter.textContent = counter.textContent.replace(/[0-9]+/, Math.floor(current));
                }
            }, 30);
        });
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long' };
        return date.toLocaleDateString('es-ES', options);
    }

    trackEvent(event, data = {}) {
        // Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'loyalty_program_' + event, {
                ...data,
                user_level: this.currentLevel.id,
                user_points: this.currentUser.availablePoints
            });
        }

        console.log(`Loyalty Program event: ${event}`, data);
    }

    trackRedemption(rewardId, points) {
        this.trackEvent('reward_redeemed', {
            reward_id: rewardId,
            points_spent: points,
            remaining_points: this.currentUser.availablePoints
        });
    }

    // Public API methods
    addPoints(points, reason = 'manual') {
        this.currentUser.availablePoints += points;
        this.currentUser.totalPoints += points;
        this.updatePointsDisplay();
        this.trackEvent('points_earned', { points, reason });
    }

    getUserLevel() {
        return this.currentLevel;
    }

    getUserPoints() {
        return {
            available: this.currentUser.availablePoints,
            total: this.currentUser.totalPoints,
            used: this.currentUser.usedPoints
        };
    }

    getAvailableRewards() {
        return this.programData.program.rewards.filter(reward =>
            this.currentUser.availablePoints >= reward.points
        );
    }
}

// Initialize Loyalty Program Showcase when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Initialize loyalty program
    if (typeof window.loyaltyProgram === 'undefined') {
        window.loyaltyProgram = new LoyaltyProgramShowcase();
    }
});

// Export for global access
window.LoyaltyProgramShowcase = LoyaltyProgramShowcase;
/* ==
=================================
   PHASE 4: ADVANCED FUNCTIONALITY
   =================================== */

// Shopping Cart System - Simplified for WhatsApp integration

// Update cart display
function updateCartDisplay() {
    const cartCount = document.querySelector('.nav__cart-count');
    const cartContent = document.getElementById('cart-content');

    if (cartCount) {
        cartCount.textContent = cart.count;
        cartCount.style.display = cart.count > 0 ? 'flex' : 'none';
    }

    if (cartContent) {
        renderCartContent();
    }
}

// Add item to cart
function addToCart(productId, quantity = 1, variants = {}) {
    const product = findProductById(productId);
    if (!product) return;

    const existingItem = cart.items.find(item =>
        item.id === productId && JSON.stringify(item.variants) === JSON.stringify(variants)
    );

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.items.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity,
            variants: variants
        });
    }

    updateCartTotals();
    saveCart();
    updateCartDisplay();
    showCartNotification('Producto agregado al carrito');
}

// Remove item from cart
function removeFromCart(productId, variants = {}) {
    cart.items = cart.items.filter(item =>
        !(item.id === productId && JSON.stringify(item.variants) === JSON.stringify(variants))
    );

    updateCartTotals();
    saveCart();
    updateCartDisplay();
}

// Update cart totals
function updateCartTotals() {
    cart.count = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    cart.total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('fres-kuras-cart', JSON.stringify(cart.items));
}

// Render cart content
function renderCartContent() {
    const cartContent = document.getElementById('cart-content');
    if (!cartContent) return;

    if (cart.items.length === 0) {
        cartContent.innerHTML = `
                <div class="cart-empty">
                    <i class="ri-shopping-cart-line"></i>
                    <h3>Tu carrito está vacío</h3>
                    <p>Agrega algunos productos deliciosos</p>
                    <button class="btn btn--primary" onclick="closeModal('cart-modal')">
                        Continuar Comprando
                    </button>
                </div>
            `;
        return;
    }

    const cartHTML = `
            <div class="cart-header">
                <h2>Tu Carrito</h2>
                <span class="cart-count">${cart.count} productos</span>
            </div>
            <div class="cart-items">
                ${cart.items.map(item => `
                    <div class="cart-item" data-id="${item.id}">
                        <img src="${item.image}" alt="${item.name}" class="cart-item__image">
                        <div class="cart-item__details">
                            <h4>${item.name}</h4>
                            ${Object.keys(item.variants).length > 0 ? `
                                <div class="cart-item__variants">
                                    ${Object.entries(item.variants).map(([key, value]) =>
        `<span>${key}: ${value}</span>`
    ).join('')}
                                </div>
                            ` : ''}
                            <div class="cart-item__controls">
                                <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">
                                    <i class="ri-subtract-line"></i>
                                </button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">
                                    <i class="ri-add-line"></i>
                                </button>
                            </div>
                        </div>
                        <div class="cart-item__price">
                            <span class="price">$${(item.price * item.quantity).toFixed(2)}</span>
                            <button class="remove-btn" onclick="removeFromCart('${item.id}')">
                                <i class="ri-delete-bin-line"></i>
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="cart-footer">
                <div class="cart-total">
                    <div class="total-line">
                        <span>Subtotal:</span>
                        <span>$${cart.total.toFixed(2)}</span>
                    </div>
                    <div class="total-line">
                        <span>Envío:</span>
                        <span id="delivery-cost">Calculando...</span>
                    </div>
                    <div class="total-line total-final">
                        <span>Total:</span>
                        <span id="final-total">$${cart.total.toFixed(2)}</span>
                    </div>
                </div>
                <div class="cart-actions">
                    <button class="btn btn--secondary" onclick="clearCart()">
                        Vaciar Carrito
                    </button>
                    <button class="btn btn--primary" onclick="proceedToCheckout()">
                        <i class="ri-secure-payment-line"></i>
                        Proceder al Pago
                    </button>
                </div>
            </div>
        `;

    cartContent.innerHTML = cartHTML;
    calculateDelivery();
}

// Show cart notification
function showCartNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
            <i class="ri-check-line"></i>
            <span>${message}</span>
        `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize cart
updateCartTotals();
updateCartDisplay();

// Expose functions globally
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = function (productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const item = cart.items.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCartTotals();
        saveCart();
        updateCartDisplay();
    }
};

window.clearCart = function () {
    cart.items = [];
    updateCartTotals();
    saveCart();
    updateCartDisplay();
};

window.proceedToCheckout = function () {
    // Implement checkout process
    console.log('Proceeding to checkout with:', cart.items);
};


// Product Variants System
function initializeProductVariants() {
    const variantOptions = {
        size: {
            label: 'Tamaño',
            options: [
                { value: 'small', label: 'Pequeño (300ml)', price: 0 },
                { value: 'medium', label: 'Mediano (500ml)', price: 3 },
                { value: 'large', label: 'Grande (700ml)', price: 6 }
            ]
        },
        extras: {
            label: 'Extras',
            options: [
                { value: 'protein', label: 'Proteína (+$8)', price: 8 },
                { value: 'chia', label: 'Semillas de Chía (+$5)', price: 5 },
                { value: 'honey', label: 'Miel Natural (+$3)', price: 3 },
                { value: 'ginger', label: 'Jengibre Extra (+$2)', price: 2 }
            ]
        }
    };

    function renderProductVariants(productId, container) {
        const variantsHTML = `
            <div class="product-variants" data-product="${productId}">
                ${Object.entries(variantOptions).map(([key, variant]) => `
                    <div class="variant-group">
                        <label class="variant-label">${variant.label}</label>
                        <div class="variant-options">
                            ${variant.options.map(option => `
                                <label class="variant-option">
                                    <input type="${key === 'size' ? 'radio' : 'checkbox'}" 
                                           name="${productId}-${key}" 
                                           value="${option.value}"
                                           data-price="${option.price}"
                                           ${key === 'size' && option.value === 'medium' ? 'checked' : ''}>
                                    <span class="variant-option-label">${option.label}</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
                <div class="variant-price-update">
                    <span class="base-price">Precio base: $<span id="base-price-${productId}">0.00</span></span>
                    <span class="total-price">Total: $<span id="total-price-${productId}">0.00</span></span>
                </div>
            </div>
        `;

        container.innerHTML = variantsHTML;

        // Add event listeners for price updates
        const inputs = container.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('change', () => updateVariantPrice(productId));
        });

        updateVariantPrice(productId);
    }

    function updateVariantPrice(productId) {
        const product = findProductById(productId);
        if (!product) return;

        const container = document.querySelector(`[data-product="${productId}"]`);
        if (!container) return;

        let totalPrice = product.price;
        const selectedVariants = {};

        // Calculate price based on selected variants
        const inputs = container.querySelectorAll('input:checked');
        inputs.forEach(input => {
            const price = parseFloat(input.dataset.price) || 0;
            totalPrice += price;

            const [, variantType] = input.name.split('-');
            if (!selectedVariants[variantType]) {
                selectedVariants[variantType] = [];
            }
            selectedVariants[variantType].push(input.value);
        });

        // Update price display
        const basePriceEl = document.getElementById(`base-price-${productId}`);
        const totalPriceEl = document.getElementById(`total-price-${productId}`);

        if (basePriceEl) basePriceEl.textContent = product.price.toFixed(2);
        if (totalPriceEl) totalPriceEl.textContent = totalPrice.toFixed(2);

        // Store variants for cart
        container.dataset.variants = JSON.stringify(selectedVariants);
        container.dataset.totalPrice = totalPrice.toFixed(2);
    }

    function getSelectedVariants(productId) {
        const container = document.querySelector(`[data-product="${productId}"]`);
        if (!container) return {};

        return JSON.parse(container.dataset.variants || '{}');
    }

    // Expose functions globally
    window.renderProductVariants = renderProductVariants;
    window.getSelectedVariants = getSelectedVariants;
}

// Delivery Time Calculator
function initializeDeliveryCalculator() {
    const deliveryZones = {
        'centro': { name: 'Centro', time: '20-30 min', cost: 25 },
        'norte': { name: 'Zona Norte', time: '30-45 min', cost: 35 },
        'sur': { name: 'Zona Sur', time: '35-50 min', cost: 40 },
        'este': { name: 'Zona Este', time: '25-40 min', cost: 30 },
        'oeste': { name: 'Zona Oeste', time: '30-45 min', cost: 35 }
    };

    function calculateDelivery() {
        // Get user location or use default
        const defaultZone = 'centro';
        const zone = deliveryZones[defaultZone];

        const deliveryCostEl = document.getElementById('delivery-cost');
        const finalTotalEl = document.getElementById('final-total');

        if (deliveryCostEl && finalTotalEl) {
            deliveryCostEl.textContent = `$${zone.cost.toFixed(2)}`;

            const cart = JSON.parse(localStorage.getItem('fres-kuras-cart')) || [];
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const total = subtotal + zone.cost;

            finalTotalEl.textContent = `$${total.toFixed(2)}`;
        }

        return {
            zone: zone.name,
            time: zone.time,
            cost: zone.cost
        };
    }

    function renderDeliveryCalculator(container) {
        const calculatorHTML = `
            <div class="delivery-calculator">
                <h3>Calcular Tiempo de Entrega</h3>
                <div class="address-input">
                    <input type="text" id="delivery-address" placeholder="Ingresa tu dirección">
                    <button class="btn btn--primary" onclick="calculateDeliveryTime()">
                        <i class="ri-map-pin-line"></i>
                        Calcular
                    </button>
                </div>
                <div class="delivery-zones">
                    <h4>Zonas de Entrega</h4>
                    ${Object.entries(deliveryZones).map(([key, zone]) => `
                        <div class="zone-item">
                            <span class="zone-name">${zone.name}</span>
                            <span class="zone-time">${zone.time}</span>
                            <span class="zone-cost">$${zone.cost}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        container.innerHTML = calculatorHTML;
    }

    // Expose functions globally
    window.calculateDelivery = calculateDelivery;
    window.renderDeliveryCalculator = renderDeliveryCalculator;
    window.calculateDeliveryTime = function () {
        const address = document.getElementById('delivery-address').value;
        if (!address) {
            alert('Por favor ingresa una dirección');
            return;
        }

        // Simulate API call to calculate delivery time
        const result = calculateDelivery();
        alert(`Tiempo estimado: ${result.time}\nCosto de envío: $${result.cost}`);
    };
}

// Order Tracking System
function initializeOrderTracking() {
    const orderStatuses = [
        { id: 'received', label: 'Pedido Recibido', icon: 'ri-check-line' },
        { id: 'preparing', label: 'Preparando', icon: 'ri-restaurant-line' },
        { id: 'ready', label: 'Listo para Entrega', icon: 'ri-box-line' },
        { id: 'delivering', label: 'En Camino', icon: 'ri-truck-line' },
        { id: 'delivered', label: 'Entregado', icon: 'ri-check-double-line' }
    ];

    function createOrderTracker(orderId, currentStatus = 'received') {
        const currentIndex = orderStatuses.findIndex(status => status.id === currentStatus);

        const trackerHTML = `
            <div class="order-tracker" data-order="${orderId}">
                <div class="order-header">
                    <h3>Pedido #${orderId}</h3>
                    <span class="order-status">${orderStatuses[currentIndex].label}</span>
                </div>
                <div class="tracking-steps">
                    ${orderStatuses.map((status, index) => `
                        <div class="tracking-step ${index <= currentIndex ? 'completed' : ''} ${index === currentIndex ? 'current' : ''}">
                            <div class="step-icon">
                                <i class="${status.icon}"></i>
                            </div>
                            <div class="step-content">
                                <h4>${status.label}</h4>
                                <p>${getStatusTime(status.id, index <= currentIndex)}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="order-actions">
                    <button class="btn btn--secondary" onclick="contactSupport('${orderId}')">
                        <i class="ri-customer-service-line"></i>
                        Contactar Soporte
                    </button>
                    ${currentStatus === 'delivered' ? `
                        <button class="btn btn--primary" onclick="rateOrder('${orderId}')">
                            <i class="ri-star-line"></i>
                            Calificar Pedido
                        </button>
                    ` : ''}
                </div>
            </div>
        `;

        return trackerHTML;
    }

    function getStatusTime(statusId, isCompleted) {
        if (!isCompleted) return 'Pendiente';

        const times = {
            'received': '10:30 AM',
            'preparing': '10:35 AM',
            'ready': '10:50 AM',
            'delivering': '11:00 AM',
            'delivered': '11:25 AM'
        };

        return times[statusId] || 'Completado';
    }

    function updateOrderStatus(orderId, newStatus) {
        const tracker = document.querySelector(`[data-order="${orderId}"]`);
        if (!tracker) return;

        const newIndex = orderStatuses.findIndex(status => status.id === newStatus);
        const steps = tracker.querySelectorAll('.tracking-step');

        steps.forEach((step, index) => {
            step.classList.remove('completed', 'current');
            if (index < newIndex) {
                step.classList.add('completed');
            } else if (index === newIndex) {
                step.classList.add('current');
            }
        });

        const statusEl = tracker.querySelector('.order-status');
        if (statusEl) {
            statusEl.textContent = orderStatuses[newIndex].label;
        }
    }

    // Expose functions globally
    window.createOrderTracker = createOrderTracker;
    window.updateOrderStatus = updateOrderStatus;
    window.contactSupport = function (orderId) {
        const message = `Hola, necesito ayuda con mi pedido #${orderId}`;
        window.open(`https://wa.me/525512345678?text=${encodeURIComponent(message)}`, '_blank');
    };
    window.rateOrder = function (orderId) {
        // Implement rating system
        console.log('Rating order:', orderId);
    };
}

// Subscription Options
function initializeSubscriptionOptions() {
    const subscriptionPlans = {
        weekly: {
            label: 'Semanal',
            discount: 5,
            description: 'Recibe tus jugos favoritos cada semana'
        },
        biweekly: {
            label: 'Quincenal',
            discount: 10,
            description: 'Entrega cada 15 días con mayor descuento'
        },
        monthly: {
            label: 'Mensual',
            discount: 15,
            description: 'Plan mensual con el mejor precio'
        }
    };

    function renderSubscriptionOptions(productId, container) {
        const product = findProductById(productId);
        if (!product) return;

        const subscriptionHTML = `
            <div class="subscription-options" data-product="${productId}">
                <h4>¿Quieres recibirlo regularmente?</h4>
                <p>Suscríbete y ahorra en cada entrega</p>
                
                <div class="subscription-toggle">
                    <label class="toggle-switch">
                        <input type="checkbox" id="enable-subscription-${productId}">
                        <span class="toggle-slider"></span>
                    </label>
                    <span>Activar suscripción</span>
                </div>
                
                <div class="subscription-plans" id="subscription-plans-${productId}" style="display: none;">
                    ${Object.entries(subscriptionPlans).map(([key, plan]) => `
                        <label class="subscription-plan">
                            <input type="radio" name="subscription-${productId}" value="${key}">
                            <div class="plan-content">
                                <div class="plan-header">
                                    <h5>${plan.label}</h5>
                                    <span class="discount">-${plan.discount}%</span>
                                </div>
                                <p>${plan.description}</p>
                                <div class="plan-price">
                                    <span class="original-price">$${product.price.toFixed(2)}</span>
                                    <span class="discounted-price">$${(product.price * (1 - plan.discount / 100)).toFixed(2)}</span>
                                </div>
                            </div>
                        </label>
                    `).join('')}
                </div>
                
                <div class="subscription-benefits">
                    <h5>Beneficios de la suscripción:</h5>
                    <ul>
                        <li><i class="ri-check-line"></i> Descuentos exclusivos</li>
                        <li><i class="ri-check-line"></i> Entrega automática</li>
                        <li><i class="ri-check-line"></i> Pausa o cancela cuando quieras</li>
                        <li><i class="ri-check-line"></i> Prioridad en nuevos productos</li>
                    </ul>
                </div>
            </div>
        `;

        container.innerHTML = subscriptionHTML;

        // Add event listeners
        const toggleSwitch = document.getElementById(`enable-subscription-${productId}`);
        const plansContainer = document.getElementById(`subscription-plans-${productId}`);

        toggleSwitch.addEventListener('change', function () {
            plansContainer.style.display = this.checked ? 'block' : 'none';
        });
    }

    function getSubscriptionData(productId) {
        const container = document.querySelector(`[data-product="${productId}"] .subscription-options`);
        if (!container) return null;

        const isEnabled = document.getElementById(`enable-subscription-${productId}`).checked;
        if (!isEnabled) return null;

        const selectedPlan = container.querySelector('input[name^="subscription-"]:checked');
        if (!selectedPlan) return null;

        const planKey = selectedPlan.value;
        const plan = subscriptionPlans[planKey];

        return {
            plan: planKey,
            frequency: plan.label,
            discount: plan.discount,
            description: plan.description
        };
    }

    // Expose functions globally
    window.renderSubscriptionOptions = renderSubscriptionOptions;
    window.getSubscriptionData = getSubscriptionData;
}

// Helper function to find product by ID
function findProductById(productId) {
    for (const category of Object.values(productsData)) {
        const product = category.find(p => p.id === productId);
        if (product) return product;
    }
    return null;
}

// Phase 4 functions removed - not used in current implementation
/* ===================================
   PHASE 5: ADVANCED TECHNOLOGY
   =================================== */

// Simplified PWA Implementation
function initializePWA() {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(() => console.log('ServiceWorker registered'))
                .catch(err => console.log('ServiceWorker failed:', err));
        });
    }
    banner.className = 'install-banner';
    banner.innerHTML = `
            <div class="install-banner-content">
                <div class="install-banner-text">
                    <h4>¡Instala Fres-Kuras!</h4>
                    <p>Accede más rápido a tus jugos favoritos</p>
                </div>
                <div class="install-banner-actions">
                    <button class="btn btn--primary btn--small" id="install-app">
                        <i class="ri-download-line"></i>
                        Instalar
                    </button>
                    <button class="btn btn--secondary btn--small" onclick="dismissInstallBanner()">
                        Ahora no
                    </button>
                </div>
            </div>
        `;

    document.body.appendChild(banner);

    setTimeout(() => {
        banner.classList.add('show');
    }, 100);
}

// Show install banner after 30 seconds if not installed
setTimeout(() => {
    if (!window.matchMedia('(display-mode: standalone)').matches) {
        showInstallBanner();
    }
}, 30000);

window.dismissInstallBanner = function () {
    const banner = document.querySelector('.install-banner');
    if (banner) {
        banner.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(banner);
        }, 300);
    }
}


// Advanced Image Optimization
function initializeImageOptimization() {
    // WebP support detection
    function supportsWebP() {
        return new Promise((resolve) => {
            const webP = new Image();
            webP.onload = webP.onerror = () => {
                resolve(webP.height === 2);
            };
            webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        });
    }

    // Lazy loading with Intersection Observer
    function initializeLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Responsive images
    function generateResponsiveImages() {
        const images = document.querySelectorAll('img[data-responsive]');

        images.forEach(img => {
            const baseSrc = img.dataset.responsive;
            const sizes = [320, 640, 960, 1280, 1920];

            let srcset = sizes.map(size => `${baseSrc}?w=${size} ${size}w`).join(', ');

            img.srcset = srcset;
            img.sizes = '(max-width: 320px) 280px, (max-width: 640px) 600px, (max-width: 960px) 920px, (max-width: 1280px) 1240px, 1880px';
        });
    }

    // Critical image preloading
    function preloadCriticalImages() {
        const criticalImages = [
            './images/hero-juice.png',
            './images/about-1.jpg',
            './images/logo.png'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    // Initialize all image optimizations
    supportsWebP().then(hasWebP => {
        if (hasWebP) {
            document.documentElement.classList.add('webp');
        }
    });

    initializeLazyLoading();
    generateResponsiveImages();
    preloadCriticalImages();
}

// Dark Mode Implementation
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('toggle-theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Get saved theme or use system preference
    const currentTheme = localStorage.getItem('fres-kuras-theme') ||
        (prefersDarkScheme.matches ? 'dark' : 'light');

    // Apply theme
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('fres-kuras-theme', theme);

        if (darkModeToggle) {
            const icon = darkModeToggle.querySelector('i');
            icon.className = theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
        }
    }

    // Initialize theme
    applyTheme(currentTheme);

    // Toggle theme
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }

    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('fres-kuras-theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
}

// Advanced Accessibility Features
function initializeAccessibility() {
    // Skip to content link
    function addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Saltar al contenido principal';
        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // Focus management for modals
    function manageFocus() {
        const modals = document.querySelectorAll('.modal');

        modals.forEach(modal => {
            modal.addEventListener('shown', () => {
                const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                if (firstFocusable) {
                    firstFocusable.focus();
                }
            });
        });
    }

    // Keyboard navigation
    function enhanceKeyboardNavigation() {
        // Escape key to close modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const openModal = document.querySelector('.modal.show');
                if (openModal) {
                    closeModal(openModal.id);
                }
            }
        });

        // Arrow key navigation for carousels
        const carousels = document.querySelectorAll('.carousel');
        carousels.forEach(carousel => {
            carousel.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    // Previous slide
                    const prevBtn = carousel.querySelector('.carousel-btn--prev');
                    if (prevBtn) prevBtn.click();
                } else if (e.key === 'ArrowRight') {
                    // Next slide
                    const nextBtn = carousel.querySelector('.carousel-btn--next');
                    if (nextBtn) nextBtn.click();
                }
            });
        });
    }

    // ARIA labels and descriptions
    function enhanceARIA() {
        // Add ARIA labels to buttons without text
        const iconButtons = document.querySelectorAll('button:not([aria-label]) i');
        iconButtons.forEach(icon => {
            const button = icon.parentElement;
            const iconClass = icon.className;

            if (iconClass.includes('search')) {
                button.setAttribute('aria-label', 'Buscar');
            } else if (iconClass.includes('cart')) {
                button.setAttribute('aria-label', 'Carrito de compras');
            } else if (iconClass.includes('menu')) {
                button.setAttribute('aria-label', 'Menú de navegación');
            } else if (iconClass.includes('close')) {
                button.setAttribute('aria-label', 'Cerrar');
            }
        });

        // Add live regions for dynamic content
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'live-region';
        document.body.appendChild(liveRegion);
    }

    // Screen reader announcements
    function announceToScreenReader(message) {
        const liveRegion = document.getElementById('live-region');
        if (liveRegion) {
            liveRegion.textContent = message;
            setTimeout(() => {
                liveRegion.textContent = '';
            }, 1000);
        }
    }

    // Initialize accessibility features
    addSkipLink();
    manageFocus();
    enhanceKeyboardNavigation();
    enhanceARIA();

    // Expose announcement function
    window.announceToScreenReader = announceToScreenReader;
}

// Performance Monitoring
function initializePerformanceMonitoring() {
    // Core Web Vitals tracking
    function trackCoreWebVitals() {
        // Largest Contentful Paint (LCP)
        new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.startTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach(entry => {
                console.log('FID:', entry.processingStart - entry.startTime);
            });
        }).observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach(entry => {
                if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                }
            });
            console.log('CLS:', clsValue);
        }).observe({ entryTypes: ['layout-shift'] });
    }

    // Resource loading monitoring
    function monitorResourceLoading() {
        window.addEventListener('load', () => {
            const navigation = performance.getEntriesByType('navigation')[0];
            const resources = performance.getEntriesByType('resource');

            console.log('Page Load Time:', navigation.loadEventEnd - navigation.fetchStart);
            console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.fetchStart);
            console.log('Resources loaded:', resources.length);

            // Find slow resources
            const slowResources = resources.filter(resource => resource.duration > 1000);
            if (slowResources.length > 0) {
                console.warn('Slow resources detected:', slowResources);
            }
        });
    }

    // Error tracking
    function initializeErrorTracking() {
        window.addEventListener('error', (e) => {
            console.error('JavaScript Error:', {
                message: e.message,
                filename: e.filename,
                lineno: e.lineno,
                colno: e.colno,
                error: e.error
            });
        });

        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled Promise Rejection:', e.reason);
        });
    }

    // Initialize monitoring
    if (typeof PerformanceObserver !== 'undefined') {
        trackCoreWebVitals();
    }
    monitorResourceLoading();
    initializeErrorTracking();
}

// Google Reviews Integration
function initializeGoogleReviews() {
    const googleReviewsData = [
        {
            author: 'María González',
            rating: 5,
            text: 'Los mejores jugos naturales de la ciudad. El servicio es excelente y la calidad insuperable.',
            date: '2024-01-15',
            avatar: './images/reviews/maria.jpg'
        },
        {
            author: 'Carlos Rodríguez',
            rating: 5,
            text: 'Pedí el jugo verde detox y quedé encantado. Muy fresco y nutritivo. Lo recomiendo 100%.',
            date: '2024-01-10',
            avatar: './images/reviews/carlos.jpg'
        },
        {
            author: 'Ana Martínez',
            rating: 4,
            text: 'Excelente variedad de sabores. El frappuccino de chocolate es mi favorito.',
            date: '2024-01-08',
            avatar: './images/reviews/ana.jpg'
        }
    ];

    function renderGoogleReviews(container) {
        const reviewsHTML = `
            <div class="google-reviews">
                <div class="google-reviews-header">
                    <div class="google-logo">
                        <img src="./images/google-logo.png" alt="Google">
                    </div>
                    <div class="overall-rating">
                        <div class="rating-stars">
                            ${generateStars(4.8)}
                        </div>
                        <span class="rating-text">4.8 de 5 estrellas</span>
                        <span class="review-count">(127 reseñas)</span>
                    </div>
                </div>

                <div class="reviews-grid">
                    ${googleReviewsData.map(review => `
                        <div class="google-review-card">
                            <div class="review-header">
                                <img src="${review.avatar}" alt="${review.author}" class="reviewer-avatar">
                                <div class="reviewer-info">
                                    <h4>${review.author}</h4>
                                    <div class="review-rating">
                                        ${generateStars(review.rating)}
                                    </div>
                                    <span class="review-date">${formatDate(review.date)}</span>
                                </div>
                            </div>
                            <p class="review-text">${review.text}</p>
                        </div>
                    `).join('')}
                </div>

                <div class="reviews-cta">
                    <a href="https://g.page/fres-kuras/review" target="_blank" class="btn btn--primary">
                        <i class="ri-star-line"></i>
                        Escribir Reseña
                    </a>
                    <a href="https://g.page/fres-kuras" target="_blank" class="btn btn--secondary">
                        <i class="ri-google-line"></i>
                        Ver en Google
                    </a>
                </div>
            </div>
        `;

        container.innerHTML = reviewsHTML;
    }

    function generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        let starsHTML = '';

        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="ri-star-fill"></i>';
        }

        if (hasHalfStar) {
            starsHTML += '<i class="ri-star-half-line"></i>';
        }

        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="ri-star-line"></i>';
        }

        return starsHTML;
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Auto-render if container exists
    const container = document.getElementById('google-reviews-container');
    if (container) {
        renderGoogleReviews(container);
    }

    // Expose function globally
    window.renderGoogleReviews = renderGoogleReviews;
}

// Initialize Phase 5 functions
document.addEventListener('DOMContentLoaded', function () {
    initializePWA();
    initializeImageOptimization();
    initializeDarkMode();

    // Initialize image optimizations
    Utils.optimizeProductImages();
    Utils.lazyLoadImages();

    // Preload critical images
    Utils.preloadCriticalImages([
        './images/hero-juice.svg',
        './images/placeholder-product.jpg'
    ]);
    initializeAccessibility();
    initializePerformanceMonitoring();
    initializeGoogleReviews();
});
/* ===================================
   ANALYTICS Y PERSONALIZATION (12.1 & 12.2)
   =================================== */

// Heatmap Tracking Implementation (12.1)
function initializeHeatmapTracking() {
    // User interaction tracking
    const userInteractions = {
        clicks: [],
        scrolls: [],
        hovers: [],
        formInteractions: []
    };

    // Click tracking
    function trackClicks() {
        document.addEventListener('click', function (e) {
            const clickData = {
                timestamp: Date.now(),
                element: e.target.tagName,
                className: e.target.className,
                id: e.target.id,
                x: e.clientX,
                y: e.clientY,
                pageX: e.pageX,
                pageY: e.pageY,
                viewport: {
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            };

            // Store click data
            userInteractions.clicks.push(clickData);

            // Send to analytics if available
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click_tracked', {
                    element_type: clickData.element,
                    element_class: clickData.className,
                    element_id: clickData.id
                });
            }

            // Limit stored data to prevent memory issues
            if (userInteractions.clicks.length > 1000) {
                userInteractions.clicks = userInteractions.clicks.slice(-500);
            }
        });
    }

    // Scroll tracking
    function trackScrolls() {
        let scrollTimeout;
        window.addEventListener('scroll', function () {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const scrollData = {
                    timestamp: Date.now(),
                    scrollY: window.scrollY,
                    scrollX: window.scrollX,
                    scrollPercent: Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100),
                    viewport: {
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                };

                userInteractions.scrolls.push(scrollData);

                // Track scroll milestones
                if (scrollData.scrollPercent >= 25 && !sessionStorage.getItem('scroll-25')) {
                    sessionStorage.setItem('scroll-25', 'true');
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'scroll', { percent_scrolled: 25 });
                    }
                }
                if (scrollData.scrollPercent >= 50 && !sessionStorage.getItem('scroll-50')) {
                    sessionStorage.setItem('scroll-50', 'true');
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'scroll', { percent_scrolled: 50 });
                    }
                }
                if (scrollData.scrollPercent >= 75 && !sessionStorage.getItem('scroll-75')) {
                    sessionStorage.setItem('scroll-75', 'true');
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'scroll', { percent_scrolled: 75 });
                    }
                }
                if (scrollData.scrollPercent >= 90 && !sessionStorage.getItem('scroll-90')) {
                    sessionStorage.setItem('scroll-90', 'true');
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'scroll', { percent_scrolled: 90 });
                    }
                }

                // Limit stored data
                if (userInteractions.scrolls.length > 500) {
                    userInteractions.scrolls = userInteractions.scrolls.slice(-250);
                }
            }, 100);
        }, { passive: true });
    }

    // Hover tracking
    function trackHovers() {
        const importantElements = document.querySelectorAll('button, a, .menu__card, .blog__card, .testimonial-card');

        importantElements.forEach(element => {
            let hoverStartTime;

            element.addEventListener('mouseenter', function () {
                hoverStartTime = Date.now();
            });

            element.addEventListener('mouseleave', function () {
                if (hoverStartTime) {
                    const hoverDuration = Date.now() - hoverStartTime;

                    const hoverData = {
                        timestamp: Date.now(),
                        element: this.tagName,
                        className: this.className,
                        id: this.id,
                        duration: hoverDuration,
                        rect: this.getBoundingClientRect()
                    };

                    userInteractions.hovers.push(hoverData);

                    // Track long hovers (more than 2 seconds)
                    if (hoverDuration > 2000) {
                        if (typeof gtag !== 'undefined') {
                            gtag('event', 'long_hover', {
                                element_type: hoverData.element,
                                element_class: hoverData.className,
                                duration: hoverDuration
                            });
                        }
                    }

                    // Limit stored data
                    if (userInteractions.hovers.length > 500) {
                        userInteractions.hovers = userInteractions.hovers.slice(-250);
                    }
                }
            });
        });
    }

    // Form interaction tracking
    function trackFormInteractions() {
        const forms = document.querySelectorAll('form');

        forms.forEach(form => {
            const formInputs = form.querySelectorAll('input, textarea, select');

            formInputs.forEach(input => {
                let focusStartTime;

                input.addEventListener('focus', function () {
                    focusStartTime = Date.now();
                });

                input.addEventListener('blur', function () {
                    if (focusStartTime) {
                        const interactionData = {
                            timestamp: Date.now(),
                            formId: form.id,
                            inputType: this.type,
                            inputName: this.name,
                            focusDuration: Date.now() - focusStartTime,
                            hasValue: !!this.value,
                            valueLength: this.value.length
                        };

                        userInteractions.formInteractions.push(interactionData);

                        // Limit stored data
                        if (userInteractions.formInteractions.length > 200) {
                            userInteractions.formInteractions = userInteractions.formInteractions.slice(-100);
                        }
                    }
                });

                // Track form abandonment
                input.addEventListener('input', function () {
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'form_interaction', {
                            form_id: form.id,
                            field_name: this.name,
                            field_type: this.type
                        });
                    }
                });
            });

            // Track form submissions
            form.addEventListener('submit', function () {
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_submit', {
                        form_id: this.id
                    });
                }
            });
        });
    }

    // Generate heatmap data
    function generateHeatmapData() {
        return {
            clicks: userInteractions.clicks,
            scrolls: userInteractions.scrolls,
            hovers: userInteractions.hovers,
            formInteractions: userInteractions.formInteractions,
            sessionInfo: {
                userAgent: navigator.userAgent,
                viewport: {
                    width: window.innerWidth,
                    height: window.innerHeight
                },
                url: window.location.href,
                timestamp: Date.now()
            }
        };
    }

    // Send heatmap data to server
    function sendHeatmapData() {
        const data = generateHeatmapData();

        // Send via fetch API
        if (navigator.sendBeacon) {
            navigator.sendBeacon('/api/heatmap', JSON.stringify(data));
        } else {
            fetch('/api/heatmap', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }).catch(error => {
                console.log('Heatmap data send failed:', error);
            });
        }
    }

    // Initialize all tracking
    function initializeTracking() {
        trackClicks();
        trackScrolls();
        trackHovers();
        trackFormInteractions();

        // Send data periodically
        setInterval(sendHeatmapData, 30000); // Every 30 seconds

        // Send data on page unload
        window.addEventListener('beforeunload', sendHeatmapData);

        console.log('Heatmap tracking initialized');
    }

    // Start tracking
    initializeTracking();
}

// User Behavior Analytics (12.1 continued)
function initializeUserBehaviorAnalytics() {
    const userBehavior = {
        sessionStart: Date.now(),
        pageViews: [],
        timeOnPage: 0,
        interactions: 0,
        bounceRate: true,
        conversionEvents: []
    };

    // Track page views
    function trackPageView() {
        const pageData = {
            url: window.location.href,
            title: document.title,
            timestamp: Date.now(),
            referrer: document.referrer,
            userAgent: navigator.userAgent
        };

        userBehavior.pageViews.push(pageData);

        if (typeof gtag !== 'undefined') {
            gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: pageData.title,
                page_location: pageData.url
            });
        }
    }

    // Track time on page
    function trackTimeOnPage() {
        setInterval(() => {
            userBehavior.timeOnPage += 1;

            // User is engaged if they spend more than 30 seconds
            if (userBehavior.timeOnPage > 30) {
                userBehavior.bounceRate = false;
            }
        }, 1000);
    }

    // Track user interactions
    function trackInteractions() {
        ['click', 'scroll', 'keypress', 'mousemove'].forEach(eventType => {
            document.addEventListener(eventType, () => {
                userBehavior.interactions++;
                userBehavior.bounceRate = false;
            }, { passive: true, once: false });
        });
    }

    // Track conversion events
    function trackConversionEvent(eventName, value = null) {
        const conversionData = {
            event: eventName,
            value: value,
            timestamp: Date.now(),
            url: window.location.href
        };

        userBehavior.conversionEvents.push(conversionData);

        if (typeof gtag !== 'undefined') {
            gtag('event', 'conversion', {
                event_category: 'engagement',
                event_label: eventName,
                value: value
            });
        }
    }

    // Track specific business events
    function trackBusinessEvents() {
        // Track menu views
        const menuObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    trackConversionEvent('menu_viewed');
                }
            });
        });

        const menuSection = document.getElementById('menu');
        if (menuSection) {
            menuObserver.observe(menuSection);
        }

        // Track product interactions
        document.addEventListener('click', (e) => {
            if (e.target.closest('.menu__order-btn')) {
                trackConversionEvent('product_order_clicked');
            }

            if (e.target.closest('.menu__card')) {
                trackConversionEvent('product_viewed');
            }

            if (e.target.closest('.newsletter-modal__submit')) {
                trackConversionEvent('newsletter_signup');
            }

            if (e.target.closest('.whatsapp-action')) {
                trackConversionEvent('whatsapp_clicked');
            }
        });
    }

    // Generate behavior report
    function generateBehaviorReport() {
        return {
            sessionDuration: Date.now() - userBehavior.sessionStart,
            pageViews: userBehavior.pageViews.length,
            timeOnPage: userBehavior.timeOnPage,
            interactions: userBehavior.interactions,
            bounceRate: userBehavior.bounceRate,
            conversionEvents: userBehavior.conversionEvents,
            engagementScore: calculateEngagementScore()
        };
    }

    // Calculate engagement score
    function calculateEngagementScore() {
        let score = 0;

        // Time on page (max 40 points)
        score += Math.min(userBehavior.timeOnPage / 60 * 10, 40);

        // Interactions (max 30 points)
        score += Math.min(userBehavior.interactions / 10 * 30, 30);

        // Conversions (max 30 points)
        score += userBehavior.conversionEvents.length * 10;

        return Math.min(score, 100);
    }

    // Initialize behavior tracking
    trackPageView();
    trackTimeOnPage();
    trackInteractions();
    trackBusinessEvents();

    // Send behavior data on page unload
    window.addEventListener('beforeunload', () => {
        const report = generateBehaviorReport();

        if (navigator.sendBeacon) {
            navigator.sendBeacon('/api/user-behavior', JSON.stringify(report));
        }
    });

    // Expose tracking function globally
    window.trackConversionEvent = trackConversionEvent;

    console.log('User Behavior Analytics initialized');
}

// Personalization Engine (12.2)
function initializePersonalizationEngine() {
    const userProfile = {
        preferences: JSON.parse(localStorage.getItem('user-preferences')) || {},
        behavior: JSON.parse(localStorage.getItem('user-behavior')) || {},
        demographics: JSON.parse(localStorage.getItem('user-demographics')) || {},
        purchaseHistory: JSON.parse(localStorage.getItem('purchase-history')) || []
    };

    // Collect user preferences
    function collectUserPreferences() {
        // Track category preferences
        document.addEventListener('click', (e) => {
            if (e.target.closest('.menu__tab')) {
                const category = e.target.dataset.tab;
                if (!userProfile.preferences.categories) {
                    userProfile.preferences.categories = {};
                }
                userProfile.preferences.categories[category] = (userProfile.preferences.categories[category] || 0) + 1;
                saveUserProfile();
            }

            // Track product preferences
            if (e.target.closest('.menu__card')) {
                const productId = e.target.closest('.menu__card').dataset.productId;
                if (productId) {
                    if (!userProfile.preferences.products) {
                        userProfile.preferences.products = {};
                    }
                    userProfile.preferences.products[productId] = (userProfile.preferences.products[productId] || 0) + 1;
                    saveUserProfile();
                }
            }
        });

        // Track time spent on sections
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    if (sectionId) {
                        if (!userProfile.behavior.sectionTime) {
                            userProfile.behavior.sectionTime = {};
                        }

                        const startTime = Date.now();
                        entry.target.dataset.viewStart = startTime;
                    }
                } else {
                    const sectionId = entry.target.id;
                    const startTime = entry.target.dataset.viewStart;

                    if (sectionId && startTime) {
                        const timeSpent = Date.now() - parseInt(startTime);
                        if (!userProfile.behavior.sectionTime) {
                            userProfile.behavior.sectionTime = {};
                        }
                        userProfile.behavior.sectionTime[sectionId] = (userProfile.behavior.sectionTime[sectionId] || 0) + timeSpent;
                        saveUserProfile();
                    }
                }
            });
        });

        // Observe main sections
        document.querySelectorAll('section[id]').forEach(section => {
            sectionObserver.observe(section);
        });
    }

    // Generate personalized recommendations
    function generateRecommendations() {
        const recommendations = [];

        // Product recommendations based on preferences
        if (userProfile.preferences.products) {
            const topProducts = Object.entries(userProfile.preferences.products)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 3)
                .map(([productId]) => productId);

            recommendations.push({
                type: 'products',
                title: 'Productos que te pueden gustar',
                items: topProducts,
                reason: 'Basado en tus productos favoritos'
            });
        }

        // Category recommendations
        if (userProfile.preferences.categories) {
            const topCategory = Object.entries(userProfile.preferences.categories)
                .sort(([, a], [, b]) => b - a)[0];

            if (topCategory) {
                recommendations.push({
                    type: 'category',
                    title: `Más productos de ${topCategory[0]}`,
                    category: topCategory[0],
                    reason: 'Tu categoría favorita'
                });
            }
        }

        // Time-based recommendations
        const hour = new Date().getHours();
        if (hour >= 6 && hour <= 11) {
            recommendations.push({
                type: 'time-based',
                title: 'Perfecto para el desayuno',
                items: ['jugo-naranja', 'jugo-verde', 'cafe-americano'],
                reason: 'Recomendado para la mañana'
            });
        } else if (hour >= 14 && hour <= 17) {
            recommendations.push({
                type: 'time-based',
                title: 'Energía para la tarde',
                items: ['frapp-chocolate', 'cafe-latte', 'jugo-mixto'],
                reason: 'Perfecto para la tarde'
            });
        }

        return recommendations;
    }

    // Personalize content
    function personalizeContent() {
        const recommendations = generateRecommendations();

        // Create personalized section
        const personalizedSection = document.createElement('section');
        personalizedSection.className = 'personalized-recommendations section';
        personalizedSection.innerHTML = `
            <div class="container">
                <div class="personalized-recommendations__header">
                    <h2>Recomendado para ti</h2>
                    <p>Basado en tus preferencias y comportamiento</p>
                </div>
                <div class="personalized-recommendations__content">
                    ${recommendations.map(rec => `
                        <div class="recommendation-card">
                            <h3>${rec.title}</h3>
                            <p class="recommendation-reason">${rec.reason}</p>
                            <div class="recommendation-items">
                                ${rec.type === 'products' ? renderProductRecommendations(rec.items) : ''}
                                ${rec.type === 'category' ? `<button class="btn btn--primary" onclick="filterByCategory('${rec.category}')">Ver ${rec.category}</button>` : ''}
                                ${rec.type === 'time-based' ? renderProductRecommendations(rec.items) : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Insert before contact section
        const contactSection = document.getElementById('contact');
        if (contactSection && recommendations.length > 0) {
            contactSection.parentNode.insertBefore(personalizedSection, contactSection);
        }
    }

    // Render product recommendations
    function renderProductRecommendations(productIds) {
        return productIds.map(productId => {
            const product = findProductById(productId);
            if (!product) return '';

            return `
                <div class="recommendation-product">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <h4>${product.name}</h4>
                    <span class="price">$${product.price.toFixed(2)}</span>
                    <button class="btn btn--small btn--primary" onclick="addToCart('${productId}')">
                        Agregar
                    </button>
                </div>
            `;
        }).join('');
    }

    // Dynamic pricing based on user behavior
    function implementDynamicPricing() {
        // Show discounts to frequent visitors
        const visitCount = parseInt(localStorage.getItem('visit-count') || '0') + 1;
        localStorage.setItem('visit-count', visitCount.toString());

        if (visitCount >= 5 && visitCount <= 10) {
            showPersonalizedOffer('¡Oferta especial para ti!', '10% de descuento en tu próxima compra', 'FREQUENT10');
        } else if (visitCount >= 15) {
            showPersonalizedOffer('¡Cliente VIP!', '15% de descuento + envío gratis', 'VIP15');
        }
    }

    // Show personalized offers
    function showPersonalizedOffer(title, description, code) {
        const offerBanner = document.createElement('div');
        offerBanner.className = 'personalized-offer-banner';
        offerBanner.innerHTML = `
            <div class="offer-content">
                <h3>${title}</h3>
                <p>${description}</p>
                <div class="offer-code">Código: <strong>${code}</strong></div>
                <button class="btn btn--primary btn--small" onclick="applyOffer('${code}')">
                    Aplicar Oferta
                </button>
                <button class="offer-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;

        document.body.appendChild(offerBanner);

        setTimeout(() => {
            offerBanner.classList.add('show');
        }, 1000);
    }

    // A/B testing for personalization
    function runABTests() {
        const userId = localStorage.getItem('user-id') || generateUserId();
        localStorage.setItem('user-id', userId);

        // Test different hero messages
        const heroTests = [
            'Jugos 100% naturales para una vida saludable',
            'Descubre el sabor auténtico de la naturaleza',
            'Tu dosis diaria de vitaminas y energía'
        ];

        const testVariant = parseInt(userId.slice(-1)) % heroTests.length;
        const heroTitle = document.querySelector('.hero__title');
        if (heroTitle) {
            heroTitle.textContent = heroTests[testVariant];
        }

        // Track A/B test
        if (typeof gtag !== 'undefined') {
            gtag('event', 'ab_test_view', {
                test_name: 'hero_message',
                variant: testVariant
            });
        }
    }

    // Generate unique user ID
    function generateUserId() {
        return 'user_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
    }

    // Save user profile
    function saveUserProfile() {
        localStorage.setItem('user-preferences', JSON.stringify(userProfile.preferences));
        localStorage.setItem('user-behavior', JSON.stringify(userProfile.behavior));
        localStorage.setItem('user-demographics', JSON.stringify(userProfile.demographics));
        localStorage.setItem('purchase-history', JSON.stringify(userProfile.purchaseHistory));
    }

    // Initialize personalization
    collectUserPreferences();

    // Delay personalization to avoid blocking initial load
    setTimeout(() => {
        personalizeContent();
        implementDynamicPricing();
        runABTests();
    }, 2000);

    // Expose functions globally
    window.applyOffer = function (code) {
        console.log('Applying offer code:', code);
        // Implement offer application logic
        alert(`Código ${code} aplicado exitosamente!`);
    };

    window.filterByCategory = function (category) {
        if (window.MenuFilters) {
            MenuFilters.setCategory(category);
        }
    };

    console.log('Personalization Engine initialized');
}

// Initialize Analytics and Personalization
document.addEventListener('DOMContentLoaded', function () {
    // Initialize with delay to not block initial page load
    setTimeout(() => {
        initializeHeatmapTracking();
        initializeUserBehaviorAnalytics();
        initializePersonalizationEngine();
    }, 1000);
});