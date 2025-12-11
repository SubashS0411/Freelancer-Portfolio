
Here is the comprehensive Product Requirement Document (PRD) for "Canvas", a high-end Personal Portfolio & Freelancer website.
This document is optimized for GitHub Copilot to generate a creative, award-winning style aesthetic with strict technical compliance.
Product Requirement Document (PRD): "Canvas" - Premium Freelancer Portfolio
1. Project Overview
Project Name: Canvas
Type: Frontend-only Personal Portfolio
Objective: Create a visually immersive, highly responsive portfolio for a creative professional (Developer/Designer). The site must showcase work with premium animations, strict typography, and a seamless LTR/RTL transmission.
Constraint Checklist:
✅ No Login/Auth pages.
✅ No Dashboards.
✅ Frontend logic only.
2. Technical Stack & Strict Constraints
Core: HTML5, CSS3 (Tailwind CSS), Vanilla JavaScript.
Styling: Tailwind CSS (via CDN or CLI).
Constraint: NO Inline CSS. NO Internal CSS. All styles in style.css.
JavaScript:
js/main.js: UI logic (Filtering, Modals, Forms).
js/rtl-toggle.js: Exclusive file for LTR/RTL logic and direction animations.
Assets: FontAwesome/Phosphor Icons, Unsplash Images.
3. Design System & UI Theme
Vibe: "Creative Brutalism" meets "Swiss Minimalism." Big typography, high contrast, subtle micro-interactions.
Typography:
Headings: 'Clash Display' or 'Syne' (Bold, Exaggerated).
Body: 'Space Grotesk' or 'Inter' (Clean, Tech-focused).
Palette (Variant 1 - Light): Off-White (#fbfbfe), Deep Black (#050505), Accent Blurple (#4f46e5).
Palette (Variant 2 - Dark): Matte Black (#101010), Neon Lime (#d9f99d), White Text.
4. File Structure
code
Text
/root
  ├── index.html           (Home V1: Typography & List Focus)
  ├── index2.html          (Home V2: Visual & Image Focus)
  ├── about.html           (Biography, Experience, Tech Stack)
  ├── portfolio.html       (Masonry Grid of Projects)
  ├── blog.html            (Thoughts & Tutorials)
  ├── pricing.html         (Freelance Rate Cards)
  ├── contact.html         (Inquiry Form)
  ├── 404.html             (Creative Error)
  ├── coming-soon.html     (Availability Timer)
  ├── assets/              (Images, Icons)
  ├── css/
  │   └── style.css        (Tailwind components)
  └── js/
      ├── main.js          (Interactions)
      └── rtl-toggle.js    (RTL Engine)
5. Global Components & RTL Logic
Navigation Bar (The "transformer")
Desktop:
LTR Order: [Name/Logo] --- [Work] [Services] [Notes] --- [Let's Talk Btn] [RTL Toggle]
RTL Order: [RTL Toggle] [Let's Talk Btn] --- [Notes] [Services] [Work] --- [Name/Logo]
Design: Floating pill shape with glassmorphism (backdrop-blur).
Mobile:
LTR: Logo Left, Hamburger Right.
RTL: Logo Right, Hamburger Left.
Animation: Menu overlay expands as a circle from the button position.
The "Wipe" Animation (RTL Transition)
Visual: When toggling language, a "Paint Brush" effect or a solid block of the accent color wipes across the screen physically hiding the layout change.
Duration: 600ms.
6. Page-by-Page Requirements
1. index.html (Home V1 - The "Designer" Vibe)
Hero: Minimalist. Huge text, taking up 80% of the screen.
Text: "Building digital products / that matter." (Animated typing effect).
Selected Work: A vertical list (Table style). Hovering a row reveals a floating project image following the cursor.
Ticker: Infinite scrolling tape: "Strategy • Design • Development • Deployment".
CTA: Large footer link: "Have an idea? Tell me everything."
2. index2.html (Home V2 - The "Developer" Vibe)
Theme: Dark Mode by default.
Hero: Split screen. Left: Introduction. Right: An abstract CSS-only animated geometric shape (rotating cube or sphere).
Services: Grid of cards with tech icons (React, Tailwind, Node).
Testimonials: Horizontal scrolling cards with client avatars.
3. about.html
Bio: "Not just a coder. A problem solver."
Timeline: Vertical line showing career path (Freelance -> Agency -> Lead -> Freelance).
Tech Stack: A "Periodic Table" style grid of tools used (Figma, VS Code, Git, etc.).
Personal: "What I do offline" (Photography, Gaming, etc.) to humanize the profile.
4. portfolio.html
Filter: Tabs at top [All] [Web] [Branding] [Mobile].
Grid: Masonry Layout (Pinterest style). Images vary in height.
Card Interaction: Zoom on hover. Display "View Case Study" button overlay.
5. blog.html
Layout: Clean, medium-width reading column.
Entries: Large Typography titles. Date and Read Time badges.
Highlight: "Featured Article" at the top with a colored background.
6. pricing.html
Concept: "Transparency builds trust."
Cards:
Hourly: "The Fixer" (Consultation).
Project: "The Builder" (End-to-end website).
Retainer: "The Partner" (Monthly maintenance).
FAQ: Specific questions about payments, revisions, and contracts.
7. contact.html
Layout: Split screen.
Left: Contact info + Social Links (styled as large buttons).
Right: Minimalist form. No borders, just bottom lines.
Validation: JS check for email format.
8. Utilities
404.html: A glitched text effect. "404 - Creativity Not Found."
coming-soon.html: "Currently booked until [Month]." Email waitlist form.
7. JavaScript Logic Specifications
js/rtl-toggle.js
Trigger: Click event on .rtl-toggle-btn.
Animation:
Add class .wiping-active to body.
Wait 300ms.
Swap dir attribute (ltr <-> rtl).
Physically swap Navbar DOM order (e.g., utilize CSS flex properties order-1, order-last or standard flex-direction: row-reverse).
Wait 300ms.
Remove .wiping-active.
Mobile: Ensure the mobile drawer slide-in direction flips (Left vs Right).
js/main.js
Portfolio Filter: Simple DOM manipulation to show/hide .project-card based on data-category.
Cursor Follower (Index V1): Track mouse X/Y to move the floating image preview.
Form: Prevent default submit. Show success message modal.
8. Copilot Prompt Instructions
Step 1: Setup & Design System
"Create the project structure for 'Canvas Portfolio'. Setup style.css with Tailwind directives.
Define the design system:
Fonts: 'Syne' (Display) and 'Inter' (Body).
Colors: Define a 'Noir' theme (Black/White) and a 'Neon' accent.
Create a responsive header.
Desktop LTR: Logo Left, Links Center, RTL Toggle Right.
Desktop RTL: RTL Toggle Left, Links Center, Logo Right.
Mobile: Standard Hamburger.
Create rtl-toggle.js that handles the dir switch and forces the Navbar elements to visual reverse using Tailwind utility classes."
Step 2: Home Pages (The Visuals)
"Create index.html (V1). Minimalist theme. Feature a 'Selected Work' section that is a simple list of project names. Add a Javascript effect where hovering a list item reveals a project screenshot floating near the cursor.
Create index2.html (V2). Dark theme. Hero section should have a large headline and a placeholder for a 3D CSS animation. Feature a 'Services' grid."
Step 3: Portfolio & Work
"Create portfolio.html. Implement a Masonry Grid layout using Tailwind columns. Add a JavaScript filter mechanism (Tabs: All, Design, Dev) to hide/show items without reloading.
Create pricing.html. Three distinct cards (Hourly, Fixed, Retainer). Use high-contrast borders."
Step 4: The Professional Details
"Create about.html. Include a vertical timeline for 'Experience' and a grid layout for 'Tech Stack'.
Create blog.html. Clean, typography-focused layout for reading.
Create contact.html. Split screen layout. Form on one side, large social link buttons on the other."
Step 5: Utilities
"Create 404.html with a glitch text effect.
Create coming-soon.html with a 'Booked Until...' message.
Ensure main.js handles the mobile menu opening (slide from right in LTR, slide from left in RTL)."
Use Arrow Up and Arrow Down to select a turn, Enter to jump to it, and Escape to return to the chat.
