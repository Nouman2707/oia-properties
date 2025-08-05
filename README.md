# OIA Properties - Real Estate Website

A modern, responsive real estate website built with vanilla HTML5, CSS3, and modular JavaScript using Object-Oriented Programming principles.

## 🚀 Features

### **Core Functionality**
- **Hero Slider**: Auto-rotating background images with smooth transitions
- **Property Carousel**: Interactive property showcase with navigation controls
- **Off-Plan Projects**: Auto-playing project slider with detailed information
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **WhatsApp Integration**: Direct contact via WhatsApp button

### **Interactive Elements**
- Property search form with multiple filters
- Property favorite/unfavorite functionality
- Smooth scrolling navigation
- Mobile hamburger menu
- Tab switching for different property types
- Carousel navigation controls

### **SEO & Accessibility**
- Semantic HTML5 structure
- Proper heading hierarchy
- Meta tags for SEO optimization
- Responsive images and layouts
- WCAG accessibility considerations

## 📁 Project Structure

```
oia-properties/
├── index.html                 # Main HTML file
├── css/
│   └── style.css             # All styles and responsive design
├── js/
│   ├── main.js               # Main initialization and event handlers
│   ├── HeroSlider.js         # Hero background slider component
│   ├── PropertyCard.js       # Reusable property card component
│   ├── PropertyCarousel.js   # Property listing carousel
│   └── OffPlanSlider.js      # Off-plan projects slider
└── README.md                 # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with modern standards
- **CSS3**: Flexbox, Grid, animations, and responsive design
- **Vanilla JavaScript**: ES6+ modules with OOP architecture
- **SVG**: Scalable vector graphics for images and icons

## 🎨 Design Features

### **Color Scheme**
- Primary: `#ff6b35` (Orange)
- Secondary: `#f7931e` (Amber)
- Neutral: `#2c3e50` (Dark Blue)
- Background: `#f8f9fa` (Light Gray)

### **Typography**
- Font Family: Arial, sans-serif
- Responsive font sizes
- Clear hierarchy with proper headings

### **Layout**
- Mobile-first responsive design
- Flexible grid systems
- Card-based property displays
- Hero section with overlay content

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px and above

## 🚀 Getting Started

### **Installation**
1. Download or clone the project files
2. Extract to your desired directory
3. No build process required!

### **Running the Website**
```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Use a local server (recommended)
python -m http.server 8000
# or
npx serve .
```

### **Customization**

#### **Adding Real Images**
Replace the SVG placeholders in the JavaScript files:

```javascript
// In PropertyCarousel.js
image: './assets/images/property-1.jpg'

// In OffPlanSlider.js
image: './assets/images/saadiyat-lagoons.jpg'

// In HeroSlider.js
this.images = [
    './assets/images/hero-1.jpg',
    './assets/images/hero-2.jpg',
    './assets/images/hero-3.jpg'
];
```

#### **Updating Property Data**
Modify the properties array in `PropertyCarousel.js`:

```javascript
this.properties = [
    {
        id: 1,
        price: 1249000,
        title: "Your Property Name",
        location: "Your Location",
        bedrooms: 3,
        bathrooms: 3,
        size: 1142,
        badge: "For Sale",
        image: './assets/images/your-property.jpg',
        agent: {
            name: "Agent Name",
            avatar: './assets/images/agent-avatar.jpg'
        }
    }
    // Add more properties...
];
```

#### **Color Customization**
Update the CSS variables in `style.css`:

```css
:root {
    --primary-color: #ff6b35;
    --secondary-color: #f7931e;
    --dark-color: #2c3e50;
    --light-bg: #f8f9fa;
}
```

## 🔧 Class Architecture

### **HeroSlider.js**
- Manages hero background image rotation
- Auto-play functionality with 5-second intervals
- Smooth fade transitions between images

### **PropertyCard.js**
- Reusable component for property display
- Templated HTML generation
- Agent information integration

### **PropertyCarousel.js**
- Property listing management
- Navigation controls (prev/next)
- Grid/carousel responsive layout

### **OffPlanSlider.js**
- Project showcase slider
- Auto-play with 6-second intervals
- Dot navigation for manual control

### **main.js**
- Component initialization
- Global event handlers
- Cross-component functionality

## 📊 Performance Features

- **Lazy Loading**: Ready for image lazy loading implementation
- **Smooth Animations**: CSS transitions for better UX
- **Optimized Images**: SVG placeholders minimize initial load
- **Modular Code**: ES6 modules for better organization

## 🔗 Integration Ready

### **Backend Integration**
The modular structure makes it easy to integrate with:
- REST APIs for property data
- CMS systems (WordPress, Strapi)
- Real estate platforms
- Payment gateways

### **Third-Party Services**
- Google Maps integration ready
- WhatsApp Web API connected
- Email service integration points
- Social media sharing ready

## 🌐 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Email: noumansiddiqui227@gmail.com
- WhatsApp: +971554252715
- Website: https://oiaproperties.com

---


**Built with ❤️ for the real estate industry**
