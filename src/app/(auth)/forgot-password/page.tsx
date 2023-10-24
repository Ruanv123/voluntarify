import { GenericLink } from "@/components/shared/GenericLink";
import RecoveryForm from "@/components/shared/forms/recovery-form";

const RecoveryPassword = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <GenericLink href="/" className="absolute left-4 top-4">
        Voltar
      </GenericLink>
      <RecoveryForm />
    </main>
  );
};

export default RecoveryPassword;
