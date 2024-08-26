import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import iconNek from "@/public/icons/iconeNek.png";
import Link from "next/link";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nek - Marketing digital para aumentar suas vendas!",
  description: "Nek | Marketing digital - Aumente suas vendas no digital, Desenvolvimento de software, Marketing Digital, Manunteção de sistemas, Gestão de Tráfego",
  icons: {
    icon: '/icon.ico', // /public path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
      
      </head>
      <body className={montserrat.className}>
       
          <Script
            id="facebook-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
                  n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1172490183757193');
                fbq('track', 'PageView');
              `,
            }}
          />
       
        <noscript>
         
        </noscript>
        {children}
      </body>
    </html>
  );
}
