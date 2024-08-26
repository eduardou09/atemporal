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



const Contact = () => {
    // const { values, setValues } = useStore();

    const [value, setValue] = useState<any>({
        name: "",
        email: "",
        number: "",
        about: "",
        software: false,
        site: false,
        mentorship: false,
        trafficManagement: false,
        softwareMaintenance: false,
    });
    
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

        if (!value.name || !value.email || !value.number || !value.about ||(!value.software && !value.site && !value.mentorship && !value.trafficManagement && !value.softwareMaintenance)) {
            alertError('Por favor, preencha todos os campos.');
            return;
        }

         // Verificar se pelo menos uma opção está marcada
         if (!value.software && !value.site && !value.mentorship && !value.trafficManagement && !value.softwareMaintenance) {
            alertError('Por favor, selecione pelo menos um serviço');
            return;
        } else {
            
            await SaveForm({ ...value });
            setValue({
                name: '',
                email: '',
                number: '',
                about: '',
            });

            alertSuccess('Sucesso ao enviar o formulário, em instantes receberá o retorno.');
        } 
    }

    const SaveForm = async (values: any) => {
        if (values) {
            return await supabase
                .from('form')
                .insert({ ...values })
                .eq('id', values.id); // S
        }
    }



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

    return (

        <div className="bg-black">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Header
                serviceRef={serviceRef}
                isHeader={isHeader}
                handleClick={handleClick}
                isContact={false}
                Contractfirst={"Home"}
                isHome={true}
            />
            <div className='mx-56 max-lg:mx-4  flex items-center flex-col mt-4 mb-32'>
                <div className="w-full flex bg-primaryColor max-h-fit rounded-3xl p-3  max-md:flex-col" data-aos="fade-right">
                    <div className="flex items-center max-md:hidden ">
                        <h2 className="text-5xl text-black font-semibold max-md:text-3xl ">
                            Olá! O que você
                            busca para sua
                            empresa ?
                        </h2>
                    </div>
                    <div>
                        <div className=" bg-secondaryColor rounded-3xl" data-aos="fade-up">
                            <form action="" className="flex flex-wrap gap-2 p-5 flex-col" >
                                <h3 className="text-2xl font-semibold text-white">Entre em Contato</h3>
                                <p className="mt-4 text-white">Selecione o Serviço</p>
                                <div className="flex flex-wrap gap-5 max-md:gap-3">
                                    <button type="button" className={`px-4 py-1 border rounded-xl text-white text-lg ${value.software ? 'border-primaryColor' : 'border-neutral-600'}`}
                                        onClick={() => handleServiceChange('software')}>
                                        Software</button>

                                    <button type="button" className={`px-4 py-1 border rounded-xl text-white text-lg ${value.site ? 'border-primaryColor' : 'border-neutral-600'}`}
                                        onClick={() => handleServiceChange('site')}>
                                        Site</button>

                                    <button type="button" className={`px-4 py-1 border rounded-xl text-white text-lg ${value.mentorship ? 'border-primaryColor' : 'border-neutral-600'}`}
                                        onClick={() => handleServiceChange('mentorship')}>
                                        Mentoria para Empresas</button>

                                    <button type="button" className={`px-4 py-1 border rounded-xl text-white text-lg ${value.trafficManagement ? 'border-primaryColor' : 'border-neutral-600'}`}
                                        onClick={() => handleServiceChange('trafficManagement')}>
                                        Gestão de Tráfego</button>

                                    <button type="button" className={`px-4 py-1 border rounded-xl text-white text-lg ${value.softwareMaintenance ? 'border-primaryColor' : 'border-neutral-600'}`}
                                        onClick={() => handleServiceChange('softwareMaintenance')}>
                                        Manutenção de Software</button>
                                </div>
                                <div className="flex flex-col gap-2 mt-4 text-white">
                                    Conte-nos mais sobre
                                    <TextArea
                                        placeholder="Conte-nos mais sobre sua nescessidade"
                                        value={value.about || ""}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("about", e.target.value)}
                                    />
                                </div>
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
                                        placeholder=" Digite seu número"
                                        label="Número"
                                        value={value.number || ""}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("number", e.target.value)}
                                    />
                                    <Input
                                        type="text"
                                        label="Email"
                                        placeholder="Digite seu E-mail"
                                        value={value.email || ""}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("email", e.target.value)}
                                    />

                                    <Button
                                        title="Enviar"
                                        padding="py-3"
                                        radius="rounded-xl"
                                        onClick={handleSave}
                                        disabled={isButtonEnabled}
                                    />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
              
            </div>
            <Footer/>
        </div>
    )


}
export default Contact