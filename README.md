## To reproduce the issue

- Copy `.env.local.example` to `.env.local` and fill in the values from your Clerk app.
- `pnpm install`

Dev server works fine, `pnpm dev`. The issue only occurs on a production build
- `pnpm build`
- `npx next start`
- Load http://localhost:3000, see error in server logs