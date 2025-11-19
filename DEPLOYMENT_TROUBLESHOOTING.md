# Deployment Troubleshooting Guide

## Middleware Error: MIDDLEWARE_INVOCATION_FAILED

### Common Causes

1. **Missing Environment Variables**
   - The middleware requires `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - These must be set in your deployment platform's environment variables

2. **Environment Variable Configuration**
   - Make sure variables are set in your deployment platform (Vercel, Netlify, etc.)
   - Variables must start with `NEXT_PUBLIC_` to be available in middleware

### Solution

The middleware has been updated with error handling to prevent crashes. However, you need to:

1. **Set Environment Variables in Your Deployment Platform**

   For Vercel:
   - Go to Project Settings → Environment Variables
   - Add:
     - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase project URL
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon key

   For Netlify:
   - Go to Site Settings → Environment Variables
   - Add the same variables

   For Other Platforms:
   - Add the environment variables in your platform's settings

2. **Verify Environment Variables**
   - Make sure there are no typos
   - Ensure they're set for the correct environment (Production, Preview, Development)

3. **Redeploy After Setting Variables**
   - After adding environment variables, trigger a new deployment

### Testing Locally

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Then test with:
```bash
npm run build
npm run start
```

### Updated Middleware

The middleware now includes:
- ✅ Error handling for missing environment variables
- ✅ Graceful fallback if Supabase is not configured
- ✅ Error logging for debugging
- ✅ Prevents middleware from crashing the app

If Supabase environment variables are missing, the middleware will allow requests to proceed, letting the pages handle authentication.

