# Nest Capital Finance - Website

## About
Nest Capital Finance is a professional mortgage brokerage website serving Melbourne and Victoria, Australia. We specialize in home loans, investment loans, commercial finance, refinancing, and SMSF lending.

## Live Website
🌐 [https://nestcapitalfinance.com.au](https://nestcapitalfinance.com.au)

## Features
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI**: Built with Tailwind CSS for a clean, professional look
- **SEO Optimized**: Includes meta tags, schema markup, and sitemap
- **Performance Optimized**: Lazy loading images, minified CSS, optimized font loading
- **Contact Forms**: Integrated contact and booking functionality
- **Service Pages**: Dedicated pages for each loan type
- **Resources**: Articles and calculators for homebuyers
- **Lender Panel**: Showcase of partner banks and financial institutions

## Tech Stack
- **HTML5**: Semantic markup for better SEO
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript**: For interactive elements and animations
- **Google Fonts**: Jost font family with display=swap optimization
- **Chart.js**: For data visualizations
- **Lucide Icons**: Modern icon set

## File Structure
```
├── index.html                    # Homepage
├── test.html                     # Services landing page
├── privacy-policy.html           # Privacy policy
├── terms-conditions.html         # Terms and conditions
├── sitemap.xml                   # XML sitemap for SEO
├── Logolink.jpg                  # Company logo
├── logo.png                      # Alternative logo format
├── normalhouse.png               # Home loan visual
├── Rowhouse.jpg                  # Row house visual
├── warehouse.png                 # Commercial property visual
├── commercial.png                # Commercial finance visual
├── Underconstructinhouse.png     # Construction loan visual
└── README.md                     # This file
```

## Pages

### Homepage (`index.html`)
- Hero section with call-to-action
- Service categories
- About section
- Testimonials
- Lender panel
- Contact section

### Services (`test.html`)
- Home Loans
- Investment Loans
- Commercial Finance
- SMSF Lending
- Refinancing options

### Legal Pages
- Privacy Policy
- Terms and Conditions

## Performance Optimizations

### Images
- Lazy loading implemented on all images
- Optimized image formats
- Preload directives for critical images

### CSS
- Minified Tailwind CSS
- Critical CSS inlined
- Non-critical CSS deferred

### Fonts
- Google Fonts with `display=swap` parameter
- Font preconnect for faster loading

### SEO
- Comprehensive meta tags
- Open Graph tags for social sharing
- Schema.org structured data (FinancialService)
- XML sitemap
- Canonical URLs

## Schema Markup
The website includes JSON-LD structured data for:
- Business information
- Address and location (Melbourne, VIC)
- Contact information (phone, email)
- Opening hours (Monday-Friday, 9:00-17:30)
- Service type (Financial Services)

## Contact Information
- **Phone**: 1300 385 222
- **Email**: info@nestcapitalfinance.com.au
- **Address**: Melbourne, VIC, Australia

## Deployment
The website is deployed using GitHub Pages:
1. Push changes to the `main` branch
2. GitHub Pages automatically builds and deploys
3. Live at: https://nestcapitalfinance.com.au

## Custom Domain Setup
To link your custom domain:
1. Add a CNAME file with your domain name
2. Configure DNS settings:
   - Add A records pointing to GitHub Pages IPs
   - Add CNAME record for www subdomain
3. Enable HTTPS in repository settings

## Future Enhancements
- [ ] Dynamic Google Reviews integration
- [ ] Blog/Articles CMS integration
- [ ] Mortgage calculator tools
- [ ] Online application forms
- [ ] Live chat support
- [ ] Multi-language support

## Maintenance

### Updating Content
1. Edit HTML files directly in GitHub or clone locally
2. Test changes using the Preview tab
3. Commit changes with descriptive messages
4. Changes go live automatically via GitHub Pages

### Adding New Pages
1. Create new HTML file in root directory
2. Follow existing page structure
3. Include navigation links in header
4. Update sitemap.xml
5. Add to test.html services menu if applicable

### Image Management
- Keep images under 1MB for optimal performance
- Use descriptive filenames
- Add alt text for accessibility and SEO
- Consider using WebP format for better compression

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License
All rights reserved © 2025 Nest Capital Finance Pty Ltd

## Support
For technical issues or questions, contact the development team or open an issue in this repository.

---

**Last Updated**: February 2025
