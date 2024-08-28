"use client"


import { ChangeEvent, useEffect, useRef, useState } from "react"

import { supabase } from "@/config/supabaseClient"

import { alertError, alertSuccess } from "@/components/Alert/alert"


import Sidebar from "@/components/Sidebar/sidebar"
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table"
import { User } from "@supabase/supabase-js"


const Dashboard = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            console.error('Erro ao autenticar:', error.message);
            alert('Falha na autenticação');
        } else {
            setUser(data.user);
            console.log('Usuário autenticado:', data.user);
        }
    };

    return (
       <div>
            <h1>Login</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Entrar</button>

            {user && (
                <div>
                    <h2>Bem-vindo, {user.email}</h2>
                </div>
            )}
        </div>
    );
};

export default Dashboard;