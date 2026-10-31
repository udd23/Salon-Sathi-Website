import { AuthForm } from "@/components/auth-form";
export const metadata = { title: "Reset password" };
export default function ResetPasswordPage() { return <main className="auth-layout"><AuthForm mode="reset" /></main>; }
