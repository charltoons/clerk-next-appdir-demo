import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { auth, SignedIn, SignedOut, SignIn } from "@clerk/nextjs/app-beta";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { userId } = auth();
  return (
    <main className={[styles.main, inter.className].join(" ")}>
      <h1>Next.js 13 with Clerk</h1>
      <pre>User ID: {userId}</pre>
      <SignedIn>
        <h2>Signed In</h2>
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </main>
  );
}
