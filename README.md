# Curtain Factory – Premium Luxury Real Estate & Curtain Dealership Website

A modern, elegant, and fully responsive static business website designed and built for **Curtain Factory**, specializing in luxury curtain products, wholesale supplies, and dealership partnership opportunities across the **Dwarka–Najafgarh** region and Southwest Delhi, India.

---

## 🏛️ Brand Theme & Colour Palette
- **Golden**: `#C6A15B` (Buttons, icons, borders, highlights, accents)
- **White**: `#FFFFFF` (Clean card backgrounds, whitespace, clarity)
- **Dark Brown**: `#4A3428` (Headings, primary typography, luxury dark accents)
- **Cream**: `#F5F0E8` (Warm section backgrounds, soft contrast)
- **Beige**: `#E8DCCB` (Subtle divider rules, delicate borders)

### Typography
- **Headings**: `'Playfair Display', Georgia, serif`
- **Body**: `'Poppins', sans-serif`

---

## 📁 File Structure
```text
chandarkala/
├── index.html        # Semantic HTML5 static website structure
├── style.css         # Custom responsive CSS3 styling with variables & media queries
├── script.js         # Vanilla JavaScript (navigation, modals, form validations)
├── server.js         # Lightweight local preview server (Node.js built-in modules)
├── .gitignore        # Git ignore rules for node_modules and OS artifacts
└── README.md         # Documentation & deployment guide
```

---

## 🌟 Sections & Architecture

1. **Top Announcement Bar**:
   - Location indicator: `Dwarka–Najafgarh Region, Delhi, India`.
   - Direct call link: `+91 XXXXX XXXXX`.
   - Direct email link: `xyzcurtains@gmail.com`.
2. **Sticky Navigation Bar**:
   - Luxury brand logo: `CURTAIN FACTORY`.
   - Links: `Home`, `About Us`, `Collections`, `Dealership`, `Why Choose Us`, `Contact`.
   - Golden CTA button: `Become a Dealer`.
   - Responsive mobile drawer menu with touch-friendly layout and `Esc` key accessibility.
3. **SECTION 1: HERO**:
   - Headline: *"Transform Your Spaces with Premium Curtains"*
   - Subheading: *"Discover elegant curtain collections and dealership opportunities across Dwarka and Najafgarh, Delhi."*
   - Two CTA buttons: **Explore Our Collection** & **Become a Dealer**.
   - Luxury interior background with dark overlay and subtle entrance animations.
4. **SECTION 2: ABOUT OUR FACTORY**:
   - Focus on:
     - Premium curtain fabrics
     - Modern and traditional designs
     - Quality manufacturing
     - Affordable wholesale pricing
     - Custom curtain solutions
   - Authentic, professional presentation without fictitious certifications.
5. **SECTION 3: OUR CURTAIN COLLECTIONS (6 Specific Cards)**:
   - **Blackout Curtains**: 100% room darkening & thermal insulation.
   - **Sheer Curtains**: Airy daylight diffusion and privacy.
   - **Designer Curtains**: Architectural statement drapery with intricate borders.
   - **Printed Curtains**: Contemporary geometric & classical Indian patterns.
   - **Luxury Curtains**: Heavyweight opulent velvets and jacquards.
   - **Custom-Made Curtains**: Bespoke tailored lengths and pleat styles.
   - No fake prices or unsupported claims.
6. **SECTION 4: DEALERSHIP OPPORTUNITIES (MAJOR HIGHLIGHT)**:
   - Heading: *"Become Our Dealership Partner"*
   - Content: *"Explore business opportunities with our curtain factory. We welcome dealership enquiries from Dwarka, Najafgarh and nearby areas of Delhi."*
   - Clear dealership benefits:
     - Wholesale product availability
     - Multiple curtain collections
     - Business partnership opportunities
     - Product variety
     - Direct enquiry support
   - Prominent **Enquire for Dealership** button that pre-populates the enquiry form.
7. **SECTION 5: WHY CHOOSE US**:
   - 6 foundational advantages:
     1. Premium Fabric Quality
     2. Beautiful Designs
     3. Competitive Wholesale Pricing
     4. Multiple Collections
     5. Customisation Options
     6. Dedicated Customer Support
8. **SECTION 6: SERVICE AREA**:
   - Highlighted coverage:
     - **Dwarka, Delhi**
     - **Najafgarh, Delhi**
     - **Nearby areas of Southwest Delhi** (Uttam Nagar, Palam, Dabri, and Delhi NCR corridors).
9. **SECTION 7: CONTACT US**:
   - Phone: `+91 XXXXX XXXXX` (Click to call)
   - Email: `xyzcurtains@gmail.com` (Click to email)
   - Location: `Dwarka–Najafgarh Region, Delhi, India.`
   - Clickable **WhatsApp Enquiry** button (`https://wa.me/91XXXXXXXXXX?text=...`).
   - Dealership enquiry form with fields:
     - Full Name
     - Phone Number
     - Email Address
     - Area / Location
     - Enquiry Type
     - Message
   - Transparent static submission notice explaining that form submissions are not stored on a database, offering immediate dispatch via WhatsApp and Email.
10. **FOOTER**:
    - Business name placeholder (`CURTAIN FACTORY`).
    - Short business description.
    - Quick navigation links.
    - Contact number & email.
    - Service area details.
    - Copyright notice: `© 2026 Curtain Factory. All Rights Reserved.`

---

## 💻 Local Testing

Run the built-in, zero-dependency Node.js server:
```bash
node server.js
```
Then visit **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🚀 GitHub & Vercel Deployment

### Step 1: Upload to GitHub
1. Initialize git in this directory:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Curtain Factory luxury website"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Link and push your code:
   ```bash
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel
1. Visit [vercel.com](https://vercel.com) and log in.
2. Click **Add New...** > **Project**.
3. Import your GitHub repository.
4. Leave framework preset as **Other** (pure static HTML/CSS/JS).
5. Click **Deploy**. Vercel will generate your live production URL within seconds.
