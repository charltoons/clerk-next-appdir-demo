## To reproduce the issue

- Copy `.env.local.example` to `.env.local` and fill in the values from your Clerk app.
- `pnpm install`

Dev server works fine, `pnpm dev`. The issue only occurs on a production build
- `pnpm build`
- `npx next start`
- Load http://localhost:3000, see error in server logs

https://user-images.githubusercontent.com/1111308/215374956-0ed5b262-8c1e-4ebb-b646-2d89e8549b8a.mov
