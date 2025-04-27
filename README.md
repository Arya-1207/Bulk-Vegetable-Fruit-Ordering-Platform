# Bulk Vegetable/Fruit Ordering App

A responsive platform for buyers and admins to manage bulk orders.

## Features
- Browse Products
- Place Orders
- Track Orders
- Admin Dashboard
- Update Order Status
- Manage Products

## Tech Stack
- Next.js 14
- TailwindCSS
- PostgreSQL (Neon.tech)
- Prisma ORM

## Setup
1. Clone repo
2. Setup `.env` file
3. Run `npm install`
4. Migrate DB: `npx prisma db push`
5. Run app: `npm run dev`

# Deployment Instructions

After updating these files, follow these steps to fix the "No products available" issue:

## 1. Remove Conflicting API Routes

First, delete the files that are causing conflicts between Pages Router and App Router:

- Delete `pages/api/admin/orders.ts`
- Delete `pages/api/orders/[id].ts`
- Delete `pages/api/orders.ts`

## 2. Update Database Schema and Seed Data

After deploying your updated code:

1. Connect to your database and run migrations:
   ```bash
   npx prisma migrate reset --force
   # OR
   npx prisma db push
   ```

2. Run the seed script to populate the database:
   ```bash
   npm run seed
   ```

## 3. Rebuild and Deploy

```bash
npm run build
npm start
```

## 4. Vercel Specific Instructions

If deploying on Vercel:

1. Add a build command that includes seeding the database:
   ```
   prisma generate && prisma db push && npm run seed && next build
   ```

2. Make sure you've set up the correct `DATABASE_URL` in your environment variables.

3. For production deployments, you might want to manually seed your database once rather than on every deployment. In that case, run:
   ```
   npx prisma db push
   npm run seed
   ```

## 5. Troubleshooting

If products still don't appear:

1. Check the browser console and network tab for errors
2. Verify the database connection is working
3. Test your API routes directly (visit `/api/products` in your browser) 
4. Check your PostgreSQL database to ensure products were actually added
