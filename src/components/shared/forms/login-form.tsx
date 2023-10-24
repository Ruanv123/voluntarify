"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import { Text } from "../Text";
import { Checkbox } from "@/components/ui/checkbox";
import { GenericLink } from "../GenericLink";

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await signIn("credentials", {
        redirect: false,
        email: formFields.email,
        password: formFields.password,
        callbackUrl,
      });

      setLoading(false);

      if (!res?.error) {
        router.refresh();
        router.push("/private");
      } else {
        toast.error(res.error);
        router.refresh();
      }
    } catch (error) {
      toast.error("ocorreu um error!", {
        description: `${error}`,
        icon: <AlertCircle color="red" />,
      });
      console.log(error);
      router.refresh();
    }
  };

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="flex w-full max-w-[400px] flex-col gap-4 rounded-xl bg-white p-5 shadow-lg">
      <div className="flex flex-col items-start gap-1">
        <Text size="h2" text="Login" weight="bold" />
        {/* <Text size="base" text="Acesso a sua conta" /> */}
      </div>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-center gap-3"
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">E-mail</Label>
          <Input
            placeholder="E-mail"
            type="email"
            id="email"
            onChange={handleChange}
            name="email"
            className="w-full rounded-sm"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Pasword</Label>
          <Input
            placeholder="Password"
            type="password"
            id="password"
            onChange={handleChange}
            name="password"
          />
          <div className="flex items-center justify-between py-1">
            {/* checkbox lembrar me */}
            <div className="flex items-center space-x-2">
              <Checkbox />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Lembrar-me
              </label>
            </div>
            {/* link esqueci minha senha */}
            <GenericLink
              href="/forgot-password"
              className="text-sm font-medium text-blue-500"
            >
              Esqueci minha senha?
            </GenericLink>
          </div>
        </div>
        <Button type="submit" className="w-full font-bold" disabled={loading}>
          {loading ? "Loading..." : "Entrar"}
        </Button>
      </form>
      <div className="flex gap-1">
        <Text size="base" text="Não tem uma conta?" />
        <GenericLink href="/register" className="text-base text-blue-500">
          Cadastre-se
        </GenericLink>
      </div>
    </div>
  );
};

export default LoginForm;
