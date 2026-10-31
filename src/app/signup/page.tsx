import { AuthForm } from "@/components/auth-form";
export const metadata = { title: "Create an account" };
export default function SignupPage() { return <main className="auth-layout"><AuthForm mode="signup" /></main>; }
