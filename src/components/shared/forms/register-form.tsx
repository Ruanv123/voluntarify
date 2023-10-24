"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Text } from "../Text";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AlertCircle, Columns } from "lucide-react";

interface FormFields {
  email: string;
  password: string;
  UserType: string;
  name: string;
}

const RegisterForm = () => {
  const { register, control, handleSubmit, watch } = useForm<FormFields>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormFields) => {
    try {
      setLoading(true);
      const response = await fetch("/api/user/create", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Conta criada com sucesso!");
      router.push("/login");

      setLoading(false);
      if (!response.ok) {
        alert("Erro ao criar conta");
        router.refresh();
        return;
      }
    } catch (error) {
      setLoading(false);
      toast.error("ocorreu um error!", {
        description: `${error}`,
        icon: <AlertCircle color="red" />,
      });
    }
  };

  return (
    <div className="flex w-full max-w-[400px] flex-col gap-4 rounded-xl bg-white p-5 shadow-lg">
      <Text size="h2" text="Registre-se" weight="bold" />
      <form
        className="flex flex-col items-center gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">E-mail</Label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder="email"
                name="email"
                type="email"
                id="email"
                className="w-full rounded-sm"
              />
            )}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder="password"
                name="password"
                type="password"
                id="password"
                className="w-full rounded-sm"
              />
            )}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="userType">Tipo de conta</Label>
          <Controller
            name="UserType"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select onValueChange={field.onChange} {...field} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Tipo de conta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="VOLUNTARIO">Voluntario</SelectItem>
                  <SelectItem value="EMPRESA">Empresa</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        {watch("UserType") === "VOLUNTARIO" && (
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Nome</Label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="name"
                  name="name"
                  type="name"
                  id="name"
                  className="w-full rounded-sm"
                />
              )}
            />
          </div>
        )}
        {watch("UserType") === "EMPRESA" && (
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Razao Social</Label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="razão social"
                  name="name"
                  type="name"
                  id="name"
                  className="w-full rounded-sm"
                />
              )}
            />
          </div>
        )}

        <Button type="submit" disabled={loading} className="w-full font-bold">
          {loading ? "Loading..." : "Cadastre-se"}
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
