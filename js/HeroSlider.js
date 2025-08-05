class HeroSlider {
    constructor(selector) {
    this.container = document.querySelector(selector);
        this.backgroundElement = this.container.querySelector('.hero-background');
        this.images = [
            'https://oiaproperties.com/images/properties/Exterior%202_1753002457_27c8eef5.webp',
            'https://oiaproperties.com/images/properties/Exterior%201_1753002458_84c8fcb1.webp',
            'https://oiaproperties.com/images/properties/Exterior%203_1753002457_b82732ae.webp'
        ];
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.updateBackground();
        this.setupNavigation();
        setInterval(() => {
            this.next();
        }, 5000);
    }

    setupNavigation() {
        const prevBtn = this.container.querySelector('.hero-nav-btn.prev');
        const nextBtn = this.container.querySelector('.hero-nav-btn.next');
        
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => this.previous());
            nextBtn.addEventListener('click', () => this.next());
        }
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateBackground();
    }

    previous() {
        this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
        this.updateBackground();
    }

    updateBackground() {
        this.backgroundElement.style.backgroundImage = `url(${this.images[this.currentIndex]})`;
    }
}

export default HeroSlider;