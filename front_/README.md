# Portfolio - Next.js + Prisma + MySQL

A modern portfolio built with Next.js 14, Prisma ORM, and MySQL. All content is managed through a MySQL database and fetched statically at build time for optimal performance on Vercel.

## Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Database ORM**: Prisma
- **Database**: MySQL
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- MySQL database
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd front_
```

2. Install dependencies:
```bash
npm install
```

3. Set up your environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your MySQL connection string:
```
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
```

4. Generate Prisma client:
```bash
npm run db:generate
```

5. Push the schema to your database:
```bash
npm run db:push
```

6. Seed your database (optional - add your own data):
```bash
# You can use Prisma Studio or create seed scripts
npm run db:studio
```

7. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push Prisma schema to database
- `npm run db:studio` - Open Prisma Studio

## Database Schema

The portfolio uses the following models:

- **Profile**: Personal information (name, title, description, contact info)
- **Skill**: Technical skills with levels and categories
- **Project**: Portfolio projects with categories and technologies
- **Category**: Project categories
- **Technology**: Technologies used in projects
- **Experience**: Work experience
- **Education**: Educational background
- **Social**: Social media links
- **Contact**: Contact form submissions
- **Setting**: Site settings

## Deployment on Vercel

1. Push your code to GitHub/GitLab/Bitbucket

2. Connect your repository to Vercel

3. Add the `DATABASE_URL` environment variable in Vercel:
   - Go to Project Settings → Environment Variables
   - Add `DATABASE_URL` with your MySQL connection string
   - For production databases, consider using a service like PlanetScale, Railway, or AWS RDS

4. Deploy!

Vercel will automatically:
- Install dependencies
- Generate the Prisma client
- Build the Next.js application with static data

## Data Management

### Using Prisma Studio
```bash
npm run db:studio
```

### Programmatic Updates
You can update data directly in your database using any MySQL client, or create admin APIs/routes.

## Static Generation

All portfolio data is fetched at build time using `getStaticProps` equivalent in Next.js App Router. This means:

- ✅ Fast page loads (pre-rendered HTML)
- ✅ SEO-friendly
- ✅ No database queries at runtime
- ⚠️ Need to rebuild to show new data

To update content in production, trigger a new deployment via Vercel's webhook or dashboard.

## Customization

### Translations
All text is in English by default. Edit `src/translations.ts` to customize strings.

### Styling
Modify `src/app/globals.css` for global styles.

### Components
Individual sections are in `src/components/`.

## License

MIT
