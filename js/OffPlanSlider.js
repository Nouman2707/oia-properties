class OffPlanSlider {
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.currentIndex = 0;
        this.slides = [
            {
                title: "SAADIYAT LAGOONS",
                options: [
                    "4 BHK VILLA + MAID'S",
                    "5 BHK VILLA + MAID'S", 
                    "6 BHK VILLA + MAID'S"
                ],
                description: "Explore The Adventure Park, Stroll Across The Stunning Eco-corniche, Soak In Unparalleled Cultural Experiences—In A Choice Of 4 To 6-bed Villas Surrounded By Over 900,000m² Of Protected Wilderness.",
                details: {
                    "Starting Prices:": "AED 6,200,000",
                    "Number of Bedrooms:": "4, 5, 6",
                    "Area Size From:": "4,960 SQ. FT"
                },
                image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/821414155662321.6358f42f75a7d.jpg'
            },
            {
                title: "MARINA HEIGHTS",
                options: [
                    "2 BHK APARTMENT",
                    "3 BHK APARTMENT", 
                    "4 BHK PENTHOUSE"
                ],
                description: "Experience luxury waterfront living with panoramic marina views. Premium amenities including infinity pool, private beach access, and world-class dining options right at your doorstep.",
                details: {
                    "Starting Prices:": "AED 2,800,000",
                    "Number of Bedrooms:": "2, 3 & 4",
                    "Area Size From:": "1,200 SQ. FT"
                },
                image: 'https://oiaproperties.com/images/properties/Exterior%201_1753002458_84c8fcb1.webp'
            },
            {
                title: "SAADIYAT LAGOONS",
                options: [
                    "4 BHK VILLA + MAID'S",
                    "5 BHK VILLA + MAID'S", 
                    "6 BHK VILLA + MAID'S"
                ],
                description: "Explore The Adventure Park, Stroll Across The Stunning Eco-corniche, Soak In Unparalleled Cultural Experiences—In A Choice Of 4 To 6-bed Villas Surrounded By Over 900,000m² Of Protected Wilderness.",
                details: {
                    "Starting Prices:": "AED 6,200,000",
                    "Number of Bedrooms:": "4, 5, 6",
                    "Area Size From:": "4,960 SQ. FT"
                },
                image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/821414155662321.6358f42f75a7d.jpg'
            },
            {
                title: "MARINA HEIGHTS",
                options: [
                    "2 BHK APARTMENT",
                    "3 BHK APARTMENT", 
                    "4 BHK PENTHOUSE"
                ],
                description: "Experience luxury waterfront living with panoramic marina views. Premium amenities including infinity pool, private beach access, and world-class dining options right at your doorstep.",
                details: {
                    "Starting Prices:": "AED 2,800,000",
                    "Number of Bedrooms:": "2, 3 & 4",
                    "Area Size From:": "1,200 SQ. FT"
                },
                image: 'https://oiaproperties.com/images/properties/Exterior%201_1753002458_84c8fcb1.webp'
            },
        ];
        this.init();
    }

    init() {
        this.render();
        this.setupNavigation();
        this.startAutoPlay();
    }

    render() {
        const slidesHTML = this.slides.map((slide, index) => `
            <div class="offplan-slide ${index === 0 ? 'active' : ''}">
                <div class="offplan-arrows">
                    <button class="offplan-arrow prev" onclick="offPlanSlider.previous()">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="offplan-arrow next" onclick="offPlanSlider.next()">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                <div class="offplan-content">
                    <h3 class="offplan-title">${slide.title}</h3>
                    <div class="offplan-options">
                        ${slide.options.map(option => `
                            <div class="offplan-option">${option}</div>
                        `).join('')}
                    </div>
                    <div class="offplan-card">
                        <div class="offplan-description">
                            <p>${slide.description}</p>
                            <div class="offplan-key-values">
                                ${Object.entries(slide.details).map(([key, value]) => `
                                    <div>
                                        <span>${key}</span>
                                        <span class="detail-value">${value}</span>
                                    </div>
                                `).join('')}
                            </div>
                            <button class="offplan-cta">Book Your Property</button>
                        </div>
                        <div class="offplan-image" style="background-image: url(${slide.image})"></div>
                    </div>
                </div>
            </div>
        `).join('');

        const dotsHTML = this.slides.map((_, index) => `
            <button class="offplan-dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></button>
        `).join('');

        this.container.innerHTML = slidesHTML + `
            <div class="offplan-nav">${dotsHTML}</div>
        `;

        // Make slider available globally for arrow clicks
        window.offPlanSlider = this;
    }

    setupNavigation() {
        const dots = this.container.querySelectorAll('.offplan-dot');
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                this.currentIndex = parseInt(e.target.dataset.slide);
                this.updateSlide();
            });
        });
    }

    startAutoPlay() {
        setInterval(() => {
            this.next();
        }, 6000);
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateSlide();
    }

    previous() {
        this.currentIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
        this.updateSlide();
    }

    updateSlide() {
        const slides = this.container.querySelectorAll('.offplan-slide');
        const dots = this.container.querySelectorAll('.offplan-dot');

        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentIndex);
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }
}

export default OffPlanSlider;