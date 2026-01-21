# Bhigwan Bird Sanctuary - React App

A modern, responsive React website for a bird sanctuary in Maharashtra with booking system, packages, testimonials, and WhatsApp integration.

## Features

- ✅ **Hero Section** - Video background with call-to-action
- ✅ **Packages Display** - Basic and Premium packages with detailed features
- ✅ **Booking Form** - Interactive form with WhatsApp integration
- ✅ **Testimonials** - 15 testimonials from real visitors
- ✅ **WhatsApp Button** - Floating chat button for instant communication
- ✅ **Fully Responsive** - Mobile, tablet, and desktop optimized
- ✅ **Modern Design** - Beautiful gradients and animations

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd bhigwan-birds
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── components/
│   ├── Navbar.js & Navbar.css
│   ├── Hero.js & Hero.css
│   ├── Packages.js & Packages.css
│   ├── Booking.js & Booking.css
│   ├── Testimonials.js & Testimonials.css
│   ├── Footer.js & Footer.css
│   └── WhatsAppButton.js & WhatsAppButton.css
├── App.js
├── index.js
└── index.css
```

## Customization

### Add Your Video
Replace the video source in `Hero.js`:
```javascript
<source src="your-video.mp4" type="video/mp4" />
```

### Update WhatsApp Number
Update the WhatsApp number in:
- `Booking.js`
- `Footer.js`
- `WhatsAppButton.js`

Replace `919876543210` with your actual WhatsApp number (country code + number without +)

### Add Package Images
To add package images, update the `Packages.js` component with image tags.

### Update Contact Information
Modify the contact details in `Footer.js`

## Features Details

### 1. Hero Section
- Auto-playing video background
- Smooth scrolling navigation
- Call-to-action button

### 2. Packages
- Two package options (Basic & Premium)
- Feature comparison
- Dynamic form population on selection

### 3. Booking Form
- Form validation
- Direct WhatsApp messaging
- Email, phone, date, and guest count fields

### 4. Testimonials
- 15 visitor reviews from Maharashtra
- Star ratings
- Responsive grid layout

### 5. WhatsApp Integration
- Floating button with pulse animation
- Pre-filled booking messages
- Available on all pages

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Technologies Used

- React 18.2.0
- CSS3 (Flexbox & Grid)
- Font Awesome Icons
- WhatsApp Web API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Bhigwan Bird Sanctuary. All rights reserved.

## Support

For questions or customizations, please contact through WhatsApp or email.
