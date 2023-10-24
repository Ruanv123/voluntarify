import { GenericLink } from "@/components/shared/GenericLink";
import RegisterForm from "@/components/shared/forms/register-form";

const RegisterPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <GenericLink href="/" className="absolute left-4 top-4">
        Voltar
      </GenericLink>
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
