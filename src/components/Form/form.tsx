"use client"
import Header from "@/components/Header/Header"
import Input from "@/components/Input/input"
import TextArea from "@/components/textArea/textArea"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import useStore from "@/utils/containerForm"
import Button from "@/components/Button/button"
import { supabase } from "@/config/supabaseClient"
import useStoreMain from "@/utils/stateSite"
import { alertError, alertSuccess } from "@/components/Alert/alert"
import { Toaster } from "react-hot-toast"
import Footer from "@/components/Footer/footer"
import Aos from "aos"



const Form = () => {
    // const { values, setValues } = useStore();

    const [value, setValue] = useState<any>({
        name: "",
        email: "",
        number: "",
        about: "",
    })
    
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const { isHeader, setIsHeader, form } = useStoreMain();
    const handleChange = (field: any, value: string) => {
        setValue((prevState: any) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleServiceChange = (service: string) => {
        setValue((prevState: any) => ({
            ...prevState,
            [service]: !prevState[service]
        }));
    };



    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission

        if (!value.name || !value.email || !value.number || !value.about) {
            alertError('Por favor, preencha todos os campos.');
            return;
        } else {
            
            await SaveForm({ ...value });
            setValue({
                name: '',
                email: '',
                number: '',
              
            });

            alertSuccess('Sucesso ao enviar o formulário, em instantes receberá o retorno.');
        } 
    }

    const SaveForm = async (values: any) => {
        if (values) {
            try {
                const { data, error } = await supabase
                    .from('formMain')
                    .insert([values]); // Insere os valores diretamente
    
                if (error) {
                    console.error('Erro ao inserir no banco de dados:', error.message);
                    return null; // Trate o erro de forma adequada
                }
    
                console.log('Dados inseridos com sucesso:', data);
                return data; // Retorna os dados inseridos, se necessário
            } catch ({error}:any) {
                console.error('Erro ao executar a operação:', error.message);
                return null; // Trate o erro de forma adequada
            }
        }
    };



    const serviceRef = useRef<HTMLDivElement | null>(null)
    const aboutRef = useRef<HTMLDivElement | null>(null)


    const handleClick = () => {
        setIsHeader(!isHeader)
    }
    useEffect(() => {
        // Código que depende do DOM aqui
        Aos.init({
            offset: 400,
            delay: 0,
            duration: 1300,
            easing: 'ease',
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    
    })

    console.log(value)

    return (

        <div className=" bg-secondaryColor  py-14  " >
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
         
            <div className="   flex items-center flex-col max-lg:flex-col" >
                <div className=" flex bg-secondaryColor max-lg:flex-col p-3 justify-between gap-10 max-lg:px-24 max-md:px-3"  >
                    <div className="flex items-start justify-center flex-col  gap-3 px-3">
                        <h2 className="text-3xl text-white font-semibold max-md:text-3xl ">
                        Faça sua empresa crescer em menos de 30 segundos.
                        </h2>
                        <div className="w-10 bg-white h-[1px]" />
                        <p className="text-white">
                            Preencha o formulário ao lado e receba um retorno de um especialista em até 8 horas.
                        </p>
                        
                    </div>
                    
                        <div className=" bg-neutral-800 rounded-3xl w-3/4 max-md:w-full   border border-neutral-600" data-aos="fade-up ">
                            <div  className="flex flex-wrap gap-2 p-5 flex-col" >
                              
                               
                                <div className="flex flex-col gap-3">
                                    <Input
                                        type="text"
                                        placeholder="Digite seu nome"
                                        label="Nome"
                                        value={value.name || ""}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("name", e.target.value)}
                                    />
                                    <Input
                                        type="text"
                                        placeholder=" Digite se número"
                                        label="Número"
                                        value={value.number || ""}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("number", e.target.value)}
                                    />
                                    <Input
                                        type="text"
                                        label="Email"
                                        placeholder="Digite se email"
                                        value={value.email || ""}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("email", e.target.value)}
                                    />
                                     <div className="flex flex-col gap-2 mt-1 text-white">
                                    Conte-nos mais sobre sua empresa
                                    <TextArea
                                        placeholder="Conte-nos mais sobre sua nescessidade"
                                        value={value.about || ""}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("about", e.target.value)}
                                    />
                                </div>

                                    <Button
                                        title="Enviar"
                                        padding="py-3"
                                        radius="rounded-xl "
                                        onClick={handleSave}
                                        disabled={isButtonEnabled}
                                    />
                                </div>

                            </div>
                        </div>
                    
                </div>
              
            </div>
          
        </div>
    )


}
export default Form