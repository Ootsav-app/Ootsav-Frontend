# Email Service Setup for Ootsav Landing Page

## Overview

The landing page now includes email capture functionality. When users enter their email in the hero section, you'll receive notifications.

## Setup Instructions

### Option 1: Web3Forms (Recommended - Free & Easy)

1. **Get Your Access Key:**

   - Go to [https://web3forms.com](https://web3forms.com)
   - Click "Get Started for Free"
   - Enter your email address (this is where you'll receive form submissions)
   - Verify your email
   - Copy your Access Key

2. **Update the Code:**

   - Open `src/components/HeroSection.tsx`
   - Find line 28: `access_key: "YOUR_WEB3FORMS_ACCESS_KEY"`
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key

3. **That's it!** When users submit their email, you'll receive notifications at the email you registered with Web3Forms.

### Option 2: Alternative Email Services

#### EmailJS

- Free tier: 200 emails/month
- Setup: [https://www.emailjs.com](https://www.emailjs.com)

#### FormSubmit

- Free and simple
- Setup: [https://formsubmit.co](https://formsubmit.co)

#### Custom Backend API

If you want to use your own backend:

```typescript
// Replace the fetch call in HeroSection.tsx with:
const response = await fetch("YOUR_API_ENDPOINT", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: email,
  }),
});
```

## Features

- ✅ Email validation
- ✅ Loading states during submission
- ✅ Success/error messages
- ✅ Form resets after successful submission
- ✅ Responsive design
- ✅ Disabled state during submission

## Testing

1. Start the development server: `npm run dev`
2. Open the landing page
3. Enter an email in the input field
4. Click "Start for free"
5. Check your registered email for the notification

## Support

For issues with Web3Forms, visit their documentation: [https://docs.web3forms.com](https://docs.web3forms.com)
