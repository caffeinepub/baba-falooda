# Baba Falooda Restaurant Website

## Current State
New project. Backend exists as empty Motoko actor. No frontend built yet.

## Requested Changes (Diff)

### Add
- Full single-page restaurant website for "Baba Falooda" stall near Mahim Dargah, Mumbai
- Sticky navigation header with smooth scroll links and "Order Now" CTA button
- Hero section with hero-banner image, headline, subtitle, and "View Menu" button
- About section with story text about Baba Falooda history and legacy
- Menu section with 4 item cards (Rose, Kulfi, Rabdi, Special Dry Fruit Falooda) with generated images, descriptions, and prices in ₹
- Gallery section with 4 generated images in a mosaic grid layout
- Why Choose Us section with 4 feature icons (Fresh Ingredients, Affordable Price, Famous Local Spot, Loved by Thousands)
- Reviews/Testimonials section with 3-5 realistic fake customer reviews and star ratings
- Location section with embedded Google Maps iframe for Mahim Dargah + address text + Get Directions button
- Contact section with dummy phone, open timings (5 PM – 1 AM), social media icons
- Footer with copyright, quick links, social icons
- Smooth scroll, hover animations, entrance animations on scroll

### Modify
- Nothing (new project)

### Remove
- Nothing

## Implementation Plan
1. Build single-page React app in App.tsx with all sections
2. Use generated images: hero-banner, rose-falooda, kulfi-falooda, rabdi-falooda, dryfruits-falooda, gallery-1 through gallery-4
3. Color theme: pink (#F9D0D8 background), deep rose (#C85B64 accent), white cards
4. Tailwind CSS for responsive layout
5. Intersection Observer for scroll animations
6. Google Maps embed for Mahim Dargah location
7. No backend API calls needed — purely static content
