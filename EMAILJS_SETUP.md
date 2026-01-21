# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. For Gmail:
   - Click "Connect Account"
   - Sign in with your Gmail
   - Allow EmailJS to send emails
5. Copy your **Service ID** (e.g., service_xxxxxxx)

## Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact from {{from_name}}

**Body:**
```
Hello {{to_name}},

You have received a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template
5. Copy your **Template ID** (e.g., template_xxxxxxx)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find "Public Key" section
3. Copy your **Public Key** (e.g., xxxxxxxxxxxxxx)

## Step 5: Add Credentials to Your Project
1. Open the `.env` file in your project root
2. Replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
```

## Step 6: Test
1. Restart your dev server: `npm run dev`
2. Go to the contact form on your website
3. Fill out and submit a test message
4. Check your email inbox!

## Troubleshooting

### Form not sending?
- Check browser console for errors
- Verify all three credentials are correct
- Make sure you restarted the dev server after adding credentials

### Not receiving emails?
- Check your spam folder
- Verify the email template variables match
- Check EmailJS dashboard for delivery logs

### Rate Limits (Free Plan)
- 200 emails/month
- Upgrade if you need more

## Security Note
The `.env` file is already added to `.gitignore`, so your credentials won't be committed to Git.

For production deployment (Vercel, Netlify, etc.), add these environment variables in your hosting platform's dashboard.
