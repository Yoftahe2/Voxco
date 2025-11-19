# Voxco Number Ordering Portal

A Next.js application for ordering phone numbers and managing communications services for Voxco Communications.

## Tech Stack

- **Framework**: Next.js 15
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase project (get one at [supabase.com](https://supabase.com))

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `env.example` to `.env.local`
   - Fill in your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── layout.js     # Root layout with AuthProvider
│   ├── page.js       # Home page (orders)
│   ├── sign-in/      # Sign in page
│   ├── sign-up/      # Sign up page
│   ├── numbers/      # Numbers ordering page
│   └── orders/       # Orders page
├── components/       # React components
│   ├── AuthContext.jsx  # Supabase auth context
│   ├── Header.jsx       # Navigation header
│   ├── Sidebar.jsx      # Side navigation
│   ├── Signin.jsx       # Sign in component
│   ├── Signup.jsx       # Sign up component
│   ├── OrdersPage.jsx   # Orders page component
│   └── Numbers.jsx     # Numbers ordering component
├── lib/
│   └── supabase/     # Supabase client utilities
│       ├── client.js    # Browser client
│       ├── server.js    # Server client
│       └── middleware.js # Auth middleware
└── data/
    └── counrty.js    # Country data
```

## Features

- ✅ User authentication with Supabase
- ✅ Protected routes
- ✅ Number ordering interface
- ✅ Product selection (Port IN, Port OUT, SIPTRUNK)
- ✅ Responsive design

## Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API
3. Copy your Project URL and anon/public key
4. Add them to `.env.local`

### Database Schema

The application uses Supabase Auth for user management. Additional tables can be created as needed for:
- Orders
- Number inventory
- Porting requests
- etc.

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Migration from React/Vite

This project was migrated from a React + Vite setup to Next.js with Supabase authentication. Key changes:
- Replaced React Router with Next.js App Router
- Replaced LocalStorage auth with Supabase Auth
- Added server-side authentication checks
- Updated all navigation to use Next.js routing
