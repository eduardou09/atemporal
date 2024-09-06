"use client"
import { useEffect, useState, ChangeEvent } from "react";

import { supabase } from "@/config/supabaseClient";
import Input from "@/components/Input/input";
import Button from "@/components/Button/button";
import { useRouter } from "next/navigation";

const Register = () => {
    const [message, setMessage] = useState('');
    const [value, setValue] = useState<any>({
        email: "",
        password: "",
    });
    const router = useRouter();

    const handleRegister = async () => {
        const { data, error } = await supabase.auth.signUp({
            email: value.email,
            password: value.password
        });

        if (error) {
            console.error('Erro ao logar:', error.message);
            setMessage('Falha no login: ' + error.message);
        } else {
            console.log('Usuário logado', data.user);
            setMessage('Login bem-sucedido!');
            router.push('/in/login'); // Usando o router do Next.js para redirecionar
        }
    };

    const handleChange = (field: any, value: string) => {
        setValue((prevState: any) => ({
            ...prevState,
            [field]: value,
        }));
    };

    return (
        <div className="bg-primaryColor w-full h-screen flex justify-center items-center">
            <div className="w-3/5 flex">
                <div className="flex-col flex items-center w-2/4 py-20 px-5 gap-10 w-full">
                    <div className="w-full flex flex-col items-center">
                        <h1 className="text-4xl font-semibold mb-6">Registrar</h1>
                        <Input
                            label="E-mail"
                            type="email"
                            placeholder="Email"
                            value={value.email || ""}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("email", e.target.value)}
                        />
                        <Input
                            label="Senha"
                            type="password"
                            placeholder="Senha"
                            value={value.password || ""}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("password", e.target.value)}
                        />
                    </div>
                    <Button width="w-full py-2 " onClick={handleRegister} title="Entrar"></Button>
                </div>
                <div className="w-2/4">
                    foto
                </div>
            </div>
        </div>
    );
};

export default Register;