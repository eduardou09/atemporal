"use client"
import { ChangeEvent, useEffect, useState } from "react";
import { supabase } from "@/config/supabaseClient";
import Input from "@/components/Input/input";
import Button from "@/components/Button/button";
import TextArea from "@/components/textArea/textArea";
import { DropZone } from "@/components/Dropzone/Dropzone";


const AddToys = () => {
    const [value, setValue] = useState({
        name: "",
        text: "",
        date: "",
        primaryImage: null,
        secondaryImage: null,
        tertiaryImage: null,
    });

    // Função para fazer o upload da imagem
    async function uploadImage(file: File) {
        if (!file) return null;
        const path = file.name;

        if (!path) {
            console.error('Caminho para upload não fornecido');
            return null;
        }

        const { data, error } = await supabase.storage
            .from('Photos') // Nome do bucket no Supabase Storage
            .upload(path, file);

        if (error) {
            console.error('Erro ao fazer upload da imagem:', error.message);
            return null;
        }

        return data.path;
    }

    // Função para obter a URL pública
    function getPublicUrl(path: string): string | null {
        const { data, error } = supabase.storage
            .from('Photos') // Nome do bucket
            .getPublicUrl(path);

        if (error) {
            console.error('Erro ao obter URL pública:', error.message);
            return null;
        }

        console.log('Resposta de getPublicUrl:', data);
        return data?.publicUrl || null;
    }

    const handleChange = (field: any, value: string) => {
        setValue((prevState: any) => ({
            ...prevState,
            [field]: value,
        }));
    };

    // Função para registrar brinquedo
    const handleRegister = async () => {
        try {
            console.log("Iniciando o upload das imagens...");
            const primaryImageUrl = value.primaryImage ? await uploadImage(value.primaryImage) : null;
            const secondaryImageUrl = value.secondaryImage ? await uploadImage(value.secondaryImage) : null;
            const tertiaryImageUrl = value.tertiaryImage ? await uploadImage(value.tertiaryImage) : null;

            console.log("URLs das imagens após upload:", {
                primaryImageUrl,
                secondaryImageUrl,
                tertiaryImageUrl
            });

            // Obter URLs públicas das imagens
            const primaryImagePublicUrl = primaryImageUrl ? getPublicUrl(primaryImageUrl) : null;
            const secondaryImagePublicUrl = secondaryImageUrl ? getPublicUrl(secondaryImageUrl) : null;
            const tertiaryImagePublicUrl = tertiaryImageUrl ? getPublicUrl(tertiaryImageUrl) : null;

            console.log("URLs públicas das imagens:", {
                primaryImagePublicUrl,
                secondaryImagePublicUrl,
                tertiaryImagePublicUrl
            });

            // Inserir dados no banco de dados
            const { data, error } = await supabase
                .from('Toys') // Nome da tabela
                .insert([
                    { 
                        date: value.date,
                        name: value.name,
                        primaryImageUrl: primaryImagePublicUrl,
                        secondaryImageUrl: secondaryImagePublicUrl,
                        tertiaryImageUrl: tertiaryImagePublicUrl,
                        text: value.text
                    }
                ]);

            if (error) {
                console.error('Erro ao inserir dados:', error.message);
                throw error;
            } else {
                console.log('Dados inseridos com sucesso:', data);
            }
        } catch (error) {
            console.error('Erro inesperado:', error);
        }
    }

    return (
        <div className="bg-primaryColor w-full h-screen flex justify-center items-center">
            <div className=" w-3/5 flex ">
                <div className="flex-col flex items-center w-2/4 py-20 px-5 gap-10">
                    <div className="w-full flex flex-col items-center gap-8">
                        <h1 className="text-4xl font-semibold mb-6">Novo Brinquedo</h1>
                        <Input
                            label="Nome do Brinquedo"
                            type="text"
                            placeholder="Nome do Brinquedo"
                            value={value.name || ""}
                            onChange={(e:any) => handleChange("name", e.target.value)}
                        />
                        <TextArea
                            label="Texto principal"
                            placeholder="Digite o texto principal sobre o brinquedo"
                            value={value.text || ""}
                            onChange={(e:any) => handleChange("text", e.target.value)}
                        />
                        <Input
                            label="Data"
                            type="date"
                            placeholder="00/00/00"
                            value={value.date || ""}
                            onChange={(e:any) => handleChange("date", e.target.value)}
                        />
                    </div>

                    <Button width="w-full py-2" onClick={handleRegister} title="Entrar"></Button>
                </div>
                 <div className="w-2/4">
                 <DropZone
                        onChange={(valueImage:any) => handleChange("primaryImage", valueImage[0])}
                        img={value.primaryImage}
                        width={"w-96"}
                    />
                    <DropZone
                        onChange={(valueImage:any) => handleChange("secondaryImage", valueImage[0])}
                        img={value.secondaryImage}
                        width={"w-96"}
                    />
                    <DropZone
                        onChange={(valueImage:any) => handleChange("tertiaryImage", valueImage[0])}
                        img={value.tertiaryImage}
                        width={"w-96"}
                    />
                </div>

            </div>
        </div>
    );
};

export default AddToys;
