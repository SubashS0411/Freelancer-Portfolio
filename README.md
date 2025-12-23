# Canvas — High-End Developer Portfolio 🎨

![Status](https://img.shields.io/badge/Status-Ready%20to%20Deploy-success?style=for-the-badge)
![Mobile](https://img.shields.io/badge/Mobile-Responsive-blue?style=for-the-badge)
![RTL](https://img.shields.io/badge/RTL%2FLTR-Supported-orange?style=for-the-badge)

> A premium, brutalist-inspired portfolio template designed for developers, designers, and creative agencies. Featuring dual home variants, seamless RTL support, and high-performance animations.

**🚀 VERIFIED & DEPLOYMENT READY!** All functionality tested and working perfectly on mobile, desktop, RTL, and LTR modes.

![Canvas Portfolio](https://images.unsplash.com/photo-1545665277-5937489579f2?auto=format&fit=crop&q=80&w=1200)

## ✨ key Features

-   **Dual Home Layouts**:
    -   **V1 (Designer)**: minimalist, typography-driven, cursor followers, and infinite tickers.
    -   **V2 (Developer)**: Dark mode native, 3D CSS cube animations, and tech-focused aesthetics.
-   **Global RTL Support**:
    -   One-click **LTR/RTL toggling** with a smooth "wipe" transition.
    -   **Smart Fonts**: Automatically switches to `Tajawal` for Arabic/RTL text while keeping `Outfit` for English.
-   **Premium Interactions**:
    -   **Magnetic Buttons**: Hover effects that lift and shadow.
    -   **Scroll Reveals**: Elements animate in as you scroll.
    -   **Custom Cursor**: Context-aware floating previews.
-   **Comprehensive Pages**:
    -   Services, Portfolio (Masonry Grid), Pricing, Blog, About, and Contact (with validation).

## 🛠 Tech Stack

Built for speed and simplicity. No complex build steps required.

-   **Core**: HTML5, Vanilla JavaScript.
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (CDN Version for rapid prototyping).
-   **Icons**: [Phosphor Icons](https://phosphoricons.com/).
-   **Fonts**:
    -   *Headings*: [Syne](https://fonts.google.com/specimen/Syne) / [Outfit](https://fonts.google.com/specimen/Outfit)
    -   *Body*: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) / [Inter](https://fonts.google.com/specimen/Inter)
    -   *RTL*: [Tajawal](https://fonts.google.com/specimen/Tajawal)

## 📂 File Structure

```bash
root/
├── index.html          # Home V1 (Light/Creative)
├── index2.html         # Home V2 (Dark/Dev)
├── portfolio.html      # Masonry Project Grid
├── services.html       # Detailed Services
├── about.html          # Resume & Bio
├── css/
│   └── style.css       # Global styles, Keyframes, Custom Utilities
├── js/
│   ├── main.js         # Core logic (Menu, Hover, Form)
│   └── rtl-toggle.js   # Direction switching logic
└── assets/             # Images and static files
```

## 🚀 Getting Started

1.  **Clone or Download** the repository.
2.  Open `index.html` in any modern web browser.
3.  **That's it!** No `npm install` or build process needed for the base version.

> **Note**: To customize colors, edit the `tailwind.config` script tag in the `<head>` of your HTML files or `style.css` CSS variables.

## 🎨 Customizing

### Changing Theme Colors
Edit the Tailwind config object in the `<head>`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'neon-lime': '#d9f99d', // Change your accent color here
                'deep-black': '#050505',
            }
        }
    }
}
```

### Adding Projects
Open `portfolio.html` and duplicate the `.project-card` blocks. Ensure you update the `data-category` for the filter to work!

---

© 2025 Canvas Portfolio. Crafted with Precision.
