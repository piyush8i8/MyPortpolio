# EmailJS Setup Guide

This guide will help you set up EmailJS for client-side email functionality in your portfolio website.

## 🚀 Quick Setup

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy the **Service ID** (you'll need this later)

### 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```html
Subject: {{subject}} - Portfolio Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form at {{timestamp}}
Reply to: {{reply_to}}
```

4. Copy the **Template ID**

### 4. Get Public Key
1. Go to **Account** > **General**
2. Copy your **Public Key**

### 5. Environment Variables
Create a `.env` file in your client folder with:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## 📧 Email Providers Setup

### Gmail Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security > 2-Step Verification > App passwords
   - Generate password for "Mail"
3. Use your Gmail address and the app password in EmailJS

### Outlook/Hotmail Setup
1. Go to Account Security settings
2. Enable 2-factor authentication
3. Generate an App Password
4. Use your Outlook email and app password

## 🔧 Template Variables

The following variables are available in your email template:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject (or default)
- `{{message}}` - Message content
- `{{to_name}}` - Your name (recipient)
- `{{to_email}}` - Your email (recipient)
- `{{reply_to}}` - Reply-to address (sender's email)
- `{{timestamp}}` - When the email was sent

## 🎨 Advanced Template Example

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; }
        .content { padding: 20px; }
        .footer { background: #f8f9fa; padding: 15px; font-size: 12px; color: #6c757d; }
    </style>
</head>
<body>
    <div class="header">
        <h2>New Portfolio Contact Message</h2>
    </div>
    <div class="content">
        <h3>Contact Details:</h3>
        <p><strong>Name:</strong> {{from_name}}</p>
        <p><strong>Email:</strong> {{from_email}}</p>
        <p><strong>Subject:</strong> {{subject}}</p>
        
        <h3>Message:</h3>
        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px;">
            {{message}}
        </div>
    </div>
    <div class="footer">
        <p>This message was sent from your portfolio contact form at {{timestamp}}</p>
    </div>
</body>
</html>
```

## 🔒 Security Notes

1. **Never expose your private key** - Only use the public key in client-side code
2. **Rate limiting** - EmailJS has built-in rate limiting to prevent spam
3. **Domain whitelist** - You can restrict which domains can use your EmailJS service
4. **Template validation** - Always validate user inputs before sending

## 🚨 Troubleshooting

### Common Issues:

**Error: "Invalid template ID"**
- Check that your template ID is correct
- Ensure the template is published (not in draft)

**Error: "Invalid service ID"**
- Verify your service ID is correct
- Make sure the service is active

**Error: "Authentication failed"**
- Check your email provider credentials
- For Gmail, ensure you're using an App Password, not your regular password

**Emails not being received:**
- Check spam folder
- Wait up to 5 minutes for delivery
- Verify the recipient email in your template is correct

**Rate limiting errors:**
- EmailJS free plan has limits (200 emails/month)
- Wait before sending more emails
- Consider upgrading your plan

## 📱 Testing

1. Test in development first
2. Check browser console for errors
3. Verify emails are received
4. Test form validation
5. Test with different email providers

## 🎯 Free Plan Limits

- 200 emails per month
- 2 email services
- 2 email templates
- Basic support

## 🔄 Migration from Server-Side

If you're migrating from a server-side email solution:

1. Remove server-side email routes
2. Update client-side code to use EmailJS
3. Set up environment variables
4. Test thoroughly
5. Update deployment configuration

## 📞 Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Community Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

Your portfolio contact form will now work without a backend server! 🎉
