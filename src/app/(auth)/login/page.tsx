import { GenericLink } from "@/components/shared/GenericLink";
import LoginForm from "@/components/shared/forms/login-form";

const LoginPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <GenericLink href="/" className="absolute left-4 top-4">
        Voltar
      </GenericLink>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
