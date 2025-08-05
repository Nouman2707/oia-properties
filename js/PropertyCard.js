class PropertyCard {
    constructor(data) {
        this.data = data;
    }

    render() {
        return `
            <div class="property-card">
                <div class="property-image" style="background-image: url(${this.data.image})">
                    <div class="property-badges">
                        <div class="property-badge">${this.data.badge}</div>
                    </div>
                    <div class="property-favorite"><i class="far fa-heart"></i></div>
                    <div class="property-type">${this.data.type || 'Property Type'}</div>
                </div>
                <div class="property-info">
                    <div class="property-price">${this.data.price.toLocaleString()}</div>
                    <div class="property-title">${this.data.title}</div>
                    <div class="property-location">
                        <i class="fas fa-map-marker-alt"></i> ${this.data.location}
                    </div>
                    <div class="property-details">
                        <div class="property-detail-item">
                            <i class="fas fa-bed"></i> ${this.data.bedrooms} Bed
                        </div>
                        <div class="property-detail-item">
                            <i class="fas fa-bath"></i> ${this.data.bathrooms} Bath
                        </div>
                        <div class="property-detail-item">
                            <i class="fas fa-ruler-combined"></i> ${this.data.size} FT
                        </div>
                    </div>
                    <div class="property-actions">
                        <button><i class="fab fa-whatsapp"></i></button>
                        <button><i class="fas fa-phone"></i> Call</button>
                        <button><i class="fas fa-envelope"></i> Email</button>
                    </div>
                    <div class="property-agent">
                        <div class="agent-avatar" style="background-image: url(${this.data.agent.avatar})"></div>
                        <div class="agent-info">
                            <div class="agent-name">${this.data.agent.name}</div>
                        </div>
                        <button class="agent-details">Details</button>
                    </div>
                </div>
            </div>
        `;
    }
}

export default PropertyCard;