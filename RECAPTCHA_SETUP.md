# Google reCAPTCHA Setup Guide for XtendSales Contact Form

This guide will help you set up Google reCAPTCHA v2 to protect your contact form from spam and bot submissions.

## Step 1: Create a Google reCAPTCHA Account

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create)
2. Sign in with your Google account
3. Click **"+"** to create a new site

## Step 2: Configure Your reCAPTCHA Site

### Site Configuration:

1. **Label**: Enter a descriptive name (e.g., "XtendSales Contact Form")
2. **reCAPTCHA type**: Select **"reCAPTCHA v2"**
3. **Sub-type**: Choose **"I'm not a robot" Checkbox**
4. **Domains**: Add your website domains:
   - For development: `localhost` or `127.0.0.1`
   - For production: `yourdomain.com` (without http/https)
   - Example: `xtendsales.com`
5. **Owners**: Add additional Google accounts if needed
6. **Accept Terms**: Check the reCAPTCHA Terms of Service
7. Click **Submit**

## Step 3: Get Your Site Key

After creating the site, you'll see:

- **Site Key** (Public key) - This goes in your frontend code
- **Secret Key** (Private key) - This is for server-side verification (optional)

Copy the **Site Key** - you'll need this for your React app.

## Step 4: Update Your Code

Replace the placeholder in your contact form:

```typescript
// In /src/pages/contact/index.tsx
const RECAPTCHA_SITE_KEY = 'your_actual_site_key_here'; // Replace with your Site Key
```

**Example:**

```typescript
const RECAPTCHA_SITE_KEY = '6LdyC2cqAAAAAGGhvvB4FvQ_T5w5J0NvHKWwfKTJ';
```

## Step 5: Domain Configuration

### For Development:

- Add `localhost` to your domains in reCAPTCHA console
- The reCAPTCHA will work on `http://localhost:3000`, `http://localhost:5173`, etc.

### For Production:

- Add your actual domain (e.g., `xtendsales.com`)
- Include both `www` and non-`www` versions if needed:
  - `xtendsales.com`
  - `www.xtendsales.com`

## Step 6: Test Your Setup

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out the form
4. Complete the reCAPTCHA challenge
5. Submit the form

### Testing Scenarios:

- ✅ **With CAPTCHA completed**: Form should submit successfully
- ❌ **Without CAPTCHA**: Should show error message "Please complete the CAPTCHA verification."

## Features Implemented

### ✅ **Security Features:**

- **Bot Protection**: Prevents automated spam submissions
- **Validation**: Form won't submit without CAPTCHA completion
- **Reset Functionality**: CAPTCHA resets after successful submission
- **Error Handling**: Clear error messages for users

### ✅ **User Experience:**

- **Responsive Design**: CAPTCHA scales properly on mobile devices
- **Smooth Integration**: Matches your form's design language
- **Clear Feedback**: Immediate validation feedback
- **Reset on Success**: Form and CAPTCHA clear after submission

## Advanced Configuration (Optional)

### Invisible reCAPTCHA:

If you prefer invisible reCAPTCHA, change the component to:

```jsx
<ReCAPTCHA
  ref={recaptchaRef}
  sitekey={RECAPTCHA_SITE_KEY}
  onChange={handleCaptchaChange}
  size="invisible"
/>
```

### Dark Theme:

For dark theme, change:

```jsx
<ReCAPTCHA
  // ... other props
  theme="dark"
/>
```

### Custom Styling:

The CAPTCHA is wrapped in a container with `scale-90` for better fit. Adjust in the code:

```jsx
<div className="transform scale-90 origin-center">
  <ReCAPTCHA {...props} />
</div>
```

## Troubleshooting

### Common Issues:

1. **"Invalid site key" error**:

   - Check your site key is correct
   - Verify domain is added to reCAPTCHA console

2. **CAPTCHA not loading**:

   - Check internet connection
   - Verify domain configuration
   - Check browser console for errors

3. **"localhost refused to connect"**:

   - Add `localhost` to domains in reCAPTCHA console
   - Use `127.0.0.1` if localhost doesn't work

4. **CAPTCHA too large on mobile**:
   - The `scale-90` class should handle this
   - Adjust scaling in the CSS classes if needed

### Debug Mode:

To debug reCAPTCHA issues, check browser console for error messages.

## Security Best Practices

1. **Never expose secret key**: Keep your secret key on the server-side only
2. **Domain restrictions**: Only add necessary domains to prevent abuse
3. **Monitor usage**: Check reCAPTCHA analytics for unusual activity
4. **Keep updated**: Update the reCAPTCHA library when new versions are available

## Production Checklist

- [ ] Replace placeholder site key with actual key
- [ ] Add production domain to reCAPTCHA console
- [ ] Test form submission with CAPTCHA
- [ ] Verify error handling works
- [ ] Test on mobile devices
- [ ] Monitor reCAPTCHA analytics after deployment

---

For more information, visit the [Google reCAPTCHA Documentation](https://developers.google.com/recaptcha/docs/display).
