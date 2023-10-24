import { Label } from "@/components/ui/label";
import { Text } from "../Text";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const RecoveryForm = () => {
  return (
    <div className="flex w-full max-w-[400px] flex-col gap-4 rounded-xl bg-white p-5 shadow-lg">
      <div className="flex flex-col items-start gap-1">
        <Text size="h2" text="Esqueceu a senha" weight="bold" />
        <Text
          size="base"
          text="Insira o endereço de email associado à sua conta que lhe enviaremos um link de redefinição de senha."
        />
      </div>
      <form className="flex flex-col items-center gap-3">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">E-mail</Label>
          <Input
            placeholder="E-mail"
            type="email"
            id="email"
            className="w-full rounded-sm"
          />
        </div>
        <Button className="mt-2 w-full" disabled>
          Enviar link de redefinição
        </Button>
      </form>
    </div>
  );
};

export default RecoveryForm;
