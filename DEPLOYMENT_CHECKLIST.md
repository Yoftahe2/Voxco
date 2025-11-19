# Deployment Checklist for Voxco Portal

## ✅ Pre-Deployment Checklist

### 1. Environment Variables
Make sure these are set in your deployment platform:

**Required:**
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon/public key

**How to get these:**
1. Go to your Supabase project dashboard
2. Navigate to Settings → API
3. Copy:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - anon/public key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 2. Platform-Specific Setup

#### Vercel
1. Go to Project Settings → Environment Variables
2. Add both variables for **Production**, **Preview**, and **Development**
3. Redeploy after adding variables

#### Netlify
1. Go to Site Settings → Environment Variables
2. Add both variables
3. Create `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

#### Railway / Render / Other
1. Add environment variables in platform settings
2. Ensure Node.js version is 18+ (check `package.json` engines if needed)

### 3. Build Verification
Before deploying, test locally:
```bash
# Set environment variables in .env.local
npm run build
npm run start
```

### 4. Common Issues & Solutions

#### Issue: MIDDLEWARE_INVOCATION_FAILED
**Cause:** Missing or incorrect environment variables

**Solution:**
1. Verify environment variables are set correctly
2. Check for typos (especially `NEXT_PUBLIC_` prefix)
3. Ensure variables are set for the correct environment
4. Redeploy after setting variables

#### Issue: 500 Internal Server Error
**Cause:** Middleware or server-side code failing

**Solution:**
1. Check deployment logs for specific error messages
2. Verify Supabase credentials are correct
3. Ensure Supabase project is active
4. Check network connectivity to Supabase

### 5. Testing After Deployment

1. **Test Authentication:**
   - Try signing up
   - Try signing in
   - Check if protected routes redirect correctly

2. **Test Routes:**
   - `/` - Should redirect to sign-in if not authenticated
   - `/sign-in` - Should load sign-in page
   - `/sign-up` - Should load sign-up page
   - `/numbers` - Should require authentication
   - `/orders` - Should require authentication

3. **Check Console:**
   - Open browser DevTools
   - Check for any console errors
   - Check Network tab for failed requests

### 6. Monitoring

After deployment, monitor:
- Application logs in your deployment platform
- Supabase dashboard for authentication activity
- Error tracking (if set up)

## Quick Fix for Current Error

If you're seeing `MIDDLEWARE_INVOCATION_FAILED`:

1. **Check Environment Variables:**
   - Go to your deployment platform's environment variables
   - Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set
   - Make sure there are no extra spaces or quotes

2. **Redeploy:**
   - After setting/updating variables, trigger a new deployment

3. **Verify Supabase:**
   - Make sure your Supabase project is active
   - Check that the URL and key are correct

The middleware has been updated with error handling, so it should gracefully handle missing environment variables, but you still need to set them for the app to work properly.

