const details = {
    'basic-static': 'The Basic Static Website includes up to 5 pages, basic SEO, and a responsive design. It does not include backend functionalities, making it perfect for simple, informational sites.',
    'standard-ecommerce': 'The Standard E-commerce package includes up to 10 pages, advanced SEO, e-commerce functionality, and payment gateway integration. It\'s ideal for small to medium-sized online stores.',
    'corporate-cms': 'The Corporate Website with CMS includes unlimited pages, premium SEO, custom design, a content management system, and blog integration. It\'s perfect for large businesses needing a robust online presence.',
    'personal-portfolio': 'The Personal Portfolio package includes up to 5 pages, SEO, responsive design, and personal branding. It\'s designed for individuals showcasing their work.',
    'corporate-portfolio': 'The Corporate Portfolio includes up to 10 pages, advanced SEO, responsive design, corporate branding, and case studies. It\'s ideal for businesses showcasing their services and projects.',
    'landing-page': 'The Landing Page package includes a single page, basic SEO, responsive design, and a lead capture form. It\'s perfect for marketing campaigns.',
    'blog-news': 'The Blog/News Site includes unlimited pages, advanced SEO, custom design, a CMS, and newsletter integration. It\'s ideal for content-driven websites.'
};

function showDetails(category) {
    document.getElementById('modal-details').innerHTML = details[category];
    document.getElementById('detailsModal').style.display = "block";
}

function closeModal() {
    document.getElementById('detailsModal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('detailsModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
