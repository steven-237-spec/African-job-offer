African Job Offer
Overview
African Job Offer is a free, open-source freelancing web application designed to connect job seekers and recruiters in rural African communities, with a focus on Cameroon. The platform enables recruiters to post jobs (e.g., developer, civil engineer) and job seekers to apply, fostering economic growth and opportunity. The front-end is built with HTML, CSS (Tailwind CSS), and vanilla JavaScript, ensuring accessibility, responsiveness, and performance for low-bandwidth environments.
Features

Role-Based Access: Separate interfaces for job seekers and recruiters.
Job Listings: Searchable and filterable job listings (e.g., by category like developer or civil engineer).
Job Posting: Form for recruiters to post jobs with details like title, category, description, and location.
User Profiles: Manage personal information and skills (job seekers) or company details (recruiters).
Dashboard: Role-specific dashboards showing posted or applied jobs.
About & Contact: Pages to learn about the platform’s mission and contact the team.
Responsive Design: Mobile-first design optimized for low-end devices.
Accessibility: Semantic HTML and ARIA attributes for inclusivity.
African Aesthetic: Vibrant design with colors inspired by African culture (orange, green, red).

Project Structure
african-job-offer/
├── index.html              # Landing page
├── pages/
│   ├── login.html          # Login page
│   ├── register.html       # Registration page
│   ├── dashboard.html      # User dashboard
│   ├── post-job.html       # Job posting page
│   ├── job-listings.html   # Job listings page
│   ├── profile.html        # User profile page
│   ├── about.html          # About page
│   └── contact.html        # Contact page
├── css/
│   └── styles.css          # Custom CSS (Tailwind output + additional styles)
├── js/
│   ├── main.js             # Core JavaScript functionality
│   ├── auth.js             # Authentication handling
│   ├── jobs.js             # Job listing/posting logic
│   └── ui.js               # UI interactions (modals, filters, etc.)
├── assets/
│   ├── images/             # Logos, icons, and images
│   └── fonts/              # Custom fonts (if needed)
└── README.md               # Project documentation

Technologies

HTML5: Semantic structure for accessibility and SEO.
Tailwind CSS: Utility-first CSS framework via CDN for rapid, responsive design.
JavaScript (Vanilla): Handles form validation, job filtering, and UI interactions.
Progressive Enhancement: Basic functionality works without JavaScript for low-end devices.

Setup Instructions

Clone the Repository:
git clone https://github.com/your-repo/african-job-offer.git
cd african-job-offer


Serve the Application:

Use a local server (e.g., Live Server in VS Code or python -m http.server).
Open index.html in a browser to view the landing page.
No build process is required as Tailwind CSS is included via CDN.


Customize:

Modify css/styles.css for additional styles.
Update js/ files for custom JavaScript logic.
Add images or fonts to the assets/ directory as needed.


Testing:

Test on low-end devices and slow networks to ensure performance.
Verify accessibility with tools like Lighthouse or WAVE.



Usage

Landing Page: Entry point with CTAs for login/register.
Login/Register: Role-based forms for job seekers and recruiters.
Job Listings: Browse and filter jobs; job seekers can apply.
Job Posting: Recruiters can post jobs via a dedicated form.
Dashboard: View posted (recruiters) or applied (job seekers) jobs.
Profile: Update user details and skills/company information.
About/Contact: Learn about the platform or send inquiries.

Future Enhancements

Backend Integration: Add APIs for authentication, job posting, and applications (e.g., Node.js, Django).
Dynamic Data: Replace static job data with API calls.
Advanced Features: Job application tracking, notifications, or messaging.
Localization: Support for local languages (e.g., French for Cameroon).
Performance Optimization: Lazy-load images and minify assets.

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

Please ensure code follows the project’s style (Tailwind classes, modular JavaScript) and includes accessibility considerations.
License
This project is licensed under the MIT License. See LICENSE for details.
Contact
For inquiries, reach out via the Contact Page or email support@africanjoboffer.com.