import PropertyCard from './PropertyCard.js';

class PropertyCarousel {
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.propertiesContainer = document.getElementById('properties-container');
        this.currentIndex = 0;
        this.properties = [
            {
                id: 1,
                price: 1249000,
                title: "BUILDING NAME",
                location: "Abu Dhabi, Yas Island",
                bedrooms: 3,
                bathrooms: 3,
                size: 1142,
                badge: "For Sale",
                type: "Property Type",
                image: 'https://oiaproperties.com/images/properties/Exterior%202_1753002457_27c8eef5.webp',
                agent: { name: "Nouman Siddiqui", avatar: 'https://www.oiaproperties.com/storage/User/1746019967WhatsApp%20Image%202025-04-30%20at%201.05.29%20PM.jpeg' }
            },
            {
                id: 2,
                price: 1249000,
                title: "BUILDING NAME",
                location: "Abu Dhabi, Yas Island",
                bedrooms: 3,
                bathrooms: 3,
                size: 1142,
                badge: "For Sale",
                type: "Property Type", 
                image: 'https://oiaproperties.com/images/properties/Exterior%201_1753002458_84c8fcb1.webp',
                agent: { name: "Nouman Siddiqui", avatar: 'https://finologyuk.com/wp-content/uploads/2025/03/pngtree-man-avatar-image-for-profile-png-image_13001877.png' }
            },
            {
                id: 3,
                price: 1249000,
                title: "BUILDING NAME",
                location: "Abu Dhabi, Yas Island",
                bedrooms: 3,
                bathrooms: 3,
                size: 1142,
                badge: "For Sale",
                type: "Property Type",
                image: 'https://oiaproperties.com/images/properties/Exterior%203_1753002457_b82732ae.webp',
                agent: { name: "Nouman Siddiqui", avatar: 'https://finologyuk.com/wp-content/uploads/2025/03/pngtree-man-avatar-image-for-profile-png-image_13001877.png' }
            },
            {
                id: 4,
                price: 1249000,
                title: "BUILDING NAME",
                location: "Abu Dhabi, Yas Island",
                bedrooms: 3,
                bathrooms: 3,
                size: 1142,
                badge: "For Sale",
                type: "Property Type",
                image: 'https://oiaproperties.com/images/properties/Exterior%202_1753002457_27c8eef5.webp',
                agent: { name: "Nouman Siddiqui", avatar: 'https://www.oiaproperties.com/storage/User/1746019967WhatsApp%20Image%202025-04-30%20at%201.05.29%20PM.jpeg' }
            },
            {
                id: 5,
                price: 1249000,
                title: "BUILDING NAME",
                location: "Abu Dhabi, Yas Island",
                bedrooms: 3,
                bathrooms: 3,
                size: 1142,
                badge: "For Sale",
                type: "Property Type",
                image: 'https://oiaproperties.com/images/properties/Exterior%201_1753002458_84c8fcb1.webp',
                agent: { name: "Nouman Siddiqui", avatar: 'https://finologyuk.com/wp-content/uploads/2025/03/pngtree-man-avatar-image-for-profile-png-image_13001877.png' }
            },
            {
                id: 6,
                price: 1249000,
                title: "BUILDING NAME",
                location: "Abu Dhabi, Yas Island",
                bedrooms: 3,
                bathrooms: 3,
                size: 1142,
                badge: "For Sale",
                type: "Property Type",
                image: 'https://oiaproperties.com/images/properties/Exterior%203_1753002457_b82732ae.webp',
                agent: { name: "Nouman Siddiqui", avatar: 'https://www.oiaproperties.com/storage/User/1746019967WhatsApp%20Image%202025-04-30%20at%201.05.29%20PM.jpeg' }
            }
        ];
        this.init();
    }

    init() {
        this.render();
        this.setupNavigation();
        this.updateNavigationState();
    }

    render() {
        this.propertiesContainer.innerHTML = this.properties.map(property => new PropertyCard(property).render()).join('');
    }

    setupNavigation() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => this.previous());
            nextBtn.addEventListener('click', () => this.next());
        }
    }

    next() {
        // Max scroll: total cards - 3 visible cards = 6 - 3 = 3 positions (0,1,2,3)
        const maxIndex = this.properties.length - 3;
        if (this.currentIndex < maxIndex) {
            this.currentIndex++;
            this.updateCarousel();
        }
    }

    previous() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
        }
    }

    updateCarousel() {
        const scrollAmount = this.currentIndex * 340; // 320px + 20px gap
        this.propertiesContainer.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
        this.updateNavigationState();
    }


    updateNavigationState() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const maxIndex = this.properties.length - 3;
        
        if (prevBtn && nextBtn) {
            prevBtn.disabled = this.currentIndex <= 0;
            nextBtn.disabled = this.currentIndex >= maxIndex;
        }
    }
}

export default PropertyCarousel;