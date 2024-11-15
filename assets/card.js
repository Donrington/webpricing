// Show Details Modal
function showDetails(plan) {
    const modal = document.getElementById('detailsModal');
    const modalDetails = document.getElementById('modal-details');

    // Plan Details Data
    const planDetails = {
        'landing-page': {
            title: 'Landing Page Details',
            content: `
                <h3>Features:</h3>
                <ul>
                    <li>Custom Design Tailored to Your Brand</li>
                    <li>Responsive Layout for All Devices</li>
                    <li>Basic Search Engine Optimization</li>
                    <li>Contact or Lead Capture Form</li>
                    <li>Fast Loading Speed</li>
                </ul>
                <h3>Ideal For:</h3>
                <p>Businesses looking to establish an online presence quickly and effectively.</p>
            `
        },
        'personal-portfolio': {
            title: 'Personal Portfolio Details',
            content: `
                <h3>Features:</h3>
                <ul>
                    <li>Up to 5 Custom Pages</li>
                    <li>SEO Optimization</li>
                    <li>Responsive Design</li>
                    <li>Personal Branding Elements</li>
                    <li>Gallery or Portfolio Showcase</li>
                </ul>
                <h3>Ideal For:</h3>
                <p>Freelancers, creatives, and professionals showcasing their work and skills.</p>
            `
        },
        'basic-static': {
            title: 'Basic Static Website Details',
            content: `
                <h3>Features:</h3>
                <ul>
                    <li>Up to 5 Static Pages</li>
                    <li>Basic SEO</li>
                    <li>Responsive Design</li>
                    <li>No Backend Functionality</li>
                    <li>Clean and Modern Layout</li>
                </ul>
                <h3>Ideal For:</h3>
                <p>Small businesses needing an informative site without frequent updates.</p>
            `
        },
        'corporate-portfolio': {
            title: 'Corporate Portfolio Details',
            content: `
                <h3>Features:</h3>
                <ul>
                    <li>Up to 10 Pages</li>
                    <li>Advanced SEO Strategies</li>
                    <li>Responsive Design</li>
                    <li>Corporate Branding Integration</li>
                    <li>Case Studies and Testimonials</li>
                </ul>
                <h3>Ideal For:</h3>
                <p>Companies looking to showcase their services and projects professionally.</p>
            `
        },
        'blog-news': {
            title: 'Blog/News Site Details',
            content: `
                <h3>Features:</h3>
                <ul>
                    <li>Unlimited Pages and Posts</li>
                    <li>Advanced SEO Optimization</li>
                    <li>Custom Design and Layout</li>
                    <li>Content Management System (CMS)</li>
                    <li>Newsletter and Subscription Integration</li>
                </ul>
                <h3>Ideal For:</h3>
                <p>Bloggers, news outlets, and content creators needing regular updates.</p>
            `
        },
        'corporate-cms': {
            title: 'Corporate Website with CMS Details',
            content: `
                <h3>Features:</h3>
                <ul>
                    <li>Unlimited Pages</li>
                    <li>Premium SEO Services</li>
                    <li>Custom Design Tailored to Brand</li>
                    <li>Robust Content Management System</li>
                    <li>Integrated Blog and News Sections</li>
                </ul>
                <h3>Ideal For:</h3>
                <p>Large corporations requiring dynamic content and regular updates.</p>
            `
        },
 'basic-ecommerce': {
            title: 'Basic E-commerce Details',
            content: `
                <h3>Features:</h3>
                <ul>
                    <li>Up to 20 Products</li>
                    <li>Standard SEO Optimization</li>
                    <li>Basic Shopping Cart Functionality</li>
                    <li>Single Payment Gateway Integration</li>
                    <li>Responsive Design</li>
                    <li>Basic Product Management</li>
                </ul>
                <h3>Ideal For:</h3>
                <p>Small businesses starting online sales with a limited product range.</p>
            `
        },
        'standard-ecommerce': {
            title: 'Standard E-commerce Details',
            content: `
                <h3>Features:</h3>
                <ul>
                    <li>Up to 100 Products</li>
                    <li>Advanced SEO Strategies</li>
                    <li>Advanced Shopping Cart Features</li>
                    <li>Multiple Payment Gateway Integration</li>
                    <li>Inventory Management System</li>
                    <li>Customer Accounts and Order Tracking</li>
                </ul>
                <h3>Ideal For:</h3>
                <p>Medium-sized businesses expanding their online presence with more products and features.</p>
            `
        },
        'premium-ecommerce': {
            title: 'Premium E-commerce Details',
            content: `
                <h3>Features:</h3>
                <ul>
                    <li>Unlimited Products</li>
                    <li>Premium SEO Services</li>
                    <li>Custom E-commerce Features (Wishlists, Product Comparisons, etc.)</li>
                    <li>Multi-Currency and Multi-Language Support</li>
                    <li>CRM and ERP Integration</li>
                    <li>Advanced Analytics and Reporting</li>
                </ul>
                <h3>Ideal For:</h3>
                <p>Large enterprises requiring a comprehensive e-commerce solution with advanced features.</p>
            `
        },
        // Other plans...
    
        // Add more plan details as needed...
    };

    if (planDetails[plan]) {
        modalDetails.innerHTML = `
            <h2>${planDetails[plan].title}</h2>
            ${planDetails[plan].content}
            <button class="modal-contact-button" onclick="contactUs()">Contact Us</button>
        `;
        modal.style.display = 'block';
    }
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('detailsModal');
    modal.style.display = 'none';
}

// Close Modal on Outside Click
window.onclick = function(event) {
    const modal = document.getElementById('detailsModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Contact Us Function (Redirect or Open Contact Form)
function contactUs() {
    // Redirect to contact page or open contact form modal
    window.location.href = 'https://cybersage-portfolio.vercel.app/#contact';
}




