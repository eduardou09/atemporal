import Aos from 'aos';
import React, { useEffect } from 'react';

const Footer = () => {
    const whatsappNumber = '+5548991986447'; // Seu número de WhatsApp
    useEffect(() => {
        // Código que depende do DOM aqui
        Aos.init({
            offset: 100,
            delay: 0,
            duration: 1300,
            easing: 'ease',
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    
    })
    return (
        <footer className="bg-secondaryColor text-white py-4" >
            <div className="container mx-auto flex justify-between flex-col items-center">
                <div className="text-center">
                    <p>&copy; 2024 Nek Digital. Todos os direitos reservados.</p>
                </div>
                
                <div className="text-center mt-10">
                    <p>Redes sociais:</p>
                    <ul className="flex gap-4">
                    <li><a href={`https://wa.me/${encodeURIComponent(whatsappNumber)}`} className="underline" target='blank'>WhatsApp</a></li>
                        <li><a href="https://www.instagram.com/nek.digital/" className="underline" target='blank'>Instagram</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer